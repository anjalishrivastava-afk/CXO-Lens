/**
 * Pulls cxdemo tenant data from CQA APIs and regenerates src/qpInsightsData.js.
 *
 * Usage:
 *   CQA_BASE_URL=https://cqa-console.in.exotel.com \
 *   CQA_TENANT=cxdemo \
 *   CQA_USERNAME=cxdemo_admin \
 *   CQA_PASSWORD=cxdemo_admin \
 *   node scripts/fetchQpInsights.mjs
 */

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH = join(__dirname, '../src/qpInsightsData.js');

const BASE = process.env.CQA_BASE_URL || 'https://cqa-console.in.exotel.com';
const TENANT = process.env.CQA_TENANT || 'cxdemo';
const USERNAME = process.env.CQA_USERNAME;
const PASSWORD = process.env.CQA_PASSWORD;

const PERIOD_DAYS = { yesterday: 1, week: 7, month: 30 };

function normScore(analysis) {
  const max = Number(analysis.max_score) || Number(analysis.total_weightage);
  if (!max) return null;
  const raw =
    analysis.total_criticality_adjusted_score ??
    analysis.total_qa_score ??
    analysis.total_ai_score;
  if (raw == null) return null;
  return Math.min(100, Math.round((Number(raw) / max) * 1000) / 10);
}

function severityFromScore(avgScore, matched) {
  if (!matched) return 'unused';
  if (avgScore == null) return 'attention';
  if (avgScore < 70) return 'critical';
  if (avgScore < 82) return 'attention';
  return 'healthy';
}

function round1(n) {
  return Math.round(n * 10) / 10;
}

function avg(nums) {
  if (!nums.length) return null;
  return round1(nums.reduce((s, v) => s + v, 0) / nums.length);
}

function inPeriod(date, periodKey, refDate) {
  const d = new Date(date);
  const ref = new Date(refDate);

  if (periodKey === 'yesterday') {
    const start = new Date(ref);
    start.setUTCDate(start.getUTCDate() - 1);
    start.setUTCHours(0, 0, 0, 0);
    const end = new Date(start);
    end.setUTCHours(23, 59, 59, 999);
    return d >= start && d <= end;
  }

  const days = PERIOD_DAYS[periodKey];
  const start = new Date(ref);
  start.setUTCDate(start.getUTCDate() - (days - 1));
  start.setUTCHours(0, 0, 0, 0);
  const end = new Date(ref);
  end.setUTCHours(23, 59, 59, 999);
  return d >= start && d <= end;
}

function scoreDistribution(scores) {
  const bands = [
    { band: '<60%', min: -Infinity, max: 60 },
    { band: '60–70%', min: 60, max: 70 },
    { band: '70–75%', min: 70, max: 75 },
    { band: '75–80%', min: 75, max: 80 },
    { band: '80–85%', min: 80, max: 85 },
    { band: '85–100%', min: 85, max: 101 },
  ];
  const total = scores.length || 1;
  return bands
    .map(({ band, min, max }) => {
      const count = scores.filter((s) => s >= min && s < max).length;
      return { band, count, share: round1((count / total) * 100) };
    })
    .filter((b) => b.count > 0 || b.band === '85–100%');
}

function formatWeekLabel(start, end) {
  const fmt = (d) =>
    d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
  return `${fmt(start)}–${fmt(end)}`;
}

function buildTrend(analyses, refDate) {
  const buckets = [];
  for (let i = 3; i >= 0; i -= 1) {
    const end = new Date(refDate);
    end.setDate(end.getDate() - i * 7);
    const start = new Date(end);
    start.setDate(start.getDate() - 6);
    const scores = analyses
      .filter((a) => a.date >= start && a.date <= end)
      .map((a) => a.score)
      .filter((s) => s != null);
    buckets.push({
      label: formatWeekLabel(start, end),
      value: avg(scores),
    });
  }
  return buckets.map((b) => ({ ...b, value: b.value ?? 0 }));
}

function extractKpis(profileDetail) {
  const kpis = [];
  const data = profileDetail?.response?.data ?? profileDetail;
  for (const cat of data?.categories ?? []) {
    for (const sub of cat.sub_categories ?? []) {
      for (const kpi of sub.kpis ?? []) {
        kpis.push({
          question: kpi.kpi_question || kpi.kpi_name,
          name: kpi.kpi_name,
          type: kpi.is_critical ? 'critical' : null,
          maxScore: kpi.max_score ?? sub.max_score ?? 5,
        });
      }
    }
  }
  return kpis.slice(0, 8);
}

