import { useState } from 'react';
import Icon from './Icon';
import FeedbackButtons from './FeedbackButtons';
import CollapsibleSection from './CollapsibleSection';
import SignalDateFilter from './SignalDateFilter';
import WeekPager from './WeekPager';
import {
  cxoData as D,
  formatDuration,
  fortnightPeriods,
  sentimentByDowByWeek,
  qualityBySentimentByWeek,
} from '../cxoData';

const VIEW = 'cxo';

/** Same card chrome as CollapsibleSection, minus the expand/collapse toggle —
 * charts stay permanently visible instead of being tucked behind an accordion. */
function ChartCard({ title, subtitle, headerRight, children, className = '' }) {
  return (
    <div className={`section-card${className ? ` ${className}` : ''}`}>
      <div className="section-card-header chart-card-header">
        <div>
          <div className="section-card-title">{title}</div>
          <div className="section-card-sub">{subtitle}</div>
        </div>
        {headerRight}
      </div>
      <div className="section-card-body">{children}</div>
    </div>
  );
}

const SENTIMENT_LINES = [
  { key: 'positive', color: 'var(--green)', label: 'Positive' },
  { key: 'neutral', color: 'var(--yellow)', label: 'Neutral' },
  { key: 'negative', color: 'var(--red)', label: 'Negative' },
];

/** Converts a week's raw pos/neu/neg counts into a share-of-total percentage. */
function weekPct(week) {
  const total = week.positive + week.neutral + week.negative || 1;
  return {
    positive: Math.round((week.positive / total) * 1000) / 10,
    neutral: Math.round((week.neutral / total) * 1000) / 10,
    negative: Math.round((week.negative / total) * 1000) / 10,
  };
}

/**
 * `goodDirection` tells us whether a rising share of this sentiment is
 * desirable ('up', e.g. Positive), undesirable ('down', e.g. Negative), or
 * neither (null, e.g. Neutral) — so the arrow can be colored accordingly.
 */
function TrendArrow({ delta, goodDirection }) {
  if (delta == null || Math.abs(delta) < 0.05) {
    return <span className="week-trend-flat">flat</span>;
  }
  const up = delta > 0;
  const isGood = goodDirection ? (goodDirection === 'up' ? up : !up) : null;
  const tone = isGood == null ? 'neutral' : isGood ? 'good' : 'bad';
  return (
    <span className={`week-trend-arrow ${tone}`}>
      <Icon name={up ? 'arrow_upward' : 'arrow_downward'} />
      {up ? '+' : ''}
      {delta.toFixed(1)}pp
    </span>
  );
}

