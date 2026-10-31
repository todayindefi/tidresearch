"""Read-only preservation and authored structural-coverage checks."""
from pathlib import Path
import json, yaml, re
P=Path(__file__).resolve().parent
R=P.parents[1]
baselines=json.loads((P/'validation-baseline.json').read_text())
results={}
for slug in ['syrupusdc','syrupusdt']:
 s=(R/'src/content/reports'/(slug+'-retail.md')).read_text()
 new=yaml.safe_load(s.split('---',2)[1]);old=baselines[slug]['metadata']
 assert {k:v for k,v in new.items() if k!='last_revised'}=={k:v for k,v in old.items() if k!='last_revised'}
 assert new['last_revised']=='2026-10-31' and new['last_verified']=='2026-09-06'
 for phrase in ['5% per new strategy of overall Maple deposits','not independently verified immutable enforcement',
                'securities-backed institutional lending','receivables securitizations','margin funding',
                'Zodia Interchange','IRACE banking relationship','per-pool bank exposures remain unestablished',
                'without deposit-insurance protection','Native mint/redeem outside Ethereum remains unverified',
                'replacement-pool permissions','persistent deterioration','October 3']:
  assert phrase in s,(slug,phrase)
 assert len(re.findall(r'^## [1-6] · ',s,re.M))==6
 for phrase in ['## Financial update — October 30','Direct pool USDC is only','Direct pool USDT is only',
                'Source headline APY is','queue has **26','queue has **25','dollar amount and request-to-fill timing are unavailable']:
  assert phrase not in s,(slug,phrase)
 if slug=='syrupusdt':
  for phrase in ['funded basis-trading sleeve','30-day notice','not a holder withdrawal SLA','margin arrangements','unwind rights','zero hook']:
   assert phrase in s,(slug,phrase)
 else:assert '164/168 below 2%' in s
 results[slug]={'scores_and_all_nonrevision_metadata_unchanged':True,'last_revised':new['last_revised'],
                'last_verified':new['last_verified'],'durable_structural_scope_present':True,
                'daily_bulletin_and_standalone_cash_queue_figures_removed':True,
                'dated_historical_assessment_evidence_retained':True}
print(json.dumps({'status':'passed','assets':results,'no_new_authority_custody_or_execution_verification':True},indent=2))
