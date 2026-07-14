// Mock data for QP Analytics (CCS-1155) — All Profiles + Per-QP views.

export const QP_PROFILES = [
  { id: 'sales_outbound', label: 'Sales Outbound' },
  { id: 'complaint_resolution', label: 'Complaint Resolution' },
  { id: 'account_opening', label: 'Account Opening' },
  { id: 'collections', label: 'Collections' },
  { id: 'investment_advisory', label: 'Investment Advisory' },
  { id: 'technical_support', label: 'Technical Support' },
];

export const QP_PERIODS = [
  { key: 'yesterday', label: 'Yesterday' },
  { key: 'week', label: 'Last Week' },
  { key: 'month', label: 'Last Month' },
];

const PERIOD_SCALE = {
  yesterday: 0.04,
  week: 0.24,
  month: 1,
};

const WEEK_LABELS = ['Jun 16–22', 'Jun 23–29', 'Jun 30–Jul 6', 'Jul 7–13'];

const baseAllProfiles = {
  month: {
    uniqueInteractions: 24860,
    totalAnalysis: 31240,
    totalScore: 78.4,
    totalScoreDelta: -1.2,
    uniqueDelta: +420,
    analysisDelta: +680,
    crossQpHeadline:
      'Across 6 quality profiles, 78.4% avg score with Complaint Resolution and Collections driving the decline. Technical Support has zero matched interactions — verify smarter assignment rules.',
    topPriorityAlert:
      'Complaint Resolution has 2 critical KPIs below 80% — dispute rate on "Empathy Expression" exceeds 20%.',
    unusedProfiles: [{ id: 'technical_support', name: 'Technical Support', matched: 0 }],
    scoreDistribution: [
      { band: '60–70%', count: 1840, share: 7.4 },
      { band: '70–75%', count: 4210, share: 16.9 },
      { band: '75–80%', count: 6180, share: 24.9 },
      { band: '80–85%', count: 7420, share: 29.8 },
      { band: '85–100%', count: 5210, share: 21.0 },
    ],
    distributionInsight: '29.8% of interactions score in the 80–85% band — the largest concentration this period.',
  },
  week: {
    uniqueInteractions: 5966,
    totalAnalysis: 7498,
    totalScore: 77.9,
    totalScoreDelta: -0.8,
    uniqueDelta: +98,
    analysisDelta: +142,
    crossQpHeadline:
      'Last week: score dipped 0.8pp with Collections call-closing quality as the primary drag. 1 profile (Technical Support) received no matched interactions.',
    topPriorityAlert:
      'Collections Payment Plan Confirmation dropped 4.2pp — agents skipping read-back on 34% of calls.',
    unusedProfiles: [{ id: 'technical_support', name: 'Technical Support', matched: 0 }],
    scoreDistribution: [
      { band: '60–70%', count: 462, share: 7.7 },
      { band: '70–75%', count: 1024, share: 17.2 },
      { band: '75–80%', count: 1488, share: 24.9 },
      { band: '80–85%', count: 1782, share: 29.9 },
      { band: '85–100%', count: 1210, share: 20.3 },
    ],
    distributionInsight: 'Score distribution is stable vs prior week — no band shifted more than 1.2pp.',
  },
  yesterday: {
    uniqueInteractions: 994,
    totalAnalysis: 1250,
    totalScore: 79.1,
    totalScoreDelta: +0.6,
    uniqueDelta: +12,
    analysisDelta: +18,
    crossQpHeadline:
      'Yesterday recovered +0.6pp vs prior day. Complaint Resolution empathy scores improved after coaching rollout.',
    topPriorityAlert: null,
    unusedProfiles: [{ id: 'technical_support', name: 'Technical Support', matched: 0 }],
    scoreDistribution: [
      { band: '60–70%', count: 72, share: 7.2 },
      { band: '70–75%', count: 168, share: 16.9 },
      { band: '75–80%', count: 248, share: 24.9 },
      { band: '80–85%', count: 298, share: 30.0 },
      { band: '85–100%', count: 208, share: 20.9 },
    ],
    distributionInsight: 'Yesterday skewed slightly healthier — 30% of interactions in the 80–85% band.',
  },
};

