import { useState } from 'react';
import Icon from './Icon';

const RANGES = ['0–20%', '20–40%', '40–60%', '60–80%', '80–100%'];
const COLORS = ['var(--red)', '#F07975', 'var(--yellow)', 'var(--accent)', '#8FA4FF'];

export default function ScoreDistribution({ dist, avgVal }) {
  const [avgHover, setAvgHover] = useState(false);
  const total = dist.reduce((a, b) => a + b, 0) || 1;
  const max = Math.max(...dist) || 1;
  const maxIdx = dist.indexOf(Math.max(...dist));
  const topShare = Math.round((dist[maxIdx] / total) * 1000) / 10;

  const avgLabelSide =
    avgVal > 55
      ? { left: `calc(${avgVal}% - 10px)`, transform: 'translateX(-100%)' }
      : { left: `calc(${avgVal}% + 10px)` };

  return (
    <div className="dist-section">
      <div className="dist-insight-chip">
        <Icon name="auto_awesome" />
        {topShare}% of agents are concentrated in the {RANGES[maxIdx]} band
      </div>
      <div className="dist-chart-wrap">
        <div className="dist-avg-line" style={{ left: `${avgVal}%` }} />
        <div
          className="dist-avg-hit"
          style={{ left: `calc(${avgVal}% - 8px)` }}
          onMouseEnter={() => setAvgHover(true)}
          onMouseLeave={() => setAvgHover(false)}
        />
        <div className="dist-avg-label" style={{ ...avgLabelSide, opacity: avgHover ? 1 : 0 }}>
          Avg {avgVal}%
        </div>
        <div className="dist-grid">
          {dist.map((count, i) => (
            <div key={RANGES[i]} className="dist-col">
              <div className="dist-share">{count > 0 ? `${Math.round((count / total) * 1000) / 10}%` : ''}</div>
              <div className="dist-count" style={{ color: count > 0 ? 'var(--text)' : 'var(--text-muted)' }}>
                {count}
              </div>
              <div
                className="dist-bar chart-hover"
                data-tooltip={`${count} agent${count === 1 ? '' : 's'} in ${RANGES[i]} band`}
                style={{
                  height: `${Math.round((count / max) * 118)}px`,
                  background: COLORS[i],
                  animationDelay: `${i * 80}ms`,
                }}
              />
              <div className="dist-line" style={{ background: COLORS[i] }} />
              <div className="dist-range">{RANGES[i]}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="dist-legend">
        {dist.map((count, i) => (
          <div key={RANGES[i]} className="dist-legend-item">
            <span className="dist-legend-dot" style={{ background: COLORS[i] }} />
            <span className="dist-legend-label">{RANGES[i]}</span>
            <span className="dist-legend-count">{count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
