// ORN Supplier Portal — app.js (matching existing system UI)

// ── Navigation config ────────────────────────────────────────────
const NAV = {
  products: { label: 'Products', sub: ['Product Catalogue', 'Categories', 'Pricing'], pages: ['prod-catalogue'] },
  sales: {
    label: 'Manage Sales',
    sub: ['Business Dashboard', 'Dest Dashboard', 'Groups Dashboard', 'Expert Dashboard', 'B2C Expert Dashboard', 'BM Dashboard', 'KAM Dashboard', 'FS Dashboard'],
    pages: ['sales-dest']
  },
  supply: { label: 'Supply Monitor', sub: ['Overview', 'Availability', 'Allotments'], pages: [] },
  suppliers: {
    label: 'Manage Suppliers',
    sub: ['Supplier Dashboard', 'All Suppliers', 'Onboarding', 'Contracts & Docs', 'Payments', 'Tier Management'],
    pages: ['sup-dashboard', 'sup-all', 'sup-onboard', 'sup-contracts', 'sup-payments', 'sup-tiers']
  },
  hotels: {
    label: 'Manage Hotels',
    sub: ['Manage Rates and Inventory', 'Manage Contracts', 'Inventory Position', 'Hotel Content', 'Preferred Rankings', 'Manage Supply', 'GIT Blockings', 'GIT Calendar'],
    pages: ['hotel-content']
  },
  activities: {
    label: 'Manage Activities',
    sub: ['All Activities', 'Tours', 'Transfers', 'Experiences'],
    pages: ['act-all']
  },
  vehicles: { label: 'Leased Vehicles', sub: ['Fleet', 'Bookings', 'Maintenance'], pages: [] },
  delivery: { label: 'Delivery Operations', sub: ['Overview', 'Pending', 'Completed'], pages: [] },
};

let currentPrimary = 'suppliers';
let currentSecondary = 0;

// ── Supplier data ────────────────────────────────────────────────
const suppliers = [
  { id: 'SUP-0081', name: 'Atlantis The Palm', type: 'Hotel', dest: 'Dubai', tier: 1, rating: 4.8, status: 'Active', tax: 'AE-VAT-100384721', contract: 'Dec 2025', outstanding: 0, commission: 18 },
  { id: 'SUP-0082', name: 'Burj Al Arab Jumeirah', type: 'Hotel', dest: 'Dubai', tier: 1, rating: 4.9, status: 'Active', tax: 'AE-VAT-100284622', contract: 'Nov 2025', outstanding: 0, commission: 20 },
  { id: 'SUP-0083', name: 'Desert Tracks Tours', type: 'Tour', dest: 'Dubai', tier: 2, rating: 4.5, status: 'Active', tax: 'AE-VAT-100512388', contract: 'Mar 2026', outstanding: 0, commission: 15 },
  { id: 'SUP-0084', name: 'Nile Tours Egypt', type: 'Tour', dest: 'Egypt', tier: 2, rating: 4.2, status: 'Pending', tax: 'EG-TAX-302847', contract: 'Awaiting', outstanding: 0, commission: 12 },
  { id: 'SUP-0085', name: 'Jordan Transfer Co', type: 'Transport', dest: 'Jordan', tier: 2, rating: 4.1, status: 'Active', tax: 'JO-TAX-884421', contract: 'Sep 2025', outstanding: 6800, commission: 12 },
  { id: 'SUP-0086', name: 'Oman Luxury Resorts', type: 'Hotel', dest: 'Oman', tier: 1, rating: 4.6, status: 'Active', tax: 'OM-VAT-729341', contract: 'Jun 2026', outstanding: 0, commission: 16 },
  { id: 'SUP-0087', name: 'Petra Tours & Travel', type: 'Tour', dest: 'Jordan', tier: 2, rating: 4.3, status: 'Active', tax: 'JO-TAX-992817', contract: 'Apr 2026', outstanding: 0, commission: 14 },
  { id: 'SUP-0088', name: 'Red Sea Divers', type: 'Activity', dest: 'Egypt', tier: 2, rating: 4.4, status: 'Active', tax: 'EG-TAX-558821', contract: 'Aug 2025', outstanding: 0, commission: 16 },
  { id: 'SUP-0089', name: 'Maldives Sunset Cruises', type: 'Cruise', dest: 'Maldives', tier: 1, rating: 4.7, status: 'Pending', tax: 'MV-TAX-00182', contract: 'Awaiting', outstanding: 0, commission: 18 },
  { id: 'SUP-0090', name: 'Arabian Nights Dining', type: 'Restaurant', dest: 'Dubai', tier: 2, rating: 4.5, status: 'Active', tax: 'AE-VAT-100671239', contract: 'Jan 2026', outstanding: 2400, commission: 13 },
  { id: 'SUP-0091', name: 'Dubai Luxury Limos', type: 'Transport', dest: 'Dubai', tier: 1, rating: 4.8, status: 'Active', tax: 'AE-VAT-100234887', contract: 'Oct 2025', outstanding: 0, commission: 18 },
  { id: 'SUP-0092', name: 'Sahara Adventure Tours', type: 'Tour', dest: 'Morocco', tier: 2, rating: 4.2, status: 'Pending', tax: 'MA-TAX-28481', contract: 'Awaiting', outstanding: 0, commission: 13 },
  { id: 'SUP-0093', name: 'Istanbul Express Transfers', type: 'Transport', dest: 'Turkey', tier: 3, rating: 3.9, status: 'Pending', tax: 'TR-TAX-102948', contract: 'Awaiting', outstanding: 0, commission: 10 },
  { id: 'SUP-0094', name: 'Abu Dhabi Experiences', type: 'Activity', dest: 'Abu Dhabi', tier: 2, rating: 4.3, status: 'Active', tax: 'AE-VAT-100881234', contract: 'Feb 2026', outstanding: 1200, commission: 14 },
  { id: 'SUP-0095', name: 'Muscat Heritage Tours', type: 'Tour', dest: 'Oman', tier: 2, rating: 4.4, status: 'Active', tax: 'OM-VAT-883291', contract: 'May 2026', outstanding: 0, commission: 13 },
  { id: 'SUP-0096', name: 'Pyramids View Hotel', type: 'Hotel', dest: 'Egypt', tier: 2, rating: 4.1, status: 'Suspended', tax: 'EG-TAX-719283', contract: 'Expired', outstanding: 14200, commission: 12 },
  { id: 'SUP-0097', name: 'Marrakech Riad Collection', type: 'Hotel', dest: 'Morocco', tier: 1, rating: 4.6, status: 'Active', tax: 'MA-TAX-48122', contract: 'Jul 2026', outstanding: 0, commission: 16 },
  { id: 'SUP-0098', name: 'Dead Sea Wellness Spa', type: 'Activity', dest: 'Jordan', tier: 2, rating: 4.5, status: 'Active', tax: 'JO-TAX-118843', contract: 'Dec 2025', outstanding: 0, commission: 14 },
  { id: 'SUP-0099', name: 'Cappadocia Balloon Tours', type: 'Activity', dest: 'Turkey', tier: 1, rating: 4.8, status: 'Active', tax: 'TR-TAX-287641', contract: 'Sep 2026', outstanding: 0, commission: 17 },
  { id: 'SUP-0100', name: 'Jumeirah Beach Resort', type: 'Hotel', dest: 'Dubai', tier: 1, rating: 4.7, status: 'Active', tax: 'AE-VAT-100924571', contract: 'Jan 2026', outstanding: 0, commission: 19 },
];

