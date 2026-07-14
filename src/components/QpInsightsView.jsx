import { useEffect, useRef } from 'react';
import Icon from './Icon';
import SimpleLineChart from './SimpleLineChart';
import { QpInteractionMix, QpScoreDistribution } from './QpDistributionChart';
import {
  formatDelta,
  getAllProfilesData,
  getQpData,
  getQpProfile,
  analysisSharePct,
  matchedSharePct,
} from '../qpInsightsData';
import {
  trackQpAnalyticsAiInsightViewed,
  trackQpAnalyticsDistributionViewed,
  trackQpAnalyticsEscalationViewed,
  trackQpAnalyticsKpiBreakdownViewed,
} from '../analytics';

function ChartCard({ title, subtitle, children, className = '' }) {
  return (
    <div className={`section-card${className ? ` ${className}` : ''}`}>
      <div className="section-card-header chart-card-header">
        <div>
          <div className="section-card-title">{title}</div>
          {subtitle && <div className="section-card-sub">{subtitle}</div>}
        </div>
      </div>
      <div className="section-card-body">{children}</div>
    </div>
  );
}

function SeverityBadge({ severity }) {
  if (severity === 'critical') return <span className="improve-badge below">Critical</span>;
  if (severity === 'attention') return <span className="tab-badge team">Attention</span>;
  if (severity === 'unused') return <span className="tab-badge agent">Unused</span>;
  return <span className="improve-badge above">Healthy</span>;
}

function KpiTypeBadge({ type }) {
  if (type === 'critical') return <span className="improve-badge below">Critical</span>;
  if (type === 'failing') return <span className="tab-badge team">Failing</span>;
  return null;
}

function MetricCard({ label, value, sub, delta, valueColor }) {
  const d = formatDelta(delta?.value, delta?.suffix);
  return (
    <div className="kpi-card">
      <div className="kpi-label">{label}</div>
      <div className="kpi-value" style={valueColor ? { color: valueColor } : undefined}>
        {value}
      </div>
      {d && (
        <div className="kpi-delta-row">
          <Icon name={d.up ? 'arrow_upward' : 'arrow_downward'} className={d.up ? 'up' : 'down'} />
          <span className={`kpi-delta ${d.up ? 'up' : 'down'}`}>{d.text}</span>
          <span className="kpi-delta-caption">vs prev period</span>
        </div>
      )}
      {sub && <div className="kpi-sub">{sub}</div>}
    </div>
  );
}

function useIntersectionOnce(ref, onVisible, deps = []) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible();
          obs.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

function scoreColor(score) {
  if (score == null) return undefined;
  if (score >= 82) return 'var(--green-text)';
  if (score >= 75) return 'var(--text)';
  return 'var(--red-text)';
}

