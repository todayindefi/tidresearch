from pathlib import Path
from playwright.sync_api import sync_playwright
from bs4 import BeautifulSoup
from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
import json,re,sys,threading,functools
out=Path(__file__).parent;build=Path('/tmp/swan-dao-staging-build');record=json.loads((out/'source-adoption.json').read_text());label='staging' if '--staging' in sys.argv else 'local';server=None
if label=='local':
 class Quiet(SimpleHTTPRequestHandler):
  def log_message(self,*args):pass
 server=ThreadingHTTPServer(('127.0.0.1',0),functools.partial(Quiet,directory=str(build/'dist')));threading.Thread(target=server.serve_forever,daemon=True).start();base=f'http://127.0.0.1:{server.server_port}'
else:base='https://staging.tidresearch.com'
rows=[];errors=[]
try:
 with sync_playwright() as p:
  b=p.chromium.launch();page=b.new_page();page.on('pageerror',lambda e:errors.append(str(e)))
  for width,height in [(1440,1000),(390,844)]:
   page.set_viewport_size({'width':width,'height':height});r=page.goto(base+'/protocols/swan-dao/',wait_until='networkidle',timeout=60000);assert r.status==200
   main=page.locator('main').inner_text();norm=re.sub(r'\s+',' ',main);side=re.sub(r'\s+',' ',' '.join(page.locator('aside').all_inner_texts()))
   for name,value in [('Smart Contract',5.5),('Economic',5.0),('Project',4.5)]:assert f'{name} {value:.1f}' in side and re.search(re.escape(name)+r'\s+'+str(value),norm)
   assert 'overall score 5.0' in side.lower() and re.search(r'Overall\s+5.0',norm,re.I) and '2026-11-07' in side
   for t in ['October 22, 2026','26,360,833','05:17:11 UTC','05:52:49 UTC','26,361,087','06:08:23 UTC','06:25:37 UTC','06:06:43–06:07:01 UTC','2.023320','259,993.046564','339,793.131366','1,423,533.866691','0.412311','70.36%','Idle USDS is zero','1,276,180.536712','1,423,552.587349','18.720658','350.897760 wstETH','982,071','83.20% free ratio includes PSM','175bps','Actual borrower-by-borrower eligible capacity remains unknown','1,953,469.968518','0.224305','1.000164550165','Exit returns swanUSD','100.005122 / 999.962344','token-not-found','not a tested Swan PSM','3-of-6','two-day timelock','October 21, 2030','15:59:35 UTC','50% / 0%','50% / 10%','interest rather than principal','7,200 / 36,000 blocks','10,000 SWAN','staked SWAN, not sSwanUSD','Ten DAO clones','eight immutable implementations','not a locally reproduced','10% to 50%','empty-market guard','DRAFT','accepted/partial','No independent current human CoinDAO audit','not insurance','30-hour','4-of-9 Safe','confirmed-transaction module','a registered Swan repayment obligor','not an exhaustive clean-history','Inverse repayment guarantee']:
    assert t in norm,(t,width)
   for address in ['0x9bf2b2f57a2968a0e81546ed50cbbbb7c9d6e05e','0xfa80c7349cc2357c42a64c2954b24b1a61c29435','0x4ed5c72816abc1b67ac31ddabe31cff4a8c56a15']:assert address in norm
   for bad in ['/home/danger','data/reviews/','.private-reviews','profile_sha256','64cd599927bf806','company or security',record['source_report_sha256'],record['assessment_version'],record['evidence_version'].split(':')[1],record['security_manifest'].split(':')[1]]:assert bad not in page.content(),bad
   assert page.locator('main h2').first.inner_text()=='Summary' and page.locator('main h2').last.inner_text()=='Revision history';assert not page.locator('main iframe').count() and not re.search('[⚠✅❌]',main) and not page.evaluate('document.documentElement.scrollWidth>innerWidth')
   expected=BeautifulSoup((build/'dist/protocols/swan-dao/index.html').read_text(),'html.parser').select_one('main').get_text();actual=BeautifulSoup(page.content(),'html.parser').select_one('main').get_text();assert expected==actual
   page.screenshot(path=str(out/f'{label}-{width}.png'),full_page=True)
   page.goto(base+'/protocols/',wait_until='networkidle',timeout=60000)
   for query in ['SwanDAO','Swan USD','swanUSD','sSwanUSD']:
    page.get_by_role('searchbox').fill(query);page.wait_for_timeout(100);card=page.locator('a[href="/protocols/swan-dao"],a[href="/protocols/swan-dao/"]');assert card.count()==1 and '5.0' in card.inner_text() and '2026-11-07' in card.inner_text();assert not page.evaluate('document.documentElement.scrollWidth>innerWidth')
   rows.append({'width':width,'http':200,'four_grades_body_hero_sidebar_index':True,'four_alias_searches_one_entry':True,'exact_ethereum_contracts':True,'original_clocks':True,'manager_timelock_audit_accounting_exit_legal_limits':True,'privacy_and_internal_hashes_absent':True,'overflow':False,'served_build_parity':True})
  b.close()
 assert not errors,errors
 (out/f'{label}-checks.json').write_text(json.dumps({'cases':rows,'pageerrors':errors},indent=2)+'\n');print(label,'SwanDAO: four grades/index/aliases, contracts/clocks, authority/audit/accounting/exit/legal limits and desktop/mobile/privacy pass')
finally:
 if server:server.shutdown();server.server_close()
