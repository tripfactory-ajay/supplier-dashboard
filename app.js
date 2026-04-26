// ORN Supplier Portal — app.js

// ── Page navigation ──────────────────────────────────────────────
const pageTitles = {
  dashboard: 'Dashboard',
  suppliers: 'Supplier Directory',
  onboarding: 'Supplier Onboarding',
  contracts: 'Contracts & Documents',
  payments: 'Payment Management',
  hotels: 'Hotels & Accommodation',
  tours: 'Tours & Activities',
  transport: 'Transport & Transfers',
  tiers: 'Tier Management',
  destinations: 'Destinations',
};

function showPage(name, el) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  // Show target
  const page = document.getElementById('page-' + name);
  if (page) page.classList.add('active');
  if (el) el.classList.add('active');

  // Breadcrumb
  document.getElementById('breadcrumb').textContent = pageTitles[name] || name;

  // Close sidebar on mobile
  if (window.innerWidth < 768) {
    document.getElementById('sidebar').classList.remove('open');
  }
}

// ── Supplier table data ───────────────────────────────────────────
const suppliers = [
  { id: 'SUP-0081', name: 'Atlantis The Palm', type: 'Hotel', dest: '🇦🇪 Dubai', tier: 1, rating: 4.8, status: 'Active', tax: 'AE-VAT-100384721', contract: 'Dec 2025', outstanding: '£0' },
  { id: 'SUP-0082', name: 'Burj Al Arab Jumeirah', type: 'Hotel', dest: '🇦🇪 Dubai', tier: 1, rating: 4.9, status: 'Active', tax: 'AE-VAT-100284622', contract: 'Nov 2025', outstanding: '£0' },
  { id: 'SUP-0083', name: 'Desert Tracks Tours', type: 'Tour', dest: '🇦🇪 Dubai', tier: 2, rating: 4.5, status: 'Active', tax: 'AE-VAT-100512388', contract: 'Mar 2026', outstanding: '£0' },
  { id: 'SUP-0084', name: 'Nile Tours Egypt', type: 'Tour', dest: '🇪🇬 Egypt', tier: 2, rating: 4.2, status: 'Pending', tax: 'EG-TAX-302847', contract: 'Awaiting', outstanding: '—' },
  { id: 'SUP-0085', name: 'Jordan Transfer Co', type: 'Transport', dest: '🇯🇴 Jordan', tier: 2, rating: 4.1, status: 'Active', tax: 'JO-TAX-884421', contract: 'Sep 2025', outstanding: '£6,800' },
  { id: 'SUP-0086', name: 'Oman Luxury Resorts', type: 'Hotel', dest: '🇴🇲 Oman', tier: 1, rating: 4.6, status: 'Active', tax: 'OM-VAT-729341', contract: 'Jun 2026', outstanding: '£0' },
  { id: 'SUP-0087', name: 'Petra Tours & Travel', type: 'Tour', dest: '🇯🇴 Jordan', tier: 2, rating: 4.3, status: 'Active', tax: 'JO-TAX-992817', contract: 'Apr 2026', outstanding: '£0' },
  { id: 'SUP-0088', name: 'Red Sea Divers', type: 'Activity', dest: '🇪🇬 Egypt', tier: 2, rating: 4.4, status: 'Active', tax: 'EG-TAX-558821', contract: 'Aug 2025', outstanding: '£0' },
  { id: 'SUP-0089', name: 'Maldives Sunset Cruises', type: 'Cruise', dest: '🇲🇻 Maldives', tier: 1, rating: 4.7, status: 'Pending', tax: 'MV-TAX-00182', contract: 'Awaiting', outstanding: '—' },
  { id: 'SUP-0090', name: 'Arabian Nights Dining', type: 'Restaurant', dest: '🇦🇪 Dubai', tier: 2, rating: 4.5, status: 'Active', tax: 'AE-VAT-100671239', contract: 'Jan 2026', outstanding: '£2,400' },
  { id: 'SUP-0091', name: 'Dubai Luxury Limos', type: 'Transport', dest: '🇦🇪 Dubai', tier: 1, rating: 4.8, status: 'Active', tax: 'AE-VAT-100234887', contract: 'Oct 2025', outstanding: '£0' },
  { id: 'SUP-0092', name: 'Sahara Adventure Tours', type: 'Tour', dest: '🇲🇦 Morocco', tier: 2, rating: 4.2, status: 'Pending', tax: 'MA-TAX-28481', contract: 'Awaiting', outstanding: '—' },
  { id: 'SUP-0093', name: 'Istanbul Express Transfers', type: 'Transport', dest: '🇹🇷 Turkey', tier: 3, rating: 3.9, status: 'Pending', tax: 'TR-TAX-102948', contract: 'Awaiting', outstanding: '—' },
  { id: 'SUP-0094', name: 'Abu Dhabi Experiences', type: 'Activity', dest: '🇦🇪 Abu Dhabi', tier: 2, rating: 4.3, status: 'Active', tax: 'AE-VAT-100881234', contract: 'Feb 2026', outstanding: '£1,200' },
  { id: 'SUP-0095', name: 'Muscat Heritage Tours', type: 'Tour', dest: '🇴🇲 Oman', tier: 2, rating: 4.4, status: 'Active', tax: 'OM-VAT-883291', contract: 'May 2026', outstanding: '£0' },
  { id: 'SUP-0096', name: 'Pyramids View Hotel', type: 'Hotel', dest: '🇪🇬 Egypt', tier: 2, rating: 4.1, status: 'Suspended', tax: 'EG-TAX-719283', contract: 'Expired', outstanding: '£14,200' },
  { id: 'SUP-0097', name: 'Marrakech Riad Collection', type: 'Hotel', dest: '🇲🇦 Morocco', tier: 1, rating: 4.6, status: 'Active', tax: 'MA-TAX-48122', contract: 'Jul 2026', outstanding: '£0' },
  { id: 'SUP-0098', name: 'Dead Sea Wellness Spa', type: 'Activity', dest: '🇯🇴 Jordan', tier: 2, rating: 4.5, status: 'Active', tax: 'JO-TAX-118843', contract: 'Dec 2025', outstanding: '£0' },
  { id: 'SUP-0099', name: 'Cappadocia Balloon Tours', type: 'Activity', dest: '🇹🇷 Turkey', tier: 1, rating: 4.8, status: 'Active', tax: 'TR-TAX-287641', contract: 'Sep 2026', outstanding: '£0' },
  { id: 'SUP-0100', name: 'Jumeirah Beach Resort', type: 'Hotel', dest: '🇦🇪 Dubai', tier: 1, rating: 4.7, status: 'Active', tax: 'AE-VAT-100924571', contract: 'Jan 2026', outstanding: '£0' },
];