const baseSummaryRows = [
  { id: 'sales_outbound', name: 'Sales Outbound', matched: 8420, avgScore: 76.2, scoreDelta: -0.4, severity: 'attention' },
  { id: 'complaint_resolution', name: 'Complaint Resolution', matched: 6180, avgScore: 71.8, scoreDelta: -2.1, severity: 'critical' },
  { id: 'account_opening', name: 'Account Opening', matched: 5240, avgScore: 83.5, scoreDelta: +0.3, severity: 'healthy' },
  { id: 'collections', name: 'Collections', matched: 4890, avgScore: 74.6, scoreDelta: -1.8, severity: 'attention' },
  { id: 'investment_advisory', name: 'Investment Advisory', matched: 3510, avgScore: 84.1, scoreDelta: +0.2, severity: 'healthy' },
  { id: 'technical_support', name: 'Technical Support', matched: 0, avgScore: null, scoreDelta: null, severity: 'unused' },
];

const baseAiInsightRows = [
  {
    id: 'complaint_resolution',
    name: 'Complaint Resolution',
    severity: 'critical',
    avgScore: 71.8,
    matchedPct: 24.9,
    summary: 'Empathy and resolution confirmation KPIs are failing on 34% of evaluated calls.',
    alert: 'High dispute rate on Empathy Expression (22%)',
  },
  {
    id: 'collections',
    name: 'Collections',
    severity: 'attention',
    avgScore: 74.6,
    matchedPct: 19.7,
    summary: 'Call closing quality dropped 4.2pp vs last period; agents skipping payment-plan recap.',
    alert: 'Score drop on Payment Plan Confirmation',
  },
  {
    id: 'sales_outbound',
    name: 'Sales Outbound',
    severity: 'attention',
    avgScore: 76.2,
    matchedPct: 33.9,
    summary: 'Cross-sell pitch attempted on only 38% of eligible calls — well below the 55% target.',
    alert: null,
  },
  {
    id: 'account_opening',
    name: 'Account Opening',
    severity: 'healthy',
    avgScore: 83.5,
    matchedPct: 21.1,
    summary: 'All KPIs above 82%; introduction and document checklist performing strongly.',
    alert: null,
  },
  {
    id: 'investment_advisory',
    name: 'Investment Advisory',
    severity: 'healthy',
    avgScore: 84.1,
    matchedPct: 14.1,
    summary: 'Stable performance with avg score 84.1%; risk disclosure compliance at 97%.',
    alert: null,
  },
  {
    id: 'technical_support',
    name: 'Technical Support',
    severity: 'unused',
    avgScore: null,
    matchedPct: 0,
    summary: 'No interactions matched this period — profile may be unused or assignment rules need review.',
    alert: 'Zero matched interactions',
  },
];

