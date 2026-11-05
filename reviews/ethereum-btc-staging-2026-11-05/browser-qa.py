from pathlib import Path
from playwright.sync_api import sync_playwright
from bs4 import BeautifulSoup
import json,re,sys,yaml
out=Path(__file__).parent;build=Path('/tmp/ethereum-btc-staging-build');bindings=json.loads((out/'accepted-bindings.json').read_text());label='staging' if '--staging' in sys.argv else 'local';base='https://staging.tidresearch.com' if label=='staging' else 'http://localhost:8803';results=[];errors=[]
with sync_playwright() as p:
 b=p.chromium.launch();page=b.new_page();page.on('pageerror',lambda e:errors.append(str(e)))
 for width,height in [(1440,1000),(390,844)]:
  page.set_viewport_size({'width':width,'height':height})
  for slug,bind in bindings.items():
   fm=yaml.safe_load((build/'src/content/reports'/f'{slug}.md').read_text().split('---',2)[1]);r=page.goto(base+f'/reports/{slug}/',wait_until='networkidle',timeout=60000);assert r.status==200
   main=page.locator('main').inner_text();side=re.sub(r'\s+',' ',' '.join(page.locator('aside').all_inner_texts()))
   for k,name in [('volatility_score','Stability'),('backing_score','Backing'),('liquidity_score','Liquidity & Exit'),('underlying_score','Dependencies'),('structural_score','Contract & Admin'),('issuer_score','Issuer'),('overall_score','Overall Score')]:assert f'{name} {fm[k]:.1f}'.lower() in side.lower(),(slug,k,side)
   assert len(page.locator('main h2').all_text_contents())==9
   assert 'Provisional, Ethereum only' in main and 'November 3–4' in main and '2026-11-05' in side and 'No whole-report verification date is asserted' in main
   assert fm['chains']==['eth'] and 'last_verified' not in fm and fm['production']==False
   assert bind['identity']['token'].lower() in main.lower()
   wrap=page.locator('main [data-evidence-snapshot]');assert wrap.get_attribute('data-evidence-snapshot')==bind['evidence'];assert wrap.get_attribute('data-assessment-snapshot')==bind['assessment']
   assert not page.locator('main iframe').count() and not re.search('[⚠✅❌]',main);assert not page.evaluate('document.documentElement.scrollWidth>innerWidth'),(slug,width)
   assert page.locator('main h2').first.inner_text()=='Summary';assert main.index('Evidence dates and scope')<main.index('Revision history')
   for bad in ['/home/danger','profile_sha256','.private-reviews','data/reviews/','profile_checked']:
    assert bad not in page.content(),bad
   expected=BeautifulSoup((build/'dist/reports'/slug/'index.html').read_text(),'html.parser').select_one('main').get_text();actual=BeautifulSoup(page.content(),'html.parser').select_one('main').get_text();assert expected==actual
   page.screenshot(path=str(out/f'{label}-{slug}-{width}.png'),full_page=True)
   page.goto(base+'/reports/',wait_until='networkidle',timeout=60000);page.get_by_role('searchbox').fill(fm['asset']);page.wait_for_timeout(150);card=page.locator(f'a[href="/reports/{slug}"],a[href="/reports/{slug}/"]');assert card.count()==1 and f"{fm['overall_score']:.1f}" in card.inner_text() and '2026-11-05' in card.inner_text();assert 'Live dashboard' not in card.inner_text();assert not page.evaluate('document.documentElement.scrollWidth>innerWidth')
   results.append({'asset':slug,'width':width,'http':200,'six_axes_and_overall_match':True,'index_date_and_score':True,'ethereum_token_scope':True,'provisional_and_original_clocks':True,'hash_binding':True,'build_parity':True,'overflow':False,'private_leaks':False})
 b.close()
assert not errors,errors
(out/f'{label}-checks.json').write_text(json.dumps({'results':results,'pageerrors':errors},indent=2)+'\n');print(label,'all three reports, seven scores each, index, identity, provenance, privacy, desktop/mobile pass')
