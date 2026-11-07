from pathlib import Path
from playwright.sync_api import sync_playwright
from bs4 import BeautifulSoup
from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
import json,re,sys,threading,functools
out=Path(__file__).parent;build=Path('/tmp/dusd-alto-nov7-staging-build');record=json.loads((out/'source-adoption.json').read_text());label='staging' if '--staging' in sys.argv else 'local';server=None
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
   page.set_viewport_size({'width':width,'height':height});r=page.goto(base+'/reports/dusd-alto/',wait_until='networkidle',timeout=60000);assert r.status==200
   main=page.locator('main').inner_text();norm=re.sub(r'\s+',' ',main);side=re.sub(r'\s+',' ',' '.join(page.locator('aside').all_inner_texts()))
   for k,name in [('peg_mechanism_score','Stability'),('backing_score','Backing'),('liquidity_score','Liquidity & Exit'),('underlying_score','Dependencies'),('structural_score','Contract & Admin'),('issuer_score','Issuer')]:
    v=record['scores'][k];assert f'{name} {v:.1f}' in side;assert f'{name} — {v:.1f}' in norm
   assert 'overall score 4.5' in side.lower() and '2026-11-07' in side
   terms=['0x63d74d22e689c715a04f2c13962b1f77f443d35b','Dialectic','dTRINITY','Convex','83.0%','12.4%','4.6%','223,113','1,497,105','82,764','1,802,983','2.385M','1.549M frxUSD','0.836M own DUSD','Own DUSD is circular','not evidence of collateral loss','one LP unit at one nominal DUSD','80%','90%','single-account','before burning repaid DUSD','headroom','Current repayment headroom and blockage remain unverified','no enforced positive floor','24 hours','4-of-7','same owner set','halt/freeze','no unpause or seizure entry point','does not give ordinary holders access','not a fresh universal holder census','998,996 USDC','bounded below recorded supply','not current economic public float','frxUSD→USDS→USDC','own small-size baseline','gas','Cayman','Panamanian','Mesh Interface Corp.','unconditional DUSD cash obligor','September 21','03:54:25 UTC','26,360,414','02:39:35 UTC','26,360,048','23:47:05 UTC','02:40:31 UTC','provisionally','not deployed or visually accepted']
   for t in terms:assert t in norm,(t,width)
   for bad in ['88%','97.09%','821,855','23,000','8.6%','one-hour timelock','/home/danger','data/reviews/','.private-reviews','profile_sha256','864c09414234203','company or security']:assert bad not in page.content(),bad
   wrap=page.locator('main [data-source-report]');assert wrap.get_attribute('data-source-report')==record['source_report_sha256'];assert wrap.get_attribute('data-assessment-version')==record['assessment_version'];assert wrap.get_attribute('data-evidence-snapshot')==record['evidence_version']
   assert page.locator('main h2').first.inner_text()=='Summary' and page.locator('main h2').last.inner_text()=='Revision history';assert not page.locator('main iframe').count() and not re.search('[⚠✅❌]',main) and not page.evaluate('document.documentElement.scrollWidth>innerWidth')
   expected=BeautifulSoup((build/'dist/reports/dusd-alto/index.html').read_text(),'html.parser').select_one('main').get_text();actual=BeautifulSoup(page.content(),'html.parser').select_one('main').get_text();assert expected==actual
   page.screenshot(path=str(out/f'{label}-{width}.png'),full_page=True)
   page.goto(base+'/reports/',wait_until='networkidle',timeout=60000);page.get_by_role('searchbox').fill('DUSD (Alto)');page.wait_for_timeout(150);card=page.locator('a[href="/reports/dusd-alto"],a[href="/reports/dusd-alto/"]');assert card.count()==1 and '4.5' in card.inner_text() and '2026-11-07' in card.inner_text();assert not page.evaluate('document.documentElement.scrollWidth>innerWidth');assert 'Live dashboard' not in card.inner_text()
   rows.append({'width':width,'http':200,'seven_grades_body_sidebar_index':True,'source_and_assessment_evidence_versions':True,'exact_ethereum_identity':True,'dated_credit_backing_oracle_repayment_authority_quote_legal_limits':True,'old_thesis_removed':True,'no_dashboard_conformance_claim':True,'privacy':True,'overflow':False,'served_build_parity':True})
  b.close()
 assert not errors,errors
 (out/f'{label}-checks.json').write_text(json.dumps({'cases':rows,'pageerrors':errors},indent=2)+'\n');print(label,'DUSD Alto: seven grades/index, versions/clocks, current mechanism/limits, privacy and desktop/mobile pass')
finally:
 if server:server.shutdown();server.server_close()
