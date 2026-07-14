import { useMemo } from 'react';
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

function distBarWidth(count, maxCount) {
  if (!maxCount || !count) return 0;
  const ratio = Math.sqrt(count) / Math.sqrt(maxCount);
  return Math.max(10, Math.round(ratio * 100));
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
  const orderedBands = useMemo(
    () => [...bands].sort((a, b) => bandSortIndex(a.band) - bandSortIndex(b.band)),
    [bands],
  );
  const maxCount = Math.max(...orderedBands.map((b) => b.count), 1);
  const topBand = useMemo(
    () => [...orderedBands].sort((a, b) => b.share - a.share)[0],
    [orderedBands],
  );
  const avgBand = avgScore != null ? orderedBands.find((b) => bandContainsAvg(b.band, avgScore)) : null;

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

      <div className="qp-score-dist-list">
        {orderedBands.map((b) => {
          const isAvgBand = bandContainsAvg(b.band, avgScore);
          const isTopBand = topBand?.band === b.band;
          return (
            <div
              key={b.band}
              className={`qp-score-dist-row chart-hover${isAvgBand ? ' is-avg-band' : ''}${isTopBand ? ' is-top-band' : ''}`}
              data-tooltip={`${b.band}: ${b.count.toLocaleString()} analyses (${b.share}%)`}
            >
              <span className="qp-score-dist-band">{b.band}</span>
              <div className="qp-score-dist-bar-track">
                <div
                  className="qp-score-dist-bar-fill"
                  style={{
                    width: `${distBarWidth(b.count, maxCount)}%`,
                    background: bandColor(b.band),
                  }}
                />
              </div>
              <span className="qp-score-dist-stats">
                {b.count.toLocaleString()}
                <span className="qp-score-dist-pct">({b.share}%)</span>
              </span>
            </div>
          );
        })}
      </div>

      <div className="weak-footnote">
        Score bands in order · bar length uses a compressed scale so smaller bands stay visible
      </div>
    </div>
  );
}
