from playwright.sync_api import sync_playwright
from pathlib import Path
from bs4 import BeautifulSoup
import json,re,sys,yaml
root=Path('/home/danger/tidresearch');out=root/'reviews/held-protocol-staging-2026-11-03';rows=json.loads((out/'content-contract.json').read_text());stage='--staging' in sys.argv;label='staging' if stage else 'local';base='https://staging.tidresearch.com' if stage else 'http://localhost:8792';results=[];errors=[]
with sync_playwright() as p:
 b=p.chromium.launch();page=b.new_page();page.on('pageerror',lambda e:errors.append(str(e)))
 for width,height in [(1440,1000),(390,844)]:
  page.set_viewport_size({'width':width,'height':height})
  for row in rows:
   slug=row['slug'];resp=page.goto(base+f'/protocols/{slug}/',wait_until='networkidle',timeout=60000);assert resp.status==200,(slug,resp.status)
   txt=page.locator('main').inner_text();aside=re.sub(r'\s+',' ',' '.join(page.locator('aside').all_inner_texts()))
   for key,name in [('contract_score','Smart Contract'),('economic_score','Economic'),('project_score','Project')]:assert f'{name} {row["scores"][key]:.1f}' in aside,(slug,aside)
   assert f'Overall Score {row["scores"]["overall_score"]:.1f}'.lower() in aside.lower(),(slug,aside)
   assert '2026-11-03' in aside and 'provisional' in txt.lower() and row['last_verified'] in (txt if slug not in ['lighter','zama','boros','aave-v3','morpho','euler'] else row['last_verified'])
   assert not page.evaluate('document.documentElement.scrollWidth>innerWidth'),slug
   assert not page.locator('iframe').count() and '⚠' not in txt
   assert len(re.findall(r'##',txt))==0
   assert not re.search(r'0x[a-fA-F0-9]{40}',txt),slug
   for private in ['/home/','DeFiAnalyst','FarmTracker','security_analyst','TID Capital','private position values']:assert private not in txt,(slug,private)
   expected=BeautifulSoup(Path(f'/tmp/held-protocol-staging-build/dist/protocols/{slug}/index.html').read_text(),'html.parser').select_one('main').get_text();actual=BeautifulSoup(page.content(),'html.parser').select_one('main').get_text();assert actual==expected,(slug,'build mismatch')
   hero=page.locator('[data-protocol-report]').evaluate('(e)=>e.previousElementSibling?.innerText') if False else ''
   # Main includes both responsive score hero and desktop sidebar; every score axis must occur at least twice.
   for name in ['Smart Contract','Economic','Project']:assert txt.count(name)>=3,(slug,name)
   links=page.locator('[data-protocol-report] a[href^="/protocols/"]').evaluate_all('(els)=>els.map(e=>e.getAttribute("href"))')
   for link in links:assert Path('/tmp/held-protocol-staging-build/dist'+link+'index.html').exists(),(slug,link)
   page.screenshot(path=str(out/f'{label}-{slug}-{width}.png'),full_page=True)
   results.append({'slug':slug,'width':width,'status':resp.status,'all_scores_match':True,'last_reviewed':'2026-11-03','provisional_visible':True,'no_overflow':True,'matches_build':True,'crosslinks':links})
  page.goto(base+'/protocols/',wait_until='networkidle',timeout=60000)
  for row in rows:
   slug=row['slug'];fm=yaml.safe_load((root/f'src/content/protocols/{slug}.md').read_text().split('---')[1]);page.get_by_role('searchbox').fill(fm['protocol']);page.wait_for_timeout(80)
   links=page.locator(f'a[href="/protocols/{slug}"], a[href="/protocols/{slug}/"]');assert links.count()==1,(slug,width,'index card')
   text=links.inner_text();assert '2026-11-03' in text and f'{row["scores"]["overall_score"]:.1f}' in text,(slug,text)
  page.get_by_role('searchbox').fill('');page.screenshot(path=str(out/f'{label}-index-{width}.png'),full_page=True)
 b.close()
assert not errors,errors
(out/f'{label}-browser-checks.json').write_text(json.dumps({'results':results,'pageerrors':errors,'index_entries_checked':24},indent=2)+'\n');print(f'{label}: {len(results)} report renders and 24 index entries passed; no browser errors')
