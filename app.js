// ORN Supplier Management Portal — Full Featured
'use strict';

// ── NAV CONFIG ───────────────────────────────────────────────────
const NAV = {
  products:  { sub:['Product Catalogue','Categories','Pricing'],               pages:[] },
  sales:     { sub:['Business Dashboard','Dest Dashboard','Groups Dashboard','Expert Dashboard','B2C Expert Dashboard','BM Dashboard','KAM Dashboard','FS Dashboard'], pages:['pg_sales_dest'] },
  supply:    { sub:['Overview','Availability','Allotments'],                   pages:[] },
  suppliers: { sub:['Supplier Dashboard','All Suppliers','Onboarding','Contracts','Payments','Rates & Pricing','Audit Trail','Tier Management','Destinations'], pages:['pg_sup_dash','pg_sup_all','pg_sup_onboard','pg_sup_contracts','pg_sup_payments','pg_sup_rates','pg_sup_audit','pg_sup_tiers','pg_sup_dest'] },
  hotels:    { sub:['Manage Rates and Inventory','Manage Contracts','Inventory Position','Hotel Content','Preferred Rankings','Manage Supply','GIT Blockings','GIT Calendar'], pages:['pg_hotel_rates','pg_hotel_contracts','pg_hotel_inv','pg_hotel_content','pg_hotel_rankings'] },
  activities:{ sub:['All Activities','Tours','Transfers','Experiences'],       pages:['pg_act_all'] },
  vehicles:  { sub:['Fleet','Bookings','Maintenance'],                         pages:[] },
  delivery:  { sub:['Overview','Pending','Completed'],                         pages:[] },
};

let curPrimary = 'suppliers', curSub = 0;

// ── DATA ─────────────────────────────────────────────────────────
const suppliers = [
  {id:'SUP-0081',name:'Atlantis The Palm',type:'Hotel',dest:'Dubai',tier:1,rating:4.8,status:'Active',tax:'AE-VAT-100384721',regNo:'DED-2018-88231',contract:'Dec 2025',outstanding:0,commission:18,currency:'GBP',payTerms:'Net 30',contact:'James Al Rashid',email:'james@atlantis.com',phone:'+971 4 426 0000'},
  {id:'SUP-0082',name:'Burj Al Arab Jumeirah',type:'Hotel',dest:'Dubai',tier:1,rating:4.9,status:'Active',tax:'AE-VAT-100284622',regNo:'DED-2016-44112',contract:'Nov 2025',outstanding:0,commission:20,currency:'GBP',payTerms:'Net 30',contact:'Sara Khalid',email:'sara@burjalarab.com',phone:'+971 4 301 7777'},
  {id:'SUP-0083',name:'Desert Tracks Tours',type:'Tour',dest:'Dubai',tier:2,rating:4.5,status:'Active',tax:'AE-VAT-100512388',regNo:'DED-2019-22788',contract:'Mar 2026',outstanding:0,commission:15,currency:'GBP',payTerms:'Net 15',contact:'Ahmed Hassan',email:'ahmed@deserttracks.ae',phone:'+971 50 222 3344'},
  {id:'SUP-0084',name:'Nile Tours Egypt',type:'Tour',dest:'Egypt',tier:2,rating:4.2,status:'Pending',tax:'EG-TAX-302847',regNo:'CAI-2021-99821',contract:'Awaiting',outstanding:0,commission:12,currency:'GBP',payTerms:'Net 30',contact:'Mona Farouk',email:'mona@niletours.eg',phone:'+20 2 2345 6789'},
  {id:'SUP-0085',name:'Jordan Transfer Co',type:'Transport',dest:'Jordan',tier:2,rating:4.1,status:'Active',tax:'JO-TAX-884421',regNo:'AMM-2017-55512',contract:'Sep 2025',outstanding:6800,commission:12,currency:'GBP',payTerms:'Net 30',contact:'Khalid Nassar',email:'khalid@jordantransfer.jo',phone:'+962 6 567 8901'},
  {id:'SUP-0086',name:'Oman Luxury Resorts',type:'Hotel',dest:'Oman',tier:1,rating:4.6,status:'Active',tax:'OM-VAT-729341',regNo:'MCT-2015-11234',contract:'Jun 2026',outstanding:0,commission:16,currency:'GBP',payTerms:'Net 30',contact:'Fatima Al Balushi',email:'fatima@omanluxury.om',phone:'+968 2 456 7890'},
  {id:'SUP-0087',name:'Petra Tours & Travel',type:'Tour',dest:'Jordan',tier:2,rating:4.3,status:'Active',tax:'JO-TAX-992817',regNo:'AMM-2018-77234',contract:'Apr 2026',outstanding:0,commission:14,currency:'GBP',payTerms:'Net 15',contact:'Omar Dabbas',email:'omar@petratours.jo',phone:'+962 3 215 6789'},
  {id:'SUP-0088',name:'Red Sea Divers',type:'Activity',dest:'Egypt',tier:2,rating:4.4,status:'Active',tax:'EG-TAX-558821',regNo:'HRG-2020-33441',contract:'Aug 2025',outstanding:0,commission:16,currency:'GBP',payTerms:'Net 30',contact:'Tarek Salama',email:'tarek@redseadivers.eg',phone:'+20 65 334 4556'},
  {id:'SUP-0089',name:'Maldives Sunset Cruises',type:'Cruise',dest:'Maldives',tier:1,rating:4.7,status:'Pending',tax:'MV-TAX-00182',regNo:'MLE-2022-00821',contract:'Awaiting',outstanding:0,commission:18,currency:'GBP',payTerms:'On Completion',contact:'Ibrahim Waheed',email:'ibrahim@sunsetcruises.mv',phone:'+960 333 1122'},
  {id:'SUP-0090',name:'Arabian Nights Dining',type:'Restaurant',dest:'Dubai',tier:2,rating:4.5,status:'Active',tax:'AE-VAT-100671239',regNo:'DED-2020-66123',contract:'Jan 2026',outstanding:2400,commission:13,currency:'GBP',payTerms:'Net 30',contact:'Rania Farsi',email:'rania@arabiannights.ae',phone:'+971 4 388 9900'},
  {id:'SUP-0091',name:'Dubai Luxury Limos',type:'Transport',dest:'Dubai',tier:1,rating:4.8,status:'Active',tax:'AE-VAT-100234887',regNo:'DED-2017-55321',contract:'Oct 2025',outstanding:0,commission:18,currency:'GBP',payTerms:'Net 15',contact:'Faisal Mirza',email:'faisal@dubailimos.ae',phone:'+971 4 355 7700'},
  {id:'SUP-0092',name:'Sahara Adventure Tours',type:'Tour',dest:'Morocco',tier:2,rating:4.2,status:'Pending',tax:'MA-TAX-28481',regNo:'CMK-2021-44552',contract:'Awaiting',outstanding:0,commission:13,currency:'GBP',payTerms:'Net 30',contact:'Yassin Benali',email:'yassin@saharaadventure.ma',phone:'+212 524 445566'},
  {id:'SUP-0093',name:'Istanbul Express Transfers',type:'Transport',dest:'Turkey',tier:3,rating:3.9,status:'Pending',tax:'TR-TAX-102948',regNo:'IST-2022-88112',contract:'Awaiting',outstanding:0,commission:10,currency:'GBP',payTerms:'Net 30',contact:'Mehmet Yilmaz',email:'mehmet@istanbulexpress.tr',phone:'+90 212 556 7788'},
  {id:'SUP-0094',name:'Abu Dhabi Experiences',type:'Activity',dest:'Abu Dhabi',tier:2,rating:4.3,status:'Active',tax:'AE-VAT-100881234',regNo:'ADBC-2019-33421',contract:'Feb 2026',outstanding:1200,commission:14,currency:'GBP',payTerms:'Net 30',contact:'Layla Al Mazrouei',email:'layla@adexperiences.ae',phone:'+971 2 678 9900'},
  {id:'SUP-0095',name:'Muscat Heritage Tours',type:'Tour',dest:'Oman',tier:2,rating:4.4,status:'Active',tax:'OM-VAT-883291',regNo:'MCT-2018-55678',contract:'May 2026',outstanding:0,commission:13,currency:'GBP',payTerms:'Net 30',contact:'Salim Al Harthi',email:'salim@muscattours.om',phone:'+968 2 234 5678'},
  {id:'SUP-0096',name:'Pyramids View Hotel',type:'Hotel',dest:'Egypt',tier:2,rating:4.1,status:'Suspended',tax:'EG-TAX-719283',regNo:'CAI-2016-88234',contract:'Expired',outstanding:14200,commission:12,currency:'GBP',payTerms:'Net 30',contact:'Hassan Ibrahim',email:'hassan@pyramidsview.eg',phone:'+20 2 3377 8899'},
  {id:'SUP-0097',name:'Marrakech Riad Collection',type:'Hotel',dest:'Morocco',tier:1,rating:4.6,status:'Active',tax:'MA-TAX-48122',regNo:'CMK-2017-22341',contract:'Jul 2026',outstanding:0,commission:16,currency:'GBP',payTerms:'Net 30',contact:'Amina Bensouda',email:'amina@marrakechriad.ma',phone:'+212 524 334455'},
  {id:'SUP-0098',name:'Dead Sea Wellness Spa',type:'Activity',dest:'Jordan',tier:2,rating:4.5,status:'Active',tax:'JO-TAX-118843',regNo:'AMM-2019-66221',contract:'Dec 2025',outstanding:0,commission:14,currency:'GBP',payTerms:'Net 30',contact:'Ruba Haddad',email:'ruba@deadseaspa.jo',phone:'+962 5 349 0011'},
  {id:'SUP-0099',name:'Cappadocia Balloon Tours',type:'Activity',dest:'Turkey',tier:1,rating:4.8,status:'Active',tax:'TR-TAX-287641',regNo:'KAY-2016-11234',contract:'Sep 2026',outstanding:0,commission:17,currency:'GBP',payTerms:'Net 30',contact:'Mustafa Kaya',email:'mustafa@cappadociaballoon.tr',phone:'+90 384 212 3344'},
  {id:'SUP-0100',name:'Jumeirah Beach Resort',type:'Hotel',dest:'Dubai',tier:1,rating:4.7,status:'Active',tax:'AE-VAT-100924571',regNo:'DED-2015-11998',contract:'Jan 2026',outstanding:0,commission:19,currency:'GBP',payTerms:'Net 30',contact:'Noura Al Maktoum',email:'noura@jumeirahbeach.ae',phone:'+971 4 348 0000'},
];