function WeeklyLineChart({ series, selectedIdx, onSelect }) {
  const [hover, setHover] = useState(null); // { key, i }
  const width = 560;
  const height = 190;
  const padTop = 14;
  const padBottom = 28;
  const padLeft = 34;
  const padRight = 40;
  // Doc §6.3: chart displays raw counts on the Y-axis (not share %). Round the
  // scale up to a "nice" 5k step so the gridline labels read cleanly.
  const rawMax = Math.max(...series.flatMap((w) => [w.positive, w.neutral, w.negative])) || 1;
  const stepV = 5000;
  const max = Math.max(Math.ceil(rawMax / stepV) * stepV, stepV);
  const ticks = [];
  for (let v = 0; v <= max; v += stepV) ticks.push(v);
  const stepX = series.length > 1 ? (width - padLeft - padRight) / (series.length - 1) : 0;
  const y = (v) => padTop + (1 - v / max) * (height - padTop - padBottom);
  const x = (i) => padLeft + i * stepX;
  const fmtTick = (v) => (v >= 1000 ? `${v / 1000}k` : `${v}`);

  const hoverWeek = hover ? series[hover.i] : null;
  const hoverLine = hover ? SENTIMENT_LINES.find((l) => l.key === hover.key) : null;
  // Keep the tooltip inside the chart: clamp its box within [0, width] so it
  // never overflows (and gets clipped) at the left/right edges.
  const TT_W = 172;
  const ttX = hover ? Math.max(0, Math.min(x(hover.i) - TT_W / 2, width - TT_W)) : 0;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="weekly-chart-svg">
      {ticks.map((t) => (
        <g key={t}>
          <line x1={padLeft} x2={width - padRight} y1={y(t)} y2={y(t)} className="weekly-chart-grid" />
          <text x={padLeft - 8} y={y(t) + 3} textAnchor="end" className="weekly-chart-axis">
            {fmtTick(t)}
          </text>
        </g>
      ))}
      {selectedIdx != null && (
        <line
          x1={x(selectedIdx)}
          x2={x(selectedIdx)}
          y1={padTop}
          y2={height - padBottom}
          className="weekly-chart-guide"
        />
      )}
      {SENTIMENT_LINES.map((line) => (
        <polyline
          key={line.key}
          points={series.map((w, i) => `${x(i)},${y(w[line.key])}`).join(' ')}
          fill="none"
          stroke={line.color}
          strokeWidth="2.5"
        />
      ))}
      {SENTIMENT_LINES.map((line) =>
        series.map((w, i) => (
          <g key={`${line.key}-${i}`}>
            <circle
              cx={x(i)}
              cy={y(w[line.key])}
              r={selectedIdx === i && hover?.key === line.key && hover?.i === i ? 7 : selectedIdx === i ? 6 : 4}
              fill={line.color}
              stroke={selectedIdx === i ? '#fff' : 'none'}
              strokeWidth={selectedIdx === i ? 1.5 : 0}
              style={{ pointerEvents: 'none' }}
            />
            {/* Larger transparent hit-area so hovering/clicking a point doesn't
                require pixel-precise aim on the small visible dot. */}
            <circle
              cx={x(i)}
              cy={y(w[line.key])}
              r={10}
              fill="transparent"
              style={{ cursor: 'pointer' }}
              onClick={() => onSelect(i)}
              onMouseEnter={() => setHover({ key: line.key, i })}
              onMouseLeave={() => setHover(null)}
            />
          </g>
        ))
      )}
      {series.map((w, i) => (
        <text
          key={w.label}
          x={x(i)}
          y={height - 8}
          textAnchor="middle"
          className={`weekly-chart-label${selectedIdx === i ? ' selected' : ''}`}
          style={{ cursor: 'pointer' }}
          onClick={() => onSelect(i)}
        >
          {w.label}
        </text>
      ))}
      {/* foreignObject keeps the tooltip anchored to the point's actual SVG
          coordinates regardless of how the viewBox is scaled/letterboxed —
          plain % positioning on an overlay div would drift out of place. */}
      {hover && (
        <foreignObject
          x={ttX}
          y={Math.max(0, y(hoverWeek[hover.key]) - 34)}
          width={TT_W}
          height="26"
          style={{ overflow: 'visible', pointerEvents: 'none' }}
        >
          <div className="weekly-chart-tooltip">
            {hoverLine.label}: {hoverWeek[hover.key].toLocaleString()} · {weekPct(hoverWeek)[hover.key]}%
          </div>
        </foreignObject>
      )}
    </svg>
  );
}

function WeeklySentimentChart({ series, title, subtitle }) {
  const [selectedIdx, setSelectedIdx] = useState(series.length - 1);

  const selectedWeek = series[selectedIdx];
  const prevWeek = selectedIdx > 0 ? series[selectedIdx - 1] : null;
  const selectedPct = weekPct(selectedWeek);
  const prevPct = prevWeek ? weekPct(prevWeek) : null;
  const deltaFor = (key) => (prevPct ? Math.round((selectedPct[key] - prevPct[key]) * 10) / 10 : null);

  return (
    <ChartCard
      title={title}
      subtitle={subtitle}
      headerRight={<WeekPager label={selectedWeek.label} index={selectedIdx} total={series.length} onChange={setSelectedIdx} />}
    >
      <WeeklyLineChart series={series} selectedIdx={selectedIdx} onSelect={setSelectedIdx} />

      <div className="week-detail-panel">
        <span className="week-detail-label">{selectedWeek.label}</span>
        {SENTIMENT_LINES.map((line) => (
          <span key={line.key} className="week-detail-stat-group">
            <span className="dist-legend-dot" style={{ background: line.color }} />
            <span className="week-detail-stat">
              {line.label} {selectedWeek[line.key].toLocaleString()} · {selectedPct[line.key]}%
            </span>
            <TrendArrow
              delta={deltaFor(line.key)}
              goodDirection={line.key === 'positive' ? 'up' : line.key === 'negative' ? 'down' : null}
            />
          </span>
        ))}
      </div>
    </ChartCard>
  );
}

const DOW_THRESHOLD = 11.5;
const DOW_ELEVATED = 11.0;

