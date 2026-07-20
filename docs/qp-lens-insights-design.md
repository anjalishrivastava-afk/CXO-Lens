# QP-Lens Insights Design — Admin View

## What it replaces
The "Priority Highlights" section below Portfolio Metrics + Interactions Distribution + Score Distribution.

## Insight Sections

### ① QP Health Cards
One card per active QP showing overall health at a glance:
- Score + trend arrow (↑↓→) with pp change
- Volume this period (eval count)
- Weakest category within this QP
- Fastest moving KPI (biggest weekly change)

### ② Category Performance
Horizontal bar chart showing category-level scores per QP:
- Grouped by QP, showing category_name bars
- Color-coded: <50% Critical (red), 50-75% Needs Work (yellow), 75%+ Healthy (green)
- Categories are QP-specific groupings — inherently a QP-lens view

### ③ KPI Movers (Biggest Shifts)
KPIs within QPs that are trending significantly up or down:
- Shows direction (↑↓), KPI name, from→to values, and pp change
- Separated into decliners and improvers
- Scoped within each QP context

### ④ QP Score Consistency
How concentrated vs spread scores are for each QP:
- Mini distribution bars showing score band breakdown
- Tight distribution = consistent QP, wide spread = high variance
- Helps identify QPs producing inconsistent evaluations

### ⑤ QP Alerts (AI-generated, contextual)
Auto-generated alerts about QP-level patterns:
- Declining score trends over consecutive weeks
- Structural weaknesses (multiple categories below threshold)
- Coverage gaps (dormant/unused QPs)
- Volume anomalies

## Role Adaptation
- **Admin**: All QPs across the org
- **Supervisor**: Only QPs their team owns/is assigned to
- **Agent**: Only QPs their interactions have been evaluated against

## Data Sources (from ClickHouse)
- `analysis_kpi_score_details`: Per-KPI per-QP scores, categories, sub-categories
- `interaction_analysis`: Profile-level scores and volumes
- `quality_profiles`: Profile metadata
- Weekly bucketing via `toStartOfWeek(created_at)` for trends

## Key Real Data Findings (HSL ClickHouse — docs/clickhouse-qp-data.json)
- 11 profiles with data (all time); "Branch Profile 1" is the primary LIVE profile
- Branch Profile 1: **1.18M** unique interactions, 49 scored KPIs, 11 categories (queried 2026-07-19)
- Category scores range: 39.5% (Reference Check) to 99.6% (QA Compliance)
- Weekly trend shows slow decline: 76.2% → 75.5% over recent weeks
- Agent Personalization dropped ~10pp in 5 weeks — fastest declining KPI
- Score distribution: ~59% of interactions in 60–80% band
- Weekly volume grew 92K → 157K (~70%); scores stayed within 75.5–76.6%