import asyncio,json,datetime,hashlib,sys,threading,functools,http.server
from pathlib import Path
from playwright.async_api import async_playwright
R=Path('/home/danger/tidresearch/reviews/eusd-dashboard-preview-2026-11-13')
mode=sys.argv[1]
server=None
if mode=='local':
 server=http.server.ThreadingHTTPServer(('127.0.0.1',0),functools.partial(http.server.SimpleHTTPRequestHandler,directory='/tmp/eusd-prefix-staging-2026-11-13/dist'))
 threading.Thread(target=server.serve_forever,daemon=True).start()
 base=f'http://127.0.0.1:{server.server_port}'
else: base='https://staging.tidresearch.com'
async def main():
 rows=[]
 async with async_playwright() as p:
  b=await p.chromium.launch(executable_path='/home/danger/.cache/puppeteer/chrome/linux-154.0.8037.57/chrome-linux64/chrome',headless=True,args=['--no-sandbox'])
  for width in [1440,390]:
   page=await b.new_page(viewport={'width':width,'height':960});errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
   await page.goto(base+'/previews/eusd/?asset=eusd',wait_until='networkidle');await page.wait_for_timeout(500)
   body=await page.locator('body').inner_text();assert not errors,errors
   assert 'Current basket and actual holdings' in body and 'Exact control review pending' in body and 'STAGED' in body
   assert '23% buffer is not reused' in body and 'Invalid Date' not in body
   assert 'external quote request awaits authorization' in body
   assert 'not yet activated' in body.lower()
   assert 'Unknown' in body and '100.15% basket units' in body
   assert not any(x in body for x in ['/home/','.private-reviews','private_wallet','wallet_balance'])
   sections={s:await page.locator('#section-'+s).is_visible() for s in ['peg','backing','liquidity','dependencies','contract','issuer']};assert all(sections.values())
   cards=await page.locator('#summary-cards .card-value').all_inner_texts();assert len(cards)==6 and all(x.strip()not in ['','—']for x in cards)
   doc=await page.evaluate('document.documentElement.scrollWidth');assert doc==width,(width,doc)
   await page.screenshot(path=str(R/f'{mode}-{width}.png'),full_page=True)
   await page.evaluate('document.body.classList.add("dark")');await page.screenshot(path=str(R/f'{mode}-{width}-dark.png'),full_page=True)
   assert not errors,errors
   assert await page.evaluate('document.documentElement.scrollWidth')==width
   assert await page.locator('#section-backing tbody tr').count()==5
   if width==390:assert await page.locator('[aria-label="Current eUSD basket holdings, scroll horizontally"]').evaluate('e=>e.scrollWidth>e.clientWidth')
   rows.append({'width':width,'document_width':doc,'sections':sections,'cards':cards,'errors':errors,'body_sha256':hashlib.sha256(body.encode()).hexdigest()});await page.close()
  await b.close()
 (R/(mode+'-browser.json')).write_text(json.dumps({'checked_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'cases':rows,'all_passed':True,'coverage':'Reviewable shell with measuredbacking/selectedissuer; market/history/quote/security gaps explicitly unavailable, not a complete reviewed assessment.'},indent=2)+'\n');print(json.dumps(rows))
try: asyncio.run(main())
finally:
 if server: server.shutdown();server.server_close()
