from pathlib import Path
from playwright.sync_api import sync_playwright
from bs4 import BeautifulSoup
from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
import json,re,sys,threading,functools
out=Path(__file__).parent;build=Path('/tmp/fluid-nov7-staging-build');record=json.loads((out/'source-adoption.json').read_text());label='staging' if '--staging' in sys.argv else 'local';server=None
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
   page.set_viewport_size({'width':width,'height':height});r=page.goto(base+'/protocols/fluid/',wait_until='networkidle',timeout=60000);assert r.status==200
   main=page.locator('main').inner_text();norm=re.sub(r'\s+',' ',main);side=re.sub(r'\s+',' ',' '.join(page.locator('aside').all_inner_texts()))
   for name,value in [('Smart Contract',7.5),('Economic',6.0),('Project',6.5)]:assert f'{name} {value:.1f}' in side and re.search(re.escape(name)+r'\s+'+str(value),norm)
   assert 'overall score 6.0' in side.lower() and re.search(r'Overall\s+6.0',norm,re.I) and '2026-11-07' in side
   for term in ['88.46%','99.01%','3,380,522','94,189','89.37%','73.95%','Re Protocol reUSD','not Resupply','442.720681','0.013686','true by construction','67.63%','89.32%','3.41%','2.13%','37,015,256','09:49:16 UTC','100,728.781930','46,938.735939','96,236.136269','Neither is an executed recovery','does not itself repay','funded clearing','6-of-12','5-of-10','24-hour','not global-auth','deployer and global-auth','no separate GHO/USD','minimum heartbeat','21 hours old','must not be inherited','May 31','expressly acknowledged','not proof none exists','9.7M','19.3M','no executed entry observed','MiCA','not a banking license','November 2','November 7','26,356,922','16:11:35 UTC','37,038,203','16:11:43 UTC','26,356,906','16:08:23 UTC','37,038,008','16:08:28 UTC','documentary deployment inventory','not fGHO insurance']:
    assert term in norm,(term,width)
   wrap=page.locator('main [data-source-report]');assert wrap.get_attribute('data-source-report')==record['source_report_sha256'];assert wrap.get_attribute('data-assessment-version')==record['assessment_version'];assert wrap.get_attribute('data-evidence-snapshot')==record['evidence_version'];assert wrap.get_attribute('data-assessment-date')=='2026-11-07'
   assert page.locator('main h2').first.inner_text()=='Summary' and page.locator('main h2').last.inner_text()=='Revision history'
   assert not page.locator('main iframe').count() and not re.search('[⚠✅❌]',main) and not page.evaluate('document.documentElement.scrollWidth>innerWidth')
   for bad in ['/home/danger','data/reviews/','.private-reviews','profile_sha256','9c7e21aa4a5137','contemplated','deposit size','company or security']:assert bad not in page.content(),bad
   expect=BeautifulSoup((build/'dist/protocols/fluid/index.html').read_text(),'html.parser').select_one('main').get_text();actual=BeautifulSoup(page.content(),'html.parser').select_one('main').get_text();assert expect==actual
   page.screenshot(path=str(out/f'{label}-{width}.png'),full_page=True)
   page.goto(base+'/protocols/',wait_until='networkidle',timeout=60000);page.get_by_role('searchbox').fill('Fluid');page.wait_for_timeout(100);card=page.locator('a[href="/protocols/fluid"],a[href="/protocols/fluid/"]');assert card.count()==1 and '6.0' in card.inner_text() and '2026-11-07' in card.inner_text();assert not page.evaluate('document.documentElement.scrollWidth>innerWidth')
   rows.append({'width':width,'http':200,'four_grades_body_hero_sidebar_index':True,'source_and_assessment_evidence_versions':True,'original_native_financial_security_clocks':True,'economic_absorption_oracle_authority_incident_limits':True,'bounded_coverage':True,'privacy':True,'overflow':False,'served_build_parity':True})
  b.close()
 assert not errors,errors
 (out/f'{label}-checks.json').write_text(json.dumps({'cases':rows,'pageerrors':errors},indent=2)+'\n');print(label,'Fluid grades/index, versions/clocks, absorption/control/oracle/incident boundaries and desktop/mobile pass')
finally:
 if server:server.shutdown();server.server_close()
