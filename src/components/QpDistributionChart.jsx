import { useMemo, useState } from 'react';
import Icon from './Icon';

const SEVERITY_COLOR = {
  critical: 'var(--red)',
  attention: 'var(--yellow)',
  healthy: 'var(--green)',
  unused: 'var(--text-muted)',
};

const BAND_COLORS = {
  '<60%': 'var(--red)',
  '60–70%': '#F07975',
  '70–75%': 'var(--yellow)',
  '75–80%': 'var(--accent)',
  '80–85%': '#5B7FD4',
  '85–100%': '#2F4DB8',
};

const BAND_ORDER = ['<60%', '60–70%', '70–75%', '75–80%', '80–85%', '85–100%'];

function bandSortIndex(band) {
  const idx = BAND_ORDER.indexOf(band);
  return idx === -1 ? BAND_ORDER.length : idx;
}

function bandColor(band) {
  return BAND_COLORS[band] ?? 'var(--accent)';
}

function bandContainsAvg(band, avgScore) {
  if (avgScore == null) return false;
  if (band === '<60%') return avgScore < 60;
  const parts = band.replace(/%/g, '').split('–');
  if (parts.length !== 2) return false;
  const lo = Number(parts[0]);
  const hi = Number(parts[1]);
  return avgScore >= lo && (band.endsWith('100%') ? avgScore <= hi : avgScore < hi);
}

function polarToCartesian(cx, cy, r, angleDeg) {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(angleRad),
    y: cy + r * Math.sin(angleRad),
  };
}

function describeDonutSlice(cx, cy, innerR, outerR, startAngle, endAngle) {
  const startOuter = polarToCartesian(cx, cy, outerR, endAngle);
  const endOuter = polarToCartesian(cx, cy, outerR, startAngle);
  const startInner = polarToCartesian(cx, cy, innerR, startAngle);
  const endInner = polarToCartesian(cx, cy, innerR, endAngle);
  const largeArc = endAngle - startAngle <= 180 ? 0 : 1;

  return [
    `M ${startOuter.x} ${startOuter.y}`,
    `A ${outerR} ${outerR} 0 ${largeArc} 0 ${endOuter.x} ${endOuter.y}`,
    `L ${startInner.x} ${startInner.y}`,
    `A ${innerR} ${innerR} 0 ${largeArc} 1 ${endInner.x} ${endInner.y}`,
    'Z',
  ].join(' ');
}

function barWidth(matched, maxMatched) {
  if (!maxMatched || !matched) return 0;
  const ratio = Math.sqrt(matched) / Math.sqrt(maxMatched);
  return Math.max(8, Math.round(ratio * 100));
}

