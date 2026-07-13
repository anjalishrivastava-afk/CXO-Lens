import Icon from './Icon';

const NAV_ITEMS = [
  { id: 'home', icon: 'home', label: 'Home' },
  { id: 'hub', icon: 'hub', label: 'Hub' },
  { id: 'docs', icon: 'description', label: 'Documents' },
  { id: 'link', icon: 'link', label: 'Links' },
  { id: 'headset', icon: 'headset_mic', label: 'Calls' },
  { id: 'ai-insights', icon: 'lightbulb', label: 'AI Insights' },
  { id: 'cxo-lens', icon: 'visibility', label: 'CXO Lens' },
  { id: 'custom-reports', icon: 'auto_awesome', label: 'Custom Reports', featured: true },
  { id: 'trending', icon: 'trending_up', label: 'Dashboards' },
  { id: 'groups', icon: 'groups', label: 'Teams' },
  { id: 'agent', icon: 'support_agent', label: 'Agents' },
  { id: 'language', icon: 'language', label: 'Language' },
];

export default function Sidebar({ section, onSectionChange }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo-wrap">
        <div className="sidebar-logo">e</div>
      </div>
      {NAV_ITEMS.map((item) => {
        const active = section === item.id;
        const clickable = item.id === 'ai-insights' || item.id === 'cxo-lens' || item.id === 'custom-reports';
        return (
          <div
            key={item.id}
            className={`sidebar-icon${active ? ' active' : ''}${clickable ? ' clickable' : ''}${item.featured ? ' featured' : ''}`}
            role={clickable ? 'button' : undefined}
            tabIndex={clickable ? 0 : undefined}
            title={item.label}
            aria-label={item.label}
            aria-current={active ? 'page' : undefined}
            onClick={clickable ? () => onSectionChange(item.id) : undefined}
            onKeyDown={
              clickable
                ? (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSectionChange(item.id);
                    }
                  }
                : undefined
            }
          >
            <Icon name={item.icon} />
          </div>
        );
      })}
      <div className="sidebar-spacer" />
      <div className="sidebar-icon">
        <Icon name="settings" />
      </div>
      <div className="sidebar-icon">
        <Icon name="help" />
      </div>
    </aside>
  );
}
