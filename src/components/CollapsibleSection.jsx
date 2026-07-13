import Icon from './Icon';

export default function CollapsibleSection({ title, subtitle, open, onToggle, children }) {
  return (
    <div className="section-card">
      <div className="section-card-header" onClick={onToggle} title={open ? 'Collapse' : 'Expand'}>
        <div>
          <div className="section-card-title">{title}</div>
          <div className="section-card-sub">{subtitle}</div>
        </div>
        <Icon name="expand_more" className={`section-card-chevron${open ? ' open' : ''}`} />
      </div>
      {open && <div className="section-card-body">{children}</div>}
    </div>
  );
}
