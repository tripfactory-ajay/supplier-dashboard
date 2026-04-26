# ORN Supplier Management Portal

A full-featured supplier management dashboard for the ORN platform — covering onboarding, contracts, payments, hotel/tour/transport management, tier control, and destination oversight.

## 🚀 Live Demo (GitHub Pages)

Once deployed, open: `https://<your-username>.github.io/orn-supplier-portal/`

## 📁 Files

```
orn-supplier-portal/
├── index.html      # Main dashboard (all pages)
├── styles.css      # Full styling (dark theme, ORN brand)
├── app.js          # Navigation, data, filters, interactivity
└── README.md
```

## 🎯 Features

### Dashboard
- KPI cards: total suppliers, active, pending, payments, contracts, destinations
- Donut chart — suppliers by type
- Bar chart — monthly payment volumes
- Top destinations with progress bars
- Recent supplier activity table

### Supplier Directory
- Full searchable/filterable table (142 sample suppliers)
- Filter by: destination, type, tier, status
- Columns: name, type, destination, tier, rating, status, TAX/VAT number, contract end, outstanding balance
- Bulk actions, pagination

### Onboarding Pipeline
- Kanban-style 5-stage pipeline: Application → Docs → Contract → Payment Setup → Live
- Document checklist per supplier (Company Reg, TAX/VAT, Insurance, Contract)
- Progress bars per application

### New Supplier Form
- Company details + trading name
- Supplier type & destination
- Company Registration Number + TAX/VAT number
- Primary contact details
- Document uploads: Company Reg, VAT Certificate, Insurance, Contract, ID/Passport
- Tier assignment, commission rate, payment terms, currency

### Contracts & Documents
- Contract registry with expiry tracking
- Status: Valid / Expiring / Expired
- Download, view, renew actions
- KPI cards for contract health

### Payments
- Payment queue with approve/pay workflow
- Overdue flagging
- KPIs: paid this month, pending approval, overdue, YTD total
- Bulk payment support

### Hotels
- Ordered listing with drag-to-reorder (rank numbers)
- Per-hotel: tier badge, stars, room count, commission %, rating
- Featured on website toggle switch
- Filter by destination, stars, tier

### Tours & Activities / Transport
- Full supplier tables per category
- Type-specific columns (activity type, duration / vehicle type, fleet size)

### Tier Management
- Visual tier cards: Tier 1 (Premium), Tier 2 (Standard), Tier 3 (Budget)
- Per-tier: supplier count breakdown, feature list, commission range
- Edit tier rules per tier

### Destinations
- All 8 destinations with flag, supplier count, tier breakdown
- Individual destination management

## 🎨 Design

- Dark grey theme (`#1a1c22`) matching enterprise dashboard aesthetic
- ORN brand colours: Navy `#1e3a5f`, Blue `#1a6faf`, Sky `#29a8e0`, Green `#3aaa35`, Yellow `#f5d700`, Red `#e03a1e`
- Font: DM Sans (body) + DM Mono (IDs/codes)
- Fully responsive (mobile sidebar, stacked grids)

## 🖥 Deploy to GitHub Pages

```bash
# 1. Create a new repo on GitHub (e.g. orn-supplier-portal)
# 2. Push these files:
git init
git add .
git commit -m "ORN Supplier Portal v1"
git remote add origin https://github.com/<username>/orn-supplier-portal.git
git push -u origin main

# 3. In GitHub repo → Settings → Pages → Source: main / root
# 4. Live at: https://<username>.github.io/orn-supplier-portal/
```

## 🔌 Integration Notes

- All pages are in `index.html` — single-file SPA, no build required
- JS navigation via `showPage()` — easy to extend
- Replace sample data in `app.js` (`suppliers` array) with API calls
- Filters are wired up — connect to backend query params
- Upload boxes ready for real file handling (AWS S3 / Firebase Storage etc.)
