import { QP_DATA_SOURCE } from './qpInsightsData';

export const CQA_PAGES = {
  QP_ANALYTICS: '/cqa-ui/qp-analytics',
};

function readHost() {
  if (typeof window === 'undefined') return null;
  return window.__CQA_HOST__ ?? null;
}

function readEnv(key, fallback) {
  const value = import.meta.env[key];
  return value === undefined || value === '' ? fallback : value;
}

export function getCqaHostContext() {
  const host = readHost();
  const featureFlags = {
    isCQAEnabled:
      host?.featureFlags?.isCQAEnabled ?? readEnv('VITE_CQA_ENABLED', 'true') !== 'false',
    qpAnalyticsEnabled:
      host?.featureFlags?.qpAnalyticsEnabled ?? readEnv('VITE_QP_ANALYTICS_ENABLED', 'true') !== 'false',
  };

  return {
    isEmbed: readEnv('VITE_CQA_EMBED', 'false') === 'true' || Boolean(host?.embed),
    route: host?.route ?? CQA_PAGES.QP_ANALYTICS,
    role: String(host?.role ?? readEnv('VITE_CQA_ROLE', 'admin')).toLowerCase(),
    featureFlags,
    accountId: host?.accountId ?? QP_DATA_SOURCE.accountId,
    tenantName: host?.tenantName ?? QP_DATA_SOURCE.tenant,
    integrationType:
      host?.integrationType ?? QP_DATA_SOURCE.integrationType ?? readEnv('VITE_INTEGRATION_TYPE', undefined),
    subscriptionType:
      host?.subscriptionType
      ?? QP_DATA_SOURCE.subscriptionType
      ?? readEnv('VITE_SUBSCRIPTION_TYPE', undefined),
    userId: host?.userId ?? readEnv('VITE_CQA_USER_ID', undefined),
    username: host?.username ?? readEnv('VITE_CQA_USERNAME', undefined),
    allowedProfileIds: host?.allowedProfileIds ?? [],
  };
}

export function isQpAnalyticsFeatureEnabled(ctx = getCqaHostContext()) {
  return ctx.featureFlags.isCQAEnabled && ctx.featureFlags.qpAnalyticsEnabled;
}

export function canAccessQpAnalytics(ctx = getCqaHostContext()) {
  if (!isQpAnalyticsFeatureEnabled(ctx)) return false;
  return ['admin', 'superadmin', 'supervisor', 'agent'].includes(ctx.role);
}

export function canViewPortfolioInsights(ctx = getCqaHostContext()) {
  return ['admin', 'superadmin', 'supervisor'].includes(ctx.role);
}

export function filterVisibleProfiles(profiles, ctx = getCqaHostContext()) {
  if (canViewPortfolioInsights(ctx)) return profiles;
  if (ctx.allowedProfileIds?.length) {
    const allowed = profiles.filter((profile) => ctx.allowedProfileIds.includes(profile.id));
    if (allowed.length) return allowed;
  }
  return profiles.slice(0, 1);
}

export function getQpAnalyticsEventProperties(extra = {}) {
  const ctx = getCqaHostContext();
  return {
    account_id: ctx.accountId,
    tenant_name: ctx.tenantName,
    integration_type: ctx.integrationType,
    subscription_type: ctx.subscriptionType,
    user_id: ctx.userId,
    username: ctx.username,
    ...extra,
  };
}

export function resolveInitialQpSection() {
  if (typeof window === 'undefined') return 'agent-summary';

  const host = readHost();
  if (host?.route === CQA_PAGES.QP_ANALYTICS || host?.initialSection === 'qp-insights') {
    return 'qp-insights';
  }

  const params = new URLSearchParams(window.location.search);
  if (params.get('view') === 'qp-analytics' || params.get('embed') === 'qp-analytics') {
    return 'qp-insights';
  }

  return null;
}
