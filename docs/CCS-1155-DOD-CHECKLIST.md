# CCS-1155 — QP Analytics DoD Checklist

**Story:** QP Insights / QP Analytics  
**Prototype:** [CXO-Lens](https://cxo-lens.vercel.app)  
**CQA embed route:** `/cqa-ui/qp-analytics`  
**Data tenant:** `cxdemo` (`1600257d18`)  
**Last verified:** 14 Jul 2026, 5:54 PM IST  
**Latest commit:** `30d6601` (smarter-assignment fix + refreshed data)  
**Production:** [cxo-lens.vercel.app](https://cxo-lens.vercel.app)

---

## Coverage status — what was asked vs what is done

### Executive summary

| Area | Status |
|------|--------|
| CCS-1155 prototype (UI + cxdemo data) | ✅ Largely covered |
| Six product gaps (requested 14 Jul) | ⚠️ Scaffolded in CXO-Lens; not fully shippable in CQA |
| Empty Quality Rubric score columns | ⚠️ Explained — blocked on CQA API data, not missing UI |
| Smarter assignment / HSL sub-profiles (Anuja tests) | ✅ Fixed and live (14 Jul, commit `30d6601`) |

**Bottom line:** The story and prototype are largely covered. Six gaps are wired in CXO-Lens but need CQA product work or a richer tenant to complete. Rubric score columns stay empty on cxdemo because the analysis-detail API returns no KPI breakdown. Smarter-assignment routing is now reflected correctly for all HSL sub-profiles.

---

### 1. CCS-1155 QP Insights (main story)

| Ask | Status |
|-----|--------|
| Build QP Insights under AI Insights | ✅ Done |
| Portfolio + Per-profile views | ✅ Done |
| Real **cxdemo** data | ✅ Done |
| Drill-down, charts, coaching, rubric table | ✅ Done |
| UI polish (spacing, pie chart, 5-row scroll, filters, search) | ✅ Done |
| Story coverage doc | ✅ This document |

---

### 2. Six gaps requested (14 Jul 2026)

| Gap | Covered? | Reality |
|-----|----------|---------|
| **Per-KPI real scores** | ⚠️ Partial | Fetch calls `GET /interaction-analysis/{id}`; **cxdemo returns empty `category[]`** → Type / Avg Score / Avg % / Change stay `—` |
| **Real escalation logic** | ⚠️ Partial | Rules coded (dispute >20%, AI–QA drop >0.5pp); **no cxdemo data triggers them** |
| **RBAC + feature flag** | ⚠️ Partial | `cqaHostContext.js` + UI gating; **no superadmin toggle in CQA** |
| **True gen-AI insights** | ⚠️ Partial | `buildGenAiInsights()` uses aggregates; **LLM endpoint not configured** |
| **Full analytics property set** | ✅ Done | Events + `account_id`, `tenant_name`, etc. wired |
| **Integration into CQA** | ⚠️ Partial | Embed bundle + docs exist; **not mounted inside CQA console** |

---

### 3. Empty Quality Rubric columns — why?

| Column | Source | Status on cxdemo |
|--------|--------|------------------|
| KPI Question | Profile definition (`GET /quality-profiles/{id}`) | ✅ Populated |
| Max Score | Profile definition | ✅ Populated |
| Type | Per-analysis KPI breakdown | ❌ Empty |
| Avg Score | Per-analysis KPI breakdown | ❌ Empty |
| Avg % | Per-analysis KPI breakdown | ❌ Empty |
| Change | Per-analysis KPI breakdown | ❌ Empty |

**Root cause:** Per-KPI scores come from `GET /interaction-analysis/{id}` → `category[].sub_categories[].kpis[]`. On **cxdemo**, analysis detail returns **`category: []`** (empty), so score columns show `—` even when evaluations exist.

The UI caption *"Re-run fetch with CQA_API_KEY for per-KPI scores when available"* is accurate: the fetch pipeline is ready; the tenant API does not return KPI breakdown data.

**To unblock:** Use a tenant with populated `category` data, or ensure `CQA_API_KEY` grants fuller analysis-detail access.

---

### 4. Smarter assignment / HSL profiles (Anuja tests)

**Issue (before fix):** Fetch only counted the **primary** `quality_profile_name`, not `analyzed_profiles` from smarter-assignment routing. Result: only **HSL - QA Compliance (All Calls)** showed data; sub-profiles appeared empty.

**Fix (commit `30d6601`):** `scripts/fetchQpInsights.mjs` expands each analysis into primary + all `analyzed_profiles` matches and fetches profile definitions for every routed profile.

**Verified counts — cxdemo, last month (after fix):**

| Profile | Matched (before) | Matched (after) |
|---------|------------------|-----------------|
| HSL - QA Compliance (All Calls) | 300 | 300 (primary) |
| HSL - Enquiry & Account Query | 0 | **81** |
| HSL - Advisory, Portfolio & Sales | 0 | **80** |
| HSL - Confirmation & Follow Up | 0 | **78** |
| HSL - Non-Conversation | 0 | **67** |
| HSL - Others | 0 | **47** |
| HSL - Market Update | 0 | **37** |
| HSL - Order Placement | 0 | **31** |
| HSL - Activation | 0 | **28** |
| HSL - Onboarding & KYC | 0 | **11** (64.8% avg) |
| HSL - Complaint & Escalation | 0 | **9** |

Additional fetch stats: **299** analyses with multi-profile smarter assignment; **84** active profiles fetched; month totals **550 calls**, **1,368 analyses** (expanded), **65.2%** portfolio avg.

---

### 5. Still not covered (needs CQA team or different tenant)

1. Mount embed at `/cqa-ui/qp-analytics` inside CQA SPA  
2. Pass live auth, role, and feature flags from CQA session  
3. Per-KPI scores on a tenant that returns `category` data  
4. Real escalations when dispute / score-drop data exists  
5. True LLM gen-AI via `CQA_GENAI_ENDPOINT`  
6. Period-over-period deltas in fetch output  
7. Per-profile KPI/coaching data when period filter changes (currently month-base for some drill-down fields)  
8. Amplitude events firing in production CQA shell

---

## How to read this doc

| Symbol | Meaning |
|--------|---------|
| ✅ | Done — meets story intent in CXO-Lens prototype |
| ⚠️ | Partial — UI or pipeline exists; data, integration, or product wiring incomplete |
| ❌ | Not done — out of scope, not started, or blocked on CQA product |
| 🚫 | Explicitly out of scope per story comments |

**Coverage summary**

| Layer | Estimate |
|-------|----------|
| UI / UX | ~90% |
| Data / business logic | ~70% |
| Full product DoD (shippable in CQA) | ~65% |

---

## 1. Navigation & entry

| # | Acceptance criterion | Status | Evidence / notes |
|---|---------------------|--------|------------------|
| 1.1 | QP Analytics accessible under AI Insights | ✅ | Sidebar → **QP Insights** (`src/components/Sidebar.jsx`) |
| 1.2 | Two views: All Profiles + Per QP | ✅ | Tabs: **Portfolio** / **By Profile** (`QpInsightsTabs.jsx`) |
| 1.3 | Route `/cqa-ui/qp-analytics` in CQA | ⚠️ | Constant + embed bundle exist; **not mounted in CQA repo** (`cqa-embed.html`, `docs/CQA_QP_ANALYTICS.md`) |
| 1.4 | Deep-link / embed entry | ✅ | `/?view=qp-analytics`, `cqa-embed.html`, `window.__CQA_HOST__` |

---

## 2. Portfolio view (All Profiles)

| # | Acceptance criterion | Status | Evidence / notes |
|---|---------------------|--------|------------------|
| 2.1 | Metric card: Unique Interactions | ✅ | **Unique Calls** — `QpInsightsView.jsx` |
| 2.2 | Metric card: Total Analyses | ✅ | **Total Analyses** |
| 2.3 | Metric card: Total / Portfolio Avg Score | ✅ | **Portfolio Avg Score** |
| 2.4 | Period-over-period deltas on metric cards | ⚠️ | UI supports deltas; fetch outputs `null` for most deltas |
| 2.5 | AI Insights: per-QP severity + summary | ✅ | **Priority Highlights** table + headline cards |
| 2.6 | Severity based on KPIs below 80% | ⚠️ | Uses failing KPIs when scores exist; falls back to profile avg bands on cxdemo |
| 2.7 | Top-priority alert | ✅ | Critical profile / unused profiles callout |
| 2.8 | Clickable QP row → drill into profile | ✅ | In-place drill-down (no tab switch) |
| 2.9 | Profile summary table: name, matched, %, bar, avg score | ✅ | **Profile Comparison** |
| 2.10 | Score distribution visualization | ✅ | Donut pie + legend + hover + center avg |
| 2.11 | QP interaction distribution | ✅ | **QP Interaction Mix** (ranked horizontal bars, scroll) |
| 2.12 | Period filter: Yesterday / Last Week / Last Month | ✅ | `QpFilterBar.jsx` |
| 2.13 | Real tenant data (not mock) | ✅ | `cxdemo` via `npm run fetch:qp-insights` → `qpInsightsData.js` |
| 2.14 | Search & table filters | ✅ | Status, avg score range, search on Priority Highlights + Profile Comparison *(extra)* |

---

## 3. Per-profile view (By Profile / drill-down)

| # | Acceptance criterion | Status | Evidence / notes |
|---|---------------------|--------|------------------|
| 3.1 | Metric card: Analysis count for this profile | ✅ | **Analyses (This Profile)** |
| 3.2 | Metric card: QP / profile avg score | ✅ | **Profile Avg Score** |
| 3.3 | Analysis share subtext (% of portfolio) | ✅ | Share % under analysis card |
| 3.4 | Period delta on profile score | ⚠️ | UI ready; `qpScoreDelta` mostly `null` in data |
| 3.5 | AI Insights: headline | ✅ | Coaching summary card |
| 3.6 | AI Insights: Needs Attention panel | ✅ | Critical / weak KPI cards |
| 3.7 | AI Insights: Performing Well panel | ✅ | Strong KPI cards |
| 3.8 | AI Insights: recommendation | ✅ | Recommended Action card |
| 3.9 | Escalation indicators | ⚠️ | UI + rules coded; **cxdemo has no triggering disputes/score-drops** |
| 3.10 | Top Intents (smarter assignment only) | ✅ | Conditional on `smarterAssignment` |
| 3.11 | KPI breakdown table | ✅ | **Quality Rubric** |
| 3.12 | Columns: question, type, avg score, max, avg %, change | ✅ | Table columns present |
| 3.13 | Per-KPI real scores from API | ⚠️ | Pipeline via `GET /interaction-analysis/{id}`; **cxdemo returns empty `category`** → scores show — |
| 3.14 | Critical KPI styling (red) | ✅ | `type: critical` row styling |
| 3.15 | Failing KPI styling (orange) | ⚠️ | UI ready; `type: failing` rarely populated without KPI scores |
| 3.16 | Empty state for unused profile | ✅ | No-data state with recommendation |
| 3.17 | Back navigation from drill-down | ✅ | Back arrow in profile header |
| 3.18 | Score trend chart | ✅ | Weekly trend + WeekPager *(extra beyond story)* |

---

## 4. Escalation logic (CCS-1155 rules)

| # | Rule | Status | Evidence / notes |
|---|------|--------|------------------|
| 4.1 | Dispute rate > 20% → dispute escalation | ⚠️ | `buildEscalations()` in `scripts/fetchQpInsights.mjs`; no cxdemo data triggers it |
| 4.2 | AI score > final QA score by > 0.5pp → score-drop escalation | ⚠️ | Same; rule coded, no matches in current cxdemo snapshot |
| 4.3 | Escalation section visible when indicators exist | ✅ | `CoachingInsightsPanel` escalation grid |

---

## 5. Gen-AI insights

| # | Acceptance criterion | Status | Evidence / notes |
|---|---------------------|--------|------------------|
| 5.1 | AI-generated coaching copy (not static mock) | ⚠️ | `buildGenAiInsights()` uses real aggregates; `source: "aggregated"` |
| 5.2 | True LLM / CQA gen-AI API | ⚠️ | Optional `CQA_GENAI_ENDPOINT` hook; **not configured** |
| 5.3 | Source indicator in UI | ✅ | **Data-driven insight** / **Gen-AI insight** badge |

---

## 6. RBAC & feature flag

| # | Acceptance criterion | Status | Evidence / notes |
|---|---------------------|--------|------------------|
| 6.1 | Feature flag: QP Analytics enabled | ⚠️ | `isCQAEnabled` + `qpAnalyticsEnabled` via host/env; **no superadmin UI** |
| 6.2 | Admin / superadmin: full access | ✅ | `cqaHostContext.js` |
| 6.3 | Supervisor: portfolio + profile | ✅ | Same as admin for prototype |
| 6.4 | Agent: restricted visibility | ✅ | Profile selector only; no portfolio tab |
| 6.5 | Blocked state when flag off / no permission | ✅ | `App.jsx` blocked UI |
| 6.6 | Superadmin toggle in CQA settings | ❌ | Requires CQA product UI |

---

## 7. Analytics (Amplitude)

| # | Event / property | Status | Evidence / notes |
|---|-----------------|--------|------------------|
| 7.1 | `Time Spent C3 (route=/cqa-ui/qp-analytics)` | ✅ | `useQpAnalyticsTimeSpent.js` |
| 7.2 | `CQA C3 - QP Analytics Tab Switched` | ✅ | `tab_type`, `profile_id`, `profile_name`, `source`, `period` |
| 7.3 | `CQA C3 - QP Analytics Period Changed` | ✅ | `App.jsx` |
| 7.4 | `CQA C3 - QP Analytics AI Insight Viewed` | ✅ | Intersection Observer |
| 7.5 | `CQA C3 - QP Analytics KPI Breakdown Viewed` | ✅ | Intersection Observer |
| 7.6 | `CQA C3 - QP Analytics Escalation Viewed` | ✅ | Intersection Observer |
| 7.7 | `CQA C3 - QP Analytics Distribution Viewed` | ✅ | *(extra)* |
| 7.8 | `account_id` | ✅ | `getQpAnalyticsEventProperties()` |
| 7.9 | `tenant_name` | ✅ | From `QP_DATA_SOURCE` / host |
| 7.10 | `integration_type` | ✅ | e.g. `ecc4x` |
| 7.11 | `subscription_type` | ✅ | e.g. `paid` |
| 7.12 | `user_id`, `username` | ✅ | From host / env when set |
| 7.13 | Events fire in production CQA with Amplitude SDK | ⚠️ | Stub logs to console without `window.amplitude` |

---

## 8. Data pipeline & APIs

| # | Item | Status | Evidence / notes |
|---|------|--------|------------------|
| 8.1 | Login: `POST /cqa/api/v1/native/login` | ✅ | `fetchQpInsights.mjs` |
| 8.2 | Quality profiles | ✅ | Paginated GET |
| 8.3 | Interactions | ✅ | Paginated GET |
| 8.4 | Interaction analysis list | ✅ | `POST /interaction-analysis` (disputes, QA scores, %) |
| 8.5 | Analysis detail for KPI breakdown | ✅ | `GET /interaction-analysis/{id}` |
| 8.6 | Optional `CQA_API_KEY` for scoring detail | ⚠️ | Supported in script; not required for cxdemo run |
| 8.7 | Regenerate command | ✅ | `npm run fetch:qp-insights` |
| 8.8 | Static snapshot in deploy (not live API at runtime) | ✅ | `qpInsightsData.js` baked into Vercel build |
| 8.9 | Per-profile data updates when period changes | ⚠️ | Portfolio period works; profile KPI/coaching from **month** base |
| 8.10 | Smarter-assignment profile counting (`analyzed_profiles`) | ✅ | Fixed in `30d6601` — expands primary + routed sub-profiles |

---

## 9. CQA product integration

| # | Item | Status | Evidence / notes |
|---|------|--------|------------------|
| 9.1 | Embed HTML bundle | ✅ | `cqa-embed.html` → `dist/cqa-embed.html` |
| 9.2 | Host bridge contract | ✅ | `window.__CQA_HOST__` — see `docs/CQA_QP_ANALYTICS.md` |
| 9.3 | Mount in CQA SPA at `/cqa-ui/qp-analytics` | ❌ | CQA codebase change required |
| 9.4 | Pass live auth, role, flags from CQA session | ❌ | Bridge documented; CQA must implement |
| 9.5 | Load Amplitude from CQA shell | ❌ | CQA responsibility |

---

## 10. Explicitly out of scope (per story)

| # | Item | Status |
|---|------|--------|
| 10.1 | Excel export | 🚫 Not built (correct per story) |
| 10.2 | Link to Agent Dashboard | 🚫 Not linked (correct per story) |
| 10.3 | PDF export | 🚫 Future — not built |

---

## 11. Extras built (not in story)

| Item | Notes |
|------|-------|
| Portfolio drill-down without tab switch | UX improvement |
| QP Interaction Mix as scrollable ranked list | Replaces stacked bar mock |
| Score trend on per-profile view | CX Pulse-style WeekPager |
| Search + status + score filters on portfolio tables | Added post-verification |
| Scope banners (portfolio vs profile) | Clarifying microcopy |
| `docs/CQA_QP_ANALYTICS.md` | Integration guide |

---

## 12. Remaining work for full product sign-off

Priority order for CQA engineering:

1. **Mount embed** in CQA at `/cqa-ui/qp-analytics` and wire `window.__CQA_HOST__`
2. **Validate on a tenant** with KPI `category` data, disputes, and QA overrides (cxdemo is sparse)
3. **Configure `CQA_GENAI_ENDPOINT`** (or CQA-native insights API) for true LLM copy
4. **Compute period deltas** in fetch script (prev-period comparison)
5. **Per-profile period data** — regenerate `qpData` per period, not month-only base
6. **Superadmin feature flag UI** in CQA
7. **Wire Amplitude SDK** in CQA production shell
8. **Live refresh** (optional) — replace static snapshot or add refresh action

---

## 13. Quick verification links

| What | URL |
|------|-----|
| Production app | https://cxo-lens.vercel.app |
| QP Insights deep link | https://cxo-lens.vercel.app/?view=qp-analytics |
| CQA embed bundle | https://cxo-lens.vercel.app/cqa-embed.html |
| Data source | `src/qpInsightsData.js` → `QP_DATA_SOURCE.tenant = "cxdemo"` |

---

## 14. Related docs & files

| Doc / file | Purpose |
|------------|---------|
| [CQA_QP_ANALYTICS.md](./CQA_QP_ANALYTICS.md) | Embed, RBAC, analytics, fetch env vars |
| `scripts/fetchQpInsights.mjs` | CQA ETL pipeline |
| `src/cqaHostContext.js` | RBAC, feature flags, analytics context |
| `src/analytics.js` | Amplitude event wrappers |
| `src/components/QpInsightsView.jsx` | Main QP UI |

---

## Jira paste block (summary)

```
CCS-1155 QP Analytics — CXO-Lens prototype status (cxdemo) — 14 Jul 2026

DONE: Full portfolio + per-profile UI, real cxdemo data, period filters, drill-down,
score distribution (pie), interaction mix, coaching insights UI, KPI rubric table,
search/filters on portfolio tables, analytics events + full property set,
RBAC/feature-flag scaffold, CQA embed bundle, smarter-assignment counting fix
(HSL sub-profiles now show routed evaluation counts).

PARTIAL: Per-KPI scores (API wired; cxdemo returns empty category[] → rubric score
columns show —), escalation rules (coded; no triggers in cxdemo), gen-AI (aggregated
not LLM), period deltas, per-profile period data, Amplitude in prod CQA shell,
superadmin flag UI, CQA native mount.

NOT DONE: Native mount inside CQA console, live runtime API, PDF export.

OUT OF SCOPE: Excel export, Agent Dashboard link.
```