function renderSupplierTable(data) {
  const tbody = document.getElementById('supplier-table-body');
  if (!tbody) return;

  const tierClass = { 1: 'tier-1', 2: 'tier-2', 3: 'tier-3' };
  const statusClass = { Active: 'active', Pending: 'pending', Suspended: 'suspended' };
  const typeColor = {
    Hotel: '#1a6faf', Tour: '#3aaa35', Transport: '#c9a800',
    Activity: '#29a8e0', Restaurant: '#e03a1e', Cruise: '#1e3a5f'
  };

  tbody.innerHTML = data.map(s => {
    const initials = s.name.split(' ').slice(0, 2).map(w => w[0]).join('');
    const stars = '★'.repeat(Math.floor(s.rating)) + (s.rating % 1 ? '½' : '');
    const tagClass = s.type === 'Hotel' ? 'tag-hotel' : s.type === 'Tour' ? 'tag-tour' : s.type === 'Transport' ? 'tag-transport' : 'tag-tour';
    return `
    <tr>
      <td><input type="checkbox"></td>
      <td>
        <div class="supplier-cell">
          <div class="s-avatar" style="background:${typeColor[s.type] || '#29a8e0'}">${initials}</div>
          <div><b>${s.name}</b><small>${s.id}</small></div>
        </div>
      </td>
      <td><span class="tag ${tagClass}">${s.type}</span></td>
      <td>${s.dest}</td>
      <td><span class="tier ${tierClass[s.tier]}">Tier ${s.tier}</span></td>
      <td><span style="color:#f5d700;font-size:12px">${stars}</span> <span style="font-size:11px;color:var(--text2)">${s.rating}</span></td>
      <td><span class="status ${statusClass[s.status]}">${s.status}</span></td>
      <td><code style="font-family:'DM Mono',monospace;font-size:11px;color:var(--text3)">${s.tax}</code></td>
      <td style="font-size:12.5px">${s.contract}</td>
      <td style="color:${s.outstanding === '£0' ? 'var(--orn-green)' : s.outstanding === '—' ? 'var(--text3)' : 'var(--orn-red)'};font-weight:600">${s.outstanding}</td>
      <td>
        <div class="action-btns">
          <button class="act-btn" title="View" onclick="showToast('Opening ${s.name}...')">👁</button>
          <button class="act-btn" title="Edit">✏️</button>
          <button class="act-btn" title="Documents">📄</button>
          <button class="act-btn" title="Delete" style="color:var(--orn-red)">🗑</button>
        </div>
      </td>
    </tr>`;
  }).join('');
}

