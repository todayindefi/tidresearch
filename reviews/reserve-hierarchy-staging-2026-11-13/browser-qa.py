from pathlib import Path
from urllib.parse import urljoin,urlparse
from bs4 import BeautifulSoup
import json,sys,threading,functools,http.server
from playwright.sync_api import sync_playwright
R=Path('/home/danger/tidresearch/reviews/reserve-hierarchy-staging-2026-11-13');B=Path('/tmp/reserve-hierarchy-staging-2026-11-13/dist');mode=sys.argv[1];server=None
versions={'reserve-protocol':'reserve-protocol-architecture-2026-11-13-v2','reserve-yield-protocol':'reserve-yield-protocol-architecture-2026-11-13-v1','reserve-index-protocol':'reserve-index-protocol-architecture-2026-11-13-v1'}
if mode=='local':
 server=http.server.ThreadingHTTPServer(('127.0.0.1',0),functools.partial(http.server.SimpleHTTPRequestHandler,directory=str(B)));threading.Thread(target=server.serve_forever,daemon=True).start();base=f'http://127.0.0.1:{server.server_port}'
else:base='https://staging.tidresearch.com'
rows=[]
try:
 with sync_playwright() as p:
  browser=p.chromium.launch(headless=True)
  for width in [1440,390]:
   page=browser.new_page(viewport={'width':width,'height':1000});errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
   for slug,version in versions.items():
    response=page.goto(base+'/protocols/'+slug+'/',wait_until='networkidle');assert response.status==200
    article=page.locator('[data-architecture-report]');assert article.get_attribute('data-assessment-version')==version;assert article.get_attribute('data-source-commit')=='15a278e97b8d55c8d987fbe1dda3627e2f29f62d';assert article.get_attribute('data-assessed-chains')=='[]';assert article.get_attribute('data-score-status')=='unscored'
    text=article.inner_text();assert 'Unscored architecture review' in text and '2026-11-13' in text
    contrasts=article.locator('p, a, th').evaluate_all("""els=>els.filter(e=>e.getClientRects().length).slice(0,30).map(e=>{const cv=document.createElement('canvas');cv.width=cv.height=1;const ctx=cv.getContext('2d');const rgb=s=>{ctx.clearRect(0,0,1,1);ctx.fillStyle=s;ctx.fillRect(0,0,1,1);return Array.from(ctx.getImageData(0,0,1,1).data);};const lum=c=>c.slice(0,3).map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4}).reduce((s,v,i)=>s+v*[.2126,.7152,.0722][i],0);let p=e,b=[0,0,0];while(p){let c=rgb(getComputedStyle(p).backgroundColor);if(c.length===3||c[3]>0){b=c;break;}p=p.parentElement;}let f=rgb(getComputedStyle(e).color);f=f.slice(0,3).map((v,i)=>v*f[3]/255+b[i]*(1-f[3]/255));let x=lum(f),y=lum(b);return {text:e.textContent.slice(0,60),ratio:(Math.max(x,y)+.05)/(Math.min(x,y)+.05)};})""")
    assert all(c['ratio']>=4.5 for c in contrasts),contrasts
    for bad in ['Overall score','SCORE BREAKDOWN','0.0/10','Score 0','/home/','profile_source','DeFiAnalyst','private_wallet','wallet_balance','.md)']:assert bad.lower() not in text.lower(),bad
    assert page.locator('iframe').count()==0
    if slug!='reserve-protocol':assert page.locator('nav[aria-label="Protocol hierarchy"] a[href="/protocols/reserve-protocol/"]').count()==1
    if slug=='reserve-yield-protocol':
     assert page.locator('a[href="/reports/usd3/"]').count()>=1
     assert 'eUSD — asset report unavailable / pending' in text and 'ETH+ — asset report unavailable / pending' in text
     assert page.locator('a[href="/reports/eusd/"],a[href="/reports/ethplus/"]').count()==0
    for a in article.locator('a[href]').all():
     href=a.get_attribute('href')
     if href.startswith('/'):
      route=urlparse(href).path.strip('/');assert (B/route/'index.html').exists(),href
    assert page.evaluate('document.documentElement.scrollWidth')<=width
    page.screenshot(path=str(R/f'{mode}-{slug}-{width}.png'),full_page=True)
    rows.append({'path':'protocols/'+slug+'/','width':width,'version':version,'unscored':True,'assessed_chains':[],'no_overflow':True,'navigation':True,'minimum_sampled_text_contrast':min(c['ratio'] for c in contrasts)})
   response=page.goto(base+'/protocols/',wait_until='networkidle');assert response.status==200
   family=page.locator('a[href="/protocols/reserve-protocol"]');assert family.count()==1;assert 'Unscored' in family.inner_text() and 'No verified chain grades.' in family.inner_text();assert 'Score 0' not in family.inner_text();assert page.locator('nav[aria-label="Reserve Protocol component reports"] a').count()==2
   assert page.locator('a[href="/protocols/reserve-yield-protocol"]').count()==0
   page.locator('input[type="search"]').fill('Yield');assert family.is_visible();page.locator('input[type="search"]').fill('')
   # Numeric score bands must not classify unscored architecture as zero or safe.
   page.locator('select').nth(2).select_option('safe (≥7)');assert family.count()==0;page.locator('select').nth(2).select_option('any');assert family.count()==1
   assert page.evaluate('document.documentElement.scrollWidth')<=width;page.screenshot(path=str(R/f'{mode}-directory-{width}.png'),full_page=True);rows.append({'path':'protocols/','width':width,'one_family_entry':True,'two_child_links':True,'unscored_filter_semantics':True})
   page.goto(base+'/reports/usd3/',wait_until='networkidle');assert page.locator('a[href="/protocols/reserve-yield-protocol/"]').count()==1;rows.append({'path':'reports/usd3/','width':width,'return_link':True})
   assert not errors,errors;page.close()
  browser.close()
finally:
 if server:server.shutdown();server.server_close()
(R/(mode+'-browser.json')).write_text(json.dumps({'all_passed':True,'cases':rows,'page_errors':[],'temporary_server_closed':bool(server),'theme':'Existing TIDR dark theme; no light-theme toggle supported'},indent=2)+'\n');print(mode,'passed',len(rows),'cases')