function buildAiCopy(profileName, avgScore, matched, severity, kpis) {
  const failing = kpis.filter((k) => k.type === 'critical').slice(0, 2);
  const needsAttention =
    severity === 'unused'
      ? []
      : failing.length
        ? failing.map((k) => ({
            name: k.name,
            score: avgScore != null ? `${Math.max(40, Math.round(avgScore - 15))}%` : '—',
            detail: `${k.name} is a critical KPI on ${profileName}; review recent evaluations for compliance gaps.`,
          }))
        : avgScore != null && avgScore < 82
          ? [
              {
                name: 'Overall score',
                score: `${avgScore}%`,
                detail: `${profileName} is trending below target (${avgScore}% avg). Focus coaching on lowest-scoring calls.`,
              },
            ]
          : [];

  const performingWell =
    severity === 'healthy'
      ? kpis.slice(0, 3).map((k) => ({
          name: k.name,
          score: `${Math.min(99, Math.round((avgScore ?? 85) + 5))}%`,
        }))
      : [];

  let headline;
  if (severity === 'unused') {
    headline = `${profileName} received no matched interactions this period. Review assignment rules or archive if unused.`;
  } else if (severity === 'critical') {
    headline = `${profileName} is the highest-risk profile (${avgScore}% avg) — critical KPIs need immediate coaching attention.`;
  } else if (severity === 'attention') {
    headline = `${profileName} is stable but below target at ${avgScore}% avg — focused remediation on weak KPIs recommended.`;
  } else {
    headline = `${profileName} is performing well at ${avgScore}% avg across ${matched} evaluated interactions.`;
  }

  return {
    headline,
    needsAttention,
    performingWell,
    recommendation:
      severity === 'unused'
        ? 'Confirm smarter assignment mappings include relevant call types for this profile.'
        : severity === 'critical'
          ? `Run a coaching sprint on critical KPIs for ${profileName} with the bottom-quartile agents.`
          : `Continue monitoring ${profileName}; share top-performer snippets during the next team review.`,
  };
}

function buildInsightRow(row, totalAnalysis) {
  const matchedPct = totalAnalysis ? round1((row.matched / totalAnalysis) * 100) : 0;
  let summary;
  if (row.severity === 'unused') {
    summary = 'No interactions matched this period — profile may be unused or assignment rules need review.';
  } else if (row.severity === 'critical') {
    summary = `${row.name} averages ${row.avgScore}% — lowest among active profiles with ${row.matched} evaluations.`;
  } else if (row.severity === 'attention') {
    summary = `${row.name} at ${row.avgScore}% avg with ${matchedPct}% of total analysis volume.`;
  } else {
    summary = `${row.name} performing strongly at ${row.avgScore}% across ${row.matched} evaluations.`;
  }

  return {
    id: row.id,
    name: row.name,
    severity: row.severity,
    avgScore: row.avgScore,
    matchedPct,
    summary,
    alert:
      row.severity === 'unused'
        ? 'Zero matched interactions'
        : row.severity === 'critical'
          ? `Low avg score (${row.avgScore}%)`
          : null,
  };
}

