"""Read-only source, preservation and staged-report checks; no chain/fork execution."""
from pathlib import Path
import hashlib
import json
import re
import subprocess
import yaml

P = Path(__file__).resolve().parent
R = P.parents[1]

def sha(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()

def validate():
    meta = json.loads((P / 'provenance.json').read_text())
    original = (P / 'tidr-gho-before.md').read_text()
    candidate = (P / 'gho.candidate.md').read_text()
    current = (R / 'src/content/reports/gho.md').read_text()
    assert candidate == current
    assert sha(P / 'tidr-gho-before.md') == meta['baseline_sha256']
    assert sha(P / 'gho.candidate.md') == meta['candidate_sha256']
    source = subprocess.check_output(['git', '-C', '/home/danger/riskAnalyst', 'show', meta['riskanalyst_commit'] + ':assets/gho.md'])
    assert source == (P / 'riskanalyst-gho-7c76bf6.md').read_bytes()
    assert hashlib.sha256(source).hexdigest() == meta['source_sha256']
    old = yaml.safe_load(original.split('---', 2)[1])
    new = yaml.safe_load(candidate.split('---', 2)[1])
    assert {k: v for k, v in old.items() if k != 'last_revised'} == {k: v for k, v in new.items() if k != 'last_revised'}
    assert new['last_revised'] == '2026-10-30'
    assert new['last_verified'] == old['last_verified'] == '2026-08-29'
    assert new['production'] is old['production'] is True
    assert {k: v for k, v in new.items() if k.endswith('_score')} == meta['scores_before']
    assert new['structural_score'] == 6.0 and new['overall_score'] == 5.5
    for heading in ['1 · Stability — 5.5', '2 · Backing — 6.0', '3 · Liquidity & Exit — 6.0',
                    '4 · Dependencies — 6.0', '5 · Contract & Admin — 6.0', '6 · Issuer — 6.5']:
        assert '## ' + heading + '\n' in candidate
    for term in ['2-of-3 Risk Council', '310m to 620m', 'one wei to the existing reserve',
                 'not a lifetime ceiling', 'more than 86,400 seconds', 'one-day execution floor',
                 'cannot pre-cancel an immediate Council transaction', 'fixed implementation code',
                 'surrounding facilitators, reserves, GSMs and controllers include upgradeable',
                 '0x3A3868898305f04beC7FEa77BecFf04C13444112',
                 '0x882285E62656b9623AF136Ce3078c6BdCc33F5E3',
                 'not independently realizable collateral', 'pending current reassessment',
                 'CCIP/emergency delivery', '04:18:59', '07:45:11', '07:45:18', '07:45:19']:
        assert term in candidate, term
    for obsolete in ['The mechanism that would defend it is wound down',
                     'the addresses holding the mint role cannot be listed',
                     'cannot mint one more GHO without a governance action',
                     'The upgrade path is simply not where it is normally found',
                     'the fixed-price swap is gone']:
        assert obsolete not in candidate, obsolete
    manifest = Path(meta['source_manifest_path'])
    assert sha(manifest) == meta['source_manifest_sha256']
    entries = json.loads(manifest.read_text())['files']
    root = Path(meta['authority_manifest_file_root'])
    for rel, row in entries.items():
        path = Path(rel)
        assert not path.is_absolute() and '..' not in path.parts
        f = root / path
        assert f.stat().st_size == row['bytes'] and sha(f) == row['sha256'], rel
    assert len(entries) == 326
    assert meta['deployment'] is False and meta['dashboard_score_changes'] is False
    page = (P / 'review.html').read_text()
    assert 'Not deployed' in page and 'historical 6.0' in page
    assert '<script' not in page and '<iframe' not in page
    return {'status': 'passed', 'riskanalyst_commit': meta['riskanalyst_commit'],
            'source_commit_bytes_match': True, 'authority_manifest_files_verified': len(entries),
            'six_body_axes_match_unchanged_scores': True,
            'all_metadata_except_revision_date_preserved': True,
            'production_status_preserved': True, 'last_verified': new['last_verified'],
            'contract_admin_score': {'displayed': 6.0, 'basis': 'historical_pending_current_reassessment'},
            'current_authority_and_module_corrections_present': True,
            'source_dates_execution_limits_and_remote_gaps_retained': True,
            'fork_independently_replayed': False, 'deployed': False,
            'dashboard_score_changes': False}

if __name__ == '__main__':
    print(json.dumps(validate(), indent=2))