const contracts = [
  {id:'CTR-2024-0081',supplier:'Atlantis The Palm',type:'Service Contract',dest:'Dubai',uploaded:'15 Jan 2024',expiry:'31 Dec 2025',status:'Valid',value:'£840,000',file:'atlantis_contract_2024.pdf',notes:'Annual rolling contract. Includes room block allocation of 200 rooms peak season.'},
  {id:'CTR-2023-0094',supplier:'Desert Tracks Tours',type:'Service Contract',dest:'Dubai',uploaded:'01 Mar 2023',expiry:'28 Feb 2024',status:'Expired',value:'£120,000',file:'deserttracks_2023.pdf',notes:'Expired. Renewal in progress.'},
  {id:'INS-2024-0089',supplier:'Jordan Transfer Co',type:'Insurance Certificate',dest:'Jordan',uploaded:'10 Sep 2024',expiry:'09 Sep 2025',status:'Expiring',value:'—',file:'jordan_transfer_insurance.pdf',notes:'Public liability £5M. Renewal reminder sent 01 Aug 2025.'},
  {id:'VAT-2024-0072',supplier:'Oman Luxury Resorts',type:'VAT Certificate',dest:'Oman',uploaded:'01 Jun 2024',expiry:'31 May 2026',status:'Valid',value:'—',file:'oman_vat_cert.pdf',notes:'VAT registered OM. Certificate valid 2 years.'},
  {id:'INS-2024-0088',supplier:'Red Sea Divers',type:'Insurance Certificate',dest:'Egypt',uploaded:'01 Aug 2024',expiry:'31 Jul 2025',status:'Expiring',value:'—',file:'redseadivers_ins.pdf',notes:'Dive liability and marine insurance.'},
  {id:'CTR-2022-0096',supplier:'Pyramids View Hotel',type:'Service Contract',dest:'Egypt',uploaded:'01 Jan 2022',expiry:'31 Dec 2023',status:'Expired',value:'£96,000',file:'pyramids_contract_2022.pdf',notes:'Expired. Supplier currently suspended pending review.'},
  {id:'CTR-2024-0097',supplier:'Marrakech Riad Collection',type:'Service Contract',dest:'Morocco',uploaded:'01 Jul 2024',expiry:'30 Jun 2026',status:'Valid',value:'£220,000',file:'marrakech_riad_2024.pdf',notes:'Boutique riad portfolio, 8 properties.'},
  {id:'ID-2024-0083',supplier:'Desert Tracks Tours',type:'Owner ID / Passport',dest:'Dubai',uploaded:'01 Mar 2024',expiry:'28 Feb 2029',status:'Valid',value:'—',file:'dt_owner_passport.pdf',notes:'Passport copy. UK national. Expires Feb 2029.'},
  {id:'REG-2024-0081',supplier:'Atlantis The Palm',type:'Company Registration',dest:'Dubai',uploaded:'01 Jan 2024',expiry:'31 Dec 2026',status:'Valid',value:'—',file:'atlantis_reg.pdf',notes:'DED registered.'},
  {id:'CTR-2024-0099',supplier:'Cappadocia Balloon Tours',type:'Service Contract',dest:'Turkey',uploaded:'01 Sep 2024',expiry:'31 Aug 2026',status:'Valid',value:'£180,000',file:'cappadocia_2024.pdf',notes:'Premium balloon tour packages.'},
];

const payments = [
  {id:'INV-2026-0281',supplier:'Atlantis The Palm',dest:'Dubai',desc:'April accommodation services',amount:42000,due:'30 Apr 2026',status:'Pending Approval',currency:'GBP'},
  {id:'INV-2026-0279',supplier:'Desert Tracks Tours',dest:'Dubai',desc:'April tour operations',amount:8500,due:'25 Apr 2026',status:'Approved',currency:'GBP'},
  {id:'INV-2026-0265',supplier:'Jordan Transfer Co',dest:'Jordan',desc:'March transfers – overdue',amount:5200,due:'31 Mar 2026',status:'Overdue',currency:'GBP'},
  {id:'INV-2026-0280',supplier:'Oman Luxury Resorts',dest:'Oman',desc:'April accommodation',amount:28000,due:'30 Apr 2026',status:'Paid',currency:'GBP'},
  {id:'INV-2026-0274',supplier:'Abu Dhabi Experiences',dest:'Abu Dhabi',desc:'April activity packages',amount:6800,due:'28 Apr 2026',status:'Approved',currency:'GBP'},
  {id:'INV-2026-0260',supplier:'Pyramids View Hotel',dest:'Egypt',desc:'February accommodation – overdue',amount:9200,due:'28 Feb 2026',status:'Overdue',currency:'GBP'},
  {id:'INV-2026-0278',supplier:'Marrakech Riad Collection',dest:'Morocco',desc:'April riad bookings',amount:18400,due:'30 Apr 2026',status:'Paid',currency:'GBP'},
  {id:'INV-2026-0282',supplier:'Cappadocia Balloon Tours',dest:'Turkey',desc:'March balloon tours',amount:14200,due:'15 Apr 2026',status:'Paid',currency:'GBP'},
];

const auditLog = [
  {ts:'26 Apr 2026 14:32',user:'Ajay Kawa',action:'Contract Uploaded',supplier:'Atlantis The Palm',detail:'Uploaded new service contract CTR-2024-0081 (PDF, 2.4MB)',type:'contract',color:'#1a6faf'},
  {ts:'26 Apr 2026 11:18',user:'Priya Sharma',action:'Payment Approved',supplier:'Desert Tracks Tours',detail:'Invoice INV-2026-0279 approved for payment. Amount: £8,500',type:'payment',color:'#1a7a5a'},
  {ts:'25 Apr 2026 16:45',user:'Ajay Kawa',action:'Supplier Status Changed',supplier:'Pyramids View Hotel',detail:'Status changed from Active → Suspended. Reason: Outstanding balance £14,200 unpaid.',type:'status',color:'#c0392b'},
  {ts:'25 Apr 2026 09:22',user:'Ravi Patel',action:'New Supplier Added',supplier:'Sahara Adventure Tours',detail:'New supplier application submitted. Onboarding pipeline stage 1.',type:'new',color:'#8e44ad'},
  {ts:'24 Apr 2026 15:10',user:'Priya Sharma',action:'Rate Updated',supplier:'Oman Luxury Resorts',detail:'High season rate updated: £320/night → £345/night. Effective 01 Jun 2026.',type:'rate',color:'#d68910'},
  {ts:'24 Apr 2026 11:55',user:'Ajay Kawa',action:'Contract Renewed',supplier:'Marrakech Riad Collection',detail:'Contract CTR-2024-0097 renewed for 2 years. New expiry: 30 Jun 2026.',type:'contract',color:'#1a6faf'},
  {ts:'23 Apr 2026 14:00',user:'Ravi Patel',action:'Payment Processed',supplier:'Oman Luxury Resorts',detail:'Invoice INV-2026-0280 paid. £28,000 transferred via BACS. Ref: ORN-PAY-20260423.',type:'payment',color:'#1a7a5a'},
  {ts:'22 Apr 2026 10:30',user:'Ajay Kawa',action:'Tier Changed',supplier:'Desert Tracks Tours',detail:'Tier changed from Tier 3 → Tier 2. Commission updated 10% → 15%.',type:'tier',color:'#856404'},
  {ts:'21 Apr 2026 16:20',user:'Priya Sharma',action:'Document Expiry Alert',supplier:'Jordan Transfer Co',detail:'Insurance certificate INS-2024-0089 expiring in 30 days (09 Sep 2025). Reminder sent.',type:'alert',color:'#c0392b'},
  {ts:'20 Apr 2026 09:15',user:'System',action:'Auto-Reminder Sent',supplier:'Red Sea Divers',detail:'Automated contract renewal reminder sent to tarek@redseadivers.eg',type:'system',color:'#718096'},
  {ts:'19 Apr 2026 13:40',user:'Ajay Kawa',action:'Supplier Edited',supplier:'Atlantis The Palm',detail:'Contact details updated. New contact: James Al Rashid (+971 4 426 0000)',type:'edit',color:'#1a6faf'},
  {ts:'18 Apr 2026 11:05',user:'Ravi Patel',action:'Notes Added',supplier:'Jordan Transfer Co',detail:'Note: Client requested preferred vehicle upgrade for airport transfers from May.',type:'note',color:'#718096'},
];

const rates = [
  {supplier:'Atlantis The Palm',dest:'Dubai',type:'Hotel',season:'Peak',period:'Jun–Aug 2026',net:'£285',gross:'£336',commission:'18%',currency:'GBP',status:'Active',lastUpdated:'15 Mar 2026'},
  {supplier:'Atlantis The Palm',dest:'Dubai',type:'Hotel',season:'High',period:'Dec 2025–Jan 2026',net:'£320',gross:'£378',commission:'18%',currency:'GBP',status:'Active',lastUpdated:'15 Mar 2026'},
  {supplier:'Atlantis The Palm',dest:'Dubai',type:'Hotel',season:'Low',period:'Sep–Nov 2025',net:'£195',gross:'£230',commission:'18%',currency:'GBP',status:'Active',lastUpdated:'15 Mar 2026'},
  {supplier:'Oman Luxury Resorts',dest:'Oman',type:'Hotel',season:'Peak',period:'Nov–Feb 2026',net:'£290',gross:'£336',commission:'16%',currency:'GBP',status:'Active',lastUpdated:'10 Mar 2026'},
  {supplier:'Desert Tracks Tours',dest:'Dubai',type:'Tour',season:'All Year',period:'Jan–Dec 2026',net:'£85',gross:'£98',commission:'15%',currency:'GBP',status:'Active',lastUpdated:'01 Apr 2026'},
  {supplier:'Jordan Transfer Co',dest:'Jordan',type:'Transport',season:'All Year',period:'Jan–Dec 2026',net:'£45',gross:'£52',commission:'12%',currency:'GBP',status:'Active',lastUpdated:'20 Mar 2026'},
  {supplier:'Cappadocia Balloon Tours',dest:'Turkey',type:'Activity',season:'High',period:'Apr–Oct 2026',net:'£180',gross:'£211',commission:'17%',currency:'GBP',status:'Active',lastUpdated:'05 Apr 2026'},
  {supplier:'Marrakech Riad Collection',dest:'Morocco',type:'Hotel',season:'Peak',period:'Mar–May 2026',net:'£145',gross:'£168',commission:'16%',currency:'GBP',status:'Active',lastUpdated:'12 Mar 2026'},
];

// ── RENDER HELPERS ───────────────────────────────────────────────
const sc = s => s==='Active'||s==='Valid'||s==='Paid'?'p-green':s==='Pending'||s==='Expiring'||s==='Pending Approval'?'p-orange':s==='Suspended'||s==='Expired'||s==='Overdue'?'p-red':s==='Approved'?'p-blue':'p-gray';
const fmtGbp = n => n > 0 ? '£'+n.toLocaleString() : '£0';

function toolbar(...items){ return `<div class="toolbar">${items.join('')}</div>`; }
function ti(ph,id='',w=160,extra=''){ return `<input class="ti" type="text" placeholder="${ph}" id="${id}" style="width:${w}px" ${extra}>`; }
function sel(opts,id='',extra=''){
  return `<select class="ti" id="${id}" ${extra}>${opts.map(o=>typeof o==='string'?`<option>${o}</option>`:`<option value="${o[0]}">${o[1]}</option>`).join('')}</select>`;
}
function btn(label,cls='btn-navy',onclick='',extra=''){return `<button class="btn ${cls}" onclick="${onclick}" ${extra}>${label}</button>`;}
function thdr(...cols){ return `<tr>${cols.map(c=>`<th>${c}</th>`).join('')}</tr>`; }
function frow(...cols){ return `<tr class="frow">${cols.map(c=>`<th>${c?`<input placeholder="">`:'&nbsp;'}</th>`).join('')}</tr>`; }
function pgfoot(show,total,pages=3){
  return `<div class="tbl-foot"><span>Showing ${show} of ${total}</span><div class="pgn">${Array.from({length:pages},(_,i)=>`<button class="${i===0?'active':''}" onclick="toast('Page ${i+1}')">${i+1}</button>`).join('')}${pages>3?'<span>...</span><button onclick="toast(\'Last page\')">'+Math.ceil(total/20)+'</button>':''}</div></div>`;
}

