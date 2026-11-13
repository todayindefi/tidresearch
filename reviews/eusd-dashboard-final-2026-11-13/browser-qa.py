import asyncio,json,datetime,os
from pathlib import Path
from playwright.async_api import async_playwright
R=Path('/home/danger/tidresearch/reviews/eusd-dashboard-final-2026-11-13')
ROOT=os.environ.get('EUSD_QA_URL','http://127.0.0.1:8904/')
async def main():
 results=[]
 async with async_playwright()as p:
  b=await p.chromium.launch(executable_path='/home/danger/.cache/puppeteer/chrome/linux-154.0.8037.57/chrome-linux64/chrome',headless=True,args=['--no-sandbox'])
  for width in [1440,390]:
   page=await b.new_page(viewport={'width':width,'height':960});errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
   await page.goto(ROOT+'?asset=eusd',wait_until='networkidle');await page.wait_for_timeout(500)
   body=await page.locator('body').inner_text()
   for text in ['Current basket and actual holdings','Indicative sell quotes to USDC','RSR indicative sale comparison','Current receipt lookthrough','distinct Morpho markets','Shared markets are deduplicated','Exact eUSD control observations','72h owner timelock','Premium / discount','Basket-unit coverage history','Not established']:
    assert text.lower() in body.lower(),(text,body[:1000])
   assert 'awaits direct authorization'not in body
   assert 'Exact control review pending'not in body and 'Review pending'not in body
   assert await page.locator('#eusd-peg-history').count()==1
   assert await page.locator('#eusd-backing-history').count()==1
   await page.locator('#section-contract details').first.locator('summary').click()
   assert '259200' in await page.locator('#section-contract').inner_text()
   assert not errors,errors
   assert 'Invalid Date'not in body and 'undefined'not in body and 'NaN'not in body
   assert await page.evaluate('document.documentElement.scrollWidth')==width
   assert await page.locator('#summary-cards .summary-card').count()==6
   generation=await page.evaluate('EusdData.selected.pointer.generation')
   detail=await page.evaluate("(()=>{let p=JSON.parse(EusdData.selected.bodies['eusd_backing.json']).asset_specific.reserve_eusd;return {source_clock:p.source_clock,security:p.contract_admin,binding_count:p.contract_admin.bindings.length,control_count:p.contract_admin.controls.length,gap_count:p.contract_admin.unsupported.length};})()")
   assert (detail['binding_count'],detail['control_count'],detail['gap_count'])==(18,9,7)
   assert not any(v in body for v in ['/home/','.private-reviews','private_wallet','wallet_balance'])
   for theme in ['light','dark']:
    if theme=='dark':await page.evaluate('document.body.classList.add("dark")');await page.wait_for_timeout(400)
    await page.screenshot(path=str(R/f'v3-{os.environ.get("EUSD_QA_KIND","local")}-{width}-{theme}.png'),full_page=True)
   await page.locator('#section-dependencies details').first.locator('summary').click()
   assert await page.locator('#section-dependencies details[open] tbody tr').count()>0
   results.append({'width':width,'generation':generation,'source_clock':detail['source_clock'],'binding_count':18,'control_count':9,'gap_count':7,'js_errors':errors,'six_tiles':True,'no_overflow':True,'quote_rsr_allocation_visible':True})
   await page.close()
  await b.close()
 receipt={'checked_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'url':ROOT,'all_passed':True,'cases':results}
 (R/f'v3-{os.environ.get("EUSD_QA_KIND","local")}-browser.json').write_text(json.dumps(receipt,indent=2)+'\n');print(json.dumps(receipt))
asyncio.run(main())
