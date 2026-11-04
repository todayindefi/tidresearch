from pathlib import Path
import json,re,yaml,hashlib,sys
from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright
out=Path('/home/danger/tidresearch/reviews/mseth-bounded-staging-2026-11-04');root=Path('/home/danger/tidresearch');build=Path('/tmp/mseth-bounded-staging-build');packet=json.load(open('/home/danger/riskAnalyst/data/reviews/mseth-reassessment-2026-11-04/consumer-assessment.json'));fm=yaml.safe_load((out/'candidates/mseth.md').read_text().split('---',2)[1]);mapping={'volatility':'volatility_score','liquidity':'liquidity_score','structural':'structural_score','redemption':'redemption_score','overall':'overall_score'}
assert {k:fm[v] for k,v in mapping.items()}==packet['scores'];assert fm['last_verified']==packet['last_whole_verified'];assert fm['last_revised']==packet['assessment_date'];assert fm['chains']==['eth'] and fm['production'] is False
assert not any(k in fm for k in ['backing_score','underlying_score','issuer_score']);orig=yaml.safe_load((root/'src/content/reports/usg.md').read_text().split('---',2)[1]);cand=yaml.safe_load((out/'candidates/usg.md').read_text().split('---',2)[1]);assert {k:v for k,v in orig.items() if k.endswith('_score')}=={k:v for k,v in cand.items() if k.endswith('_score')}
label='staging' if '--staging' in sys.argv else 'local';base='https://staging.tidresearch.com' if label=='staging' else 'http://localhost:8799';rows=[];errors=[]
with sync_playwright() as p:
 b=p.chromium.launch();page=b.new_page();page.on('pageerror',lambda e:errors.append(str(e)))
 for width,height in [(1440,1000),(390,844)]:
  page.set_viewport_size({'width':width,'height':height});assert page.goto(base+'/reports/mseth/',wait_until='networkidle').status==200;main=page.locator('main').inner_text();side=re.sub(r'\s+',' ',' '.join(page.locator('aside').all_inner_texts()))
  for k,n in [('volatility_score','Stability'),('liquidity_score','Liquidity'),('structural_score','Contract & Admin'),('redemption_score','Redemption'),('overall_score','Overall Score')]:assert f'{n} {fm[k]:.1f}'.lower() in side.lower(),(k,side)
  for term in ['Provisional, Ethereum only','April 9, 2026','03:37:59','03:38:31–36','03:39:11','26,338,813','10% in both','historical','net backing','2.43 bps','27.14 bps','1,249.93 bps','minimum wait','720','2.4–3 seconds']:assert term.lower() in main.lower(),term
  assert not page.evaluate('document.documentElement.scrollWidth>innerWidth');assert main.index('Summary')<main.index('Stability')<main.index('Evidence, score scope');assert '⚠' not in main
  for bad in ['/home/danger','profile_sha256','consumer-assessment.json','data/reviews/']:assert bad not in page.content(),bad
  assert BeautifulSoup(page.content(),'html.parser').select_one('main').get_text()==BeautifulSoup((build/'dist/reports/mseth/index.html').read_text(),'html.parser').select_one('main').get_text()
  page.screenshot(path=str(out/f'{label}-mseth-{width}.png'),full_page=True)
  assert page.goto(base+'/reports/usg/',wait_until='networkidle').status==200;text=page.locator('main').inner_text();assert 'distinct from Metronome’s synth-swap path' in text and 'closed to new deposits' in text and '2.5/10' in text
  assert not page.evaluate('document.documentElement.scrollWidth>innerWidth');assert BeautifulSoup(page.content(),'html.parser').select_one('main').get_text()==BeautifulSoup((build/'dist/reports/usg/index.html').read_text(),'html.parser').select_one('main').get_text();page.screenshot(path=str(out/f'{label}-usg-{width}.png'),full_page=True)
  page.goto(base+'/reports/',wait_until='networkidle');page.get_by_role('searchbox').fill('msETH');link=page.locator('a[href="/reports/mseth"],a[href="/reports/mseth/"]');assert link.count()==1 and '2.5' in link.inner_text() and '2026-11-04' in link.inner_text();rows.append({'width':width,'body_scores_and_sidebar_match_packet':True,'all_distinct_clocks':True,'identity':packet['token'],'index':True,'usg_paused_market_distinction':True,'privacy':True,'overflow':False,'hero':'Not rendered by standard asset layout; sidebar carries four legacy axes.'})
 b.close()
assert not errors,errors
(out/f'{label}-checks.json').write_text(json.dumps({'results':rows,'pageerrors':errors,'schema_category':'wrapped-token is the existing renderer adapter; prose identifies synthetic liability, without asserting backing or ownership','scores':packet['scores'],'last_whole_verified':packet['last_whole_verified'],'assessment_date':packet['assessment_date'],'missing_axes_not_invented':True,'usg_numeric_scores_unchanged':True},indent=2)+'\n');print(label,'msETH and USG desktop/mobile, index, scores, clocks, identity and privacy checks passed')
