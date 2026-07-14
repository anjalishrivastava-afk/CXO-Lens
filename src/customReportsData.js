// Mock data + a deterministic "generator" for the Custom Prompt Reports
// feature (HLD/LLD §3–4, §11.2 merge order: exec text_block → highlight
// cards → data sections → strategic text_block → coaching_list).

let nextId = 100;

// Mock period-over-period trend behind each report, so its detail view can
// use the same prev/next pager pattern as CX Pulse charts.
const TREND_LABELS = {
  DAILY: ['Jul 8', 'Jul 9', 'Jul 10', 'Jul 11', 'Jul 12', 'Jul 13'],
  // Same week-range labels as CX Pulse weeklySentimentSeries (last 6 weeks).
  WEEKLY: ['May 26–Jun 1', 'Jun 2–8', 'Jun 9–15', 'Jun 16–22', 'Jun 23–29', 'Jun 30–Jul 6'],
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

// Reference "now" for bucketing history into Today / Previous 7 Days /
// Previous 30 Days / Older — kept fixed (rather than `new Date()`) so the
// grouping is deterministic for this prototype regardless of the machine's
// real clock.
export const HISTORY_NOW = new Date('2026-07-13T16:00:00');

// Quick-start prompts shown on the empty/landing state, mirroring the
// "Automate your work with custom agents" cards pattern — clicking one just
// fills the composer, it does not auto-generate.
export const SUGGESTED_PROMPTS = [
  {
    id: 'weekly_pitch',
    icon: 'campaign',
    color: 'green',
    title: 'Weekly Pitch Quality',
    description: 'Track pitch effectiveness and cross-sell attempts week over week.',
    prompt: 'Show weekly pitch quality trends and flag any teams below target.',
    period: 'WEEKLY',
  },
  {
    id: 'compliance_scan',
    icon: 'verified_user',
    color: 'blue',
    title: 'Compliance Risk Scan',
    description: 'Surface disclosure gaps and script-adherence issues org-wide.',
    prompt: 'Scan for compliance and disclosure risks across all teams this month.',
    period: 'MONTHLY',
  },
  {
    id: 'team_compare',
    icon: 'groups',
    color: 'yellow',
    title: 'Team Comparison',
    description: 'Compare quality scores and KPI pass rates across teams.',
    prompt: 'Compare quality scores across teams and highlight the biggest gaps.',
    period: 'MONTHLY',
  },
];

export const seedHistory = [
  {
    id: 'rpt_7',
    prompt: 'Show agents with declining scores this week',
    period: 'WEEKLY',
    status: 'READY',
    createdAt: '2026-07-13 10:30',
    report: {
      exec: 'Weekly view shows 42 agents with a 3+ point score decline vs the prior week, concentrated in two teams.',
      highlights: [
        { title: '42 Agents Declining 3+ Points', detail: 'Roughly 3.7% of the active roster, up from 28 agents last week.' },
        { title: 'Two Teams Account for 70%', detail: 'H0172 and H0231 drive most of the decline — worth a targeted huddle.' },
        { title: 'Call Closing Quality Is the Common Thread', detail: 'Declining agents fail this KPI 2.1x more often than stable agents.' },
      ],
      stats: { totalCalls: 13980, totalAgents: 1146, avgScore: 75.1, scoreDelta: -0.8 },
      trend: buildTrend('WEEKLY', 75.1, 13980),
      topAgents: [{ agent: 'A014', score: 93.4, calls: 22 }],
      bottomAgents: [
        { agent: 'A502', score: 44.2, calls: 14 },
        { agent: 'A611', score: 46.9, calls: 11 },
      ],
      strategic: 'The concentration in two teams suggests a local coaching or staffing issue rather than an org-wide quality regression.',
      coaching: [
        { title: 'Closing Quality Huddle', text: 'Run a 15-minute drill on call-closing scripts with H0172 and H0231.' },
        { title: 'Pair Declining Agents with Top Performers', text: 'Shadow sessions for the 42 flagged agents over the next week.' },
      ],
    },
  },
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
  {
    id: 'rpt_4',
    prompt: 'Why did complaint resolution scores drop this week?',
    period: 'WEEKLY',
    status: 'FAILED',
    createdAt: '2026-07-09 14:22',
  },
  {
    id: 'rpt_5',
    prompt: 'Summarize InvestRight app pitch adoption trend',
    period: 'MONTHLY',
    status: 'READY',
    createdAt: '2026-06-20 10:00',
    report: {
      exec: 'InvestRight App Pitch adoption climbed from 24.1% to 28.4% over the month, still the lowest-passing KPI org-wide.',
      highlights: [
        { title: 'Adoption Up 4.3pp Month-over-Month', detail: 'Steady improvement, but still well below the 50% target.' },
        { title: 'Top Branches Lead by 2x', detail: 'Bengaluru and Chennai branches pitch at 2x the org average.' },
        { title: 'Script Awareness Is the Blocker', detail: 'Agent surveys point to unfamiliarity with the pitch script, not reluctance.' },
      ],
      stats: { totalCalls: 56210, totalAgents: 1146, avgScore: 75.8, scoreDelta: 0.9 },
      trend: buildTrend('MONTHLY', 75.8, 56210),
      topAgents: [{ agent: 'A203', score: 91.6, calls: 58 }],
      bottomAgents: [{ agent: 'A845', score: 48.9, calls: 17 }],
      strategic: 'A short refresher module on the InvestRight script, rolled out org-wide, is likely to move this KPI faster than continued organic adoption.',
      coaching: [
        { title: 'InvestRight Refresher Module', text: 'Roll out a 10-minute script walkthrough to all agents below 25% pitch rate.' },
        { title: 'Branch Playbook Sharing', text: 'Have Bengaluru/Chennai leads share their pitch framing with lagging branches.' },
      ],
    },
  },
  {
    id: 'rpt_6',
    prompt: 'Compare gender-based sentiment across branches',
    period: 'MONTHLY',
    status: 'READY',
    createdAt: '2026-05-15 09:00',
    report: {
      exec: 'Male callers show 12.8% negative sentiment vs 8.9% for female callers — a 3.9pp gap consistent across most branches.',
      highlights: [
        { title: '3.9pp Sentiment Gap by Gender', detail: 'Consistent across 11 of 14 branches analysed.' },
        { title: 'Mumbai Andheri Widest Gap', detail: '6.1pp gap, the largest of any branch this month.' },
        { title: 'Gap Narrows on Advisory Calls', detail: 'Advisory Services intent shows only a 1.2pp gap — the smallest of any intent.' },
      ],
      stats: { totalCalls: 58618, totalAgents: 1146, avgScore: 76.0, scoreDelta: 0.2 },
      trend: buildTrend('MONTHLY', 76.0, 58618),
      topAgents: [{ agent: 'A118', score: 92.1, calls: 47 }],
      bottomAgents: [{ agent: 'A930', score: 46.5, calls: 13 }],
      strategic: 'The narrower gap on Advisory calls suggests tone/empathy training used there could transfer well to higher-gap intents.',
      coaching: [
        { title: 'Advisory-Style Empathy Training', text: 'Adapt the Advisory Services tone playbook for Account Closure and Complaint Resolution agents.' },
      ],
    },
  },
];

// Live "reasoning trace" shown inside the collapsible Thinking card while a
// report is generating (Figma nodes 0:9946 → 0:10448 reveal these one at a
// time as the assistant "thinks").
export const THINKING_STEPS = [
  'Querying call transcripts and QA scorecards for the selected period...',
  'Running trend and anomaly detection across agents and teams...',
  'Cross-referencing KPI pass rates against historical benchmarks...',
  'Synthesizing findings into a narrative report...',
];

const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * Buckets history entries into Today / Previous 7 Days / Previous 30 Days /
 * Older, mirroring the recency grouping used by chat-style "Agent" history
 * panels. `'just now'` entries (freshly generated in this session) always
 * land in Today.
 */
export function groupHistoryByRecency(history, now = HISTORY_NOW) {
  const groups = { today: [], last7: [], last30: [], older: [] };
  for (const entry of history) {
    if (entry.createdAt === 'just now') {
      groups.today.push(entry);
      continue;
    }
    const diffDays = (now - new Date(entry.createdAt.replace(' ', 'T'))) / DAY_MS;
    if (diffDays < 1) groups.today.push(entry);
    else if (diffDays < 7) groups.last7.push(entry);
    else if (diffDays < 30) groups.last30.push(entry);
    else groups.older.push(entry);
  }
  return groups;
}

export const THINKING_STEP_INTERVAL_MS = 550;

// Mock "Enhance prompt" transform (wand icon in the composer) — client-side
// stand-in for an LLM prompt-rewrite call, deterministic on prompt length so
// the same input always enhances the same way in this prototype.
const ENHANCE_SUFFIXES = [
  'Break the analysis down by team, call out the top 3 outliers, and end with one concrete coaching recommendation.',
  'Compare this against the prior period, highlight statistically significant shifts, and flag any teams that need immediate attention.',
  'Include supporting call volume and sample size for each finding, and note any data gaps or caveats.',
];

export function enhancePrompt(text) {
  const trimmed = text.trim();
  if (!trimmed) return trimmed;
  const clean = trimmed.replace(/[.?!]+$/, '');
  const suffix = ENHANCE_SUFFIXES[clean.length % ENHANCE_SUFFIXES.length];
  return `${clean}. ${suffix}`;
}

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
