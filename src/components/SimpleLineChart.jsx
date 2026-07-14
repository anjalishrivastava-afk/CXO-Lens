import { useState } from 'react';

// Generic single-series line chart where each point carries its own color
// (e.g. day-of-week risk color, or sentiment color) rather than one color per
// series — fits per-point-colored data better than a multi-series chart.
export default function SimpleLineChart({
  points,
  height = 140,
  selectedIdx = null,
  onSelect = null,
  formatValue = (v) => `${v}%`,
}) {
  const [hoverIdx, setHoverIdx] = useState(null);
  const width = 560;
  const padTop = 14;
  const padBottom = 24;
  const padX = 20;
  const values = points.map((p) => p.value);
  const max = Math.max(...values, 0);
  const min = Math.min(...values, 0);
  const range = max - min || 1;
  const stepX = points.length > 1 ? (width - padX * 2) / (points.length - 1) : 0;
  const y = (v) => padTop + (1 - (v - min) / range) * (height - padTop - padBottom);
  const x = (i) => padX + i * stepX;

  const emphasisIdx = hoverIdx ?? selectedIdx;
  const hoverPoint = hoverIdx != null ? points[hoverIdx] : null;
  const TT_W = 148;
  const ttX = hoverIdx != null ? Math.max(0, Math.min(x(hoverIdx) - TT_W / 2, width - TT_W)) : 0;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="weekly-chart-svg" style={{ height }}>
      {emphasisIdx != null && (
        <line
          x1={x(emphasisIdx)}
          x2={x(emphasisIdx)}
          y1={padTop}
          y2={height - padBottom}
          className="weekly-chart-guide"
        />
      )}
      <polyline
        points={points.map((p, i) => `${x(i)},${y(p.value)}`).join(' ')}
        fill="none"
        stroke="var(--accent-light-border)"
        strokeWidth="2"
      />
      {points.map((p, i) => (
        <g key={p.label}>
          <circle
            cx={x(i)}
            cy={y(p.value)}
            r={emphasisIdx === i ? 6 : 5}
            fill={p.color || 'var(--accent)'}
            stroke={emphasisIdx === i ? '#fff' : 'none'}
            strokeWidth={emphasisIdx === i ? 1.5 : 0}
            className={emphasisIdx === i ? 'weekly-chart-point-active' : 'weekly-chart-point'}
            style={{ pointerEvents: 'none' }}
          />
          <circle
            cx={x(i)}
            cy={y(p.value)}
            r={10}
            fill="transparent"
            className="weekly-chart-hit"
            onMouseEnter={() => setHoverIdx(i)}
            onMouseLeave={() => setHoverIdx(null)}
            onClick={() => onSelect?.(i)}
          />
        </g>
      ))}
      {points.map((p, i) => (
        <text
          key={`label-${p.label}`}
          x={x(i)}
          y={height - 6}
          textAnchor="middle"
          className={`weekly-chart-label${emphasisIdx === i ? ' selected' : ''}`}
          onClick={() => onSelect?.(i)}
        >
          {p.label}
        </text>
      ))}
      {hoverPoint && (
        <foreignObject
          x={ttX}
          y={Math.max(0, y(hoverPoint.value) - 34)}
          width={TT_W}
          height="26"
          style={{ overflow: 'visible', pointerEvents: 'none' }}
        >
          <div className="weekly-chart-tooltip">
            {hoverPoint.label}: {formatValue(hoverPoint.value)}
          </div>
        </foreignObject>
      )}
    </svg>
  );
}
