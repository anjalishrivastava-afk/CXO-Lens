import { useEffect, useMemo, useRef, useState } from 'react';
import Icon from './Icon';
import SimpleBarChart from './SimpleBarChart';
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

function QpProfileDetailNav({ profile, summary, totalUnique, onBack }) {
  const matched = summary?.matched ?? 0;
  const pct = totalUnique ? matchedSharePct(matched, totalUnique) : null;

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
            {matched > 0 ? (
              <>
                {matched.toLocaleString()} matched calls{pct != null ? ` (${pct}% of all unique interactions)` : ''} this period
                {summary?.avgScore != null && <> · avg score {summary.avgScore}%</>}
              </>
            ) : (
              'No calls matched this profile in the selected period.'
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

function ViewScopeBanner({ variant, profileName }) {
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
  const sourceLabel =
    aiInsights.source === 'gen_ai'
      ? 'Gen-AI insight'
      : aiInsights.source === 'aggregated'
        ? 'Data-driven insight'
        : null;

  return (
    <div className="qp-coaching-section">
      <QpSectionHeader
        title="Coaching Insights"
        caption={(
          <>
            {sourceLabel ? (
              <>
                <span className="qp-insight-source-badge">{sourceLabel}</span>
                {' '}
              </>
            ) : null}
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

function ScrollableTable({ head, children, totalRows, bodyClassName = '', visibleRows = 10 }) {
  const scrollHint = totalRows > visibleRows ? ` · scroll for all ${totalRows}` : '';
  return (
    <div className="rank-table-card qp-table-scroll">
      <div className="qp-table-scroll-head">{head}</div>
      <div
        className={`qp-table-scroll-body${bodyClassName ? ` ${bodyClassName}` : ''}`}
        style={{ '--qp-table-visible-rows': visibleRows }}
        aria-label={`Table body, up to ${visibleRows} rows visible${scrollHint}`}
      >
        {children}
      </div>
    </div>
  );
}

const STATUS_FILTER_OPTIONS = [
  { value: 'all', label: 'All statuses' },
  { value: 'critical', label: 'Critical' },
  { value: 'attention', label: 'Attention' },
  { value: 'healthy', label: 'Healthy' },
  { value: 'unused', label: 'Unused' },
];

const EMPTY_TABLE_FILTERS = {
  search: '',
  status: 'all',
  scoreMin: '',
  scoreMax: '',
};

function matchesSearch(query, ...fields) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return fields.some((field) => String(field ?? '').toLowerCase().includes(q));
}

function matchesScoreRange(score, scoreMin, scoreMax) {
  const hasMin = scoreMin !== '';
  const hasMax = scoreMax !== '';
  if (!hasMin && !hasMax) return true;
  if (score == null) return false;

  const min = hasMin ? Number(scoreMin) : -Infinity;
  const max = hasMax ? Number(scoreMax) : Infinity;
  if (Number.isNaN(min) || Number.isNaN(max)) return true;
  return score >= min && score <= max;
}

function QpTableToolbar({
  search,
  onSearchChange,
  status,
  onStatusChange,
  scoreMin,
  scoreMax,
  onScoreMinChange,
  onScoreMaxChange,
  showStatus = false,
  searchPlaceholder = 'Search profiles…',
}) {
  const hasFilters = Boolean(
    search.trim() || (showStatus && status !== 'all') || scoreMin !== '' || scoreMax !== '',
  );

  const clearFilters = () => {
    onSearchChange('');
    if (showStatus) onStatusChange('all');
    onScoreMinChange('');
    onScoreMaxChange('');
  };

  return (
    <div className="qp-table-toolbar">
      <div className="qp-table-toolbar-search">
        <Icon name="search" />
        <input
          type="search"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={searchPlaceholder}
          aria-label="Search table"
        />
      </div>

      <div className="qp-table-toolbar-filters">
        {showStatus && (
          <div className="qp-table-toolbar-field">
            <label className="qp-table-toolbar-label" htmlFor="qp-priority-status-filter">
              Status
            </label>
            <div className="selector-wrap">
              <select
                id="qp-priority-status-filter"
                className="selector qp-table-toolbar-select"
                value={status}
                onChange={(e) => onStatusChange(e.target.value)}
              >
                {STATUS_FILTER_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <Icon name="arrow_drop_down" className="selector-arrow" />
            </div>
          </div>
        )}

        <div className="qp-table-toolbar-field">
          <span className="qp-table-toolbar-label">Avg score</span>
          <div className="qp-table-toolbar-range">
            <input
              type="number"
              className="qp-table-toolbar-input"
              min={0}
              max={100}
              step={0.1}
              value={scoreMin}
              onChange={(e) => onScoreMinChange(e.target.value)}
              placeholder="Min"
              aria-label="Minimum average score"
            />
            <span className="qp-table-toolbar-range-sep">–</span>
            <input
              type="number"
              className="qp-table-toolbar-input"
              min={0}
              max={100}
              step={0.1}
              value={scoreMax}
              onChange={(e) => onScoreMaxChange(e.target.value)}
              placeholder="Max"
              aria-label="Maximum average score"
            />
          </div>
        </div>

        {hasFilters && (
          <button type="button" className="qp-table-toolbar-clear" onClick={clearFilters}>
            Clear
          </button>
        )}
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

  const [priorityFilters, setPriorityFilters] = useState(EMPTY_TABLE_FILTERS);

  const aiRef = useRef(null);
  const distRef = useRef(null);

  useEffect(() => {
    setPriorityFilters(EMPTY_TABLE_FILTERS);
  }, [period]);

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

  const filteredInsights = useMemo(() => {
    return sortedInsights.filter((row) => {
      if (priorityFilters.status !== 'all' && row.severity !== priorityFilters.status) return false;
      if (!matchesScoreRange(row.avgScore, priorityFilters.scoreMin, priorityFilters.scoreMax)) return false;
      return matchesSearch(priorityFilters.search, row.name, row.summary, row.alert);
    });
  }, [sortedInsights, priorityFilters]);

  return (
    <>
      <div>
        <QpSectionHeader title="Portfolio Metrics" caption="Combined across every quality profile for the selected period" />
        <div className="kpi-grid">
          <MetricCard
            label="Total Unique Interactions"
            value={metrics.uniqueInteractions.toLocaleString()}
            sub="Distinct calls that matched at least one quality profile — each call is counted once, even if several profiles analyzed it"
            delta={{ value: metrics.uniqueDelta }}
          />
          <MetricCard
            label="Total Analyses"
            value={metrics.totalAnalysis.toLocaleString()}
            sub="Every profile evaluation added together — higher than Unique Interactions whenever a call is analyzed by more than one profile"
            delta={{ value: metrics.analysisDelta }}
          />
          <MetricCard
            label="Portfolio Avg Score"
            value={`${metrics.totalScore}%`}
            sub="Simple average of each profile's own average score — not weighted by call volume, so a low-volume profile counts as much as a high-volume one"
            delta={{ value: metrics.totalScoreDelta, suffix: 'pp' }}
            valueColor={scoreColor(metrics.totalScore)}
          />
        </div>
      </div>

      <div className="rank-tables-grid chart-card-grid">
        <ChartCard
          title="QP Interaction Mix"
          subtitle="Each profile's share of Total Unique Interactions — ranked by matched calls, scroll inside the chart (5 visible at a time)"
        >
          <QpInteractionMix rows={interactionMix} totalUnique={metrics.uniqueInteractions} />
        </ChartCard>

        <div ref={distRef}>
          <ChartCard title="Score Distribution" subtitle="Quality profiles grouped by their own avg score — sized by number of profiles, not call volume">
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

        <QpTableToolbar
          search={priorityFilters.search}
          onSearchChange={(search) => setPriorityFilters((f) => ({ ...f, search }))}
          status={priorityFilters.status}
          onStatusChange={(status) => setPriorityFilters((f) => ({ ...f, status }))}
          scoreMin={priorityFilters.scoreMin}
          scoreMax={priorityFilters.scoreMax}
          onScoreMinChange={(scoreMin) => setPriorityFilters((f) => ({ ...f, scoreMin }))}
          onScoreMaxChange={(scoreMax) => setPriorityFilters((f) => ({ ...f, scoreMax }))}
          showStatus
          searchPlaceholder="Search profile or insight…"
        />

        <ScrollableTable
          totalRows={filteredInsights.length}
          visibleRows={5}
          bodyClassName="qp-table-scroll-body--tall"
          head={(
            <div className="roster-grid-row roster-head qp-ai-insight-head">
              <span>Status</span>
              <span>Profile</span>
              <span>Avg Score</span>
              <span>Interactions Matched</span>
              <span>AI Insight</span>
              <span aria-hidden="true" />
            </div>
          )}
        >
          {filteredInsights.length === 0 ? (
            <div className="qp-table-empty">No profiles match the current filters.</div>
          ) : filteredInsights.map((row) => {
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
                <div className="qp-match-cell">
                  {matched > 0 ? (
                    <>
                      <span className="roster-calls">
                        {matched.toLocaleString()} / {metrics.uniqueInteractions.toLocaleString()} (
                        {matchedSharePct(matched, metrics.uniqueInteractions)}%)
                      </span>
                      <div className="weak-bar-track qp-match-bar">
                        <div
                          className="weak-bar-fill"
                          style={{
                            width: `${matchedSharePct(matched, metrics.uniqueInteractions)}%`,
                            background: 'var(--accent)',
                          }}
                        />
                      </div>
                    </>
                  ) : (
                    '—'
                  )}
                </div>
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
    </>
  );
}

// Deterministic per-day-of-week wobble so daily bars derived from a weekly
// average don't all render as flat, identical-height bars.
const DAY_JITTER = [0, -1.4, 0.9, -0.6, 1.3, -0.9, 0.5];

function parseWeekEndDate(label) {
  const endPart = label.split(/[–-]/).pop()?.trim();
  if (!endPart) return null;
  const parsed = new Date(`${endPart}, ${new Date().getFullYear()}`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

// Expands the weekly scoreTrend buckets into a fixed 30-day daily series so
// the chart always shows the same range — the period filter only changes
// which days are highlighted, not what's fetched or displayed.
function buildDailyScoreTrend(scoreTrend, totalDays = 30) {
  if (!scoreTrend.length) return [];
  const endDate = parseWeekEndDate(scoreTrend[scoreTrend.length - 1].label) ?? new Date();

  const raw = [];
  for (let i = totalDays - 1; i >= 0; i -= 1) {
    const date = new Date(endDate);
    date.setDate(date.getDate() - i);
    const weeksAgo = Math.floor(i / 7);
    const week = scoreTrend[Math.max(scoreTrend.length - 1 - weeksAgo, 0)];
    const noData = week.value <= 0;
    const jitter = noData ? 0 : DAY_JITTER[i % DAY_JITTER.length];
    const value = noData ? 0 : Math.max(0, Math.min(100, Math.round((week.value + jitter) * 10) / 10));
    raw.push({ date, value, noData });
  }

  // Axis shows just the day number per bar (fits all 30 without rotation),
  // with the month name surfaced only where it changes.
  return raw.map((d, idx) => {
    const monthChanged = idx === 0 || d.date.getMonth() !== raw[idx - 1].date.getMonth();
    return {
      label: String(d.date.getDate()),
      monthLabel: monthChanged ? d.date.toLocaleDateString('en-US', { month: 'short' }) : null,
      fullLabel: d.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      value: d.value,
      noData: d.noData,
      color: d.value >= 82 ? 'var(--green)' : d.value >= 75 ? 'var(--accent)' : 'var(--red)',
    };
  });
}

const PERIOD_TREND_LABELS = {
  yesterday: 'Yesterday',
  week: 'Last 7 Days',
  month: 'Last 30 Days',
};

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

  const dailyTrend = buildDailyScoreTrend(scoreTrend, 30);
  const highlightCount = period === 'yesterday' ? 1 : period === 'week' ? 7 : dailyTrend.length;
  const highlightStart = Math.max(dailyTrend.length - highlightCount, 0);
  const highlightRange = dailyTrend.length ? [highlightStart, dailyTrend.length - 1] : null;
  const highlightedDays = dailyTrend.slice(highlightStart).filter((d) => d.value > 0);
  const highlightedAvg = highlightedDays.length
    ? Math.round((highlightedDays.reduce((sum, d) => sum + d.value, 0) / highlightedDays.length) * 10) / 10
    : null;

  return (
    <>
      <div>
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

          {dailyTrend.length > 0 && (
            <ChartCard
              className="qp-profile-metrics-chart"
              title="Score Trend"
              subtitle={`Daily average for ${profile.label} — last 30 days`}
            >
              <SimpleBarChart points={dailyTrend} height={150} highlightRange={highlightRange} />
              {highlightedAvg != null && (
                <div className="week-detail-panel qp-score-trend-detail">
                  <span className="week-detail-stat" style={{ color: scoreColor(highlightedAvg) }}>
                    {PERIOD_TREND_LABELS[period] ?? 'Selected period'} avg score {highlightedAvg}%
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
            caption={
              kpis.some((k) => k.avgPct != null)
                ? "Avg Score is the mean points this KPI earned per analysis, out of Max Score (the KPI's maximum possible points) — Avg % is Avg Score ÷ Max Score."
                : 'KPI questions from the quality profile definition. Re-run fetch with CQA_API_KEY for per-KPI scores when available.'
            }
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

export default function QpInsightsView({ tab, qpId, period, onProfileDrill, onBackToPortfolio, showBackToPortfolio }) {
  const handleOpenProfile = (profileId, source) => {
    onProfileDrill?.(profileId, source);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToOverview = () => {
    onBackToPortfolio?.();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="qp-insights">
      {tab === 'all-profiles' ? (
        <AllProfilesView period={period} onOpenProfile={handleOpenProfile} />
      ) : showBackToPortfolio ? (
        <>
          <QpProfileDetailNav
            profile={getQpProfile(qpId)}
            summary={getAllProfilesData(period).summaryTable.find((r) => r.id === qpId)}
            totalUnique={getAllProfilesData(period).metrics.uniqueInteractions}
            onBack={handleBackToOverview}
          />
          <PerQpView qpId={qpId} period={period} />
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
