/** Exact Reserve eUSD candidate. Measured accounting is never an authored grade. */
var EusdRenderer = {
    e: function(v) { return CommonRenderer._escapeAttr(String(v == null ? 'Unknown' : v)); },
    n: function(v, places) { return v == null || !Number.isFinite(Number(v)) ? 'Unmeasured' : Number(v).toLocaleString('en-US',{maximumFractionDigits:places == null ? 2 : places}); },
    box: function(title, body) { return '<div class="panel"><div class="panel-title">'+this.e(title)+'</div>'+body+'</div>'; },
    section: function(id, number, title, html) {
        var el=document.getElementById('section-'+id); if (!el) return;
        el.classList.remove('hidden'); el.style.minWidth='0'; el.style.overflowWrap='anywhere';
        el.innerHTML='<div class="axis-head"><span class="axis-num">'+number+'</span><span class="axis-title">'+this.e(title)+'</span></div>'+html;
    },
    render: function(data) {
        var p=data.asset_specific.reserve_eusd, a=p.accounting, b=p.basket, r=p.redemption, s=p.rsr, self=this;
        var clock=this.e(p.source_clock.block_timestamp)+' · Ethereum block '+this.e(p.source_clock.block_number);
        var members=b.holdings.filter(function(x){return x.current_basket_member===true;});
        var card=function(title,value,basis){return '<div class="summary-card"><div class="card-label">'+self.e(title)+'</div><div class="card-value" style="font-size:1.15rem;overflow-wrap:anywhere">'+self.e(value)+'</div><div class="text-xs text-slate-500 mt-2">'+self.e(basis)+'</div></div>';};
        document.getElementById('summary-cards').innerHTML=
            card('Stability','Unmeasured','No accepted market mark or historical series yet')+
            card('Backing',this.n(a.basket_unit_coverage_low_pct)+'% basket units','Protocol basket-unit view; independent recoverability unknown')+
            card('Liquidity & Exit',this.n(r.available_eusd)+' eUSD','Basket-redemption availability; DEX/cash proceeds unmeasured')+
            card('Dependencies',members.length+' basket receipts','Underlying allocation and liquidation lookthrough pending')+
            card('Contract & Admin','Review pending','No score or clearance inherited from Reserve architecture')+
            card('Issuer','Selected facts','Component-scoped documentary evidence; no current grade');
        this.section('peg',1,'Stability',this.box('Market reference not measured',
            '<p>The reference is a nominal $1 target. No accepted eUSD market mark or historical peg series is available in this candidate. Basket plugin prices are not substituted for market prices.</p>'));
        var rows=members.map(function(x){return '<tr><td>'+self.e(x.symbol)+'<br><span class="text-xs font-mono">'+self.e(x.token)+'</span></td><td>'+self.e(self.n(x.prime_target_weight_pct))+'%</td><td>'+self.e(self.n(x.held_units,6))+'</td><td>'+self.e(self.n(x.required_units_for_baskets_needed,6))+'</td><td>'+self.e(self.n(x.held_minus_required_units,6))+'</td></tr>';}).join('');
        this.section('backing',2,'Backing',this.box('Current basket and actual holdings',
            '<p class="text-xs text-slate-500">'+clock+'</p><p class="mt-2">Supply '+this.n(a.supply_eusd)+' eUSD; baskets needed '+this.n(a.baskets_needed)+'. Reported basket status '+this.e(b.status)+' (0=SOUND), fully collateralized '+this.e(b.fully_collateralized)+'. These flags and basket-unit coverage do not independently verify underlying credit recovery.</p>'+
            '<p class="text-xs text-slate-500 mt-3">Scroll the table horizontally to compare receipt requirements and actual balances.</p><div class="overflow-x-auto mt-4" role="region" tabindex="0" aria-label="Current eUSD basket holdings, scroll horizontally"><table class="data-table" style="min-width:700px"><thead><tr><th>Receipt</th><th>Prime target</th><th>Actually held</th><th>Current requirement</th><th>Held minus requirement</th></tr></thead><tbody>'+rows+'</tbody></table></div>'+
            '<p class="text-xs text-slate-500 mt-3">Targets are not holdings. Requirements use current per-basket quantities × baskets needed, with receipt-native decimals. Receipt amounts are not USDC/USDT cash.</p>'+
            '<p class="mt-3">Registered external plugin marks: $'+this.n(a.external_registered_plugin_mark_low_usd)+'–$'+this.n(a.external_registered_plugin_mark_high_usd)+'. Own eUSD and RSR are excluded. This is a protocol-price range, not an independently recoverable NAV.</p>')+
            this.box('RSR first-loss limits','<p>RSR held by the staking contract: '+this.n(s.staking_contract_balance_units)+' RSR. Active-stake and draft getters are unavailable; contract balance is not labelled active stake. Realizable first-loss proceeds, sale liquidity and concentration remain unmeasured. The historical 23% buffer is not reused.</p>'));
        this.section('liquidity',3,'Liquidity & Exit',this.box('Basket redemption is separate from cash exit',
            '<p class="text-xs text-slate-500">'+clock+'</p><p class="mt-2">Redemption available: '+this.n(r.available_eusd)+' eUSD ('+this.n(r.available_supply_pct)+'% of supply). Frozen: '+this.e(r.frozen)+'. Trading paused: '+this.e(r.trading_paused)+'. Issuance paused: '+this.e(r.issuance_paused)+'. Open trades: '+this.e(r.trades_open)+'.</p>'+
            '<p class="mt-3">Protocol availability is not a reservation or an executed redemption. Basket-token delivery, receipt withdrawals and the final USDC/USDT sale are separate stages. Holder-specific execution and final cash proceeds are unknown.</p>'+
            '<p class="mt-3">DEX depth and 10/25/50-bps crossings: <strong>unmeasured</strong>. The external quote request awaits authorization; no failure is interpreted as zero liquidity.</p>'));
        this.section('dependencies',4,'Dependencies',this.box('Receipt exposures need underlying lookthrough',
            '<p>Current basket receipts: '+members.map(function(x){return self.e(x.symbol);}).join(', ')+'. Token/plugin identities are observed; current underlying Aave/Compound/Morpho market allocations, credit quality and cash exit capacity are not established by that list.</p><p class="mt-3">No overall or dependency grade is inherited from the unscored Reserve architecture report. Governance target allocations do not prove present underlying holdings.</p>'));
        this.section('contract',5,'Contract & Admin',this.box('Exact control review pending',
            '<p>Financial getter observations do not certify implementation, plugin, governor, timelock, pauser, freezer or upgrade authority. Security’s exact eUSD return is pending. No healthy band or contract grade is inferred from an unpaused snapshot or another Reserve product.</p>'));
        var issuer=data.asset_specific.issuer_component || {}, facts=issuer.facts || [], entities=issuer.entities || [];
        var priority=['native_redemption_not_unconditional_cash','current_product_legal_assurance_gap','governor_timelock_owner_pin','november_original_revised_active_owner_pin','rsr_backstop_limits','exact_ethereum_identity'];
        facts=facts.slice().sort(function(a,b){var rank=function(f){var n=priority.indexOf(f.key);return n<0?100:n;};return rank(a)-rank(b);});
        var items=facts.map(function(f){return '<li class="mb-3"><strong>'+self.e(f.key)+'</strong>: '+self.e(f.value)+'<div class="text-xs text-slate-500">'+self.e(f.status)+' · source/effective '+self.e(f.source_date || f.as_of)+' · reviewed '+self.e(f.checked)+'</div>'+ (f.source_urls||[]).map(function(u){return '<a href="'+self.e(u)+'" target="_blank" rel="noopener">Source ↗</a>';}).join(' · ')+'</li>';});
        this.section('issuer',6,'Issuer',this.box('Reserve eUSD — selected component',
            '<p>Documentary review '+this.e(issuer.profile_checked)+'. '+entities.map(function(x){return self.e(x.role)+': '+self.e(x.name)+' ('+self.e(x.status)+')';}).join('; ')+'. No issuer, insurance or par-redemption right is inherited from the parent family.</p><ul class="mt-4">'+items.slice(0,3).join('')+'</ul><details class="mt-3"><summary>More selected facts and original source clocks ('+facts.length+')</summary><ul class="mt-4">'+items.slice(3).join('')+'</ul></details><p class="text-xs text-slate-500 mt-3">The October basket execution is documentary context, not a substitute for the current holdings above. Passed, active and executed governance stages remain distinct.</p>'));
    }
};
