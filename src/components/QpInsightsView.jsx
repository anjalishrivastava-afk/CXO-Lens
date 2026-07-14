import { useEffect, useMemo, useRef, useState } from 'react';
import Icon from './Icon';
import SimpleLineChart from './SimpleLineChart';
import WeekPager from './WeekPager';
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

function QpSectionHeader({ title, caption, heading }) {
  return (
    <div className="qp-section-header">
      <div className={`section-heading${heading ? ' qp-drill-nav-heading' : ''}`}>
        {heading ?? title}
      </div>
      {caption && <p className="section-scope-caption">{caption}</p>}
    </div>
  );
}

function QpProfileDetailNav({ profile, summary, onBack }) {
  return (
    <div className="qp-section-header qp-drill-nav">
      <div className="qp-drill-nav-row">
        <button type="button" className="qp-drill-nav-back" onClick={onBack} aria-label="Back to portfolio">
          <Icon name="arrow_back" />
        </button>
        <div className="qp-drill-nav-body">
          <div className="section-heading qp-drill-nav-heading">
            <span className="qp-drill-nav-name">{profile.label}</span>
            {summary?.severity && summary.severity !== 'unused' && (
              <SeverityBadge severity={summary.severity} />
            )}
            {summary?.avgScore != null && (
              <span className="qp-drill-nav-score" style={{ color: scoreColor(summary.avgScore) }}>
                {summary.avgScore}%
              </span>
            )}
          </div>
          <p className="section-scope-caption">
            Metrics below are for this profile only. Portfolio totals stay on the Portfolio tab.
          </p>
        </div>
      </div>
    </div>
  );
}

function ViewScopeBanner({ variant, profileName }) {
  if (variant === 'portfolio') {
    return (
      <div className="qp-scope-banner">
        <Icon name="layers" />
        <div>
          <div className="qp-scope-banner-title">Portfolio view</div>
          <div className="qp-scope-banner-text">
            Every metric below adds up <strong>all quality profiles</strong> for the selected period.
            One call can appear in multiple analyses.
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'profile') {
    return (
      <div className="qp-scope-banner">
        <Icon name="description" />
        <div>
          <div className="qp-scope-banner-title">Single-profile view</div>
          <div className="qp-scope-banner-text">
            Every metric below is scoped to <strong>{profileName}</strong> only — not the full portfolio.
            Switch to Portfolio to see org-wide totals.
          </div>
        </div>
      </div>
    );
  }

  return null;
}

function TruncatedText({ text, className = '', clampClass = 'qp-truncated-text' }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > 120;

  return (
    <div
      className={`qp-truncated-wrap${expanded ? ' is-expanded' : ''}${isLong ? ' has-toggle' : ''}${className ? ` ${className}` : ''}`}
    >
      <p className={`${clampClass}${expanded ? ' is-expanded' : ''}`}>
        {text}
        {isLong && expanded && (
          <>
            {' '}
            <button
              type="button"
              className="qp-truncated-toggle-inline"
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(false);
              }}
            >
              see less
            </button>
          </>
        )}
      </p>
      {isLong && !expanded && (
        <button
          type="button"
          className="qp-truncated-toggle-inline qp-truncated-toggle-end"
          onClick={() => setExpanded(true)}
        >
          see more
        </button>
      )}
    </div>
  );
}

function KpiQuestionCell({ text }) {
  return (
    <div className="qp-kpi-question-cell">
      <TruncatedText text={text} clampClass="qp-kpi-question" />
    </div>
  );
}