// ── PAGE: SUPPLIER DASHBOARD ─────────────────────────────────────
function pg_sup_dash(){
  const destData = [
    ['🇦🇪 Dubai',38,18,12,6,2,'£842K','£48K',0,14,5,22],
    ['🇦🇪 Abu Dhabi',24,10,8,4,1,'£521K','£31K',1200,8,3,14],
    ['🇴🇲 Oman',18,8,5,3,0,'£398K','£28K',0,6,2,9],
    ['🇪🇬 Egypt',14,5,4,2,3,'£287K','£14K',14200,4,1,7],
    ['🇯🇴 Jordan',10,3,3,2,0,'£198K','£11K',6800,3,1,5],
    ['🇲🇦 Morocco',8,3,2,1,1,'£164K','£8K',0,2,0,3],
    ['🇹🇷 Turkey',6,2,1,2,2,'£142K','£5K',0,1,0,2],
    ['🇲🇻 Maldives',4,2,1,0,1,'£98K','£3K',0,2,0,1],
  ];
  return `
    <div class="page-title">Supplier Dashboard</div>
    ${toolbar(
      `<input type="date" class="ti" value="2026-04-23">`,
      `<span style="font-size:12px;color:var(--text3)">–</span>`,
      `<input type="date" class="ti" value="2026-04-26">`,
      sel(['All Supplier Types','Hotels','Tours & Activities','Transport','Restaurants','Experiences'],''),
      sel(['All Destinations','Dubai','Abu Dhabi','Oman','Egypt','Jordan','Morocco','Turkey','Maldives'],''),
      sel(['All Tiers','Tier 1 – Premium','Tier 2 – Standard','Tier 3 – Budget'],''),
      sel(['All Status','Active','Pending','Suspended'],''),
      btn('Show','btn-navy','toast(\'Filters applied\')'),
      btn('&#8595; Export','btn-white','toast(\'Exporting...\')'),
      `<div class="toolbar-r">${btn('+ New Supplier','btn-navy','setSecondary(2)')}</div>`
    )}
    <div class="kpi-strip">
      ${[['Total Suppliers','142',''],['Active','118','blue'],['Pending Onboard','7','orange'],['Suspended','2','red'],['Contracts Expiring','3','orange'],['Payments MTD','£248K','green'],['Overdue','£12K','red'],['YTD Total','£2.1M',''],['Destinations','18','blue']].map(([l,v,c])=>`<div class="kpi-cell"><div class="kpi-lbl">${l}</div><div class="kpi-val ${c}">${v}</div></div>`).join('')}
    </div>
    <div class="tbl-wrap">
      <table>
        ${thdr('#','Destination ↕','Active Suppliers ↕','Hotels ↕','Tours & Act. ↕','Transport ↕','Pending ↕','Contract Value ↕','Payments MTD ↕','Outstanding ↕','Tier 1 ↕','Today ↕','This Week ↕')}
        ${frow(0,1,1,1,1,1,1,1,1,1,1,1,1)}
        <tbody>${destData.map((r,i)=>`<tr>
          <td class="rn">${i+1}</td>
          <td class="lnk">${r[0]}</td>
          <td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td>
          <td>${r[5]>0?`<span class="badge-teal">${r[5]}</span>`:'0'}</td>
          <td>${r[6]}</td><td><b>${r[7]}</b></td>
          <td style="color:${r[8]>0?'var(--red)':'inherit'};font-weight:${r[8]>0?700:400}">${r[8]>0?'£'+r[8].toLocaleString():'£0'}</td>
          <td class="lnk" style="color:var(--teal)">${r[9]}</td>
          <td class="lnk">${r[10]}</td><td class="lnk">${r[11]}</td>
        </tr>`).join('')}</tbody>
      </table>
      ${pgfoot('1–8',18,2)}
    </div>`;
}

// ── PAGE: ALL SUPPLIERS ──────────────────────────────────────────
function pg_sup_all(){
  return `
    <div class="page-title">All Suppliers</div>
    ${toolbar(
      ti('Search name or ID...','s-q',200,'oninput="supFilter()"'),
      sel([['','All Destinations'],'Dubai','Abu Dhabi','Oman','Egypt','Jordan','Morocco','Turkey','Maldives'],'s-dest','onchange="supFilter()"'),
      sel([['','All Types'],'Hotel','Tour','Transport','Activity','Restaurant','Cruise'],'s-type','onchange="supFilter()"'),
      sel([['','All Tiers'],['1','Tier 1'],['2','Tier 2'],['3','Tier 3']],'s-tier','onchange="supFilter()"'),
      sel([['','All Status'],'Active','Pending','Suspended'],'s-status','onchange="supFilter()"'),
      btn('Search','btn-navy','supFilter()'),
      btn('Clear','btn-white','supClear()'),
      `<div class="toolbar-r">${btn('&#8595; Export CSV','btn-white','toast(\'Exporting...\')')} ${btn('+ Add Supplier','btn-navy','openNewSupModal()')}</div>`
    )}
    <div class="tbl-wrap">
      <table>
        ${thdr('#','✓','ID ↕','Supplier ↕','Type ↕','Destination ↕','Tier ↕','Rating ↕','Status ↕','TAX/VAT No. ↕','Reg. No. ↕','Contact ↕','Contract End ↕','Commission ↕','Outstanding ↕','Manage')}
        ${frow(0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0)}
        <tbody id="sup-tbody"></tbody>
      </table>
      <div id="sup-foot"></div>
    </div>`;
}
function renderSupTable(data){
  const tbody=document.getElementById('sup-tbody');
  if(!tbody)return;
  tbody.innerHTML=data.map((s,i)=>`<tr>
    <td class="rn">${i+1}</td>
    <td><input type="checkbox"></td>
    <td class="mono">${s.id}</td>
    <td><a class="lnk" onclick='openSupModal(${JSON.stringify(s).replace(/'/g,"&#39;")})'>${s.name}</a></td>
    <td>${s.type}</td><td>${s.dest}</td>
    <td><span class="tbadge t${s.tier}">Tier ${s.tier}</span></td>
    <td>&#11088; ${s.rating}</td>
    <td><span class="pill ${sc(s.status)}">${s.status}</span></td>
    <td class="mono">${s.tax}</td>
    <td class="mono">${s.regNo}</td>
    <td>${s.contact}</td>
    <td>${s.contract}</td>
    <td>${s.commission}%</td>
    <td style="color:${s.outstanding>0?'var(--red)':'inherit'};font-weight:${s.outstanding>0?700:400}">${fmtGbp(s.outstanding)}</td>
    <td class="act">
      <a onclick='openSupModal(${JSON.stringify(s).replace(/'/g,"&#39;")})'>View</a>
      <a onclick='openEditSupModal(${JSON.stringify(s).replace(/'/g,"&#39;")})'>Edit</a>
      <a onclick='openDocsModal("${s.name}")'>Docs</a>
      <a onclick='openAuditModal("${s.name}")'>Audit</a>
      <a class="red" onclick="toast('Confirm delete: ${s.name}?')">Delete</a>
    </td>
  </tr>`).join('');
  const foot=document.getElementById('sup-foot');
  if(foot)foot.innerHTML=pgfoot(`1–${data.length}`,suppliers.length,Math.ceil(suppliers.length/20));
}
function supFilter(){
  const q=(document.getElementById('s-q')?.value||'').toLowerCase();
  const dest=document.getElementById('s-dest')?.value||'';
  const type=document.getElementById('s-type')?.value||'';
  const tier=document.getElementById('s-tier')?.value||'';
  const status=document.getElementById('s-status')?.value||'';
  const filtered=suppliers.filter(s=>
    (!q||s.name.toLowerCase().includes(q)||s.id.toLowerCase().includes(q))&&
    (!dest||s.dest===dest)&&(!type||s.type===type)&&
    (!tier||s.tier===+tier)&&(!status||s.status===status));
  renderSupTable(filtered);
}
function supClear(){['s-q','s-dest','s-type','s-tier','s-status'].forEach(id=>{const el=document.getElementById(id);if(el)el.tagName==='SELECT'?el.selectedIndex=0:el.value='';});renderSupTable(suppliers);toast('Filters cleared');}
window.supFilter=supFilter;window.supClear=supClear;

// ── PAGE: ONBOARDING ─────────────────────────────────────────────
function pg_sup_onboard(){
  const stages=[
    {label:'Application Submitted',cls:'s1',count:3,cards:[
      {t:'Blue Waters Hotel Group',m:'Dubai · Hotel · 2 days ago',docs:[],pct:25,btn:'Review'},
      {t:'Sahara Adventure Tours',m:'Morocco · Tour · 4 days ago',docs:[],pct:25,btn:'Review'},
      {t:'Istanbul Express',m:'Turkey · Transport · 1 day ago',docs:[],pct:25,btn:'Review'},
    ]},
    {label:'Document Verification',cls:'s2',count:2,cards:[
      {t:'Red Sea Divers',m:'Egypt · Activity',docs:[{l:'Company Reg',ok:true},{l:'TAX/VAT',ok:true},{l:'Insurance',ok:false}],pct:60,btn:'Chase Docs'},
      {t:'Petra Tours',m:'Jordan · Tour',docs:[{l:'Company Reg',ok:true},{l:'TAX/VAT',ok:true},{l:'Insurance',ok:true},{l:'Contract',ok:false}],pct:75,btn:'Send Contract'},
    ]},
    {label:'Contract Signing',cls:'s3',count:1,cards:[
      {t:'Maldives Sunset Cruises',m:'Maldives · Cruise',docs:[{l:'All docs verified',ok:true},{l:'Awaiting signature',ok:false}],pct:85,btn:'Resend Contract'},
    ]},
    {label:'Payment Setup',cls:'s4',count:1,cards:[
      {t:'Arabian Nights Dining',m:'Dubai · Restaurant',docs:[{l:'Bank details pending',ok:false}],pct:92,btn:'Follow Up'},
    ]},
    {label:'Live on Platform',cls:'s5',count:118,cards:[
      {t:'✓ 118 suppliers live',m:'All fully onboarded and active',docs:[],pct:100,btn:'View All'},
    ]},
  ];
  return `
    <div class="page-title">Supplier Onboarding</div>
    <div class="toolbar">
      <span style="font-size:12.5px;color:var(--text2);font-weight:600">Onboarding Pipeline — ${stages.reduce((a,s)=>a+s.count,0)} active applications</span>
      <div class="toolbar-r">${btn('&#8595; Export','btn-white','toast(\'Exporting...\')')} ${btn('+ New Application','btn-navy','openNewSupModal()')}</div>
    </div>
    <div class="pipeline">${stages.map(s=>`
      <div class="pipe-col">
        <div class="pipe-hd ${s.cls}"><span class="pipe-ht">${s.label}</span><span class="pipe-cnt">${s.count}</span></div>
        <div class="pipe-body">${s.cards.map(c=>`
          <div class="pcard">
            <div class="pcard-t">${c.t}</div>
            <div class="pcard-m">${c.m}</div>
            ${c.docs.length?`<div class="doc-row">${c.docs.map(d=>`<span class="dc ${d.ok?'ok':'miss'}">${d.ok?'✓':'✗'} ${d.l}</span>`).join('')}</div>`:''}
            <div class="pbar"><div style="width:${c.pct}%"></div></div>
            <div class="pcard-foot">${btn(c.btn,'btn-white btn-sm','toast(\'Opening...\')','')}</div>
          </div>`).join('')}
        </div>
      </div>`).join('')}
    </div>
    <div id="new-sup-form-wrap" style="display:none">${supplierFormHTML()}</div>
    ${btn('+ Start New Application Form','btn-navy','toggleNewSupForm()')}`;
}
function toggleNewSupForm(){const w=document.getElementById('new-sup-form-wrap');if(w){w.style.display=w.style.display==='none'?'block':'none';if(w.style.display==='block')w.scrollIntoView({behavior:'smooth'});}}
window.toggleNewSupForm=toggleNewSupForm;

