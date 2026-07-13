// Mock CXO Insights dataset shaped after the Lumina scope_data contract
// (HLD/LLD §10.1) and the sample callback (§18.6). Numbers are self-consistent
// mock data, not pulled live from ClickHouse.

// Past fortnightly report periods (mirrors GET /reports/cxo_insights/history
// in the LLD §4.6). Only the current period has full mock data behind it —
// picking an older one swaps the displayed period/refresh label, same as the
// existing (also cosmetic-only) period buttons in the Org/Team/Agent tabs.
export const fortnightPeriods = [
  { id: 'current', label: 'Jun 16 – Jun 30, 2026', refreshedAt: null, nextRefreshAt: 'Jul 1, 2026' },
  { id: 'p1', label: 'Jun 1 – Jun 15, 2026', refreshedAt: 'Jun 16, 2026', nextRefreshAt: null },
  { id: 'p2', label: 'May 16 – May 31, 2026', refreshedAt: 'Jun 1, 2026', nextRefreshAt: null },
  { id: 'p3', label: 'May 1 – May 15, 2026', refreshedAt: 'May 16, 2026', nextRefreshAt: null },
];

// Per-week variants of the DOW and quality-by-sentiment charts, so the same
// prev/next week pager used on Weekly Sentiment Trend also works there. The
// last entry (index 5) matches the values previously hardcoded as "current".
const DOW_BASE = [
  { label: 'Mon', volume: 8700, negativePct: 10.2, positivePct: 21.4 },
  { label: 'Tue', volume: 8550, negativePct: 10.6, positivePct: 20.9 },
  { label: 'Wed', volume: 8900, negativePct: 12.3, positivePct: 18.1 },
  { label: 'Thu', volume: 8400, negativePct: 11.7, positivePct: 18.8 },
  { label: 'Fri', volume: 8300, negativePct: 11.1, positivePct: 19.6 },
  { label: 'Sat', volume: 7950, negativePct: 9.8, positivePct: 22.0 },
  { label: 'Sun', volume: 7818, negativePct: 9.4, positivePct: 22.7 },
];
const DOW_WEEK_FACTORS = [1.22, 1.15, 1.09, 1.04, 1.0, 0.86];

export const sentimentByDowByWeek = DOW_WEEK_FACTORS.map((factor) =>
  DOW_BASE.map((d) => ({
    label: d.label,
    volume: d.volume,
    negativePct: Math.round(d.negativePct * factor * 10) / 10,
    positivePct: Math.round(d.positivePct * (2 - factor) * 10) / 10,
  }))
);

const QUALITY_BASE = [
  { sentiment: 'Positive', avgScore: 82.4 },
  { sentiment: 'Neutral', avgScore: 77.1 },
  { sentiment: 'Negative', avgScore: 68.9 },
];
const QUALITY_WEEK_FACTORS = [0.93, 0.95, 0.97, 0.98, 0.99, 1.0];

export const qualityBySentimentByWeek = QUALITY_WEEK_FACTORS.map((factor) =>
  QUALITY_BASE.map((q) => ({ sentiment: q.sentiment, avgScore: Math.round(q.avgScore * factor * 10) / 10 }))
);

