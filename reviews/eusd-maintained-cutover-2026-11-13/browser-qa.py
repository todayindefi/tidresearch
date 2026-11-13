from pathlib import Path
import json,sys,threading,functools,http.server,hashlib
from urllib.parse import urlparse
from playwright.sync_api import sync_playwright
R=Path('/home/danger/tidresearch/reviews/eusd-maintained-cutover-2026-11-13');mode=sys.argv[1];P=json.loads((R/'upstream-first-pointer.json').read_text());server=None
if mode=='local':
 server=http.server.ThreadingHTTPServer(('127.0.0.1',0),functools.partial(http.server.SimpleHTTPRequestHandler,directory='/tmp/eusd-maintained-v2-staging-2026-11-13/dist'));threading.Thread(target=server.serve_forever,daemon=True).start();base=f'http://127.0.0.1:{server.server_port}'
else:base='https://staging.tidresearch.com'
rows=[]
try:
 with sync_playwright() as p:
  b=p.chromium.launch(headless=True)
  for case,width in [('normal',1440),('normal',390),('missing',390),('tampered',390),('failed_latest',390),('stale',390)]:
   page=b.new_page(viewport={'width':width,'height':1000});errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
   if case=='stale':page.add_init_script('const realNow=Date.now.bind(Date);Date.now=()=>realNow()+4*3600*1000;')
   def data_route(route):
    path=urlparse(route.request.url).path.split('/previews/eusd/data/',1)[1]
    if case=='missing' and path=='current.json':return route.fulfill(status=404,body='{}',content_type='application/json')
    if case=='failed_latest' and path=='current.json':
     x=json.loads(json.dumps(P));x['last_attempt']['status']='failed_last_good_retained';return route.fulfill(status=200,body=json.dumps(x),content_type='application/json')
    if case=='tampered' and path.endswith('/assets.json'):return route.fulfill(status=200,body=(R/'first-generation/assets.json').read_bytes()+b' ',content_type='application/json')
    if mode!='local':return route.continue_()
    if path=='current.json':body=(R/'upstream-first-pointer.json').read_bytes()
    elif path==P['manifest']:body=(R/'first-generation-manifest.json').read_bytes()
    elif path.startswith('generations/'+P['generation']+'/') and (R/'first-generation'/path.rsplit('/',1)[1]).is_file():body=(R/'first-generation'/path.rsplit('/',1)[1]).read_bytes()
    else:return route.fulfill(status=404,body='{}',content_type='application/json')
    route.fulfill(status=200,body=body,content_type='application/json')
   page.route('**/previews/eusd/data/**',data_route)
   response=page.goto(base+'/previews/eusd/?asset=eusd',wait_until='networkidle');assert response.status==200
   if case in ['missing','tampered']:
    page.locator('#error-view').wait_for(state='visible');assert not page.locator('#asset-view').is_visible();assert page.locator('#summary-cards .card-value').count()==0
    assert 'Canonical eUSD feed unavailable or failed integrity checks' in page.locator('#error-message').inner_text();row={'case':case,'fail_closed':True}
   else:
    page.locator('#section-backing').wait_for(state='visible');body=page.locator('body').inner_text();assert 'Current basket and actual holdings' in body
    for s in ['peg','backing','liquidity','dependencies','contract','issuer']:assert page.locator('#section-'+s).is_visible()
    cards=page.locator('#summary-cards .card-value').all_inner_texts();assert len(cards)==6 and all(v.strip() not in ['','—'] for v in cards)
    assert page.locator('#section-backing tbody tr').count()==5
    assert 'Invalid Date' not in body and not any(x in body for x in ['/home/','.private-reviews','private_wallet','wallet_balance'])
    selected=page.evaluate('({generation:EusdData.selected.pointer.generation,source_clock:EusdData.selected.pointer.source_clock,files:Object.keys(EusdData.selected.bodies).sort()})');assert len(selected['files'])==4
    row={'case':case,'width':width,'selected':selected,'cards':cards}
    if case=='failed_latest':assert 'Latest collection failed; last-good observation retained.' in body;assert selected['generation']==P['generation'];row['last_good_visible']=True
    if case=='stale':assert 'Backing observation older than expected.' in body;row['stale_visible']=True
    if case=='normal':
     page.screenshot(path=str(R/f'{mode}-{width}.png'),full_page=True);page.evaluate('document.body.classList.add("dark")');page.wait_for_function("getComputedStyle(document.querySelector('.page-header a')).color==='rgb(226, 232, 240)'");page.screenshot(path=str(R/f'{mode}-{width}-dark.png'),full_page=True)
     row['dark_header_color']=page.locator('.page-header .text-slate-800').first.evaluate('e=>getComputedStyle(e).color');assert row['dark_header_color']=='rgb(226, 232, 240)'
   assert not errors,errors;assert page.evaluate('document.documentElement.scrollWidth')<=width
   row.update({'page_errors':errors,'no_overflow':True});rows.append(row);page.close()
  b.close()
finally:
 if server:server.shutdown();server.server_close()
(R/(mode+'-browser.json')).write_text(json.dumps({'all_passed':True,'cases':rows,'temporary_server_closed':bool(server)},indent=2)+'\n');print(mode,'passed',len(rows),'cases')
