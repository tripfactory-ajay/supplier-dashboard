// ORN Global Supplier Management Portal
'use strict';
const NAV={products:{sub:['Product Catalogue','Categories','Pricing'],pages:[]},sales:{sub:['Business Dashboard','Dest Dashboard','Groups Dashboard','Expert Dashboard','B2C Expert Dashboard','BM Dashboard','KAM Dashboard','FS Dashboard'],pages:['pg_sales_dest']},supply:{sub:['Overview','Availability','Allotments'],pages:[]},suppliers:{sub:['Supplier Dashboard','All Suppliers','Onboarding','Contracts & Docs','Payments','Rates & Pricing','Compliance','Audit Trail','Tier Management','Destinations','Regional Offices'],pages:['pg_sup_dash','pg_sup_all','pg_sup_onboard','pg_sup_contracts','pg_sup_payments','pg_sup_rates','pg_sup_compliance','pg_sup_audit','pg_sup_tiers','pg_sup_dest','pg_sup_regions']},hotels:{sub:['Manage Rates and Inventory','Manage Contracts','Inventory Position','Hotel Content','Preferred Rankings','Supply Sources','GIT Blockings','GIT Calendar'],pages:['pg_hotel_rates','pg_hotel_contracts','pg_hotel_inv','pg_hotel_content','pg_hotel_rankings','pg_hotel_sources']},activities:{sub:['All Activities','Tours','Transfers','Experiences'],pages:['pg_act_all']},vehicles:{sub:['Fleet','Bookings','Maintenance'],pages:[]},delivery:{sub:['Overview','Pending','Completed'],pages:[]}};
let curPrimary='suppliers',curSub=0;

const ornTeam=[
  {id:'T01',name:'Ajay Kawa',role:'Head of Supply',region:'Global',email:'ajay.kawa@orn.com',phone:'+44 20 7946 0100'},
  {id:'T02',name:'Priya Sharma',role:'Senior Supplier Manager',region:'Middle East & Asia',email:'priya.sharma@orn.com',phone:'+44 20 7946 0101'},
  {id:'T03',name:'Ravi Patel',role:'Supplier Manager',region:'Africa & Middle East',email:'ravi.patel@orn.com',phone:'+44 20 7946 0102'},
  {id:'T04',name:'Sarah Mitchell',role:'Supplier Manager',region:'Europe & Americas',email:'sarah.mitchell@orn.com',phone:'+44 20 7946 0103'},
  {id:'T05',name:'James Thornton',role:'Commercial Director',region:'Global',email:'james.thornton@orn.com',phone:'+44 20 7946 0104'},
  {id:'T06',name:'Layla Hassan',role:'Contracts Manager',region:'Global',email:'layla.hassan@orn.com',phone:'+44 20 7946 0105'},
  {id:'T07',name:'Omar Al Farsi',role:'Regional Manager – Gulf',region:'Gulf & Oman',email:'omar.alfarsi@orn.com',phone:'+44 20 7946 0106'},
  {id:'T08',name:'Nina Kowalski',role:'Finance & Payments',region:'Global',email:'nina.kowalski@orn.com',phone:'+44 20 7946 0107'},
];

const suppliers=[
  {id:'SUP-0081',name:'Atlantis The Palm',type:'Hotel',dest:'Dubai',region:'Gulf',tier:1,rating:4.8,status:'Active',tax:'AE-VAT-100384721',regNo:'DED-2018-88231',contract:'Dec 2025',contractStart:'Jan 2024',outstanding:0,commission:18,currency:'GBP',payTerms:'Net 30',contact:'James Al Rashid',email:'james@atlantis.com',phone:'+971 4 426 0000',contactRole:'Director of Revenue',owner:'Sheikh Mohammed Al Maktoum',ownerPassport:'UAE-P-8821341',ownerNationality:'UAE',ownerDOB:'12 Mar 1975',ownerEmail:'chairman@kerzner.com',ownerPhone:'+971 50 100 0001',ownerAddress:'Palm Jumeirah, Dubai, UAE',director2:'Helen Murray',director2Role:'CEO',director2Passport:'GBR-P-9921441',director2Nationality:'British',bankName:'Emirates NBD',bankAccount:'1234567890',bankSort:'EBILAEAD',bankIBAN:'AE070331234567890123456',bankSwift:'EBILAEAD',bankCurrency:'GBP',bankBeneficiary:'Kerzner International Ltd',bankBranch:'DIFC Branch, Dubai',ornManager:'Ajay Kawa',ornManagerId:'T01',ornContractOwner:'Layla Hassan',ornContractOwnerId:'T06',ornRegionalLead:'Omar Al Farsi',ornRegionalLeadId:'T07',complianceScore:94,insuranceExpiry:'Dec 2025',vatExpiry:'Dec 2026',notes:'Premier partner. VIP relationship. Annual review due Q1.'},
  {id:'SUP-0082',name:'Burj Al Arab Jumeirah',type:'Hotel',dest:'Dubai',region:'Gulf',tier:1,rating:4.9,status:'Active',tax:'AE-VAT-100284622',regNo:'DED-2016-44112',contract:'Nov 2025',contractStart:'Nov 2022',outstanding:0,commission:20,currency:'GBP',payTerms:'Net 30',contact:'Sara Khalid',email:'sara@burjalarab.com',phone:'+971 4 301 7777',contactRole:'GM',owner:'Jumeirah Group LLC',ownerPassport:'AE-CORP-448812',ownerNationality:'UAE Corp',ownerDOB:'—',ownerEmail:'legal@jumeirah.com',ownerPhone:'+971 4 366 6000',ownerAddress:'PO Box 11416, Dubai, UAE',director2:'Jose Silva',director2Role:'CFO',director2Passport:'PRT-P-7712344',director2Nationality:'Portuguese',bankName:'HSBC Middle East',bankAccount:'9876543210',bankSort:'BBMEAEAD',bankIBAN:'AE060330987654321098765',bankSwift:'BBMEAEAD',bankCurrency:'GBP',bankBeneficiary:'Jumeirah International LLC',bankBranch:'Dubai Main Branch',ornManager:'Ajay Kawa',ornManagerId:'T01',ornContractOwner:'Layla Hassan',ornContractOwnerId:'T06',ornRegionalLead:'Omar Al Farsi',ornRegionalLeadId:'T07',complianceScore:98,insuranceExpiry:'Mar 2026',vatExpiry:'Dec 2026',notes:'Flagship Dubai property. Handle all correspondence at GM level.'},
  {id:'SUP-0083',name:'Desert Tracks Tours',type:'Tour',dest:'Dubai',region:'Gulf',tier:2,rating:4.5,status:'Active',tax:'AE-VAT-100512388',regNo:'DED-2019-22788',contract:'Mar 2026',contractStart:'Mar 2023',outstanding:0,commission:15,currency:'GBP',payTerms:'Net 15',contact:'Ahmed Hassan',email:'ahmed@deserttracks.ae',phone:'+971 50 222 3344',contactRole:'Operations Manager',owner:'Ahmed Hassan',ownerPassport:'UAE-P-6641289',ownerNationality:'UAE',ownerDOB:'05 Jul 1982',ownerEmail:'ahmed.hassan.private@gmail.com',ownerPhone:'+971 55 222 3344',ownerAddress:'Al Barsha, Dubai, UAE',director2:'Fatima Hassan',director2Role:'Finance Director',director2Passport:'UAE-P-6641290',director2Nationality:'UAE',bankName:'Abu Dhabi Islamic Bank',bankAccount:'5544332211',bankSort:'ADIBAEAA',bankIBAN:'AE280030005544332211000',bankSwift:'ADIBAEAA',bankCurrency:'GBP',bankBeneficiary:'Desert Tracks Tours LLC',bankBranch:'Al Barsha Branch',ornManager:'Priya Sharma',ornManagerId:'T02',ornContractOwner:'Layla Hassan',ornContractOwnerId:'T06',ornRegionalLead:'Omar Al Farsi',ornRegionalLeadId:'T07',complianceScore:78,insuranceExpiry:'Aug 2025',vatExpiry:'Dec 2025',notes:'Key tour partner Dubai. Insurance renewal overdue.'},
  {id:'SUP-0084',name:'Nile Tours Egypt',type:'Tour',dest:'Egypt',region:'Africa',tier:2,rating:4.2,status:'Pending',tax:'EG-TAX-302847',regNo:'CAI-2021-99821',contract:'Awaiting',contractStart:'—',outstanding:0,commission:12,currency:'GBP',payTerms:'Net 30',contact:'Mona Farouk',email:'mona@niletours.eg',phone:'+20 2 2345 6789',contactRole:'CEO',owner:'Karim Farouk',ownerPassport:'EGY-P-3321456',ownerNationality:'Egyptian',ownerDOB:'18 Nov 1979',ownerEmail:'karim.farouk@niletours.eg',ownerPhone:'+20 10 2345 6789',ownerAddress:'Zamalek, Cairo, Egypt',director2:'Mona Farouk',director2Role:'CEO',director2Passport:'EGY-P-3321457',director2Nationality:'Egyptian',bankName:'Banque Misr',bankAccount:'',bankSort:'',bankIBAN:'',bankSwift:'BMISEGCX',bankCurrency:'GBP',bankBeneficiary:'Nile Tours Egypt SAE',bankBranch:'Zamalek Branch — Pending',ornManager:'Ravi Patel',ornManagerId:'T03',ornContractOwner:'Layla Hassan',ornContractOwnerId:'T06',ornRegionalLead:'Ravi Patel',ornRegionalLeadId:'T03',complianceScore:35,insuranceExpiry:'Pending',vatExpiry:'Pending',notes:'Onboarding in progress. Bank not yet verified.'},
  {id:'SUP-0085',name:'Jordan Transfer Co',type:'Transport',dest:'Jordan',region:'Middle East',tier:2,rating:4.1,status:'Active',tax:'JO-TAX-884421',regNo:'AMM-2017-55512',contract:'Sep 2025',contractStart:'Sep 2022',outstanding:6800,commission:12,currency:'GBP',payTerms:'Net 30',contact:'Khalid Nassar',email:'khalid@jordantransfer.jo',phone:'+962 6 567 8901',contactRole:'Managing Director',owner:'Khalid Nassar',ownerPassport:'JOR-P-4412876',ownerNationality:'Jordanian',ownerDOB:'22 Feb 1974',ownerEmail:'khalid.nassar.private@outlook.com',ownerPhone:'+962 79 567 8901',ownerAddress:'Abdali, Amman, Jordan',director2:'Rania Nassar',director2Role:'Finance Director',director2Passport:'JOR-P-4412877',director2Nationality:'Jordanian',bankName:'Arab Bank Jordan',bankAccount:'JO-ARB-778812345',bankSort:'ARABJOAX',bankIBAN:'JO94ARAB0200000001234567891234',bankSwift:'ARABJOAX',bankCurrency:'GBP',bankBeneficiary:'Jordan Transfer Company LLC',bankBranch:'Abdali Branch, Amman',ornManager:'Ravi Patel',ornManagerId:'T03',ornContractOwner:'Layla Hassan',ornContractOwnerId:'T06',ornRegionalLead:'Ravi Patel',ornRegionalLeadId:'T03',complianceScore:62,insuranceExpiry:'Sep 2025',vatExpiry:'Sep 2026',notes:'Outstanding £6,800. Contract expires Sep 2025. Renewal required.'},
  {id:'SUP-0086',name:'Oman Luxury Resorts',type:'Hotel',dest:'Oman',region:'Gulf',tier:1,rating:4.6,status:'Active',tax:'OM-VAT-729341',regNo:'MCT-2015-11234',contract:'Jun 2026',contractStart:'Jun 2023',outstanding:0,commission:16,currency:'GBP',payTerms:'Net 30',contact:'Fatima Al Balushi',email:'fatima@omanluxury.om',phone:'+968 2 456 7890',contactRole:'Revenue Director',owner:'Sultan Al Busaidi',ownerPassport:'OMN-P-9921334',ownerNationality:'Omani',ownerDOB:'14 Sep 1968',ownerEmail:'sultan.albusaidi@omanluxury.om',ownerPhone:'+968 91 456 7890',ownerAddress:'Qurum, Muscat, Oman',director2:'Fatima Al Balushi',director2Role:'Revenue Director',director2Passport:'OMN-P-8812345',director2Nationality:'Omani',bankName:'Bank Muscat',bankAccount:'OM-BM-5512348901',bankSort:'BMUSOMRX',bankIBAN:'OM810080000055123489010',bankSwift:'BMUSOMRX',bankCurrency:'GBP',bankBeneficiary:'Oman Luxury Resorts SAOG',bankBranch:'Qurum Branch, Muscat',ornManager:'Omar Al Farsi',ornManagerId:'T07',ornContractOwner:'Layla Hassan',ornContractOwnerId:'T06',ornRegionalLead:'Omar Al Farsi',ornRegionalLeadId:'T07',complianceScore:91,insuranceExpiry:'Jun 2026',vatExpiry:'Jun 2027',notes:'Strong long-term partner. Oman market leader.'},
];

const contracts=[
  {id:'CTR-2024-0081',supplier:'Atlantis The Palm',type:'Service Contract',dest:'Dubai',uploaded:'15 Jan 2024',start:'01 Jan 2024',expiry:'31 Dec 2025',status:'Valid',value:'£840,000',annualValue:'£420,000',file:'atlantis_contract_2024.pdf',ornOwner:'Layla Hassan',ornOwnerId:'T06',ornManager:'Ajay Kawa',ornManagerId:'T01',renewalNotice:'90 days',autoRenew:'No',governingLaw:'English Law',exclusivity:'Non-exclusive',reviewDate:'01 Oct 2025',notes:'Annual rolling contract. Room block 200 rooms peak season.'},
  {id:'CTR-2023-0083',supplier:'Desert Tracks Tours',type:'Service Contract',dest:'Dubai',uploaded:'01 Mar 2023',start:'01 Mar 2023',expiry:'28 Feb 2024',status:'Expired',value:'£120,000',annualValue:'£120,000',file:'deserttracks_2023.pdf',ornOwner:'Layla Hassan',ornOwnerId:'T06',ornManager:'Priya Sharma',ornManagerId:'T02',renewalNotice:'60 days',autoRenew:'No',governingLaw:'English Law',exclusivity:'Non-exclusive',reviewDate:'Overdue',notes:'Expired. Renewal in progress.'},
  {id:'INS-2024-0085',supplier:'Jordan Transfer Co',type:'Insurance Certificate',dest:'Jordan',uploaded:'10 Sep 2024',start:'10 Sep 2024',expiry:'09 Sep 2025',status:'Expiring',value:'—',annualValue:'—',file:'jordan_transfer_insurance.pdf',ornOwner:'Layla Hassan',ornOwnerId:'T06',ornManager:'Ravi Patel',ornManagerId:'T03',renewalNotice:'30 days',autoRenew:'N/A',governingLaw:'Jordanian Law',exclusivity:'N/A',reviewDate:'10 Aug 2025',notes:'Public liability £5M. Renewal reminder sent.'},
  {id:'CTR-2023-0086',supplier:'Oman Luxury Resorts',type:'Service Contract',dest:'Oman',uploaded:'01 Jun 2023',start:'01 Jun 2023',expiry:'31 May 2026',status:'Valid',value:'£580,000',annualValue:'£193,000',file:'oman_luxury_2023.pdf',ornOwner:'Layla Hassan',ornOwnerId:'T06',ornManager:'Omar Al Farsi',ornManagerId:'T07',renewalNotice:'90 days',autoRenew:'Yes',governingLaw:'English Law',exclusivity:'Preferred',reviewDate:'01 Mar 2026',notes:'3-year contract. Preferred supplier status.'},
  {id:'ID-2024-0083',supplier:'Desert Tracks Tours',type:'Owner ID / Passport',dest:'Dubai',uploaded:'01 Mar 2024',start:'01 Mar 2024',expiry:'28 Feb 2029',status:'Valid',value:'—',annualValue:'—',file:'dt_owner_passport.pdf',ornOwner:'Layla Hassan',ornOwnerId:'T06',ornManager:'Priya Sharma',ornManagerId:'T02',renewalNotice:'N/A',autoRenew:'N/A',governingLaw:'N/A',exclusivity:'N/A',reviewDate:'N/A',notes:'Passport copy on file. UK national.'},
];

const payments=[
  {id:'INV-2026-0281',supplier:'Atlantis The Palm',dest:'Dubai',desc:'April accommodation services',amount:42000,due:'30 Apr 2026',status:'Pending Approval',currency:'GBP',approver:'Ajay Kawa',poRef:'PO-2026-0281'},
  {id:'INV-2026-0279',supplier:'Desert Tracks Tours',dest:'Dubai',desc:'April tour operations',amount:8500,due:'25 Apr 2026',status:'Approved',currency:'GBP',approver:'Priya Sharma',poRef:'PO-2026-0279'},
  {id:'INV-2026-0265',supplier:'Jordan Transfer Co',dest:'Jordan',desc:'March transfers – overdue',amount:5200,due:'31 Mar 2026',status:'Overdue',currency:'GBP',approver:'—',poRef:'PO-2026-0265'},
  {id:'INV-2026-0280',supplier:'Oman Luxury Resorts',dest:'Oman',desc:'April accommodation',amount:28000,due:'30 Apr 2026',status:'Paid',currency:'GBP',approver:'Ajay Kawa',poRef:'PO-2026-0280'},
];

const rates=[
  {supplier:'Atlantis The Palm',dest:'Dubai',type:'Hotel',room:'Deluxe Room',season:'Peak',period:'Jun–Aug 2026',net:'£285',gross:'£336',commission:'18%',currency:'GBP',status:'Active',lastUpdated:'15 Mar 2026',updatedBy:'Priya Sharma'},
  {supplier:'Atlantis The Palm',dest:'Dubai',type:'Hotel',room:'Ocean Suite',season:'High',period:'Dec 2025–Jan 2026',net:'£680',gross:'£802',commission:'18%',currency:'GBP',status:'Active',lastUpdated:'15 Mar 2026',updatedBy:'Priya Sharma'},
  {supplier:'Oman Luxury Resorts',dest:'Oman',type:'Hotel',room:'Beach Villa',season:'Peak',period:'Nov–Feb 2026',net:'£290',gross:'£336',commission:'16%',currency:'GBP',status:'Active',lastUpdated:'10 Mar 2026',updatedBy:'Omar Al Farsi'},
  {supplier:'Desert Tracks Tours',dest:'Dubai',type:'Tour',room:'Desert Safari',season:'All Year',period:'Jan–Dec 2026',net:'£85',gross:'£98',commission:'15%',currency:'GBP',status:'Active',lastUpdated:'01 Apr 2026',updatedBy:'Priya Sharma'},
];

const auditLog=[
  {ts:'26 Apr 2026 14:32',user:'Ajay Kawa',action:'Contract Uploaded',supplier:'Atlantis The Palm',detail:'Uploaded new service contract CTR-2024-0081 (PDF, 2.4MB)',color:'#1a6faf'},
  {ts:'26 Apr 2026 11:18',user:'Priya Sharma',action:'Payment Approved',supplier:'Desert Tracks Tours',detail:'Invoice INV-2026-0279 approved. Amount: £8,500',color:'#1a7a5a'},
  {ts:'25 Apr 2026 16:45',user:'Ajay Kawa',action:'Supplier Suspended',supplier:'Oman Luxury Resorts',detail:'Status Active → Suspended. Outstanding £14,200.',color:'#c0392b'},
  {ts:'25 Apr 2026 09:22',user:'Ravi Patel',action:'New Supplier Added',supplier:'Nile Tours Egypt',detail:'New application submitted. Onboarding stage 1.',color:'#8e44ad'},
  {ts:'24 Apr 2026 15:10',user:'Priya Sharma',action:'Rate Updated',supplier:'Oman Luxury Resorts',detail:'High season rate updated: £320/night → £345/night effective 01 Jun 2026.',color:'#d68910'},
  {ts:'24 Apr 2026 11:55',user:'Layla Hassan',action:'Contract Owner Assigned',supplier:'Jordan Transfer Co',detail:'Contract ownership assigned to Layla Hassan. ORN Manager: Ravi Patel.',color:'#1a6faf'},
  {ts:'23 Apr 2026 14:00',user:'Ravi Patel',action:'Payment Processed',supplier:'Oman Luxury Resorts',detail:'Invoice INV-2026-0280 paid. £28,000 via BACS. Ref: ORN-PAY-20260423.',color:'#1a7a5a'},
  {ts:'22 Apr 2026 10:30',user:'Ajay Kawa',action:'Tier Changed',supplier:'Desert Tracks Tours',detail:'Tier 3 → Tier 2. Commission 10% → 15%. Approved: James Thornton.',color:'#856404'},
  {ts:'19 Apr 2026 13:40',user:'Nina Kowalski',action:'Bank Details Verified',supplier:'Atlantis The Palm',detail:'Bank IBAN verified by Finance. IBAN: AE070331234567890123456.',color:'#1a6faf'},
  {ts:'18 Apr 2026 11:05',user:'Omar Al Farsi',action:'Owner Details Added',supplier:'Oman Luxury Resorts',detail:'Owner passport uploaded. KYC completed by compliance team.',color:'#8e44ad'},
  {ts:'17 Apr 2026 09:00',user:'System',action:'Auto-Reminder: Expiry',supplier:'Jordan Transfer Co',detail:'Insurance expiry alert sent to ravi.patel@orn.com and layla.hassan@orn.com',color:'#c0392b'},
];

