import Icon from './Icon';

const TAB_DEFS = [
  { key: 'all-profiles', label: 'Portfolio', icon: 'layers', hint: 'All profiles combined' },
  { key: 'per-qp', label: 'By Profile', icon: 'description', hint: 'One profile at a time' },
];

export default function QpInsightsTabs({ tab, onChange }) {
  return (
    <div className="tabs qp-insights-tabs">
      {TAB_DEFS.map((t) => {
        const active = tab === t.key;
        return (
          <button
            key={t.key}
            className={`tab-btn${active ? ' active' : ''}`}
            onClick={() => onChange(t.key)}
            title={t.hint}
          >
            <Icon name={t.icon} />
            <span>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}