export function QpInteractionMix({ rows, totalUnique }) {
  const sorted = useMemo(
    () => [...rows].sort((a, b) => b.matched - a.matched || b.sharePct - a.sharePct),
    [rows],
  );

  if (!sorted.length) return null;

  const maxMatched = sorted[0]?.matched ?? 1;
  const top = sorted[0];

  return (
    <div className="qp-mix-chart">
      <div className="qp-mix-summary">
        <span>
          <strong>{sorted.length}</strong> active profile{sorted.length === 1 ? '' : 's'}
        </span>
        {top && (
          <>
            <span className="qp-mix-summary-sep">·</span>
            <span>
              Largest share: <strong>{top.name}</strong> ({top.sharePct}%)
            </span>
          </>
        )}
      </div>

      <div className="qp-mix-rank-list qp-table-scroll-body">
        {sorted.map((row, index) => (
          <div
            key={row.id}
            className="qp-mix-rank-row chart-hover"
            data-tooltip={`${row.name}: ${row.matched.toLocaleString()} calls (${row.sharePct}% of unique calls)${
              row.avgScore != null ? ` · avg ${row.avgScore}%` : ''
            }`}
          >
            <span className="qp-mix-rank-index">{index + 1}</span>
            <div className="qp-mix-rank-main">
              <div className="qp-mix-rank-head">
                <span className="qp-mix-rank-name" title={row.name}>
                  {row.name}
                </span>
                <span className="qp-mix-rank-stats">
                  {row.matched.toLocaleString()}
                  <span className="qp-mix-rank-pct">({row.sharePct}%)</span>
                </span>
              </div>
              <div className="qp-mix-rank-bar-track">
                <div
                  className="qp-mix-rank-bar-fill"
                  style={{
                    width: `${barWidth(row.matched, maxMatched)}%`,
                    background: SEVERITY_COLOR[row.severity] ?? 'var(--accent)',
                  }}
                />
              </div>
            </div>
            {row.avgScore != null && (
              <span className="qp-mix-rank-score" style={{ color: SEVERITY_COLOR[row.severity] ?? 'var(--text)' }}>
                {row.avgScore}%
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="weak-footnote">
        Ranked by matched calls · scroll inside the list to see all profiles (5 visible at a time)
        <br />
        Total unique interactions: {totalUnique.toLocaleString()}
      </div>
    </div>
  );
}

export function QpScoreDistribution({ bands, insight, avgScore }) {
  const [hoverBand, setHoverBand] = useState(null);
  const orderedBands = useMemo(
    () => [...bands].sort((a, b) => bandSortIndex(a.band) - bandSortIndex(b.band)),
    [bands],
  );
  const topBand = useMemo(
    () => [...orderedBands].sort((a, b) => b.share - a.share)[0],
    [orderedBands],
  );
  const avgBand = avgScore != null ? orderedBands.find((b) => bandContainsAvg(b.band, avgScore)) : null;
  const activeSlices = orderedBands.filter((b) => b.count > 0);
  const totalCount = activeSlices.reduce((sum, b) => sum + b.count, 0) || 1;

  const slices = useMemo(() => {
    let cursor = 0;
    return activeSlices.map((band) => {
      const sweep = (band.count / totalCount) * 360;
      const start = cursor;
      const end = cursor + sweep;
      cursor = end;
      return { ...band, start, end, mid: start + sweep / 2 };
    });
  }, [activeSlices, totalCount]);

  const emphasisBand = hoverBand ?? avgBand?.band ?? topBand?.band;
  const size = 220;
  const cx = size / 2;
  const cy = size / 2;
  const outerR = 96;
  const innerR = 58;

  return (
    <div className="qp-score-dist">
      {insight && (
        <div className="dist-insight-chip">
          <Icon name="auto_awesome" />
          {insight}
        </div>
      )}

      {(avgScore != null || topBand) && (
        <div className="qp-score-dist-summary">
          {avgScore != null && (
            <span>
              Portfolio avg: <strong>{avgScore}%</strong>
              {avgBand ? ` (${avgBand.band} band)` : ''}
            </span>
          )}
          {topBand && (
            <>
              {avgScore != null && <span className="qp-mix-summary-sep">·</span>}
              <span>
                Largest band: <strong>{topBand.band}</strong> ({topBand.share}%)
              </span>
            </>
          )}
        </div>
      )}

      <div className="qp-score-dist-pie-wrap">
        <div className="qp-score-dist-pie">
          <svg viewBox={`0 0 ${size} ${size}`} className="qp-score-dist-svg" aria-hidden="true">
            {slices.map((slice) => {
              const isEmphasis = emphasisBand === slice.band;
              const isAvgBand = bandContainsAvg(slice.band, avgScore);
              const isTopBand = topBand?.band === slice.band;
              return (
                <path
                  key={slice.band}
                  d={describeDonutSlice(cx, cy, innerR, isEmphasis ? outerR + 4 : outerR, slice.start, slice.end)}
                  fill={bandColor(slice.band)}
                  className={`qp-score-dist-slice${isEmphasis ? ' is-active' : ''}${isAvgBand ? ' is-avg-band' : ''}${isTopBand ? ' is-top-band' : ''}`}
                  onMouseEnter={() => setHoverBand(slice.band)}
                  onMouseLeave={() => setHoverBand(null)}
                />
              );
            })}
          </svg>
          <div className="qp-score-dist-pie-center">
            {hoverBand ? (
              <>
                <span className="qp-score-dist-pie-value">{orderedBands.find((b) => b.band === hoverBand)?.share}%</span>
                <span className="qp-score-dist-pie-label">{hoverBand}</span>
              </>
            ) : avgScore != null ? (
              <>
                <span className="qp-score-dist-pie-value">{avgScore}%</span>
                <span className="qp-score-dist-pie-label">Portfolio avg</span>
              </>
            ) : (
              <>
                <span className="qp-score-dist-pie-value">{topBand?.share ?? 0}%</span>
                <span className="qp-score-dist-pie-label">Largest band</span>
              </>
            )}
          </div>
          {hoverBand && (() => {
            const band = orderedBands.find((b) => b.band === hoverBand);
            if (!band) return null;
            return (
              <div className="qp-score-dist-tooltip">
                {band.band}: {band.count.toLocaleString()} analyses ({band.share}%)
              </div>
            );
          })()}
        </div>

        <div className="dist-legend qp-score-dist-legend">
          {orderedBands.map((band) => {
            const isEmphasis = emphasisBand === band.band;
            return (
              <button
                key={band.band}
                type="button"
                className={`dist-legend-item qp-score-dist-legend-item${isEmphasis ? ' is-active' : ''}${band.count === 0 ? ' is-empty' : ''}`}
                onMouseEnter={() => band.count > 0 && setHoverBand(band.band)}
                onMouseLeave={() => setHoverBand(null)}
                onFocus={() => band.count > 0 && setHoverBand(band.band)}
                onBlur={() => setHoverBand(null)}
              >
                <span className="dist-legend-dot" style={{ background: bandColor(band.band) }} />
                <span className="dist-legend-label">{band.band}</span>
                <span className="dist-legend-count">
                  {band.count.toLocaleString()} ({band.share}%)
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="weak-footnote">
        Hover a slice or legend item to see band details · center shows portfolio average
      </div>
    </div>
  );
}