function DowChart({ weeks, weekLabels, title, subtitle }) {
  const [selectedIdx, setSelectedIdx] = useState(weeks.length - 1);
  const rows = weeks[selectedIdx];
  const vals = rows.map((r) => r.negativePct);
  // Small headroom above the tallest bar / threshold so the risk line isn't
  // glued to the top. Scale is expressed as a % of the plot height so the bars
  // fill the card vertically (matching the Weekly Sentiment Trend height).
  const plotMax = Math.max(...vals, DOW_THRESHOLD) * 1.12;
  const colorFor = (pct) =>
    pct >= DOW_THRESHOLD ? 'var(--red)' : pct >= DOW_ELEVATED ? 'var(--yellow)' : 'var(--green)';

  return (
    <ChartCard
      className="dow-card"
      title={title}
      subtitle={subtitle}
      headerRight={<WeekPager label={weekLabels[selectedIdx]} index={selectedIdx} total={weeks.length} onChange={setSelectedIdx} />}
    >
      <div className="dow-plot">
        <div className="dow-threshold" style={{ bottom: `${(DOW_THRESHOLD / plotMax) * 100}%` }} />
        {rows.map((r) => (
          <div
            key={r.label}
            className="dow-col chart-hover"
            data-tooltip={`${r.label} · ${r.negativePct}% negative (${r.volume.toLocaleString()} calls)`}
          >
            <span className="dow-val">{r.negativePct}%</span>
            <div
              className="dow-bar"
              style={{ height: `${(r.negativePct / plotMax) * 100}%`, background: colorFor(r.negativePct) }}
            />
          </div>
        ))}
      </div>
      <div className="dow-axis">
        {rows.map((r) => (
          <span key={r.label} className="dow-day">
            {r.label}
          </span>
        ))}
      </div>
      <div className="dist-legend" style={{ marginTop: 12, paddingTop: 10, gap: 18 }}>
        <div className="dist-legend-item">
          <span className="dist-legend-dot" style={{ background: 'var(--red)' }} />
          <span className="dist-legend-label">High risk (≥ {DOW_THRESHOLD}%)</span>
        </div>
        <div className="dist-legend-item">
          <span className="dist-legend-dot" style={{ background: 'var(--yellow)' }} />
          <span className="dist-legend-label">Elevated (≥ {DOW_ELEVATED}%)</span>
        </div>
        <div className="dist-legend-item">
          <span className="dist-legend-dot" style={{ background: 'var(--green)' }} />
          <span className="dist-legend-label">Healthy (&lt; {DOW_ELEVATED}%)</span>
        </div>
        <div className="dist-legend-item">
          <span className="dow-legend-line" />
          <span className="dist-legend-label">Risk threshold ({DOW_THRESHOLD}%)</span>
        </div>
      </div>
    </ChartCard>
  );
}

function QualityBySentimentChart({ weeks, weekLabels, title, subtitle }) {
  const [selectedIdx, setSelectedIdx] = useState(weeks.length - 1);
  const rows = weeks[selectedIdx];
  const colorMap = { Positive: 'var(--green)', Neutral: 'var(--yellow)', Negative: 'var(--red)' };
  const max = Math.max(...rows.map((r) => r.avgScore)) || 1;

  return (
    <ChartCard
      title={title}
      subtitle={subtitle}
      headerRight={<WeekPager label={weekLabels[selectedIdx]} index={selectedIdx} total={weeks.length} onChange={setSelectedIdx} />}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {rows.map((r) => (
          <div
            key={r.sentiment}
            className="chart-hover"
            data-tooltip={`${r.sentiment} · ${r.avgScore} avg quality score`}
            style={{ display: 'flex', alignItems: 'center', gap: 10 }}
          >
            <span style={{ width: 70, fontSize: 12, color: 'var(--text-secondary)' }}>{r.sentiment}</span>
            <div className="weak-bar-track" style={{ flex: 1, width: 'auto' }}>
              <div
                className="weak-bar-fill"
                style={{ width: `${(r.avgScore / max) * 100}%`, background: colorMap[r.sentiment] }}
              />
            </div>
            <span style={{ width: 42, textAlign: 'right', fontSize: 13, fontWeight: 600 }}>{r.avgScore}</span>
          </div>
        ))}
      </div>
    </ChartCard>
  );
}

