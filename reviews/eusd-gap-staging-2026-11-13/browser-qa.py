import asyncio,json,os
from pathlib import Path
from playwright.async_api import async_playwright
R=Path('/home/danger/tidresearch/reviews/eusd-gap-staging-2026-11-13')
async def main():
 result=[]
 async with async_playwright()as p:
  browser=await p.chromium.launch(executable_path='/home/danger/.cache/puppeteer/chrome/linux-154.0.8037.57/chrome-linux64/chrome',headless=True,args=['--no-sandbox'])
  for width in [1440,390]:
   page=await browser.new_page(viewport={'width':width,'height':960});errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
   await page.goto(os.environ.get('EUSD_QA_URL','http://127.0.0.1:8937/')+'?asset=eusd',wait_until='networkidle')
   await page.locator('#eusd-coverage-gaps details').first.locator('summary').click()
   text=await page.locator('body').inner_text()
   for expected in ['Evidence coverage and remaining work','Complete when:','Retained observations and changes','Composed basket-to-underlying route','conditional composed simulation pass','holder balance limited','Bounded controller and RSR extension','Accrued receipt reconciliation','Reserve-level recorded deficit: 0.924591 USDT']:
    assert expected in text,expected
   assert await page.evaluate('document.documentElement.scrollWidth')==width
   assert not errors,errors
   assert not any(v in text for v in ['/home/','.private-reviews','private_wallet','wallet_balance'])
   selected=await page.evaluate("({pointer:EusdData.selected.pointer,manifest:EusdData.selected.manifest})")
   for theme in ['light','dark']:
    if theme=='dark':await page.evaluate('document.body.classList.add("dark")');await page.wait_for_timeout(400)
    await page.screenshot(path=str(R/f'{os.environ.get("QA_KIND","local")}-{width}-{theme}.png'),full_page=True)
   result.append({'width':width,'generation':selected['pointer']['generation'],'source_clock':selected['pointer'].get('source_clock'),'manifest_sha256':selected['pointer']['manifest_sha256'],'expanded_gap_tracker':True,'route_and_security_extension':True,'errors':errors,'no_overflow':True})
   await page.close()
  await browser.close()
 (R/(os.environ.get('QA_KIND','local')+'-browser.json')).write_text(json.dumps(result,indent=2)+'\n');print(json.dumps(result))
asyncio.run(main())