export const cxoData = {
  dashboardType: 'cxo',
  periodType: 'FORTNIGHTLY',
  displayPeriod: 'Jun 16 – Jun 30, 2026',
  nextRefreshAt: 'Jul 1, 2026',
  totalInteractions: 58618,
  avgScore: 76.2,
  scoreDelta: 1.4,
  avgCallDurationSec: 115,
  sentimentSummary: { positivePct: 20.1, negativePct: 11.2, neutralPct: 57.7, otherPct: 11.0 },
  fortnightVolumeSplit: { firstHalf: 29918, secondHalf: 28700 },

  keyInsights: [
    {
      id: 'key_insight_1',
      title: 'Wednesday Negativity Spike at 12.3%',
      detail: 'Wednesday shows 12.3% negative sentiment vs a 10.8% weekly average — the highest of any day.',
    },
    {
      id: 'key_insight_2',
      title: 'Cross-sell Pitch: Highest Risk Intent',
      detail: '14.6% negative sentiment across 9,120 cross-sell calls, well above the org baseline.',
    },
    {
      id: 'key_insight_3',
      title: 'Call Closing Quality: Only 62.1% Pass Rate',
      detail: 'Lowest KPI in the Call Handling group, and the main drag on that group’s score.',
    },
  ],

  // Last 6 weeks (3 fortnights) so the trend chart and week-picker have
  // something meaningful to show — the current CXO report's own fortnight
  // is the last two entries (Jun 16–22, Jun 23–29).
  weeklySentimentSeries: [
    { label: 'May 19–25', positive: 5200, neutral: 15800, negative: 4100 },
    { label: 'May 26–Jun 1', positive: 5450, neutral: 16100, negative: 3850 },
    { label: 'Jun 2–8', positive: 5600, neutral: 16400, negative: 3700 },
    { label: 'Jun 9–15', positive: 5720, neutral: 16800, negative: 3550 },
    { label: 'Jun 16–22', positive: 5850, neutral: 17100, negative: 3600 },
    { label: 'Jun 23–29', positive: 5932, neutral: 16723, negative: 2965 },
  ],
  findingWeekly: 'Negative sentiment declined from 3,600 in Jun 16–22 to 2,965 in Jun 23–29 (-17.6%) — the fortnight is trending in the right direction.',

  findingDow: 'Wednesday and Thursday show elevated negativity at 12.3% and 11.7% — both above the 11.5% risk threshold.',

  findingQuality: '13.5-point gap between positive (82.4) and negative (68.9) calls — the widest quality divergence this fortnight.',
  findingComposition: 'Neutral remains the dominant sentiment at 57.7% of all interactions, consistent with the prior fortnight.',

  intentCallouts: [
    {
      id: 'intent_callout_1',
      title: 'Order Placement: Volume Leader',
      detail: '14,200 calls, 5.8% negative — the highest-volume intent stays low-risk.',
    },
    {
      id: 'intent_callout_2',
      title: 'Advisory Services: Best Sentiment',
      detail: '51.3% positive with only 3.9% negative, the strongest sentiment profile of any intent.',
    },
    {
      id: 'intent_callout_3',
      title: 'Complaint Resolution: Highest Risk',
      detail: '22.1% negative across 4,900 calls — nearly 4x the org baseline.',
    },
  ],

  intentSentiment: [
    { intent: 'Order Placement', volume: 14200, positivePct: 48.9, negativePct: 5.8 },
    { intent: 'Cross-sell Pitch', volume: 9120, positivePct: 22.4, negativePct: 14.6 },
    { intent: 'KYC / Document Update', volume: 7600, positivePct: 28.7, negativePct: 9.2 },
    { intent: 'Balance Enquiry', volume: 6880, positivePct: 33.5, negativePct: 6.4 },
    { intent: 'Account Closure', volume: 6450, positivePct: 31.2, negativePct: 18.9 },
    { intent: 'Complaint Resolution', volume: 4900, positivePct: 15.6, negativePct: 22.1 },
    { intent: 'Advisory Services', volume: 5380, positivePct: 51.3, negativePct: 3.9 },
    { intent: 'Loan Inquiry', volume: 4088, positivePct: 26.9, negativePct: 11.8 },
  ],

  // Mock "top 5 negative calls" drill-down per intent (LLD §6.7 / Q10).
  intentDrilldown: {
    'Complaint Resolution': [
      { id: 'INT-88213', score: 24.5, branch: 'Mumbai Andheri', durationSec: 312 },
      { id: 'INT-88240', score: 29.1, branch: 'Delhi CP', durationSec: 201 },
      { id: 'INT-88301', score: 31.8, branch: 'Pune Kothrud', durationSec: 264 },
      { id: 'INT-88355', score: 33.2, branch: 'Bengaluru Koramangala', durationSec: 188 },
      { id: 'INT-88402', score: 35.0, branch: 'Chennai T Nagar', durationSec: 227 },
    ],
    'Account Closure': [
      { id: 'INT-71920', score: 28.7, branch: 'Hyderabad Banjara Hills', durationSec: 340 },
      { id: 'INT-71988', score: 30.4, branch: 'Mumbai Andheri', durationSec: 275 },
      { id: 'INT-72015', score: 34.1, branch: 'Delhi CP', durationSec: 190 },
      { id: 'INT-72060', score: 36.9, branch: 'Pune Kothrud', durationSec: 210 },
      { id: 'INT-72101', score: 38.3, branch: 'Kolkata Park Street', durationSec: 155 },
    ],
    'Cross-sell Pitch': [
      { id: 'INT-63012', score: 32.2, branch: 'Bengaluru Koramangala', durationSec: 198 },
      { id: 'INT-63088', score: 35.6, branch: 'Chennai T Nagar', durationSec: 244 },
      { id: 'INT-63140', score: 37.8, branch: 'Mumbai Andheri', durationSec: 176 },
      { id: 'INT-63201', score: 39.5, branch: 'Delhi CP', durationSec: 220 },
      { id: 'INT-63255', score: 41.0, branch: 'Pune Kothrud', durationSec: 165 },
    ],
  },

  genderSentiment: [
    { gender: 'Male', volume: 34200, positivePct: 24.1, negativePct: 12.8 },
    { gender: 'Female', volume: 21300, positivePct: 27.6, negativePct: 8.9 },
    { gender: 'Not Identifiable', volume: 3118, positivePct: 15.2, negativePct: 14.0 },
  ],
  genderFindings: 'Male callers (58.3% of volume) show 12.8% negativity vs 8.9% for female callers — a 3.9pp gap worth investigating in call-handling training.',

  kpiDeepDive: [
    {
      groupId: 'call_handling',
      title: 'Manner in Which the Call Is Handled',
      badge: 'warn',
      metrics: [
        { label: 'Professional Tone', passPct: 99.3 },
        { label: 'Objection Handling', passPct: 71.2 },
        { label: 'Greeting at Start', passPct: 88.6 },
        { label: 'Call Closing Quality', passPct: 62.1 },
      ],
      insight: 'Professional Tone (99.3%) is strong, but Call Closing Quality at 62.1% is the bottleneck dragging the group down.',
    },
    {
      groupId: 'product_pitching',
      title: 'Product Pitching & Convincing Skill',
      badge: 'new',
      metrics: [
        { label: 'Product Pitch Effectiveness', passPct: 45.8 },
        { label: 'Product Benefits Explained', passPct: 52.1 },
        { label: 'Cross-sell Pitch Attempted', passPct: 38.2 },
      ],
      insight: 'Pitch Effectiveness at 45.8% with Cross-sell Attempted trailing at 38.2% — agents explain benefits but often don’t make the ask.',
    },
    {
      groupId: 'invest_right',
      title: 'Promotion of InvestRight App',
      badge: 'new',
      metrics: [{ label: 'InvestRight App Pitch', passPct: 28.4 }],
      insight: 'InvestRight App Pitch at 28.4%, up 2.1pp in the second half of the fortnight.',
    },
  ],

  callsWorstNegative: [
    { id: 'INT-88213', score: 24.5, branch: 'Mumbai Andheri', durationSec: 312 },
    { id: 'INT-71920', score: 28.7, branch: 'Hyderabad Banjara Hills', durationSec: 340 },
    { id: 'INT-88240', score: 29.1, branch: 'Delhi CP', durationSec: 201 },
    { id: 'INT-71988', score: 30.4, branch: 'Mumbai Andheri', durationSec: 275 },
    { id: 'INT-88301', score: 31.8, branch: 'Pune Kothrud', durationSec: 264 },
  ],
  callsBestPositive: [
    { id: 'INT-90410', score: 98.2, branch: 'Bengaluru Koramangala', durationSec: 187 },
    { id: 'INT-90455', score: 97.6, branch: 'Chennai T Nagar', durationSec: 205 },
    { id: 'INT-90502', score: 97.1, branch: 'Delhi CP', durationSec: 164 },
    { id: 'INT-90588', score: 96.8, branch: 'Mumbai Andheri', durationSec: 233 },
    { id: 'INT-90601', score: 96.3, branch: 'Pune Kothrud', durationSec: 198 },
  ],
};

export function formatDuration(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}m ${s}s`;
}