// ─── HELPERS ───────────────────────────────────────────────────────
const sc=s=>s==='Active'||s==='Valid'||s==='Paid'?'p-green':s==='Pending'||s==='Expiring'||s==='Pending Approval'?'p-orange':s==='Suspended'||s==='Expired'||s==='Overdue'?'p-red':s==='Approved'?'p-blue':'p-gray';
const fmtGbp=n=>n>0?'£'+n.toLocaleString():'£0';
const btn=(l,c='btn-navy',oc='',ex='')=>`<button class="btn ${c}" onclick="${oc}" ${ex}>${l}</button>`;
const ti=(ph,id='',w=160,ex='')=>`<input class="ti" type="text" placeholder="${ph}" id="${id}" style="width:${w}px" ${ex}>`;
const sel=(opts,id='',ex='')=>`<select class="ti" id="${id}" ${ex}>${opts.map(o=>typeof o==='string'?`<option>${o}</option>`:`<option value="${o[0]}">${o[1]}</option>`).join('')}</select>`;
const thdr=(...c)=>`<tr>${c.map(x=>`<th>${x}</th>`).join('')}</tr>`;
const frow=(...c)=>`<tr class="frow">${c.map(x=>`<th>${x?'<input placeholder="">':'&nbsp;'}</th>`).join('')}</tr>`;
const pgfoot=(show,total,pages=3)=>`<div class="tbl-foot"><span>Showing ${show} of ${total}</span><div class="pgn">${Array.from({length:Math.min(pages,3)},(_,i)=>`<button class="${i===0?'active':''}" onclick="toast('Page ${i+1}')">${i+1}</button>`).join('')}${total>60?'<span style="padding:0 4px">...</span><button onclick="toast(\'Last\')">'+Math.ceil(total/20)+'</button>':''}</div></div>`;
const ornTeamSel=()=>ornTeam.map(t=>`<option value="${t.id}">${t.name} — ${t.role}</option>`).join('');
const compliancePill=score=>score>=85?`<span class="pill p-green">${score}%</span>`:score>=60?`<span class="pill p-orange">${score}%</span>`:`<span class="pill p-red">${score}%</span>`;
const esc=obj=>JSON.stringify(obj).replace(/'/g,"&#39;").replace(/"/g,'&quot;');
window.esc=esc;

// ─── PAGE: DASHBOARD ───────────────────────────────────────────────
function pg_sup_dash(){
  const dr=[['🇦🇪 Dubai',38,18,12,6,2,'£842K','£48K',0,14,94,'Omar Al Farsi'],['🇦🇪 Abu Dhabi',24,10,8,4,1,'£521K','£31K',1200,8,88,'Omar Al Farsi'],['🇴🇲 Oman',18,8,5,3,0,'£398K','£28K',0,6,91,'Omar Al Farsi'],['🇪🇬 Egypt',14,5,4,2,3,'£287K','£14K',14200,4,58,'Ravi Patel'],['🇯🇴 Jordan',10,3,3,2,0,'£198K','£11K',6800,3,72,'Ravi Patel'],['🇲🇦 Morocco',8,3,2,1,1,'£164K','£8K',0,2,85,'Sarah Mitchell'],['🇹🇷 Turkey',6,2,1,2,2,'£142K','£5K',0,1,79,'Sarah Mitchell'],['🇲🇻 Maldives',4,2,1,0,1,'£98K','£3K',0,2,67,'Priya Sharma']];
  return `<div class="page-title">Supplier Dashboard</div>
    <div class="toolbar"><input type="date" class="ti" value="2026-04-23"><span style="font-size:12px;color:var(--text3)">–</span><input type="date" class="ti" value="2026-04-26">
    ${sel(['All Destinations','Dubai','Abu Dhabi','Oman','Egypt','Jordan','Morocco','Turkey','Maldives'])}
    ${sel(['All Types','Hotels','Tours','Transport','Activities','Restaurants','Cruises'])}
    ${sel(['All Tiers','Tier 1 – Premium','Tier 2 – Standard','Tier 3 – Budget'])}
    ${sel(['All Status','Active','Pending','Suspended'])}
    ${sel(['All ORN Managers',...ornTeam.map(t=>t.name)])}
    ${btn('Show','btn-navy',"toast('Filters applied')")} ${btn('&#8595; Export','btn-white',"toast('Exporting...')")}
    <div class="toolbar-r">${btn('+ New Supplier','btn-navy','openNewSupModal()')}</div></div>
    <div class="kpi-strip">${[['Total Suppliers','142',''],['Active','118','blue'],['Pending Onboard','7','orange'],['Suspended','2','red'],['Contracts Expiring','3','orange'],['KYC Incomplete','12','red'],['Payments MTD','£248K','green'],['Overdue','£12K','red'],['YTD Total','£2.1M',''],['Avg Compliance','76%','orange'],['Destinations','18','blue'],['ORN Team','8','']].map(([l,v,c])=>`<div class="kpi-cell"><div class="kpi-lbl">${l}</div><div class="kpi-val ${c}">${v}</div></div>`).join('')}</div>
    <div class="tbl-wrap"><table>
      ${thdr('#','Destination ↕','Suppliers ↕','Hotels ↕','Tours ↕','Transport ↕','Pending ↕','Contract Value ↕','Payments MTD ↕','Outstanding ↕','Tier 1 ↕','Compliance ↕','ORN Lead ↕')}
      ${frow(0,1,1,1,1,1,1,1,1,1,1,1,1)}
      <tbody>${dr.map((r,i)=>`<tr><td class="rn">${i+1}</td><td class="lnk" onclick="openDestDrillModal('${r[0].replace(/[^a-zA-Z ]/g,'').trim()}')" style="cursor:pointer">${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td>${r[5]>0?`<span class="badge-teal">${r[5]}</span>`:'0'}</td><td>${r[6]}</td><td><b>${r[7]}</b></td><td style="color:${r[8]>0?'var(--red)':'inherit'};font-weight:${r[8]>0?700:400}">${r[8]>0?'£'+r[8].toLocaleString():'£0'}</td><td class="lnk" style="color:var(--teal)">${r[9]}</td><td>${compliancePill(r[10])}</td><td style="font-size:11.5px">${r[11]}</td></tr>`).join('')}</tbody>
    </table>${pgfoot('1–8',18,2)}</div>`;
}

// ─── PAGE: ALL SUPPLIERS ───────────────────────────────────────────
function pg_sup_all(){
  return `<div class="page-title">All Suppliers</div>
    <div class="toolbar">
      ${ti('Search name, ID, owner...','s-q',210,'oninput="supFilter()"')}
      ${sel([['','All Destinations'],'Dubai','Abu Dhabi','Oman','Egypt','Jordan','Morocco','Turkey','Maldives'],'s-dest','onchange="supFilter()"')}
      ${sel([['','All Types'],'Hotel','Tour','Transport','Activity','Restaurant','Cruise'],'s-type','onchange="supFilter()"')}
      ${sel([['','All Tiers'],['1','Tier 1'],['2','Tier 2'],['3','Tier 3']],'s-tier','onchange="supFilter()"')}
      ${sel([['','All Status'],'Active','Pending','Suspended'],'s-status','onchange="supFilter()"')}
      ${sel([['','All ORN Managers'],...ornTeam.map(t=>[t.id,t.name])],'s-mgr','onchange="supFilter()"')}
      ${btn('Search','btn-navy','supFilter()')} ${btn('Clear','btn-white','supClear()')}
      <div class="toolbar-r">${btn('&#8595; Export CSV','btn-white',"toast('Exporting...')")} ${btn('+ Add Supplier','btn-navy','openNewSupModal()')}</div>
    </div>
    <div class="tbl-wrap"><table>
      ${thdr('#','✓','ID ↕','Supplier ↕','Type ↕','Destination ↕','Tier ↕','Status ↕','ORN Manager ↕','Contract Owner ↕','Owner ↕','TAX/VAT ↕','Contract End ↕','Compliance ↕','Outstanding ↕','Manage')}
      ${frow(0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0)}
      <tbody id="sup-tbody"></tbody></table><div id="sup-foot"></div></div>`;
}
function renderSupTable(data){
  const tb=document.getElementById('sup-tbody');if(!tb)return;
  tb.innerHTML=data.map((s,i)=>`<tr><td class="rn">${i+1}</td><td><input type="checkbox"></td><td class="mono">${s.id}</td>
    <td><a class="lnk" onclick='openSupModal(${esc(s)})'>${s.name}</a></td>
    <td>${s.type}</td><td>${s.dest}</td><td><span class="tbadge t${s.tier}">Tier ${s.tier}</span></td>
    <td><span class="pill ${sc(s.status)}">${s.status}</span></td>
    <td style="font-size:11.5px">${s.ornManager}</td>
    <td style="font-size:11.5px">${s.ornContractOwner}</td>
    <td style="font-size:11.5px">${s.owner||'—'}</td>
    <td class="mono">${s.tax}</td><td>${s.contract}</td>
    <td>${compliancePill(s.complianceScore||0)}</td>
    <td style="color:${s.outstanding>0?'var(--red)':'inherit'};font-weight:${s.outstanding>0?700:400}">${fmtGbp(s.outstanding)}</td>
    <td class="act"><a onclick='openSupModal(${esc(s)})'>View</a><a onclick='openEditSupModal(${esc(s)})'>Edit</a><a onclick='openDocsModal("${s.name}")'>Docs</a><a onclick='openAuditModal("${s.name}")'>Audit</a><a class="red" onclick="if(confirm('Delete ${s.name}?'))toast('Deleted')">Del</a></td>
  </tr>`).join('');
  const f=document.getElementById('sup-foot');if(f)f.innerHTML=pgfoot(`1–${data.length}`,suppliers.length,Math.ceil(suppliers.length/20));
}
function supFilter(){const q=(document.getElementById('s-q')?.value||'').toLowerCase();const dest=document.getElementById('s-dest')?.value||'';const type=document.getElementById('s-type')?.value||'';const tier=document.getElementById('s-tier')?.value||'';const status=document.getElementById('s-status')?.value||'';const mgr=document.getElementById('s-mgr')?.value||'';const filtered=suppliers.filter(s=>(!q||s.name.toLowerCase().includes(q)||s.id.toLowerCase().includes(q)||(s.owner||'').toLowerCase().includes(q))&&(!dest||s.dest===dest)&&(!type||s.type===type)&&(!tier||s.tier===+tier)&&(!status||s.status===status)&&(!mgr||s.ornManagerId===mgr));renderSupTable(filtered);}
function supClear(){['s-q','s-dest','s-type','s-tier','s-status','s-mgr'].forEach(id=>{const el=document.getElementById(id);if(el)el.tagName==='SELECT'?el.selectedIndex=0:el.value='';});renderSupTable(suppliers);toast('Filters cleared');}
window.supFilter=supFilter;window.supClear=supClear;
function supTierFilter(tier){setSecondary(1);setTimeout(()=>{const el=document.getElementById('s-tier');if(el){el.value=tier;supFilter();}},100);}
window.supTierFilter=supTierFilter;


// ─── FULL SUPPLIER FORM ────────────────────────────────────────────
function fullSupplierFormHTML(s={}){
  return `
  <div class="form-panel"><div class="form-head">1. Company Information</div><div class="form-body"><div class="fgrid">
    <div class="fg"><label>Legal Company Name <span class="req">*</span></label><input class="fc" value="${s.name||''}" placeholder="Full registered name"></div>
    <div class="fg"><label>Trading / DBA Name</label><input class="fc" placeholder="If different from legal name"></div>
    <div class="fg"><label>Supplier Type <span class="req">*</span></label><select class="fc"><option>Hotel / Accommodation</option><option>Tour Operator</option><option>Activity Provider</option><option>Transport / Transfer</option><option>Restaurant / Dining</option><option>Cruise / Boat</option></select></div>
    <div class="fg"><label>Destination <span class="req">*</span></label><select class="fc"><option>Dubai</option><option>Abu Dhabi</option><option>Oman</option><option>Egypt</option><option>Jordan</option><option>Morocco</option><option>Turkey</option><option>Maldives</option><option>Saudi Arabia</option><option>Kenya</option></select></div>
    <div class="fg"><label>Country of Registration <span class="req">*</span></label><input class="fc" placeholder="e.g. UAE"></div>
    <div class="fg"><label>Company Reg. No. <span class="req">*</span></label><input class="fc" value="${s.regNo||''}" placeholder="Official registration number"></div>
    <div class="fg"><label>TAX / VAT Number <span class="req">*</span></label><input class="fc" value="${s.tax||''}" placeholder="TAX/VAT registration number"></div>
    <div class="fg"><label>Website</label><input class="fc" type="url" placeholder="https://..."></div>
    <div class="fg"><label>Years in Operation</label><input class="fc" type="number" placeholder="e.g. 5" min="0"></div>
    <div class="fg"><label>No. of Employees</label><input class="fc" type="number" placeholder="e.g. 50"></div>
    <div class="fg"><label>Annual Turnover (approx.)</label><input class="fc" placeholder="e.g. £500,000"></div>
    <div class="fg"><label>Region</label><select class="fc"><option>Gulf</option><option>Middle East</option><option>Africa</option><option>Asia</option><option>Europe</option><option>Americas</option></select></div>
  </div>
  <div class="fgrid-2" style="margin-top:12px">
    <div class="fg"><label>Registered Address <span class="req">*</span></label><textarea class="fc" style="height:60px" placeholder="Full registered address"></textarea></div>
    <div class="fg"><label>Operational Address (if different)</label><textarea class="fc" style="height:60px" placeholder="Trading address"></textarea></div>
  </div></div></div>

  <div class="form-panel"><div class="form-head">2. Primary Business Contact</div><div class="form-body"><div class="fgrid">
    <div class="fg"><label>Contact Name <span class="req">*</span></label><input class="fc" value="${s.contact||''}" placeholder="Full name"></div>
    <div class="fg"><label>Job Title <span class="req">*</span></label><input class="fc" value="${s.contactRole||''}" placeholder="e.g. Director of Revenue"></div>
    <div class="fg"><label>Email <span class="req">*</span></label><input class="fc" type="email" value="${s.email||''}" placeholder="business@company.com"></div>
    <div class="fg"><label>Direct Phone <span class="req">*</span></label><input class="fc" type="tel" value="${s.phone||''}" placeholder="+971..."></div>
    <div class="fg"><label>Mobile / WhatsApp</label><input class="fc" type="tel" placeholder="+971 50 ..."></div>
    <div class="fg"><label>Preferred Contact</label><select class="fc"><option>Email</option><option>Phone</option><option>WhatsApp</option></select></div>
    <div class="fg"><label>Finance Contact Name</label><input class="fc" placeholder="Accounts contact"></div>
    <div class="fg"><label>Finance Contact Email</label><input class="fc" type="email" placeholder="finance@company.com"></div>
  </div></div></div>

  <div class="form-panel"><div class="form-head">3. Owner &amp; Director Details (KYC / AML)</div><div class="form-body">
    <div style="background:#fff8e6;border:1px solid #ffe082;border-radius:3px;padding:9px 12px;margin-bottom:12px;font-size:12px;color:#6d4c00">⚠️ <b>Required for KYC / AML compliance.</b> All beneficial owners with 25%+ shareholding must be declared. Stored securely for due diligence only.</div>
    <div style="font-size:11.5px;font-weight:700;color:var(--navy);margin-bottom:8px;text-transform:uppercase;letter-spacing:.5px">Director / Owner 1 (Primary)</div>
    <div class="fgrid">
      <div class="fg"><label>Full Legal Name <span class="req">*</span></label><input class="fc" value="${s.owner||''}" placeholder="As on passport"></div>
      <div class="fg"><label>Role / Title</label><input class="fc" placeholder="e.g. Chairman, Sole Owner"></div>
      <div class="fg"><label>Nationality <span class="req">*</span></label><input class="fc" value="${s.ownerNationality||''}" placeholder="e.g. UAE, British"></div>
      <div class="fg"><label>Date of Birth <span class="req">*</span></label><input class="fc" type="date"></div>
      <div class="fg"><label>Passport / ID Number <span class="req">*</span></label><input class="fc" value="${s.ownerPassport||''}" placeholder="Passport number"></div>
      <div class="fg"><label>Passport Expiry</label><input class="fc" type="date"></div>
      <div class="fg"><label>Personal Email</label><input class="fc" type="email" value="${s.ownerEmail||''}" placeholder="Personal email"></div>
      <div class="fg"><label>Personal Mobile</label><input class="fc" type="tel" value="${s.ownerPhone||''}" placeholder="+44 / +971..."></div>
      <div class="fg"><label>% Shareholding</label><input class="fc" type="number" placeholder="e.g. 100" min="0" max="100"></div>
      <div class="fg"><label>Country of Residence</label><input class="fc" placeholder="Tax residence country"></div>
      <div class="fg"><label>PEP Status</label><select class="fc"><option>Not a PEP</option><option>PEP</option><option>Related to PEP</option></select></div>
      <div class="fg"><label>Sanctions Check</label><select class="fc"><option>Clear</option><option>Flagged – Review</option><option>Pending Check</option></select></div>
    </div>
    <div style="font-size:11.5px;font-weight:700;color:var(--navy);margin:12px 0 8px;text-transform:uppercase;letter-spacing:.5px">Director / Owner 2 (if applicable)</div>
    <div class="fgrid">
      <div class="fg"><label>Full Legal Name</label><input class="fc" value="${s.director2||''}" placeholder="As on passport"></div>
      <div class="fg"><label>Role / Title</label><input class="fc" value="${s.director2Role||''}" placeholder="e.g. CFO, Director"></div>
      <div class="fg"><label>Nationality</label><input class="fc" value="${s.director2Nationality||''}" placeholder="Nationality"></div>
      <div class="fg"><label>Passport / ID No.</label><input class="fc" value="${s.director2Passport||''}" placeholder="Passport number"></div>
      <div class="fg"><label>Personal Email</label><input class="fc" type="email" placeholder="Personal email"></div>
      <div class="fg"><label>% Shareholding</label><input class="fc" type="number" placeholder="e.g. 50" min="0" max="100"></div>
    </div>
  </div></div>

  <div class="form-panel"><div class="form-head">4. Bank &amp; Payment Details</div><div class="form-body">
    <div style="background:#e8f4fe;border:1px solid #90caf9;border-radius:3px;padding:9px 12px;margin-bottom:12px;font-size:12px;color:#0d47a1">🏦 <b>Bank details must be verified by Finance before first payment.</b> All changes require dual authorisation and are fully audited.</div>
    <div class="fgrid">
      <div class="fg"><label>Bank Name <span class="req">*</span></label><input class="fc" value="${s.bankName||''}" placeholder="Full bank name"></div>
      <div class="fg"><label>Bank Branch</label><input class="fc" value="${s.bankBranch||''}" placeholder="Branch name and location"></div>
      <div class="fg"><label>Beneficiary Name <span class="req">*</span></label><input class="fc" value="${s.bankBeneficiary||''}" placeholder="Name as on account"></div>
      <div class="fg"><label>Account Number <span class="req">*</span></label><input class="fc" value="${s.bankAccount||''}" placeholder="Account number"></div>
      <div class="fg"><label>Sort Code / Routing</label><input class="fc" value="${s.bankSort||''}" placeholder="Sort code or routing number"></div>
      <div class="fg"><label>IBAN <span class="req">*</span></label><input class="fc" value="${s.bankIBAN||''}" placeholder="IBAN"></div>
      <div class="fg"><label>SWIFT / BIC <span class="req">*</span></label><input class="fc" value="${s.bankSwift||''}" placeholder="SWIFT code"></div>
      <div class="fg"><label>Payment Currency <span class="req">*</span></label><select class="fc"><option ${s.bankCurrency==='GBP'?'selected':''}>GBP (£)</option><option>USD ($)</option><option>AED (د.إ)</option><option>EUR (€)</option><option>OMR (﷼)</option><option>EGP</option><option>JOD</option></select></div>
      <div class="fg"><label>Verification Status</label><select class="fc"><option>Pending Verification</option><option>Verified — Finance Approved</option><option>Failed Verification</option></select></div>
      <div class="fg"><label>Verified By</label><input class="fc" placeholder="ORN Finance team member"></div>
      <div class="fg"><label>Verified Date</label><input class="fc" type="date"></div>
      <div class="fg"><label>Bank Letter / Voided Cheque</label><input class="fc" placeholder="Reference or filename"></div>
    </div>
    <div class="fg" style="margin-top:10px"><label>Additional Payment Instructions</label>
      <textarea class="fc" style="height:55px;width:100%" placeholder="e.g. include PO reference, intermediary bank details..."></textarea></div>
  </div></div>

  <div class="form-panel"><div class="form-head">5. ORN Team Assignment &amp; Responsibility</div><div class="form-body">
    <div class="fgrid">
      <div class="fg"><label>ORN Account Manager <span class="req">*</span></label><select class="fc"><option value="">Assign manager...</option>${ornTeamSel()}</select></div>
      <div class="fg"><label>ORN Contract Owner <span class="req">*</span></label><select class="fc"><option value="">Assign contract owner...</option>${ornTeamSel()}</select></div>
      <div class="fg"><label>ORN Regional Lead</label><select class="fc"><option value="">Assign regional lead...</option>${ornTeamSel()}</select></div>
      <div class="fg"><label>ORN Finance Contact</label><select class="fc"><option value="">Assign...</option>${ornTeamSel()}</select></div>
      <div class="fg"><label>Account Priority</label><select class="fc"><option>Standard</option><option>Strategic</option><option>VIP</option><option>Watch List</option></select></div>
      <div class="fg"><label>Review Frequency</label><select class="fc"><option>Annual</option><option>6-Monthly</option><option>Quarterly</option></select></div>
      <div class="fg"><label>Relationship Start Date</label><input class="fc" type="date"></div>
      <div class="fg"><label>Internal Channel / Ref</label><input class="fc" placeholder="e.g. #sup-dubai-atlantis"></div>
    </div>
    <div class="fg" style="margin-top:10px"><label>Internal Notes (ORN eyes only)</label>
      <textarea class="fc" style="height:70px;width:100%" placeholder="Internal notes, history, special considerations...">${s.notes||''}</textarea></div>
  </div></div>

  <div class="form-panel"><div class="form-head">6. Commercial Settings</div><div class="form-body"><div class="fgrid">
    <div class="fg"><label>Assign Tier <span class="req">*</span></label><select class="fc"><option>Tier 1 – Premium</option><option>Tier 2 – Standard</option><option>Tier 3 – Budget</option></select></div>
    <div class="fg"><label>Commission Rate (%) <span class="req">*</span></label><input class="fc" type="number" value="${s.commission||''}" placeholder="e.g. 15" min="0" max="50"></div>
    <div class="fg"><label>Payment Terms <span class="req">*</span></label><select class="fc"><option>Net 30</option><option>Net 15</option><option>Net 60</option><option>On Completion</option><option>Advance Payment</option></select></div>
    <div class="fg"><label>Credit Limit (£)</label><input class="fc" type="number" placeholder="e.g. 50000"></div>
    <div class="fg"><label>Currency <span class="req">*</span></label><select class="fc"><option>GBP (£)</option><option>USD ($)</option><option>AED</option><option>EUR (€)</option></select></div>
    <div class="fg"><label>Exclusivity</label><select class="fc"><option>Non-exclusive</option><option>Preferred Supplier</option><option>Exclusive</option></select></div>
    <div class="fg"><label>Featured on Website</label><select class="fc"><option>Yes</option><option>No</option></select></div>
    <div class="fg"><label>VAT Applicable?</label><select class="fc"><option>Yes</option><option>No</option><option>Reverse Charge</option></select></div>
  </div></div></div>

  <div class="form-panel"><div class="form-head">7. Document Uploads</div><div class="form-body">
    <div class="up-grid">
      ${[['📄','Company Registration','PDF, JPG'],['🧾','TAX/VAT Certificate','PDF, JPG'],['🛡️','Insurance Certificate','PDF'],['✍️','Signed Contract','PDF'],['🪪','Owner Passport / ID','PDF, JPG'],['🏦','Bank Confirmation Letter','PDF'],['📋','Director 2 Passport','PDF, JPG'],['✅','KYC / AML Form','PDF'],['🔏','Beneficial Ownership Form','PDF'],['📊','Sanctions Clearance','PDF'],['📎','Public Liability Insurance','PDF'],['📌','Other Documents','Any files']].map(([ic,l,su])=>`
      <div class="up-zone" onclick="this.querySelector('input').click()"><input type="file" hidden onchange="markUpload(this)">
        <div class="up-icon">${ic}</div><div class="up-lbl">${l}</div><div class="up-sub">${su}</div></div>`).join('')}
    </div>
  </div></div>
  <div class="form-actions">
    ${btn('Cancel','btn-white','closeModal?closeModal():toast(\"Cancelled\")')}
    ${btn('Save as Draft','btn-white',"toast('Draft saved')")}
    ${btn('Submit Application','btn-navy',"toast('Application submitted!')")}
  </div>`;
}

// ─── PAGES: Onboarding, Contracts, Payments, Rates, Compliance, Audit, Tiers, Dest ───
function pg_sup_onboard(){
  const stages=[{label:'Application Submitted',cls:'s1',count:3,cards:[{t:'Blue Waters Hotel Group',m:'Dubai · Hotel · 2 days ago',docs:[],pct:20,btn:'Review'},{t:'Sahara Adventure Tours',m:'Morocco · Tour · 4 days ago',docs:[],pct:20,btn:'Review'},{t:'Istanbul Express',m:'Turkey · Transport · 1 day ago',docs:[],pct:20,btn:'Review'}]},{label:'KYC & Owner Verification',cls:'s2',count:2,cards:[{t:'Red Sea Divers',m:'Egypt · Activity',docs:[{l:'Company Reg',ok:true},{l:'Owner ID',ok:true},{l:'KYC Form',ok:false},{l:'Beneficiary Form',ok:false}],pct:40,btn:'Chase KYC'},{t:'Nile Tours Egypt',m:'Egypt · Tour',docs:[{l:'Company Reg',ok:true},{l:'Owner ID',ok:false},{l:'Director ID',ok:false}],pct:30,btn:'Send KYC Form'}]},{label:'Document Verification',cls:'s3',count:2,cards:[{t:'Petra Tours',m:'Jordan · Tour',docs:[{l:'TAX/VAT',ok:true},{l:'Insurance',ok:true},{l:'Bank Letter',ok:false}],pct:60,btn:'Chase Docs'},{t:'Maldives Sunset Cruises',m:'Maldives · Cruise',docs:[{l:'TAX/VAT',ok:true},{l:'Insurance',ok:true},{l:'Bank verified',ok:true},{l:'Contract',ok:false}],pct:75,btn:'Send Contract'}]},{label:'Contract & Bank Setup',cls:'s4',count:1,cards:[{t:'Arabian Nights Dining',m:'Dubai · Restaurant',docs:[{l:'Contract signed',ok:true},{l:'Bank details verified',ok:false}],pct:85,btn:'Chase Bank'}]},{label:'ORN Final Approval',cls:'s5',count:1,cards:[{t:'Cappadocia Balloon Tours',m:'Turkey · All docs complete',docs:[{l:'All verified',ok:true},{l:'Awaiting ORN approval',ok:false}],pct:95,btn:'Approve Now'}]},{label:'Live on Platform',cls:'s6',count:118,cards:[{t:'✓ 118 suppliers live',m:'Fully onboarded and active',docs:[],pct:100,btn:'View All'}]}];
  return `<div class="page-title">Supplier Onboarding</div>
    <div class="toolbar"><span style="font-size:12.5px;font-weight:600;color:var(--text2)">Pipeline — ${stages.reduce((a,s)=>a+s.count,0)-118} active applications</span>
    <div class="toolbar-r">${btn('&#8595; Export','btn-white',"toast('Exporting...')")} ${btn('+ New Application','btn-navy','showOnboardForm()')}</div></div>
    <div class="pipeline">${stages.map(s=>`<div class="pipe-col"><div class="pipe-hd ${s.cls}"><span class="pipe-ht">${s.label}</span><span class="pipe-cnt">${s.count}</span></div>
      <div class="pipe-body">${s.cards.map(c=>`<div class="pcard"><div class="pcard-t">${c.t}</div><div class="pcard-m">${c.m}</div>
        ${c.docs.length?`<div class="doc-row">${c.docs.map(d=>`<span class="dc ${d.ok?'ok':'miss'}">${d.ok?'✓':'✗'} ${d.l}</span>`).join('')}</div>`:''}
        <div class="pbar"><div style="width:${c.pct}%"></div></div>
        <div class="pcard-foot">${btn(c.btn,'btn-white btn-sm',"toast('Opening...')")}</div></div>`).join('')}
      </div></div>`).join('')}</div>
    <div id="onboard-form-wrap" style="display:none"><h3 style="font-size:14px;font-weight:700;margin:16px 0 12px">New Supplier Application</h3>${fullSupplierFormHTML()}</div>`;
}
function showOnboardForm(){const w=document.getElementById('onboard-form-wrap');if(w){w.style.display=w.style.display==='none'?'block':'none';if(w.style.display==='block')w.scrollIntoView({behavior:'smooth'});}}
window.showOnboardForm=showOnboardForm;

function pg_sup_contracts(){
  return `<div class="page-title">Contracts &amp; Documents</div>
    <div class="sum-cards"><div class="sum-card green"><div class="sc-lbl">Active Contracts</div><div class="sc-val green">131</div></div><div class="sum-card orange"><div class="sc-lbl">Expiring (30 days)</div><div class="sc-val orange">3</div><div class="sc-sub">Renewal required</div></div><div class="sum-card red"><div class="sc-lbl">Expired</div><div class="sc-val red">2</div><div class="sc-sub">Immediate action</div></div><div class="sum-card"><div class="sc-lbl">Total Documents</div><div class="sc-val">486</div></div></div>
    <div class="toolbar">
      ${ti('Search supplier or document...','',200)}
      ${sel(['All Document Types','Service Contract','Insurance Certificate','VAT Certificate','Company Registration','Owner ID / Passport','KYC Form','Bank Letter'])}
      ${sel(['All Status','Valid','Expiring','Expired'])}
      ${sel(['All Destinations','Dubai','Abu Dhabi','Oman','Egypt','Jordan','Morocco'])}
      ${sel(['All ORN Contract Owners',...ornTeam.map(t=>t.name)])}
      ${btn('Search','btn-navy',"toast('Searching...')")}
      <div class="toolbar-r">${btn('+ Upload Document','btn-navy','openUploadModal()')} ${btn('+ New Contract','btn-white','openNewContractModal()')}</div>
    </div>
    <div class="tbl-wrap"><table>
      ${thdr('#','Supplier ↕','Type ↕','Doc No. ↕','Destination ↕','Start ↕','Expiry ↕','Value ↕','Annual Value ↕','Status ↕','ORN Owner ↕','ORN Manager ↕','Governing Law ↕','Auto-Renew ↕','Review Due ↕','Manage')}
      ${frow(0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0)}
      <tbody>${contracts.map((c,i)=>`<tr><td class="rn">${i+1}</td>
        <td><a class="lnk" onclick='openContractModal(${esc(c)})'>${c.supplier}</a></td>
        <td>${c.type}</td><td class="mono">${c.id}</td><td>${c.dest}</td>
        <td style="font-size:11px">${c.start}</td>
        <td style="color:${c.status==='Expired'?'var(--red)':c.status==='Expiring'?'var(--orange)':'inherit'};font-weight:${c.status!=='Valid'?700:400}">${c.expiry}</td>
        <td>${c.value}</td><td>${c.annualValue}</td>
        <td><span class="pill ${sc(c.status)}">${c.status}</span></td>
        <td style="font-size:11.5px">${c.ornOwner}</td>
        <td style="font-size:11.5px">${c.ornManager}</td>
        <td style="font-size:11.5px">${c.governingLaw}</td>
        <td style="font-size:11.5px">${c.autoRenew}</td>
        <td style="font-size:11.5px;color:${c.reviewDate==='Overdue'?'var(--red)':'inherit'};font-weight:${c.reviewDate==='Overdue'?700:400}">${c.reviewDate}</td>
        <td class="act"><a onclick='openContractModal(${esc(c)})'>View</a><a onclick='openEditContractModal(${esc(c)})'>Edit</a><a onclick="toast('Downloading...')">&#8595;</a><a onclick="toast('Renewal started')">Renew</a><a class="red" onclick="if(confirm('Delete?'))toast('Deleted')">Del</a></td>
      </tr>`).join('')}</tbody>
    </table>${pgfoot(`1–${contracts.length}`,486,5)}</div>`;
}

function pg_sup_payments(){
  return `<div class="page-title">Payment Management</div>
    <div class="sum-cards"><div class="sum-card green"><div class="sc-lbl">Paid This Month</div><div class="sc-val green">£248,000</div><div class="sc-sub">↑ 12% vs last month</div></div><div class="sum-card orange"><div class="sc-lbl">Pending Approval</div><div class="sc-val orange">£34,000</div><div class="sc-sub">3 invoices</div></div><div class="sum-card red"><div class="sc-lbl">Overdue</div><div class="sc-val red">£14,400</div><div class="sc-sub">2 suppliers</div></div><div class="sum-card"><div class="sc-lbl">YTD Total</div><div class="sc-val">£2,100,000</div><div class="sc-sub">↑ 18% vs last year</div></div></div>
    <div class="toolbar">${ti('Search supplier or invoice...','',200)} ${sel(['All Status','Pending Approval','Approved','Paid','Overdue'])} ${sel(['All Destinations','Dubai','Abu Dhabi','Oman','Egypt','Jordan'])} <input type="date" class="ti" value="2026-04-01"><span style="font-size:12px;color:var(--text3)">–</span><input type="date" class="ti" value="2026-04-30"> ${btn('Search','btn-navy',"toast('Searching...')")} <div class="toolbar-r">${btn('Bulk Pay','btn-white',"toast('Select rows first...')")} ${btn('+ New Invoice','btn-navy','openNewPaymentModal()')}</div></div>
    <div class="tbl-wrap"><table>
      ${thdr('#','✓','Supplier ↕','Invoice No. ↕','Description ↕','Destination ↕','Amount ↕','Due Date ↕','PO Ref ↕','Approver ↕','Status ↕','Manage')}
      ${frow(0,0,1,1,1,1,1,1,1,1,1,0)}
      <tbody>${payments.map((p,i)=>{const ac=p.status==='Pending Approval'?`<a onclick="toast('Approved!')">Approve</a><a>View</a>`:p.status==='Approved'?`<a onclick="toast('Processing £${p.amount.toLocaleString()}...')">Pay Now</a><a>View</a>`:p.status==='Overdue'?`<a onclick="toast('Processing...')">Pay Now</a><a onclick="toast('Chasing...')">Chase</a>`:`<a onclick="toast('Downloading...')">&#8595; Receipt</a><a>View</a>`;return `<tr><td class="rn">${i+1}</td><td><input type="checkbox"></td><td class="lnk">${p.supplier}</td><td class="mono">${p.id}</td><td>${p.desc}</td><td>${p.dest}</td><td><b>£${p.amount.toLocaleString()}</b></td><td style="color:${p.status==='Overdue'?'var(--red)':'inherit'}">${p.due}</td><td class="mono" style="font-size:11px">${p.poRef}</td><td style="font-size:11.5px">${p.approver}</td><td><span class="pill ${sc(p.status)}">${p.status}</span></td><td class="act">${ac}</td></tr>`;}).join('')}</tbody>
    </table>${pgfoot(`1–${payments.length}`,142,5)}</div>`;
}

function pg_sup_rates(){
  return `<div class="page-title">Rates &amp; Pricing</div>
    <div class="toolbar">${ti('Search supplier...','',180)} ${sel(['All Destinations','Dubai','Abu Dhabi','Oman','Egypt','Jordan','Morocco','Turkey'])} ${sel(['All Types','Hotel','Tour','Transport','Activity'])} ${sel(['All Seasons','Peak','High','Low','All Year'])} ${btn('Search','btn-navy',"toast('Searching...')")} <div class="toolbar-r">${btn('&#8595; Export','btn-white',"toast('Exporting...')")} ${btn('+ Add Rate','btn-navy','openNewRateModal()')}</div></div>
    <div class="tbl-wrap"><table>
      ${thdr('#','Supplier ↕','Destination ↕','Type ↕','Room/Service ↕','Season ↕','Period ↕','Net Rate ↕','Gross Rate ↕','Commission ↕','Currency ↕','Status ↕','Last Updated ↕','Updated By ↕','Manage')}
      ${frow(0,1,1,1,1,1,1,1,1,1,1,1,1,1,0)}
      <tbody>${rates.map((r,i)=>`<tr><td class="rn">${i+1}</td><td class="lnk">${r.supplier}</td><td>${r.dest}</td><td>${r.type}</td><td>${r.room}</td><td><span class="pill ${r.season==='Peak'?'p-red':r.season==='High'?'p-orange':r.season==='Low'?'p-blue':'p-gray'}">${r.season}</span></td><td>${r.period}</td><td><b>${r.net}</b></td><td>${r.gross}</td><td>${r.commission}</td><td>${r.currency}</td><td><span class="pill p-green">${r.status}</span></td><td style="font-size:11.5px;color:var(--text3)">${r.lastUpdated}</td><td style="font-size:11.5px">${r.updatedBy}</td><td class="act"><a onclick="openEditRateModal('${r.supplier}','${r.season}')">Edit</a><a onclick="toast('Duplicating...')">Duplicate</a><a class="red" onclick="toast('Delete?')">Delete</a></td></tr>`).join('')}</tbody>
    </table>${pgfoot(`1–${rates.length}`,rates.length)}</div>`;
}

function pg_sup_compliance(){
  return `<div class="page-title">Compliance Dashboard</div>
    <p class="page-subtitle">Track KYC, AML, insurance, document expiry and compliance scores across all suppliers</p>
    <div class="sum-cards"><div class="sum-card green"><div class="sc-lbl">Fully Compliant</div><div class="sc-val green">78</div><div class="sc-sub">Score ≥ 85%</div></div><div class="sum-card orange"><div class="sc-lbl">Partial Compliance</div><div class="sc-val orange">38</div><div class="sc-sub">Score 60–84%</div></div><div class="sum-card red"><div class="sc-lbl">Non-Compliant</div><div class="sc-val red">12</div><div class="sc-sub">Score &lt; 60%</div></div><div class="sum-card"><div class="sc-lbl">KYC Complete</div><div class="sc-val">104 / 142</div><div class="sc-sub">73% completion</div></div></div>
    <div class="toolbar">${ti('Search supplier...','',180)} ${sel(['All Status','Compliant','Partial','Non-Compliant'])} ${sel(['All Issues','Insurance Expiring','Contract Expiring','KYC Incomplete','Bank Unverified','Owner ID Missing'])} ${sel(['All ORN Managers',...ornTeam.map(t=>t.name)])} ${btn('Search','btn-navy',"toast('Filtering...')")} <div class="toolbar-r">${btn('&#8595; Compliance Report','btn-white',"toast('Generating report...')")}</div></div>
    <div class="tbl-wrap"><table>
      ${thdr('#','Supplier ↕','Destination ↕','ORN Manager ↕','Score ↕','KYC ↕','Owner ID ↕','Bank Verified ↕','Insurance Expiry ↕','VAT Expiry ↕','Contract ↕','Sanctions ↕','Actions')}
      ${frow(0,1,1,1,1,1,1,1,1,1,1,1,0)}
      <tbody>${suppliers.map((s,i)=>`<tr><td class="rn">${i+1}</td><td><a class="lnk" onclick='openSupModal(${esc(s)})'>${s.name}</a></td><td>${s.dest}</td><td style="font-size:11.5px">${s.ornManager}</td><td>${compliancePill(s.complianceScore||50)}</td><td><span class="pill ${s.status==='Active'?'p-green':'p-orange'}">${s.status==='Active'?'Complete':'Pending'}</span></td><td><span class="pill ${s.ownerPassport?'p-green':'p-red'}">${s.ownerPassport?'On file':'Missing'}</span></td><td><span class="pill ${s.outstanding===0&&s.status==='Active'?'p-green':'p-orange'}">${s.outstanding===0&&s.status==='Active'?'Verified':'Pending'}</span></td><td style="font-size:11.5px;color:${(s.insuranceExpiry||'').includes('2025')||s.insuranceExpiry==='Pending'?'var(--red)':'inherit'}">${s.insuranceExpiry||'—'}</td><td style="font-size:11.5px">${s.vatExpiry||'—'}</td><td style="font-size:11.5px;color:${s.contract==='Expired'||s.contract==='Awaiting'?'var(--red)':'inherit'}">${s.contract}</td><td><span class="pill p-green">Clear</span></td><td class="act">${(s.complianceScore||50)<60?'<a onclick="toast(\'Compliance actions...\')">⚠ Fix</a>':''} ${s.contract==='Awaiting'||s.contract==='Expired'?'<a onclick="toast(\'Opening contracts...\')">Renew</a>':''}<a onclick='openSupModal(${esc(s)})'>View</a></td></tr>`).join('')}</tbody>
    </table>${pgfoot(`1–${suppliers.length}`,142,5)}</div>`;
}

function pg_sup_audit(){
  return `<div class="page-title">Audit Trail</div>
    <p class="page-subtitle">Complete log of all changes, approvals, document uploads and actions</p>
    <div class="toolbar">${ti('Search supplier or action...','',200)} ${sel(['All Action Types','Contract Uploaded','Payment Approved','Payment Processed','Supplier Added','Supplier Edited','Status Changed','Rate Updated','Tier Changed','Bank Details Verified','Owner Details Added','Document Expiry Alert','Auto-Reminder','Contract Owner Assigned'])} ${sel(['All Users',...ornTeam.map(t=>t.name),'System'])} <input type="date" class="ti" value="2026-04-01"><span style="font-size:12px;color:var(--text3)">–</span><input type="date" class="ti" value="2026-04-26"> ${btn('Search','btn-navy',"toast('Filtering...')")} <div class="toolbar-r">${btn('&#8595; Export Log','btn-white',"toast('Exporting...')")}</div></div>
    <div class="tbl-wrap"><table>
      ${thdr('#','Timestamp ↕','User ↕','Action ↕','Supplier ↕','Detail')}
      ${frow(0,1,1,1,1,1)}
      <tbody>${auditLog.map((a,i)=>`<tr><td class="rn">${i+1}</td><td class="mono" style="white-space:nowrap">${a.ts}</td><td style="font-weight:600;white-space:nowrap">${a.user}</td><td><span style="display:inline-block;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600;background:${a.color}22;color:${a.color}">${a.action}</span></td><td class="lnk">${a.supplier}</td><td style="font-size:12px;color:var(--text2);max-width:400px">${a.detail}</td></tr>`).join('')}</tbody>
    </table>${pgfoot(`1–${auditLog.length}`,1247,5)}</div>`;
}

function pg_sup_tiers(){
  const tiers=[{cls:'tc1',l:'Tier 1',t:'Premium',h:50,to:18,ot:8,feats:['Homepage featured placement','Priority in all search results','Gold badge on listing','Commission: 15–20%','Dedicated ORN account manager','Featured in email campaigns','Exclusive promotional offers','Priority SLA 4hrs','Annual rate review']},{cls:'tc2',l:'Tier 2',t:'Standard',h:42,to:31,ot:14,feats:['Standard search listing','Category pages','Silver badge','Commission: 10–15%','Shared account manager','Standard campaigns','SLA 24hrs','Supplier portal access','Biannual rate review']},{cls:'tc3',l:'Tier 3',t:'Budget',h:10,to:12,ot:8,feats:['Basic listing only','Searchable','No badge','Commission: 8–12%','Self-service only','No campaigns','Email SLA 48hrs','Basic reporting only','Annual rate review']}];
  return `<div class="page-title">Tier Management</div><p class="page-subtitle">Configure supplier tiers, website display priority and commission rules</p>
    <div class="tier-grid">${tiers.map(t=>`<div class="tier-card ${t.cls}"><div class="tier-hd"><span>${t.l} — ${t.t}</span>${btn('Edit Rules','btn-white btn-sm',`toast('Editing ${t.l}...')`)}</div><div class="tier-body"><div class="tier-stats"><div><div class="ts-val">${t.h}</div><div class="ts-lbl">Hotels</div></div><div><div class="ts-val">${t.to}</div><div class="ts-lbl">Tours</div></div><div><div class="ts-val">${t.ot}</div><div class="ts-lbl">Other</div></div></div>${t.feats.map((f,i)=>`<div class="tf ${i<(t.cls==='tc3'?2:5)?'yes':'no'}">${f}</div>`).join('')}<div style="margin-top:12px">${btn(`View All ${t.l} Suppliers`,'btn-navy',`supTierFilter(${t.cls==='tc1'?1:t.cls==='tc2'?2:3})`,'style="width:100%"')}</div></div></div>`).join('')}</div>`;
}

function pg_sup_dest(){
  const dests=[{flag:'🇦🇪',name:'Dubai',sup:38,t1:14,active:36,value:'£842K',lead:'Omar Al Farsi'},{flag:'🇦🇪',name:'Abu Dhabi',sup:24,t1:8,active:23,value:'£521K',lead:'Omar Al Farsi'},{flag:'🇴🇲',name:'Oman',sup:18,t1:6,active:18,value:'£398K',lead:'Omar Al Farsi'},{flag:'🇪🇬',name:'Egypt',sup:14,t1:4,active:11,value:'£287K',lead:'Ravi Patel'},{flag:'🇯🇴',name:'Jordan',sup:10,t1:3,active:10,value:'£198K',lead:'Ravi Patel'},{flag:'🇲🇦',name:'Morocco',sup:8,t1:2,active:7,value:'£164K',lead:'Sarah Mitchell'},{flag:'🇹🇷',name:'Turkey',sup:6,t1:1,active:4,value:'£142K',lead:'Sarah Mitchell'},{flag:'🇲🇻',name:'Maldives',sup:4,t1:2,active:3,value:'£98K',lead:'Priya Sharma'},{flag:'🇸🇦',name:'Saudi Arabia',sup:0,t1:0,active:0,value:'—',lead:'TBC'},{flag:'🇰🇪',name:'Kenya',sup:0,t1:0,active:0,value:'—',lead:'TBC'},{flag:'🇮🇳',name:'India',sup:0,t1:0,active:0,value:'—',lead:'Priya Sharma'},{flag:'🇧🇭',name:'Bahrain',sup:0,t1:0,active:0,value:'—',lead:'TBC'}];
  return `<div class="page-title">Destinations</div><div class="toolbar"><div class="toolbar-r">${btn('+ Add Destination','btn-navy','openNewDestModal()')}</div></div>
    <div class="dest-grid">${dests.map(d=>`<div class="dest-card"><div class="dest-flag">${d.flag}</div><div class="dest-info" style="flex:1"><h4>${d.name}</h4><span>${d.sup} suppliers · T1: ${d.t1} · Active: ${d.active}</span><span style="color:${d.value==='—'?'var(--text3)':'var(--green)'};font-weight:600">${d.value} MTD</span><span style="font-size:10.5px;color:var(--text3)">Lead: ${d.lead}</span></div>${btn('Manage','btn-white btn-sm',`toast('Opening ${d.name}...')`)}</div>`).join('')}</div>`;
}

function pg_hotel_content(){
  const hotels=[{id:'H-0081',name:'Atlantis The Palm',star:'5',area:'Palm Jumeirah',type:'Resort',status:'Active',mapping:'Mapped',supp:'Yes',tier:1,rank:1},{id:'H-0082',name:'Burj Al Arab Jumeirah',star:'7',area:'Jumeirah',type:'Luxury',status:'Active',mapping:'Mapped',supp:'Yes',tier:1,rank:2},{id:'H-0083',name:'Al Maha Desert Resort',star:'5',area:'Dubai Desert',type:'Desert Resort',status:'Active',mapping:'Mapped',supp:'Yes',tier:1,rank:3},{id:'H-0086',name:'Oman Luxury Resorts',star:'5',area:'Muscat',type:'Resort',status:'Active',mapping:'Mapped',supp:'No',tier:1,rank:4},{id:'H-0096',name:'Pyramids View Hotel',star:'4',area:'Giza',type:'Hotel',status:'Suspended',mapping:'Not Mapped',supp:'No',tier:2,rank:5},{id:'H-0094',name:'Blue Waters Hotel Group',star:'5',area:'Blue Waters',type:'Hotel',status:'Pending',mapping:'Pending',supp:'No',tier:2,rank:6}];
  return `<div class="page-title">Manage Hotels</div>
    <div class="toolbar"><input class="ti" placeholder="Destination" style="width:180px"> ${btn('Search','btn-navy',"toast('Searching...')")} <div class="toolbar-r">${btn('+ Add Hotel','btn-navy',"toast('Opening form...')")}</div></div>
    <div class="tbl-wrap"><table>
      ${thdr('#','✓','ID ↕','Hotel ↕','Star ↕','Area ↕','Type ↕','Status ↕','Online Mapping ↕','Supplements ↕','Tier ↕','Preferred Rank ↕','Featured ↕','Manage')}
      ${frow(0,0,1,1,1,1,1,1,1,1,1,1,0,0)}
      <tbody>${hotels.map((h,i)=>`<tr><td class="rn">${i+1}</td><td><input type="checkbox"></td><td class="mono">${h.id}</td><td class="lnk">${h.name}</td><td>${h.star}★</td><td>${h.area}</td><td>${h.type}</td><td><span class="pill ${sc(h.status)}">${h.status}</span></td><td><span class="pill ${h.mapping==='Mapped'?'p-green':h.mapping==='Pending'?'p-orange':'p-gray'}">${h.mapping}</span></td><td>${h.supp==='Yes'?'<span class="pill p-green">Yes</span>':'<span class="pill p-gray">No</span>'}</td><td><span class="tbadge t${h.tier}">Tier ${h.tier}</span></td><td style="text-align:center">${h.rank}</td><td><label class="tog"><input type="checkbox" ${h.supp==='Yes'?'checked':''}><span class="tog-sl"></span></label></td><td class="act"><a>Edit</a><a>Rates</a><a>Contracts</a><a>Content</a></td></tr>`).join('')}</tbody>
    </table>${pgfoot(`1–${hotels.length}`,50,3)}</div>`;
}
function pg_hotel_rates(){return `<div class="page-title">Manage Rates and Inventory</div><div style="background:#fff;border:1px solid var(--border-lt);padding:40px;text-align:center;color:var(--text3)">Connect live hotel inventory data to populate.</div>`;}
function pg_act_all(){
  return `<div class="page-title">Manage Activities</div>
    <div class="toolbar">${ti('Search activity...','',200)} ${sel(['All Types','Tour','Transfer','Experience','Cruise','Diving','Balloon'])} ${sel(['All Destinations','Dubai','Egypt','Jordan','Oman','Turkey'])} ${btn('Search','btn-navy',"toast('Searching...')")} <div class="toolbar-r">${btn('+ Add Activity','btn-navy',"toast('Opening form...')")}</div></div>
    <div class="tbl-wrap"><table>
      ${thdr('#','Supplier ↕','Activity Type ↕','Destination ↕','Duration ↕','Min Pax ↕','Commission ↕','Status ↕','ORN Manager ↕','Manage')}
      ${frow(0,1,1,1,1,1,1,1,1,0)}
      <tbody>${[['Desert Tracks Tours','Desert Safari','Dubai','4–8 hrs','2','15%','Active','Priya Sharma'],['Nile Tours Egypt','River Cruise','Egypt','1–7 days','10','12%','Pending','Ravi Patel'],['Petra Tours & Travel','Historical Tour','Jordan','Full day','1','14%','Active','Ravi Patel'],['Red Sea Divers','Diving / Snorkelling','Egypt','Half day','2','16%','Active','Ravi Patel'],['Cappadocia Balloon Tours','Hot Air Balloon','Turkey','3 hrs','2','17%','Active','Sarah Mitchell'],['Dead Sea Wellness Spa','Wellness Package','Jordan','Full day','1','14%','Active','Ravi Patel']].map((r,i)=>`<tr><td class="rn">${i+1}</td><td class="lnk">${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td>${r[5]}</td><td><span class="pill ${sc(r[6])}">${r[6]}</span></td><td style="font-size:11.5px">${r[7]}</td><td class="act"><a>Edit</a><a>View</a><a>Rates</a></td></tr>`).join('')}</tbody>
    </table></div>`;
}

// ─── MODALS ───────────────────────────────────────────────────────
function openModal(title,body,footer=''){
  document.getElementById('modal-title').textContent=title;
  document.getElementById('modal-body').innerHTML=body+(footer?`<div class="modal-foot">${footer}</div>`:'');
  document.getElementById('modal-overlay').classList.add('open');
  document.getElementById('modal-box').classList.add('open');
}
function closeModal(){
  document.getElementById('modal-overlay').classList.remove('open');
  const mb=document.getElementById('modal-box');
  mb.classList.remove('open');
  mb.style.width='';
}
window.closeModal=closeModal;

function switchTab(el,panelId){
  const bar=el.closest('.tab-bar');
  bar.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  const scope=el.closest('.modal-body')||document;
  scope.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
  const panel=document.getElementById(panelId);
  if(panel)panel.classList.add('active');
}
window.switchTab=switchTab;

function markUpload(input){
  if(input.files&&input.files[0]){
    const z=input.closest('.up-zone');
    if(z){z.classList.add('done');const s=z.querySelector('.up-sub');if(s){s.textContent='✓ '+input.files[0].name;s.style.color='var(--green)';}}
    toast('Uploaded: '+input.files[0].name);
  }
}
window.markUpload=markUpload;

// Supplier full detail modal — 8 tabs
function openSupModal(s){
  if(typeof s==='string')try{s=JSON.parse(s.replace(/&quot;/g,'"'));}catch(e){}
  openModal(`Supplier — ${s.name}`,`
    <div class="tab-bar">
      <div class="tab active" onclick="switchTab(this,'st-det')">Details</div>
      <div class="tab" onclick="switchTab(this,'st-own')">Owner / Directors</div>
      <div class="tab" onclick="switchTab(this,'st-bank')">Bank Details</div>
      <div class="tab" onclick="switchTab(this,'st-orn')">ORN Team</div>
      <div class="tab" onclick="switchTab(this,'st-con')">Contracts</div>
      <div class="tab" onclick="switchTab(this,'st-pay')">Payments</div>
      <div class="tab" onclick="switchTab(this,'st-rat')">Rates</div>
      <div class="tab" onclick="switchTab(this,'st-aud')">Audit Trail</div>
    </div>
    <div id="st-det" class="tab-panel active">
      <div class="fgrid" style="margin-bottom:8px">
        ${[['ID',s.id,'mono'],['Type',s.type,''],['Destination',s.dest,''],['Status',`<span class="pill ${sc(s.status)}">${s.status}</span>`,''],['Tier',`<span class="tbadge t${s.tier}">Tier ${s.tier}</span>`,''],['Commission',s.commission+'%',''],['Payment Terms',s.payTerms,''],['Currency',s.currency,''],['TAX / VAT',s.tax,'mono'],['Reg. No.',s.regNo,'mono'],['Contract End',s.contract,''],['Outstanding',`<span style="color:${s.outstanding>0?'var(--red)':'var(--green)'};font-weight:700">${fmtGbp(s.outstanding)}</span>`,''],['Contact',s.contact,''],['Contact Role',s.contactRole||'—',''],['Email',`<a class="lnk" href="mailto:${s.email}">${s.email}</a>`,''],['Phone',s.phone,''],['Compliance Score',compliancePill(s.complianceScore||0),''],['Rating','⭐ '+s.rating,'']].map(([l,v,c])=>`<div><div style="font-size:10.5px;color:var(--text3)">${l}</div><div class="${c}" style="font-size:12.5px">${v}</div></div>`).join('')}
      </div>
      ${s.notes?`<div style="background:var(--bg-page);border:1px solid var(--border-lt);border-radius:var(--r);padding:8px 12px;font-size:12px;color:var(--text2)"><b style="font-size:10.5px;color:var(--text3)">INTERNAL NOTES</b><br>${s.notes}</div>`:''}
    </div>
    <div id="st-own" class="tab-panel">
      <div style="background:#fff8e6;border:1px solid #ffe082;border-radius:3px;padding:8px 12px;margin-bottom:12px;font-size:12px;color:#6d4c00">🔒 <b>Sensitive KYC / AML data</b> — authorised personnel only. Not to be shared externally.</div>
      <div style="font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--navy);margin-bottom:8px">Director / Owner 1 (Primary)</div>
      <div class="fgrid" style="margin-bottom:14px">
        ${[['Full Legal Name',s.owner||'Not provided',''],['Nationality',s.ownerNationality||'—',''],['Date of Birth',s.ownerDOB||'—',''],['Passport / ID No.',s.ownerPassport||'Not on file','mono'],['Personal Email',s.ownerEmail||'—',''],['Personal Phone',s.ownerPhone||'—',''],['Residential Address',s.ownerAddress||'—',''],['PEP Status','Not a PEP','']].map(([l,v,c])=>`<div><div style="font-size:10.5px;color:var(--text3)">${l}</div><div class="${c}" style="font-size:12.5px">${v}</div></div>`).join('')}
      </div>
      <div style="font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--navy);margin-bottom:8px">Director / Owner 2</div>
      <div class="fgrid">
        ${[['Full Legal Name',s.director2||'Not provided',''],['Role',s.director2Role||'—',''],['Nationality',s.director2Nationality||'—',''],['Passport / ID No.',s.director2Passport||'Not on file','mono']].map(([l,v,c])=>`<div><div style="font-size:10.5px;color:var(--text3)">${l}</div><div class="${c}" style="font-size:12.5px">${v}</div></div>`).join('')}
      </div>
      <div style="margin-top:12px;display:flex;gap:8px">${btn('Edit Owner Details','btn-white btn-sm',`closeModal();openEditSupModal(${esc(s)})`)} ${btn('Upload Passport','btn-white btn-sm','closeModal();openUploadModal()')}</div>
    </div>
    <div id="st-bank" class="tab-panel">
      <div style="background:#e8f4fe;border:1px solid #90caf9;border-radius:3px;padding:8px 12px;margin-bottom:12px;font-size:12px;color:#0d47a1">🏦 <b>Bank details verified by ORN Finance.</b> Any changes require dual authorisation and are fully audited.</div>
      <div class="fgrid">
        ${[['Bank Name',s.bankName||'Not provided',''],['Branch',s.bankBranch||'—',''],['Beneficiary Name',s.bankBeneficiary||'—',''],['Account Number',s.bankAccount||'Not on file','mono'],['Sort Code / Routing',s.bankSort||'—','mono'],['IBAN',s.bankIBAN||'Not on file','mono'],['SWIFT / BIC',s.bankSwift||'—','mono'],['Payment Currency',s.bankCurrency||'—',''],['Verification Status',s.bankAccount?'<span class="pill p-green">Verified — Finance Approved</span>':'<span class="pill p-orange">Pending Verification</span>',''],['Verified By',s.outstanding===0&&s.bankAccount?'Nina Kowalski':'Pending','']].map(([l,v,c])=>`<div><div style="font-size:10.5px;color:var(--text3)">${l}</div><div class="${c}" style="font-size:12.5px">${v}</div></div>`).join('')}
      </div>
      <div style="margin-top:12px;display:flex;gap:8px">${btn('Edit Bank Details','btn-white btn-sm',`closeModal();openEditSupModal(${esc(s)})`)} ${btn('Upload Bank Letter','btn-white btn-sm','closeModal();openUploadModal()')} ${btn('Request Re-Verification','btn-white btn-sm',"toast('Verification request sent to Finance')")}</div>
    </div>
    <div id="st-orn" class="tab-panel">
      <div style="font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--navy);margin-bottom:10px">ORN Team Responsible for this Supplier</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px">
        ${[['Account Manager',s.ornManager||'Unassigned'],['Contract Owner',s.ornContractOwner||'Unassigned'],['Regional Lead',s.ornRegionalLead||'Unassigned'],['Finance Contact','Nina Kowalski']].map(([l,v])=>{const m=ornTeam.find(t=>t.name===v);return`<div style="background:var(--bg-page);border:1px solid var(--border-lt);border-radius:var(--r);padding:10px"><div style="font-size:10.5px;color:var(--text3);margin-bottom:4px">${l}</div><div style="font-size:13px;font-weight:700;color:var(--navy)">${v}</div>${m?`<div style="font-size:11px;color:var(--text3)">${m.role} · ${m.region}</div><a class="lnk" style="font-size:11.5px" href="mailto:${m.email}">${m.email}</a>`:''}</div>`;}).join('')}
      </div>
      <div style="font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--navy);margin-bottom:8px">ORN Full Team Directory</div>
      <div class="tbl-wrap"><table>${thdr('Name','Role','Region','Email','Phone')}<tbody>${ornTeam.map(t=>`<tr><td style="font-weight:600">${t.name}</td><td>${t.role}</td><td>${t.region}</td><td><a class="lnk" href="mailto:${t.email}">${t.email}</a></td><td>${t.phone}</td></tr>`).join('')}</tbody></table></div>
      <div style="margin-top:10px;display:flex;gap:8px">${btn('Reassign Manager','btn-white btn-sm',`closeModal();openEditSupModal(${esc(s)})`)} ${btn('Edit ORN Team','btn-white btn-sm',`closeModal();openEditSupModal(${esc(s)})`)}</div>
    </div>
    <div id="st-con" class="tab-panel">
      ${contracts.filter(c=>c.supplier===s.name).length===0?'<p style="color:var(--text3)">No contracts on file.</p>':contracts.filter(c=>c.supplier===s.name).map(c=>`<div style="border:1px solid var(--border-lt);border-radius:var(--r);padding:12px;margin-bottom:10px"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px"><div><b>${c.type}</b> <span class="mono" style="margin-left:8px">${c.id}</span></div><span class="pill ${sc(c.status)}">${c.status}</span></div><div class="fgrid" style="margin-bottom:8px">${[['Period',`${c.start} – ${c.expiry}`],['Contract Value',c.value],['Annual Value',c.annualValue],['ORN Contract Owner',c.ornOwner],['ORN Manager',c.ornManager],['Governing Law',c.governingLaw],['Auto-Renew',c.autoRenew],['Review Due',c.reviewDate]].map(([l,v])=>`<div><div style="font-size:10.5px;color:var(--text3)">${l}</div><div style="font-size:12px">${v}</div></div>`).join('')}</div><div style="background:var(--bg-page);padding:6px 10px;border-radius:var(--r);font-size:12px;margin-bottom:8px">${c.notes}</div><div style="display:flex;gap:6px">${btn('&#8595; Download','btn-white btn-sm',`toast('Downloading...')`)} ${btn('Edit','btn-white btn-sm',`closeModal();openEditContractModal(${esc(c)})`)} ${btn('Renew','btn-white btn-sm',`toast('Starting renewal...')`)}</div></div>`).join('')}
      <div style="margin-top:8px">${btn('+ Upload Document','btn-navy','closeModal();openUploadModal()')}</div>
    </div>
    <div id="st-pay" class="tab-panel">
      ${payments.filter(p=>p.supplier===s.name).length===0?'<p style="color:var(--text3)">No payments found.</p>':payments.filter(p=>p.supplier===s.name).map(p=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border-lt)"><div><div style="font-weight:600;font-size:12.5px">${p.desc}</div><div style="font-size:11.5px;color:var(--text3)">${p.id} · Due: ${p.due} · PO: ${p.poRef} · Approver: ${p.approver}</div></div><div style="display:flex;align-items:center;gap:10px"><b>£${p.amount.toLocaleString()}</b><span class="pill ${sc(p.status)}">${p.status}</span></div></div>`).join('')}
    </div>
    <div id="st-rat" class="tab-panel">
      ${rates.filter(r=>r.supplier===s.name).length===0?'<p style="color:var(--text3)">No rates configured.</p>':rates.filter(r=>r.supplier===s.name).map(r=>`<div style="border:1px solid var(--border-lt);border-radius:var(--r);padding:10px;margin-bottom:8px;display:flex;align-items:center;justify-content:space-between;gap:12px"><div><span class="pill ${r.season==='Peak'?'p-red':r.season==='High'?'p-orange':'p-blue'}" style="margin-right:8px">${r.season}</span><b>${r.room}</b> · ${r.period}<div style="font-size:11px;color:var(--text3);margin-top:3px">Updated: ${r.lastUpdated} by ${r.updatedBy}</div></div><div style="display:flex;gap:16px;align-items:center"><div style="text-align:center"><div style="font-size:10px;color:var(--text3)">Net</div><b>${r.net}</b></div><div style="text-align:center"><div style="font-size:10px;color:var(--text3)">Gross</div><b>${r.gross}</b></div><div style="text-align:center"><div style="font-size:10px;color:var(--text3)">Comm.</div>${r.commission}</div></div>${btn('Edit','btn-white btn-sm',"toast('Editing rate...')")}</div>`).join('')}
    </div>
    <div id="st-aud" class="tab-panel">
      <div class="audit-list">${auditLog.filter(a=>a.supplier===s.name).length===0?'<p style="color:var(--text3);padding:10px">No audit entries.</p>':auditLog.filter(a=>a.supplier===s.name).map(a=>`<div class="audit-item"><div class="audit-dot" style="background:${a.color}"></div><div class="audit-content"><div class="audit-action">${a.action}</div><div class="audit-meta">${a.ts} · by ${a.user}</div><div class="audit-detail">${a.detail}</div></div></div>`).join('')}</div>
    </div>`,
    `${btn('Edit Supplier','btn-white',`closeModal();openEditSupModal(${esc(s)})`)} ${btn('Close','btn-navy','closeModal()')}`
  );
}
window.openSupModal=openSupModal;

function openEditSupModal(s){
  if(typeof s==='string')try{s=JSON.parse(s.replace(/&quot;/g,'"'));}catch(e){}
  openModal(`Edit Supplier — ${s.name}`,fullSupplierFormHTML(s),
    `${btn('Cancel','btn-white','closeModal()')} ${btn('Save Draft','btn-white',"toast('Draft saved')")} ${btn('Save Changes','btn-navy',"toast('Changes saved!');closeModal()")}`);
}
window.openEditSupModal=openEditSupModal;

function openNewSupModal(){
  openModal('New Supplier Application',fullSupplierFormHTML(),
    `${btn('Cancel','btn-white','closeModal()')} ${btn('Save Draft','btn-white',"toast('Draft saved')")} ${btn('Submit','btn-navy',"toast('Submitted!');closeModal()")}`);
}
window.openNewSupModal=openNewSupModal;

function openContractModal(c){
  if(typeof c==='string')try{c=JSON.parse(c.replace(/&quot;/g,'"'));}catch(e){}
  openModal(`Contract — ${c.id}`,`
    <div class="fgrid" style="margin-bottom:12px">
      ${[['Supplier',c.supplier,''],['Type',c.type,''],['Document No.',c.id,'mono'],['Destination',c.dest,''],['Period',`${c.start} – ${c.expiry}`,''],['Contract Value',c.value,''],['Annual Value',c.annualValue,''],['Status',`<span class="pill ${sc(c.status)}">${c.status}</span>`,''],['ORN Contract Owner',`<b style="color:var(--navy)">${c.ornOwner}</b>`,''],['ORN Account Manager',c.ornManager,''],['Governing Law',c.governingLaw,''],['Exclusivity',c.exclusivity||'—',''],['Auto-Renew',c.autoRenew,''],['Renewal Notice',c.renewalNotice,''],['Review Due',`<span style="color:${c.reviewDate==='Overdue'?'var(--red)':'inherit'};font-weight:${c.reviewDate==='Overdue'?700:400}">${c.reviewDate}</span>`,'']].map(([l,v,cl])=>`<div><div style="font-size:10.5px;color:var(--text3)">${l}</div><div class="${cl}" style="font-size:12.5px">${v}</div></div>`).join('')}
    </div>
    <div style="background:var(--bg-page);border:1px solid var(--border-lt);border-radius:var(--r);padding:10px;margin-bottom:12px"><div style="font-size:10.5px;color:var(--text3);font-weight:700;margin-bottom:4px">NOTES</div><div style="font-size:12.5px">${c.notes}</div></div>
    <div style="border:1px dashed var(--border);border-radius:var(--r);padding:18px;text-align:center;background:var(--bg-page)"><div style="font-size:22px;margin-bottom:6px">📄</div><div style="font-size:13px;font-weight:600;margin-bottom:4px">${c.file}</div><div style="font-size:12px;color:var(--text3)">PDF on file</div></div>`,
    `${btn('&#8595; Download','btn-white',`toast('Downloading ${c.file}...')`)} ${btn('Edit','btn-white',`closeModal();openEditContractModal(${esc(c)})`)} ${btn('Renew','btn-white',"toast('Starting renewal...')")} ${btn('Close','btn-navy','closeModal()')}`
  );
}
window.openContractModal=openContractModal;

function openEditContractModal(c){
  if(typeof c==='string')try{c=JSON.parse(c.replace(/&quot;/g,'"'));}catch(e){}
  openModal(`Edit Contract — ${c.id}`,`
    <div class="form-panel"><div class="form-head">Contract Details</div><div class="form-body"><div class="fgrid">
      <div class="fg"><label>Supplier</label><input class="fc" value="${c.supplier}"></div>
      <div class="fg"><label>Document Type</label><select class="fc"><option>Service Contract</option><option>Insurance Certificate</option><option>VAT Certificate</option><option>Company Registration</option><option>Owner ID / Passport</option><option>Bank Letter</option><option>KYC Form</option></select></div>
      <div class="fg"><label>Destination</label><input class="fc" value="${c.dest}"></div>
      <div class="fg"><label>Start Date</label><input class="fc" type="date"></div>
      <div class="fg"><label>Expiry Date</label><input class="fc" type="date"></div>
      <div class="fg"><label>Contract Value (£)</label><input class="fc" value="${c.value}"></div>
      <div class="fg"><label>Annual Value (£)</label><input class="fc" value="${c.annualValue}"></div>
      <div class="fg"><label>ORN Contract Owner <span class="req">*</span></label><select class="fc"><option value="">Select...</option>${ornTeamSel()}</select></div>
      <div class="fg"><label>ORN Account Manager <span class="req">*</span></label><select class="fc"><option value="">Select...</option>${ornTeamSel()}</select></div>
      <div class="fg"><label>Governing Law</label><select class="fc"><option>English Law</option><option>UAE Law</option><option>Jordanian Law</option><option>Omani Law</option><option>Egyptian Law</option></select></div>
      <div class="fg"><label>Auto-Renew</label><select class="fc"><option>No</option><option>Yes</option><option>N/A</option></select></div>
      <div class="fg"><label>Renewal Notice Period</label><select class="fc"><option>30 days</option><option>60 days</option><option>90 days</option><option>N/A</option></select></div>
      <div class="fg"><label>Exclusivity</label><select class="fc"><option>Non-exclusive</option><option>Preferred Supplier</option><option>Exclusive</option></select></div>
      <div class="fg"><label>Review Due Date</label><input class="fc" type="date"></div>
      <div class="fg"><label>Status</label><select class="fc"><option>Valid</option><option>Expiring</option><option>Expired</option></select></div>
    </div></div></div>
    <div class="form-panel"><div class="form-head">Notes</div><div class="form-body"><textarea class="fc" style="height:70px;width:100%">${c.notes}</textarea></div></div>
    <div class="form-panel"><div class="form-head">Replace Document File</div><div class="form-body">
      <div class="up-zone" onclick="this.querySelector('input').click()" style="max-width:320px"><input type="file" hidden onchange="markUpload(this)"><div class="up-icon">📄</div><div class="up-lbl">Upload replacement</div><div class="up-sub">PDF up to 20MB</div></div>
    </div></div>`,
    `${btn('Cancel','btn-white','closeModal()')} ${btn('Save Changes','btn-navy',"toast('Contract updated!');closeModal()")}`
  );
}
window.openEditContractModal=openEditContractModal;

function openNewContractModal(){
  openModal('New Contract / Document',`
    <div class="form-panel"><div class="form-head">Document Details</div><div class="form-body"><div class="fgrid">
      <div class="fg"><label>Supplier <span class="req">*</span></label><select class="fc"><option value="">Select supplier...</option>${suppliers.map(s=>`<option>${s.name}</option>`).join('')}</select></div>
      <div class="fg"><label>Document Type <span class="req">*</span></label><select class="fc"><option>Service Contract</option><option>Insurance Certificate</option><option>VAT Certificate</option><option>Company Registration</option><option>Owner ID / Passport</option><option>Bank Letter</option><option>KYC Form</option></select></div>
      <div class="fg"><label>Destination</label><select class="fc"><option>Dubai</option><option>Abu Dhabi</option><option>Oman</option><option>Egypt</option><option>Jordan</option><option>Morocco</option><option>Turkey</option></select></div>
      <div class="fg"><label>Start Date</label><input class="fc" type="date"></div>
      <div class="fg"><label>Expiry Date <span class="req">*</span></label><input class="fc" type="date"></div>
      <div class="fg"><label>Contract Value (£)</label><input class="fc" type="number" placeholder="0"></div>
      <div class="fg"><label>Annual Value (£)</label><input class="fc" type="number" placeholder="0"></div>
      <div class="fg"><label>ORN Contract Owner <span class="req">*</span></label><select class="fc"><option value="">Select...</option>${ornTeamSel()}</select></div>
      <div class="fg"><label>ORN Account Manager</label><select class="fc"><option value="">Select...</option>${ornTeamSel()}</select></div>
      <div class="fg"><label>Governing Law</label><select class="fc"><option>English Law</option><option>UAE Law</option><option>Local Law</option></select></div>
      <div class="fg"><label>Auto-Renew</label><select class="fc"><option>No</option><option>Yes</option></select></div>
      <div class="fg"><label>Renewal Notice</label><select class="fc"><option>30 days</option><option>60 days</option><option>90 days</option></select></div>
    </div></div></div>
    <div class="form-panel"><div class="form-head">Upload File <span class="req">*</span></div><div class="form-body">
      <div class="up-zone" onclick="this.querySelector('input').click()" style="max-width:340px"><input type="file" hidden onchange="markUpload(this)"><div class="up-icon">📎</div><div class="up-lbl">Click to upload document</div><div class="up-sub">PDF, JPG, PNG up to 20MB</div></div>
    </div></div>
    <div class="form-panel"><div class="form-head">Notes</div><div class="form-body"><textarea class="fc" style="height:55px;width:100%" placeholder="Internal notes..."></textarea></div></div>`,
    `${btn('Cancel','btn-white','closeModal()')} ${btn('Save','btn-navy',"toast('Document saved!');closeModal()")}`
  );
}
window.openNewContractModal=openNewContractModal;

function openUploadModal(){
  openModal('Upload Document',`
    <div class="form-panel"><div class="form-head">Upload Details</div><div class="form-body">
      <div class="fgrid" style="margin-bottom:12px">
        <div class="fg"><label>Supplier <span class="req">*</span></label><select class="fc"><option value="">Select supplier...</option>${suppliers.map(s=>`<option>${s.name}</option>`).join('')}</select></div>
        <div class="fg"><label>Document Type <span class="req">*</span></label><select class="fc"><option>Service Contract</option><option>Insurance Certificate</option><option>VAT Certificate</option><option>Company Registration</option><option>Owner ID / Passport</option><option>Bank Letter</option><option>KYC / AML Form</option></select></div>
        <div class="fg"><label>Expiry Date</label><input class="fc" type="date"></div>
        <div class="fg"><label>ORN Document Owner</label><select class="fc"><option value="">Select...</option>${ornTeamSel()}</select></div>
        <div class="fg"><label>Notes</label><input class="fc" placeholder="Optional notes..."></div>
      </div>
      <div class="up-zone" onclick="this.querySelector('input').click()" style="max-width:420px"><input type="file" hidden onchange="markUpload(this)"><div class="up-icon">📎</div><div class="up-lbl">Drop file here or click to upload</div><div class="up-sub">PDF, JPG, PNG up to 20MB</div></div>
    </div></div>`,
    `${btn('Cancel','btn-white','closeModal()')} ${btn('Upload','btn-navy',"toast('Document uploaded!');closeModal()")}`
  );
}
window.openUploadModal=openUploadModal;

function openDocsModal(name){
  const docs=contracts.filter(c=>c.supplier===name);
  openModal(`Documents — ${name}`,
    `${docs.length===0?'<p style="color:var(--text3)">No documents found.</p>':docs.map(c=>`<div style="border:1px solid var(--border-lt);border-radius:var(--r);padding:10px;margin-bottom:8px;display:flex;align-items:flex-start;justify-content:space-between;gap:12px"><div><div style="font-weight:600;font-size:12.5px;margin-bottom:2px">${c.type} <span class="mono" style="margin-left:8px;font-weight:400">${c.id}</span></div><div style="font-size:12px;color:var(--text3)">Expiry: ${c.expiry} · Owner: ${c.ornOwner}${c.value!=='—'?' · Value: '+c.value:''}</div><div style="font-size:11.5px;color:var(--text2);margin-top:3px">${c.notes}</div></div><div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0"><span class="pill ${sc(c.status)}">${c.status}</span>${btn('&#8595; Download','btn-white btn-sm',`toast('Downloading...')`)} ${btn('Edit','btn-white btn-sm',`closeModal();openEditContractModal(${esc(c)})`)}</div></div>`).join('')}
    <div style="margin-top:12px">${btn('+ Upload New Document','btn-navy','closeModal();openUploadModal()')}</div>`,
    btn('Close','btn-navy','closeModal()')
  );
}
window.openDocsModal=openDocsModal;

function openAuditModal(name){
  const logs=auditLog.filter(a=>a.supplier===name);
  openModal(`Audit Trail — ${name}`,`<div class="audit-list">${logs.length===0?'<p style="color:var(--text3);padding:10px">No audit entries.</p>':logs.map(a=>`<div class="audit-item"><div class="audit-dot" style="background:${a.color}"></div><div class="audit-content"><div class="audit-action">${a.action}</div><div class="audit-meta">${a.ts} · by ${a.user}</div><div class="audit-detail">${a.detail}</div></div></div>`).join('')}</div>`,
    btn('Close','btn-navy','closeModal()')
  );
}
window.openAuditModal=openAuditModal;

function openNewPaymentModal(){
  openModal('New Invoice / Payment',`
    <div class="form-panel"><div class="form-head">Invoice Details</div><div class="form-body"><div class="fgrid">
      <div class="fg"><label>Supplier <span class="req">*</span></label><select class="fc"><option value="">Select...</option>${suppliers.map(s=>`<option>${s.name}</option>`).join('')}</select></div>
      <div class="fg"><label>Description <span class="req">*</span></label><input class="fc" placeholder="e.g. April accommodation"></div>
      <div class="fg"><label>Amount (£) <span class="req">*</span></label><input class="fc" type="number" placeholder="0.00" min="0"></div>
      <div class="fg"><label>Due Date <span class="req">*</span></label><input class="fc" type="date"></div>
      <div class="fg"><label>PO Reference</label><input class="fc" placeholder="PO-2026-..."></div>
      <div class="fg"><label>Destination</label><select class="fc"><option>Dubai</option><option>Abu Dhabi</option><option>Oman</option><option>Egypt</option><option>Jordan</option></select></div>
      <div class="fg"><label>Approver <span class="req">*</span></label><select class="fc"><option value="">Select...</option>${ornTeamSel()}</select></div>
      <div class="fg"><label>Currency</label><select class="fc"><option>GBP</option><option>USD</option><option>AED</option><option>EUR</option></select></div>
    </div></div></div>`,
    `${btn('Cancel','btn-white','closeModal()')} ${btn('Save Draft','btn-white',"toast('Draft saved')")} ${btn('Create Invoice','btn-navy',"toast('Invoice created!');closeModal()")}`
  );
}
window.openNewPaymentModal=openNewPaymentModal;

function openNewRateModal(){
  openModal('Add New Rate',`
    <div class="form-panel"><div class="form-head">Rate Details</div><div class="form-body"><div class="fgrid">
      <div class="fg"><label>Supplier <span class="req">*</span></label><select class="fc"><option value="">Select...</option>${suppliers.map(s=>`<option>${s.name}</option>`).join('')}</select></div>
      <div class="fg"><label>Service / Room Type</label><input class="fc" placeholder="e.g. Deluxe Room, Desert Safari"></div>
      <div class="fg"><label>Season</label><select class="fc"><option>Peak</option><option>High</option><option>Low</option><option>All Year</option></select></div>
      <div class="fg"><label>Period From</label><input class="fc" type="date"></div>
      <div class="fg"><label>Period To</label><input class="fc" type="date"></div>
      <div class="fg"><label>Net Rate (£) <span class="req">*</span></label><input class="fc" type="number" placeholder="0.00" min="0"></div>
      <div class="fg"><label>Commission (%)</label><input class="fc" type="number" placeholder="15" min="0" max="50"></div>
      <div class="fg"><label>Updated By</label><select class="fc"><option value="">Select...</option>${ornTeamSel()}</select></div>
    </div></div></div>`,
    `${btn('Cancel','btn-white','closeModal()')} ${btn('Add Rate','btn-navy',"toast('Rate added!');closeModal()")}`
  );
}
window.openNewRateModal=openNewRateModal;

function openEditRateModal(sup,season){
  openModal(`Edit Rate — ${sup} (${season})`,`
    <div class="form-panel"><div class="form-head">Edit Rate</div><div class="form-body"><div class="fgrid">
      <div class="fg"><label>Supplier</label><input class="fc" value="${sup}" readonly></div>
      <div class="fg"><label>Season</label><select class="fc"><option>Peak</option><option>High</option><option>Low</option><option>All Year</option></select></div>
      <div class="fg"><label>Period From</label><input class="fc" type="date"></div>
      <div class="fg"><label>Period To</label><input class="fc" type="date"></div>
      <div class="fg"><label>Net Rate (£)</label><input class="fc" type="number" placeholder="0.00"></div>
      <div class="fg"><label>Commission (%)</label><input class="fc" type="number" placeholder="15"></div>
      <div class="fg"><label>Updated By</label><select class="fc"><option value="">Select...</option>${ornTeamSel()}</select></div>
      <div class="fg"><label>Status</label><select class="fc"><option>Active</option><option>Inactive</option><option>Draft</option></select></div>
    </div></div></div>`,
    `${btn('Cancel','btn-white','closeModal()')} ${btn('Save Changes','btn-navy',"toast('Rate updated!');closeModal()")}`
  );
}
window.openEditRateModal=openEditRateModal;

function openNewDestModal(){
  openModal('Add New Destination',`
    <div class="form-panel"><div class="form-head">Destination Details</div><div class="form-body"><div class="fgrid">
      <div class="fg"><label>Country <span class="req">*</span></label><input class="fc" placeholder="e.g. Saudi Arabia"></div>
      <div class="fg"><label>City / Region <span class="req">*</span></label><input class="fc" placeholder="e.g. Riyadh"></div>
      <div class="fg"><label>Flag Emoji</label><input class="fc" placeholder="🇸🇦"></div>
      <div class="fg"><label>Currency</label><select class="fc"><option>GBP</option><option>USD</option><option>SAR</option><option>AED</option></select></div>
      <div class="fg"><label>ORN Regional Lead <span class="req">*</span></label><select class="fc"><option value="">Select...</option>${ornTeamSel()}</select></div>
      <div class="fg"><label>ORN Account Manager</label><select class="fc"><option value="">Select...</option>${ornTeamSel()}</select></div>
      <div class="fg"><label>Status</label><select class="fc"><option>Active</option><option>Coming Soon</option><option>Planned</option></select></div>
      <div class="fg"><label>Target Go-Live</label><input class="fc" type="date"></div>
    </div></div></div>`,
    `${btn('Cancel','btn-white','closeModal()')} ${btn('Add Destination','btn-navy',"toast('Destination added!');closeModal()")}`
  );
}
window.openNewDestModal=openNewDestModal;

// ─── NAV & INIT ───────────────────────────────────────────────────
function setPrimary(key){
  curPrimary=key;curSub=0;
  document.querySelectorAll('.pnav').forEach(n=>n.classList.toggle('active',n.dataset.p===key));
  buildSecondary(key);renderContent();
}
function setSecondary(idx){
  curSub=idx;
  document.querySelectorAll('.snav').forEach((n,i)=>n.classList.toggle('active',i===idx));
  renderContent();
}
window.setSecondary=setSecondary;

function buildSecondary(primary){
  const nav=NAV[primary];
  document.getElementById('secondary-nav').innerHTML=(nav?.sub||[]).map((l,i)=>`<span class="snav ${i===0?'active':''}" onclick="setSecondary(${i})">${l}</span>`).join('');
}

function renderContent(){
  const nav=NAV[curPrimary];
  const pageKey=nav?.pages?.[curSub];
  const el=document.getElementById('content');
  if(pageKey&&typeof window[pageKey]==='function'){
    el.innerHTML=window[pageKey]();
    if(pageKey==='pg_sup_all')setTimeout(()=>renderSupTable(suppliers),0);
  } else {
    const label=nav?.sub?.[curSub]||curPrimary;
    el.innerHTML=`<div class="page-title">${label}</div><div style="background:#fff;border:1px solid var(--border-lt);padding:40px;text-align:center;color:var(--text3)"><div style="font-size:32px;margin-bottom:10px">📋</div><b>${label}</b><div style="font-size:12.5px;margin-top:6px">Connect live data source to populate.</div></div>`;
  }
}


// ─── DATA: SUPPLY SOURCES ─────────────────────────────────────────
// Each hotel can have multiple supply sources (direct, API, GDS, bed bank, aggregator)
// Priority 1 = shown first / preferred. Drag to reorder.
const supplySources = [
  { hotelId:'H-0081', hotelName:'Atlantis The Palm', dest:'Dubai', stars:5, ornManager:'Ajay Kawa',
    sources:[
      {id:'SS-001',type:'Direct Contract',channel:'Direct',provider:'Atlantis The Palm',contractRef:'CTR-2024-0081',net:285,gross:336,commission:18,currency:'GBP',availability:'Live',lastSync:'—',priority:1,markup:'ORN Rate',active:true,notes:'Primary source. Full allocation 200 rooms. Best net rate.'},
      {id:'SS-002',type:'API Feed',channel:'API',provider:'Hotelbeds',contractRef:'HB-API-88221',net:302,gross:357,commission:15,currency:'GBP',availability:'Live',lastSync:'2 min ago',priority:2,markup:'Hotelbeds Markup',active:true,notes:'Backup source. Higher cost but real-time availability.'},
      {id:'SS-003',type:'GDS',channel:'GDS',provider:'Amadeus',contractRef:'AMD-GDS-44112',net:318,gross:375,commission:15,currency:'GBP',availability:'Live',lastSync:'5 min ago',priority:3,markup:'GDS Public',active:false,notes:'Disabled — more expensive than direct. Keep for fallback.'},
    ]
  },
  { hotelId:'H-0082', hotelName:'Burj Al Arab Jumeirah', dest:'Dubai', stars:7, ornManager:'Ajay Kawa',
    sources:[
      {id:'SS-004',type:'Direct Contract',channel:'Direct',provider:'Jumeirah Group',contractRef:'CTR-2023-0082',net:680,gross:802,commission:20,currency:'GBP',availability:'Live',lastSync:'—',priority:1,markup:'ORN Exclusive',active:true,notes:'Exclusive rate. Cannot be beaten by any API.'},
      {id:'SS-005',type:'API Feed',channel:'API',provider:'RateGain',contractRef:'RG-API-22341',net:720,gross:850,commission:15,currency:'GBP',availability:'Live',lastSync:'8 min ago',priority:2,markup:'RateGain',active:true,notes:'Higher net. Used only when direct allotment exhausted.'},
    ]
  },
  { hotelId:'H-0083', hotelName:'Al Maha Desert Resort', dest:'Dubai', stars:5, ornManager:'Priya Sharma',
    sources:[
      {id:'SS-006',type:'Bed Bank',channel:'Bed Bank',provider:'W2M / Peakwork',contractRef:'W2M-BB-55112',net:410,gross:484,commission:15,currency:'GBP',availability:'Live',lastSync:'12 min ago',priority:1,markup:'Bed Bank',active:true,notes:'No direct contract. Best rate via bed bank.'},
      {id:'SS-007',type:'API Feed',channel:'API',provider:'Hotelbeds',contractRef:'HB-API-55113',net:428,gross:505,commission:15,currency:'GBP',availability:'Live',lastSync:'4 min ago',priority:2,markup:'Hotelbeds',active:true,notes:'Comparable rates. Use if W2M offline.'},
      {id:'SS-008',type:'Aggregator',channel:'Aggregator',provider:'Expedia Partner',contractRef:'EXP-AGG-88221',net:445,gross:525,commission:12,currency:'GBP',availability:'Live',lastSync:'1 hr ago',priority:3,markup:'Expedia',active:false,notes:'Disabled. Highest cost, worst margin.'},
    ]
  },
  { hotelId:'H-0086', hotelName:'Oman Luxury Resorts', dest:'Oman', stars:5, ornManager:'Omar Al Farsi',
    sources:[
      {id:'SS-009',type:'Direct Contract',channel:'Direct',provider:'Oman Luxury Resorts SAOG',contractRef:'CTR-2023-0086',net:290,gross:336,commission:16,currency:'GBP',availability:'Live',lastSync:'—',priority:1,markup:'ORN Rate',active:true,notes:'Preferred direct source. 3-year contract.'},
      {id:'SS-010',type:'GDS',channel:'GDS',provider:'Sabre',contractRef:'SAB-GDS-77112',net:315,gross:372,commission:15,currency:'GBP',availability:'Live',lastSync:'10 min ago',priority:2,markup:'Sabre Public',active:true,notes:'Backup. Used during peak when direct allocation full.'},
    ]
  },
  { hotelId:'H-0096', hotelName:'Pyramids View Hotel', dest:'Egypt', stars:4, ornManager:'Ravi Patel',
    sources:[
      {id:'SS-011',type:'API Feed',channel:'API',provider:'Hotelbeds',contractRef:'HB-API-33441',net:95,gross:112,commission:15,currency:'GBP',availability:'Live',lastSync:'3 min ago',priority:1,markup:'Hotelbeds',active:true,notes:'No direct contract. API only — supplier suspended from direct.'},
      {id:'SS-012',type:'Bed Bank',channel:'Bed Bank',provider:'Tourico',contractRef:'TOU-BB-22341',net:98,gross:116,commission:15,currency:'GBP',availability:'Limited',lastSync:'30 min ago',priority:2,markup:'Tourico',active:true,notes:'Limited availability. Use as second option.'},
    ]
  },
  { hotelId:'H-0094', hotelName:'Blue Waters Hotel Group', dest:'Dubai', stars:5, ornManager:'Priya Sharma',
    sources:[
      {id:'SS-013',type:'Direct Contract',channel:'Direct',provider:'Blue Waters Hospitality',contractRef:'Pending',net:null,gross:null,commission:null,currency:'GBP',availability:'Pending',lastSync:'—',priority:1,markup:'—',active:false,notes:'Direct contract under negotiation. Not yet live.'},
      {id:'SS-014',type:'API Feed',channel:'API',provider:'Hotelbeds',contractRef:'HB-API-66221',net:320,gross:378,commission:15,currency:'GBP',availability:'Live',lastSync:'6 min ago',priority:2,markup:'Hotelbeds',active:true,notes:'Currently serving via API while direct contract finalised.'},
    ]
  },
];

// ─── DATA: REGIONAL OFFICES ───────────────────────────────────────
const regionalOffices = [
  { id:'RO-01', flag:'🇬🇧', name:'London — Global HQ', city:'London', country:'UK', type:'Global HQ', address:'12 Berkeley Square, Mayfair, London W1J 6BE', phone:'+44 20 7946 0100', email:'hq@orn.com',
    head:'James Thornton', headRole:'Commercial Director', headEmail:'james.thornton@orn.com',
    team:['Ajay Kawa','Layla Hassan','Nina Kowalski'],
    destinations:['Global Oversight'],
    contractScope:'Global — all destinations',
    contractAuthority:'Full authority — all contract types up to £5M',
    supplierCount:142, contractCount:486, activeContracts:131,
    contracts:[
      {ref:'CTR-2024-0081',supplier:'Atlantis The Palm',type:'Service Contract',value:'£840K',expiry:'Dec 2025',owner:'Layla Hassan'},
      {ref:'CTR-2024-0097',supplier:'Marrakech Riad Collection',type:'Service Contract',value:'£220K',expiry:'Jun 2026',owner:'Layla Hassan'},
      {ref:'CTR-2024-0099',supplier:'Cappadocia Balloon Tours',type:'Service Contract',value:'£180K',expiry:'Aug 2026',owner:'Layla Hassan'},
    ]
  },
  { id:'RO-02', flag:'🇦🇪', name:'Dubai — Gulf Office', city:'Dubai', country:'UAE', type:'Regional Office', address:'Level 14, Boulevard Plaza Tower 1, Downtown Dubai, UAE', phone:'+971 4 123 4567', email:'gulf@orn.com',
    head:'Omar Al Farsi', headRole:'Regional Manager – Gulf', headEmail:'omar.alfarsi@orn.com',
    team:['Omar Al Farsi'],
    destinations:['Dubai','Abu Dhabi','Oman','Bahrain','Saudi Arabia'],
    contractScope:'Gulf region — UAE, Oman, Saudi Arabia, Bahrain, Kuwait',
    contractAuthority:'Regional authority up to £200K per contract. Above requires London sign-off.',
    supplierCount:62, contractCount:187, activeContracts:181,
    contracts:[
      {ref:'CTR-2023-0086',supplier:'Oman Luxury Resorts',type:'Service Contract',value:'£580K',expiry:'May 2026',owner:'Omar Al Farsi'},
      {ref:'INS-2024-0085',supplier:'Jordan Transfer Co',type:'Insurance',value:'—',expiry:'Sep 2025',owner:'Omar Al Farsi'},
    ]
  },
  { id:'RO-03', flag:'🇪🇬', name:'Cairo — Africa & Middle East', city:'Cairo', country:'Egypt', type:'Regional Office', address:'Nile City Towers, North Tower, 2005C Corniche El Nil, Cairo', phone:'+20 2 2461 9000', email:'africa@orn.com',
    head:'Ravi Patel', headRole:'Supplier Manager – Africa & ME', headEmail:'ravi.patel@orn.com',
    team:['Ravi Patel'],
    destinations:['Egypt','Jordan','Morocco','Kenya','Tanzania'],
    contractScope:'Africa & Middle East — Egypt, Jordan, Morocco, East Africa',
    contractAuthority:'Regional authority up to £100K. Larger contracts require London co-sign.',
    supplierCount:32, contractCount:94, activeContracts:88,
    contracts:[
      {ref:'CTR-2023-0083',supplier:'Desert Tracks Tours',type:'Service Contract',value:'£120K',expiry:'Feb 2024',owner:'Ravi Patel'},
      {ref:'ID-2024-0083',supplier:'Desert Tracks Tours',type:'Owner ID',value:'—',expiry:'Feb 2029',owner:'Ravi Patel'},
    ]
  },
  { id:'RO-04', flag:'🇹🇭', name:'Bangkok — Asia & Maldives', city:'Bangkok', country:'Thailand', type:'Regional Office', address:'Empire Tower, 47th Floor, 1 South Sathorn Road, Bangkok 10120', phone:'+66 2 685 4000', email:'asia@orn.com',
    head:'Priya Sharma', headRole:'Senior Supplier Manager – Asia', headEmail:'priya.sharma@orn.com',
    team:['Priya Sharma'],
    destinations:['Maldives','Thailand','Sri Lanka','India'],
    contractScope:'Asia Pacific — Maldives, Thailand, Sri Lanka, India',
    contractAuthority:'Regional authority up to £150K. Escalate to London above threshold.',
    supplierCount:12, contractCount:28, activeContracts:24,
    contracts:[
      {ref:'CTR-MV-2024-01',supplier:'Maldives Sunset Cruises',type:'Service Contract',value:'£95K',expiry:'Awaiting',owner:'Priya Sharma'},
    ]
  },
  { id:'RO-05', flag:'🇪🇸', name:'Madrid — Europe & Americas', city:'Madrid', country:'Spain', type:'Regional Office', address:'Paseo de la Castellana 79, 28046 Madrid, Spain', phone:'+34 91 782 4000', email:'europe@orn.com',
    head:'Sarah Mitchell', headRole:'Supplier Manager – Europe & Americas', headEmail:'sarah.mitchell@orn.com',
    team:['Sarah Mitchell'],
    destinations:['Spain','Portugal','France','Italy','Turkey','Greece','USA','Mexico'],
    contractScope:'Europe & Americas — Turkey, Mediterranean, Western Europe, Americas',
    contractAuthority:'Regional authority up to £150K per contract.',
    supplierCount:18, contractCount:42, activeContracts:38,
    contracts:[
      {ref:'CTR-2024-0099',supplier:'Cappadocia Balloon Tours',type:'Service Contract',value:'£180K',expiry:'Aug 2026',owner:'Sarah Mitchell'},
    ]
  },
];

// ─── PAGE: SUPPLY SOURCES ─────────────────────────────────────────
function pg_hotel_sources(){
  const srcTypeBadge = t => {
    const m = {Direct:'src-direct',API:'src-api',GDS:'src-gds','Bed Bank':'src-bed',Aggregator:'src-agg'};
    return `<span class="src-badge ${m[t]||'src-agg'}">${t==='Direct'?'✦ Direct':t==='API'?'⚡ API':t==='GDS'?'🌐 GDS':t==='Bed Bank'?'🛏 Bed Bank':'🔗 '+t}</span>`;
  };
  const avail = a => a==='Live'?'<span class="pill p-green">Live</span>':a==='Limited'?'<span class="pill p-orange">Limited</span>':a==='Pending'?'<span class="pill p-orange">Pending</span>':'<span class="pill p-gray">Offline</span>';
  const netDisplay = (n,c) => n?`<b>${c==='GBP'?'£':'$'}${n}</b>`:'<span style="color:var(--text3)">—</span>';

  return `
    <div class="page-title">Supply Source Management</div>
    <p class="page-subtitle">View all sources for each hotel, set display priority, and enable/disable channels. Priority 1 is always shown first to customers.</p>

    <div class="sum-cards">
      <div class="sum-card green"><div class="sc-lbl">Hotels with Direct Contract</div><div class="sc-val green">4</div><div class="sc-sub">Best margin source</div></div>
      <div class="sum-card blue" style="border-left:3px solid var(--navy)"><div class="sc-lbl">Hotels via API Only</div><div class="sc-val" style="color:var(--navy)">1</div><div class="sc-sub">No direct contract</div></div>
      <div class="sum-card orange"><div class="sc-lbl">Multi-Source Hotels</div><div class="sc-val orange">6</div><div class="sc-sub">Priority selection active</div></div>
      <div class="sum-card"><div class="sc-lbl">Total Source Connections</div><div class="sc-val">14</div><div class="sc-sub">Across all hotels</div></div>
      <div class="sum-card red"><div class="sc-lbl">Disabled Sources</div><div class="sc-val red">3</div><div class="sc-sub">Higher cost / backup</div></div>
    </div>

    <div class="toolbar">
      <input class="ti" placeholder="Search hotel..." style="width:200px" oninput="srcFilter(this.value)">
      <select class="ti" onchange="srcFilter(document.querySelector('#src-q').value, this.value)">
        <option value="">All Destinations</option>
        <option>Dubai</option><option>Oman</option><option>Egypt</option><option>Jordan</option><option>Maldives</option>
      </select>
      <select class="ti">
        <option>All Source Types</option><option>Direct Contract</option><option>API Feed</option><option>GDS</option><option>Bed Bank</option><option>Aggregator</option>
      </select>
      <select class="ti">
        <option>All Status</option><option>Live</option><option>Limited</option><option>Pending</option><option>Offline</option>
      </select>
      ${btn('Search','btn-navy',"toast('Filtering...')")}
      <div class="toolbar-r">
        ${btn('&#8595; Export','btn-white',"toast('Exporting...')")}
        ${btn('+ Add Source','btn-navy','openNewSourceModal()')}
      </div>
    </div>

    <div style="background:#e8f4fe;border:1px solid #90caf9;border-radius:3px;padding:9px 14px;margin-bottom:14px;font-size:12.5px;color:#0d47a1">
      ℹ️ <b>Priority rules:</b> Priority 1 is the primary source shown to customers and used for availability checks first. Drag rows to reorder within each hotel. Disabled sources are hidden from customers but kept as fallback data. Direct contracts always earn the best margin — promote these to Priority 1.
    </div>

    <div id="src-list">
      ${supplySources.map(h=>`
        <div class="src-card" id="sc-${h.hotelId}">
          <div class="src-card-head">
            <div>
              <div class="src-hotel-name">${'★'.repeat(Math.min(h.stars,5))} ${h.hotelName}</div>
              <div class="src-hotel-meta">${h.dest} · ${h.sources.length} source${h.sources.length!==1?'s':''} · ORN Manager: ${h.ornManager}</div>
            </div>
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-size:11.5px;color:var(--text3)">${h.sources.filter(s=>s.active).length} active / ${h.sources.length} total</span>
              ${btn('Manage Sources','btn-white btn-sm',`openSourcesModal('${h.hotelId}')`)}
              ${btn('+ Add Source','btn-white btn-sm','openNewSourceModal()')}
            </div>
          </div>
          <!-- Column header row -->
          <div style="display:grid;grid-template-columns:28px 30px 140px 100px 80px 80px 80px 70px 80px 80px 1fr;gap:0;padding:5px 14px;background:var(--bg-page);border-bottom:1px solid var(--border-lt)">
            ${['','Pri.','Source / Provider','Type','Net Rate','Gross Rate','Commission','Currency','Availability','Last Sync','Actions'].map(h=>`<div style="font-size:10.5px;font-weight:700;color:var(--text3)">${h}</div>`).join('')}
          </div>
          <div class="src-rows" id="rows-${h.hotelId}">
            ${h.sources.map((s,i)=>`
              <div class="src-row ${!s.active?'':'priority-'+Math.min(s.priority,3)}" data-id="${s.id}" style="${!s.active?'opacity:0.45;background:#f9f9f9':''}">
                <div class="drag-handle" title="Drag to reorder">⠿</div>
                <div>
                  <span class="priority-badge ${s.priority===2?'p2':s.priority>=3?'p3':''}">${s.priority}</span>
                </div>
                <div>
                  <div style="font-weight:600;font-size:12px;color:${s.active?'var(--navy)':'var(--text3)'}">${s.provider}</div>
                  <div style="font-size:10.5px;color:var(--text3)">${s.contractRef}</div>
                </div>
                <div>${srcTypeBadge(s.channel)}</div>
                <div>${netDisplay(s.net,s.currency)}</div>
                <div>${netDisplay(s.gross,s.currency)}</div>
                <div style="font-size:11.5px">${s.commission?s.commission+'%':'—'}</div>
                <div style="font-size:11.5px">${s.currency}</div>
                <div>${avail(s.availability)}</div>
                <div style="font-size:10.5px;color:var(--text3)">${s.lastSync}</div>
                <div style="display:flex;gap:6px;align-items:center">
                  ${s.priority>1?btn('▲ Make P1','btn-white btn-sm',`toast('Set ${s.provider} as Priority 1 for ${h.hotelName}')`):'<span style="font-size:11px;color:var(--teal);font-weight:700">✦ Priority 1</span>'}
                  <label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:11.5px">
                    <input type="checkbox" ${s.active?'checked':''} onchange="toast(this.checked?'${s.provider} enabled':'${s.provider} disabled')">
                    ${s.active?'<span style="color:var(--green)">Enabled</span>':'<span style="color:var(--text3)">Disabled</span>'}
                  </label>
                  <a class="lnk" style="font-size:11.5px" onclick="openSourceDetailModal('${s.id}','${h.hotelName}')">Edit</a>
                </div>
              </div>`).join('')}
          </div>
        </div>`).join('')}
    </div>`;
}
window.pg_hotel_sources = pg_hotel_sources;

function openNewSourceModal(){
  openModal('Add New Supply Source',`
    <div class="form-panel"><div class="form-head">Source Details</div><div class="form-body"><div class="fgrid">
      <div class="fg"><label>Hotel <span class="req">*</span></label><select class="fc"><option value="">Select hotel...</option>${supplySources.map(h=>`<option value="${h.hotelId}">${h.hotelName}</option>`).join('')}</select></div>
      <div class="fg"><label>Source Type <span class="req">*</span></label><select class="fc"><option>Direct Contract</option><option>API Feed</option><option>GDS</option><option>Bed Bank</option><option>Aggregator</option></select></div>
      <div class="fg"><label>Provider / Channel Name <span class="req">*</span></label><input class="fc" placeholder="e.g. Hotelbeds, Amadeus, Sabre"></div>
      <div class="fg"><label>Contract / API Reference</label><input class="fc" placeholder="e.g. HB-API-88221"></div>
      <div class="fg"><label>Net Rate (£)</label><input class="fc" type="number" placeholder="0.00" min="0"></div>
      <div class="fg"><label>Gross Rate (£)</label><input class="fc" type="number" placeholder="0.00" min="0"></div>
      <div class="fg"><label>Commission (%)</label><input class="fc" type="number" placeholder="e.g. 15" min="0" max="50"></div>
      <div class="fg"><label>Currency</label><select class="fc"><option>GBP</option><option>USD</option><option>EUR</option><option>AED</option></select></div>
      <div class="fg"><label>Display Priority</label><input class="fc" type="number" placeholder="1 = highest" min="1" max="10" value="1"></div>
      <div class="fg"><label>Initial Status</label><select class="fc"><option>Enabled</option><option>Disabled</option></select></div>
      <div class="fg"><label>Markup Label</label><input class="fc" placeholder="e.g. ORN Rate, Hotelbeds Markup"></div>
      <div class="fg"><label>ORN Manager</label><select class="fc"><option value="">Select...</option>${ornTeamSel()}</select></div>
    </div>
    <div class="fg" style="margin-top:10px"><label>Notes / Reason for Adding</label>
      <textarea class="fc" style="height:60px;width:100%" placeholder="Why is this source being added? Any specific conditions or notes?"></textarea>
    </div>
    </div></div>`,
    `${btn('Cancel','btn-white','closeModal()')} ${btn('Add Source','btn-navy',"toast('Source added successfully!');closeModal()")}`
  );
}
window.openNewSourceModal = openNewSourceModal;

function openSourceDetailModal(srcId, hotelName){
  const all = supplySources.flatMap(h=>h.sources);
  const s = all.find(x=>x.id===srcId) || {};
  openModal(`Edit Source — ${hotelName} · ${s.provider||srcId}`,`
    <div class="form-panel"><div class="form-head">Source Settings</div><div class="form-body"><div class="fgrid">
      <div class="fg"><label>Provider / Channel</label><input class="fc" value="${s.provider||''}"></div>
      <div class="fg"><label>Source Type</label><select class="fc"><option ${s.channel==='Direct Contract'?'selected':''}>Direct Contract</option><option ${s.channel==='API'?'selected':''}>API Feed</option><option ${s.channel==='GDS'?'selected':''}>GDS</option><option ${s.channel==='Bed Bank'?'selected':''}>Bed Bank</option><option ${s.channel==='Aggregator'?'selected':''}>Aggregator</option></select></div>
      <div class="fg"><label>Contract / API Ref</label><input class="fc" value="${s.contractRef||''}"></div>
      <div class="fg"><label>Net Rate (£)</label><input class="fc" type="number" value="${s.net||''}"></div>
      <div class="fg"><label>Gross Rate (£)</label><input class="fc" type="number" value="${s.gross||''}"></div>
      <div class="fg"><label>Commission (%)</label><input class="fc" type="number" value="${s.commission||''}"></div>
      <div class="fg"><label>Display Priority</label><input class="fc" type="number" value="${s.priority}" min="1" max="10"></div>
      <div class="fg"><label>Status</label><select class="fc"><option ${s.active?'selected':''}>Enabled</option><option ${!s.active?'selected':''}>Disabled</option></select></div>
      <div class="fg"><label>Availability</label><select class="fc"><option ${s.availability==='Live'?'selected':''}>Live</option><option ${s.availability==='Limited'?'selected':''}>Limited</option><option ${s.availability==='Pending'?'selected':''}>Pending</option><option ${s.availability==='Offline'?'selected':''}>Offline</option></select></div>
      <div class="fg"><label>Markup Label</label><input class="fc" value="${s.markup||''}"></div>
    </div>
    <div class="fg" style="margin-top:10px"><label>Notes</label><textarea class="fc" style="height:60px;width:100%">${s.notes||''}</textarea></div>
    </div></div>
    <div class="form-panel"><div class="form-head">Priority &amp; Display Rules</div><div class="form-body">
      <div class="fgrid">
        <div class="fg"><label>When to use this source</label><select class="fc"><option>Always (primary)</option><option>When primary unavailable</option><option>When primary allotment full</option><option>Manual selection only</option></select></div>
        <div class="fg"><label>Price threshold (show if within £X of lowest)</label><input class="fc" type="number" placeholder="e.g. 20" min="0"></div>
        <div class="fg"><label>Min availability rooms to trigger</label><input class="fc" type="number" placeholder="e.g. 5" min="1"></div>
        <div class="fg"><label>Show to customers?</label><select class="fc"><option>Yes — visible on site</option><option>No — internal/fallback only</option></select></div>
      </div>
    </div></div>`,
    `${btn('Cancel','btn-white','closeModal()')} ${btn('Save Changes','btn-navy',"toast('Source updated!');closeModal()")}`
  );
}
window.openSourceDetailModal = openSourceDetailModal;

function openSourcesModal(hotelId){
  const h = supplySources.find(x=>x.hotelId===hotelId);
  if(!h) return;
  openModal(`All Sources — ${h.hotelName}`,`
    <p style="font-size:12px;color:var(--text2);margin-bottom:12px">Drag rows to set priority order. Priority 1 is shown to customers first.</p>
    <table style="width:100%;border-collapse:collapse;font-size:12px">
      <thead><tr style="background:var(--bg-page)">${['Priority','Provider','Type','Net','Gross','Comm.','Status','Avail.','Actions'].map(h=>`<th style="padding:6px 8px;text-align:left;font-size:10.5px;color:var(--text3);border-bottom:1px solid var(--border-lt)">${h}</th>`).join('')}</tr></thead>
      <tbody>${h.sources.map(s=>`<tr style="border-bottom:1px solid var(--border-lt);${!s.active?'opacity:0.5':''}">
        <td style="padding:7px 8px;text-align:center"><span class="priority-badge ${s.priority===2?'p2':s.priority>=3?'p3':''}">${s.priority}</span></td>
        <td style="padding:7px 8px;font-weight:600">${s.provider}<div style="font-size:10px;color:var(--text3)">${s.contractRef}</div></td>
        <td style="padding:7px 8px"><span class="src-badge ${s.channel==='Direct Contract'?'src-direct':s.channel==='API'?'src-api':s.channel==='GDS'?'src-gds':s.channel==='Bed Bank'?'src-bed':'src-agg'}">${s.channel}</span></td>
        <td style="padding:7px 8px;font-weight:700">${s.net?'£'+s.net:'—'}</td>
        <td style="padding:7px 8px">${s.gross?'£'+s.gross:'—'}</td>
        <td style="padding:7px 8px">${s.commission?s.commission+'%':'—'}</td>
        <td style="padding:7px 8px"><label style="display:flex;align-items:center;gap:4px"><input type="checkbox" ${s.active?'checked':''} onchange="toast('Updated')"><span style="font-size:11px">${s.active?'On':'Off'}</span></label></td>
        <td style="padding:7px 8px"><span class="pill ${s.availability==='Live'?'p-green':s.availability==='Limited'?'p-orange':'p-gray'}">${s.availability}</span></td>
        <td style="padding:7px 8px;display:flex;gap:4px">
          ${s.priority>1?btn('P1','btn-white btn-sm',`toast('Set as Priority 1')`):'<span style="font-size:10px;color:var(--teal);font-weight:700">★ P1</span>'}
          <a class="lnk" style="font-size:11px" onclick="closeModal();openSourceDetailModal('${s.id}','${h.hotelName}')">Edit</a>
        </td>
      </tr>`).join('')}</tbody>
    </table>
    <div style="margin-top:12px">${btn('+ Add Source for this Hotel','btn-navy','closeModal();openNewSourceModal()')}</div>`,
    `${btn('Save Priority Order','btn-navy',"toast('Priority order saved!')")} ${btn('Close','btn-white','closeModal()')}`
  );
}
window.openSourcesModal = openSourcesModal;

function srcFilter(q=''){
  const lq = q.toLowerCase();
  document.querySelectorAll('.src-card').forEach(card=>{
    const name = card.querySelector('.src-hotel-name')?.textContent||'';
    card.style.display = (!lq || name.toLowerCase().includes(lq)) ? '' : 'none';
  });
}
window.srcFilter = srcFilter;


// ─── PAGE: REGIONAL OFFICES & CONTRACT ASSIGNMENT ─────────────────
function pg_sup_regions(){
  const scopeBadge = t => t==='Global HQ'?'<span class="pill p-blue">Global HQ</span>':'<span class="pill p-green">Regional Office</span>';

  return `
    <div class="page-title">Regional Offices &amp; Contract Assignment</div>
    <p class="page-subtitle">View each ORN office, their regional scope, contract authority levels, and manage which contracts are owned by which office and team member.</p>

    <div class="sum-cards">
      <div class="sum-card"><div class="sc-lbl">Total Offices</div><div class="sc-val">${regionalOffices.length}</div><div class="sc-sub">1 Global HQ + ${regionalOffices.length-1} Regional</div></div>
      <div class="sum-card green"><div class="sc-lbl">Active Contracts</div><div class="sc-val green">460</div><div class="sc-sub">Across all offices</div></div>
      <div class="sum-card orange"><div class="sc-lbl">Unassigned Contracts</div><div class="sc-val orange">12</div><div class="sc-sub">Need office assignment</div></div>
      <div class="sum-card"><div class="sc-lbl">Destinations Covered</div><div class="sc-val">18</div><div class="sc-sub">By all regional offices</div></div>
    </div>

    <div class="toolbar">
      <select class="ti">
        <option>All Offices</option>${regionalOffices.map(o=>`<option>${o.name}</option>`).join('')}
      </select>
      <select class="ti">
        <option>All Contract Types</option><option>Service Contract</option><option>Insurance</option><option>VAT Certificate</option><option>Owner ID</option>
      </select>
      <select class="ti">
        <option>All Status</option><option>Valid</option><option>Expiring</option><option>Expired</option>
      </select>
      ${btn('Search','btn-navy',"toast('Filtering...')")}
      <div class="toolbar-r">
        ${btn('&#8595; Export','btn-white',"toast('Exporting...')")}
        ${btn('+ Add Office','btn-navy','openNewOfficeModal()')}
        ${btn('Assign Contracts','btn-white','openAssignContractsModal()')}
      </div>
    </div>

    <!-- Unassigned contracts alert -->
    <div style="background:#fff8e6;border:1px solid #ffe082;border-radius:3px;padding:10px 14px;margin-bottom:16px;display:flex;align-items:center;justify-content:space-between">
      <div style="font-size:12.5px;color:#6d4c00">⚠️ <b>12 contracts have no regional office assigned.</b> Assign them to an office to ensure proper ownership and accountability.</div>
      ${btn('Review Unassigned','btn-navy btn-sm','openAssignContractsModal()')}
    </div>

    <div class="offices-grid">
      ${regionalOffices.map(o=>`
        <div class="roffice-card">
          <div class="roffice-hd">
            <div style="display:flex;align-items:flex-start;gap:0">
              <span class="roffice-flag">${o.flag}</span>
              <div>
                <div class="roffice-title">${o.name}</div>
                <div class="roffice-sub">${o.address}</div>
                <div style="margin-top:4px">${scopeBadge(o.type)}</div>
              </div>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
              ${btn('Edit','btn-white btn-sm',`openEditOfficeModal('${o.id}')`)}
              ${btn('View All Contracts','btn-white btn-sm',`openOfficeContractsModal('${o.id}')`)}
            </div>
          </div>

          <div class="roffice-grid">
            <div class="roffice-f"><div class="roffice-l">Office Head</div><div class="roffice-v" style="color:var(--navy)">${o.head}</div><div style="font-size:10.5px;color:var(--text3)">${o.headRole}</div></div>
            <div class="roffice-f"><div class="roffice-l">Contact</div><div style="font-size:11.5px"><a class="lnk" href="mailto:${o.email}">${o.email}</a></div><div style="font-size:11.5px;color:var(--text3)">${o.phone}</div></div>
            <div class="roffice-f"><div class="roffice-l">Suppliers Managed</div><div class="roffice-v">${o.supplierCount}</div></div>
            <div class="roffice-f"><div class="roffice-l">Active Contracts</div><div class="roffice-v" style="color:var(--green)">${o.activeContracts}</div></div>
            <div class="roffice-f" style="grid-column:span 2"><div class="roffice-l">Regional Scope</div><div style="font-size:12px">${o.destinations.join(' · ')}</div></div>
            <div class="roffice-f" style="grid-column:span 2"><div class="roffice-l">Contract Authority</div><div style="font-size:12px;color:var(--text2)">${o.contractAuthority}</div></div>
          </div>

          <div class="roffice-contracts">
            <div style="font-size:10.5px;font-weight:700;color:var(--text3);margin-bottom:6px;text-transform:uppercase;letter-spacing:.5px">Recent Contracts</div>
            <table class="roffice-ctbl">
              <thead><tr><th>Ref</th><th>Supplier</th><th>Type</th><th>Value</th><th>Expiry</th><th>ORN Owner</th></tr></thead>
              <tbody>
                ${o.contracts.map(c=>`<tr>
                  <td class="mono" style="font-size:11px">${c.ref}</td>
                  <td class="lnk" style="font-size:12px">${c.supplier}</td>
                  <td style="font-size:11.5px">${c.type}</td>
                  <td style="font-size:11.5px;font-weight:600">${c.value}</td>
                  <td style="font-size:11.5px">${c.expiry}</td>
                  <td style="font-size:11.5px">${c.owner}</td>
                </tr>`).join('')}
              </tbody>
            </table>
            <div style="margin-top:8px">${btn('Assign Contract to this Office','btn-white btn-sm',`openAssignToOfficeModal('${o.id}','${o.name}')`)}</div>
          </div>
        </div>`).join('')}
    </div>`;
}
window.pg_sup_regions = pg_sup_regions;

function openEditOfficeModal(officeId){
  const o = regionalOffices.find(x=>x.id===officeId)||{};
  openModal(`Edit Office — ${o.name}`,`
    <div class="form-panel"><div class="form-head">Office Details</div><div class="form-body"><div class="fgrid">
      <div class="fg"><label>Office Name <span class="req">*</span></label><input class="fc" value="${o.name||''}"></div>
      <div class="fg"><label>City</label><input class="fc" value="${o.city||''}"></div>
      <div class="fg"><label>Country</label><input class="fc" value="${o.country||''}"></div>
      <div class="fg"><label>Office Type</label><select class="fc"><option ${o.type==='Global HQ'?'selected':''}>Global HQ</option><option ${o.type==='Regional Office'?'selected':''}>Regional Office</option><option>Representative Office</option></select></div>
      <div class="fg"><label>Phone</label><input class="fc" value="${o.phone||''}"></div>
      <div class="fg"><label>Email</label><input class="fc" type="email" value="${o.email||''}"></div>
      <div class="fg"><label>Office Head</label><select class="fc"><option value="">Select...</option>${ornTeamSel()}</select></div>
      <div class="fg"><label>Contract Authority Limit (£)</label><input class="fc" type="number" placeholder="e.g. 200000"></div>
    </div>
    <div class="fg" style="margin-top:10px"><label>Full Address</label><textarea class="fc" style="height:55px;width:100%">${o.address||''}</textarea></div>
    </div></div>
    <div class="form-panel"><div class="form-head">Regional Scope &amp; Destinations</div><div class="form-body">
      <div class="fg"><label>Contract Scope Description</label><textarea class="fc" style="height:55px;width:100%">${o.contractScope||''}</textarea></div>
      <div class="fg" style="margin-top:10px"><label>Destinations Covered</label><input class="fc" value="${(o.destinations||[]).join(', ')}" placeholder="Dubai, Oman, Egypt..."></div>
    </div></div>`,
    `${btn('Cancel','btn-white','closeModal()')} ${btn('Save Changes','btn-navy',"toast('Office updated!');closeModal()")}`
  );
}
window.openEditOfficeModal = openEditOfficeModal;

function openNewOfficeModal(){
  openModal('Add New Regional Office',`
    <div class="form-panel"><div class="form-head">Office Details</div><div class="form-body"><div class="fgrid">
      <div class="fg"><label>Office Name <span class="req">*</span></label><input class="fc" placeholder="e.g. Riyadh — Saudi Arabia"></div>
      <div class="fg"><label>City <span class="req">*</span></label><input class="fc" placeholder="City"></div>
      <div class="fg"><label>Country <span class="req">*</span></label><input class="fc" placeholder="Country"></div>
      <div class="fg"><label>Flag Emoji</label><input class="fc" placeholder="🇸🇦"></div>
      <div class="fg"><label>Office Type</label><select class="fc"><option>Regional Office</option><option>Representative Office</option><option>Global HQ</option></select></div>
      <div class="fg"><label>Phone</label><input class="fc" placeholder="+966..."></div>
      <div class="fg"><label>Email</label><input class="fc" type="email" placeholder="office@orn.com"></div>
      <div class="fg"><label>Office Head <span class="req">*</span></label><select class="fc"><option value="">Select...</option>${ornTeamSel()}</select></div>
      <div class="fg"><label>Contract Authority Limit (£)</label><input class="fc" type="number" placeholder="e.g. 150000"></div>
      <div class="fg"><label>Requires London Co-Sign Above (£)</label><input class="fc" type="number" placeholder="e.g. 150000"></div>
    </div>
    <div class="fg" style="margin-top:10px"><label>Full Address</label><textarea class="fc" style="height:55px;width:100%" placeholder="Full office address..."></textarea></div>
    </div></div>
    <div class="form-panel"><div class="form-head">Regional Scope</div><div class="form-body">
      <div class="fg"><label>Destinations Covered</label><input class="fc" placeholder="e.g. Saudi Arabia, Kuwait, Bahrain"></div>
      <div class="fg" style="margin-top:10px"><label>Contract Scope</label><textarea class="fc" style="height:55px;width:100%" placeholder="Describe what this office is responsible for..."></textarea></div>
    </div></div>`,
    `${btn('Cancel','btn-white','closeModal()')} ${btn('Create Office','btn-navy',"toast('Office created!');closeModal()")}`
  );
}
window.openNewOfficeModal = openNewOfficeModal;

function openOfficeContractsModal(officeId){
  const o = regionalOffices.find(x=>x.id===officeId)||{};
  openModal(`Contracts — ${o.name}`,`
    <div style="margin-bottom:12px">
      <div class="fgrid" style="margin-bottom:10px">
        <div><div style="font-size:10.5px;color:var(--text3)">Office Head</div><div style="font-size:13px;font-weight:700">${o.head}</div></div>
        <div><div style="font-size:10.5px;color:var(--text3)">Regional Scope</div><div style="font-size:12.5px">${o.contractScope}</div></div>
        <div><div style="font-size:10.5px;color:var(--text3)">Contract Authority</div><div style="font-size:12.5px">${o.contractAuthority}</div></div>
        <div><div style="font-size:10.5px;color:var(--text3)">Active Contracts</div><div style="font-size:13px;font-weight:700;color:var(--green)">${o.activeContracts}</div></div>
      </div>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:12px">
      <thead><tr style="background:var(--bg-page)">${['Ref','Supplier','Type','Value','Expiry','ORN Owner','Status','Actions'].map(h=>`<th style="padding:6px 8px;text-align:left;font-size:10.5px;color:var(--text3);border-bottom:1px solid var(--border-lt)">${h}</th>`).join('')}</tr></thead>
      <tbody>${o.contracts.map(c=>`<tr style="border-bottom:1px solid var(--border-lt)">
        <td style="padding:7px 8px" class="mono">${c.ref}</td>
        <td style="padding:7px 8px;font-weight:600">${c.supplier}</td>
        <td style="padding:7px 8px">${c.type}</td>
        <td style="padding:7px 8px;font-weight:700">${c.value}</td>
        <td style="padding:7px 8px">${c.expiry}</td>
        <td style="padding:7px 8px">${c.owner}</td>
        <td style="padding:7px 8px"><span class="pill p-green">Valid</span></td>
        <td style="padding:7px 8px;display:flex;gap:4px">
          <a class="lnk" style="font-size:11.5px" onclick="toast('Viewing contract...')">View</a>
          <a class="lnk" style="font-size:11.5px" onclick="toast('Reassigning...')">Reassign</a>
        </td>
      </tr>`).join('')}</tbody>
    </table>
    <div style="margin-top:12px">${btn('+ Assign Contract to this Office','btn-navy',`closeModal();openAssignToOfficeModal('${o.id}','${o.name}')`)}</div>`,
    `${btn('Close','btn-navy','closeModal()')}`
  );
}
window.openOfficeContractsModal = openOfficeContractsModal;

function openAssignToOfficeModal(officeId, officeName){
  openModal(`Assign Contract — ${officeName}`,`
    <div class="form-panel"><div class="form-head">Contract Assignment</div><div class="form-body"><div class="fgrid">
      <div class="fg"><label>Select Contract <span class="req">*</span></label><select class="fc"><option value="">Choose contract...</option>${contracts.map(c=>`<option value="${c.id}">${c.id} — ${c.supplier} (${c.type})</option>`).join('')}</select></div>
      <div class="fg"><label>Assign to Office</label><select class="fc">${regionalOffices.map(o=>`<option value="${o.id}" ${o.id===officeId?'selected':''}>${o.name}</option>`).join('')}</select></div>
      <div class="fg"><label>ORN Contract Owner <span class="req">*</span></label><select class="fc"><option value="">Select team member...</option>${ornTeamSel()}</select></div>
      <div class="fg"><label>ORN Account Manager</label><select class="fc"><option value="">Select team member...</option>${ornTeamSel()}</select></div>
      <div class="fg"><label>Contract Scope</label><select class="fc"><option>Global</option><option>Regional</option><option>Destination-Specific</option></select></div>
      <div class="fg"><label>Authority Level</label><select class="fc"><option>Regional — within authority</option><option>Requires London Co-Sign</option><option>London HQ Only</option></select></div>
      <div class="fg"><label>Effective Date</label><input class="fc" type="date"></div>
      <div class="fg"><label>Notify Team</label><select class="fc"><option>Yes — email all owners</option><option>No — silent assign</option></select></div>
    </div>
    <div class="fg" style="margin-top:10px"><label>Reason for Assignment</label>
      <textarea class="fc" style="height:55px;width:100%" placeholder="Why is this contract being assigned to this office?"></textarea>
    </div>
    </div></div>`,
    `${btn('Cancel','btn-white','closeModal()')} ${btn('Assign Contract','btn-navy',"toast('Contract assigned to '+arguments[0]+'!');closeModal()")}`
  );
}
window.openAssignToOfficeModal = openAssignToOfficeModal;

function openAssignContractsModal(){
  const unassigned = [
    {ref:'CTR-2026-0101',supplier:'Sahara Adventure Tours',type:'Service Contract',dest:'Morocco',value:'£85K',expiry:'Jun 2027'},
    {ref:'INS-2026-0102',supplier:'Istanbul Express Transfers',type:'Insurance',dest:'Turkey',value:'—',expiry:'Apr 2027'},
    {ref:'CTR-2026-0103',supplier:'Maldives Sunset Cruises',type:'Service Contract',dest:'Maldives',value:'£95K',expiry:'Awaiting'},
    {ref:'VAT-2026-0104',supplier:'Nile Tours Egypt',type:'VAT Certificate',dest:'Egypt',value:'—',expiry:'Dec 2027'},
  ];
  openModal('Assign Unassigned Contracts',`
    <p style="font-size:12.5px;color:var(--text2);margin-bottom:12px">The following contracts have no regional office or ORN owner assigned. Assign each to an office and team member to ensure accountability.</p>
    <table style="width:100%;border-collapse:collapse;font-size:12px">
      <thead><tr style="background:var(--bg-page)">${['Contract Ref','Supplier','Type','Destination','Value','Expiry','Assign to Office','ORN Owner'].map(h=>`<th style="padding:6px 8px;text-align:left;font-size:10.5px;color:var(--text3);border-bottom:1px solid var(--border-lt)">${h}</th>`).join('')}</tr></thead>
      <tbody>${unassigned.map(c=>`<tr style="border-bottom:1px solid var(--border-lt)">
        <td style="padding:7px 8px" class="mono">${c.ref}</td>
        <td style="padding:7px 8px;font-weight:600">${c.supplier}</td>
        <td style="padding:7px 8px">${c.type}</td>
        <td style="padding:7px 8px">${c.dest}</td>
        <td style="padding:7px 8px">${c.value}</td>
        <td style="padding:7px 8px">${c.expiry}</td>
        <td style="padding:7px 8px"><select class="fc" style="width:160px"><option value="">Select office...</option>${regionalOffices.map(o=>`<option>${o.name}</option>`).join('')}</select></td>
        <td style="padding:7px 8px"><select class="fc" style="width:140px"><option value="">Select...</option>${ornTeamSel()}</select></td>
      </tr>`).join('')}</tbody>
    </table>`,
    `${btn('Cancel','btn-white','closeModal()')} ${btn('Save All Assignments','btn-navy',"toast('All contracts assigned!');closeModal()")}`
  );
}
window.openAssignContractsModal = openAssignContractsModal;


// ─── DESTINATION DRILL-DOWN MODAL ────────────────────────────────
// Called when user clicks any destination on the Supplier Dashboard
function openDestDrillModal(destRaw){
  // Normalise — strip flag emoji, trim
  const dest = destRaw.replace(/[\u{1F1E0}-\u{1F1FF}\u{1F300}-\u{1F9FF}]/gu,'').trim();

  const destSuppliers  = suppliers.filter(s=>s.dest===dest);
  const destContracts  = contracts.filter(c=>c.dest===dest);
  const destPayments   = payments.filter(p=>p.dest===dest);
  const destRates      = rates.filter(r=>r.dest===dest);

  // Summary numbers
  const active   = destSuppliers.filter(s=>s.status==='Active').length;
  const pending  = destSuppliers.filter(s=>s.status==='Pending').length;
  const suspended= destSuppliers.filter(s=>s.status==='Suspended').length;
  const outstanding = destSuppliers.reduce((a,s)=>a+(s.outstanding||0),0);
  const avgCompliance = destSuppliers.length
    ? Math.round(destSuppliers.reduce((a,s)=>a+(s.complianceScore||0),0)/destSuppliers.length)
    : 0;
  const expiringContracts = destContracts.filter(c=>c.status==='Expiring'||c.status==='Expired').length;
  const ornLead = destSuppliers[0]?.ornRegionalLead || destSuppliers[0]?.ornManager || '—';
  const totalPayments = destPayments.reduce((a,p)=>a+p.amount,0);

  // KPI strip HTML
  const kpis = [
    ['Total Suppliers', destSuppliers.length, ''],
    ['Active', active, 'green'],
    ['Pending', pending, 'orange'],
    ['Suspended', suspended, suspended>0?'red':''],
    ['Avg Compliance', avgCompliance+'%', avgCompliance>=85?'green':avgCompliance>=60?'orange':'red'],
    ['Contracts', destContracts.length, ''],
    ['Expiring / Expired', expiringContracts, expiringContracts>0?'red':''],
    ['Payments MTD', '£'+totalPayments.toLocaleString(), 'green'],
    ['Outstanding', outstanding>0?'£'+outstanding.toLocaleString():'£0', outstanding>0?'red':''],
    ['Rates on File', destRates.length, ''],
    ['ORN Lead', ornLead, ''],
  ];

  const kpiHtml = `<div class="kpi-strip" style="margin:0 0 14px">${
    kpis.map(([l,v,c])=>`<div class="kpi-cell"><div class="kpi-lbl">${l}</div><div class="kpi-val ${c}">${v}</div></div>`).join('')
  }</div>`;

  // ── TAB: SUPPLIERS ──
  const tabSuppliers = destSuppliers.length === 0
    ? '<p style="color:var(--text3);padding:12px">No suppliers found for this destination.</p>'
    : `<div class="tbl-wrap"><table>
        <tr>${['#','Supplier','Type','Tier','Status','ORN Manager','Contract Owner','Commission','Compliance','Outstanding','Contract End','Manage'].map(h=>`<th>${h}</th>`).join('')}</tr>
        <tbody>${destSuppliers.map((s,i)=>`<tr>
          <td class="rn">${i+1}</td>
          <td><a class="lnk" onclick="closeModal();setTimeout(()=>openSupModal(${esc(s)}),120)">${s.name}</a></td>
          <td>${s.type}</td>
          <td><span class="tbadge t${s.tier}">Tier ${s.tier}</span></td>
          <td><span class="pill ${sc(s.status)}">${s.status}</span></td>
          <td style="font-size:11.5px">${s.ornManager}</td>
          <td style="font-size:11.5px">${s.ornContractOwner}</td>
          <td>${s.commission}%</td>
          <td>${compliancePill(s.complianceScore||0)}</td>
          <td style="color:${s.outstanding>0?'var(--red)':'inherit'};font-weight:${s.outstanding>0?700:400}">${fmtGbp(s.outstanding)}</td>
          <td>${s.contract}</td>
          <td class="act">
            <a onclick="closeModal();setTimeout(()=>openSupModal(${esc(s)}),120)">View</a>
            <a onclick="closeModal();setTimeout(()=>openEditSupModal(${esc(s)}),120)">Edit</a>
            <a onclick="closeModal();setTimeout(()=>openDocsModal('${s.name}'),120)">Docs</a>
          </td>
        </tr>`).join('')}</tbody>
      </table></div>`;

  // ── TAB: CONTRACTS ──
  const tabContracts = destContracts.length === 0
    ? '<p style="color:var(--text3);padding:12px">No contracts found for this destination.</p>'
    : `<div class="tbl-wrap"><table>
        <tr>${['#','Supplier','Type','Doc No.','Start','Expiry','Value','Status','ORN Owner','ORN Manager','Governing Law','Auto-Renew','Review Due','Manage'].map(h=>`<th>${h}</th>`).join('')}</tr>
        <tbody>${destContracts.map((c,i)=>`<tr>
          <td class="rn">${i+1}</td>
          <td><a class="lnk" onclick="closeModal();setTimeout(()=>openContractModal(${esc(c)}),120)">${c.supplier}</a></td>
          <td style="font-size:11.5px">${c.type}</td>
          <td class="mono">${c.id}</td>
          <td style="font-size:11px">${c.start}</td>
          <td style="font-size:11.5px;color:${c.status==='Expired'?'var(--red)':c.status==='Expiring'?'var(--orange)':'inherit'};font-weight:${c.status!=='Valid'?700:400}">${c.expiry}</td>
          <td><b>${c.value}</b></td>
          <td><span class="pill ${sc(c.status)}">${c.status}</span></td>
          <td style="font-size:11.5px"><b>${c.ornOwner}</b></td>
          <td style="font-size:11.5px">${c.ornManager}</td>
          <td style="font-size:11.5px">${c.governingLaw}</td>
          <td style="font-size:11.5px">${c.autoRenew}</td>
          <td style="font-size:11.5px;color:${c.reviewDate==='Overdue'?'var(--red)':'inherit'};font-weight:${c.reviewDate==='Overdue'?700:400}">${c.reviewDate}</td>
          <td class="act">
            <a onclick="closeModal();setTimeout(()=>openContractModal(${esc(c)}),120)">View</a>
            <a onclick="closeModal();setTimeout(()=>openEditContractModal(${esc(c)}),120)">Edit</a>
            <a onclick="toast('Downloading...')">&#8595;</a>
            <a onclick="toast('Renewal started')">Renew</a>
          </td>
        </tr>`).join('')}</tbody>
      </table></div>`;

  // ── TAB: PAYMENTS ──
  const tabPayments = destPayments.length === 0
    ? '<p style="color:var(--text3);padding:12px">No payments found for this destination.</p>'
    : `<div class="tbl-wrap"><table>
        <tr>${['#','Supplier','Invoice No.','Description','Amount','Due Date','PO Ref','Approver','Status','Actions'].map(h=>`<th>${h}</th>`).join('')}</tr>
        <tbody>${destPayments.map((p,i)=>{
          const ac = p.status==='Pending Approval'
            ? `<a onclick="toast('Approved!')">Approve</a>`
            : p.status==='Approved'
            ? `<a onclick="toast('Processing...')">Pay Now</a>`
            : p.status==='Overdue'
            ? `<a onclick="toast('Processing...')">Pay Now</a><a onclick="toast('Chasing...')">Chase</a>`
            : `<a onclick="toast('Downloading...')">&#8595; Receipt</a>`;
          return `<tr>
            <td class="rn">${i+1}</td>
            <td class="lnk">${p.supplier}</td>
            <td class="mono">${p.id}</td>
            <td>${p.desc}</td>
            <td><b>£${p.amount.toLocaleString()}</b></td>
            <td style="color:${p.status==='Overdue'?'var(--red)':'inherit'}">${p.due}</td>
            <td class="mono" style="font-size:11px">${p.poRef}</td>
            <td style="font-size:11.5px">${p.approver}</td>
            <td><span class="pill ${sc(p.status)}">${p.status}</span></td>
            <td class="act">${ac}</td>
          </tr>`;
        }).join('')}</tbody>
      </table>
      <div style="margin:10px 0;display:flex;gap:10px;align-items:center">
        <b style="font-size:13px">Total: £${totalPayments.toLocaleString()}</b>
        ${outstanding>0?`<span style="color:var(--red);font-weight:700">Outstanding: £${outstanding.toLocaleString()}</span>`:''}
      </div></div>`;

  // ── TAB: RATES ──
  const tabRates = destRates.length === 0
    ? '<p style="color:var(--text3);padding:12px">No rates configured for this destination.</p>'
    : `<div class="tbl-wrap"><table>
        <tr>${['#','Supplier','Type','Room / Service','Season','Period','Net Rate','Gross Rate','Commission','Status','Last Updated','Updated By','Manage'].map(h=>`<th>${h}</th>`).join('')}</tr>
        <tbody>${destRates.map((r,i)=>`<tr>
          <td class="rn">${i+1}</td>
          <td class="lnk">${r.supplier}</td>
          <td>${r.type}</td>
          <td>${r.room}</td>
          <td><span class="pill ${r.season==='Peak'?'p-red':r.season==='High'?'p-orange':r.season==='Low'?'p-blue':'p-gray'}">${r.season}</span></td>
          <td>${r.period}</td>
          <td><b>${r.net}</b></td>
          <td>${r.gross}</td>
          <td>${r.commission}</td>
          <td><span class="pill p-green">${r.status}</span></td>
          <td style="font-size:11.5px;color:var(--text3)">${r.lastUpdated}</td>
          <td style="font-size:11.5px">${r.updatedBy}</td>
          <td class="act">
            <a onclick="closeModal();setTimeout(()=>openEditRateModal('${r.supplier}','${r.season}'),120)">Edit</a>
            <a onclick="toast('Duplicating...')">Duplicate</a>
          </td>
        </tr>`).join('')}</tbody>
      </table></div>`;

  // ── TAB: COMPLIANCE ──
  const tabCompliance = destSuppliers.length === 0
    ? '<p style="color:var(--text3);padding:12px">No suppliers to show compliance for.</p>'
    : `<div class="tbl-wrap"><table>
        <tr>${['#','Supplier','ORN Manager','Score','KYC','Owner ID','Bank Verified','Insurance Expiry','VAT Expiry','Contract','Sanctions','Actions'].map(h=>`<th>${h}</th>`).join('')}</tr>
        <tbody>${destSuppliers.map((s,i)=>`<tr>
          <td class="rn">${i+1}</td>
          <td><a class="lnk" onclick="closeModal();setTimeout(()=>openSupModal(${esc(s)}),120)">${s.name}</a></td>
          <td style="font-size:11.5px">${s.ornManager}</td>
          <td>${compliancePill(s.complianceScore||0)}</td>
          <td><span class="pill ${s.status==='Active'?'p-green':'p-orange'}">${s.status==='Active'?'Complete':'Pending'}</span></td>
          <td><span class="pill ${s.ownerPassport?'p-green':'p-red'}">${s.ownerPassport?'On file':'Missing'}</span></td>
          <td><span class="pill ${s.outstanding===0&&s.bankAccount?'p-green':'p-orange'}">${s.outstanding===0&&s.bankAccount?'Verified':'Pending'}</span></td>
          <td style="font-size:11.5px;color:${(s.insuranceExpiry||'').includes('2025')||s.insuranceExpiry==='Pending'?'var(--red)':'inherit'}">${s.insuranceExpiry||'—'}</td>
          <td style="font-size:11.5px">${s.vatExpiry||'—'}</td>
          <td style="font-size:11.5px;color:${s.contract==='Expired'||s.contract==='Awaiting'?'var(--red)':'inherit'}">${s.contract}</td>
          <td><span class="pill p-green">Clear</span></td>
          <td class="act">
            <a onclick="closeModal();setTimeout(()=>openSupModal(${esc(s)}),120)">View</a>
            ${(s.complianceScore||0)<60?`<a onclick="toast('Opening actions...')">⚠ Fix</a>`:''}
          </td>
        </tr>`).join('')}</tbody>
      </table></div>`;

  // ── TAB: AUDIT ──
  const destAudit = auditLog.filter(a=>
    destSuppliers.some(s=>s.name===a.supplier)
  );
  const tabAudit = destAudit.length === 0
    ? '<p style="color:var(--text3);padding:12px">No audit entries for this destination.</p>'
    : `<div class="audit-list">${destAudit.map(a=>`
        <div class="audit-item">
          <div class="audit-dot" style="background:${a.color}"></div>
          <div class="audit-content">
            <div class="audit-action">${a.action} — <span style="color:var(--text2)">${a.supplier}</span></div>
            <div class="audit-meta">${a.ts} · by ${a.user}</div>
            <div class="audit-detail">${a.detail}</div>
          </div>
        </div>`).join('')}
      </div>`;

  // ── ASSEMBLE MODAL ──
  const flags = {'Dubai':'🇦🇪','Abu Dhabi':'🇦🇪','Oman':'🇴🇲','Egypt':'🇪🇬','Jordan':'🇯🇴',
                 'Morocco':'🇲🇦','Turkey':'🇹🇷','Maldives':'🇲🇻','Saudi Arabia':'🇸🇦','Kenya':'🇰🇪'};

  // Set modal to wide mode for destination drill-down
  const mb=document.getElementById('modal-box');
  if(mb)mb.style.width='1100px';
  openModal(
    `${flags[dest]||'🌍'} ${dest} — Destination Overview`,
    `${kpiHtml}
    <div class="tab-bar">
      <div class="tab active" onclick="switchTab(this,'dd-sup')">Suppliers (${destSuppliers.length})</div>
      <div class="tab" onclick="switchTab(this,'dd-con')">Contracts (${destContracts.length})</div>
      <div class="tab" onclick="switchTab(this,'dd-pay')">Payments (${destPayments.length})</div>
      <div class="tab" onclick="switchTab(this,'dd-rat')">Rates (${destRates.length})</div>
      <div class="tab" onclick="switchTab(this,'dd-cmp')">Compliance</div>
      <div class="tab" onclick="switchTab(this,'dd-aud')">Audit (${destAudit.length})</div>
    </div>
    <div id="dd-sup" class="tab-panel active">${tabSuppliers}</div>
    <div id="dd-con" class="tab-panel">${tabContracts}</div>
    <div id="dd-pay" class="tab-panel">${tabPayments}</div>
    <div id="dd-rat" class="tab-panel">${tabRates}</div>
    <div id="dd-cmp" class="tab-panel">${tabCompliance}</div>
    <div id="dd-aud" class="tab-panel">${tabAudit}</div>`,
    `${btn('+ New Supplier','btn-white','closeModal();openNewSupModal()')}
     ${btn('+ Upload Contract','btn-white','closeModal();openUploadModal()')}
     ${btn('&#8595; Export Destination','btn-white',"toast('Exporting "+dest+" data...')")}
     ${btn('Close','btn-navy','closeModal()')}`
  );
}
window.openDestDrillModal = openDestDrillModal;

// Register all page functions
window.pg_sup_dash=pg_sup_dash;window.pg_sup_all=pg_sup_all;window.pg_sup_onboard=pg_sup_onboard;window.pg_sup_contracts=pg_sup_contracts;window.pg_sup_payments=pg_sup_payments;window.pg_sup_rates=pg_sup_rates;window.pg_sup_compliance=pg_sup_compliance;window.pg_sup_audit=pg_sup_audit;window.pg_sup_tiers=pg_sup_tiers;window.pg_sup_dest=pg_sup_dest;window.pg_sup_regions=pg_sup_regions;window.pg_hotel_content=pg_hotel_content;window.pg_hotel_rates=pg_hotel_rates;window.pg_hotel_sources=pg_hotel_sources;window.pg_act_all=pg_act_all;
window.pg_sales_dest=function(){return '<div class="page-title">Destination Dashboard</div><div style="background:#fff;border:1px solid var(--border-lt);padding:40px;text-align:center;color:var(--text3)">Connect live data to populate.</div>';};

function toast(msg,err=false){
  const el=document.getElementById('toast');if(!el)return;
  el.textContent=msg;el.className='toast'+(err?' err':'');
  el.classList.add('show');clearTimeout(window._tt);
  window._tt=setTimeout(()=>el.classList.remove('show'),3200);
}
window.toast=toast;

document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.pnav').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();setPrimary(el.dataset.p);}));
  // Inject audit/modal helper styles
  const s=document.createElement('style');
  s.textContent=`
    .audit-list{display:flex;flex-direction:column}
    .audit-item{display:flex;gap:12px;padding:10px 14px;border-bottom:1px solid var(--border-lt)}
    .audit-item:last-child{border-bottom:none}
    .audit-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0;margin-top:5px}
    .audit-content{flex:1}
    .audit-action{font-size:12.5px;font-weight:700}
    .audit-meta{font-size:11.5px;color:var(--text3)}
    .audit-detail{font-size:12px;color:var(--text2);margin-top:3px;background:var(--bg-page);padding:4px 8px;border-radius:2px;border-left:3px solid var(--border)}
    .modal-foot{padding:10px 16px;border-top:1px solid var(--border);display:flex;justify-content:flex-end;gap:8px;background:var(--bg-top);flex-shrink:0}
    .page-subtitle{font-size:12.5px;color:var(--text3);margin:-8px 0 14px}
    .sum-cards{display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap}
    .sum-card{background:#fff;border:1px solid var(--border-lt);border-radius:var(--r);padding:14px 18px;flex:1;min-width:140px}
    .sum-card.green{border-left:3px solid var(--green)}.sum-card.orange{border-left:3px solid var(--orange)}.sum-card.red{border-left:3px solid var(--red)}
    .sc-lbl{font-size:11px;color:var(--text3);margin-bottom:4px}.sc-val{font-size:20px;font-weight:800}.sc-val.green{color:var(--green)}.sc-val.orange{color:var(--orange)}.sc-val.red{color:var(--red)}.sc-sub{font-size:11px;color:var(--text3);margin-top:2px}
    .form-actions{display:flex;justify-content:flex-end;gap:8px;padding:12px 0}
    .fgrid-2{display:grid;grid-template-columns:1fr 1fr;gap:10px}
  `;
  document.head.appendChild(s);
  setPrimary('suppliers');
});
