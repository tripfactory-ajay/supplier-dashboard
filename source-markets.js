// ── SOURCE MARKETS OVERRIDE ───────────────────────────────────────
// This file loads AFTER app.js and patches in the Source Markets tab.
// It completely replaces the suppliers NAV entry and registers the page.

(function(){
'use strict';

// ── DATA ──────────────────────────────────────────────────────────
const contractOfficeMarkets = [
  {id:'COM-001',contractRef:'CTR-2024-0081',supplier:'Atlantis The Palm',dest:'Dubai',contractType:'Service Contract',contractValue:'£840K',contractExpiry:'Dec 2025',officeId:'RO-01',officeName:'London — Global HQ',officeFlag:'🇬🇧',sourceMarkets:['UK','Ireland'],marketScope:'UK & Ireland',allocation:'60%',ornOwner:'Layla Hassan',ornManager:'Ajay Kawa',rateType:'ORN UK Rate',currency:'GBP',notes:'UK and Ireland B2B bookings through London HQ only.',status:'Active',validFrom:'01 Jan 2024',validTo:'31 Dec 2025'},
  {id:'COM-002',contractRef:'CTR-2024-0081',supplier:'Atlantis The Palm',dest:'Dubai',contractType:'Service Contract',contractValue:'£840K',contractExpiry:'Dec 2025',officeId:'RO-02',officeName:'Dubai — Gulf Office',officeFlag:'🇦🇪',sourceMarkets:['UAE / GCC','Saudi Arabia'],marketScope:'GCC Markets',allocation:'30%',ornOwner:'Omar Al Farsi',ornManager:'Omar Al Farsi',rateType:'GCC Rate',currency:'GBP / AED',notes:'UAE, Saudi Arabia, Kuwait, Bahrain bookings through Dubai office.',status:'Active',validFrom:'01 Jan 2024',validTo:'31 Dec 2025'},
  {id:'COM-003',contractRef:'CTR-2024-0081',supplier:'Atlantis The Palm',dest:'Dubai',contractType:'Service Contract',contractValue:'£840K',contractExpiry:'Dec 2025',officeId:'RO-05',officeName:'Madrid — Europe & Americas',officeFlag:'🇪🇸',sourceMarkets:['Germany','France','Netherlands'],marketScope:'Continental Europe',allocation:'10%',ornOwner:'Sarah Mitchell',ornManager:'Sarah Mitchell',rateType:'EU Agent Rate',currency:'EUR',notes:'European allocation at EU rates. No exclusive ORN contract yet.',status:'Pending',validFrom:'01 Jan 2024',validTo:'31 Dec 2025'},
  {id:'COM-004',contractRef:'CTR-2023-0086',supplier:'Oman Luxury Resorts',dest:'Oman',contractType:'Service Contract',contractValue:'£580K',contractExpiry:'May 2026',officeId:'RO-01',officeName:'London — Global HQ',officeFlag:'🇬🇧',sourceMarkets:['UK','Ireland'],marketScope:'UK & Ireland',allocation:'45%',ornOwner:'Layla Hassan',ornManager:'Omar Al Farsi',rateType:'ORN UK Rate',currency:'GBP',notes:'UK market primary source. Fatima Al Balushi is supplier contact.',status:'Active',validFrom:'01 Jun 2023',validTo:'31 May 2026'},
  {id:'COM-005',contractRef:'CTR-2023-0086',supplier:'Oman Luxury Resorts',dest:'Oman',contractType:'Service Contract',contractValue:'£580K',contractExpiry:'May 2026',officeId:'RO-02',officeName:'Dubai — Gulf Office',officeFlag:'🇦🇪',sourceMarkets:['UAE / GCC','Oman'],marketScope:'Gulf & Oman',allocation:'40%',ornOwner:'Omar Al Farsi',ornManager:'Omar Al Farsi',rateType:'GCC Direct Rate',currency:'OMR / GBP',notes:'GCC & Oman domestic. Sultan Al Busaidi handles directly.',status:'Active',validFrom:'01 Jun 2023',validTo:'31 May 2026'},
  {id:'COM-006',contractRef:'CTR-2023-0086',supplier:'Oman Luxury Resorts',dest:'Oman',contractType:'Service Contract',contractValue:'£580K',contractExpiry:'May 2026',officeId:'RO-05',officeName:'Madrid — Europe & Americas',officeFlag:'🇪🇸',sourceMarkets:['Germany'],marketScope:'Germany / DACH',allocation:'15%',ornOwner:'Sarah Mitchell',ornManager:'Sarah Mitchell',rateType:'EU ORN Rate',currency:'EUR',notes:'DACH market via Klaus Weber in Munich.',status:'Active',validFrom:'01 Jun 2023',validTo:'31 May 2026'},
  {id:'COM-007',contractRef:'CTR-2023-0083',supplier:'Desert Tracks Tours',dest:'Dubai',contractType:'Service Contract',contractValue:'£120K',contractExpiry:'Feb 2024',officeId:'RO-01',officeName:'London — Global HQ',officeFlag:'🇬🇧',sourceMarkets:['UK'],marketScope:'UK Only',allocation:'100%',ornOwner:'Layla Hassan',ornManager:'Priya Sharma',rateType:'ORN UK Rate',currency:'GBP',notes:'UK-only contract. All bookings must originate from UK B2B partners.',status:'Expired',validFrom:'01 Mar 2023',validTo:'28 Feb 2024'},
  {id:'COM-008',contractRef:'CTR-MV-2024-01',supplier:'Maldives Sunset Cruises',dest:'Maldives',contractType:'Service Contract',contractValue:'£95K',contractExpiry:'Awaiting',officeId:'RO-04',officeName:'Bangkok — Asia & Maldives',officeFlag:'🇹🇭',sourceMarkets:['UK'],marketScope:'UK Only — pending expansion',allocation:'100%',ornOwner:'Priya Sharma',ornManager:'Priya Sharma',rateType:'ORN UK Rate',currency:'GBP',notes:'Bangkok manages. Will expand to India once Bangalore office operational.',status:'Pending',validFrom:'Pending',validTo:'Awaiting'},
  {id:'COM-009',contractRef:'CTR-MV-2024-01',supplier:'Maldives Sunset Cruises',dest:'Maldives',contractType:'Service Contract',contractValue:'£95K',contractExpiry:'Awaiting',officeId:'RO-06',officeName:'Bangalore — India Office',officeFlag:'🇮🇳',sourceMarkets:['India'],marketScope:'India — planned',allocation:'TBD',ornOwner:'Priya Sharma',ornManager:'Priya Sharma',rateType:'India Rate — TBD',currency:'GBP / INR',notes:'Planned once Bangalore office fully operational.',status:'Planned',validFrom:'TBD',validTo:'TBD'},
  {id:'COM-010',contractRef:'CTR-2024-0099',supplier:'Cappadocia Balloon Tours',dest:'Turkey',contractType:'Service Contract',contractValue:'£180K',contractExpiry:'Aug 2026',officeId:'RO-05',officeName:'Madrid — Europe & Americas',officeFlag:'🇪🇸',sourceMarkets:['UK','Germany','France','Netherlands'],marketScope:'Europe',allocation:'80%',ornOwner:'Sarah Mitchell',ornManager:'Sarah Mitchell',rateType:'EU ORN Rate',currency:'GBP / EUR',notes:'Madrid manages all European source markets for Turkey.',status:'Active',validFrom:'01 Sep 2024',validTo:'31 Aug 2026'},
  {id:'COM-011',contractRef:'CTR-2024-0099',supplier:'Cappadocia Balloon Tours',dest:'Turkey',contractType:'Service Contract',contractValue:'£180K',contractExpiry:'Aug 2026',officeId:'RO-01',officeName:'London — Global HQ',officeFlag:'🇬🇧',sourceMarkets:['UAE / GCC'],marketScope:'GCC via London',allocation:'20%',ornOwner:'Layla Hassan',ornManager:'Sarah Mitchell',rateType:'GCC via London Rate',currency:'GBP',notes:'GCC customers booking Turkey routed through London HQ.',status:'Active',validFrom:'01 Sep 2024',validTo:'31 Aug 2026'},
];

const smOffices = [
  {id:'RO-01',flag:'🇬🇧',name:'London — Global HQ',city:'London',country:'UK',head:'Ajay Kawa'},
  {id:'RO-02',flag:'🇦🇪',name:'Dubai — Gulf Office',city:'Dubai',country:'UAE',head:'Omar Al Farsi'},
  {id:'RO-03',flag:'🇪🇬',name:'Cairo — Africa & Middle East',city:'Cairo',country:'Egypt',head:'Ravi Patel'},
  {id:'RO-04',flag:'🇹🇭',name:'Bangkok — Asia & Maldives',city:'Bangkok',country:'Thailand',head:'Priya Sharma'},
  {id:'RO-05',flag:'🇪🇸',name:'Madrid — Europe & Americas',city:'Madrid',country:'Spain',head:'Sarah Mitchell'},
  {id:'RO-06',flag:'🇮🇳',name:'Bangalore — India Office',city:'Bangalore',country:'India',head:'Priya Sharma'},
];

const smContracts = [
  {id:'CTR-2024-0081',supplier:'Atlantis The Palm',dest:'Dubai',type:'Service Contract',value:'£840K',expiry:'Dec 2025'},
  {id:'CTR-2023-0086',supplier:'Oman Luxury Resorts',dest:'Oman',type:'Service Contract',value:'£580K',expiry:'May 2026'},
  {id:'CTR-2023-0083',supplier:'Desert Tracks Tours',dest:'Dubai',type:'Service Contract',value:'£120K',expiry:'Feb 2024'},
  {id:'CTR-MV-2024-01',supplier:'Maldives Sunset Cruises',dest:'Maldives',type:'Service Contract',value:'£95K',expiry:'Awaiting'},
  {id:'CTR-2024-0099',supplier:'Cappadocia Balloon Tours',dest:'Turkey',type:'Service Contract',value:'£180K',expiry:'Aug 2026'},
];

const ALL_MARKETS = ['UK','Ireland','UAE / GCC','Germany','France','USA','Netherlands','Italy','Spain','Australia','India','Saudi Arabia','Oman','Jordan'];
const MC = {UK:'#1a3a6b',Ireland:'#169b62','UAE / GCC':'#ef3340',Germany:'#cc0000','Saudi Arabia':'#006c35',France:'#0055a4',USA:'#b22234',Netherlands:'#ae1c28',Italy:'#009246',Spain:'#aa151b',Australia:'#00008b',India:'#ff9933',Oman:'#db161b',Jordan:'#007a3d'};
const MF = {UK:'🇬🇧',Ireland:'🇮🇪','UAE / GCC':'🇦🇪',Germany:'🇩🇪','Saudi Arabia':'🇸🇦',France:'🇫🇷',USA:'🇺🇸',Netherlands:'🇳🇱',Italy:'🇮🇹',Spain:'🇪🇸',Australia:'🇦🇺',India:'🇮🇳',Oman:'🇴🇲',Jordan:'🇯🇴'};

function mktBadge(m){
  const c=MC[m]||'#888', f=MF[m]||'🌍';
  return `<span style="display:inline-flex;align-items:center;gap:3px;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:700;background:${c}20;color:${c};white-space:nowrap;margin:1px">${f} ${m}</span>`;
}
function stPill(s){
  return s==='Active'?'<span class="pill p-green">Active</span>':s==='Pending'?'<span class="pill p-orange">Pending</span>':s==='Planned'?'<span class="pill p-blue">Planned</span>':'<span class="pill p-red">Expired</span>';
}
function smBtn(label,cls,onclick){
  return `<button class="btn ${cls}" onclick="${onclick}">${label}</button>`;
}
function smOrnTeamSel(){
  const t=window.ornTeam||[];
  return t.map(x=>`<option value="${x.id}">${x.name} — ${x.role}</option>`).join('');
}
function mktsCheckboxes(selected){
  return ALL_MARKETS.map(m=>{
    const c=MC[m]||'#666', f=MF[m]||'🌍';
    const chk=(selected||[]).includes(m)?'checked':'';
    return `<label style="display:flex;align-items:center;gap:6px;padding:7px 10px;border:1px solid ${chk?c:'var(--border-lt)'};border-radius:4px;cursor:pointer;background:${chk?c+'18':'#fff'}">
      <input type="checkbox" value="${m}" ${chk} onchange="const l=this.closest('label');l.style.background=this.checked?'${c}18':'#fff';l.style.borderColor=this.checked?'${c}':'var(--border-lt)'">
      <span style="font-size:12.5px">${f} ${m}</span>
    </label>`;
  }).join('');
}

// ── MAIN PAGE ─────────────────────────────────────────────────────
function pg_sup_source_markets(){
  const active  = contractOfficeMarkets.filter(r=>r.status==='Active').length;
  const pending = contractOfficeMarkets.filter(r=>r.status==='Pending'||r.status==='Planned').length;
  const allMkts = [...new Set(contractOfficeMarkets.flatMap(r=>r.sourceMarkets))].sort();
  const contractRefs = [...new Set(contractOfficeMarkets.map(r=>r.contractRef))];

  // ── BY CONTRACT VIEW ──
  const byContract = contractRefs.map(ref=>{
    const rows = contractOfficeMarkets.filter(r=>r.contractRef===ref);
    const f = rows[0];
    const trs = rows.map(r=>`
      <tr style="border-bottom:1px solid var(--border-lt);${r.status==='Expired'?'opacity:0.5':''}">
        <td style="padding:8px 10px">${r.officeFlag} <b>${r.officeName.split('—')[0].trim()}</b><div style="font-size:10.5px;color:var(--text3)">${smOffices.find(o=>o.id===r.officeId)?.city||''}</div></td>
        <td style="padding:8px 10px">${smOffices.find(o=>o.id===r.officeId)?.head||'—'}</td>
        <td style="padding:8px 10px;max-width:220px"><div style="display:flex;flex-wrap:wrap">${r.sourceMarkets.map(m=>mktBadge(m)).join('')}</div></td>
        <td style="padding:8px 10px;font-size:11.5px">${r.marketScope}</td>
        <td style="padding:8px 10px;font-size:12px;font-weight:700;color:var(--navy)">${r.allocation}</td>
        <td style="padding:8px 10px;font-size:11.5px;font-weight:600">${r.ornOwner}</td>
        <td style="padding:8px 10px;font-size:11.5px">${r.ornManager}</td>
        <td style="padding:8px 10px"><span style="background:var(--bg-page);border:1px solid var(--border-lt);padding:2px 6px;border-radius:3px;font-size:10.5px">${r.rateType}</span></td>
        <td style="padding:8px 10px;font-size:11px">${r.currency}</td>
        <td style="padding:8px 10px">${stPill(r.status)}</td>
        <td style="padding:8px 10px;font-size:10.5px;color:var(--text3)">${r.validFrom}<br>→ ${r.validTo}</td>
        <td style="padding:8px 10px">
          ${smBtn('Edit','btn-white btn-sm',`openEditCOMModal('${r.id}')`)}
          ${smBtn('✕','btn-white btn-sm',"if(confirm('Remove?'))toast('Removed')")}
        </td>
      </tr>`).join('');
    return `<div class="smgr-block" style="border:1px solid var(--border-lt);border-radius:var(--r);margin-bottom:14px;overflow:hidden">
      <div style="background:var(--bg-top);padding:10px 14px;border-bottom:1px solid var(--border-lt);display:flex;align-items:center;justify-content:space-between">
        <div>
          <span class="mono" style="font-size:11px;color:var(--text3)">${f.contractRef}</span>
          <div style="font-size:13.5px;font-weight:700;color:var(--navy)">${f.supplier}</div>
          <div style="font-size:11.5px;color:var(--text3)">${f.dest} · ${f.contractType} · ${f.contractValue} · Expiry: ${f.contractExpiry}</div>
        </div>
        <div style="display:flex;gap:6px">
          ${smBtn('+ Add Office / Market','btn-navy btn-sm',`openAddCOMModal('${ref}','${f.supplier}')`)}
        </div>
      </div>
      <div style="overflow-x:auto">
      <table style="width:100%;border-collapse:collapse;font-size:12px;min-width:900px">
        <thead><tr style="background:var(--bg-page)">${['Regional Office','Head','Source Markets','Market Scope','Allocation','ORN Owner','ORN Manager','Rate Type','Currency','Status','Valid Period','Actions'].map(h=>`<th style="padding:6px 10px;text-align:left;font-size:10.5px;color:var(--text3);border-bottom:1px solid var(--border-lt);font-weight:700;white-space:nowrap">${h}</th>`).join('')}</tr></thead>
        <tbody>${trs}</tbody>
      </table>
      </div>
      ${rows.some(r=>r.notes)?`<div style="padding:8px 14px;background:var(--bg-page);border-top:1px solid var(--border-lt)">${rows.map(r=>`<div style="font-size:11.5px;color:var(--text2);margin-bottom:2px"><b>${r.officeFlag}:</b> ${r.notes}</div>`).join('')}</div>`:''}
    </div>`;
  }).join('');

  // ── BY OFFICE VIEW ──
  const byOffice = smOffices.map(office=>{
    const rows = contractOfficeMarkets.filter(r=>r.officeId===office.id);
    const mktsCovered = [...new Set(rows.flatMap(r=>r.sourceMarkets))];
    return `<div style="border:1px solid var(--border-lt);border-left:4px solid var(--navy);border-radius:var(--r);margin-bottom:14px;overflow:hidden">
      <div style="background:var(--bg-top);padding:10px 14px;border-bottom:1px solid var(--border-lt);display:flex;align-items:center;justify-content:space-between">
        <div style="display:flex;align-items:center;gap:10px">
          <span style="font-size:24px">${office.flag}</span>
          <div>
            <div style="font-size:14px;font-weight:700;color:var(--navy)">${office.name}</div>
            <div style="font-size:11.5px;color:var(--text3)">${office.head} · ${rows.length} contract allocation${rows.length!==1?'s':''}</div>
            <div style="display:flex;flex-wrap:wrap;gap:3px;margin-top:4px">
              ${mktsCovered.length?mktsCovered.map(m=>mktBadge(m)).join(''):'<span style="font-size:11.5px;color:var(--text3);font-style:italic">No markets assigned yet</span>'}
            </div>
          </div>
        </div>
        ${smBtn('+ Assign Contract','btn-navy btn-sm',`openAssignToSMOffice('${office.id}','${office.name}')`)}
      </div>
      ${rows.length===0?`<div style="padding:24px;text-align:center;color:var(--text3)"><div style="font-size:28px;margin-bottom:6px">📋</div><b>No contracts assigned yet.</b> Click "Assign Contract" to add one.</div>`:`
      <table style="width:100%;border-collapse:collapse;font-size:12px">
        <thead><tr style="background:var(--bg-page)">${['Contract Ref','Supplier','Destination','Source Markets','Allocation','ORN Owner','Rate Type','Status','Actions'].map(h=>`<th style="padding:6px 10px;text-align:left;font-size:10.5px;color:var(--text3);border-bottom:1px solid var(--border-lt);font-weight:700">${h}</th>`).join('')}</tr></thead>
        <tbody>${rows.map(r=>`<tr style="border-bottom:1px solid var(--border-lt);${r.status==='Expired'?'opacity:0.5':''}">
          <td style="padding:7px 10px" class="mono">${r.contractRef}</td>
          <td style="padding:7px 10px;font-weight:600">${r.supplier}</td>
          <td style="padding:7px 10px;font-size:11.5px">${r.dest}</td>
          <td style="padding:7px 10px;max-width:200px"><div style="display:flex;flex-wrap:wrap">${r.sourceMarkets.map(m=>mktBadge(m)).join('')}</div></td>
          <td style="padding:7px 10px;font-weight:700;color:var(--navy)">${r.allocation}</td>
          <td style="padding:7px 10px;font-size:11.5px;font-weight:600">${r.ornOwner}</td>
          <td style="padding:7px 10px;font-size:11px">${r.rateType}</td>
          <td style="padding:7px 10px">${stPill(r.status)}</td>
          <td style="padding:7px 10px;display:flex;gap:4px">
            ${smBtn('Edit','btn-white btn-sm',`openEditCOMModal('${r.id}')`)}
            ${smBtn('✕','btn-white btn-sm',"if(confirm('Remove?'))toast('Removed')")}
          </td>
        </tr>`).join('')}</tbody>
      </table>`}
    </div>`;
  }).join('');

  // ── BY MARKET VIEW ──
  const byMarket = allMkts.map(market=>{
    const c=MC[market]||'#888', f=MF[market]||'🌍';
    const rows=contractOfficeMarkets.filter(r=>r.sourceMarkets.includes(market));
    return `<div style="border:1px solid ${c}33;border-left:4px solid ${c};border-radius:var(--r);margin-bottom:14px;overflow:hidden">
      <div style="background:${c}08;padding:10px 14px;border-bottom:1px solid ${c}22;display:flex;align-items:center;justify-content:space-between">
        <div style="display:flex;align-items:center;gap:10px">
          <span style="font-size:24px">${f}</span>
          <div>
            <div style="font-size:14px;font-weight:700;color:${c}">${market} Source Market</div>
            <div style="font-size:11.5px;color:var(--text2)">${rows.filter(r=>r.status==='Active').length} active · ${rows.filter(r=>r.status!=='Active').length} pending/expired · ${[...new Set(rows.map(r=>r.officeId))].length} office(s)</div>
          </div>
        </div>
        ${smBtn('+ Add Contract','btn-white btn-sm',`openAddCOMModal(null,null)`)}
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:12px">
        <thead><tr style="background:var(--bg-page)">${['Contract Ref','Supplier','Destination','Regional Office','Allocation','ORN Owner','Rate Type','Currency','Status','Actions'].map(h=>`<th style="padding:6px 10px;text-align:left;font-size:10.5px;color:var(--text3);border-bottom:1px solid var(--border-lt);font-weight:700">${h}</th>`).join('')}</tr></thead>
        <tbody>${rows.map(r=>`<tr style="border-bottom:1px solid var(--border-lt);${r.status==='Expired'?'opacity:0.5':''}">
          <td style="padding:7px 10px" class="mono">${r.contractRef}</td>
          <td style="padding:7px 10px;font-weight:600">${r.supplier}</td>
          <td style="padding:7px 10px;font-size:11.5px">${r.dest}</td>
          <td style="padding:7px 10px">${r.officeFlag} <span style="font-size:11.5px;font-weight:600">${r.officeName.split('—')[0].trim()}</span></td>
          <td style="padding:7px 10px;font-weight:700;color:${c}">${r.allocation}</td>
          <td style="padding:7px 10px;font-size:11.5px;font-weight:600">${r.ornOwner}</td>
          <td style="padding:7px 10px;font-size:11px">${r.rateType}</td>
          <td style="padding:7px 10px;font-size:11.5px">${r.currency}</td>
          <td style="padding:7px 10px">${stPill(r.status)}</td>
          <td style="padding:7px 10px">${smBtn('Edit','btn-white btn-sm',`openEditCOMModal('${r.id}')`)}</td>
        </tr>`).join('')}</tbody>
      </table>
    </div>`;
  }).join('');

  return `
    <div class="page-title">Source Market Management</div>
    <p class="page-subtitle">Manage which regional office handles each contract and for which source markets. One contract can be split across multiple offices — each responsible for different booking markets.</p>

    <div class="sum-cards">
      <div class="sum-card"><div class="sc-lbl">Total Allocations</div><div class="sc-val">${contractOfficeMarkets.length}</div><div class="sc-sub">Contract × Office × Market</div></div>
      <div class="sum-card green"><div class="sc-lbl">Active</div><div class="sc-val green">${active}</div></div>
      <div class="sum-card orange"><div class="sc-lbl">Pending / Planned</div><div class="sc-val orange">${pending}</div></div>
      <div class="sum-card"><div class="sc-lbl">Offices with Contracts</div><div class="sc-val">${[...new Set(contractOfficeMarkets.map(r=>r.officeId))].length} of ${smOffices.length}</div></div>
      <div class="sum-card"><div class="sc-lbl">Source Markets Covered</div><div class="sc-val">${allMkts.length}</div></div>
    </div>

    <div class="toolbar">
      <input class="ti" placeholder="Search supplier or contract..." style="width:220px" id="sm-q" oninput="smFilterFn()">
      <select class="ti" id="sm-status" onchange="smFilterFn()">
        <option value="">All Status</option>
        <option>Active</option><option>Pending</option><option>Planned</option><option>Expired</option>
      </select>
      ${smBtn('Clear','btn-white','smClearFn()')}
      <div class="toolbar-r">${smBtn('+ New Allocation','btn-navy','openAddCOMModal(null,null)')}</div>
    </div>

    <div style="display:flex;gap:0;margin-bottom:16px;border:1px solid var(--border-lt);border-radius:var(--r);overflow:hidden;width:fit-content">
      <button id="smvbtn-contract" class="btn btn-navy"   style="border-radius:0;border:none"                                              onclick="smViewSwitch('contract')">By Contract</button>
      <button id="smvbtn-office"   class="btn btn-white"  style="border-radius:0;border:none;border-left:1px solid var(--border-lt)"       onclick="smViewSwitch('office')">By Office</button>
      <button id="smvbtn-market"   class="btn btn-white"  style="border-radius:0;border:none;border-left:1px solid var(--border-lt)"       onclick="smViewSwitch('market')">By Source Market</button>
    </div>

    <div id="smview-contract">${byContract}</div>
    <div id="smview-office"   style="display:none">${byOffice}</div>
    <div id="smview-market"   style="display:none">${byMarket}</div>`;
}

// ── HELPER FUNCTIONS ──────────────────────────────────────────────
window.smViewSwitch = function(mode){
  ['contract','office','market'].forEach(m=>{
    const el  = document.getElementById('smview-'+m);
    const btn = document.getElementById('smvbtn-'+m);
    if(el)  el.style.display  = m===mode?'':'none';
    if(btn) btn.className = 'btn '+(m===mode?'btn-navy':'btn-white');
  });
};

window.smFilterFn = function(){
  const q  = (document.getElementById('sm-q')?.value||'').toLowerCase();
  document.querySelectorAll('.smgr-block').forEach(el=>{
    el.style.display = (!q||el.textContent.toLowerCase().includes(q))?'':'none';
  });
};

window.smClearFn = function(){
  const q=document.getElementById('sm-q'); if(q)q.value='';
  document.querySelectorAll('.smgr-block').forEach(el=>el.style.display='');
  window.toast?.('Cleared');
};

window.openAddCOMModal = function(contractRef, supplierName){
  const title = supplierName?`Add Office & Market — ${supplierName}`:'New Source Market Allocation';
  const body = `
    <div style="background:#e8f4fe;border:1px solid #90caf9;border-radius:3px;padding:9px 14px;margin-bottom:14px;font-size:12.5px;color:#0d47a1">
      🌍 Assign a regional office to manage a contract for specific source markets. The same contract can have different offices for different markets.
    </div>
    <div class="form-panel"><div class="form-head">Contract & Office</div><div class="form-body"><div class="fgrid">
      <div class="fg"><label>Contract <span class="req">*</span></label>
        <select class="fc">${smContracts.map(c=>`<option value="${c.id}" ${c.id===contractRef?'selected':''}>${c.id} — ${c.supplier} (${c.dest}, ${c.value})</option>`).join('')}</select>
      </div>
      <div class="fg"><label>Regional Office <span class="req">*</span></label>
        <select class="fc">${smOffices.map(o=>`<option value="${o.id}">${o.flag} ${o.name} — ${o.head}</option>`).join('')}</select>
      </div>
      <div class="fg"><label>ORN Owner <span class="req">*</span></label>
        <select class="fc"><option value="">Select...</option>${smOrnTeamSel()}</select>
      </div>
      <div class="fg"><label>ORN Manager</label>
        <select class="fc"><option value="">Select...</option>${smOrnTeamSel()}</select>
      </div>
      <div class="fg"><label>Allocation %</label><input class="fc" type="number" placeholder="e.g. 60" min="0" max="100"></div>
      <div class="fg"><label>Rate Type</label><input class="fc" placeholder="e.g. ORN UK Rate, GCC Rate"></div>
      <div class="fg"><label>Currency</label><select class="fc"><option>GBP</option><option>USD</option><option>EUR</option><option>AED</option><option>OMR</option><option>INR</option></select></div>
      <div class="fg"><label>Status</label><select class="fc"><option>Active</option><option>Pending</option><option>Planned</option></select></div>
      <div class="fg"><label>Valid From</label><input class="fc" type="date"></div>
      <div class="fg"><label>Valid To</label><input class="fc" type="date"></div>
    </div></div></div>
    <div class="form-panel"><div class="form-head">Source Markets <span class="req">*</span></div><div class="form-body">
      <p style="font-size:12px;color:var(--text2);margin-bottom:10px">Which customer origin markets will this office handle for this contract?</p>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">${mktsCheckboxes([])}</div>
    </div></div>
    <div class="form-panel"><div class="form-head">Notes</div><div class="form-body">
      <textarea class="fc" style="height:60px;width:100%" placeholder="e.g. Bangkok handles all UK bookings for Maldives. Bangalore to take over India market Q3."></textarea>
    </div></div>`;
  window.openModal?.(title, body, `<button class="btn btn-white" onclick="closeModal()">Cancel</button> <button class="btn btn-navy" onclick="toast('Allocation saved!');closeModal()">Save Allocation</button>`);
};

window.openEditCOMModal = function(comId){
  const r = contractOfficeMarkets.find(x=>x.id===comId)||{};
  const body = `
    <div class="form-panel"><div class="form-head">Edit: ${r.contractRef} — ${r.officeName}</div><div class="form-body"><div class="fgrid">
      <div class="fg"><label>Supplier</label><input class="fc" value="${r.supplier||''}" readonly></div>
      <div class="fg"><label>Contract Ref</label><input class="fc" value="${r.contractRef||''}" readonly></div>
      <div class="fg"><label>Regional Office</label><select class="fc">${smOffices.map(o=>`<option value="${o.id}" ${o.id===r.officeId?'selected':''}>${o.flag} ${o.name}</option>`).join('')}</select></div>
      <div class="fg"><label>ORN Owner</label><select class="fc"><option value="">Select...</option>${smOrnTeamSel()}</select></div>
      <div class="fg"><label>Allocation %</label><input class="fc" type="number" value="${(r.allocation||'').replace('%','')}"></div>
      <div class="fg"><label>Rate Type</label><input class="fc" value="${r.rateType||''}"></div>
      <div class="fg"><label>Currency</label><select class="fc"><option>GBP</option><option>EUR</option><option>USD</option><option>AED</option><option>INR</option></select></div>
      <div class="fg"><label>Status</label><select class="fc"><option ${r.status==='Active'?'selected':''}>Active</option><option ${r.status==='Pending'?'selected':''}>Pending</option><option ${r.status==='Planned'?'selected':''}>Planned</option><option ${r.status==='Expired'?'selected':''}>Expired</option></select></div>
    </div></div></div>
    <div class="form-panel"><div class="form-head">Source Markets</div><div class="form-body">
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">${mktsCheckboxes(r.sourceMarkets||[])}</div>
    </div></div>
    <div class="form-panel"><div class="form-head">Notes</div><div class="form-body">
      <textarea class="fc" style="height:55px;width:100%">${r.notes||''}</textarea>
    </div></div>`;
  window.openModal?.(`Edit Allocation — ${comId}`, body, `<button class="btn btn-white" onclick="closeModal()">Cancel</button> <button class="btn btn-white" onclick="if(confirm('Delete?')){closeModal();toast('Deleted')}" style="color:var(--red)">Delete</button> <button class="btn btn-navy" onclick="toast('Saved!');closeModal()">Save Changes</button>`);
};

window.openAssignToSMOffice = function(officeId, officeName){
  window.openAddCOMModal(null, null);
};

// ── PATCH NAV & REGISTER ──────────────────────────────────────────
// Wait for app.js to finish, then patch the NAV
function patchAndRegister(){
  if(typeof window.NAV === 'undefined'|| typeof window.pg_sup_regions === 'undefined'){
    setTimeout(patchAndRegister, 50);
    return;
  }
  // Replace the suppliers NAV entry cleanly
  window.NAV.suppliers = {
    sub:  ['Supplier Dashboard','All Suppliers','Onboarding','Contracts & Docs','Payments','Rates & Pricing','Compliance','Audit Trail','Tier Management','Destinations','Regional Offices','Source Markets'],
    pages:['pg_sup_dash','pg_sup_all','pg_sup_onboard','pg_sup_contracts','pg_sup_payments','pg_sup_rates','pg_sup_compliance','pg_sup_audit','pg_sup_tiers','pg_sup_dest','pg_sup_regions','pg_sup_source_markets']
  };
  window.pg_sup_source_markets = pg_sup_source_markets;
  console.log('✓ Source Markets tab patched in');
}

// Register immediately AND after DOM ready
window.pg_sup_source_markets = pg_sup_source_markets;
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', patchAndRegister);
} else {
  patchAndRegister();
}

})(); // end IIFE
