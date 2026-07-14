import { useEffect, useState } from 'react';
import Icon from './Icon';

const MAIN_MENU_ITEMS = [
  { id: 'home', icon: 'home', label: 'Home' },
  { id: 'quality-profiles', icon: 'description', label: 'Quality Profiles' },
  { id: 'assignment-rules', icon: 'link', label: 'Assignment Rules' },
  { id: 'analysis-list', icon: 'headset_mic', label: 'Analysis List' },
];

export const AI_INSIGHTS_SECTIONS = [
  { id: 'agent-summary', label: 'Agent Summary' },
  { id: 'cx-pulse', label: 'CX Pulse' },
  { id: 'custom-insights', label: 'Custom Insights' },
];

const SECONDARY_MENU_ITEMS = [
  { id: 'test-evaluation', icon: 'trending_up', label: 'Test Evaluation' },
  { id: 'user-management', icon: 'groups', label: 'User Management' },
  { id: 'integrations', icon: 'smart_toy', label: 'Integrations' },
];

const SETTINGS_ITEMS = [
  { id: 'metadata', label: 'Metadata' },
  { id: 'usage-limits', label: 'Usage and Limits' },
  { id: 'alerts', label: 'Alerts and Notification' },
];

const DASHBOARD_ITEMS = [
  { id: 'global', icon: 'public', label: 'Global', count: 1 },
  { id: 'company', icon: 'domain', label: 'Company', count: 3 },
];

function NavButton({ icon, label, active, onClick, nested, count }) {
  const className = `sidebar-nav-item${active ? ' active' : ''}${nested ? ' nested' : ''}${!icon ? ' no-icon' : ''}${onClick ? ' clickable' : ''}`;
  const content = (
    <>
      {icon && (
        <span className="sidebar-nav-item-icon">
          <Icon name={icon} />
        </span>
      )}
      <span className="sidebar-nav-item-label">{label}</span>
      {count != null && <span className="sidebar-nav-item-count">{count}</span>}
    </>
  );

  if (!onClick) {
    return <div className={className}>{content}</div>;
  }

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
    >
      {content}
    </button>
  );
}

export default function Sidebar({ section, onSectionChange }) {
  const isAiInsightsSection = AI_INSIGHTS_SECTIONS.some((item) => item.id === section);
  const [aiInsightsOpen, setAiInsightsOpen] = useState(isAiInsightsSection);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    if (isAiInsightsSection) {
      setAiInsightsOpen(true);
    }
  }, [isAiInsightsSection]);

  return (
    <aside className="sidebar sidebar--expanded">
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <div className="sidebar-logo">e</div>
        </div>
        <button type="button" className="sidebar-pin-btn" aria-label="Unpin sidebar">
          <Icon name="keep_off" />
        </button>
      </div>

      <nav className="sidebar-nav" aria-label="Main navigation">
        <div className="sidebar-nav-section">
          <div className="sidebar-nav-heading">Main Menu</div>

          {MAIN_MENU_ITEMS.map((item) => (
            <NavButton key={item.id} icon={item.icon} label={item.label} />
          ))}

          <div className="sidebar-accordion">
            <button
              type="button"
              className="sidebar-nav-item clickable sidebar-accordion-header"
              onClick={() => setAiInsightsOpen((open) => !open)}
              aria-expanded={aiInsightsOpen}
            >
              <span className="sidebar-nav-item-icon">
                <Icon name="lightbulb" />
              </span>
              <span className="sidebar-nav-item-label">AI Insights</span>
              <span className="sidebar-accordion-chevron">
                <Icon name="expand_more" className={aiInsightsOpen ? ' open' : ''} />
              </span>
            </button>

            {aiInsightsOpen && (
              <div className="sidebar-accordion-body">
                {AI_INSIGHTS_SECTIONS.map((item) => (
                  <NavButton
                    key={item.id}
                    label={item.label}
                    nested
                    active={section === item.id}
                    onClick={() => onSectionChange(item.id)}
                  />
                ))}
              </div>
            )}
          </div>

          {SECONDARY_MENU_ITEMS.map((item) => (
            <NavButton key={item.id} icon={item.icon} label={item.label} />
          ))}

          <div className="sidebar-accordion">
            <button
              type="button"
              className="sidebar-nav-item clickable sidebar-accordion-header"
              onClick={() => setSettingsOpen((open) => !open)}
              aria-expanded={settingsOpen}
            >
              <span className="sidebar-nav-item-icon">
                <Icon name="settings" />
              </span>
              <span className="sidebar-nav-item-label">Settings</span>
              <span className="sidebar-accordion-chevron">
                <Icon name="expand_more" className={settingsOpen ? ' open' : ''} />
              </span>
            </button>

            {settingsOpen && (
              <div className="sidebar-accordion-body sidebar-accordion-body--indented">
                {SETTINGS_ITEMS.map((item) => (
                  <NavButton key={item.id} label={item.label} nested />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="sidebar-nav-divider" />

        <div className="sidebar-nav-section">
          <div className="sidebar-nav-heading">Dashboards</div>
          {DASHBOARD_ITEMS.map((item) => (
            <NavButton key={item.id} icon={item.icon} label={item.label} count={item.count} />
          ))}
        </div>
      </nav>
    </aside>
  );
}
