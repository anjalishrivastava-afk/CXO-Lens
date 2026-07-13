// Thin Amplitude wrapper. Falls back to console logging when the Amplitude
// browser SDK isn't loaded on window (e.g. local/mock environments).
//
// NOTE: "AI Insight Feedback" is a new event proposed for this feature. It has
// not been verified against the real Amplitude taxonomy (no MCP access in this
// environment) — confirm there isn't an existing equivalent event before this
// ships, per the org's taxonomy rules.

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
