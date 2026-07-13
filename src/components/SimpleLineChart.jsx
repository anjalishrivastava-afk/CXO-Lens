// Generic single-series line chart where each point carries its own color
// (e.g. day-of-week risk color, or sentiment color) rather than one color per
// series — fits per-point-colored data better than a multi-series chart.
export default function SimpleLineChart({ points, height = 140 }) {
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

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="weekly-chart-svg" style={{ height }}>
      <polyline
        points={points.map((p, i) => `${x(i)},${y(p.value)}`).join(' ')}
        fill="none"
        stroke="var(--accent-light-border)"
        strokeWidth="2"
      />
      {points.map((p, i) => (
        <circle key={p.label} cx={x(i)} cy={y(p.value)} r="5" fill={p.color || 'var(--accent)'}>
          <title>
            {p.label}: {p.value}
          </title>
        </circle>
      ))}
      {points.map((p, i) => (
        <text key={p.label} x={x(i)} y={height - 6} textAnchor="middle" className="weekly-chart-label">
          {p.label}
        </text>
      ))}
    </svg>
  );
}
