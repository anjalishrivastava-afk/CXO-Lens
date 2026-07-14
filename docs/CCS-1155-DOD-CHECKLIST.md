# CCS-1155 — QP Analytics DoD Checklist

**Story:** QP Insights / QP Analytics  
**Prototype:** [CXO-Lens](https://cxo-lens.vercel.app)  
**CQA embed route:** `/cqa-ui/qp-analytics`  
**Data tenant:** `cxdemo` (`1600257d18`)  
**Last verified:** 14 Jul 2026  
**Latest deploy commit:** `123de79`

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
CCS-1155 QP Analytics — CXO-Lens prototype status (cxdemo)

DONE: Full portfolio + per-profile UI, real cxdemo data, period filters, drill-down, 
score distribution, interaction mix, coaching insights UI, KPI rubric table, 
analytics events + full property set, RBAC/feature-flag scaffold, CQA embed bundle.

PARTIAL: Per-KPI scores (API wired; cxdemo empty categories), escalation rules 
(coded; no triggers in cxdemo), gen-AI (aggregated not LLM), period deltas, 
per-profile period data, Amplitude in prod, superadmin flag UI.

NOT DONE: Native mount inside CQA console, live runtime API, PDF export.

OUT OF SCOPE: Excel export, Agent Dashboard link.
```
