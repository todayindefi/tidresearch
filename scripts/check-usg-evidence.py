#!/usr/bin/env python3
"""Render/check USG report evidence from archived dashboard payloads.

No independent prices or quotes are acquired here. Refresh the archived dashboard
files and their source manifest together, then run --write and review the prose.
"""
import argparse
import hashlib
import json
import statistics
import re
from datetime import datetime, timedelta
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
EVIDENCE = ROOT / "public/data/usg/2026-10-28"
REPORT = ROOT / "src/content/reports/usg.md"
START = "<!-- usg-shared-evidence:start -->"
END = "<!-- usg-shared-evidence:end -->"


def timestamp(value):
    return datetime.fromisoformat(value.replace("Z", "+00:00"))


def render(evidence=EVIDENCE):
    manifest = json.loads((evidence / "sources.json").read_text())
    for name, source in manifest.items():
        assert source["url"] == "https://todayindefi.github.io/backing-monitor/data/" + name
        assert hashlib.sha256((evidence / name).read_bytes()).hexdigest() == source["sha256"], name
    feed = json.loads((evidence / "usg_backing.json").read_text())
    history = json.loads((evidence / "usg_backing_history.json").read_text())
    liquidity = json.loads((evidence / "usg_liquidity.json").read_text())
    assert feed["asset_slug"] == liquidity["asset_slug"] == "usg"
    peg = feed["peg"]
    assert peg["history_ref"] == "usg_backing_history.json"
    assert peg["history_field"] == "peg" and peg["nav"] == 1.0
    depth = liquidity["depth"]
    assert depth["anchor"]["fair_value_basis"] == "market"
    assert "slippage_bps_debiased" in depth["rungs"][0]
    assert depth["baseline_rung"]["size_usd"] == 100
    # Scores remain authored once in riskAnalyst, then consumed by both views.
    # Check the archived dashboard copies rather than silently accepting drift.
    frontmatter = REPORT.read_text().split('---', 2)[1]
    basis = json.loads((evidence / 'usg_axis_basis.json').read_text())
    contract = json.loads((evidence / 'usg_contract_overlay.json').read_text())
    score_sources = [
        (basis['peg'], 'peg_mechanism_score'),
        (basis['backing'], 'backing_score'),
        (basis['liquidity'], 'liquidity_score'),
        (basis['dependencies'], 'underlying_score'),
        (contract['contract'], 'structural_score'),
        (basis['issuer'], 'issuer_score'),
    ]
    for source, key in score_sources:
        authored = float(re.search(r'^' + key + r':\s*([0-9.]+)', frontmatter, re.M)[1])
        assert source[key] == authored, f'dashboard/report score mismatch: {key}'
    rows = sorted(history["entries"], key=lambda r: timestamp(r["timestamp"]))
    assert len({r["timestamp"] for r in rows}) == len(rows)
    end = timestamp(rows[-1]["timestamp"])
    summaries = {}
    for days in (7, 30):
        sample = [r for r in rows if end - timedelta(days=days) < timestamp(r["timestamp"]) <= end]
        assert sample
        summaries[days] = {
            "n": len(sample),
            "peg_mean": statistics.mean(r["peg"] for r in sample),
            "below_par": sum(r["peg"] < 1 for r in sample),
            "below_99": sum(r["peg"] < .99 for r in sample),
            "cr_mean": statistics.mean(r["collateral_ratio"] for r in sample),
            "supply_mean": statistics.mean(r["real_supply"] for r in sample),
            "inventory_mean": statistics.mean(r["pol_pool_stables"] for r in sample),
            "bad_debt_samples": sum(r["total_bad_debt"] > 0 for r in sample),
            "pol_samples": sum(r["pol_deployed"] > 0 for r in sample),
        }
    gap = max((timestamp(b["timestamp"]) - timestamp(a["timestamp"])).total_seconds()/3600
              for a, b in zip(rows, rows[1:]))
    lines = [START, f"Shared dashboard history: **{rows[0]['timestamp']}–{rows[-1]['timestamp']}**. "
             "The 30-day column uses the available retained window, slightly shorter than 30 full days. "
             "Means are arithmetic means of observed samples, not time-weighted returns or guaranteed execution prices.",
             "", "| Shared-history measure | Last 7 days | Retained 30-day window |",
             "|---|---:|---:|"]
    a, b = summaries[7], summaries[30]
    entries = [
        ("Observed samples", str(a['n']), str(b['n'])),
        ("Mean peg price", f"${a['peg_mean']:.6f}", f"${b['peg_mean']:.6f}"),
        ("Mean discount to $1", f"{(1-a['peg_mean'])*10000:.1f} bps", f"{(1-b['peg_mean'])*10000:.1f} bps"),
        ("Samples below par", f"{a['below_par']}/{a['n']}", f"{b['below_par']}/{b['n']}"),
        ("Samples below $0.99", str(a['below_99']), str(b['below_99'])),
        ("Mean conservative collateral ratio", f"{a['cr_mean']:.2f}%", f"{b['cr_mean']:.2f}%"),
        ("Mean circulating supply", f"{a['supply_mean']/1e6:.2f}M USG", f"{b['supply_mean']/1e6:.2f}M USG"),
        ("Mean counter-side pool inventory", f"${a['inventory_mean']:,.0f}", f"${b['inventory_mean']:,.0f}"),
        ("Samples reporting bad debt / outstanding keeper POL", f"{a['bad_debt_samples']} / {a['pol_samples']}", f"{b['bad_debt_samples']} / {b['pol_samples']}"),
    ]
    lines += [f"| {label} | {a} | {b} |" for label, a, b in entries]
    worst = min(rows, key=lambda r: r['peg'])
    lines += ["", f"Largest gap between retained observations: **{gap:.2f} hours**. "
              f"Lowest reported peg: **${worst['peg']:.6f}**, at **{worst['timestamp']}**. "
              "Sample counts describe observations, not time spent at those levels. "
              "The pool-derived historical marks have not been independently reconstructed as executable fills.",
              "", f"Liquidity source: shared liquidity feed **{liquidity['as_of']}**, market-price anchor "
              f"**${depth['anchor']['fair_value']:.6f}** ({depth['anchor']['fair_value_as_of']}). "
              "Only one snapshot of this ladder is archived in this review; no average depth or depth trend is inferred.",
              "", "| Market-valued trade size | Dashboard added price impact | Total cost versus market value |",
              "|---:|---:|---:|"]
    for row in depth['rungs']:
        assert row['status'] == 'ok'
        lines.append(f"| ${row['size_usd']:,.0f} | {-row['slippage_bps_debiased']:.2f} bps | {-row['slippage_bps']:.2f} bps |")
    for label, bracket in (("50-bps", depth['depth_50bps']['bracket']), ("200-bps", depth['bracket'])):
        lines += ["", f"{label} added-impact crossing: **${bracket['last_clearing_size_usd']:,.2f}–"
                  f"${bracket['first_crossing_size_usd']:,.2f}**. The lower bound clears; it is not the exact crossing."]
    lines += [END]
    return '\n'.join(lines)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--write', action='store_true')
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    text = REPORT.read_text()
    before, remainder = text.split(START, 1)
    current, after = remainder.split(END, 1)
    expected = render()
    if args.write:
        REPORT.write_text(before + expected + after)
        print('Updated USG shared-history and dashboard-ladder evidence')
    else:
        assert START + current + END == expected, 'USG evidence differs from shared dashboard inputs; run --write'
        print('USG shared-source hashes, peg/history semantics and report evidence agree')


if __name__ == '__main__':
    main()