function CompositionChart({ weeklySeries, title, subtitle }) {
  const [selectedIdx, setSelectedIdx] = useState(weeklySeries.length - 1);
  const week = weeklySeries[selectedIdx];
  const total = week.positive + week.neutral + week.negative;
  const segments = [
    { key: 'positive', label: 'Positive', color: 'var(--green)' },
    { key: 'neutral', label: 'Neutral', color: 'var(--yellow)' },
    { key: 'negative', label: 'Negative', color: 'var(--red)' },
  ];
  const pct = (v) => Math.round((v / total) * 1000) / 10;

  return (
    <ChartCard
      className="composition-card"
      title={title}
      subtitle={subtitle}
      headerRight={<WeekPager label={week.label} index={selectedIdx} total={weeklySeries.length} onChange={setSelectedIdx} />}
    >
      <div className="mood-bar" style={{ height: 14 }}>
        {segments.map((s) => (
          <div
            key={s.key}
            className="mood-seg chart-hover"
            data-tooltip={`${s.label} · ${pct(week[s.key])}% (${week[s.key].toLocaleString()} calls)`}
            style={{ width: `${(week[s.key] / total) * 100}%`, background: s.color }}
          />
        ))}
      </div>
      <div className="mood-summary">
        <span className="mood-summary-happy">{pct(week.positive)}% happy</span>
        <span className="mood-summary-unhappy">{pct(week.negative)}% unhappy</span>
      </div>
      <div className="dist-legend" style={{ marginTop: 10, paddingTop: 10 }}>
        {segments.map((s) => (
          <div key={s.key} className="dist-legend-item">
            <span className="dist-legend-dot" style={{ background: s.color }} />
            <span className="dist-legend-count">{Math.round((week[s.key] / total) * 1000) / 10}%</span>
          </div>
        ))}
      </div>
    </ChartCard>
  );
}

