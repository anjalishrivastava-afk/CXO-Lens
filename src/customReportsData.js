// Mock data + a deterministic "generator" for the Custom Prompt Reports
// feature (HLD/LLD §3–4, §11.2 merge order: exec text_block → highlight
// cards → data sections → strategic text_block → coaching_list).

let nextId = 100;

// Mock period-over-period trend behind each report, so its detail view can
// use the same chart-type toggle + prev/next pager pattern as CXO Insights.
const TREND_LABELS = {
  DAILY: ['Jul 8', 'Jul 9', 'Jul 10', 'Jul 11', 'Jul 12', 'Jul 13'],
  WEEKLY: ['Wk 1', 'Wk 2', 'Wk 3', 'Wk 4', 'Wk 5', 'Wk 6'],
  MONTHLY: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
};
const SCORE_DELTAS = [-2.4, -1.1, -0.3, 0.6, 1.2, 0];
const CALL_FACTORS = [0.78, 0.85, 0.9, 0.95, 1.02, 1.0];

function buildTrend(period, baseScore, baseCalls) {
  const labels = TREND_LABELS[period] || TREND_LABELS.MONTHLY;
  return labels.map((label, i) => ({
    label,
    score: Math.round((baseScore + SCORE_DELTAS[i]) * 10) / 10,
    calls: Math.round(baseCalls * CALL_FACTORS[i]),
  }));
}

export const seedHistory = [
  {
    id: 'rpt_1',
    prompt: 'Compare pitch quality across teams and highlight training gaps',
    period: 'MONTHLY',
    status: 'READY',
    createdAt: '2026-07-10 09:14',
    report: {
      exec: 'Across 1,146 agents, pitch KPIs show a bimodal pattern: top-quartile teams pitch at 78% effectiveness vs the bottom quartile at 31%.',
      highlights: [
        { title: 'Training Gap: Bottom 200 at 28%', detail: 'Targeted coaching could lift the org average by 3–4 points.' },
        { title: 'Cross-sell Timing Is the Gap', detail: 'Benefits Explained at 52.1% but Attempted only 38.2%.' },
        { title: 'Negative Sentiment Correlates with Pitches', detail: '14.2% negative on cross-sell vs 9.8% baseline.' },
      ],
      stats: { totalCalls: 58618, totalAgents: 1146, avgScore: 76.2, scoreDelta: -0.5 },
      trend: buildTrend('MONTHLY', 76.2, 58618),
      topAgents: [
        { agent: 'A001', score: 95.2, calls: 82 },
        { agent: 'A014', score: 93.7, calls: 64 },
      ],
      bottomAgents: [
        { agent: 'A999', score: 45.1, calls: 12 },
        { agent: 'A812', score: 47.8, calls: 21 },
      ],
      strategic: 'This correlation suggests a systemic call-flow scripting issue rather than an individual skill gap.',
      coaching: [
        { title: 'Contextual Pitch Triggers', text: 'Train on 3 qualifying signals before cross-sell.' },
        { title: 'Bottom-Quartile Sprint', text: '2-week coaching on bottom 200 agents.' },
        { title: 'Separate Quality from Volume', text: 'Shift to Product Benefits Explained as the primary metric.' },
        { title: 'InvestRight Playbook', text: 'Distribute top-performer scripts.' },
      ],
    },
  },
  {
    id: 'rpt_2',
    prompt: 'What is driving the drop in customer satisfaction this week?',
    period: 'WEEKLY',
    status: 'READY',
    createdAt: '2026-07-06 16:40',
    report: {
      exec: 'Negative sentiment rose 2.1pp week-over-week, concentrated in complaint-resolution and account-closure calls.',
      highlights: [
        { title: 'Complaint Resolution Negativity Up 4.3pp', detail: 'Now the single highest-risk intent this week.' },
        { title: 'Wednesday Remains the Weak Day', detail: 'Consistent with the prior fortnight’s pattern.' },
        { title: 'Empathy KPI Pass Rate Down', detail: 'Expressive Empathy/Apology fell to 61% org-wide.' },
      ],
      stats: { totalCalls: 14022, totalAgents: 1146, avgScore: 74.8, scoreDelta: -1.2 },
      trend: buildTrend('WEEKLY', 74.8, 14022),
      topAgents: [{ agent: 'A014', score: 94.1, calls: 19 }],
      bottomAgents: [{ agent: 'A612', score: 41.3, calls: 8 }],
      strategic: 'The pattern points to a process gap in complaint handling rather than a broad quality regression.',
      coaching: [
        { title: 'Empathy Refresher', text: 'Short huddle drill on acknowledgement phrasing before resolution.' },
        { title: 'Complaint Escalation Script', text: 'Standardize the first response for account-closure complaints.' },
      ],
    },
  },
];

export function generateMockReport(prompt, period) {
  const id = `rpt_${nextId++}`;
  return {
    id,
    prompt,
    period,
    status: 'READY',
    createdAt: 'just now',
    report: {
      exec: `Based on your question — "${prompt.length > 90 ? prompt.slice(0, 90) + '…' : prompt}" — here is the ${period.toLowerCase()} org-level summary.`,
      highlights: [
        { title: 'Org Avg Score Holding Steady', detail: 'No material shift vs the prior period for the scope of this question.' },
        { title: 'One KPI Stands Out', detail: 'The weakest-passing KPI in this window is Call Closing Quality.' },
        { title: 'Volume Concentrated in Top Intents', detail: 'The top 3 intents account for over 55% of interactions.' },
      ],
      stats: { totalCalls: 12480, totalAgents: 1146, avgScore: 75.4, scoreDelta: 0.4 },
      trend: buildTrend(period, 75.4, 12480),
      topAgents: [{ agent: 'A014', score: 92.8, calls: 41 }],
      bottomAgents: [{ agent: 'A733', score: 49.6, calls: 9 }],
      strategic: 'This is a mock report generated client-side for prototyping — wire this up to the real Lumina /v1/reports/prompted endpoint to replace it with a live answer.',
      coaching: [
        { title: 'Follow Up With a Narrower Prompt', text: 'Try scoping this question to a specific team or KPI for a sharper answer.' },
      ],
    },
  };
}
