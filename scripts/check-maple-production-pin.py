from pathlib import Path
import json,hashlib
root=Path(__file__).resolve().parents[1]
pin=json.loads((root/'scripts/maple-production-pin.json').read_text())
for rel,sha in pin['files'].items():
 p=root/rel
 if not p.exists()or hashlib.sha256(p.read_bytes()).hexdigest()!=sha:raise SystemExit('Maple production pin mismatch: '+rel)
assets=json.loads((root/'public/dashboards/data/assets.json').read_text())
for slug in ['syrupusdc','syrupusdt']:
 rows=[a for a in assets if a['slug']==slug]
 assert len(rows)==1 and rows[0]['published'] is True and rows[0]['staged'] is False and rows[0]['report_url']=='https://tidresearch.com/reports/'+slug+'/'
print('Maple production pin:22 public files and production report links verified')