// ── Filters ───────────────────────────────────────────────────────
function filterDashboard() {
  // Visual feedback only in demo
  showToast('Filters applied');
}

function clearFilters() {
  document.querySelectorAll('.filter-select').forEach(s => {
    if (s.tagName === 'SELECT') s.selectedIndex = 0;
    else if (s.type === 'date') s.value = '';
    else if (s.type === 'text') s.value = '';
  });
  showToast('Filters cleared');
}

// ── Form submission ───────────────────────────────────────────────
function submitSupplier(e) {
  e.preventDefault();
  showToast('✓ Application submitted successfully!');
  setTimeout(() => showPage('onboarding', document.querySelector('[data-page=onboarding]')), 1200);
}

// ── Upload trigger ────────────────────────────────────────────────
function triggerUpload(box) {
  const input = box.querySelector('input[type=file]');
  if (input) {
    input.click();
    input.onchange = () => {
      if (input.files.length) {
        const label = box.querySelector('.upload-label');
        const sub = box.querySelector('.upload-sub');
        box.style.borderColor = 'var(--orn-green)';
        box.style.background = 'rgba(58,170,53,0.07)';
        sub.textContent = '✓ ' + input.files[0].name;
        sub.style.color = 'var(--orn-green)';
        showToast('✓ File uploaded: ' + input.files[0].name);
      }
    };
  }
}

// ── Toast ─────────────────────────────────────────────────────────
function showToast(msg, isError = false) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.style.background = isError ? 'var(--orn-red)' : 'var(--orn-green)';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ── Supplier search (live) ────────────────────────────────────────
function setupSupplierSearch() {
  const inputs = document.querySelectorAll('#page-suppliers .filter-select');
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      const searchTerm = inputs[0].value.toLowerCase();
      const filtered = suppliers.filter(s =>
        s.name.toLowerCase().includes(searchTerm) ||
        s.id.toLowerCase().includes(searchTerm)
      );
      renderSupplierTable(filtered);
    });
  });
}

// ── Init ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderSupplierTable(suppliers);
  setupSupplierSearch();

  // Close sidebar when clicking outside on mobile
  document.addEventListener('click', e => {
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth < 768 && sidebar.classList.contains('open')) {
      if (!sidebar.contains(e.target) && !e.target.closest('.menu-toggle')) {
        sidebar.classList.remove('open');
      }
    }
  });
});