const qpDataBase = {
  sales_outbound: {
    smarterAssignment: true,
    metrics: { analysisCount: 8420, qpScore: 76.2, qpScoreDelta: -0.4 },
    scoreTrend: [
      { label: 'Jun 16–22', value: 77.1 },
      { label: 'Jun 23–29', value: 76.8 },
      { label: 'Jun 30–Jul 6', value: 76.5 },
      { label: 'Jul 7–13', value: 76.2 },
    ],
    aiInsights: {
      headline:
        'Sales Outbound quality is stable overall, but cross-sell and objection-handling KPIs need focused coaching.',
      needsAttention: [
        {
          name: 'Cross-sell Pitch Attempted',
          score: '38%',
          detail: 'Agents miss natural cross-sell openings in 62% of eligible calls.',
        },
        {
          name: 'Objection Handling',
          score: '71%',
          detail: 'Price objections are acknowledged but not addressed with a clear value statement.',
        },
      ],
      performingWell: [
        { name: 'Professional Tone', score: '99%' },
        { name: 'Greeting at Start', score: '89%' },
      ],
      recommendation:
        'Run a 2-week coaching sprint on cross-sell triggers for the bottom-quartile agents in this profile.',
    },
    escalations: [],
    topIntents: [
      { label: 'Product Inquiry', count: 2840 },
      { label: 'Rate Comparison', count: 1920 },
      { label: 'Upgrade Request', count: 1180 },
      { label: 'Callback Scheduled', count: 890 },
    ],
    kpis: [
      { question: 'Professional Tone maintained throughout call', type: null, avgScore: 4.9, maxScore: 5, avgPct: 99.3, prevPct: 99.1 },
      { question: 'Agent introduces self and company clearly', type: null, avgScore: 4.4, maxScore: 5, avgPct: 88.6, prevPct: 88.2 },
      { question: 'Cross-sell pitch attempted when relevant', type: 'critical', avgScore: 1.9, maxScore: 5, avgPct: 38.2, prevPct: 41.0 },
      { question: 'Objection handling — acknowledges and responds', type: 'failing', avgScore: 3.6, maxScore: 5, avgPct: 71.2, prevPct: 73.4 },
      { question: 'Call closing — next steps confirmed', type: 'failing', avgScore: 3.1, maxScore: 5, avgPct: 62.1, prevPct: 64.8 },
    ],
  },
  complaint_resolution: {
    smarterAssignment: true,
    metrics: { analysisCount: 6180, qpScore: 71.8, qpScoreDelta: -2.1 },
    scoreTrend: [
      { label: 'Jun 16–22', value: 74.2 },
      { label: 'Jun 23–29', value: 73.1 },
      { label: 'Jun 30–Jul 6', value: 72.4 },
      { label: 'Jul 7–13', value: 71.8 },
    ],
    aiInsights: {
      headline:
        'Complaint Resolution is the highest-risk profile this period — empathy and resolution confirmation are driving score decline.',
      needsAttention: [
        {
          name: 'Empathy Expression',
          score: '58%',
          detail: 'Agents acknowledge the issue but rarely express genuine empathy before proposing a fix.',
        },
        {
          name: 'Resolution Confirmation',
          score: '64%',
          detail: 'Customers leave without explicit confirmation that their complaint was resolved.',
        },
      ],
      performingWell: [
        { name: 'Issue Identification', score: '91%' },
        { name: 'Hold / Transfer Etiquette', score: '87%' },
      ],
      recommendation:
        'Prioritize empathy scripting workshops for teams H0172 and H0241 — they account for 68% of failing calls.',
    },
    escalations: [
      {
        type: 'dispute',
        kpi: 'Empathy Expression',
        detail: 'Dispute rate 22% — supervisors overturned AI score on 1 in 5 evaluations.',
      },
      {
        type: 'score_drop',
        kpi: 'Resolution Confirmation',
        detail: 'AI score consistently 0.8pp higher than final QA score after manual review.',
      },
    ],
    topIntents: [
      { label: 'Billing Dispute', count: 2180 },
      { label: 'Service Complaint', count: 1640 },
      { label: 'Refund Request', count: 980 },
      { label: 'Escalation Request', count: 620 },
    ],
    kpis: [
      { question: 'Agent identifies the core customer issue', type: null, avgScore: 4.5, maxScore: 5, avgPct: 91.0, prevPct: 90.6 },
      { question: 'Empathy expression — acknowledges customer frustration', type: 'critical', avgScore: 2.9, maxScore: 5, avgPct: 58.4, prevPct: 62.1 },
      { question: 'Resolution steps explained clearly', type: 'failing', avgScore: 3.4, maxScore: 5, avgPct: 67.2, prevPct: 69.0 },
      { question: 'Resolution confirmed with customer before closing', type: 'critical', avgScore: 3.2, maxScore: 5, avgPct: 64.1, prevPct: 66.8 },
      { question: 'Follow-up timeline communicated', type: 'failing', avgScore: 3.0, maxScore: 5, avgPct: 59.8, prevPct: 61.2 },
    ],
  },
  account_opening: {
    smarterAssignment: false,
    metrics: { analysisCount: 5240, qpScore: 83.5, qpScoreDelta: +0.3 },
    scoreTrend: [
      { label: 'Jun 16–22', value: 82.8 },
      { label: 'Jun 23–29', value: 83.1 },
      { label: 'Jun 30–Jul 6', value: 83.3 },
      { label: 'Jul 7–13', value: 83.5 },
    ],
    aiInsights: {
      headline: 'Account Opening is performing well — document checklist and KYC verification are strong across teams.',
      needsAttention: [
        {
          name: 'Product Benefits Explained',
          score: '79%',
          detail: 'Slightly below target; some agents skip benefit summary when customer is eager to proceed.',
        },
      ],
      performingWell: [
        { name: 'Document Checklist Completed', score: '96%' },
        { name: 'KYC Verification Steps', score: '94%' },
        { name: 'Professional Introduction', score: '92%' },
      ],
      recommendation: 'Share top-performer call snippets on benefit explanation during next team standup.',
    },
    escalations: [],
    topIntents: [],
    kpis: [
      { question: 'Professional introduction at call start', type: null, avgScore: 4.6, maxScore: 5, avgPct: 92.0, prevPct: 91.6 },
      { question: 'KYC verification steps followed', type: null, avgScore: 4.7, maxScore: 5, avgPct: 94.2, prevPct: 93.8 },
      { question: 'Document checklist completed', type: null, avgScore: 4.8, maxScore: 5, avgPct: 96.1, prevPct: 95.8 },
      { question: 'Product benefits explained clearly', type: 'failing', avgScore: 4.0, maxScore: 5, avgPct: 79.4, prevPct: 78.9 },
      { question: 'Next steps and timeline confirmed', type: null, avgScore: 4.3, maxScore: 5, avgPct: 86.8, prevPct: 86.2 },
    ],
  },
  collections: {
    smarterAssignment: true,
    metrics: { analysisCount: 4890, qpScore: 74.6, qpScoreDelta: -1.8 },
    scoreTrend: [
      { label: 'Jun 16–22', value: 76.8 },
      { label: 'Jun 23–29', value: 76.1 },
      { label: 'Jun 30–Jul 6', value: 75.2 },
      { label: 'Jul 7–13', value: 74.6 },
    ],
    aiInsights: {
      headline:
        'Collections shows declining call-closing quality — agents are resolving accounts but skipping payment-plan recap.',
      needsAttention: [
        {
          name: 'Payment Plan Confirmation',
          score: '66%',
          detail: 'Agents agree on terms but fail to read back the payment schedule.',
        },
        {
          name: 'Compliance Disclosure',
          score: '72%',
          detail: 'Required disclosure statement skipped in 28% of calls.',
        },
      ],
      performingWell: [
        { name: 'Account Verification', score: '95%' },
        { name: 'Professional Tone Under Pressure', score: '88%' },
      ],
      recommendation: 'Add a mandatory payment-plan read-back step to the collections QA rubric.',
    },
    escalations: [
      {
        type: 'score_drop',
        kpi: 'Payment Plan Confirmation',
        detail: 'AI score 0.6pp higher than final QA score — rubric ambiguity on partial confirmations.',
      },
    ],
    topIntents: [
      { label: 'Payment Arrangement', count: 1680 },
      { label: 'Hardship Request', count: 1120 },
      { label: 'Dispute Balance', count: 840 },
      { label: 'Callback Promise', count: 520 },
    ],
    kpis: [
      { question: 'Account identity verified before discussion', type: null, avgScore: 4.7, maxScore: 5, avgPct: 95.1, prevPct: 94.8 },
      { question: 'Professional tone maintained under pressure', type: null, avgScore: 4.4, maxScore: 5, avgPct: 88.3, prevPct: 88.0 },
      { question: 'Compliance disclosure read verbatim', type: 'failing', avgScore: 3.6, maxScore: 5, avgPct: 72.0, prevPct: 74.2 },
      { question: 'Payment plan terms confirmed with customer', type: 'failing', avgScore: 3.3, maxScore: 5, avgPct: 66.4, prevPct: 70.6 },
      { question: 'Call closing — next payment date stated', type: 'failing', avgScore: 3.1, maxScore: 5, avgPct: 61.8, prevPct: 65.4 },
    ],
  },
  investment_advisory: {
    smarterAssignment: true,
    metrics: { analysisCount: 3510, qpScore: 84.1, qpScoreDelta: +0.2 },
    scoreTrend: [
      { label: 'Jun 16–22', value: 83.6 },
      { label: 'Jun 23–29', value: 83.9 },
      { label: 'Jun 30–Jul 6', value: 84.0 },
      { label: 'Jul 7–13', value: 84.1 },
    ],
    aiInsights: {
      headline: 'Investment Advisory is the strongest profile — risk disclosure and suitability checks are consistently high.',
      needsAttention: [],
      performingWell: [
        { name: 'Risk Disclosure Compliance', score: '97%' },
        { name: 'Suitability Assessment', score: '93%' },
        { name: 'Product Recommendation Clarity', score: '89%' },
      ],
      recommendation: 'Use this profile as a reference for coaching Sales Outbound on structured recommendations.',
    },
    escalations: [],
    topIntents: [
      { label: 'Portfolio Review', count: 980 },
      { label: 'Risk Assessment', count: 820 },
      { label: 'Product Recommendation', count: 640 },
      { label: 'Market Update', count: 420 },
    ],
    kpis: [
      { question: 'Risk disclosure statement delivered', type: null, avgScore: 4.9, maxScore: 5, avgPct: 97.2, prevPct: 96.8 },
      { question: 'Customer suitability assessed', type: null, avgScore: 4.6, maxScore: 5, avgPct: 93.4, prevPct: 93.0 },
      { question: 'Product recommendation clearly explained', type: null, avgScore: 4.5, maxScore: 5, avgPct: 89.1, prevPct: 88.8 },
      { question: 'Customer questions addressed before closing', type: null, avgScore: 4.3, maxScore: 5, avgPct: 86.5, prevPct: 86.0 },
      { question: 'Follow-up actions documented', type: null, avgScore: 4.2, maxScore: 5, avgPct: 84.8, prevPct: 84.2 },
    ],
  },
  technical_support: {
    smarterAssignment: true,
    metrics: { analysisCount: 0, qpScore: null, qpScoreDelta: null },
    scoreTrend: [],
    aiInsights: {
      headline:
        'Technical Support received no matched interactions this period. Review smarter assignment rules or retire unused profiles.',
      needsAttention: [],
      performingWell: [],
      recommendation:
        'Confirm assignment intent mappings include technical troubleshooting scenarios, or archive this profile if no longer in use.',
    },
    escalations: [],
    topIntents: [],
    kpis: [],
  },
};

