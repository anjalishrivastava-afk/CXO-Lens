import Icon from './Icon';
import { QP_PROFILES } from '../qpInsightsData';

const PERIOD_DEFS = [
  { key: 'yesterday', label: 'Yesterday' },
  { key: 'week', label: 'Last Week' },
  { key: 'month', label: 'Last Month' },
];

export default function QpFilterBar({
  qpId,
  onQpChange,
  period,
  onPeriodChange,
  showProfileSelector = true,
}) {
  return (
    <div className="filter-bar qp-filter-bar">
      <div className="periods">
        {PERIOD_DEFS.map((p) => (
          <button
            key={p.key}
            className={`period-btn${period === p.key ? ' active' : ''}`}
            onClick={() => onPeriodChange(p.key)}
          >
            {p.label}
          </button>
        ))}
      </div>
      <div className="filter-right">
        {showProfileSelector && (
          <div className="selector-wrap qp-profile-selector">
            <span className="qp-selector-label">Profile</span>
            <select className="selector" value={qpId} onChange={(e) => onQpChange(e.target.value)}>
              {QP_PROFILES.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.label}
                </option>
              ))}
            </select>
            <Icon name="arrow_drop_down" className="selector-arrow" />
          </div>
        )}
        <Icon name="autorenew" className="refresh-icon" title="Refresh data" />
      </div>
    </div>
  );
}
