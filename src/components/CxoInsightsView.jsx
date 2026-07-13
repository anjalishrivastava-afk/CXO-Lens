import { useState } from 'react';
import Icon from './Icon';
import FeedbackButtons from './FeedbackButtons';
import CollapsibleSection from './CollapsibleSection';
import SignalDateFilter from './SignalDateFilter';
import { cxoData as D, formatDuration, fortnightPeriods } from '../cxoData';

const VIEW = 'cxo';

const SENTIMENT_LINES = [
  { key: 'positive', color: 'var(--green)', label: 'Positive' },
  { key: 'neutral', color: 'var(--yellow)', label: 'Neutral' },
  { key: 'negative', color: 'var(--red)', label: 'Negative' },
];

function WeeklyLineChart({ series, selectedIdx, onSelect }) {
  const width = 560;
  const height = 170;
  const padTop = 12;
  const padBottom = 28;
  const padX = 16;
  const max = Math.max(...series.flatMap((w) => [w.positive, w.neutral, w.negative])) || 1;
  const stepX = series.length > 1 ? (width - padX * 2) / (series.length - 1) : 0;
  const y = (v) => padTop + (1 - v / max) * (height - padTop - padBottom);
  const x = (i) => padX + i * stepX;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="weekly-chart-svg">
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
          <circle
            key={`${line.key}-${i}`}
            cx={x(i)}
            cy={y(w[line.key])}
            r={selectedIdx === i ? 6 : 4}
            fill={line.color}
            stroke={selectedIdx === i ? '#fff' : 'none'}
            strokeWidth={selectedIdx === i ? 1.5 : 0}
            style={{ cursor: 'pointer' }}
            onClick={() => onSelect(i)}
          >
            <title>
              {line.label} · {w.label}: {w[line.key].toLocaleString()}
            </title>
          </circle>
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
    </svg>
  );
}

function WeeklyBarChart({ series, selectedIdx, onSelect }) {
  const max = Math.max(...series.flatMap((w) => [w.positive, w.neutral, w.negative])) || 1;
  return (
    <div className="weekly-bar-chart">
      {series.map((w, i) => (
        <div
          key={w.label}
          className={`weekly-bar-group${selectedIdx === i ? ' selected' : ''}`}
          onClick={() => onSelect(i)}
        >
          <div className="weekly-bar-cluster">
            {SENTIMENT_LINES.map((line) => (
              <div
                key={line.key}
                className="weekly-mini-bar"
                title={`${line.label} · ${w.label}: ${w[line.key].toLocaleString()}`}
                style={{ height: `${Math.round((w[line.key] / max) * 118)}px`, background: line.color }}
              />
            ))}
          </div>
          <div className="weekly-bar-label">{w.label}</div>
        </div>
      ))}
    </div>
  );
}

