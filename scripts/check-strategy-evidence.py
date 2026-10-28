#!/usr/bin/env python3
"""Generate/check MSTR and STRC supporting evidence from shared dashboard inputs."""
import argparse
import hashlib
import json
import re
import statistics
from datetime import datetime, timedelta
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "public/data/strategy/2026-10-28"
START = "<!-- strategy-shared-evidence:start -->"
END = "<!-- strategy-shared-evidence:end -->"
SCORES = {
    "mstr": {"Balance sheet quality": "balance_sheet_score",
             "Funding model durability": "funding_model_score",
             "Refinancing capacity": "refinancing_capacity_score",
             "Governance": "governance_score", "Overall": "overall_score"},
    "strc": {"Volatility": "volatility_score", "Liquidity": "liquidity_score",
             "Counterparty": "counterparty_score", "Redemption": "redemption_score",
             "Overall": "overall_score"},
}


def time(value):
    return datetime.fromisoformat(value.replace("Z", "+00:00"))


def load(directory=DATA):
    manifest = json.loads((directory / "sources.json").read_text())
    for name, source in manifest.items():
        assert source['url'] == 'https://todayindefi.github.io/backing-monitor/data/' + name
        assert hashlib.sha256((directory/name).read_bytes()).hexdigest() == source['sha256'], name
    feed = json.loads((directory/'strc_backing.json').read_text())
    history = json.loads((directory/'strc_backing_history.json').read_text())['series']
    events = json.loads((directory/'strategy_events.json').read_text())
    assert feed['tradfi']['mnav']['definition_version'] == 'v2'
    assert feed['tradfi']['mnav']['definition'] == 'EV / BTC Reserve, where EV = MktCap + Debt + Pref - Cash'
    assert feed['tradfi']['strc_secondary']['par_usd'] == 100
    assert feed['tradfi']['strc_secondary']['source'] == 'yfinance'
    assert feed['tradfi']['mstr']['source'] == 'yfinance'
    assert feed['tradfi']['btc']['source'] == 'coingecko'
    assert any(flag.get('code') == 'STRC_OUTSTANDING_BASE_AGED'
               for flag in feed['risk_flags']), 'Review the model-quality statement after the outstanding-base warning changes'
    assert len({r['ts'] for r in history}) == len(history), 'duplicate observations'
    return feed, sorted(history, key=lambda r: time(r['ts'])), events


