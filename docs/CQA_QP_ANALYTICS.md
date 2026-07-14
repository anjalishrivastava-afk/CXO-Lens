# CQA QP Analytics Integration

This package ships a standalone CXO-Lens prototype and a CQA embed bundle for route `/cqa-ui/qp-analytics`.

## Embed bundle

Build output includes:

- `index.html` — full CXO-Lens shell
- `cqa-embed.html` — QP Analytics-only embed for CQA iframe/micro-frontend mounting

Serve `cqa-embed.html` from CQA at `/cqa-ui/qp-analytics`.

## Host bridge

Before loading the embed bundle, CQA should set `window.__CQA_HOST__`:

```js
window.__CQA_HOST__ = {
  embed: true,
  route: '/cqa-ui/qp-analytics',
  role: 'admin', // admin | supervisor | agent | superadmin
  accountId: '1600257d18',
  tenantName: 'cxdemo',
  integrationType: 'ecc4x',
  subscriptionType: 'paid',
  userId: 'user-uuid',
  username: 'cxdemo_admin',
  allowedProfileIds: [], // optional agent scope
  featureFlags: {
    isCQAEnabled: true,
    qpAnalyticsEnabled: true,
  },
};
```

## RBAC

| Role | Portfolio tab | Profile drill-down | Nav item |
|------|---------------|--------------------|----------|
| admin / superadmin | yes | yes | visible |
| supervisor | yes | yes | visible |
| agent | no (profile selector only) | yes | visible |
| other | blocked | blocked | hidden |

Controlled in `src/cqaHostContext.js`.

## Feature flag

QP Analytics requires both:

- `featureFlags.isCQAEnabled`
- `featureFlags.qpAnalyticsEnabled`

Standalone overrides via env:

- `VITE_CQA_ENABLED=true`
- `VITE_QP_ANALYTICS_ENABLED=true`

## Analytics

All `CQA C3 - QP Analytics *` events include:

- `account_id`
- `tenant_name`
- `integration_type`
- `subscription_type`
- `user_id`
- `username`

## Data pipeline

Regenerate live tenant data:

```bash
CQA_USERNAME=cxdemo_admin \
CQA_PASSWORD=cxdemo_admin \
npm run fetch:qp-insights
```

Optional env for deeper API access:

- `CQA_API_KEY` — analysis detail scoring breakdown
- `CQA_GENAI_ENDPOINT` — e.g. `https://.../accounts/{accountId}/quality-profiles/{profileId}/insights`
- `CQA_MAX_ANALYSIS_DETAILS=8` — per-profile analysis detail sample size

### Escalation rules (CCS-1155)

- **Dispute:** profile dispute rate > 20%
- **Score drop:** AI score exceeds final QA score by > 0.5pp

### Per-KPI scores

Fetched from `GET /interaction-analysis/{analysisId}` `category[].sub_categories[].kpis[]` when populated.

## Local preview

```bash
# Full shell with QP section
npm run dev

# Embed mode preview
VITE_CQA_EMBED=true npm run dev -- --open /cqa-embed.html
```

Or open `/?view=qp-analytics` on the main shell.
