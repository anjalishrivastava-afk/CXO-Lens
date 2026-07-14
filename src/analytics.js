// Thin Amplitude wrapper. Falls back to console logging when the Amplitude
// browser SDK isn't loaded on window (e.g. local/mock environments).

export const CQA_PAGES = {
  QP_ANALYTICS: '/cqa-ui/qp-analytics',
};

export function trackEvent(eventName, properties) {
  if (typeof window !== 'undefined' && window.amplitude && typeof window.amplitude.track === 'function') {
    window.amplitude.track(eventName, properties);
    return;
  }
  console.info('[analytics:stub] Amplitude SDK not found on window — would have tracked:', eventName, properties);
}

export function trackInsightFeedback({ view, section, insightId, vote, reasons, detail }) {
  trackEvent('AI Insight Feedback', {
    view,
    section,
    insight_id: insightId,
    vote,
    reasons: reasons && reasons.length ? reasons : undefined,
    detail: detail || undefined,
    source: 'ai_insights_dashboard',
  });
}

export function trackQpAnalyticsTabSwitched({ tabType, profileId, profileName, source, period }) {
  trackEvent('CQA C3 - QP Analytics Tab Switched', {
    tab_type: tabType,
    profile_id: profileId ?? undefined,
    profile_name: profileName ?? undefined,
    source,
    period: period ?? undefined,
  });
}

export function trackQpAnalyticsPeriodChanged({ period, tabType, profileId, profileName }) {
  trackEvent('CQA C3 - QP Analytics Period Changed', {
    period,
    tab_type: tabType,
    profile_id: profileId ?? undefined,
    profile_name: profileName ?? undefined,
  });
}

export function trackQpAnalyticsAiInsightViewed({
  viewType,
  profileId,
  profileName,
  hasWeakKpis,
  hasEscalationIndicators,
  profileCount,
  unusedProfileCount,
}) {
  trackEvent('CQA C3 - QP Analytics AI Insight Viewed', {
    view_type: viewType,
    profile_id: profileId ?? undefined,
    profile_name: profileName ?? undefined,
    has_weak_kpis: hasWeakKpis,
    has_escalation_indicators: hasEscalationIndicators,
    profile_count: profileCount,
    unused_profile_count: unusedProfileCount,
  });
}

export function trackQpAnalyticsDistributionViewed({ viewType, period, avgScore, topBand }) {
  trackEvent('CQA C3 - QP Analytics Distribution Viewed', {
    view_type: viewType,
    period,
    avg_score: avgScore,
    top_band: topBand,
  });
}

export function trackQpAnalyticsEscalationViewed({
  profileId,
  profileName,
  escalationCount,
  disputeCount,
  scoreDropCount,
}) {
  trackEvent('CQA C3 - QP Analytics Escalation Viewed', {
    profile_id: profileId,
    profile_name: profileName,
    escalation_count: escalationCount,
    dispute_count: disputeCount,
    score_drop_count: scoreDropCount,
  });
}

export function trackQpAnalyticsKpiBreakdownViewed({
  profileId,
  profileName,
  totalKpis,
  criticalKpiCount,
  failingKpiCount,
  period,
}) {
  trackEvent('CQA C3 - QP Analytics KPI Breakdown Viewed', {
    profile_id: profileId,
    profile_name: profileName,
    total_kpis: totalKpis,
    critical_kpi_count: criticalKpiCount,
    failing_kpi_count: failingKpiCount,
    period: period ?? undefined,
  });
}

export function trackTimeSpentC3({ route, minutes, integrationType, subscriptionType }) {
  trackEvent(`Time Spent C3 (route=${route})`, {
    route,
    minutes,
    integration_type: integrationType ?? undefined,
    subscription_type: subscriptionType ?? undefined,
  });
}
