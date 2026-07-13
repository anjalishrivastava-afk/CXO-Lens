import Icon from './Icon';

export default function WeekPager({ label, index, total, onChange, prevTooltip = 'Previous week', nextTooltip = 'Next week' }) {
  return (
    <div className="week-pager" aria-label={`Selected: ${label}`}>
      <span className="tooltip-anchor" data-tooltip={prevTooltip}>
        <button className="week-pager-btn" disabled={index === 0} onClick={() => onChange(Math.max(0, index - 1))}>
          <Icon name="chevron_left" />
        </button>
      </span>
      <span className="tooltip-anchor" data-tooltip={nextTooltip}>
        <button
          className="week-pager-btn"
          disabled={index === total - 1}
          onClick={() => onChange(Math.min(total - 1, index + 1))}
        >
          <Icon name="chevron_right" />
        </button>
      </span>
    </div>
  );
}
