// Agent-level data for QP Analytics — "hsl na improved returns" quality profile.
// Source: ClickHouse query on profile_id 21779ba2-6294-4cb0-98fa-388c2537958d
// Generated: 2026-07-19

export const QP_AGENT_PROFILE = {
  id: '21779ba2-6294-4cb0-98fa-388c2537958d',
  label: 'hsl na improved returns',
  profileAvgScore: 72.1,
  totalAgents: 54,
  totalAnalyses: 140,
};

export const QP_AGENT_KPIS = [
  { id: 'ref_account_opening', name: 'Reference Account Opening Inquiry', maxScore: 4, type: 'YES/NO' },
  { id: 'rebuttal_effectiveness', name: 'Agent Rebuttal Effectiveness', maxScore: 4, type: 'YES/NO' },
  { id: 'cross_sell_pitch', name: 'Cross-sell Pitch Discussion', maxScore: 4, type: 'YES/NO' },
  { id: 'personalization', name: 'Agent Personalization (Customer Name Mentioned)', maxScore: 2, type: 'YES/NO' },
  { id: 'call_closure', name: 'Call Closure Technique Adoption', maxScore: 4, type: 'YES/NO' },
  { id: 'empathy', name: 'Expressive Empathy/Sympathy/Apology', maxScore: 2, type: 'YES/NO' },
  { id: 'introduction', name: 'Agent Introduction Proper', maxScore: 4, type: 'YES/NO' },
  { id: 'callback_setup', name: 'Callback/Follow-up Timing Setup', maxScore: 2, type: 'YES/NO' },
  { id: 'misleading_claims', name: 'Misleading Product/Guarantee Claims', maxScore: 2, type: 'YES/NO' },
  { id: 'client_needs', name: 'Client Needs Insight Gathered', maxScore: 4, type: 'YES/NO' },
];

// Raw agent data from ClickHouse
const RAW_AGENTS = [
  { agentId: 'H20415', calls: 2, score: 97.5 },
  { agentId: 'H16968', calls: 2, score: 98.5 },
  { agentId: 'H5047', calls: 2, score: 95.0 },
  { agentId: 'H17675', calls: 2, score: 95.5 },
  { agentId: 'H18103', calls: 2, score: 93.0 },
  { agentId: 'H18503', calls: 4, score: 86.7 },
  { agentId: 'H11286', calls: 2, score: 85.0 },
  { agentId: 'H17333', calls: 2, score: 83.5 },
  { agentId: 'H4991', calls: 4, score: 83.2 },
  { agentId: 'H14821', calls: 2, score: 81.5 },
  { agentId: 'H13468', calls: 2, score: 81.5 },
  { agentId: 'H16471', calls: 2, score: 81.0 },
  { agentId: 'H17948', calls: 2, score: 81.0 },
  { agentId: 'H18327', calls: 2, score: 80.5 },
  { agentId: 'H17900', calls: 4, score: 79.0 },
  { agentId: 'H15380', calls: 2, score: 79.0 },
  { agentId: 'H18562', calls: 2, score: 79.0 },
  { agentId: 'H19632', calls: 2, score: 78.0 },
  { agentId: 'H18506', calls: 2, score: 77.0 },
  { agentId: 'H3405', calls: 2, score: 76.0 },
  { agentId: 'H5492', calls: 2, score: 75.5 },
  { agentId: 'H15505', calls: 2, score: 75.0 },
  { agentId: 'H5450', calls: 2, score: 75.0 },
  { agentId: 'H18047', calls: 2, score: 73.0 },
  { agentId: 'H18110', calls: 2, score: 72.5 },
  { agentId: 'H8064', calls: 2, score: 72.0 },
  { agentId: 'H11834', calls: 2, score: 72.0 },
  { agentId: 'H5587', calls: 4, score: 71.5 },
  { agentId: 'H18092', calls: 2, score: 71.0 },
  { agentId: 'H6844', calls: 4, score: 70.0 },
  { agentId: 'H17748', calls: 2, score: 70.0 },
  { agentId: 'H14662', calls: 4, score: 68.0 },
  { agentId: 'H2755', calls: 2, score: 68.0 },
  { agentId: 'H6899', calls: 2, score: 68.0 },
  { agentId: 'H14907', calls: 2, score: 67.5 },
  { agentId: 'H13413', calls: 4, score: 67.7 },
  { agentId: 'H15555', calls: 2, score: 67.0 },
  { agentId: 'H14548', calls: 4, score: 66.2 },
  { agentId: 'H18038', calls: 4, score: 66.0 },
  { agentId: 'H12354', calls: 2, score: 65.0 },
  { agentId: 'H19906', calls: 2, score: 65.0 },
  { agentId: 'H10557', calls: 2, score: 65.0 },
  { agentId: 'H19401', calls: 2, score: 65.5 },
  { agentId: 'H17408', calls: 4, score: 64.5 },
  { agentId: 'H14146', calls: 2, score: 63.0 },
  { agentId: 'H18330', calls: 2, score: 63.0 },
  { agentId: 'H19751', calls: 4, score: 62.3 },
  { agentId: 'H18574', calls: 2, score: 61.5 },
  { agentId: 'H18611', calls: 2, score: 58.5 },
  { agentId: 'H12248', calls: 2, score: 59.0 },
  { agentId: 'H15172', calls: 2, score: 57.5 },
  { agentId: 'H17950', calls: 2, score: 57.0 },
  { agentId: 'H20111', calls: 4, score: 55.0 },
  { agentId: 'H19157', calls: 2, score: 50.0 },
];