// ── PAGE: CONTRACTS ──────────────────────────────────────────────
function pg_sup_contracts(){
  return `
    <div class="page-title">Contracts &amp; Documents</div>
    <div class="sum-cards">
      <div class="sum-card green"><div class="sc-lbl">Active Contracts</div><div class="sc-val green">131</div></div>
      <div class="sum-card orange"><div class="sc-lbl">Expiring (30 days)</div><div class="sc-val orange">3</div><div class="sc-sub">Renewal action required</div></div>
      <div class="sum-card red"><div class="sc-lbl">Expired</div><div class="sc-val red">2</div><div class="sc-sub">Immediate action needed</div></div>
      <div class="sum-card"><div class="sc-lbl">Total Documents</div><div class="sc-val">486</div></div>
    </div>
    ${toolbar(
      ti('Search supplier or document...','',200),
      sel(['All Document Types','Service Contract','Insurance Certificate','VAT Certificate','Company Registration','Owner ID / Passport','Other'],''),
      sel(['All Status','Valid','Expiring','Expired'],''),
      sel(['All Destinations','Dubai','Abu Dhabi','Oman','Egypt','Jordan','Morocco'],''),
      btn('Search','btn-navy','toast(\'Searching...\')'),
      `<div class="toolbar-r">${btn('+ Upload Document','btn-navy','openUploadModal()')} ${btn('+ New Contract','btn-white','openNewContractModal()')}</div>`
    )}
    <div class="tbl-wrap">
      <table>
        ${thdr('#','Supplier ↕','Document Type ↕','Document No. ↕','Destination ↕','Uploaded ↕','Expiry ↕','Contract Value ↕','Status ↕','Manage')}
        ${frow(0,1,1,1,1,1,1,1,1,0)}
        <tbody>${contracts.map((c,i)=>`<tr>
          <td class="rn">${i+1}</td>
          <td><a class="lnk" onclick='openContractModal(${JSON.stringify(c).replace(/'/g,"&#39;")})'>${c.supplier}</a></td>
          <td>${c.type}</td>
          <td class="mono">${c.id}</td>
          <td>${c.dest}</td>
          <td>${c.uploaded}</td>
          <td style="color:${c.status==='Expired'?'var(--red)':c.status==='Expiring'?'var(--orange)':'inherit'}">${c.expiry}</td>
          <td>${c.value}</td>
          <td><span class="pill ${sc(c.status)}">${c.status}</span></td>
          <td class="act">
            <a onclick='openContractModal(${JSON.stringify(c).replace(/'/g,"&#39;")})'>View</a>
            <a onclick='openEditContractModal(${JSON.stringify(c).replace(/'/g,"&#39;")})'>Edit</a>
            <a onclick="toast('Downloading ${c.id}...')">&#8595; Download</a>
            <a onclick="toast('Renewal started for ${c.id}')">Renew</a>
            <a class="red" onclick="toast('Delete ${c.id}?')">Delete</a>
          </td>
        </tr>`).join('')}</tbody>
      </table>
      ${pgfoot(`1–${contracts.length}`,486,5)}
    </div>`;
}

