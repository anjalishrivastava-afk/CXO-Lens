import { useEffect, useRef, useState } from 'react';

// Daily bar chart where a contiguous range of bars (the currently selected
// period filter — yesterday / last 7 days / last 30 days) is emphasized and
// the rest are dimmed, rather than a single point being "selected".
//
// The viewBox width is kept in sync with the actual rendered pixel width via
// ResizeObserver, so the SVG's horizontal and vertical scale stay 1:1 — this
// card can be an arbitrary fraction of a wide row without stretching bars,
// text, or the tooltip (a mismatched viewBox vs. rendered width otherwise
// scales x and y unevenly, distorting anything not axis-aligned).
export default function SimpleBarChart({
  points,
  height = 160,
  highlightRange = null,
  formatValue = (v) => `${v}%`,
}) {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(640);
  const [hoverIdx, setHoverIdx] = useState(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;
    const observer = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect?.width;
      if (w) setWidth(w);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const padTop = 14;
  const padBottom = 34;
  const padX = 6;
  const gap = 3;
  const n = points.length;
  const barWidth = n > 0 ? (width - padX * 2 - gap * (n - 1)) / n : 0;
  const values = points.map((p) => p.value);
  const max = Math.max(...values, 10);
  const x = (i) => padX + i * (barWidth + gap);
  const barTop = (v) => padTop + (1 - v / max) * (height - padTop - padBottom);

  const isHighlighted = (i) => !highlightRange || (i >= highlightRange[0] && i <= highlightRange[1]);
  const hoverPoint = hoverIdx != null ? points[hoverIdx] : null;
  const TT_W = 130;
  const ttX = hoverIdx != null
    ? Math.max(0, Math.min(x(hoverIdx) + barWidth / 2 - TT_W / 2, width - TT_W))
    : 0;

  return (
    <div ref={containerRef} style={{ width: '100%' }}>
      <svg viewBox={`0 0 ${width} ${height}`} className="daily-bar-chart-svg" style={{ height }}>
        {points.map((p, i) => {
          const top = barTop(p.value);
          const minH = p.noData ? 6 : 4;
          const barH = Math.max(height - padBottom - top, minH);
          return (
            <rect
              key={`bar-${i}`}
              x={x(i)}
              y={height - padBottom - barH}
              width={barWidth}
              height={barH}
              rx={1.5}
              fill={p.noData ? 'var(--text-muted)' : (p.color || 'var(--accent)')}
              opacity={p.noData ? 0.4 : (isHighlighted(i) ? 1 : 0.25)}
              className="daily-bar-chart-bar"
              onMouseEnter={() => setHoverIdx(i)}
              onMouseLeave={() => setHoverIdx(null)}
            />
          );
        })}
        {points.map((p, i) => (
          <text
            key={`day-${i}`}
            x={x(i) + barWidth / 2}
            y={height - padBottom + 22}
            textAnchor="middle"
            className="daily-bar-chart-label"
          >
            {p.label}
          </text>
        ))}
        {points.map((p, i) => (
          p.monthLabel ? (
            <text
              key={`month-${i}`}
              x={x(i)}
              y={height - padBottom + 10}
              textAnchor="start"
              className="daily-bar-chart-month-label"
            >
              {p.monthLabel}
            </text>
          ) : null
        ))}
        {hoverPoint && (
          <foreignObject
            x={ttX}
            y={Math.max(0, barTop(hoverPoint.value) - 34)}
            width={TT_W}
            height="26"
            style={{ overflow: 'visible', pointerEvents: 'none' }}
          >
            <div className="weekly-chart-tooltip">
              {hoverPoint.fullLabel ?? hoverPoint.label}: {hoverPoint.noData ? 'No data' : formatValue(hoverPoint.value)}
            </div>
          </foreignObject>
        )}
      </svg>
    </div>
  );
}
