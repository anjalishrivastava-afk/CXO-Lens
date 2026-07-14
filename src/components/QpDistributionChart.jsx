import Icon from './Icon';

const SEVERITY_COLOR = {
  critical: 'var(--red)',
  attention: 'var(--yellow)',
  healthy: 'var(--green)',
  unused: 'var(--text-muted)',
};

const DIST_COLORS = ['var(--red)', '#F07975', 'var(--yellow)', 'var(--accent)', '#8FA4FF'];

export function QpInteractionMix({ rows, totalUnique }) {
  if (!rows.length) return null;

  return (
    <div className="dist-section" style={{ marginTop: 0 }}>
      <div className="mood-bar" style={{ height: 10, borderRadius: 5 }}>
        {rows.map((r, i) => (
          <div
            key={r.id}
            className="mood-seg chart-hover"
            data-tooltip={`${r.name}: ${r.matched.toLocaleString()} (${r.sharePct}%)`}
            style={{
              width: `${r.sharePct}%`,
              background: SEVERITY_COLOR[r.severity] ?? 'var(--accent)',
              animationDelay: `${i * 0.08}s`,
            }}
          />
        ))}
      </div>
      <div className="dist-legend">
        {rows.map((r) => (
          <div key={r.id} className="dist-legend-item">
            <span className="dist-legend-dot" style={{ background: SEVERITY_COLOR[r.severity], borderRadius: '50%' }} />
            <span className="dist-legend-label">{r.name}</span>
            <span className="dist-legend-count">
              {r.matched.toLocaleString()} ({r.sharePct}%)
            </span>
          </div>
        ))}
      </div>
      <div className="weak-footnote">Total unique interactions: {totalUnique.toLocaleString()}</div>
    </div>
  );
}

export function QpScoreDistribution({ bands, insight, avgScore }) {
  const maxCount = Math.max(...bands.map((b) => b.count), 1);

  return (
    <div className="dist-section" style={{ marginTop: 0 }}>
      {insight && (
        <div className="dist-insight-chip">
          <Icon name="auto_awesome" />
          {insight}
        </div>
      )}
      <div className="dist-chart-wrap">
        {avgScore != null && (
          <>
            <div className="dist-avg-line" style={{ left: `${Math.min(Math.max(avgScore, 8), 92)}%` }} />
            <div className="dist-avg-label" style={{ left: `calc(${avgScore}% - 10px)`, opacity: 1, transform: 'translateX(-100%)' }}>
              Avg {avgScore}%
            </div>
          </>
        )}
        <div className="dist-grid">
          {bands.map((b, i) => (
            <div key={b.band} className="dist-col">
              <div className="dist-share">{b.share}%</div>
              <div className="dist-count">{b.count.toLocaleString()}</div>
              <div
                className="dist-bar chart-hover"
                data-tooltip={`${b.band}: ${b.count.toLocaleString()} interactions (${b.share}%)`}
                style={{
                  height: `${Math.round((b.count / maxCount) * 118)}px`,
                  background: DIST_COLORS[i] ?? 'var(--accent)',
                  animationDelay: `${i * 80}ms`,
                }}
              />
              <div className="dist-line" style={{ background: DIST_COLORS[i] ?? 'var(--accent)' }} />
              <div className="dist-range">{b.band}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