function AllProfilesView({ period, onOpenProfile }) {
  const data = getAllProfilesData(period);
  const {
    metrics,
    crossQpHeadline,
    topPriorityAlert,
    unusedProfiles,
    aiInsightRows,
    summaryTable,
    interactionMix,
    scoreDistribution,
    distributionInsight,
  } = data;

  const aiRef = useRef(null);
  const distRef = useRef(null);

  useIntersectionOnce(
    aiRef,
    () => {
      trackQpAnalyticsAiInsightViewed({
        viewType: 'cross_qp',
        profileId: null,
        profileName: null,
        hasWeakKpis: aiInsightRows.some((r) => r.severity === 'critical' || r.severity === 'attention'),
        hasEscalationIndicators: aiInsightRows.some((r) => r.alert),
        profileCount: aiInsightRows.length,
        unusedProfileCount: unusedProfiles.length,
      });
    },
    [period],
  );

  useIntersectionOnce(
    distRef,
    () => {
      trackQpAnalyticsDistributionViewed({
        viewType: 'score_distribution',
        period,
        avgScore: metrics.totalScore,
        topBand: scoreDistribution.reduce((a, b) => (b.share > a.share ? b : a)).band,
      });
    },
    [period, metrics.totalScore],
  );

  const sortedInsights = [...aiInsightRows].sort((a, b) => {
    const order = { critical: 0, attention: 1, healthy: 2, unused: 3 };
    return (order[a.severity] ?? 4) - (order[b.severity] ?? 4);
  });

  const activeRows = summaryTable.filter((r) => r.matched > 0);

  return (
    <>
      <div>
        <div className="section-heading">Key Metrics</div>
        <div className="kpi-grid">
          <MetricCard
            label="Total Unique Interactions"
            value={metrics.uniqueInteractions.toLocaleString()}
            delta={{ value: metrics.uniqueDelta }}
          />
          <MetricCard
            label="Total No. of Analysis"
            value={metrics.totalAnalysis.toLocaleString()}
            sub="Sum of all QP evaluations (can exceed unique interactions)"
            delta={{ value: metrics.analysisDelta }}
          />
          <MetricCard
            label="Total Score"
            value={`${metrics.totalScore}%`}
            sub="Simple average across all Quality Profiles"
            delta={{ value: metrics.totalScoreDelta, suffix: 'pp' }}
            valueColor={scoreColor(metrics.totalScore)}
          />
        </div>
      </div>

      <div className="rank-tables-grid chart-card-grid">
        <ChartCard title="QP Interaction Mix" subtitle="How interactions are distributed across quality profiles">
          <QpInteractionMix rows={interactionMix} totalUnique={metrics.uniqueInteractions} />
        </ChartCard>

        <div ref={distRef}>
          <ChartCard title="Score Distribution" subtitle="Interaction score bands across all profiles">
            <QpScoreDistribution
              bands={scoreDistribution}
              insight={distributionInsight}
              avgScore={metrics.totalScore}
            />
          </ChartCard>
        </div>
      </div>

      <div ref={aiRef}>
        <div className="section-heading">AI Insights</div>
        <div className="top-cards-row" style={{ marginBottom: 12 }}>
          <div className="info-card focus" style={{ flex: '1 1 100%' }}>
            <div className="info-card-text">{crossQpHeadline}</div>
          </div>
        </div>

        {topPriorityAlert && (
          <div className="top-cards-row" style={{ marginBottom: 12 }}>
            <div className="info-card priority" style={{ flex: '1 1 100%' }}>
              <div className="info-card-heading-row">
                <Icon name="priority_high" />
                <span className="info-card-title">Top Priority</span>
              </div>
              <div className="info-card-text">{topPriorityAlert}</div>
            </div>
          </div>
        )}

        {unusedProfiles.length > 0 && (
          <div className="top-cards-row" style={{ marginBottom: 12 }}>
            <div className="info-card priority" style={{ flex: '1 1 100%' }}>
              <div className="info-card-heading-row">
                <Icon name="warning" />
                <span className="info-card-title">Unused Profiles</span>
              </div>
              <div className="info-card-text">
                {unusedProfiles.length} profile{unusedProfiles.length > 1 ? 's' : ''} with zero matched interactions:{' '}
                {unusedProfiles.map((p) => p.name).join(', ')}. Verify smarter assignment rules.
              </div>
            </div>
          </div>
        )}

        <div className="list-caption">Click a row to open the quality profile detail view.</div>
        <div className="improve-list">
          {sortedInsights.map((row) => {
            const clickable = row.severity !== 'unused';
            return (
              <div key={row.id} className="improve-row">
                <div
                  className="improve-header"
                  style={{ cursor: clickable ? 'pointer' : 'default', opacity: clickable ? 1 : 0.65 }}
                  onClick={() => clickable && onOpenProfile(row.id, 'ai_insight_row')}
                  role={clickable ? 'button' : undefined}
                  tabIndex={clickable ? 0 : undefined}
                  onKeyDown={(e) => clickable && e.key === 'Enter' && onOpenProfile(row.id, 'ai_insight_row')}
                >
                  <div className="improve-name-row">
                    <SeverityBadge severity={row.severity} />
                    <span className="improve-name">{row.name}</span>
                    {row.avgScore != null && (
                      <span className="improve-pct" style={{ color: scoreColor(row.avgScore), minWidth: 'auto' }}>
                        {row.avgScore}%
                      </span>
                    )}
                  </div>
                  <div className="improve-meta">
                    {row.alert && <span className="improve-badge below">{row.alert}</span>}
                    {clickable && <Icon name="chevron_right" className="improve-chevron" />}
                  </div>
                </div>
                <div className="improve-detail">
                  <div className="improve-detail-text">{row.summary}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <div className="section-heading">Quality Profiles</div>
        <div className="rank-table-card">
          <div className="roster-grid-row roster-head qp-profile-head">
            <span>Quality Profile Name</span>
            <span>Interactions Matched</span>
            <span>Avg Score</span>
          </div>
          {activeRows.map((row) => {
            const pct = matchedSharePct(row.matched, metrics.uniqueInteractions);
            const scoreDelta = formatDelta(row.scoreDelta, 'pp');
            return (
              <div
                key={row.id}
                className="roster-grid-row roster-row qp-profile-row"
                onClick={() => onOpenProfile(row.id, 'table_row')}
                title="Open quality profile detail"
              >
                <span className="roster-agent-name">{row.name}</span>
                <div className="qp-match-cell">
                  <span className="roster-calls">
                    {row.matched.toLocaleString()} / {metrics.uniqueInteractions.toLocaleString()} ({pct}%)
                  </span>
                  <div className="weak-bar-track qp-match-bar">
                    <div className="weak-bar-fill" style={{ width: `${pct}%`, background: 'var(--accent)' }} />
                  </div>
                </div>
                <div className="qp-score-cell">
                  <span className="rank-score" style={{ color: scoreColor(row.avgScore), width: 'auto' }}>
                    {row.avgScore}%
                  </span>
                  {scoreDelta && (
                    <span className={`kpi-delta ${scoreDelta.up ? 'up' : 'down'}`} style={{ fontSize: 11 }}>
                      {scoreDelta.text}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

function PerQpView({ qpId, period }) {
  const profile = getQpProfile(qpId);
  const data = getQpData(qpId, period);
  const { metrics, aiInsights, escalations, topIntents, kpis, smarterAssignment, scoreTrend } = data;
  const aiRef = useRef(null);
  const kpiRef = useRef(null);
  const escRef = useRef(null);

  useIntersectionOnce(
    aiRef,
    () => {
      trackQpAnalyticsAiInsightViewed({
        viewType: 'per_qp',
        profileId: qpId,
        profileName: profile.label,
        hasWeakKpis: aiInsights.needsAttention.length > 0,
        hasEscalationIndicators: escalations.length > 0,
        profileCount: 1,
        unusedProfileCount: metrics.analysisCount === 0 ? 1 : 0,
      });
    },
    [qpId, period],
  );

  useIntersectionOnce(
    kpiRef,
    () => {
      if (!kpis.length) return;
      trackQpAnalyticsKpiBreakdownViewed({
        profileId: qpId,
        profileName: profile.label,
        totalKpis: kpis.length,
        criticalKpiCount: kpis.filter((k) => k.type === 'critical').length,
        failingKpiCount: kpis.filter((k) => k.type === 'failing').length,
        period,
      });
    },
    [qpId, period, kpis.length],
  );

  useIntersectionOnce(
    escRef,
    () => {
      trackQpAnalyticsEscalationViewed({
        profileId: qpId,
        profileName: profile.label,
        escalationCount: escalations.length,
        disputeCount: escalations.filter((e) => e.type === 'dispute').length,
        scoreDropCount: escalations.filter((e) => e.type === 'score_drop').length,
      });
    },
    [qpId, escalations.length],
  );

  const sharePct = analysisSharePct(metrics.analysisCount, metrics.totalAnalysis);
  const isEmpty = metrics.analysisCount === 0;

  if (isEmpty) {
    return (
      <div className="cxo-lens-state cxo-lens-state--info">
        <div className="cxo-lens-state-icon-wrap">
          <Icon name="analytics" />
        </div>
        <div className="section-card-title">No data for {profile.label}</div>
        <div className="info-card-text" style={{ maxWidth: 480, marginTop: 8 }}>
          {aiInsights.headline}
        </div>
        <div className="info-card focus" style={{ marginTop: 16, maxWidth: 520, textAlign: 'left' }}>
          <div className="info-card-heading-row">
            <Icon name="lightbulb" />
            <span className="info-card-kpi">Recommendation</span>
          </div>
          <div className="info-card-text">{aiInsights.recommendation}</div>
        </div>
      </div>
    );
  }

  const trendPoints = scoreTrend.map((pt) => ({
    label: pt.label,
    value: pt.value,
    color: pt.value >= 82 ? 'var(--green)' : pt.value >= 75 ? 'var(--accent)' : 'var(--red)',
  }));
  const latestTrend = scoreTrend[scoreTrend.length - 1];

  return (
    <>
      <div>
        <div className="section-heading">Key Metrics</div>
        <div className="kpi-grid qp-kpi-grid--two">
          <MetricCard
            label="Total No. of Analysis"
            value={metrics.analysisCount.toLocaleString()}
            sub={`${sharePct}% of total analysis were run on this Quality Profile`}
          />
          <MetricCard
            label="Quality Profile Score"
            value={`${metrics.qpScore}%`}
            sub="Average score across all KPIs"
            delta={metrics.qpScoreDelta != null ? { value: metrics.qpScoreDelta, suffix: 'pp' } : null}
            valueColor={scoreColor(metrics.qpScore)}
          />
        </div>
      </div>

      {scoreTrend.length > 0 && (
        <ChartCard title="Score Trend" subtitle="Weekly average score for this quality profile">
          <SimpleLineChart points={trendPoints} height={150} />
          {latestTrend && (
            <div className="week-detail-panel">
              <span className="week-detail-label">{latestTrend.label}</span>
              <span className="week-detail-stat" style={{ color: scoreColor(latestTrend.value) }}>
                Avg score {latestTrend.value}%
              </span>
            </div>
          )}
        </ChartCard>
      )}

      <div ref={aiRef}>
        <div className="section-heading">{profile.label}</div>
        <div className="top-cards-row" style={{ marginBottom: 12 }}>
          <div className="info-card focus" style={{ flex: '1 1 100%' }}>
            <div className="info-card-text">{aiInsights.headline}</div>
          </div>
        </div>

        <div className="top-cards-row">
          {aiInsights.needsAttention.length > 0 && (
            <div className="info-card priority" style={{ flex: '1 1 320px' }}>
              <div className="info-card-heading-row">
                <Icon name="warning" />
                <span className="info-card-title">Needs Attention</span>
              </div>
              {aiInsights.needsAttention.map((k) => (
                <div key={k.name} style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid var(--yellow-border)' }}>
                  <div className="info-card-heading-row">
                    <span className="info-card-kpi">{k.name}</span>
                    <span className="improve-badge below">{k.score}</span>
                  </div>
                  <div className="info-card-text">{k.detail}</div>
                </div>
              ))}
            </div>
          )}

          {aiInsights.performingWell.length > 0 && (
            <div className="info-card strength" style={{ flex: '1 1 320px' }}>
              <div className="info-card-heading-row">
                <Icon name="verified" />
                <span className="info-card-title">Performing Well</span>
              </div>
              {aiInsights.performingWell.map((k) => (
                <div key={k.name} style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid var(--green-border)' }}>
                  <div className="info-card-heading-row">
                    <span className="info-card-kpi">{k.name}</span>
                    <span className="improve-badge above">{k.score}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="top-cards-row" style={{ marginTop: 12 }}>
          <div className="info-card focus" style={{ flex: '1 1 100%' }}>
            <div className="info-card-heading-row">
              <Icon name="lightbulb" />
              <span className="info-card-kpi">Recommendation</span>
            </div>
            <div className="info-card-text">{aiInsights.recommendation}</div>
          </div>
        </div>
      </div>

      {escalations.length > 0 && (
        <div>
          <div className="section-heading">Escalation Indicators</div>
          <div ref={escRef} className="top-cards-row">
            {escalations.map((e) => (
              <div
                key={`${e.type}-${e.kpi}`}
                className={`info-card ${e.type === 'dispute' ? 'priority' : 'focus'}`}
                style={{ flex: '1 1 280px' }}
              >
                <div className="info-card-heading-row">
                  <Icon name={e.type === 'dispute' ? 'gavel' : 'trending_down'} />
                  <span className="info-card-kpi">{e.kpi}</span>
                </div>
                <div className="info-card-text">{e.detail}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {smarterAssignment && topIntents.length > 0 && (
        <div>
          <div className="section-heading">Top Intents</div>
          <div className="qp-intent-row">
            {topIntents.map((intent) => (
              <span key={intent.label} className="tab-badge active">
                {intent.label}
                <span className="qp-intent-count">{intent.count.toLocaleString()}</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {kpis.length > 0 && (
        <div>
          <div className="section-heading">KPI Breakdown</div>
          <div ref={kpiRef} className="improve-list">
            <div className="roster-grid-row roster-head qp-kpi-head">
              <span>KPI Question</span>
              <span>Type</span>
              <span>Avg Score</span>
              <span>Max Score</span>
              <span>Avg %</span>
              <span>Change</span>
            </div>
            {kpis.map((k) => {
              const pctDelta = k.prevPct != null ? Math.round((k.avgPct - k.prevPct) * 10) / 10 : null;
              const deltaFmt = formatDelta(pctDelta, 'pp');
              const rowTone = k.type === 'critical' ? 'var(--red-text)' : k.type === 'failing' ? 'var(--yellow-text)' : 'var(--text)';
              return (
                <div key={k.question} className="roster-grid-row roster-row qp-kpi-row" style={{ color: rowTone }}>
                  <span className="roster-agent-name">{k.question}</span>
                  <span><KpiTypeBadge type={k.type} /></span>
                  <span className="roster-calls">{k.avgScore}</span>
                  <span className="roster-calls">{k.maxScore}</span>
                  <span className="roster-calls" style={{ fontWeight: k.type ? 700 : 500 }}>{k.avgPct}%</span>
                  <span className={`kpi-delta ${deltaFmt ? (deltaFmt.up ? 'up' : 'down') : ''}`}>
                    {deltaFmt ? deltaFmt.text : '—'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default function QpInsightsView({ tab, qpId, period, onOpenProfile }) {
  return (
    <div className="qp-insights">
      {tab === 'all-profiles' ? (
        <AllProfilesView period={period} onOpenProfile={onOpenProfile} />
      ) : (
        <PerQpView qpId={qpId} period={period} />
      )}
    </div>
  );
}
