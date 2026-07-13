import Icon from './Icon';

const DEFAULT_OPTIONS = [
  { value: 'line', icon: 'show_chart', label: 'Line chart' },
  { value: 'bar', icon: 'bar_chart', label: 'Bar chart' },
];

export default function ChartTypeToggle({ value, onChange, options = DEFAULT_OPTIONS }) {
  return (
    <div className="chart-type-toggle">
      {options.map((o) => (
        <span key={o.value} className="tooltip-anchor" data-tooltip={o.label}>
          <button
            className={`chart-toggle-btn${value === o.value ? ' active' : ''}`}
            onClick={() => onChange(o.value)}
          >
            <Icon name={o.icon} />
          </button>
        </span>
      ))}
    </div>
  );
}
