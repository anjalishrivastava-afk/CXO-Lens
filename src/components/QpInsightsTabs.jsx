import Icon from './Icon';

const TAB_DEFS = [
  { key: 'all-profiles', label: 'All Profiles', icon: 'layers' },
  { key: 'per-qp', label: 'Per QP', icon: 'description' },
];

export default function QpInsightsTabs({ tab, onChange }) {
  return (
    <div className="tabs">
      {TAB_DEFS.map((t) => {
        const active = tab === t.key;
        return (
          <button key={t.key} className={`tab-btn${active ? ' active' : ''}`} onClick={() => onChange(t.key)}>
            <Icon name={t.icon} />
            <span>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}