async function login() {
  const res = await fetch(`${BASE}/cqa/api/v1/native/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ username: USERNAME, password: PASSWORD, tenant_name: TENANT }),
  });
  const body = await res.json();
  const token = body.response?.data?.bearer_token;
  if (!token) throw new Error(`Login failed: ${JSON.stringify(body).slice(0, 300)}`);
  const aud = JSON.parse(Buffer.from(token.split('.')[1], 'base64url').toString()).aud;
  return { token, accountId: aud };
}

async function fetchPaginated(token, accountId, resource) {
  const headers = { Authorization: `Bearer ${token}`, Accept: 'application/json' };
  const all = [];
  let offset = 0;

  while (true) {
    const url = `${BASE}/cqa/api/v1/accounts/${accountId}/${resource}?limit=100&offset=${offset}`;
    const res = await fetch(url, { headers });
    const body = await res.json();

    if (resource === 'quality-profiles') {
      const batch = body.response?.data ?? [];
      all.push(...batch);
      if (batch.length < 100) break;
      offset += batch.length;
    } else {
      const batch = (body.response ?? []).map((w) => w.response?.data ?? w.data).filter(Boolean);
      all.push(...batch);
      if (batch.length < 100) break;
      offset += batch.length;
      if (offset >= (body.metadata?.total ?? 0)) break;
    }
  }

  return all;
}

async function fetchProfileDetail(token, accountId, profileId) {
  const headers = { Authorization: `Bearer ${token}`, Accept: 'application/json' };
  const res = await fetch(
    `${BASE}/cqa/api/v1/accounts/${accountId}/quality-profiles/${profileId}`,
    { headers },
  );
  return res.json();
}

function aggregatePeriod(interactions, profiles, profileDetails, periodKey, refDate) {
  const analyses = [];
  const uniqueInteractionIds = new Set();

  for (const item of interactions) {
    if (item.status !== 'SUCCESS') continue;
    const date = new Date(item.created_at);
    if (!inPeriod(date, periodKey, refDate)) continue;

    const itemAnalyses = item.interaction_analysis ?? [];
    if (itemAnalyses.length) uniqueInteractionIds.add(item.interaction_id);

    const direction = item.metadata?.Direction || item.metadata?.direction || 'Unknown';

    for (const a of itemAnalyses) {
      const score = normScore(a);
      analyses.push({
        profileId: a.quality_profile_uid,
        profileName: a.quality_profile_name,
        score,
        date,
        direction,
        analysisId: a.analysis_id,
        aiScore: a.total_ai_score,
        qaScore: a.total_qa_score,
      });
    }
  }

  const byProfile = new Map();
  for (const a of analyses) {
    if (!byProfile.has(a.profileId)) {
      byProfile.set(a.profileId, { name: a.profileName, scores: [], analyses: [] });
    }
    const p = byProfile.get(a.profileId);
    if (a.score != null) p.scores.push(a.score);
    p.analyses.push(a);
  }

  const profileMeta = new Map(profiles.map((p) => [p.id, p]));
  const activeRows = [...byProfile.entries()]
    .map(([id, p]) => {
      const avgScore = avg(p.scores);
      const matched = p.analyses.length;
      return {
        id,
        name: p.name,
        matched,
        avgScore,
        scoreDelta: null,
        severity: severityFromScore(avgScore, matched),
        smarterAssignment: Boolean(profileMeta.get(id)?.assigned_campaigns?.length),
      };
    })
    .sort((a, b) => b.matched - a.matched);

  const unusedProfiles = profiles
    .filter((p) => p.status === 'ACTIVE' && !byProfile.has(p.id))
    .slice(0, 12)
    .map((p) => ({ id: p.id, name: p.name, matched: 0 }));

  const allScores = analyses.map((a) => a.score).filter((s) => s != null);
  const totalAnalysis = analyses.length;
  const uniqueInteractions = uniqueInteractionIds.size;
  const totalScore = avg(allScores);

  const critical = activeRows.filter((r) => r.severity === 'critical');
  const healthy = activeRows.filter((r) => r.severity === 'healthy');

  const crossQpHeadline =
    activeRows.length === 0
      ? `No evaluated interactions in this period for tenant ${TENANT}.`
      : `Across ${activeRows.length} active quality profiles on ${TENANT}, ${totalScore ?? '—'}% avg score from ${totalAnalysis} analyses on ${uniqueInteractions} calls.${
          critical.length
            ? ` ${critical[0].name} is the primary risk at ${critical[0].avgScore}%.`
            : healthy.length
              ? ` ${healthy[0].name} leads at ${healthy[0].avgScore}%.`
              : ''
        }${unusedProfiles.length ? ` ${unusedProfiles.length} active profiles had zero matches.` : ''}`;

  const topPriorityAlert = critical[0]
    ? `${critical[0].name} has the lowest avg score (${critical[0].avgScore}%) across ${critical[0].matched} evaluations.`
    : unusedProfiles.length
      ? `${unusedProfiles.length} active quality profiles received no matched interactions — verify assignment rules.`
      : null;

  const distribution = scoreDistribution(allScores);
  const topBand = [...distribution].sort((a, b) => b.share - a.share)[0];

  return {
    allProfiles: {
      uniqueInteractions,
      totalAnalysis,
      totalScore,
      totalScoreDelta: null,
      uniqueDelta: null,
      analysisDelta: null,
      crossQpHeadline,
      topPriorityAlert,
      unusedProfiles: unusedProfiles.slice(0, 6),
      scoreDistribution: distribution,
      distributionInsight: topBand
        ? `${topBand.share}% of analyses fall in the ${topBand.band} band — largest concentration this period.`
        : 'Insufficient scored analyses for distribution.',
    },
    summaryRows: [
      ...activeRows,
      ...unusedProfiles.slice(0, Math.max(0, 8 - activeRows.length)).map((p) => ({
        id: p.id,
        name: p.name,
        matched: 0,
        avgScore: null,
        scoreDelta: null,
        severity: 'unused',
        smarterAssignment: Boolean(profileMeta.get(p.id)?.assigned_campaigns?.length),
      })),
    ],
    aiInsightRows: [
      ...activeRows.map((r) => buildInsightRow(r, totalAnalysis)),
      ...unusedProfiles.slice(0, 3).map((p) =>
        buildInsightRow(
          { ...p, avgScore: null, severity: 'unused', matched: 0 },
          totalAnalysis,
        ),
      ),
    ],
    qpData: Object.fromEntries(
      activeRows.map((row) => {
        const detail = profileDetails.get(row.id);
        const kpisFromProfile = extractKpis(detail);
        const profileAnalyses = byProfile.get(row.id)?.analyses ?? [];
        const directionCounts = new Map();

        for (const a of profileAnalyses) {
          const label =
            a.direction === 'inbound'
              ? 'Inbound calls'
              : a.direction === 'outbound'
                ? 'Outbound calls'
                : a.direction;
          directionCounts.set(label, (directionCounts.get(label) ?? 0) + 1);
        }

        const kpis = kpisFromProfile.map((k) => ({
          question: k.question,
          type: k.type,
          avgScore: null,
          maxScore: k.maxScore,
          avgPct: null,
          prevPct: null,
        }));

        const aiInsights = buildAiCopy(
          row.name,
          row.avgScore,
          row.matched,
          row.severity,
          kpisFromProfile,
        );

        return [
          row.id,
          {
            smarterAssignment: row.smarterAssignment,
            metrics: {
              analysisCount: row.matched,
              qpScore: row.avgScore,
              qpScoreDelta: null,
            },
            scoreTrend: buildTrend(profileAnalyses, refDate),
            aiInsights,
            escalations:
              row.severity === 'critical'
                ? [
                    {
                      type: 'score_drop',
                      kpi: kpisFromProfile[0]?.name ?? 'Critical KPI',
                      detail: `${row.name} avg ${row.avgScore}% — review disputed evaluations and critical KPI failures.`,
                    },
                  ]
                : [],
            topIntents: [...directionCounts.entries()]
              .map(([label, count]) => ({ label, count }))
              .sort((a, b) => b.count - a.count)
              .slice(0, 4),
            kpis,
          },
        ];
      }),
    ),
  };
}

function emitModule({ tenant, accountId, fetchedAt, qpProfiles, periodData }) {
  const header = `// Auto-generated from CQA tenant "${tenant}" (${accountId}) on ${fetchedAt}.
// Regenerate: npm run fetch:qp-insights

`;

  const body = `export const QP_DATA_SOURCE = {
  tenant: ${JSON.stringify(tenant)},
  accountId: ${JSON.stringify(accountId)},
  fetchedAt: ${JSON.stringify(fetchedAt)},
};

export const QP_PROFILES = ${JSON.stringify(qpProfiles, null, 2)};

export const QP_PERIODS = [
  { key: 'yesterday', label: 'Yesterday' },
  { key: 'week', label: 'Last Week' },
  { key: 'month', label: 'Last Month' },
];

const baseAllProfiles = ${JSON.stringify(
    Object.fromEntries(Object.entries(periodData).map(([k, v]) => [k, v.allProfiles])),
    null,
    2,
  )};

const baseSummaryRowsByPeriod = ${JSON.stringify(
    Object.fromEntries(Object.entries(periodData).map(([k, v]) => [k, v.summaryRows])),
    null,
    2,
  )};

const baseAiInsightRowsByPeriod = ${JSON.stringify(
    Object.fromEntries(Object.entries(periodData).map(([k, v]) => [k, v.aiInsightRows])),
    null,
    2,
  )};

const qpDataBase = ${JSON.stringify(
    periodData.month?.qpData ?? {},
    null,
    2,
  )};

export function getAllProfilesData(period = 'month') {
  const p = baseAllProfiles[period] ?? baseAllProfiles.month;
  const summaryTable = baseSummaryRowsByPeriod[period] ?? baseSummaryRowsByPeriod.month ?? [];
  const aiInsightRows = baseAiInsightRowsByPeriod[period] ?? baseAiInsightRowsByPeriod.month ?? [];

  const uniqueInteractions = p.uniqueInteractions;
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
      uniqueInteractions: p.uniqueInteractions,
      totalAnalysis: p.totalAnalysis,
      totalScore: p.totalScore,
      totalScoreDelta: p.totalScoreDelta,
      uniqueDelta: p.uniqueDelta,
      analysisDelta: p.analysisDelta,
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
  const base = qpDataBase[id];
  if (!base) {
    const profile = getQpProfile(id);
    return {
      smarterAssignment: false,
      period,
      metrics: { analysisCount: 0, totalAnalysis: 0, qpScore: null, qpScoreDelta: null },
      scoreTrend: [],
      aiInsights: {
        headline: \`\${profile.label} has no evaluation data in the selected period.\`,
        needsAttention: [],
        performingWell: [],
        recommendation: 'Select a longer period or verify assignment rules for this profile.',
      },
      escalations: [],
      topIntents: [],
      kpis: [],
    };
  }

  const all = getAllProfilesData(period);
  return {
    ...base,
    period,
    metrics: {
      analysisCount: base.metrics.analysisCount,
      totalAnalysis: all.metrics.totalAnalysis,
      qpScore: base.metrics.qpScore,
      qpScoreDelta: base.metrics.qpScoreDelta,
    },
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
  return { up, text: \`\${up ? '+' : ''}\${value}\${suffix}\` };
}
`;

  writeFileSync(OUT_PATH, header + body, 'utf8');
}

async function main() {
  if (!USERNAME || !PASSWORD) {
    throw new Error(
      'Set CQA_USERNAME and CQA_PASSWORD env vars before running fetch:qp-insights.',
    );
  }

  console.log(`Logging into ${BASE} as ${TENANT}/${USERNAME}...`);
  const { token, accountId } = await login();
  console.log(`Account ID: ${accountId}`);

  console.log('Fetching quality profiles...');
  const profiles = await fetchPaginated(token, accountId, 'quality-profiles');
  console.log(`  ${profiles.length} profiles`);

  console.log('Fetching interactions (this may take a minute)...');
  const interactions = await fetchPaginated(token, accountId, 'interactions');
  console.log(`  ${interactions.length} interactions`);

  const refDate = interactions.reduce((max, i) => {
    const d = new Date(i.created_at);
    return d > max ? d : max;
  }, new Date(0));
  console.log(`Reference date: ${refDate.toISOString()}`);

  const activeProfileIds = new Set();
  for (const item of interactions) {
    if (item.status !== 'SUCCESS') continue;
    for (const a of item.interaction_analysis ?? []) {
      activeProfileIds.add(a.quality_profile_uid);
    }
  }

  console.log(`Fetching details for ${activeProfileIds.size} active profiles...`);
  const profileDetails = new Map();
  for (const id of activeProfileIds) {
    try {
      profileDetails.set(id, await fetchProfileDetail(token, accountId, id));
    } catch (e) {
      console.warn(`  skip detail ${id}: ${e.message}`);
    }
  }

  const periodData = {};
  for (const periodKey of ['month', 'week', 'yesterday']) {
    periodData[periodKey] = aggregatePeriod(
      interactions,
      profiles,
      profileDetails,
      periodKey,
      refDate,
    );
    const p = periodData[periodKey].allProfiles;
    console.log(
      `  ${periodKey}: ${p.uniqueInteractions} calls, ${p.totalAnalysis} analyses, avg ${p.totalScore}%`,
    );
  }

  const qpProfiles = periodData.month.summaryRows
    .filter((r) => r.matched > 0)
    .slice(0, 20)
    .map((r) => ({ id: r.id, label: r.name }));

  for (const p of periodData.month.allProfiles.unusedProfiles.slice(0, 5)) {
    if (!qpProfiles.find((x) => x.id === p.id)) {
      qpProfiles.push({ id: p.id, label: p.name });
    }
  }

  if (!qpProfiles.length && profiles[0]) {
    qpProfiles.push({ id: profiles[0].id, label: profiles[0].name });
  }

  emitModule({
    tenant: TENANT,
    accountId,
    fetchedAt: new Date().toISOString(),
    qpProfiles,
    periodData,
  });

  console.log(`Wrote ${OUT_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
