import Icon from './Icon';

const TAB_DEFS = [
  { key: 'org', label: 'Org Insights', role: 'ADMIN', icon: 'apartment' },
  { key: 'team', label: 'Team Insights', role: 'TEAM', icon: 'groups' },
  { key: 'agent', label: 'Agent Insights', role: 'AGENT', icon: 'person' },
];

export default function Tabs({ view, onChange }) {
  return (
    <div className="tabs">
      {TAB_DEFS.map((t) => {
        const active = view === t.key;
        return (
          <button
            key={t.key}
            className={`tab-btn${active ? ' active' : ''}`}
            onClick={() => onChange(t.key)}
          >
            <Icon name={t.icon} />
            <span>{t.label}</span>
            <span className={`tab-badge ${active ? 'active' : t.role.toLowerCase()}`}>{t.role}</span>
          </button>
        );
      })}
    </div>
  );
}