// ── PAGE: PAYMENTS ───────────────────────────────────────────────
function pg_sup_payments(){
  return `
    <div class="page-title">Payment Management</div>
    <div class="sum-cards">
      <div class="sum-card green"><div class="sc-lbl">Paid This Month</div><div class="sc-val green">£248,000</div><div class="sc-sub">↑ 12% vs last month</div></div>
      <div class="sum-card orange"><div class="sc-lbl">Pending Approval</div><div class="sc-val orange">£34,000</div><div class="sc-sub">3 invoices awaiting</div></div>
      <div class="sum-card red"><div class="sc-lbl">Overdue</div><div class="sc-val red">£14,400</div><div class="sc-sub">2 suppliers</div></div>
      <div class="sum-card"><div class="sc-lbl">YTD Total</div><div class="sc-val">£2,100,000</div><div class="sc-sub">↑ 18% vs last year</div></div>
    </div>
    ${toolbar(
      ti('Search supplier or invoice...','',200),
      sel(['All Status','Pending Approval','Approved','Paid','Overdue'],''),
      sel(['All Destinations','Dubai','Abu Dhabi','Oman','Egypt','Jordan'],''),
      `<input type="date" class="ti" value="2026-04-01">`,
      `<span style="font-size:12px;color:var(--text3)">–</span>`,
      `<input type="date" class="ti" value="2026-04-30">`,
      btn('Search','btn-navy','toast(\'Searching...\')'),
      `<div class="toolbar-r">${btn('Bulk Pay Selected','btn-white','toast(\'Select rows first...\')')} ${btn('+ New Invoice','btn-navy','openNewPaymentModal()')}</div>`
    )}
    <div class="tbl-wrap">
      <table>
        ${thdr('#','✓','Supplier ↕','Invoice No. ↕','Description ↕','Destination ↕','Amount ↕','Due Date ↕','Status ↕','Manage')}
        ${frow(0,0,1,1,1,1,1,1,1,0)}
        <tbody>${payments.map((p,i)=>{
          const actions = p.status==='Pending Approval'
            ? `<a onclick="toast('Payment approved!')">Approve</a><a onclick="toast('Viewing invoice...')">View</a>`
            : p.status==='Approved'
            ? `<a onclick="toast('Processing £${p.amount.toLocaleString()} payment...')">Pay Now</a><a onclick="toast('Viewing...')">View</a>`
            : p.status==='Overdue'
            ? `<a onclick="toast('Processing overdue payment...')">Pay Now</a><a onclick="toast('Chasing supplier')">Chase</a>`
            : `<a onclick="toast('Downloading receipt...')">&#8595; Receipt</a><a onclick="toast('Viewing...')">View</a>`;
          return `<tr>
            <td class="rn">${i+1}</td>
            <td><input type="checkbox"></td>
            <td class="lnk">${p.supplier}</td>
            <td class="mono">${p.id}</td>
            <td>${p.desc}</td>
            <td>${p.dest}</td>
            <td><b>£${p.amount.toLocaleString()}</b></td>
            <td style="color:${p.status==='Overdue'?'var(--red)':'inherit'}">${p.due}</td>
            <td><span class="pill ${sc(p.status)}">${p.status}</span></td>
            <td class="act">${actions}</td>
          </tr>`;
        }).join('')}</tbody>
      </table>
      ${pgfoot(`1–${payments.length}`,142,5)}
    </div>`;
}

// ── PAGE: RATES & PRICING ────────────────────────────────────────
function pg_sup_rates(){
  return `
    <div class="page-title">Rates &amp; Pricing</div>
    <p class="page-subtitle">Manage all supplier net rates, gross rates, commissions and seasonal pricing</p>
    ${toolbar(
      ti('Search supplier...','',180),
      sel(['All Destinations','Dubai','Abu Dhabi','Oman','Egypt','Jordan','Morocco','Turkey'],''),
      sel(['All Types','Hotel','Tour','Transport','Activity','Restaurant','Cruise'],''),
      sel(['All Seasons','Peak','High','Low','All Year'],''),
      sel(['All Status','Active','Inactive','Draft'],''),
      btn('Search','btn-navy','toast(\'Searching...\')'),
      `<div class="toolbar-r">${btn('&#8595; Export Rates','btn-white','toast(\'Exporting...\')')} ${btn('+ Add Rate','btn-navy','openNewRateModal()')}</div>`
    )}
    <div class="tbl-wrap">
      <table>
        ${thdr('#','Supplier ↕','Destination ↕','Type ↕','Season ↕','Period ↕','Net Rate ↕','Gross Rate ↕','Commission ↕','Currency ↕','Status ↕','Last Updated ↕','Manage')}
        ${frow(0,1,1,1,1,1,1,1,1,1,1,1,0)}
        <tbody>${rates.map((r,i)=>`<tr>
          <td class="rn">${i+1}</td>
          <td class="lnk">${r.supplier}</td>
          <td>${r.dest}</td><td>${r.type}</td>
          <td><span class="pill ${r.season==='Peak'?'p-red':r.season==='High'?'p-orange':r.season==='Low'?'p-blue':'p-gray'}">${r.season}</span></td>
          <td>${r.period}</td>
          <td><b>${r.net}</b></td><td>${r.gross}</td><td>${r.commission}</td><td>${r.currency}</td>
          <td><span class="pill p-green">${r.status}</span></td>
          <td style="color:var(--text3)">${r.lastUpdated}</td>
          <td class="act">
            <a onclick="openEditRateModal('${r.supplier}','${r.season}')">Edit</a>
            <a onclick="toast('Duplicating rate...')">Duplicate</a>
            <a class="red" onclick="toast('Delete rate?')">Delete</a>
          </td>
        </tr>`).join('')}</tbody>
      </table>
      ${pgfoot(`1–${rates.length}`,rates.length)}
    </div>`;
}

// ── PAGE: AUDIT TRAIL ────────────────────────────────────────────
function pg_sup_audit(){
  return `
    <div class="page-title">Audit Trail</div>
    <p class="page-subtitle">Complete log of all changes, approvals and actions across all suppliers</p>
    ${toolbar(
      ti('Search supplier or action...','',200),
      sel(['All Action Types','Contract Uploaded','Payment Approved','Payment Processed','Status Changed','Supplier Added','Supplier Edited','Rate Updated','Tier Changed','Document Expiry Alert','Auto-Reminder Sent','Notes Added'],''),
      sel(['All Users','Ajay Kawa','Priya Sharma','Ravi Patel','System'],''),
      `<input type="date" class="ti" value="2026-04-01">`,
      `<span style="font-size:12px;color:var(--text3)">–</span>`,
      `<input type="date" class="ti" value="2026-04-26">`,
      btn('Search','btn-navy','toast(\'Filtering audit...\')'),
      `<div class="toolbar-r">${btn('&#8595; Export Log','btn-white','toast(\'Exporting audit log...\')','')}</div>`
    )}
    <div class="tbl-wrap">
      <table>
        ${thdr('#','Timestamp ↕','User ↕','Action ↕','Supplier ↕','Detail ↕')}
        ${frow(0,1,1,1,1,1)}
        <tbody>${auditLog.map((a,i)=>`<tr>
          <td class="rn">${i+1}</td>
          <td class="mono" style="white-space:nowrap">${a.ts}</td>
          <td><span style="font-weight:600">${a.user}</span></td>
          <td><span style="display:inline-block;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600;background:${a.color}22;color:${a.color}">${a.action}</span></td>
          <td class="lnk">${a.supplier}</td>
          <td style="font-size:12px;color:var(--text2);max-width:400px">${a.detail}</td>
        </tr>`).join('')}</tbody>
      </table>
      ${pgfoot(`1–${auditLog.length}`,1247,5)}
    </div>`;
}

// ── PAGE: TIER MANAGEMENT ─────────────────────────────────────────
function pg_sup_tiers(){
  const tiers=[
    {cls:'tc1',label:'Tier 1',title:'Premium',hotels:50,tours:18,other:8,features:['Homepage featured placement','Priority in all search results','Gold badge on listing','Commission: 15–20%','Dedicated account manager','Featured in email campaigns','Exclusive promotional offers','Priority support SLA 4hrs']},
    {cls:'tc2',label:'Tier 2',title:'Standard',hotels:42,tours:31,other:14,features:['Standard search listing','Appears on category pages','Silver badge on listing','Commission: 10–15%','Shared account manager','Standard email campaigns','Priority support SLA 24hrs','Access to supplier portal']},
    {cls:'tc3',label:'Tier 3',title:'Budget',hotels:10,tours:12,other:8,features:['Basic listing only','Searchable on platform','No badge','Commission: 8–12%','Self-service portal only','No email campaign inclusion','Email support SLA 48hrs','Basic reporting only']},
  ];
  return `
    <div class="page-title">Tier Management</div>
    <p class="page-subtitle">Configure supplier tiers, website display priority and commission rules</p>
    <div class="tier-grid">${tiers.map(t=>`
      <div class="tier-card ${t.cls}">
        <div class="tier-hd">
          <span>${t.label} — ${t.title}</span>
          ${btn('Edit Rules','btn-white btn-sm',`toast('Editing ${t.label} rules...')`)}
        </div>
        <div class="tier-body">
          <div class="tier-stats">
            <div><div class="ts-val">${t.hotels}</div><div class="ts-lbl">Hotels</div></div>
            <div><div class="ts-val">${t.tours}</div><div class="ts-lbl">Tours</div></div>
            <div><div class="ts-val">${t.other}</div><div class="ts-lbl">Other</div></div>
          </div>
          ${t.features.map((f,i)=>`<div class="tf ${i<(t.cls==='tc3'?2:5)?'yes':'no'}">${f}</div>`).join('')}
          <div style="margin-top:12px">${btn(`View All ${t.label} Suppliers`,'btn-navy',`supTierFilter(${t.cls==='tc1'?1:t.cls==='tc2'?2:3})`,'style="width:100%"')}</div>
        </div>
      </div>`).join('')}
    </div>`;
}
function supTierFilter(tier){setSecondary(1);setTimeout(()=>{const el=document.getElementById('s-tier');if(el){el.value=tier;supFilter();}},100);}
window.supTierFilter=supTierFilter;

// ── PAGE: DESTINATIONS ────────────────────────────────────────────
function pg_sup_dest(){
  const dests=[
    {flag:'🇦🇪',name:'Dubai',sup:38,t1:14,active:36,value:'£842K'},
    {flag:'🇦🇪',name:'Abu Dhabi',sup:24,t1:8,active:23,value:'£521K'},
    {flag:'🇴🇲',name:'Oman',sup:18,t1:6,active:18,value:'£398K'},
    {flag:'🇪🇬',name:'Egypt',sup:14,t1:4,active:11,value:'£287K'},
    {flag:'🇯🇴',name:'Jordan',sup:10,t1:3,active:10,value:'£198K'},
    {flag:'🇲🇦',name:'Morocco',sup:8,t1:2,active:7,value:'£164K'},
    {flag:'🇹🇷',name:'Turkey',sup:6,t1:1,active:4,value:'£142K'},
    {flag:'🇲🇻',name:'Maldives',sup:4,t1:2,active:3,value:'£98K'},
  ];
  return `
    <div class="page-title">Destinations</div>
    <p class="page-subtitle">Manage destination coverage, regional settings and supplier grouping</p>
    <div class="toolbar"><div class="toolbar-r">${btn('+ Add Destination','btn-navy','openNewDestModal()')}</div></div>
    <div class="dest-grid">${dests.map(d=>`
      <div class="dest-card">
        <div class="dest-flag">${d.flag}</div>
        <div class="dest-info" style="flex:1">
          <h4>${d.name}</h4>
          <span>${d.sup} suppliers · Tier 1: ${d.t1} · Active: ${d.active}</span>
          <span style="color:var(--green);font-weight:600">${d.value} MTD</span>
        </div>
        ${btn('Manage','btn-white btn-sm',`toast('Opening ${d.name}...')`)}
      </div>`).join('')}
    </div>`;
}

// ── PAGE: HOTEL CONTENT ──────────────────────────────────────────
function pg_hotel_content(){
  const hotels=[
    {id:'H-0081',name:'Atlantis The Palm',star:'5',area:'Palm Jumeirah',type:'Resort',status:'Active',mapping:'Mapped',supp:'Yes',tier:1,rank:1},
    {id:'H-0082',name:'Burj Al Arab Jumeirah',star:'7',area:'Jumeirah',type:'Luxury',status:'Active',mapping:'Mapped',supp:'Yes',tier:1,rank:2},
    {id:'H-0083',name:'Al Maha Desert Resort',star:'5',area:'Dubai Desert',type:'Desert Resort',status:'Active',mapping:'Mapped',supp:'Yes',tier:1,rank:3},
    {id:'H-0086',name:'Oman Luxury Resorts',star:'5',area:'Muscat',type:'Resort',status:'Active',mapping:'Mapped',supp:'No',tier:1,rank:4},
    {id:'H-0091',name:'Jumeirah Beach Resort',star:'5',area:'JBR',type:'Beach Resort',status:'Active',mapping:'Mapped',supp:'Yes',tier:1,rank:5},
    {id:'H-0097',name:'Marrakech Riad Collection',star:'4',area:'Medina',type:'Boutique',status:'Active',mapping:'Mapped',supp:'Yes',tier:1,rank:6},
    {id:'H-0096',name:'Pyramids View Hotel',star:'4',area:'Giza',type:'Hotel',status:'Suspended',mapping:'Not Mapped',supp:'No',tier:2,rank:7},
    {id:'H-0094',name:'Blue Waters Hotel Group',star:'5',area:'Blue Waters',type:'Hotel',status:'Pending',mapping:'Pending',supp:'No',tier:2,rank:8},
  ];
  return `
    <div class="page-title">Manage Hotels</div>
    <div class="toolbar">
      <input class="ti" placeholder="Destination" style="width:180px">
      ${btn('Search','btn-navy','toast(\'Searching hotels...\')')}
      <div class="toolbar-r">${btn('+ Add Hotel','btn-navy','toast(\'Opening add hotel form...\')')}</div>
    </div>
    <div class="tbl-wrap">
      <table>
        ${thdr('#','✓','ID ↕','Hotel ↕','Star ↕','Area ↕','Type ↕','Status ↕','Online Mapping ↕','Supplements ↕','Tier ↕','Preferred Rank ↕','Featured ↕','Manage')}
        ${frow(0,0,1,1,1,1,1,1,1,1,1,1,0,0)}
        <tbody>${hotels.map((h,i)=>`<tr>
          <td class="rn">${i+1}</td>
          <td><input type="checkbox"></td>
          <td class="mono">${h.id}</td>
          <td class="lnk">${h.name}</td>
          <td>${h.star}★</td>
          <td>${h.area}</td>
          <td>${h.type}</td>
          <td><span class="pill ${sc(h.status)}">${h.status}</span></td>
          <td><span class="pill ${h.mapping==='Mapped'?'p-green':h.mapping==='Pending'?'p-orange':'p-gray'}">${h.mapping}</span></td>
          <td>${h.supp==='Yes'?'<span class="pill p-green">Yes</span>':'<span class="pill p-gray">No</span>'}</td>
          <td><span class="tbadge t${h.tier}">Tier ${h.tier}</span></td>
          <td style="text-align:center">${h.rank}</td>
          <td style="text-align:center"><label class="tog"><input type="checkbox" ${h.supp==='Yes'?'checked':''}><span class="tog-sl"></span></label></td>
          <td class="act">
            <a onclick="toast('Editing ${h.name}...')">Edit</a>
            <a onclick="toast('Opening rates...')">Rates</a>
            <a onclick="toast('Opening contracts...')">Contracts</a>
            <a onclick="toast('Opening content...')">Content</a>
          </td>
        </tr>`).join('')}</tbody>
      </table>
      ${pgfoot(`1–${hotels.length}`,50,3)}
    </div>`;
}

// ── PAGE: HOTEL RATES ─────────────────────────────────────────────
function pg_hotel_rates(){
  return `
    <div class="page-title">Manage Rates and Inventory</div>
    <p class="page-subtitle">Manage hotel room rates, seasonal pricing and allotments</p>
    ${toolbar(
      ti('Search hotel...','',180),
      sel(['All Destinations','Dubai','Abu Dhabi','Oman','Egypt'],''),
      sel(['All Room Types','Standard','Deluxe','Suite','Villa','Penthouse'],''),
      sel(['All Seasons','Peak','High','Low'],''),
      btn('Search','btn-navy','toast(\'Searching...\')'),
      `<div class="toolbar-r">${btn('+ Add Rate','btn-navy','openNewRateModal()')}</div>`
    )}
    <div class="tbl-wrap">
      <table>
        ${thdr('#','Hotel ↕','Room Type ↕','Season ↕','Period ↕','Net Rate ↕','Gross Rate ↕','Commission ↕','Allotment ↕','Booked ↕','Available ↕','Status ↕','Manage')}
        ${frow(0,1,1,1,1,1,1,1,1,1,1,1,0)}
        <tbody>${[
          ['Atlantis The Palm','Deluxe Room','Peak','Jun–Aug 2026','£285','£336','18%','200','147','53','Active'],
          ['Atlantis The Palm','Ocean Suite','Peak','Jun–Aug 2026','£680','£802','18%','50','38','12','Active'],
          ['Atlantis The Palm','Deluxe Room','Low','Sep–Nov 2025','£195','£230','18%','200','82','118','Active'],
          ['Burj Al Arab Jumeirah','Duplex Suite','Peak','Dec 2025–Jan 2026','£1,850','£2,220','20%','100','89','11','Active'],
          ['Oman Luxury Resorts','Beach Villa','Peak','Nov–Feb 2026','£490','£568','16%','80','62','18','Active'],
          ['Jumeirah Beach Resort','Sea View Room','High','May–Aug 2026','£310','£362','19%','150','92','58','Active'],
        ].map((r,i)=>`<tr>
          <td class="rn">${i+1}</td>
          <td class="lnk">${r[0]}</td><td>${r[1]}</td>
          <td><span class="pill ${r[2]==='Peak'?'p-red':r[2]==='High'?'p-orange':'p-blue'}">${r[2]}</span></td>
          <td>${r[3]}</td><td><b>${r[4]}</b></td><td>${r[5]}</td><td>${r[6]}</td>
          <td>${r[7]}</td><td>${r[8]}</td>
          <td style="color:+r[9]<20?'var(--red)':+r[9]<50?'var(--orange)':'inherit';font-weight:${+r[9]<20?700:400}">${r[9]}</td>
          <td><span class="pill p-green">${r[10]}</span></td>
          <td class="act"><a onclick="toast('Editing rate...')">Edit</a><a onclick="toast('Duplicating...')">Duplicate</a><a class="red" onclick="toast('Delete?')">Delete</a></td>
        </tr>`).join('')}</tbody>
      </table>
    </div>`;
}

// ── PAGE: ACTIVITIES ─────────────────────────────────────────────
function pg_act_all(){
  return `
    <div class="page-title">Manage Activities</div>
    ${toolbar(
      ti('Search activity or supplier...','',200),
      sel(['All Types','Tour','Transfer','Experience','Cruise','Diving','Balloon'],''),
      sel(['All Destinations','Dubai','Egypt','Jordan','Oman','Turkey'],''),
      btn('Search','btn-navy','toast(\'Searching...\')'),
      `<div class="toolbar-r">${btn('+ Add Activity','btn-navy','toast(\'Opening form...\')')}</div>`
    )}
    <div class="tbl-wrap">
      <table>
        ${thdr('#','Supplier ↕','Activity Type ↕','Destination ↕','Duration ↕','Commission ↕','Min Pax ↕','Status ↕','Manage')}
        ${frow(0,1,1,1,1,1,1,1,0)}
        <tbody>${[
          ['Desert Tracks Tours','Desert Safari','Dubai','4–8 hrs','15%','2','Active'],
          ['Nile Tours Egypt','River Cruise','Egypt','1–7 days','12%','10','Pending'],
          ['Petra Tours & Travel','Historical Tour','Jordan','Full day','14%','1','Active'],
          ['Red Sea Divers','Diving / Snorkelling','Egypt','Half day','16%','2','Active'],
          ['Cappadocia Balloon Tours','Hot Air Balloon','Turkey','3 hrs','17%','2','Active'],
          ['Abu Dhabi Experiences','City Tour','Abu Dhabi','4 hrs','14%','1','Active'],
          ['Dead Sea Wellness Spa','Wellness Package','Jordan','Full day','14%','1','Active'],
          ['Maldives Sunset Cruises','Sunset Cruise','Maldives','3 hrs','18%','4','Pending'],
        ].map((r,i)=>`<tr>
          <td class="rn">${i+1}</td>
          <td class="lnk">${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td>${r[5]}</td>
          <td><span class="pill ${sc(r[6])}">${r[6]}</span></td>
          <td class="act"><a onclick="toast('Editing...')">Edit</a><a onclick="toast('Viewing...')">View</a><a onclick="toast('Opening rates...')">Rates</a></td>
        </tr>`).join('')}</tbody>
      </table>
    </div>`;
}

// ── SUPPLIER FORM HTML ────────────────────────────────────────────
function supplierFormHTML(s={}){
  return `
    <div class="form-panel" style="margin-top:14px">
      <div class="form-head">Company Information</div>
      <div class="form-body">
        <div class="fgrid">
          <div class="fg"><label>Company Name <span class="req">*</span></label><input class="fc" value="${s.name||''}" placeholder="Full legal company name"></div>
          <div class="fg"><label>Supplier Type <span class="req">*</span></label><select class="fc"><option>Hotel / Accommodation</option><option>Tour Operator</option><option>Activity Provider</option><option>Transport / Transfer</option><option>Restaurant / Dining</option><option>Cruise / Boat</option></select></div>
          <div class="fg"><label>Destination <span class="req">*</span></label><select class="fc"><option>Dubai</option><option>Abu Dhabi</option><option>Oman</option><option>Egypt</option><option>Jordan</option><option>Morocco</option><option>Turkey</option><option>Maldives</option></select></div>
          <div class="fg"><label>Status</label><select class="fc"><option>Active</option><option>Pending</option><option>Suspended</option></select></div>
          <div class="fg"><label>Company Registration No. <span class="req">*</span></label><input class="fc" value="${s.regNo||''}" placeholder="Official registration number"></div>
          <div class="fg"><label>TAX / VAT Number <span class="req">*</span></label><input class="fc" value="${s.tax||''}" placeholder="TAX or VAT registration number"></div>
          <div class="fg"><label>Website</label><input class="fc" type="url" placeholder="https://..."></div>
          <div class="fg"><label>Years in Operation</label><input class="fc" type="number" placeholder="e.g. 5" min="0"></div>
        </div>
      </div>
    </div>
    <div class="form-panel">
      <div class="form-head">Primary Contact</div>
      <div class="form-body">
        <div class="fgrid">
          <div class="fg"><label>Contact Name <span class="req">*</span></label><input class="fc" value="${s.contact||''}" placeholder="Full name"></div>
          <div class="fg"><label>Job Title</label><input class="fc" placeholder="Position"></div>
          <div class="fg"><label>Email <span class="req">*</span></label><input class="fc" type="email" value="${s.email||''}" placeholder="email@company.com"></div>
          <div class="fg"><label>Phone</label><input class="fc" type="tel" value="${s.phone||''}" placeholder="+971..."></div>
        </div>
      </div>
    </div>
    <div class="form-panel">
      <div class="form-head">Commercial Settings</div>
      <div class="form-body">
        <div class="fgrid">
          <div class="fg"><label>Assign Tier</label><select class="fc"><option ${s.tier===1?'selected':''}>Tier 1 – Premium</option><option ${s.tier===2?'selected':''}>Tier 2 – Standard</option><option ${s.tier===3?'selected':''}>Tier 3 – Budget</option></select></div>
          <div class="fg"><label>Commission Rate (%)</label><input class="fc" type="number" value="${s.commission||''}" placeholder="e.g. 15" min="0" max="50"></div>
          <div class="fg"><label>Payment Terms</label><select class="fc"><option ${s.payTerms==='Net 30'?'selected':''}>Net 30</option><option ${s.payTerms==='Net 15'?'selected':''}>Net 15</option><option ${s.payTerms==='Net 60'?'selected':''}>Net 60</option><option ${s.payTerms==='On Completion'?'selected':''}>On Completion</option></select></div>
          <div class="fg"><label>Currency</label><select class="fc"><option ${s.currency==='GBP'?'selected':''}>GBP (£)</option><option>USD ($)</option><option>AED (د.إ)</option><option>EUR (€)</option></select></div>
        </div>
      </div>
    </div>
    <div class="form-panel">
      <div class="form-head">Document Uploads</div>
      <div class="form-body">
        <div class="up-grid">
          ${[['📄','Company Registration','PDF, JPG up to 10MB'],['🧾','TAX / VAT Certificate','PDF, JPG up to 10MB'],['🛡️','Insurance Certificate','PDF up to 10MB'],['✍️','Signed Contract','PDF up to 20MB'],['🪪','Owner ID / Passport','PDF, JPG up to 5MB'],['📎','Other Documents','Any files']].map(([ic,l,s])=>`
          <div class="up-zone" onclick="this.querySelector('input').click()">
            <input type="file" hidden onchange="markUpload(this)">
            <div class="up-icon">${ic}</div>
            <div class="up-lbl">${l}</div>
            <div class="up-sub">${s}</div>
          </div>`).join('')}
        </div>
      </div>
    </div>
    <div class="form-panel">
      <div class="form-head">Notes</div>
      <div class="form-body">
        <textarea class="fc" style="height:80px;width:100%" placeholder="Internal notes about this supplier..."></textarea>
      </div>
    </div>`;
}

// ── MODALS ────────────────────────────────────────────────────────
function openModal(title, body, footer=''){
  document.getElementById('modal-title').textContent=title;
  document.getElementById('modal-body').innerHTML=body+(footer?`<div class="modal-foot">${footer}</div>`:'');
  document.getElementById('modal-overlay').classList.add('open');
  document.getElementById('modal-box').classList.add('open');
}
function closeModal(){
  document.getElementById('modal-overlay').classList.remove('open');
  document.getElementById('modal-box').classList.remove('open');
}
window.closeModal=closeModal;

function openSupModal(s){
  openModal(`Supplier — ${s.name}`,`
    <div class="tab-bar">
      <div class="tab active" onclick="switchTab(this,'st-details')">Details</div>
      <div class="tab" onclick="switchTab(this,'st-contracts')">Contracts</div>
      <div class="tab" onclick="switchTab(this,'st-payments')">Payments</div>
      <div class="tab" onclick="switchTab(this,'st-rates')">Rates</div>
      <div class="tab" onclick="switchTab(this,'st-audit')">Audit Trail</div>
    </div>
    <div id="st-details" class="tab-panel active">
      <div class="fgrid" style="margin-bottom:12px">
        <div><div style="font-size:11px;color:var(--text3)">ID</div><div class="mono">${s.id}</div></div>
        <div><div style="font-size:11px;color:var(--text3)">Type</div><div>${s.type}</div></div>
        <div><div style="font-size:11px;color:var(--text3)">Destination</div><div>${s.dest}</div></div>
        <div><div style="font-size:11px;color:var(--text3)">Status</div><div><span class="pill ${sc(s.status)}">${s.status}</span></div></div>
        <div><div style="font-size:11px;color:var(--text3)">Tier</div><div><span class="tbadge t${s.tier}">Tier ${s.tier}</span></div></div>
        <div><div style="font-size:11px;color:var(--text3)">Commission</div><div>${s.commission}%</div></div>
        <div><div style="font-size:11px;color:var(--text3)">Payment Terms</div><div>${s.payTerms}</div></div>
        <div><div style="font-size:11px;color:var(--text3)">Currency</div><div>${s.currency}</div></div>
        <div><div style="font-size:11px;color:var(--text3)">TAX / VAT No.</div><div class="mono">${s.tax}</div></div>
        <div><div style="font-size:11px;color:var(--text3)">Company Reg No.</div><div class="mono">${s.regNo}</div></div>
        <div><div style="font-size:11px;color:var(--text3)">Contract End</div><div>${s.contract}</div></div>
        <div><div style="font-size:11px;color:var(--text3)">Outstanding</div><div style="color:${s.outstanding>0?'var(--red)':'var(--green)'};font-weight:700">${fmtGbp(s.outstanding)}</div></div>
        <div><div style="font-size:11px;color:var(--text3)">Contact</div><div>${s.contact}</div></div>
        <div><div style="font-size:11px;color:var(--text3)">Email</div><div><a class="lnk" href="mailto:${s.email}">${s.email}</a></div></div>
        <div><div style="font-size:11px;color:var(--text3)">Phone</div><div>${s.phone}</div></div>
        <div><div style="font-size:11px;color:var(--text3)">Rating</div><div>⭐ ${s.rating}</div></div>
      </div>
    </div>
    <div id="st-contracts" class="tab-panel">
      <p style="font-size:12.5px;color:var(--text2);margin-bottom:10px">Contracts and documents for ${s.name}</p>
      ${contracts.filter(c=>c.supplier===s.name).length===0?'<p style="color:var(--text3)">No documents found.</p>':
      contracts.filter(c=>c.supplier===s.name).map(c=>`
        <div style="border:1px solid var(--border-lt);border-radius:var(--r);padding:10px;margin-bottom:8px">
          <div style="display:flex;align-items:center;justify-content:space-between">
            <div><b>${c.type}</b> <span class="mono" style="margin-left:8px">${c.id}</span></div>
            <span class="pill ${sc(c.status)}">${c.status}</span>
          </div>
          <div style="font-size:12px;color:var(--text3);margin-top:4px">Uploaded: ${c.uploaded} · Expiry: ${c.expiry} · ${c.value!=='—'?'Value: '+c.value:''}</div>
          <div style="font-size:12px;color:var(--text2);margin-top:4px">${c.notes}</div>
          <div style="margin-top:8px;display:flex;gap:8px">
            ${btn('&#8595; Download','btn-white btn-sm',`toast('Downloading ${c.file}...')`)}
            ${btn('Edit','btn-white btn-sm',`closeModal();openEditContractModal(${JSON.stringify(c).replace(/'/g,"&#39;")})`)}
            ${btn('Renew','btn-white btn-sm',`toast('Starting renewal for ${c.id}')`)}
          </div>
        </div>`).join('')}
      <div style="margin-top:12px">${btn('+ Upload New Document','btn-navy','closeModal();openUploadModal()')}</div>
    </div>
    <div id="st-payments" class="tab-panel">
      <p style="font-size:12.5px;color:var(--text2);margin-bottom:10px">Payment history for ${s.name}</p>
      ${payments.filter(p=>p.supplier===s.name).length===0?'<p style="color:var(--text3)">No payments found.</p>':
      payments.filter(p=>p.supplier===s.name).map(p=>`
        <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border-lt)">
          <div>
            <div style="font-weight:600;font-size:12.5px">${p.desc}</div>
            <div style="font-size:11.5px;color:var(--text3)">${p.id} · Due: ${p.due}</div>
          </div>
          <div style="display:flex;align-items:center;gap:12px">
            <b style="font-size:14px">£${p.amount.toLocaleString()}</b>
            <span class="pill ${sc(p.status)}">${p.status}</span>
          </div>
        </div>`).join('')}
    </div>
    <div id="st-rates" class="tab-panel">
      <p style="font-size:12.5px;color:var(--text2);margin-bottom:10px">Rates for ${s.name}</p>
      ${rates.filter(r=>r.supplier===s.name).length===0?'<p style="color:var(--text3)">No rates configured.</p>':
      rates.filter(r=>r.supplier===s.name).map(r=>`
        <div style="border:1px solid var(--border-lt);border-radius:var(--r);padding:10px;margin-bottom:8px;display:flex;align-items:center;justify-content:space-between">
          <div>
            <span class="pill ${r.season==='Peak'?'p-red':r.season==='High'?'p-orange':'p-blue'}" style="margin-right:8px">${r.season}</span>
            <b>${r.period}</b>
          </div>
          <div style="display:flex;gap:20px;font-size:12.5px">
            <div><div style="font-size:10px;color:var(--text3)">Net</div><b>${r.net}</b></div>
            <div><div style="font-size:10px;color:var(--text3)">Gross</div><b>${r.gross}</b></div>
            <div><div style="font-size:10px;color:var(--text3)">Commission</div>${r.commission}</div>
          </div>
          ${btn('Edit','btn-white btn-sm',`toast('Editing rate...')`)}
        </div>`).join('')}
    </div>
    <div id="st-audit" class="tab-panel">
      <p style="font-size:12.5px;color:var(--text2);margin-bottom:10px">Audit trail for ${s.name}</p>
      <div class="audit-list">${auditLog.filter(a=>a.supplier===s.name).map(a=>`
        <div class="audit-item">
          <div class="audit-dot" style="background:${a.color}"></div>
          <div class="audit-content">
            <div class="audit-action">${a.action}</div>
            <div class="audit-meta">${a.ts} · ${a.user}</div>
            <div class="audit-detail">${a.detail}</div>
          </div>
        </div>`).join('')}
      </div>
    </div>`,
    `${btn('Edit Supplier','btn-white',`closeModal();openEditSupModal(${JSON.stringify(s).replace(/'/g,"&#39;")})`)} ${btn('Close','btn-navy','closeModal()')}`
  );
}
window.openSupModal=openSupModal;

function openEditSupModal(s){
  openModal(`Edit Supplier — ${s.name}`, supplierFormHTML(s),
    `${btn('Cancel','btn-white','closeModal()')} ${btn('Save as Draft','btn-white','toast(\'Saved as draft\')')} ${btn('Save Changes','btn-navy','toast(\'Changes saved!\');closeModal()')}`
  );
}
window.openEditSupModal=openEditSupModal;

function openNewSupModal(){
  openModal('New Supplier Application', supplierFormHTML(),
    `${btn('Cancel','btn-white','closeModal()')} ${btn('Save Draft','btn-white','toast(\'Draft saved\')')} ${btn('Submit Application','btn-navy','toast(\'Application submitted!\');closeModal()')}`
  );
}
window.openNewSupModal=openNewSupModal;

function openContractModal(c){
  openModal(`Contract — ${c.id}`,`
    <div class="fgrid" style="margin-bottom:12px">
      <div><div style="font-size:11px;color:var(--text3)">Supplier</div><div style="font-weight:600">${c.supplier}</div></div>
      <div><div style="font-size:11px;color:var(--text3)">Document Type</div><div>${c.type}</div></div>
      <div><div style="font-size:11px;color:var(--text3)">Document No.</div><div class="mono">${c.id}</div></div>
      <div><div style="font-size:11px;color:var(--text3)">Destination</div><div>${c.dest}</div></div>
      <div><div style="font-size:11px;color:var(--text3)">Uploaded</div><div>${c.uploaded}</div></div>
      <div><div style="font-size:11px;color:var(--text3)">Expiry Date</div><div style="color:${c.status==='Expired'?'var(--red)':c.status==='Expiring'?'var(--orange)':'inherit'};font-weight:${c.status!=='Valid'?700:400}">${c.expiry}</div></div>
      <div><div style="font-size:11px;color:var(--text3)">Contract Value</div><div>${c.value}</div></div>
      <div><div style="font-size:11px;color:var(--text3)">Status</div><div><span class="pill ${sc(c.status)}">${c.status}</span></div></div>
    </div>
    <div style="background:var(--bg-page);border:1px solid var(--border-lt);border-radius:var(--r);padding:12px;margin-bottom:12px">
      <div style="font-size:11px;color:var(--text3);margin-bottom:4px;font-weight:600">NOTES</div>
      <div style="font-size:12.5px">${c.notes}</div>
    </div>
    <div style="border:1px dashed var(--border);border-radius:var(--r);padding:20px;text-align:center;background:var(--bg-page)">
      <div style="font-size:24px;margin-bottom:6px">📄</div>
      <div style="font-size:13px;font-weight:600;margin-bottom:4px">${c.file}</div>
      <div style="font-size:12px;color:var(--text3)">Click Download to retrieve the file</div>
    </div>`,
    `${btn('&#8595; Download','btn-white',`toast('Downloading ${c.file}...')`)} ${btn('Edit','btn-white',`closeModal();openEditContractModal(${JSON.stringify(c).replace(/'/g,"&#39;")})`)} ${btn('Renew','btn-white',`toast('Starting renewal...')`)} ${btn('Close','btn-navy','closeModal()')}`
  );
}
window.openContractModal=openContractModal;

function openEditContractModal(c){
  openModal(`Edit Contract — ${c.id}`,`
    <div class="form-panel"><div class="form-head">Contract Details</div><div class="form-body">
      <div class="fgrid">
        <div class="fg"><label>Supplier</label><input class="fc" value="${c.supplier}"></div>
        <div class="fg"><label>Document Type</label><select class="fc"><option>Service Contract</option><option>Insurance Certificate</option><option>VAT Certificate</option><option>Company Registration</option><option>Owner ID / Passport</option></select></div>
        <div class="fg"><label>Document No.</label><input class="fc" value="${c.id}"></div>
        <div class="fg"><label>Destination</label><input class="fc" value="${c.dest}"></div>
        <div class="fg"><label>Expiry Date</label><input class="fc" type="date" value="2025-12-31"></div>
        <div class="fg"><label>Contract Value</label><input class="fc" value="${c.value}"></div>
        <div class="fg"><label>Status</label><select class="fc"><option>Valid</option><option>Expiring</option><option>Expired</option></select></div>
      </div>
    </div></div>
    <div class="form-panel"><div class="form-head">Notes</div><div class="form-body">
      <textarea class="fc" style="height:80px;width:100%">${c.notes}</textarea>
    </div></div>
    <div class="form-panel"><div class="form-head">Replace Document</div><div class="form-body">
      <div class="up-zone" onclick="this.querySelector('input').click()" style="max-width:300px">
        <input type="file" hidden onchange="markUpload(this)">
        <div class="up-icon">📄</div>
        <div class="up-lbl">Upload replacement file</div>
        <div class="up-sub">PDF up to 20MB</div>
      </div>
    </div></div>`,
    `${btn('Cancel','btn-white','closeModal()')} ${btn('Save Changes','btn-navy','toast(\'Contract updated!\');closeModal()')}`
  );
}
window.openEditContractModal=openEditContractModal;

function openNewContractModal(){
  openModal('New Contract / Document Upload',`
    <div class="form-panel"><div class="form-head">Document Details</div><div class="form-body">
      <div class="fgrid">
        <div class="fg"><label>Supplier <span class="req">*</span></label><select class="fc"><option value="">Select supplier...</option>${suppliers.map(s=>`<option>${s.name}</option>`).join('')}</select></div>
        <div class="fg"><label>Document Type <span class="req">*</span></label><select class="fc"><option>Service Contract</option><option>Insurance Certificate</option><option>VAT Certificate</option><option>Company Registration</option><option>Owner ID / Passport</option><option>Other</option></select></div>
        <div class="fg"><label>Document Number</label><input class="fc" placeholder="Auto-generated if blank"></div>
        <div class="fg"><label>Destination</label><select class="fc"><option>Dubai</option><option>Abu Dhabi</option><option>Oman</option><option>Egypt</option><option>Jordan</option><option>Morocco</option><option>Turkey</option><option>Maldives</option></select></div>
        <div class="fg"><label>Expiry Date</label><input class="fc" type="date"></div>
        <div class="fg"><label>Contract Value (£)</label><input class="fc" type="number" placeholder="0"></div>
      </div>
    </div></div>
    <div class="form-panel"><div class="form-head">Upload File <span class="req">*</span></div><div class="form-body">
      <div class="up-zone" onclick="this.querySelector('input').click()" style="max-width:300px">
        <input type="file" hidden onchange="markUpload(this)">
        <div class="up-icon">📄</div>
        <div class="up-lbl">Click to upload document</div>
        <div class="up-sub">PDF, JPG, PNG up to 20MB</div>
      </div>
    </div></div>
    <div class="form-panel"><div class="form-head">Notes</div><div class="form-body">
      <textarea class="fc" style="height:70px;width:100%" placeholder="Internal notes..."></textarea>
    </div></div>`,
    `${btn('Cancel','btn-white','closeModal()')} ${btn('Save','btn-navy','toast(\'Document saved!\');closeModal()')}`
  );
}
window.openNewContractModal=openNewContractModal;

function openUploadModal(){
  openModal('Upload Document',`
    <div class="form-panel"><div class="form-head">Document Upload</div><div class="form-body">
      <div class="fgrid-2" style="margin-bottom:12px">
        <div class="fg"><label>Supplier <span class="req">*</span></label><select class="fc"><option value="">Select supplier...</option>${suppliers.map(s=>`<option>${s.name}</option>`).join('')}</select></div>
        <div class="fg"><label>Document Type <span class="req">*</span></label><select class="fc"><option>Service Contract</option><option>Insurance Certificate</option><option>VAT Certificate</option><option>Company Registration</option><option>Owner ID</option></select></div>
        <div class="fg"><label>Expiry Date</label><input class="fc" type="date"></div>
        <div class="fg"><label>Notes</label><input class="fc" placeholder="Optional notes..."></div>
      </div>
      <div class="up-zone" onclick="this.querySelector('input').click()" style="max-width:400px">
        <input type="file" hidden onchange="markUpload(this)">
        <div class="up-icon">📎</div>
        <div class="up-lbl">Drop file here or click to upload</div>
        <div class="up-sub">PDF, JPG, PNG up to 20MB</div>
      </div>
    </div></div>`,
    `${btn('Cancel','btn-white','closeModal()')} ${btn('Upload','btn-navy','toast(\'Document uploaded!\');closeModal()')}`
  );
}
window.openUploadModal=openUploadModal;

function openDocsModal(name){
  const docs=contracts.filter(c=>c.supplier===name);
  openModal(`Documents — ${name}`,`
    ${docs.length===0?'<p style="color:var(--text3)">No documents found for this supplier.</p>':
    docs.map(c=>`
      <div style="border:1px solid var(--border-lt);border-radius:var(--r);padding:10px;margin-bottom:8px;display:flex;align-items:flex-start;justify-content:space-between;gap:12px">
        <div>
          <div style="font-weight:600;font-size:12.5px;margin-bottom:3px">${c.type} <span class="mono" style="margin-left:8px;font-weight:400">${c.id}</span></div>
          <div style="font-size:12px;color:var(--text3)">Expiry: ${c.expiry} · ${c.value!=='—'?'Value: '+c.value:''}</div>
          <div style="font-size:11.5px;color:var(--text2);margin-top:3px">${c.notes}</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
          <span class="pill ${sc(c.status)}">${c.status}</span>
          ${btn('&#8595; Download','btn-white btn-sm',`toast('Downloading ${c.file}...')`)}
          ${btn('Edit','btn-white btn-sm',`closeModal();openEditContractModal(${JSON.stringify(c).replace(/'/g,"&#39;")})`)}
        </div>
      </div>`).join('')}
    <div style="margin-top:12px">${btn('+ Upload New Document','btn-navy','closeModal();openUploadModal()')}</div>`,
    btn('Close','btn-navy','closeModal()')
  );
}
window.openDocsModal=openDocsModal;

function openAuditModal(name){
  const logs=auditLog.filter(a=>a.supplier===name);
  openModal(`Audit Trail — ${name}`,`
    <div class="audit-list">${logs.length===0?'<p style="color:var(--text3);padding:10px">No audit entries found.</p>':
    logs.map(a=>`
      <div class="audit-item">
        <div class="audit-dot" style="background:${a.color}"></div>
        <div class="audit-content">
          <div class="audit-action">${a.action}</div>
          <div class="audit-meta">${a.ts} · by ${a.user}</div>
          <div class="audit-detail">${a.detail}</div>
        </div>
      </div>`).join('')}
    </div>`,
    btn('Close','btn-navy','closeModal()')
  );
}
window.openAuditModal=openAuditModal;

function openNewPaymentModal(){
  openModal('New Invoice / Payment',`
    <div class="form-panel"><div class="form-head">Invoice Details</div><div class="form-body">
      <div class="fgrid">
        <div class="fg"><label>Supplier <span class="req">*</span></label><select class="fc"><option value="">Select...</option>${suppliers.map(s=>`<option>${s.name}</option>`).join('')}</select></div>
        <div class="fg"><label>Description <span class="req">*</span></label><input class="fc" placeholder="e.g. April accommodation services"></div>
        <div class="fg"><label>Amount (£) <span class="req">*</span></label><input class="fc" type="number" placeholder="0.00" min="0"></div>
        <div class="fg"><label>Due Date <span class="req">*</span></label><input class="fc" type="date"></div>
        <div class="fg"><label>Destination</label><select class="fc"><option>Dubai</option><option>Abu Dhabi</option><option>Oman</option><option>Egypt</option><option>Jordan</option></select></div>
        <div class="fg"><label>Currency</label><select class="fc"><option>GBP</option><option>USD</option><option>AED</option><option>EUR</option></select></div>
      </div>
    </div></div>
    <div class="form-panel"><div class="form-head">Notes</div><div class="form-body">
      <textarea class="fc" style="height:60px;width:100%" placeholder="Optional notes..."></textarea>
    </div></div>`,
    `${btn('Cancel','btn-white','closeModal()')} ${btn('Save as Draft','btn-white','toast(\'Draft saved...\')')} ${btn('Create Invoice','btn-navy','toast(\'Invoice created!\');closeModal()')}`
  );
}
window.openNewPaymentModal=openNewPaymentModal;

function openNewRateModal(){
  openModal('Add New Rate',`
    <div class="form-panel"><div class="form-head">Rate Details</div><div class="form-body">
      <div class="fgrid">
        <div class="fg"><label>Supplier <span class="req">*</span></label><select class="fc"><option value="">Select...</option>${suppliers.map(s=>`<option>${s.name}</option>`).join('')}</select></div>
        <div class="fg"><label>Service Type</label><select class="fc"><option>Hotel Room</option><option>Tour</option><option>Transfer</option><option>Activity</option><option>Dining</option></select></div>
        <div class="fg"><label>Room / Service Type</label><input class="fc" placeholder="e.g. Deluxe Room, Desert Safari"></div>
        <div class="fg"><label>Season</label><select class="fc"><option>Peak</option><option>High</option><option>Low</option><option>All Year</option></select></div>
        <div class="fg"><label>Period From</label><input class="fc" type="date"></div>
        <div class="fg"><label>Period To</label><input class="fc" type="date"></div>
        <div class="fg"><label>Net Rate (£) <span class="req">*</span></label><input class="fc" type="number" placeholder="0.00" min="0"></div>
        <div class="fg"><label>Commission (%)</label><input class="fc" type="number" placeholder="15" min="0" max="50"></div>
      </div>
    </div></div>`,
    `${btn('Cancel','btn-white','closeModal()')} ${btn('Add Rate','btn-navy','toast(\'Rate added!\');closeModal()')}`
  );
}
window.openNewRateModal=openNewRateModal;
function openEditRateModal(sup,season){
  openModal(`Edit Rate — ${sup} (${season})`,`
    <div class="form-panel"><div class="form-head">Edit Rate</div><div class="form-body">
      <div class="fgrid">
        <div class="fg"><label>Supplier</label><input class="fc" value="${sup}" readonly></div>
        <div class="fg"><label>Season</label><select class="fc"><option>Peak</option><option>High</option><option>Low</option><option>All Year</option></select></div>
        <div class="fg"><label>Period From</label><input class="fc" type="date"></div>
        <div class="fg"><label>Period To</label><input class="fc" type="date"></div>
        <div class="fg"><label>Net Rate (£)</label><input class="fc" type="number" placeholder="0.00"></div>
        <div class="fg"><label>Commission (%)</label><input class="fc" type="number" placeholder="15"></div>
        <div class="fg"><label>Status</label><select class="fc"><option>Active</option><option>Inactive</option><option>Draft</option></select></div>
      </div>
    </div></div>`,
    `${btn('Cancel','btn-white','closeModal()')} ${btn('Save Changes','btn-navy','toast(\'Rate updated!\');closeModal()')}`
  );
}
window.openEditRateModal=openEditRateModal;

function openNewDestModal(){
  openModal('Add New Destination',`
    <div class="form-panel"><div class="form-head">Destination Details</div><div class="form-body">
      <div class="fgrid-2">
        <div class="fg"><label>Country <span class="req">*</span></label><input class="fc" placeholder="e.g. Saudi Arabia"></div>
        <div class="fg"><label>City / Region <span class="req">*</span></label><input class="fc" placeholder="e.g. Riyadh"></div>
        <div class="fg"><label>Flag Emoji</label><input class="fc" placeholder="e.g. 🇸🇦"></div>
        <div class="fg"><label>Currency</label><select class="fc"><option>GBP</option><option>USD</option><option>SAR</option><option>AED</option></select></div>
        <div class="fg"><label>Status</label><select class="fc"><option>Active</option><option>Coming Soon</option></select></div>
        <div class="fg"><label>Region Manager</label><input class="fc" placeholder="Name"></div>
      </div>
    </div></div>`,
    `${btn('Cancel','btn-white','closeModal()')} ${btn('Add Destination','btn-navy','toast(\'Destination added!\');closeModal()')}`
  );
}
window.openNewDestModal=openNewDestModal;

// ── TAB SWITCHER ─────────────────────────────────────────────────
function switchTab(el, panelId){
  const bar=el.closest('.tab-bar');
  bar.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  const modal=el.closest('.modal-body')||el.closest('.content');
  modal.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
  const panel=document.getElementById(panelId);
  if(panel)panel.classList.add('active');
}
window.switchTab=switchTab;

// ── MARK UPLOAD ───────────────────────────────────────────────────
function markUpload(input){
  if(input.files&&input.files[0]){
    const z=input.closest('.up-zone');
    if(z){z.classList.add('done');const s=z.querySelector('.up-sub');if(s){s.textContent='✓ '+input.files[0].name;s.style.color='var(--green)';}}
    toast('Uploaded: '+input.files[0].name);
  }
}
window.markUpload=markUpload;

// ── NAV ───────────────────────────────────────────────────────────
function setPrimary(key){
  curPrimary=key; curSub=0;
  document.querySelectorAll('.pnav').forEach(n=>n.classList.toggle('active',n.dataset.p===key));
  buildSecondary(key);
  renderContent();
}

function setSecondary(idx){
  curSub=idx;
  document.querySelectorAll('.snav').forEach((n,i)=>n.classList.toggle('active',i===idx));
  renderContent();
}
window.setSecondary=setSecondary;

function buildSecondary(primary){
  const nav=NAV[primary];
  const el=document.getElementById('secondary-nav');
  el.innerHTML=(nav?.sub||[]).map((l,i)=>`<span class="snav ${i===0?'active':''}" onclick="setSecondary(${i})">${l}</span>`).join('');
}

function renderContent(){
  const nav=NAV[curPrimary];
  const pageKey=nav?.pages?.[curSub];
  const el=document.getElementById('content');
  if(pageKey&&typeof window[pageKey]==='function'){
    el.innerHTML=window[pageKey]();
    if(pageKey==='pg_sup_all') setTimeout(()=>renderSupTable(suppliers),0);
  } else {
    const label=nav?.sub?.[curSub]||NAV[curPrimary]?.sub?.[0]||curPrimary;
    el.innerHTML=`<div class="page-title">${label}</div><div style="background:#fff;border:1px solid var(--border-lt);padding:40px;text-align:center;color:var(--text3)"><div style="font-size:32px;margin-bottom:10px">📋</div><b>${label}</b><div style="font-size:12.5px;margin-top:6px">Connect live data source to populate this view.</div></div>`;
  }
}

// page functions registered on window
['pg_sup_dash','pg_sup_all','pg_sup_onboard','pg_sup_contracts','pg_sup_payments','pg_sup_rates','pg_sup_audit','pg_sup_tiers','pg_sup_dest','pg_hotel_content','pg_hotel_rates','pg_act_all','pg_sales_dest'].forEach(k=>{
  if(typeof window[k]==='undefined') window[k]=eval(k);
});
window.pg_sup_dash=pg_sup_dash;
window.pg_sup_all=pg_sup_all;
window.pg_sup_onboard=pg_sup_onboard;
window.pg_sup_contracts=pg_sup_contracts;
window.pg_sup_payments=pg_sup_payments;
window.pg_sup_rates=pg_sup_rates;
window.pg_sup_audit=pg_sup_audit;
window.pg_sup_tiers=pg_sup_tiers;
window.pg_sup_dest=pg_sup_dest;
window.pg_hotel_content=pg_hotel_content;
window.pg_hotel_rates=pg_hotel_rates;
window.pg_act_all=pg_act_all;

// ── TOAST ─────────────────────────────────────────────────────────
function toast(msg,err=false){
  const el=document.getElementById('toast');
  if(!el)return;
  el.textContent=msg;
  el.className='toast'+(err?' err':'');
  el.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer=setTimeout(()=>el.classList.remove('show'),3000);
}
window.toast=toast;

// ── INIT ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.pnav').forEach(el=>{
    el.addEventListener('click',e=>{e.preventDefault();setPrimary(el.dataset.p);});
  });
  setPrimary('suppliers');
});
