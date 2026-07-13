import { cxoData, fortnightPeriods, formatDuration } from './cxoData';

export { formatDuration, fortnightPeriods };

/** Top-level CXO Lens dashboards — one active at a time. */
export const CXO_LENSES = [
  {
    id: 'sales_quality',
    label: 'Sales Quality',
    icon: 'trending_up',
    description: 'Pitch effectiveness, cross-sell risk, and call-handling quality',
  },
  {
    id: 'customer_journey',
    label: 'Customer Journey',
    icon: 'route',
    description: 'Intent flows, sentiment by touchpoint, and journey friction',
  },
  {
    id: 'compliance',
    label: 'Compliance',
    icon: 'verified_user',
    description: 'Regulatory adherence, disclosure quality, and audit risk',
  },
];

/** Fixed system prompts per lens — revealed via info icon, never shown inline. */
export const LENS_SYSTEM_PROMPTS = {
  sales_quality: `You are an executive quality analyst for a contact centre. Using fortnightly call-quality data, produce a narrative-first report for the CXO covering sales pitch effectiveness, cross-sell risk, objection handling, and call-closing quality. Lead with 3–5 actionable insights, then support with computed metrics, trend charts, and KPI deep-dives. Tone: concise, strategic, non-technical.`,
  customer_journey: `You are a customer-experience strategist. Analyse fortnightly interaction data across intents and touchpoints. Surface journey friction, sentiment shifts by day-of-week, and high-risk intents. Prioritise narrative callouts over raw tables. Recommend where to invest in journey redesign or agent coaching.`,
  compliance: `You are a compliance officer reviewing contact-centre quality. Flag disclosure gaps, script adherence failures, and regulatory risk patterns. Highlight intents and branches with elevated non-compliance rates. Keep the report audit-ready: cite metrics, name KPI groups, and separate confirmed violations from emerging risks.`,
};

const JOURNEY_INSIGHTS = [
  {
    id: 'journey_1',
    title: 'Account Closure: Highest Journey Friction',
    detail: '18.9% negative sentiment across 6,450 closure calls — agents struggle to retain customers at the final touchpoint.',
    tone: 'negative',
  },
  {
    id: 'journey_2',
    title: 'Advisory Services: Smoothest Path',
    detail: '51.3% positive with only 3.9% negative — the benchmark journey other intents should emulate.',
    tone: 'positive',
  },
  {
    id: 'journey_3',
    title: 'Mid-week Sentiment Dip',
    detail: 'Wednesday negativity at 12.3% suggests staffing or process gaps at the journey midpoint.',
    tone: 'warning',
  },
];

const COMPLIANCE_INSIGHTS = [
  {
    id: 'compliance_1',
    title: 'InvestRight Disclosure at 28.4%',
    detail: 'Mandatory app-pitch disclosure is the lowest-compliance KPI — only 28.4% of eligible calls include it.',
    tone: 'negative',
  },
  {
    id: 'compliance_2',
    title: 'Cross-sell Script Gaps',
    detail: '38.2% of cross-sell calls attempt the pitch; of those, 45.8% meet full disclosure requirements.',
    tone: 'warning',
  },
  {
    id: 'compliance_3',
    title: 'Professional Tone Holds',
    detail: '99.3% pass rate on tone and manner — compliance risk is in content, not delivery style.',
    tone: 'positive',
  },
];

function lensReportData(lensId) {
  const base = { ...cxoData };
  if (lensId === 'customer_journey') {
    return {
      ...base,
      keyInsights: JOURNEY_INSIGHTS,
      intentCallouts: [
        {
          id: 'journey_callout_1',
          title: 'Complaint Resolution: Journey Breakdown',
          detail: '22.1% negative — customers escalate when first-contact resolution fails.',
          tone: 'negative',
        },
        {
          id: 'journey_callout_2',
          title: 'Order Placement: Low Friction',
          detail: '5.8% negative across 14,200 calls — the volume leader stays on-track.',
          tone: 'positive',
        },
        {
          id: 'journey_callout_3',
          title: 'KYC Updates: Moderate Friction',
          detail: '9.2% negative; document requests add 2.3 extra minutes to average handle time.',
          tone: 'warning',
        },
      ],
      kpiDeepDive: base.kpiDeepDive.slice(0, 2),
    };
  }
  if (lensId === 'compliance') {
    return {
      ...base,
      keyInsights: COMPLIANCE_INSIGHTS,
      intentCallouts: [
        {
          id: 'compliance_callout_1',
          title: 'Cross-sell: Disclosure Risk',
          detail: '14.6% negative; only 38.2% of calls include a compliant pitch attempt.',
          tone: 'negative',
        },
        {
          id: 'compliance_callout_2',
          title: 'Loan Inquiry: Script Variance',
          detail: '11.8% negative; T&C read-back pass rate varies 40pp across branches.',
          tone: 'warning',
        },
        {
          id: 'compliance_callout_3',
          title: 'Balance Enquiry: Low Risk',
          detail: '6.4% negative with strong greeting compliance at 88.6%.',
          tone: 'positive',
        },
      ],
      kpiDeepDive: base.kpiDeepDive,
    };
  }
  return base;
}

/** Report generation status per lens × period. */
export function getReportStatus(lensId, periodId) {
  if (lensId === 'customer_journey' && periodId === 'current') return 'GENERATING';
  if (lensId === 'compliance' && periodId === 'p3') return 'EMPTY';
  if (lensId === 'compliance' && periodId === 'p2') return 'FAILED';
  return 'READY';
}

export function getLensReportData(lensId, periodId) {
  const status = getReportStatus(lensId, periodId);
  if (status !== 'READY') return null;
  return lensReportData(lensId);
}

/** History entries per lens — mirrors Custom Reports history pattern. */
export function getLensHistory(lensId) {
  return fortnightPeriods.map((p) => {
    const status = getReportStatus(lensId, p.id);
    return {
      id: `${lensId}_${p.id}`,
      lensId,
      periodId: p.id,
      periodLabel: p.label,
      status,
      createdAt: p.refreshedAt || 'Scheduled',
      nextRefreshAt: p.nextRefreshAt,
    };
  });
}

export function getLensById(lensId) {
  return CXO_LENSES.find((l) => l.id === lensId) || CXO_LENSES[0];
}

export function formatPeriodLabel(periodId) {
  const p = fortnightPeriods.find((x) => x.id === periodId);
  return p ? `Fortnight of ${p.label}` : '';
}

/**
 * Phase 2 placeholder — do NOT build here.
 * Free-text prompt input for on-demand executive reports lives on the
 * separate "Custom Reports" page (see CustomReportsView.jsx). CXO Lens
 * remains schedule-driven with fixed system prompts per dashboard.
 */
export const PHASE2_CUSTOM_PROMPT_NOTE =
  'Phase 2: ad-hoc executive prompts will remain on Custom Reports, not merged into CXO Lens.';