// ── Page renderers ───────────────────────────────────────────────
const pages = {

  // SUPPLIER DASHBOARD
  'sup-dashboard': () => `
    <div class="page-title">Supplier Dashboard</div>

    <div class="toolbar">
      <input type="date" class="ctrl-input" value="2026-04-23">
      <span style="font-size:12px;color:var(--text3)">—</span>
      <input type="date" class="ctrl-input" value="2026-04-26">
      <select class="ctrl-select"><option>All Supplier Types</option><option>Hotels</option><option>Tours & Activities</option><option>Transport</option><option>Restaurants</option><option>Experiences</option></select>
      <select class="ctrl-select"><option>All Destinations</option><option>Dubai</option><option>Abu Dhabi</option><option>Oman</option><option>Egypt</option><option>Jordan</option><option>Morocco</option><option>Turkey</option><option>Maldives</option></select>
      <select class="ctrl-select"><option>All Tiers</option><option>Tier 1 – Premium</option><option>Tier 2 – Standard</option><option>Tier 3 – Budget</option></select>
      <select class="ctrl-select"><option>All Status</option><option>Active</option><option>Pending</option><option>Suspended</option></select>
      <button class="btn-navy" onclick="toast('Filters applied')">Show</button>
      <button class="btn-outline">&#8595; Export</button>
      <div class="toolbar-right">
        <button class="btn-navy" onclick="setSecondary(1)">+ New Supplier</button>
      </div>
    </div>

    <div class="kpi-summary-row">
      <div class="kpi-cell"><div class="kpi-cell-label">Total Suppliers</div><div class="kpi-cell-value blue">142</div></div>
      <div class="kpi-cell"><div class="kpi-cell-label">Active</div><div class="kpi-cell-value blue">118</div></div>
      <div class="kpi-cell"><div class="kpi-cell-label">Pending Onboarding</div><div class="kpi-cell-value orange">7</div></div>
      <div class="kpi-cell"><div class="kpi-cell-label">Suspended</div><div class="kpi-cell-value red">2</div></div>
      <div class="kpi-cell"><div class="kpi-cell-label">Contracts Expiring</div><div class="kpi-cell-value orange">3</div></div>
      <div class="kpi-cell"><div class="kpi-cell-label">Payments This Month</div><div class="kpi-cell-value green">£248K</div></div>
      <div class="kpi-cell"><div class="kpi-cell-label">Overdue Payments</div><div class="kpi-cell-value red">£12K</div></div>
      <div class="kpi-cell"><div class="kpi-cell-label">YTD Total Paid</div><div class="kpi-cell-value">£2.1M</div></div>
      <div class="kpi-cell"><div class="kpi-cell-label">Destinations</div><div class="kpi-cell-value blue">18</div></div>
    </div>

    <div class="table-wrap">
      <table class="data-table" id="dash-table">
        <thead>
          <tr>
            <th class="row-num">#</th>
            <th class="sortable">Destination &#8597;</th>
            <th class="sortable">Active Suppliers &#8597;</th>
            <th class="sortable">Hotels &#8597;</th>
            <th class="sortable">Tours &amp; Act. &#8597;</th>
            <th class="sortable">Transport &#8597;</th>
            <th class="sortable">Pending &#8597;</th>
            <th class="sortable">Contracts Value &#8597;</th>
            <th class="sortable">Payments (MTD) &#8597;</th>
            <th class="sortable">Outstanding &#8597;</th>
            <th class="sortable">Tier 1 &#8597;</th>
            <th class="sortable">Today &#8597;</th>
            <th class="sortable">This Week &#8597;</th>
          </tr>
          <tr class="filter-row">
            <th></th><th><input placeholder=""></th><th><input placeholder=""></th>
            <th><input placeholder=""></th><th><input placeholder=""></th><th><input placeholder=""></th>
            <th><input placeholder=""></th><th><input placeholder=""></th><th><input placeholder=""></th>
            <th><input placeholder=""></th><th><input placeholder=""></th><th><input placeholder=""></th>
            <th><input placeholder=""></th>
          </tr>
        </thead>
        <tbody>
          ${[
            ['🇦🇪 Dubai', 38, 18, 12, 6, 2, '£842K', '£48K', 0, 14, 5, 22],
            ['🇦🇪 Abu Dhabi', 24, 10, 8, 4, 1, '£521K', '£31K', 1200, 8, 3, 14],
            ['🇴🇲 Oman', 18, 8, 5, 3, 0, '£398K', '£28K', 0, 6, 2, 9],
            ['🇪🇬 Egypt', 14, 5, 4, 2, 3, '£287K', '£14K', 14200, 4, 1, 7],
            ['🇯🇴 Jordan', 10, 3, 3, 2, 0, '£198K', '£11K', 6800, 3, 1, 5],
            ['🇲🇦 Morocco', 8, 3, 2, 1, 1, '£164K', '£8K', 0, 2, 0, 3],
            ['🇹🇷 Turkey', 6, 2, 1, 2, 2, '£142K', '£5K', 0, 1, 0, 2],
            ['🇲🇻 Maldives', 4, 2, 1, 0, 1, '£98K', '£3K', 0, 2, 0, 1],
          ].map((r, i) => `
            <tr>
              <td class="row-num">${i+1}</td>
              <td class="cell-link">${r[0]}</td>
              <td>${r[1]}</td>
              <td>${r[2]}</td>
              <td>${r[3]}</td>
              <td>${r[4]}</td>
              <td>${r[5] > 0 ? `<span class="count-badge-teal">${r[5]}</span>` : '0'}</td>
              <td>${r[6]}</td>
              <td><b>${r[7]}</b></td>
              <td style="color:${r[8] > 0 ? 'var(--red)' : 'inherit'};font-weight:${r[8] > 0 ? 700 : 400}">${r[8] > 0 ? '£'+r[8].toLocaleString() : '£0'}</td>
              <td class="cell-link" style="color:var(--teal)">${r[9]}</td>
              <td class="cell-link" style="color:var(--blue-link)">${r[10]}</td>
              <td class="cell-link" style="color:var(--blue-link)">${r[11]}</td>
            </tr>`).join('')}
        </tbody>
      </table>
      <div class="table-footer">
        <span>Showing 1–8 of 18 destinations</span>
        <div class="pagination">
          <button class="pg-btn active">1</button>
          <button class="pg-btn">2</button>
          <button class="pg-btn">3</button>
        </div>
      </div>
    </div>
  `,

  // ALL SUPPLIERS
  'sup-all': () => `
    <div class="page-title">All Suppliers</div>

    <div class="toolbar">
      <input type="text" class="ctrl-input" id="sup-search" placeholder="Search supplier name or ID..." style="width:220px" oninput="filterSupTable()">
      <select class="ctrl-select" id="sup-dest" onchange="filterSupTable()">
        <option value="">All Destinations</option>
        <option>Dubai</option><option>Abu Dhabi</option><option>Oman</option>
        <option>Egypt</option><option>Jordan</option><option>Morocco</option>
        <option>Turkey</option><option>Maldives</option>
      </select>
      <select class="ctrl-select" id="sup-type" onchange="filterSupTable()">
        <option value="">All Types</option>
        <option>Hotel</option><option>Tour</option><option>Transport</option>
        <option>Activity</option><option>Restaurant</option><option>Cruise</option>
      </select>
      <select class="ctrl-select" id="sup-tier" onchange="filterSupTable()">
        <option value="">All Tiers</option>
        <option value="1">Tier 1</option><option value="2">Tier 2</option><option value="3">Tier 3</option>
      </select>
      <select class="ctrl-select" id="sup-status" onchange="filterSupTable()">
        <option value="">All Status</option>
        <option>Active</option><option>Pending</option><option>Suspended</option>
      </select>
      <button class="btn-navy" onclick="filterSupTable()">Search</button>
      <button class="btn-outline" onclick="clearSupFilters()">Clear</button>
      <div class="toolbar-right">
        <button class="btn-outline">&#8595; Export CSV</button>
        <button class="btn-navy" onclick="setSecondary(2)">+ Add Supplier</button>
      </div>
    </div>

    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th class="row-num">#</th>
            <th><input type="checkbox" style="cursor:pointer"></th>
            <th class="sortable">ID &#8597;</th>
            <th class="sortable">Supplier Name &#8597;</th>
            <th class="sortable">Type &#8597;</th>
            <th class="sortable">Destination &#8597;</th>
            <th class="sortable">Tier &#8597;</th>
            <th class="sortable">Rating &#8597;</th>
            <th class="sortable">Status &#8597;</th>
            <th class="sortable">TAX / VAT No. &#8597;</th>
            <th class="sortable">Contract End &#8597;</th>
            <th class="sortable">Commission &#8597;</th>
            <th class="sortable">Outstanding &#8597;</th>
            <th>Manage</th>
          </tr>
          <tr class="filter-row">
            <th></th><th></th>
            <th><input placeholder="ID"></th>
            <th><input placeholder="Name"></th>
            <th><input placeholder="Type"></th>
            <th><input placeholder="Destination"></th>
            <th><input placeholder="Tier"></th>
            <th><input placeholder="Rating"></th>
            <th><input placeholder="Status"></th>
            <th><input placeholder="TAX/VAT"></th>
            <th><input placeholder="Contract"></th>
            <th><input placeholder=""></th>
            <th><input placeholder=""></th>
            <th></th>
          </tr>
        </thead>
        <tbody id="sup-table-body"></tbody>
      </table>
      <div class="table-footer">
        <span id="sup-count">Showing 1–20 of ${suppliers.length} suppliers</span>
        <div class="pagination">
          <button class="pg-btn active">1</button>
          <button class="pg-btn">2</button>
          <button class="pg-btn">3</button>
          <span style="padding:0 4px">...</span>
          <button class="pg-btn">8</button>
        </div>
      </div>
    </div>
  `,

  // ONBOARDING
  'sup-onboard': () => `
    <div class="page-title">Supplier Onboarding</div>

    <div class="toolbar">
      <span style="font-size:12.5px;color:var(--text2);font-weight:500">Onboarding Pipeline</span>
      <div class="toolbar-right">
        <button class="btn-outline">&#8595; Export</button>
        <button class="btn-navy" onclick="showNewSupplierForm()">+ Start New Application</button>
      </div>
    </div>

    <!-- Pipeline -->
    <div class="pipeline-wrap" id="pipeline-wrap">
      ${pipelineHTML()}
    </div>

    <!-- New Supplier Form (hidden by default) -->
    <div id="new-sup-form" style="display:none">
      ${supplierFormHTML()}
    </div>
  `,

  // CONTRACTS
  'sup-contracts': () => `
    <div class="page-title">Contracts &amp; Documents</div>

    <div class="summary-cards">
      <div class="sum-card green"><div class="sum-card-label">Active Contracts</div><div class="sum-card-value green">131</div></div>
      <div class="sum-card orange"><div class="sum-card-label">Expiring (30 days)</div><div class="sum-card-value orange">3</div><div class="sum-card-sub">Renewal required</div></div>
      <div class="sum-card red"><div class="sum-card-label">Expired</div><div class="sum-card-value red">2</div><div class="sum-card-sub">Action needed</div></div>
      <div class="sum-card"><div class="sum-card-label">Total Documents</div><div class="sum-card-value">486</div></div>
    </div>

    <div class="toolbar">
      <input type="text" class="ctrl-input" placeholder="Search supplier or document..." style="width:220px">
      <select class="ctrl-select"><option>All Document Types</option><option>Service Contract</option><option>Insurance</option><option>VAT Certificate</option><option>Company Reg.</option><option>ID / Passport</option></select>
      <select class="ctrl-select"><option>All Status</option><option>Valid</option><option>Expiring</option><option>Expired</option></select>
      <select class="ctrl-select"><option>All Destinations</option><option>Dubai</option><option>Abu Dhabi</option><option>Oman</option><option>Egypt</option></select>
      <button class="btn-navy">Search</button>
      <div class="toolbar-right">
        <button class="btn-navy">Upload Document</button>
      </div>
    </div>

    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th class="row-num">#</th>
            <th class="sortable">Supplier &#8597;</th>
            <th class="sortable">Document Type &#8597;</th>
            <th class="sortable">Document No. &#8597;</th>
            <th class="sortable">Destination &#8597;</th>
            <th class="sortable">Uploaded &#8597;</th>
            <th class="sortable">Expiry Date &#8597;</th>
            <th class="sortable">Status &#8597;</th>
            <th>Manage</th>
          </tr>
          <tr class="filter-row">
            <th></th>
            <th><input placeholder="Supplier"></th>
            <th><input placeholder="Type"></th>
            <th><input placeholder="Doc No."></th>
            <th><input placeholder="Dest."></th>
            <th><input placeholder=""></th>
            <th><input placeholder="Expiry"></th>
            <th><input placeholder="Status"></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${[
            ['Atlantis The Palm', 'Service Contract', 'CTR-2024-0081', 'Dubai', 'Jan 2024', 'Dec 2025', 'Valid'],
            ['Desert Tracks Tours', 'Service Contract', 'CTR-2023-0094', 'Dubai', 'Mar 2023', 'Mar 2024', 'Expired'],
            ['Jordan Transfer Co', 'Insurance Certificate', 'INS-2024-0089', 'Jordan', 'Sep 2024', 'Sep 2025', 'Expiring'],
            ['Oman Luxury Resorts', 'VAT Certificate', 'VAT-2024-0072', 'Oman', 'Jun 2024', 'Jun 2026', 'Valid'],
            ['Red Sea Divers', 'Insurance Certificate', 'INS-2024-0088', 'Egypt', 'Aug 2024', 'Aug 2025', 'Expiring'],
            ['Pyramids View Hotel', 'Service Contract', 'CTR-2022-0096', 'Egypt', 'Jan 2022', 'Jan 2024', 'Expired'],
            ['Marrakech Riad Collection', 'Service Contract', 'CTR-2024-0097', 'Morocco', 'Jul 2024', 'Jul 2026', 'Valid'],
            ['Cappadocia Balloon Tours', 'Service Contract', 'CTR-2024-0099', 'Turkey', 'Sep 2024', 'Sep 2026', 'Valid'],
          ].map((r, i) => {
            const sc = r[6]==='Valid' ? 'pill-green' : r[6]==='Expiring' ? 'pill-orange' : 'pill-red';
            return `<tr>
              <td class="row-num">${i+1}</td>
              <td class="cell-link">${r[0]}</td>
              <td>${r[1]}</td>
              <td style="font-family:monospace;font-size:11.5px">${r[2]}</td>
              <td>${r[3]}</td>
              <td>${r[4]}</td>
              <td>${r[5]}</td>
              <td><span class="pill ${sc}">${r[6]}</span></td>
              <td>
                <button class="tbl-act-btn" onclick="toast('Downloading...')">&#8595; Download</button>
                <button class="tbl-act-btn" onclick="toast('Opening...')">View</button>
                <button class="tbl-act-btn" onclick="toast('Renewal process started')">Renew</button>
              </td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
      <div class="table-footer">
        <span>Showing 1–8 of 486 documents</span>
        <div class="pagination"><button class="pg-btn active">1</button><button class="pg-btn">2</button><button class="pg-btn">3</button></div>
      </div>
    </div>
  `,

  // PAYMENTS
  'sup-payments': () => `
    <div class="page-title">Payment Management</div>

    <div class="summary-cards">
      <div class="sum-card green"><div class="sum-card-label">Paid This Month</div><div class="sum-card-value green">£248,000</div><div class="sum-card-sub">↑ 12% vs last month</div></div>
      <div class="sum-card orange"><div class="sum-card-label">Pending Approval</div><div class="sum-card-value orange">£34,000</div><div class="sum-card-sub">3 invoices</div></div>
      <div class="sum-card red"><div class="sum-card-label">Overdue</div><div class="sum-card-value red">£12,000</div><div class="sum-card-sub">2 suppliers</div></div>
      <div class="sum-card"><div class="sum-card-label">YTD Total</div><div class="sum-card-value">£2,100,000</div><div class="sum-card-sub">↑ 18% vs last year</div></div>
    </div>

    <div class="toolbar">
      <input type="text" class="ctrl-input" placeholder="Search supplier or invoice..." style="width:200px">
      <select class="ctrl-select"><option>All Status</option><option>Pending Approval</option><option>Approved</option><option>Paid</option><option>Overdue</option></select>
      <select class="ctrl-select"><option>All Destinations</option><option>Dubai</option><option>Abu Dhabi</option><option>Oman</option></select>
      <input type="date" class="ctrl-input" value="2026-04-01">
      <span style="font-size:12px;color:var(--text3)">—</span>
      <input type="date" class="ctrl-input" value="2026-04-30">
      <button class="btn-navy">Search</button>
      <div class="toolbar-right">
        <button class="btn-outline">Bulk Pay</button>
        <button class="btn-navy">+ New Payment</button>
      </div>
    </div>

    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th class="row-num">#</th>
            <th><input type="checkbox" style="cursor:pointer"></th>
            <th class="sortable">Supplier &#8597;</th>
            <th class="sortable">Invoice No. &#8597;</th>
            <th class="sortable">Description &#8597;</th>
            <th class="sortable">Destination &#8597;</th>
            <th class="sortable">Amount &#8597;</th>
            <th class="sortable">Due Date &#8597;</th>
            <th class="sortable">Status &#8597;</th>
            <th>Manage</th>
          </tr>
          <tr class="filter-row">
            <th></th><th></th>
            <th><input placeholder="Supplier"></th>
            <th><input placeholder="Invoice"></th>
            <th><input placeholder=""></th>
            <th><input placeholder="Dest."></th>
            <th><input placeholder="Amount"></th>
            <th><input placeholder="Due date"></th>
            <th><input placeholder="Status"></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${[
            ['Atlantis The Palm', 'INV-2026-0281', 'April accommodation services', 'Dubai', '£42,000', '30 Apr 2026', 'Pending Approval'],
            ['Desert Tracks Tours', 'INV-2026-0279', 'April tour operations', 'Dubai', '£8,500', '25 Apr 2026', 'Approved'],
            ['Jordan Transfer Co', 'INV-2026-0265', 'March transfers – overdue', 'Jordan', '£5,200', '31 Mar 2026', 'Overdue'],
            ['Oman Luxury Resorts', 'INV-2026-0280', 'April accommodation', 'Oman', '£28,000', '30 Apr 2026', 'Paid'],
            ['Abu Dhabi Experiences', 'INV-2026-0274', 'April activity packages', 'Abu Dhabi', '£6,800', '28 Apr 2026', 'Approved'],
            ['Pyramids View Hotel', 'INV-2026-0260', 'February accommodation', 'Egypt', '£9,200', '28 Feb 2026', 'Overdue'],
          ].map((r, i) => {
            const sc = r[6]==='Paid' ? 'pill-green' : r[6]==='Approved' ? 'pill-blue' : r[6]==='Overdue' ? 'pill-red' : 'pill-orange';
            const actions = r[6]==='Pending Approval'
              ? `<button class="tbl-act-btn primary" onclick="toast('Payment approved!')">Approve</button><button class="tbl-act-btn" onclick="toast('Opening invoice...')">View</button>`
              : r[6]==='Approved'
              ? `<button class="tbl-act-btn primary" onclick="toast('Payment processing...')">Pay Now</button><button class="tbl-act-btn">View</button>`
              : r[6]==='Overdue'
              ? `<button class="tbl-act-btn primary" onclick="toast('Processing overdue payment...')">Pay Now</button><button class="tbl-act-btn">View</button>`
              : `<button class="tbl-act-btn" onclick="toast('Downloading receipt...')">&#8595; Receipt</button><button class="tbl-act-btn">View</button>`;
            return `<tr>
              <td class="row-num">${i+1}</td>
              <td><input type="checkbox"></td>
              <td class="cell-link">${r[0]}</td>
              <td style="font-family:monospace;font-size:11.5px">${r[1]}</td>
              <td>${r[2]}</td>
              <td>${r[3]}</td>
              <td><b>${r[4]}</b></td>
              <td>${r[5]}</td>
              <td><span class="pill ${sc}">${r[6]}</span></td>
              <td>${actions}</td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
      <div class="table-footer">
        <span>Showing 1–6 of 142 invoices</span>
        <div class="pagination"><button class="pg-btn active">1</button><button class="pg-btn">2</button><button class="pg-btn">3</button></div>
      </div>
    </div>
  `,

  // TIER MANAGEMENT
  'sup-tiers': () => `
    <div class="page-title">Tier Management</div>
    <p style="font-size:12.5px;color:var(--text2);margin-bottom:16px">Configure supplier tiers and website display priority. Drag suppliers between tiers to reassign.</p>
    <div class="tier-grid">
      ${[
        { label:'Tier 1', title:'Premium', cls:'tc-1', hotels:50, tours:18, other:8, features:['Homepage featured placement','Priority in search results','Gold badge on listing','Commission: 15–20%','Dedicated account manager','Featured in email campaigns'], colour:'yes' },
        { label:'Tier 2', title:'Standard', cls:'tc-2', hotels:42, tours:31, other:14, features:['Standard search listing','Appears on category pages','Silver badge','Commission: 10–15%','No homepage feature','Standard support'], colour:'yes' },
        { label:'Tier 3', title:'Budget', cls:'tc-3', hotels:10, tours:12, other:8, features:['Basic listing only','Searchable','No badge','Commission: 8–12%','No priority placement','Email support only'], colour:'no' },
      ].map(t => `
        <div class="tier-card ${t.cls}">
          <div class="tier-card-head">
            <span>${t.label} — ${t.title}</span>
            <button class="tbl-act-btn" style="color:#fff;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.1)" onclick="toast('Editing ${t.label} rules...')">Edit Rules</button>
          </div>
          <div class="tier-card-body">
            <div class="tier-stat-row">
              <div class="tier-stat"><div class="tier-stat-val">${t.hotels}</div><div class="tier-stat-lbl">Hotels</div></div>
              <div class="tier-stat"><div class="tier-stat-val">${t.tours}</div><div class="tier-stat-lbl">Tours</div></div>
              <div class="tier-stat"><div class="tier-stat-val">${t.other}</div><div class="tier-stat-lbl">Other</div></div>
            </div>
            ${t.features.map((f,i) => `<div class="tier-feat ${i < (t.colour==='yes' ? (t.cls==='tc-3'?2:5) : 2) ? 'yes' : 'no'}">${f}</div>`).join('')}
            <button class="btn-navy" style="width:100%;margin-top:12px" onclick="toast('View ${t.label} suppliers')">View All ${t.label} Suppliers</button>
          </div>
        </div>`).join('')}
    </div>
  `,

  // HOTEL CONTENT (matches existing Manage Hotels > Hotel Content)
  'hotel-content': () => `
    <div class="page-title">Manage Hotels</div>

    <div class="search-bar-row">
      <input type="text" class="ctrl-input" placeholder="Destination" style="width:200px">
      <button class="btn-navy" onclick="toast('Searching hotels...')">Search</button>
    </div>

    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th class="row-num">#</th>
            <th><input type="checkbox" style="cursor:pointer"></th>
            <th class="sortable">ID &#8597;</th>
            <th class="sortable">Hotel &#8597;</th>
            <th class="sortable">Star &#8597;</th>
            <th class="sortable">Area &#8597;</th>
            <th class="sortable">Type &#8597;</th>
            <th class="sortable">Status &#8597;</th>
            <th class="sortable">Online Mapping &#8597;</th>
            <th class="sortable">Supplements &#8597;</th>
            <th class="sortable">Tier &#8597;</th>
            <th class="sortable">Preferred Rank &#8597;</th>
            <th class="sortable">Featured &#8597;</th>
            <th>Manage</th>
          </tr>
          <tr class="filter-row">
            <th></th><th></th>
            <th><input placeholder="ID"></th>
            <th><input placeholder="Hotel name"></th>
            <th><input placeholder="Stars"></th>
            <th><input placeholder="Area"></th>
            <th><input placeholder="Type"></th>
            <th><input placeholder="Status"></th>
            <th><input placeholder="Mapping"></th>
            <th><input placeholder=""></th>
            <th><input placeholder="Tier"></th>
            <th><input placeholder="Rank"></th>
            <th><input placeholder=""></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${[
            ['H-0081','Atlantis The Palm','5','Palm Jumeirah','Resort','Active','Mapped','Yes',1,1],
            ['H-0082','Burj Al Arab Jumeirah','7','Jumeirah','Luxury','Active','Mapped','Yes',1,2],
            ['H-0083','Al Maha Desert Resort','5','Dubai Desert','Desert Resort','Active','Mapped','Yes',1,3],
            ['H-0086','Oman Luxury Resorts','5','Muscat','Resort','Active','Mapped','No',1,4],
            ['H-0091','Jumeirah Beach Resort','5','JBR','Beach Resort','Active','Mapped','Yes',1,5],
            ['H-0097','Marrakech Riad Collection','4','Medina','Boutique','Active','Mapped','Yes',1,6],
            ['H-0096','Pyramids View Hotel','4','Giza','Hotel','Suspended','Not Mapped','No',2,7],
            ['H-0094','Blue Waters Hotel Group','5','Blue Waters','Hotel','Pending','Pending','No',2,8],
          ].map((r, i) => `
            <tr>
              <td class="row-num">${i+1}</td>
              <td><input type="checkbox"></td>
              <td style="font-family:monospace;font-size:11.5px">${r[0]}</td>
              <td class="cell-link">${r[1]}</td>
              <td>${r[2]}★</td>
              <td>${r[3]}</td>
              <td>${r[4]}</td>
              <td><span class="pill ${r[5]==='Active'?'pill-green':r[5]==='Pending'?'pill-orange':'pill-red'}">${r[5]}</span></td>
              <td><span class="pill ${r[6]==='Mapped'?'pill-green':r[6]==='Pending'?'pill-orange':'pill-gray'}">${r[6]}</span></td>
              <td>${r[7]==='Yes'?'<span class="pill pill-green">Yes</span>':'<span class="pill pill-gray">No</span>'}</td>
              <td><span class="tier-badge tier-${r[8]}">Tier ${r[8]}</span></td>
              <td style="text-align:center">${r[9]}</td>
              <td style="text-align:center">
                <label class="toggle"><input type="checkbox" ${r[7]==='Yes'?'checked':''}><span class="toggle-slider"></span></label>
              </td>
              <td>
                <a class="act-link" onclick="toast('Editing ${r[1]}...')">Edit</a>
                <a class="act-link" onclick="toast('Opening rates...')">Rates</a>
                <a class="act-link" onclick="toast('Opening contracts...')">Contracts</a>
              </td>
            </tr>`).join('')}
        </tbody>
      </table>
      <div class="table-footer">
        <span>Showing 1–8 of 50 hotels</span>
        <div class="pagination"><button class="pg-btn active">1</button><button class="pg-btn">2</button><button class="pg-btn">3</button></div>
      </div>
    </div>
  `,

  // ACTIVITIES
  'act-all': () => `
    <div class="page-title">Manage Activities</div>
    <div class="toolbar">
      <input type="text" class="ctrl-input" placeholder="Search activity or supplier..." style="width:200px">
      <select class="ctrl-select"><option>All Types</option><option>Tour</option><option>Transfer</option><option>Experience</option><option>Cruise</option></select>
      <select class="ctrl-select"><option>All Destinations</option><option>Dubai</option><option>Egypt</option><option>Jordan</option><option>Oman</option></select>
      <button class="btn-navy">Search</button>
      <div class="toolbar-right"><button class="btn-navy">+ Add Activity</button></div>
    </div>
    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr><th>#</th><th class="sortable">Supplier &#8597;</th><th class="sortable">Activity Type &#8597;</th><th class="sortable">Destination &#8597;</th><th class="sortable">Duration &#8597;</th><th class="sortable">Commission &#8597;</th><th class="sortable">Status &#8597;</th><th>Manage</th></tr>
          <tr class="filter-row"><th></th><th><input></th><th><input></th><th><input></th><th><input></th><th><input></th><th><input></th><th></th></tr>
        </thead>
        <tbody>
          ${[
            ['Desert Tracks Tours','Desert Safari','Dubai','4–8 hrs','15%','Active'],
            ['Nile Tours Egypt','River Cruise','Egypt','1–7 days','12%','Pending'],
            ['Petra Tours & Travel','Historical Tour','Jordan','Full day','14%','Active'],
            ['Red Sea Divers','Diving/Snorkelling','Egypt','Half day','16%','Active'],
            ['Cappadocia Balloon Tours','Hot Air Balloon','Turkey','3 hrs','17%','Active'],
            ['Abu Dhabi Experiences','City Tour','Abu Dhabi','4 hrs','14%','Active'],
            ['Dead Sea Wellness Spa','Wellness Package','Jordan','Full day','14%','Active'],
          ].map((r,i)=>`<tr>
            <td class="row-num">${i+1}</td>
            <td class="cell-link">${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td>
            <td><span class="pill ${r[5]==='Active'?'pill-green':'pill-orange'}">${r[5]}</span></td>
            <td><a class="act-link" onclick="toast('Editing...')">Edit</a><a class="act-link" onclick="toast('Opening...')">View</a></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  `,

  // PLACEHOLDER for other sections
  'sales-dest': () => `
    <div class="page-title">Destination Dashboard</div>
    <p style="font-size:12.5px;color:var(--text2)">This panel mirrors the existing Destination Dashboard. Connect to live data to populate.</p>
    <div style="margin-top:16px;background:#fff;border:1px solid var(--border-light);border-radius:var(--radius);padding:40px;text-align:center;color:var(--text3)">
      Sales dashboard data feeds here
    </div>
  `,
};

// ── Pipeline HTML ────────────────────────────────────────────────
function pipelineHTML() {
  const stages = [
    { label: 'Application Submitted', cls: 'stage-1', count: 3, cards: [
      { title: 'Blue Waters Hotel Group', meta: 'Dubai · Hotel · 2 days ago', docs: [], pct: 25 },
      { title: 'Sahara Adventure Tours', meta: 'Morocco · Tour · 4 days ago', docs: [], pct: 25 },
      { title: 'Istanbul Express', meta: 'Turkey · Transport · 1 day ago', docs: [], pct: 25 },
    ]},
    { label: 'Document Verification', cls: 'stage-2', count: 2, cards: [
      { title: 'Red Sea Divers', meta: 'Egypt · Activity', docs: [{l:'Company Reg',ok:true},{l:'TAX/VAT',ok:true},{l:'Insurance',ok:false}], pct: 60 },
      { title: 'Petra Tours & Travel', meta: 'Jordan · Tour', docs: [{l:'Company Reg',ok:true},{l:'TAX/VAT',ok:true},{l:'Insurance',ok:true},{l:'Contract',ok:false}], pct: 75 },
    ]},
    { label: 'Contract Signing', cls: 'stage-3', count: 1, cards: [
      { title: 'Maldives Sunset Cruises', meta: 'Maldives · Cruise', docs: [{l:'All docs verified',ok:true},{l:'Awaiting signature',ok:false}], pct: 85 },
    ]},
    { label: 'Payment Setup', cls: 'stage-4', count: 1, cards: [
      { title: 'Arabian Nights Dining', meta: 'Dubai · Restaurant', docs: [{l:'Bank details pending',ok:false}], pct: 92 },
    ]},
    { label: 'Live on Platform', cls: 'stage-5', count: 118, cards: [
      { title: '✓ 118 suppliers live', meta: 'All fully onboarded and active', docs: [], pct: 100 },
    ]},
  ];
  return stages.map(s => `
    <div class="pipe-col">
      <div class="pipe-header ${s.cls}">
        <span class="pipe-title">${s.label}</span>
        <span class="pipe-count">${s.count}</span>
      </div>
      <div class="pipe-body">
        ${s.cards.map(c => `
          <div class="pipe-card">
            <div class="pipe-card-title">${c.title}</div>
            <div class="pipe-card-meta">${c.meta}</div>
            ${c.docs.length ? `<div class="doc-row">${c.docs.map(d=>`<span class="doc-chip ${d.ok?'ok':'miss'}">${d.ok?'✓':'✗'} ${d.l}</span>`).join('')}</div>` : ''}
            <div class="pipe-progress-bar"><div style="width:${c.pct}%"></div></div>
            <div class="pipe-card-actions">
              <button class="tbl-act-btn" onclick="toast('Opening application...')">Review</button>
            </div>
          </div>`).join('')}
      </div>
    </div>`).join('');
}

// ── New Supplier Form HTML ────────────────────────────────────────
function supplierFormHTML() {
  return `
    <div class="form-section">
      <div class="form-section-head">Company Information</div>
      <div class="form-section-body">
        <div class="form-grid">
          <div class="form-group"><label class="form-label">Company Name <span class="req">*</span></label><input class="form-control" placeholder="Full legal company name" required></div>
          <div class="form-group"><label class="form-label">Trading Name</label><input class="form-control" placeholder="Trading / DBA name"></div>
          <div class="form-group"><label class="form-label">Supplier Type <span class="req">*</span></label>
            <select class="form-control" required><option value="">Select type...</option><option>Hotel / Accommodation</option><option>Tour Operator</option><option>Activity Provider</option><option>Transport / Transfer</option><option>Restaurant / Dining</option><option>Cruise / Boat</option></select>
          </div>
          <div class="form-group"><label class="form-label">Destination <span class="req">*</span></label>
            <select class="form-control" required><option value="">Select destination...</option><option>Dubai</option><option>Abu Dhabi</option><option>Oman</option><option>Egypt</option><option>Jordan</option><option>Morocco</option><option>Turkey</option><option>Maldives</option></select>
          </div>
          <div class="form-group"><label class="form-label">Company Registration No. <span class="req">*</span></label><input class="form-control" placeholder="Official registration number" required></div>
          <div class="form-group"><label class="form-label">TAX / VAT Number <span class="req">*</span></label><input class="form-control" placeholder="TAX or VAT registration number" required></div>
          <div class="form-group"><label class="form-label">Website</label><input class="form-control" placeholder="https://..." type="url"></div>
          <div class="form-group"><label class="form-label">Years in Operation</label><input class="form-control" type="number" placeholder="e.g. 5" min="0"></div>
        </div>
      </div>
    </div>

    <div class="form-section">
      <div class="form-section-head">Primary Contact</div>
      <div class="form-section-body">
        <div class="form-grid">
          <div class="form-group"><label class="form-label">Contact Name <span class="req">*</span></label><input class="form-control" placeholder="Full name" required></div>
          <div class="form-group"><label class="form-label">Job Title</label><input class="form-control" placeholder="Position"></div>
          <div class="form-group"><label class="form-label">Email <span class="req">*</span></label><input class="form-control" type="email" placeholder="email@company.com" required></div>
          <div class="form-group"><label class="form-label">Phone</label><input class="form-control" type="tel" placeholder="+971..."></div>
        </div>
      </div>
    </div>

    <div class="form-section">
      <div class="form-section-head">Document Uploads</div>
      <div class="form-section-body">
        <div class="upload-grid">
          ${[
            ['📄','Company Registration','PDF, JPG up to 10MB'],
            ['🧾','TAX / VAT Certificate','PDF, JPG up to 10MB'],
            ['🛡️','Insurance Certificate','PDF, JPG up to 10MB'],
            ['✍️','Signed Contract','PDF only up to 20MB'],
            ['🪪','ID / Passport (Owner)','PDF, JPG up to 5MB'],
            ['📎','Other Documents','Any additional files'],
          ].map(([icon,lbl,sub])=>`
            <div class="upload-zone" onclick="this.querySelector('input').click()">
              <input type="file" hidden onchange="markUploaded(this)">
              <div class="upload-icon">${icon}</div>
              <div class="upload-label">${lbl}</div>
              <div class="upload-sub">${sub}</div>
            </div>`).join('')}
        </div>
      </div>
    </div>

    <div class="form-section">
      <div class="form-section-head">Tier &amp; Commercial Settings</div>
      <div class="form-section-body">
        <div class="form-grid">
          <div class="form-group"><label class="form-label">Assign Tier</label>
            <select class="form-control"><option>Tier 1 – Premium (Featured)</option><option>Tier 2 – Standard</option><option>Tier 3 – Budget</option></select>
          </div>
          <div class="form-group"><label class="form-label">Commission Rate (%)</label><input class="form-control" type="number" placeholder="e.g. 15" min="0" max="50"></div>
          <div class="form-group"><label class="form-label">Payment Terms</label>
            <select class="form-control"><option>Net 30</option><option>Net 15</option><option>Net 60</option><option>On Completion</option></select>
          </div>
          <div class="form-group"><label class="form-label">Currency</label>
            <select class="form-control"><option>GBP (£)</option><option>USD ($)</option><option>AED (د.إ)</option><option>EUR (€)</option></select>
          </div>
        </div>
      </div>
    </div>

    <div class="form-actions">
      <button class="btn-outline" onclick="hideSupplierForm()">Cancel</button>
      <button class="btn-outline" onclick="toast('Saved as draft')">Save as Draft</button>
      <button class="btn-navy" onclick="toast('Application submitted successfully!')">Submit Application</button>
    </div>
  `;
}

// ── Render supplier table ────────────────────────────────────────
function renderSupplierTable(data) {
  const tbody = document.getElementById('sup-table-body');
  if (!tbody) return;

  const statusClass = { Active: 'pill-green', Pending: 'pill-orange', Suspended: 'pill-red' };
  tbody.innerHTML = data.map((s, i) => `
    <tr>
      <td class="row-num">${i + 1}</td>
      <td><input type="checkbox"></td>
      <td style="font-family:monospace;font-size:11.5px">${s.id}</td>
      <td class="cell-link">${s.name}</td>
      <td>${s.type}</td>
      <td>${s.dest}</td>
      <td><span class="tier-badge tier-${s.tier}">Tier ${s.tier}</span></td>
      <td><span style="color:#856404">★</span> ${s.rating}</td>
      <td><span class="pill ${statusClass[s.status]}">${s.status}</span></td>
      <td style="font-family:monospace;font-size:11.5px;color:var(--text2)">${s.tax}</td>
      <td>${s.contract}</td>
      <td>${s.commission}%</td>
      <td style="color:${s.outstanding > 0 ? 'var(--red)' : 'inherit'};font-weight:${s.outstanding > 0 ? 700 : 400}">
        ${s.outstanding > 0 ? '£' + s.outstanding.toLocaleString() : '£0'}
      </td>
      <td>
        <a class="act-link" onclick="toast('Opening ${s.name}...')">View</a>
        <a class="act-link" onclick="toast('Editing ${s.name}...')">Edit</a>
        <a class="act-link" onclick="toast('Opening documents...')">Docs</a>
        <a class="act-link red" onclick="toast('Confirm delete?')">Delete</a>
      </td>
    </tr>
  `).join('');
}

function filterSupTable() {
  const search = (document.getElementById('sup-search')?.value || '').toLowerCase();
  const dest = document.getElementById('sup-dest')?.value || '';
  const type = document.getElementById('sup-type')?.value || '';
  const tier = document.getElementById('sup-tier')?.value || '';
  const status = document.getElementById('sup-status')?.value || '';

  const filtered = suppliers.filter(s =>
    (!search || s.name.toLowerCase().includes(search) || s.id.toLowerCase().includes(search)) &&
    (!dest || s.dest === dest) &&
    (!type || s.type === type) &&
    (!tier || s.tier === parseInt(tier)) &&
    (!status || s.status === status)
  );

  renderSupplierTable(filtered);
  const countEl = document.getElementById('sup-count');
  if (countEl) countEl.textContent = `Showing 1–${filtered.length} of ${filtered.length} suppliers`;
}

function clearSupFilters() {
  ['sup-search','sup-dest','sup-type','sup-tier','sup-status'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.tagName === 'SELECT' ? el.selectedIndex = 0 : el.value = ''; }
  });
  renderSupplierTable(suppliers);
  toast('Filters cleared');
}

// ── Navigation ───────────────────────────────────────────────────
function setPrimary(key, el) {
  currentPrimary = key;
  currentSecondary = 0;

  document.querySelectorAll('.pnav-item').forEach(n => n.classList.remove('active'));
  if (el) el.classList.add('active');
  else {
    const found = document.querySelector(`[data-primary="${key}"]`);
    if (found) found.classList.add('active');
  }

  renderSecondaryNav(key);
  renderPage(key, 0);
}

function setSecondary(idx) {
  currentSecondary = idx;
  document.querySelectorAll('.snav-item').forEach((n, i) => {
    n.classList.toggle('active', i === idx);
  });
  renderPage(currentPrimary, idx);
}

function renderSecondaryNav(primary) {
  const nav = NAV[primary];
  const secondaryEl = document.getElementById('secondary-nav');
  if (!nav || !nav.sub || nav.sub.length === 0) {
    secondaryEl.innerHTML = '';
    return;
  }
  secondaryEl.innerHTML = nav.sub.map((label, i) =>
    `<a class="snav-item ${i === 0 ? 'active' : ''}" href="#" onclick="setSecondary(${i});return false">${label}</a>`
  ).join('');
}

function renderPage(primary, subIdx) {
  const nav = NAV[primary];
  const pageKey = nav && nav.pages && nav.pages[subIdx] ? nav.pages[subIdx] : null;
  const contentEl = document.getElementById('page-content');

  if (pageKey && pages[pageKey]) {
    contentEl.innerHTML = pages[pageKey]();
    // Post-render hooks
    if (pageKey === 'sup-all') renderSupplierTable(suppliers);
  } else {
    const subLabel = nav && nav.sub ? nav.sub[subIdx] || nav.label : nav ? nav.label : 'Page';
    contentEl.innerHTML = `
      <div class="page-title">${subLabel}</div>
      <div style="background:#fff;border:1px solid var(--border-light);border-radius:var(--radius);padding:40px;text-align:center;color:var(--text3);margin-top:8px">
        <div style="font-size:32px;margin-bottom:12px">📋</div>
        <div style="font-size:14px;font-weight:600;color:var(--text2);margin-bottom:6px">${subLabel}</div>
        <div style="font-size:12.5px">Connect to your live data source to populate this view.</div>
      </div>`;
  }
}

// ── Onboarding form toggle ────────────────────────────────────────
function showNewSupplierForm() {
  const f = document.getElementById('new-sup-form');
  if (f) {
    f.style.display = 'block';
    f.scrollIntoView({ behavior: 'smooth' });
  }
}

function hideSupplierForm() {
  const f = document.getElementById('new-sup-form');
  if (f) f.style.display = 'none';
}

function markUploaded(input) {
  if (input.files && input.files[0]) {
    const zone = input.closest('.upload-zone');
    zone.classList.add('uploaded');
    const sub = zone.querySelector('.upload-sub');
    if (sub) { sub.textContent = '✓ ' + input.files[0].name; sub.style.color = 'var(--success)'; }
    toast('Uploaded: ' + input.files[0].name);
  }
}

// ── Toast ────────────────────────────────────────────────────────
function toast(msg, isError = false) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.style.background = isError ? 'var(--red)' : 'var(--teal)';
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 3000);
}
window.toast = toast;

// ── Init ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Wire up primary nav clicks
  document.querySelectorAll('.pnav-item').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      const key = el.dataset.primary;
      if (key) setPrimary(key, el);
    });
  });

  // Boot into Manage Suppliers → Supplier Dashboard
  setPrimary('suppliers', document.querySelector('[data-primary="suppliers"]'));
});
