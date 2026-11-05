from pathlib import Path
import hashlib,json,re,yaml
out=Path(__file__).parent;root=out.parent.parent;bindings=json.loads((out/'accepted-bindings.json').read_text());rows=[]
keys=['volatility_score','backing_score','liquidity_score','underlying_score','structural_score','issuer_score','overall_score']
for slug,b in bindings.items():
 original=Path(f'/home/danger/riskAnalyst/assets/{slug}.md').read_text();src=yaml.safe_load(original.split('---',2)[1]);text=(root/'src/content/reports'/f'{slug}.md').read_text();fm=yaml.safe_load(text.split('---',2)[1])
 for k in keys:assert fm[k]==src[k],(slug,k)
 assert fm['chains']==src['chains']==['eth'] and not fm['production'] and 'last_verified' not in fm and 'last_verified' not in src
 assert str(fm['date'])==str(src['date'])=='2026-11-05';assert str(fm['last_revised'])=='2026-11-05';assert 'redemption_score' not in fm
 assert src['evidence_version']==b['evidence'] and src['assessment_version']==b['assessment']
 ep=Path('/home/danger/backing-monitor/.private-reviews/ethereum-btc-assets-2026-11-04/packages')/slug/'snapshots'/(b['evidence'].split(':')[1]+'.json');ap=Path('/home/danger/riskAnalyst/data/reviews/ethereum-btc-assets-2026-11-04')/(slug+'-assessment-decision.json')
 for path,expected in [(ep,b['evidence']),(ap,b['assessment'])]:assert 'sha256:'+hashlib.sha256(path.read_bytes()).hexdigest()==expected
 assert b['identity']['token'].lower() in text.lower();assert text.count('## ') == 9
 for term in ['November 3–4','26,342,414','15:41:47','26,340,868','10:31:35','Provisional, Ethereum only','No whole-report verification date is asserted']:assert term in text,(slug,term)
 assert 'data-canonical-project="'+src['canonical_project']+'"' in text and 'data-canonical-component="'+src['canonical_component']+'"' in text
 rows.append({'asset':slug,'authored_source_sha256':hashlib.sha256(original.encode()).hexdigest(),'six_scores_and_overall_match':True,'ethereum_identity_match':True,'hashes_match':True,'assessment_date':'2026-11-05','evidence_dates':'2026-11-03–04','whole_report_verified':None,'production':False})
(out/'source-adoption-checks.json').write_text(json.dumps({'reports':rows,'schema_negative_checks':'bounded marker and last_revised individually required when last_verified absent; legacy verified report still accepted'},indent=2)+'\n');print('Three authored working-tree reports, all 21 scores, identities, dates, canonical joins and immutable hashes pass')