function scaleCount(value, period) {
  return Math.round(value * PERIOD_SCALE[period]);
}

export function getAllProfilesData(period = 'month') {
  const p = baseAllProfiles[period] ?? baseAllProfiles.month;
  const uniqueInteractions = p.uniqueInteractions;
  const totalAnalysis = p.totalAnalysis;

  const summaryTable = baseSummaryRows.map((row) => ({
    ...row,
    matched: scaleCount(row.matched, period),
    avgScore: row.avgScore,
  }));

  const aiInsightRows = baseAiInsightRows.map((row) => ({
    ...row,
    matchedPct: row.matchedPct,
  }));

  const interactionMix = summaryTable
    .filter((r) => r.matched > 0)
    .map((r) => ({
      id: r.id,
      name: r.name,
      matched: r.matched,
      sharePct: matchedSharePct(r.matched, uniqueInteractions),
      avgScore: r.avgScore,
      severity: r.severity,
    }));

  return {
    period,
    metrics: {
      uniqueInteractions,
      totalAnalysis,
      totalScore: p.totalScore,
      totalScoreDelta: p.totalScoreDelta,
      uniqueDelta: scaleCount(p.uniqueDelta, period),
      analysisDelta: scaleCount(p.analysisDelta, period),
    },
    crossQpHeadline: p.crossQpHeadline,
    topPriorityAlert: p.topPriorityAlert,
    unusedProfiles: p.unusedProfiles,
    scoreDistribution: p.scoreDistribution,
    distributionInsight: p.distributionInsight,
    aiInsightRows,
    summaryTable,
    interactionMix,
  };
}