function CoachingInsightsPanel({ profileLabel, aiInsights, escalations, escRef }) {
  return (
    <div className="qp-coaching-section">
      <QpSectionHeader
        title="Coaching Insights"
        caption={(
          <>
            AI-generated coaching guidance for <strong>{profileLabel}</strong> this period
          </>
        )}
      />

      <div className="qp-coaching-panel">
        <div className="qp-coaching-summary info-card focus">
          <Icon name="auto_awesome" className="qp-coaching-summary-icon" />
          <TruncatedText text={aiInsights.headline} clampClass="qp-coaching-summary-text" />
        </div>

        {aiInsights.needsAttention.length > 0 || aiInsights.performingWell.length > 0 ? (
          <div className="qp-coaching-kpi-row">
            {aiInsights.needsAttention.length > 0 && (
              <div className="qp-coaching-card info-card priority">
                <div className="qp-coaching-card-head">
                  <Icon name="warning" />
                  <span className="info-card-title">Needs Attention</span>
                  <span className="qp-coaching-count">{aiInsights.needsAttention.length}</span>
                </div>
                <div className="qp-coaching-list">
                  {aiInsights.needsAttention.map((k) => (
                    <div key={k.name} className="qp-coaching-item">
                      <div className="qp-coaching-item-head">
                        <span className="info-card-kpi">{k.name}</span>
                        <span className="improve-badge below">{k.score}</span>
                      </div>
                      <TruncatedText text={k.detail} clampClass="qp-coaching-item-text" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {aiInsights.performingWell.length > 0 && (
              <div className="qp-coaching-card info-card strength">
                <div className="qp-coaching-card-head">
                  <Icon name="verified" />
                  <span className="info-card-title">Performing Well</span>
                  <span className="qp-coaching-count">{aiInsights.performingWell.length}</span>
                </div>
                <div className="qp-coaching-list">
                  {aiInsights.performingWell.map((k) => (
                    <div key={k.name} className="qp-coaching-item">
                      <div className="qp-coaching-item-head">
                        <span className="info-card-kpi">{k.name}</span>
                        <span className="improve-badge above">{k.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : null}

        <div className="qp-coaching-recommendation info-card focus">
          <div className="qp-coaching-card-head">
            <Icon name="lightbulb" />
            <span className="info-card-kpi">Recommended Action</span>
          </div>
          <TruncatedText text={aiInsights.recommendation} clampClass="qp-coaching-item-text" />
        </div>

        {escalations.length > 0 && (
          <div className="qp-coaching-escalations" ref={escRef}>
            <div className="qp-coaching-escalations-label">Escalations to review</div>
            <div className="qp-coaching-escalation-grid">
              {escalations.map((e) => (
                <div
                  key={`${e.type}-${e.kpi}`}
                  className={`qp-coaching-escalation info-card ${e.type === 'dispute' ? 'priority' : 'focus'}`}
                >
                  <div className="qp-coaching-card-head">
                    <Icon name={e.type === 'dispute' ? 'gavel' : 'trending_down'} />
                    <span className="info-card-kpi">{e.kpi}</span>
                  </div>
                  <TruncatedText text={e.detail} clampClass="qp-coaching-item-text" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ChartCard({ title, subtitle, headerRight, children, className = '' }) {
  return (
    <div className={`section-card${className ? ` ${className}` : ''}`}>
      <div className="section-card-header chart-card-header">
        <div>
          <div className="section-card-title">{title}</div>
          {subtitle && <div className="section-card-sub">{subtitle}</div>}
        </div>
        {headerRight}
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

function ScrollableTable({ head, children, totalRows, bodyClassName = '' }) {
  const scrollHint = totalRows > 10 ? ` · scroll for all ${totalRows}` : '';
  return (
    <div className="rank-table-card qp-table-scroll">
      <div className="qp-table-scroll-head">{head}</div>
      <div
        className={`qp-table-scroll-body${bodyClassName ? ` ${bodyClassName}` : ''}`}
        aria-label={`Table body, up to 10 rows visible${scrollHint}`}
      >
        {children}
      </div>
    </div>
  );
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

  const summaryById = useMemo(
    () => new Map(summaryTable.map((row) => [row.id, row])),
    [summaryTable],
  );

  const activeRows = summaryTable.filter((r) => r.matched > 0);
  const sortedActiveRows = useMemo(
    () => [...activeRows].sort((a, b) => b.matched - a.matched || (b.avgScore ?? 0) - (a.avgScore ?? 0)),
    [activeRows],
  );

  return (
    <>
      <div>
        <QpSectionHeader title="Portfolio Metrics" caption="Combined across every quality profile" />
        <div className="kpi-grid">
          <MetricCard
            label="Unique Calls"
            value={metrics.uniqueInteractions.toLocaleString()}
            sub="Distinct interactions evaluated — counted once regardless of how many profiles matched"
            delta={{ value: metrics.uniqueDelta }}
          />
          <MetricCard
            label="Total Analyses"
            value={metrics.totalAnalysis.toLocaleString()}
            sub="Sum of every profile evaluation — higher than unique calls when one call matches multiple profiles"
            delta={{ value: metrics.analysisDelta }}
          />
          <MetricCard
            label="Portfolio Avg Score"
            value={`${metrics.totalScore}%`}
            sub="Mean of each profile's average score — not the same as any single profile's score"
            delta={{ value: metrics.totalScoreDelta, suffix: 'pp' }}
            valueColor={scoreColor(metrics.totalScore)}
          />
        </div>
      </div>

      <div className="rank-tables-grid chart-card-grid">
        <ChartCard
          title="QP Interaction Mix"
          subtitle="Profiles ranked by matched calls — scroll inside the chart (5 visible at a time)"
        >
          <QpInteractionMix rows={interactionMix} totalUnique={metrics.uniqueInteractions} />
        </ChartCard>

        <div ref={distRef}>
          <ChartCard title="Score Distribution" subtitle="Analysis scores by band — low and high volumes shown on the same scale">
            <QpScoreDistribution
              bands={scoreDistribution}
              insight={distributionInsight}
              avgScore={metrics.totalScore}
            />
          </ChartCard>
        </div>
      </div>

      <div ref={aiRef}>
        <QpSectionHeader title="Priority Highlights" />
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

        <div className="list-caption">
          Click a row to open profile detail — scroll inside the table to see all {sortedInsights.length} profiles.
        </div>
        <ScrollableTable
          totalRows={sortedInsights.length}
          bodyClassName="qp-table-scroll-body--tall"
          head={(
            <div className="roster-grid-row roster-head qp-ai-insight-head">
              <span>Status</span>
              <span>Profile</span>
              <span>Avg Score</span>
              <span>Analyses</span>
              <span>AI Insight</span>
              <span aria-hidden="true" />
            </div>
          )}
        >
          {sortedInsights.map((row) => {
            const clickable = row.severity !== 'unused';
            const summary = summaryById.get(row.id);
            const matched = summary?.matched ?? 0;

            return (
              <div
                key={row.id}
                className={`roster-grid-row roster-row qp-ai-insight-row${clickable ? '' : ' qp-ai-insight-row--disabled'}`}
                onClick={() => clickable && onOpenProfile(row.id, 'ai_insight_row')}
                onKeyDown={(e) => clickable && e.key === 'Enter' && onOpenProfile(row.id, 'ai_insight_row')}
                role={clickable ? 'button' : undefined}
                tabIndex={clickable ? 0 : undefined}
                title={clickable ? `Open ${row.name}` : undefined}
              >
                <span>
                  <SeverityBadge severity={row.severity} />
                </span>
                <span className="roster-agent-name">{row.name}</span>
                <span className="rank-score" style={{ color: scoreColor(row.avgScore), width: 'auto' }}>
                  {row.avgScore != null ? `${row.avgScore}%` : '—'}
                </span>
                <span className="roster-calls">
                  {matched > 0 ? (
                    <>
                      {matched.toLocaleString()}
                      <span className="qp-ai-insight-share"> ({row.matchedPct}%)</span>
                    </>
                  ) : (
                    '—'
                  )}
                </span>
                <span className="qp-ai-insight-summary" title={row.summary}>
                  {row.summary}
                  {row.alert && <span className="improve-badge below qp-ai-insight-alert">{row.alert}</span>}
                </span>
                <span className="qp-ai-insight-chevron">
                  {clickable && <Icon name="chevron_right" />}
                </span>
              </div>
            );
          })}
        </ScrollableTable>
      </div>

      <div>
        <QpSectionHeader
          title="Profile Comparison"
          caption={`Each row is one quality profile — scroll inside the table to browse all ${sortedActiveRows.length} profiles (10 visible at a time).`}
        />
        <ScrollableTable
          totalRows={sortedActiveRows.length}
          head={(
            <div className="roster-grid-row roster-head qp-profile-head">
              <span>Quality Profile Name</span>
              <span>Interactions Matched</span>
              <span>Avg Score</span>
            </div>
          )}
        >
          {sortedActiveRows.map((row) => {
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
        </ScrollableTable>
      </div>
    </>
  );
}

function PerQpView({ qpId, period }) {
  const profile = getQpProfile(qpId);
  const data = getQpData(qpId, period);
  const { metrics, aiInsights, escalations, topIntents, kpis, smarterAssignment, scoreTrend } = data;
  const [trendIdx, setTrendIdx] = useState(() => Math.max(scoreTrend.length - 1, 0));
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

  useEffect(() => {
    setTrendIdx(Math.max(scoreTrend.length - 1, 0));
  }, [qpId, period, scoreTrend.length]);

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
  const activeTrend = scoreTrend[trendIdx] ?? scoreTrend[scoreTrend.length - 1];

  return (
    <>
      <div>
        <QpSectionHeader
          title="Profile Metrics"
          caption={(
            <>
              Only <strong>{profile.label}</strong> — not portfolio-wide totals
            </>
          )}
        />
        <div className="qp-profile-metrics-layout">
          <div className="qp-profile-metrics-kpis">
            <MetricCard
              label="Analyses (This Profile)"
              value={metrics.analysisCount.toLocaleString()}
              sub={`${metrics.analysisCount.toLocaleString()} of ${metrics.totalAnalysis.toLocaleString()} portfolio analyses (${sharePct}%)`}
            />
            <MetricCard
              label="Profile Avg Score"
              value={`${metrics.qpScore}%`}
              sub="This profile's mean score — open Portfolio tab to compare against the org average"
              delta={metrics.qpScoreDelta != null ? { value: metrics.qpScoreDelta, suffix: 'pp' } : null}
              valueColor={scoreColor(metrics.qpScore)}
            />
          </div>

          {scoreTrend.length > 0 && (
            <ChartCard
              className="qp-profile-metrics-chart"
              title="Score Trend"
              subtitle={`Weekly average for ${profile.label} only`}
              headerRight={activeTrend ? (
                <WeekPager
                  label={activeTrend.label}
                  index={trendIdx}
                  total={scoreTrend.length}
                  onChange={setTrendIdx}
                  prevTooltip="Previous week"
                  nextTooltip="Next week"
                />
              ) : null}
            >
              <SimpleLineChart
                points={trendPoints}
                height={150}
                selectedIdx={trendIdx}
                onSelect={setTrendIdx}
              />
              {activeTrend && (
                <div className="week-detail-panel qp-score-trend-detail">
                  <span className="week-detail-stat" style={{ color: scoreColor(activeTrend.value) }}>
                    Avg score {activeTrend.value}%
                  </span>
                </div>
              )}
            </ChartCard>
          )}
        </div>
      </div>

      <div ref={aiRef}>
        <CoachingInsightsPanel
          profileLabel={profile.label}
          aiInsights={aiInsights}
          escalations={escalations}
          escRef={escRef}
        />
      </div>

      {smarterAssignment && topIntents.length > 0 && (
        <div>
          <QpSectionHeader title="Top Intents" />
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
          <QpSectionHeader
            title="Quality Rubric"
            caption="KPI questions from the quality profile definition. Per-KPI scores require analysis detail access."
          />
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
              const pctDelta =
                k.prevPct != null && k.avgPct != null
                  ? Math.round((k.avgPct - k.prevPct) * 10) / 10
                  : null;
              const deltaFmt = formatDelta(pctDelta, 'pp');
              const rowTone = k.type === 'critical' ? 'var(--red-text)' : k.type === 'failing' ? 'var(--yellow-text)' : 'var(--text)';
              return (
                <div key={k.question} className="roster-grid-row roster-row qp-kpi-row" style={{ color: rowTone }}>
                  <KpiQuestionCell text={k.question} />
                  <span><KpiTypeBadge type={k.type} /></span>
                  <span className="roster-calls">{k.avgScore ?? '—'}</span>
                  <span className="roster-calls">{k.maxScore}</span>
                  <span className="roster-calls" style={{ fontWeight: k.type ? 700 : 500 }}>
                    {k.avgPct != null ? `${k.avgPct}%` : '—'}
                  </span>
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

export default function QpInsightsView({ tab, qpId, period, onProfileDrill }) {
  const [drillProfileId, setDrillProfileId] = useState(null);

  useEffect(() => {
    setDrillProfileId(null);
  }, [tab]);

  const handleOpenProfile = (profileId, source) => {
    setDrillProfileId(profileId);
    onProfileDrill?.(profileId, source);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToOverview = () => {
    setDrillProfileId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (tab === 'all-profiles' && drillProfileId) {
    const profile = getQpProfile(drillProfileId);
    const summary = getAllProfilesData(period).summaryTable.find((r) => r.id === drillProfileId);

    return (
      <div className="qp-insights">
        <QpProfileDetailNav profile={profile} summary={summary} onBack={handleBackToOverview} />
        <PerQpView qpId={drillProfileId} period={period} />
      </div>
    );
  }

  return (
    <div className="qp-insights">
      {tab === 'all-profiles' ? (
        <>
          <ViewScopeBanner variant="portfolio" />
          <AllProfilesView period={period} onOpenProfile={handleOpenProfile} />
        </>
      ) : (
        <>
          <ViewScopeBanner variant="profile" profileName={getQpProfile(qpId).label} />
          <PerQpView qpId={qpId} period={period} />
        </>
      )}
    </div>
  );
}