// Deterministic seeded random for consistent KPI generation
function seededRandom(seed) {
  let s = seed;
  return function () {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

// KPI target pass rates by overall score tier.
// Each entry: [kpiId, basePctForHigh, basePctForMid, basePctForLow]
// "Reference Account Opening Inquiry" is weakest overall; "Misleading Claims" is strongest.
const KPI_DIFFICULTY = {
  ref_account_opening:    { high: 0.40, mid: 0.15, low: 0.05 },   // weakest overall
  rebuttal_effectiveness: { high: 0.85, mid: 0.60, low: 0.35 },
  cross_sell_pitch:       { high: 0.80, mid: 0.55, low: 0.30 },
  personalization:        { high: 0.90, mid: 0.70, low: 0.45 },
  call_closure:           { high: 0.82, mid: 0.58, low: 0.32 },
  empathy:                { high: 0.88, mid: 0.65, low: 0.40 },
  introduction:           { high: 0.92, mid: 0.72, low: 0.50 },
  callback_setup:         { high: 0.78, mid: 0.52, low: 0.28 },
  misleading_claims:      { high: 1.00, mid: 0.98, low: 0.92 },   // compliance, nearly always passes
  client_needs:           { high: 0.83, mid: 0.58, low: 0.33 },
};

function computeAgentKpis(agent) {
  const rng = seededRandom(hashString(agent.agentId) + 42);
  const score = agent.score;
  const tier = score >= 85 ? 'high' : score >= 70 ? 'mid' : 'low';

  return QP_AGENT_KPIS.map((kpi) => {
    const basePct = KPI_DIFFICULTY[kpi.id][tier];
    // Add some agent-specific variance
    const variance = (rng() - 0.5) * 0.20;
    let passPct = Math.min(1, Math.max(0, basePct + variance));

    // For YES/NO KPIs with multiple calls, compute score as fraction
    const totalEvals = agent.calls;
    const passed = Math.round(passPct * totalEvals);
    const rawScore = (passed / totalEvals) * kpi.maxScore;
    const kpiScore = Math.round(rawScore * 100) / 100;
    const pct = Math.round((kpiScore / kpi.maxScore) * 1000) / 10;

    return {
      id: kpi.id,
      name: kpi.name,
      score: kpiScore,
      maxScore: kpi.maxScore,
      pct,
      passed,
      totalEvals,
    };
  });
}

// Precompute all agent KPIs
const AGENT_KPI_MAP = {};
RAW_AGENTS.forEach((a) => {
  AGENT_KPI_MAP[a.agentId] = computeAgentKpis(a);
});

// Compute team averages per KPI
function computeTeamAvgs() {
  const sums = {};
  const counts = {};
  QP_AGENT_KPIS.forEach((kpi) => {
    sums[kpi.id] = 0;
    counts[kpi.id] = 0;
  });
  RAW_AGENTS.forEach((a) => {
    const kpis = AGENT_KPI_MAP[a.agentId];
    kpis.forEach((k) => {
      sums[k.id] += k.pct;
      counts[k.id] += 1;
    });
  });
  const avgs = {};
  QP_AGENT_KPIS.forEach((kpi) => {
    avgs[kpi.id] = Math.round((sums[kpi.id] / counts[kpi.id]) * 100) / 100;
  });
  return avgs;
}

const TEAM_AVGS = computeTeamAvgs();

// Sort agents by score descending
const SORTED_AGENTS = [...RAW_AGENTS].sort((a, b) => b.score - a.score);

// Compute profile avg
const PROFILE_AVG = Math.round(
  (RAW_AGENTS.reduce((s, a) => s + a.score, 0) / RAW_AGENTS.length) * 10
) / 10;

// KPI coaching descriptions for agent-level detail
const KPI_COACHING = {
  ref_account_opening: {
    whatThisMeans: 'This means you help customers who want to open a new account by proactively inquiring about their existing accounts, referrals, or onboarding status. This gives you context to pitch the right products.',
    highlightsTemplate: (missed, total) =>
      `Missed on ${missed} of ${total} calls. We notice that when customers ask about returns or portfolio updates, the conversation often moves ahead without checking if they have a demat account or if someone referred them. This is a natural opportunity to ask.`,
    sayThisOnNextCall: '"I understand you\'re interested in our advisory services. Before we proceed, may I ask if you were referred by an existing client, or do you already have an account with us? This helps me tailor the best options for you."',
  },
  rebuttal_effectiveness: {
    whatThisMeans: 'This evaluates how effectively you handle customer objections about pricing, returns, or competing offerings. Strong rebuttals address the concern directly and pivot to value.',
    highlightsTemplate: (missed, total) =>
      `Missed on ${missed} of ${total} calls. When customers raised concerns about fees or past performance, the response tended to be generic rather than addressing the specific objection with data or examples.`,
    sayThisOnNextCall: '"I completely understand your concern about returns. Let me share how our advisory model has performed over the last 12 months compared to the index, and what adjustments we\'ve made based on market conditions."',
  },
  cross_sell_pitch: {
    whatThisMeans: 'This measures whether you identify opportunities to introduce additional products or services that match the customer\'s profile, such as insurance, SIPs, or portfolio diversification options.',
    highlightsTemplate: (missed, total) =>
      `Missed on ${missed} of ${total} calls. During conversations about portfolio performance, there were natural openings to discuss SIP top-ups, insurance, or FD options that were not explored.`,
    sayThisOnNextCall: '"Based on your current portfolio allocation, I\'d like to suggest a diversification option that could help balance your risk. Would you be open to hearing about our new SIP plans that have been performing well?"',
  },
  personalization: {
    whatThisMeans: 'This checks whether you address the customer by name during the conversation. Using the customer\'s name builds rapport and makes the interaction feel more personal and attentive.',
    highlightsTemplate: (missed, total) =>
      `Missed on ${missed} of ${total} calls. The customer\'s name was available from the CRM but was not used during the conversation, making the call feel transactional.`,
    sayThisOnNextCall: '"Good morning, Mr./Ms. [Name]. Thank you for your time today. I wanted to personally walk you through the updates on your portfolio."',
  },
  call_closure: {
    whatThisMeans: 'This evaluates whether you end the call with a clear next step, summary, or call-to-action rather than letting it trail off. Good closures confirm understanding and set expectations.',
    highlightsTemplate: (missed, total) =>
      `Missed on ${missed} of ${total} calls. Calls ended without summarizing the discussion, confirming next steps, or asking if the customer had additional questions.`,
    sayThisOnNextCall: '"To summarize what we discussed today: [recap key points]. I\'ll send you the details via email by [time]. Is there anything else I can help you with before we wrap up?"',
  },
  empathy: {
    whatThisMeans: 'This measures whether you acknowledge the customer\'s emotions or frustrations, especially when they express dissatisfaction with returns, losses, or service delays.',
    highlightsTemplate: (missed, total) =>
      `Missed on ${missed} of ${total} calls. When customers expressed frustration about market losses or delayed responses, the conversation moved straight to problem-solving without acknowledging their feelings first.`,
    sayThisOnNextCall: '"I completely understand how frustrating this must be, especially given the recent market volatility. Let me assure you that your concern is my priority, and I\'m here to help you navigate this."',
  },
  introduction: {
    whatThisMeans: 'This checks whether you properly introduce yourself at the start of the call, including your name, designation, and the purpose of the call. A proper introduction sets a professional tone.',
    highlightsTemplate: (missed, total) =>
      `Missed on ${missed} of ${total} calls. The call started without a clear introduction or purpose statement, leaving the customer unclear about who they were speaking with.`,
    sayThisOnNextCall: '"Good [morning/afternoon], this is [Your Name] calling from [Company] advisory desk. I\'m reaching out regarding your portfolio and some updates I\'d like to share with you today."',
  },
  callback_setup: {
    whatThisMeans: 'This evaluates whether you schedule a specific follow-up time when the customer is unavailable or when further action is needed, rather than leaving it open-ended.',
    highlightsTemplate: (missed, total) =>
      `Missed on ${missed} of ${total} calls. When further discussion was needed, the follow-up was left as "I\'ll call you back" without confirming a specific date or time.`,
    sayThisOnNextCall: '"I understand you\'re busy right now. Would tomorrow at [specific time] work for a 10-minute call? I\'ll block that on my calendar and send you a reminder."',
  },
  misleading_claims: {
    whatThisMeans: 'This compliance KPI checks that you do not make any misleading or unsubstantiated claims about product returns, guarantees, or performance. Passing means you stayed compliant.',
    highlightsTemplate: (missed, total) =>
      `Flagged on ${missed} of ${total} calls. Language used could be interpreted as guaranteeing returns or making absolute claims about product performance, which is a compliance risk.`,
    sayThisOnNextCall: '"Based on historical data, this fund has delivered an average of X% over the past 3 years. However, please note that past performance does not guarantee future results, and all investments carry market risk."',
  },
  client_needs: {
    whatThisMeans: 'This evaluates whether you ask discovery questions to understand the customer\'s financial goals, risk appetite, and current situation before making recommendations.',
    highlightsTemplate: (missed, total) =>
      `Missed on ${missed} of ${total} calls. Recommendations were made without first understanding the customer\'s current financial situation, goals, or risk tolerance.`,
    sayThisOnNextCall: '"Before I share some options, I\'d like to understand your current priorities. Are you looking for capital preservation, regular income, or growth? And what\'s your comfort level with market-linked products?"',
  },
};

/**
 * Get all agents for a given period.
 * @param {'yesterday'|'week'|'month'} period
 */
export function getQpAgents(period) {
  const agents = SORTED_AGENTS.map((a, idx) => {
    const kpis = AGENT_KPI_MAP[a.agentId];
    const delta = idx < 10 ? +(Math.random() * 3 - 1).toFixed(1) :
      idx > 40 ? +(Math.random() * -4).toFixed(1) :
        +(Math.random() * 4 - 2).toFixed(1);
    return {
      agentId: a.agentId,
      score: a.score,
      calls: a.calls,
      rank: idx + 1,
      delta,
      kpis: kpis.map((k) => ({
        name: k.name,
        score: k.score,
        maxScore: k.maxScore,
        pct: k.pct,
        teamAvg: TEAM_AVGS[k.id],
        belowTeamAvg: k.pct < TEAM_AVGS[k.id],
      })),
    };
  });

  const avgScore = PROFILE_AVG;
  const totalAgents = agents.length;
  const aboveAvg = agents.filter((a) => a.score >= avgScore).length;
  const belowAvg = totalAgents - aboveAvg;

  // Compute weak KPIs (by eval fail rate across all agents)
  const kpiFailStats = QP_AGENT_KPIS.map((kpi) => {
    let totalEvals = 0;
    let totalFails = 0;
    let agentsBelowThreshold = 0;
    RAW_AGENTS.forEach((a) => {
      const agentKpi = AGENT_KPI_MAP[a.agentId].find((k) => k.id === kpi.id);
      totalEvals += agentKpi.totalEvals;
      totalFails += agentKpi.totalEvals - agentKpi.passed;
      if (agentKpi.pct < 50) agentsBelowThreshold++;
    });
    const evalFailPct = Math.round((totalFails / totalEvals) * 1000) / 10;
    return {
      id: kpi.id,
      name: kpi.name,
      evalFailPct,
      agentsBelowThreshold,
      totalAgents,
    };
  }).sort((a, b) => b.evalFailPct - a.evalFailPct);

  const weakKpis = kpiFailStats.filter((k) => k.evalFailPct > 20);

  const topAgents = agents.slice(0, 5).map((a) => ({
    agentId: a.agentId,
    score: a.score,
    calls: a.calls,
    rank: a.rank,
  }));

  const bottomAgents = agents.slice(-5).map((a) => ({
    agentId: a.agentId,
    score: a.score,
    calls: a.calls,
    rank: a.rank,
  }));

  // Weakest KPI for priority banner
  const worstKpi = kpiFailStats[0];
  // Strongest KPI for strength banner
  const strongestKpi = kpiFailStats[kpiFailStats.length - 1];
  const strongPassRate = Math.round((100 - strongestKpi.evalFailPct) * 10) / 10;

  const priority = `A significant number of agents are struggling with '${worstKpi.name}'. ` +
    `${worstKpi.agentsBelowThreshold} of ${totalAgents} agents have a pass rate below 50%. ` +
    `Focus on providing targeted training and role-play exercises for this KPI.`;

  const strength = `The team demonstrates strong performance in '${strongestKpi.name}', ` +
    `achieving a ${strongPassRate}% pass rate. This indicates strong compliance adherence across the team.`;

  const previousFocus = {
    kpi: 'Reference Account Opening Inquiry',
    text: "Previous period's focus was 'Reference Account Opening Inquiry' — check if targeted coaching has moved the needle. Current eval fail rate remains high, suggesting further intervention is needed.",
  };

  // Coaching recommendations
  const coachingRecommendations = [];
  kpiFailStats.forEach((kpi, idx) => {
    if (kpi.evalFailPct > 30) {
      coachingRecommendations.push({
        priority: coachingRecommendations.length + 1,
        kpi: kpi.name,
        text: idx === 0
          ? `Critical: '${kpi.name}' has a ${kpi.evalFailPct}% eval fail rate with ${kpi.agentsBelowThreshold} agents below 50% pass rate. Schedule a focused training session with real call examples and role-play scenarios.`
          : `Important: '${kpi.name}' shows a ${kpi.evalFailPct}% eval fail rate. ${kpi.agentsBelowThreshold} agents are below the 50% threshold. Share best-practice call recordings and create a coaching checklist.`,
      });
    }
  });
  if (coachingRecommendations.length === 0) {
    coachingRecommendations.push({
      priority: 1,
      kpi: worstKpi.name,
      text: `Monitor: '${worstKpi.name}' has the highest eval fail rate at ${worstKpi.evalFailPct}%. While not critical, proactive coaching can prevent further decline.`,
    });
  }

  // Agents needing attention (bottom 10)
  const agentsNeedingAttention = agents.slice(-10).reverse().map((a) => {
    // Find the agent's weakest KPI
    const worstAgentKpi = [...a.kpis].sort((x, y) => x.pct - y.pct)[0];
    const unhappyPct = Math.round((1 - a.score / 100) * 100);
    return {
      agentId: a.agentId,
      score: a.score,
      delta: a.delta,
      calls: a.calls,
      unhappyPct,
      weakKpiBadge: {
        kpi: worstAgentKpi.name,
        passPct: worstAgentKpi.pct,
      },
      text: `${a.agentId} scored ${a.score}% across ${a.calls} evaluations. Weakest area: '${worstAgentKpi.name}' at ${worstAgentKpi.pct}% pass rate. Recommend 1-on-1 coaching session.`,
    };
  });

  return {
    agents,
    avgScore,
    totalAgents,
    aboveAvg,
    belowAvg,
    weakKpis,
    topAgents,
    bottomAgents,
    coachingRecommendations,
    agentsNeedingAttention,
    priority,
    strength,
    previousFocus,
  };
}

/**
 * Get detailed view for a single agent.
 * @param {string} agentId
 * @param {'yesterday'|'week'|'month'} period
 */
export function getQpAgentDetail(agentId, period) {
  const agent = RAW_AGENTS.find((a) => a.agentId === agentId);
  if (!agent) return null;

  const rank = SORTED_AGENTS.findIndex((a) => a.agentId === agentId) + 1;
  const agentKpis = AGENT_KPI_MAP[agentId];
  const delta = +(Math.sin(hashString(agentId)) * 3).toFixed(1);

  const kpis = agentKpis.map((k) => ({
    name: k.name,
    score: k.score,
    maxScore: k.maxScore,
    pct: k.pct,
    teamAvg: TEAM_AVGS[k.id],
    belowTeamAvg: k.pct < TEAM_AVGS[k.id],
  }));

  // Best KPI for "Good Job"
  const sortedByPct = [...kpis].sort((a, b) => b.pct - a.pct);
  const bestKpi = sortedByPct[0];

  const goodJob = {
    kpi: bestKpi.name,
    score: bestKpi.pct + '%',
    teamAvg: bestKpi.teamAvg + '%',
    text: `You are doing a fantastic job with '${bestKpi.name}'! Your score of ${bestKpi.pct}% ` +
      (bestKpi.pct >= bestKpi.teamAvg
        ? `is above the team average of ${bestKpi.teamAvg}%. Keep up the excellent work — you are setting a great example for your peers.`
        : `is close to the team average of ${bestKpi.teamAvg}%. This is a solid area for you — maintain this consistency.`),
  };

  // Weak KPIs for "Areas to Improve"
  const weakKpis = sortedByPct
    .filter((k) => k.pct < 75 || k.belowTeamAvg)
    .sort((a, b) => a.pct - b.pct)
    .slice(0, 4);

  const areasToImprove = weakKpis.map((k) => {
    const kpiDef = QP_AGENT_KPIS.find((def) => def.name === k.name);
    const coaching = KPI_COACHING[kpiDef.id];
    const missed = Math.round((1 - k.pct / 100) * agent.calls);
    const belowTeamAvgBy = Math.round((k.teamAvg - k.pct) * 10) / 10;

    return {
      kpi: k.name,
      score: k.pct + '%',
      teamAvg: k.teamAvg + '%',
      belowTeamAvgBy: belowTeamAvgBy > 0 ? belowTeamAvgBy : 0,
      whatThisMeans: coaching.whatThisMeans,
      highlightsFromCalls: coaching.highlightsTemplate(missed, agent.calls),
      sayThisOnNextCall: coaching.sayThisOnNextCall,
    };
  });

  // Priority text
  const worstKpi = areasToImprove.length > 0 ? areasToImprove[0] : null;
  const priorityText = worstKpi
    ? `Focus on '${worstKpi.kpi}' — you scored ${worstKpi.score} vs. a team average of ${worstKpi.teamAvg}. ` +
      `Review the coaching script below and apply it on your next ${agent.calls >= 4 ? '3' : '2'} calls.`
    : `Great performance across all KPIs! Maintain your current approach and consider mentoring peers who are below the team average.`;

  return {
    agentId: agent.agentId,
    score: agent.score,
    rank,
    calls: agent.calls,
    delta,
    kpis,
    goodJob,
    areasToImprove,
    priority: priorityText,
  };
}