function WeeklySentimentChart({ series }) {
  const [graphType, setGraphType] = useState('line');
  const [selectedIdx, setSelectedIdx] = useState(series.length - 1);

  const selectedWeek = series[selectedIdx];
  const prevWeek = selectedIdx > 0 ? series[selectedIdx - 1] : null;
  const negDelta = prevWeek ? selectedWeek.negative - prevWeek.negative : null;

  return (
    <div>
      <div className="chart-toolbar">
        <div className="chart-type-toggle">
          <span className="tooltip-anchor" data-tooltip="Line chart">
            <button
              className={`chart-toggle-btn${graphType === 'line' ? ' active' : ''}`}
              onClick={() => setGraphType('line')}
            >
              <Icon name="show_chart" />
            </button>
          </span>
          <span className="tooltip-anchor" data-tooltip="Bar chart">
            <button
              className={`chart-toggle-btn${graphType === 'bar' ? ' active' : ''}`}
              onClick={() => setGraphType('bar')}
            >
              <Icon name="bar_chart" />
            </button>
          </span>
        </div>
        <div className="chart-week-select">
          <label htmlFor="cxo-week-select">Week</label>
          <select
            id="cxo-week-select"
            value={selectedIdx}
            onChange={(e) => setSelectedIdx(Number(e.target.value))}
          >
            {series.map((w, i) => (
              <option key={w.label} value={i}>
                {w.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {graphType === 'line' ? (
        <WeeklyLineChart series={series} selectedIdx={selectedIdx} onSelect={setSelectedIdx} />
      ) : (
        <WeeklyBarChart series={series} selectedIdx={selectedIdx} onSelect={setSelectedIdx} />
      )}

      <div className="week-detail-panel">
        <span className="week-detail-label">{selectedWeek.label}</span>
        <span className="week-detail-stat" style={{ color: 'var(--green-text)' }}>
          Positive {selectedWeek.positive.toLocaleString()}
        </span>
        <span className="week-detail-stat" style={{ color: 'var(--yellow-text)' }}>
          Neutral {selectedWeek.neutral.toLocaleString()}
        </span>
        <span className="week-detail-stat" style={{ color: 'var(--red-text)' }}>
          Negative {selectedWeek.negative.toLocaleString()}
        </span>
        {negDelta != null && (
          <span className={`week-detail-delta ${negDelta <= 0 ? 'up' : 'down'}`}>
            <Icon name={negDelta <= 0 ? 'arrow_downward' : 'arrow_upward'} />
            {negDelta <= 0 ? '' : '+'}
            {negDelta.toLocaleString()} negative vs prev week
          </span>
        )}
      </div>

      <div className="dist-legend" style={{ marginTop: 4, paddingTop: 10 }}>
        {SENTIMENT_LINES.map((line) => (
          <div key={line.key} className="dist-legend-item">
            <span className="dist-legend-dot" style={{ background: line.color }} />
            <span className="dist-legend-label">{line.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DowChart({ rows }) {
  const max = Math.max(...rows.map((r) => r.volume)) || 1;
  const colorFor = (pct) => (pct >= 11.5 ? 'var(--red)' : pct >= 11.0 ? 'var(--yellow)' : 'var(--green)');
  return (
    <div className="dist-grid" style={{ gridTemplateColumns: `repeat(${rows.length}, 1fr)` }}>
      {rows.map((r) => (
        <div key={r.label} className="dist-col">
          <div className="dist-share">{r.negativePct}%</div>
          <div
            className="dist-bar"
            title={`${r.label}: ${r.volume.toLocaleString()} calls, ${r.negativePct}% negative`}
            style={{ height: `${Math.round((r.volume / max) * 118)}px`, background: colorFor(r.negativePct) }}
          />
          <div className="dist-range">{r.label}</div>
        </div>
      ))}
    </div>
  );
}

function QualityBySentimentChart({ rows }) {
  const colorMap = { Positive: 'var(--green)', Neutral: 'var(--yellow)', Negative: 'var(--red)' };
  const max = Math.max(...rows.map((r) => r.avgScore)) || 1;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {rows.map((r) => (
        <div key={r.sentiment} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
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

export default function CxoInsightsView() {
  const [expandedIntent, setExpandedIntent] = useState(null);
  const [distOpen, setDistOpen] = useState({});
  const [periodId, setPeriodId] = useState('current');
  const toggle = (key) => setDistOpen((s) => ({ ...s, [key]: !s[key] }));
  const isOpen = (key) => !distOpen[key];

  const selectedPeriod = fortnightPeriods.find((p) => p.id === periodId) || fortnightPeriods[0];

  const composition = [
    { key: 'positivePct', color: 'var(--green)' },
    { key: 'neutralPct', color: 'var(--yellow)' },
    { key: 'negativePct', color: 'var(--red)' },
    { key: 'otherPct', color: 'var(--text-muted)' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div className="cxo-meta-bar">
        <span className="cxo-meta-chip">
          <Icon name="event_repeat" /> Fortnightly
        </span>
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

      <div>
        <div className="section-heading">Key Metrics</div>
        <div className="kpi-grid">
          <div className="kpi-card">
            <div className="kpi-label">Total Interactions</div>
            <div className="kpi-value">{D.totalInteractions.toLocaleString()}</div>
            <div className="kpi-sub">
              {D.fortnightVolumeSplit.firstHalf.toLocaleString()} · {D.fortnightVolumeSplit.secondHalf.toLocaleString()}
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Avg Quality Score</div>
            <div className="kpi-value">{D.avgScore}%</div>
            <div className="kpi-delta-row">
              <Icon name="arrow_upward" className="up" />
              <span className="kpi-delta up">+{D.scoreDelta}</span>
              <span className="kpi-delta-caption">vs prev period</span>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Positive Sentiment</div>
            <div className="kpi-value" style={{ color: 'var(--green-text)' }}>
              {D.sentimentSummary.positivePct}%
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Negative Sentiment</div>
            <div className="kpi-value" style={{ color: 'var(--red-text)' }}>
              {D.sentimentSummary.negativePct}%
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Avg Call Duration</div>
            <div className="kpi-value">{formatDuration(D.avgCallDurationSec)}</div>
          </div>
        </div>
      </div>

      <div>
        <div className="section-heading">Key Insights</div>
        <div className="top-cards-row">
          {D.keyInsights.map((k) => (
            <div key={k.id} className="info-card focus" style={{ flex: '1 1 260px' }}>
              <div className="info-card-heading-row" style={{ justifyContent: 'space-between' }}>
                <span className="info-card-kpi">{k.title}</span>
                <FeedbackButtons view={VIEW} section="key_insight" insightId={k.id} />
              </div>
              <div className="info-card-text">{k.detail}</div>
            </div>
          ))}
        </div>
      </div>

      <CollapsibleSection
        title="Weekly Sentiment Trend"
        subtitle={D.findingWeekly}
        open={isOpen('weekly')}
        onToggle={() => toggle('weekly')}
      >
        <WeeklySentimentChart series={D.weeklySentimentSeries} />
      </CollapsibleSection>

      <CollapsibleSection
        title="Sentiment by Day of Week"
        subtitle={D.findingDow}
        open={isOpen('dow')}
        onToggle={() => toggle('dow')}
      >
        <DowChart rows={D.sentimentByDow} />
      </CollapsibleSection>

      <div className="rank-tables-grid">
        <CollapsibleSection
          title="Quality Score × Sentiment"
          subtitle={D.findingQuality}
          open={isOpen('quality')}
          onToggle={() => toggle('quality')}
        >
          <QualityBySentimentChart rows={D.qualityBySentiment} />
        </CollapsibleSection>
        <CollapsibleSection
          title="Sentiment Composition"
          subtitle={D.findingComposition}
          open={isOpen('composition')}
          onToggle={() => toggle('composition')}
        >
          <div className="mood-bar" style={{ height: 14 }}>
            {composition.map((c) => (
              <div
                key={c.key}
                className="mood-seg"
                style={{ width: `${D.sentimentSummary[c.key]}%`, background: c.color }}
              />
            ))}
          </div>
          <div className="dist-legend" style={{ marginTop: 10, paddingTop: 10 }}>
            {composition.map((c) => (
              <div key={c.key} className="dist-legend-item">
                <span className="dist-legend-dot" style={{ background: c.color }} />
                <span className="dist-legend-count">{D.sentimentSummary[c.key]}%</span>
              </div>
            ))}
          </div>
        </CollapsibleSection>
      </div>

      <div>
        <div className="section-heading">Intent Callouts</div>
        <div className="top-cards-row">
          {D.intentCallouts.map((k) => (
            <div key={k.id} className="info-card priority" style={{ flex: '1 1 260px' }}>
              <div className="info-card-heading-row" style={{ justifyContent: 'space-between' }}>
                <span className="info-card-title">{k.title}</span>
                <FeedbackButtons view={VIEW} section="intent_callout" insightId={k.id} />
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
          {D.intentSentiment.map((row) => {
            const hasDrilldown = !!D.intentDrilldown[row.intent];
            const expanded = expandedIntent === row.intent;
            const maxNeg = Math.max(...D.intentSentiment.map((r) => r.negativePct));
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
                      {D.intentDrilldown[row.intent].map((c) => (
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
        subtitle={D.genderFindings}
        open={isOpen('gender')}
        onToggle={() => toggle('gender')}
      >
        <div className="roster-grid-row roster-head" style={{ gridTemplateColumns: '1.4fr 100px 100px 100px' }}>
          <span>Gender</span>
          <span>Volume</span>
          <span>Positive %</span>
          <span>Negative %</span>
        </div>
        {D.genderSentiment.map((row) => (
          <div key={row.gender} className="roster-grid-row roster-row" style={{ gridTemplateColumns: '1.4fr 100px 100px 100px', cursor: 'default' }}>
            <span className="roster-agent-name" style={{ paddingLeft: 6 }}>{row.gender}</span>
            <span className="roster-calls">{row.volume.toLocaleString()}</span>
            <span className="roster-calls" style={{ color: 'var(--green-text)' }}>{row.positivePct}%</span>
            <span className="roster-calls" style={{ color: 'var(--red-text)' }}>{row.negativePct}%</span>
          </div>
        ))}
      </CollapsibleSection>

      <div>
        <div className="section-heading">KPI Deep-Dive</div>
        <div className="rank-tables-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {D.kpiDeepDive.map((group) => {
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
                  <FeedbackButtons view={VIEW} section="kpi_deep_dive" insightId={group.groupId} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <div className="section-heading">Calls Worth Listening To</div>
        <div className="rank-tables-grid">
          <CallList title="Worst 5 (Negative)" rows={D.callsWorstNegative} tone="red" />
          <CallList title="Best 5 (Positive)" rows={D.callsBestPositive} tone="green" />
        </div>
      </div>
    </div>
  );
}