function CallList({ title, rows, tone }) {
  return (
    <div className="rank-table-card">
      <div className="rank-table-title">{title}</div>
      <div className="call-list-rows">
        {rows.map((c) => (
          <div key={c.id} className="call-list-row">
            <span className={`call-list-score ${tone}`}>{c.score.toFixed(1)}</span>
            <span className="call-list-branch">{c.branch}</span>
            <span className="call-list-duration">{formatDuration(c.durationSec)}</span>
            <span className="tooltip-anchor" data-tooltip="Mock — no audio in this prototype">
              <button className="call-list-listen" tabIndex={-1}>
                <Icon name="play_circle" />
                Listen
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CxoInsightsView({
  data: reportData = D,
  viewKey = VIEW,
  showMetaBar = true,
  periodId: controlledPeriodId,
  onPeriodChange,
}) {
  const [expandedIntent, setExpandedIntent] = useState(null);
  const [distOpen, setDistOpen] = useState({});
  const [internalPeriodId, setInternalPeriodId] = useState('current');
  const periodId = controlledPeriodId ?? internalPeriodId;
  const setPeriodId = onPeriodChange ?? setInternalPeriodId;
  const toggle = (key) => setDistOpen((s) => ({ ...s, [key]: !s[key] }));
  const isOpen = (key) => !distOpen[key];

  const selectedPeriod = fortnightPeriods.find((p) => p.id === periodId) || fortnightPeriods[0];
  const weekLabels = reportData.weeklySentimentSeries.map((w) => w.label);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {showMetaBar && (
        <div className="cxo-meta-bar">
          <SignalDateFilter selectedId={periodId} onChange={setPeriodId} />
          <span className="cxo-meta-chip muted">
            <Icon name="schedule" />
            {selectedPeriod.nextRefreshAt ? `Next refresh ${selectedPeriod.nextRefreshAt}` : `Refreshed ${selectedPeriod.refreshedAt}`}
          </span>
          <span className="tab-badge admin">ADMIN ONLY</span>
          {periodId !== 'current' && (
            <span className="cxo-meta-chip muted">
              <Icon name="info" /> Historical period — this prototype shows the same illustrative dataset for every period
            </span>
          )}
        </div>
      )}

      <div>
        <div className="section-heading">Key Metrics</div>
        <div className="kpi-grid">
          <div className="kpi-card">
            <div className="kpi-label">Total Interactions</div>
            <div className="kpi-value">{reportData.totalInteractions.toLocaleString()}</div>
            <div className="kpi-sub">
              {reportData.fortnightVolumeSplit.firstHalf.toLocaleString()} · {reportData.fortnightVolumeSplit.secondHalf.toLocaleString()}
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Avg Quality Score</div>
            <div className="kpi-value">{reportData.avgScore}%</div>
            <div className="kpi-delta-row">
              <Icon name="arrow_upward" className="up" />
              <span className="kpi-delta up">+{reportData.scoreDelta}</span>
              <span className="kpi-delta-caption">vs prev period</span>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Positive Sentiment</div>
            <div className="kpi-value" style={{ color: 'var(--green-text)' }}>
              {reportData.sentimentSummary.positivePct}%
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Negative Sentiment</div>
            <div className="kpi-value" style={{ color: 'var(--red-text)' }}>
              {reportData.sentimentSummary.negativePct}%
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Avg Call Duration</div>
            <div className="kpi-value">{formatDuration(reportData.avgCallDurationSec)}</div>
          </div>
        </div>
      </div>

      <div>
        <div className="section-heading">Key Insights</div>
        <div className="top-cards-row">
          {reportData.keyInsights.map((k) => (
            <div key={k.id} className={`info-card focus${viewKey === 'cxo_lens' ? ` narrative-card tone-${k.tone || 'neutral'}` : ''}`} style={{ flex: '1 1 260px' }}>
              <div className="info-card-heading-row" style={{ justifyContent: 'space-between' }}>
                <span className="info-card-kpi">{k.title}</span>
                <FeedbackButtons view={viewKey} section="key_insight" insightId={k.id} />
              </div>
              <div className="info-card-text">{k.detail}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="rank-tables-grid chart-card-grid">
        <WeeklySentimentChart series={reportData.weeklySentimentSeries} title="Weekly Sentiment Trend" subtitle={reportData.findingWeekly} />

        <DowChart
          weeks={sentimentByDowByWeek}
          weekLabels={weekLabels}
          title="Sentiment by Day of Week"
          subtitle={reportData.findingDow}
        />
      </div>

      <div className="rank-tables-grid chart-card-grid chart-card-grid--stretch">
        <QualityBySentimentChart
          weeks={qualityBySentimentByWeek}
          weekLabels={weekLabels}
          title="Quality Score × Sentiment"
          subtitle={reportData.findingQuality}
        />
        <CompositionChart weeklySeries={reportData.weeklySentimentSeries} title="Sentiment Composition" subtitle={reportData.findingComposition} />
      </div>

      <div>
        <div className="section-heading">Intent Callouts</div>
        <div className="top-cards-row">
          {reportData.intentCallouts.map((k) => (
            <div key={k.id} className={`info-card priority${viewKey === 'cxo_lens' ? ` narrative-card tone-${k.tone || 'neutral'}` : ''}`} style={{ flex: '1 1 260px' }}>
              <div className="info-card-heading-row" style={{ justifyContent: 'space-between' }}>
                <span className="info-card-title">{k.title}</span>
                <FeedbackButtons view={viewKey} section="intent_callout" insightId={k.id} />
              </div>
              <div className="info-card-text">{k.detail}</div>
            </div>
          ))}
        </div>
      </div>

      <CollapsibleSection
        title="Intent × Sentiment"
        subtitle="Click a row to see its 5 worst-scoring negative calls."
        open={isOpen('intent')}
        onToggle={() => toggle('intent')}
      >
        <div className="improve-list">
          <div className="roster-grid-row roster-head" style={{ gridTemplateColumns: '1.6fr 90px 90px 90px 1.2fr' }}>
            <span>Intent</span>
            <span>Volume</span>
            <span>Positive %</span>
            <span>Negative %</span>
            <span>Risk</span>
          </div>
          {reportData.intentSentiment.map((row) => {
            const hasDrilldown = !!reportData.intentDrilldown[row.intent];
            const expanded = expandedIntent === row.intent;
            const maxNeg = Math.max(...reportData.intentSentiment.map((r) => r.negativePct));
            return (
              <div key={row.intent} className={`improve-row${expanded ? ' expanded' : ''}`}>
                <div
                  className="roster-grid-row roster-row"
                  style={{ gridTemplateColumns: '1.6fr 90px 90px 90px 1.2fr', cursor: hasDrilldown ? 'pointer' : 'default' }}
                  onClick={() => hasDrilldown && setExpandedIntent(expanded ? null : row.intent)}
                  title={hasDrilldown ? (expanded ? 'Collapse' : 'View worst calls') : undefined}
                >
                  <span className="roster-agent-name" style={{ paddingLeft: 6 }}>{row.intent}</span>
                  <span className="roster-calls">{row.volume.toLocaleString()}</span>
                  <span className="roster-calls" style={{ color: 'var(--green-text)' }}>{row.positivePct}%</span>
                  <span className="roster-calls" style={{ color: 'var(--red-text)' }}>{row.negativePct}%</span>
                  <div className="weak-bar-track" style={{ width: 'auto' }}>
                    <div
                      className="weak-bar-fill"
                      style={{ width: `${(row.negativePct / maxNeg) * 100}%`, background: 'var(--red)' }}
                    />
                  </div>
                </div>
                {expanded && hasDrilldown && (
                  <div className="improve-detail">
                    <div className="improve-detail-label" style={{ marginBottom: 8 }}>
                      Worst-scoring negative calls
                    </div>
                    <div className="call-list-rows">
                      {reportData.intentDrilldown[row.intent].map((c) => (
                        <div key={c.id} className="call-list-row">
                          <span className="call-list-score red">{c.score.toFixed(1)}</span>
                          <span className="call-list-branch">{c.branch}</span>
                          <span className="call-list-duration">{formatDuration(c.durationSec)}</span>
                          <span className="tooltip-anchor" data-tooltip="Mock — no audio in this prototype">
                            <button className="call-list-listen" tabIndex={-1}>
                              <Icon name="play_circle" />
                              Listen
                            </button>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </CollapsibleSection>

      <CollapsibleSection
        title="Gender × Sentiment"
        subtitle={reportData.genderFindings}
        open={isOpen('gender')}
        onToggle={() => toggle('gender')}
      >
        <div className="roster-grid-row roster-head" style={{ gridTemplateColumns: '1.4fr 100px 100px 100px 100px' }}>
          <span>Gender</span>
          <span>Volume</span>
          <span>Share %</span>
          <span>Positive %</span>
          <span>Negative %</span>
        </div>
        {(() => {
          const genderTotal = reportData.genderSentiment.reduce((sum, r) => sum + r.volume, 0) || 1;
          return reportData.genderSentiment.map((row) => (
            <div key={row.gender} className="roster-grid-row roster-row" style={{ gridTemplateColumns: '1.4fr 100px 100px 100px 100px', cursor: 'default' }}>
              <span className="roster-agent-name" style={{ paddingLeft: 6 }}>{row.gender}</span>
              <span className="roster-calls">{row.volume.toLocaleString()}</span>
              <span className="roster-calls">{Math.round((row.volume / genderTotal) * 1000) / 10}%</span>
              <span className="roster-calls" style={{ color: 'var(--green-text)' }}>{row.positivePct}%</span>
              <span className="roster-calls" style={{ color: 'var(--red-text)' }}>{row.negativePct}%</span>
            </div>
          ));
        })()}
      </CollapsibleSection>

      <div>
        <div className="section-heading">KPI Deep-Dive</div>
        <div className="rank-tables-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {reportData.kpiDeepDive.map((group) => {
            const maxPass = Math.max(...group.metrics.map((m) => m.passPct));
            return (
              <div key={group.groupId} className="rank-table-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                  <div className="rank-table-title" style={{ marginBottom: 0 }}>{group.title}</div>
                  <span className={`weak-sev-badge ${group.badge === 'warn' ? 'high' : 'moderate'}`}>
                    {group.badge === 'warn' ? 'Needs attention' : 'New'}
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 12 }}>
                  {group.metrics.map((m) => (
                    <div key={m.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ flex: 1, fontSize: 12, color: 'var(--text-secondary)' }}>{m.label}</span>
                      <div className="weak-bar-track" style={{ width: 100 }}>
                        <div
                          className="weak-bar-fill"
                          style={{ width: `${(m.passPct / maxPass) * 100}%`, background: m.passPct >= 80 ? 'var(--green)' : 'var(--yellow)' }}
                        />
                      </div>
                      <span style={{ width: 40, textAlign: 'right', fontSize: 12, fontWeight: 600 }}>{m.passPct}%</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8, paddingTop: 10, borderTop: '1px solid var(--border-light)' }}>
                  <div className="improve-detail-text">{group.insight}</div>
                  <FeedbackButtons view={viewKey} section="kpi_deep_dive" insightId={group.groupId} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <div className="section-heading">Calls Worth Listening To</div>
        <div className="rank-tables-grid">
          <CallList title="Worst 5 (Negative)" rows={reportData.callsWorstNegative} tone="red" />
          <CallList title="Best 5 (Positive)" rows={reportData.callsBestPositive} tone="green" />
        </div>
      </div>
    </div>
  );
}