export function getQpProfile(id) {
  return QP_PROFILES.find((p) => p.id === id) ?? QP_PROFILES[0];
}

export function getQpData(id, period = 'month') {
  const base = qpDataBase[id] ?? qpDataBase.sales_outbound;
  const all = getAllProfilesData(period);
  const analysisCount = scaleCount(base.metrics.analysisCount, period);
  const totalAnalysis = all.metrics.totalAnalysis;

  return {
    ...base,
    period,
    metrics: {
      analysisCount,
      totalAnalysis,
      qpScore: base.metrics.qpScore,
      qpScoreDelta: base.metrics.qpScoreDelta,
    },
    scoreTrend: base.scoreTrend.map((pt) => ({
      ...pt,
      value: pt.value + (period === 'yesterday' ? 0.3 : period === 'week' ? 0.1 : 0),
    })),
    topIntents: base.topIntents.map((t) => ({
      ...t,
      count: scaleCount(t.count, period),
    })),
  };
}

export function analysisSharePct(analysisCount, totalAnalysis) {
  if (!totalAnalysis) return 0;
  return Math.round((analysisCount / totalAnalysis) * 1000) / 10;
}

export function matchedSharePct(matched, totalUnique) {
  if (!totalUnique) return 0;
  return Math.round((matched / totalUnique) * 1000) / 10;
}

export function formatDelta(value, suffix = '') {
  if (value == null) return null;
  const up = value >= 0;
  return { up, text: `${up ? '+' : ''}${value}${suffix}` };
}

export { WEEK_LABELS };