def render(directory=DATA):
    feed, history, events = load(directory)
    end = time(history[-1]['ts'])
    lines = [START,
             f"Shared dashboard feed: **{feed['timestamp_utc']}**. Financial observations retain their filing dates; "
             "a fresh feed does not make an older filing or market close new.", "",
             "| Shared-history measure | Last 7 days | Last 30 days | Last 90 days |",
             "|---|---:|---:|---:|"]
    windows = {}
    for days in (7, 30, 90):
        rows = [r for r in history if end-timedelta(days=days) < time(r['ts']) <= end]
        assert rows
        windows[days] = rows
    def values(key):
        return [[r[key] for r in rows if isinstance(r.get(key), (int, float))
                 and (key != 'mnav' or r.get('mnav_definition_version') == 'v2')]
                for rows in windows.values()]
    prices, mnav = values('strc_price'), values('mnav')
    lines.append('| STRC observed marks | ' + ' | '.join(str(len(v)) for v in prices) + ' |')
    lines.append('| Mean STRC price | ' + ' | '.join(f'${statistics.mean(v):.2f}' for v in prices) + ' |')
    lines.append('| Observed STRC price range | ' + ' | '.join(f'${min(v):.2f}–${max(v):.2f}' for v in prices) + ' |')
    lines.append('| Compatible v2 mNAV observations | ' + ' | '.join(str(len(v)) for v in mnav) + ' |')
    lines.append('| Mean producer mNAV (EV/BTC) | ' + ' | '.join(f'{statistics.mean(v):.3f}×' for v in mnav) + ' |')
    rows90 = windows[90]
    max_gap = max((time(b['ts'])-time(a['ts'])).total_seconds()/3600 for a,b in zip(rows90, rows90[1:]))
    lines += ["", f"Window end: **{history[-1]['ts']}**. The 90-day sample starts **{rows90[0]['ts']}**; "
              f"largest gap between observations within it is **{max_gap:.2f} hours**. "
              "These are arithmetic means of retained observations, not time-weighted prices or trading-day closes. "
              "Repeated closed-market stock quotes are included, so counts are not independent trades. "
              "mNAV includes only rows explicitly labelled v2; older unversioned values are excluded. "
              "Historical mNAV inherits the producer's historical share-count and preferred-value assumptions.", "",
              "| Filing date | General USD Cash | USD Reserve | STRC repurchased in disclosed period |",
              "|---|---:|---:|---:|"]
    reserve = {e['filing_date']:e for e in events['events'] if e['type']=='USD_RESERVE_UPDATE' and e['filing_date'] >= '2026-10-01'}
    repurchase = {e['filing_date']:e for e in events['events'] if e['type']=='SECURITY_REPURCHASE'}
    for date, event in sorted(reserve.items()):
        x=event['extracted'];r=repurchase[date]['extracted']
        lines.append(f"| {date} | ${x['usd_cash_usd']/1e6:,.1f}M | ${x['reserve_usd']/1e9:.2f}B | "
                     f"${r['per_security_aggregate_price_usd']['STRC']/1e6:,.1f}M |")
    latest=reserve[max(reserve)]
    assert latest['accession'] == feed['mstr_view']['balance_sheet']['usd_reserve_source_accession']
    policy=feed['digital_credit_framework']['usd_reserve_policy']
    assert policy['usd_cash_usd'] == latest['extracted']['usd_cash_usd']
    assert policy['balance_usd'] == latest['extracted']['reserve_usd']
    lines += ["", "Amounts are discrete filing observations, not a daily cash series. "
              "Disclosed periods differ in length; the October 5 repurchase observation covers September 28–30. "
              "No interpolation or annualized weekly buyback burn is used.", "",
              f"Latest filing: **{latest['accession']}**, filed **{latest['filing_date']}**. "
              f"Unspent preferred repurchase authorization: **${feed['digital_credit_framework']['dcs_repurchase_program']['remaining_usd']/1e6:,.1f}M**; "
              f"BTC held: **{feed['tradfi']['strategy_btc_holdings']['count']:,}**. Authorization is not cash.", "",
              f"Observed STRC rate: **{feed['tradfi']['strc_dividend']['current_rate']*100:.2f}%**, "
              f"current recorded payment cadence **{feed['tradfi']['strc_dividend']['dividend_frequency']}**. "
              "Proposed November daily terms are separately conditional; do not count both replacement schedules.", "",
              "**Model-quality limit:** the source flags `STRC_OUTSTANDING_BASE_AGED`. "
              "Its derived share count, absolute service obligations, preferred-value inputs and runway are provisional. "
              "No precise modeled service life is endorsed by this report.", END]
    return '\n'.join(lines)


def validate_scores(slug, text):
    fm={k: float(v) for k,v in re.findall(r'^([a-z_]+_score):\s*([0-9.]+)$', text.split('---', 2)[1], re.M)}
    table=text.split('## Scoring Rationale',1)[1].split('\n## ',1)[0]
    for label,key in SCORES[slug].items():
        match=re.search(r'^\| '+re.escape(label)+r' \| ([0-9.]+) \|',table,re.M)
        assert match and float(match[1]) == fm[key], f'{slug}: {key} body/frontmatter mismatch'
    mean=statistics.mean(fm[k] for k in SCORES[slug].values() if k != 'overall_score')
    assert fm['overall_score'] <= mean
    assert f'four-axis mean is {mean:g}' in text, f'{slug}: mean disclosure mismatch'
    headings = re.findall(r'^## [1-4] · (.+) — ([0-9.]+)$', text, re.M)
    keys = [key for key in SCORES[slug].values() if key != 'overall_score']
    assert len(headings) == 4
    for (_, value), key in zip(headings, keys):
        assert float(value) == fm[key], f'{slug}: heading/frontmatter mismatch for {key}'
    basis=json.loads((DATA/'strc_axis_basis.json').read_text())
    family=next(a for a in basis['family_overalls']['assets'] if a['slug']==slug)
    assert family['overall_score'] == fm['overall_score'], f'{slug}: family overall mismatch'
    if slug=='strc':
        for section,key in [('peg','volatility_score'),('liquidity','liquidity_score')]:
            assert basis[section][key] == fm[key]


def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--write',action='store_true')
    parser.add_argument('--check',action='store_true')
    args=parser.parse_args()
    expected=render()
    for slug in SCORES:
        path=ROOT/'src/content/reports'/f'{slug}.md';text=path.read_text()
        before,remainder=text.split(START,1);current,after=remainder.split(END,1)
        if args.write:
            text=before+expected+after;path.write_text(text)
        else:
            assert START+current+END == expected,f'{slug}: shared evidence differs; run --write'
        validate_scores(slug,text)
    print('MSTR/STRC shared evidence, definitions, instrument score tables and local family scores agree')


if __name__=='__main__':
    main()
