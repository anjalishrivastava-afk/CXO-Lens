import { useMemo, useState } from 'react';
import Icon from './Icon';

/* ── severity helpers ── */
const SEVERITY_COLOR = {
  critical: 'var(--red)',
  attention: 'var(--yellow)',
  healthy: 'var(--green)',
  unused: 'var(--text-muted)',
};

const SEVERITY_LABEL = {
  critical: 'Critical',
  attention: 'Attention',
  healthy: 'Healthy',
  unused: 'Unused',
};

function severityDot(severity) {
  return (
    <span
      className="qp-sev-dot"
      style={{ background: SEVERITY_COLOR[severity] ?? 'var(--text-muted)' }}
      title={SEVERITY_LABEL[severity] ?? severity}
    />
  );
}

/* ── score color ── */
function scoreColor(score) {
  if (score == null) return 'var(--text-muted)';
  if (score >= 80) return 'var(--green)';
  if (score >= 65) return 'var(--yellow)';
  return 'var(--red)';
}

/* ── delta formatting ── */
function formatDelta(val) {
  if (val == null) return null;
  const sign = val > 0 ? '+' : '';
  return `${sign}${val}pp`;
}

/* ══════════════════════════════════════════════════════════════════
   QP Interaction Mix — visual distribution bars
   Full-width proportional bars showing how interactions spread across QPs
   ══════════════════════════════════════════════════════════════════ */

export function QpInteractionMix({ rows, totalUnique, onOpenProfile, insight }) {
  const sorted = useMemo(
    () => [...rows].sort((a, b) => b.matched - a.matched || b.sharePct - a.sharePct),
    [rows],
  );

  if (!sorted.length) return null;

  const maxMatched = sorted[0]?.matched ?? 1;

  return (
    <div className="qp-mix-dist">
      {/* Insight one-liner */}
      {insight && (
        <div className="qp-mix-dist-insight">
          <Icon name="auto_awesome" />
          <span>{insight}</span>
        </div>
      )}

      {/* Stacked overview bar — shows proportional distribution at a glance */}
      <div className="qp-mix-dist-stacked">
        {sorted.map((row) => (
          <div
            key={row.id}
            className="qp-mix-dist-stacked-seg"
            style={{
              flex: `${row.matched} 0 0%`,
              background: SEVERITY_COLOR[row.severity] ?? 'var(--accent)',
            }}
            title={`${row.name}: ${row.matched.toLocaleString()} (${row.sharePct}%)`}
          />
        ))}
      </div>

      {/* Individual profile bars */}
      <div className="qp-mix-dist-list qp-table-scroll-body">
        {sorted.map((row) => {
          const widthPct = Math.max(3, Math.round((row.matched / maxMatched) * 100));
          const clickable = row.severity !== 'unused' && onOpenProfile;

          return (
            <div
              key={row.id}
              className={`qp-mix-dist-row${clickable ? ' qp-mix-dist-row--click' : ''}`}
              onClick={() => clickable && onOpenProfile(row.id, 'interaction_mix')}
              role={clickable ? 'button' : undefined}
              tabIndex={clickable ? 0 : undefined}
              onKeyDown={(e) => clickable && e.key === 'Enter' && onOpenProfile(row.id, 'interaction_mix')}
            >
              {/* Left: name + severity dot */}
              <div className="qp-mix-dist-label">
                {severityDot(row.severity)}
                <span className="qp-mix-dist-name" title={row.name}>{row.name}</span>
              </div>

              {/* Center: proportional bar */}
              <div className="qp-mix-dist-bar-area">
                <div className="qp-mix-dist-bar-track">
                  <div
                    className="qp-mix-dist-bar"
                    style={{
                      width: `${widthPct}%`,
                      background: SEVERITY_COLOR[row.severity] ?? 'var(--accent)',
                    }}
                  />
                </div>
              </div>

              {/* Right: stats */}
              <div className="qp-mix-dist-stats">
                <span className="qp-mix-dist-count">{row.matched.toLocaleString()}</span>
                <span className="qp-mix-dist-pct">{row.sharePct}%</span>
                <span className="qp-mix-dist-score" style={{ color: scoreColor(row.avgScore) }}>
                  {row.avgScore != null ? `${row.avgScore}%` : '—'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="qp-mix-dist-footer">
        {sorted.length} profile{sorted.length !== 1 ? 's' : ''} · {totalUnique.toLocaleString()} unique interactions
      </div>
    </div>
  );
}


/* ══════════════════════════════════════════════════════════════════
   Score Distribution — horizontal grouped band chart
   Shows which QPs fall into which score band
   ══════════════════════════════════════════════════════════════════ */

const BAND_COLORS = {
  '<60%': 'var(--red)',
  '60–70%': '#F07975',
  '70–75%': 'var(--yellow)',
  '75–80%': '#7BC67E',
  '80–85%': 'var(--green)',
  '85–100%': '#1B7A3D',
};

const BAND_ORDER = ['<60%', '60–70%', '70–75%', '75–80%', '80–85%', '85–100%'];

function bandColor(band) {
  return BAND_COLORS[band] ?? 'var(--accent)';
}

export function QpScoreDistribution({ bands, insight, avgScore }) {
  const [expandedBand, setExpandedBand] = useState(null);

  const orderedBands = useMemo(
    () => [...bands].sort((a, b) => BAND_ORDER.indexOf(a.band) - BAND_ORDER.indexOf(b.band)),
    [bands],
  );

  const maxCount = Math.max(...orderedBands.map((b) => b.count), 1);
  const totalProfiles = orderedBands.reduce((s, b) => s + b.count, 0) || 1;

  return (
    <div className="qp-dist-v2">
      {insight && (
        <div className="qp-dist-v2-insight">
          <Icon name="auto_awesome" />
          <span>{insight}</span>
        </div>
      )}

      {/* Stacked bar overview */}
      <div className="qp-dist-v2-stacked">
        {orderedBands.filter(b => b.count > 0).map((band) => (
          <div
            key={band.band}
            className={`qp-dist-v2-stacked-seg${expandedBand === band.band ? ' is-active' : ''}`}
            style={{
              flex: `${band.count} 0 0%`,
              background: bandColor(band.band),
            }}
            title={`${band.band}: ${band.count} profile${band.count !== 1 ? 's' : ''} (${band.share}%)`}
            onClick={() => setExpandedBand(expandedBand === band.band ? null : band.band)}
          >
            {band.count >= 1 && (
              <span className="qp-dist-v2-stacked-label">{band.count}</span>
            )}
          </div>
        ))}
      </div>

      {/* Band rows */}
      <div className="qp-dist-v2-bands">
        {orderedBands.map((band) => {
          const isExpanded = expandedBand === band.band;
          const barPct = Math.max(4, Math.round((band.count / maxCount) * 100));
          const containsAvg = avgScore != null && (
            band.band === '<60%' ? avgScore < 60 :
            (() => {
              const parts = band.band.replace(/%/g, '').split('–');
              if (parts.length !== 2) return false;
              return avgScore >= Number(parts[0]) && (band.band.endsWith('100%') ? avgScore <= Number(parts[1]) : avgScore < Number(parts[1]));
            })()
          );

          return (
            <div key={band.band} className="qp-dist-v2-band-group">
              <div
                className={`qp-dist-v2-band-row${isExpanded ? ' is-expanded' : ''}${containsAvg ? ' is-avg' : ''}${band.count === 0 ? ' is-empty' : ''}`}
                onClick={() => band.count > 0 && setExpandedBand(isExpanded ? null : band.band)}
              >
                <span className="qp-dist-v2-band-label">
                  <span className="qp-dist-v2-band-dot" style={{ background: bandColor(band.band) }} />
                  {band.band}
                  {containsAvg && <span className="qp-dist-v2-avg-tag">avg</span>}
                </span>
                <div className="qp-dist-v2-band-bar-wrap">
                  <div
                    className="qp-dist-v2-band-bar"
                    style={{ width: `${barPct}%`, background: bandColor(band.band) }}
                  />
                </div>
                <span className="qp-dist-v2-band-count">
                  {band.count} <span className="qp-dist-v2-band-share">({band.share}%)</span>
                </span>
                {band.count > 0 && (
                  <span className={`qp-dist-v2-band-expand${isExpanded ? ' open' : ''}`}>
                    <Icon name="expand_more" />
                  </span>
                )}
              </div>

              {/* Expanded: show profile names */}
              {isExpanded && band.profiles?.length > 0 && (
                <div className="qp-dist-v2-band-profiles">
                  {band.profiles.map((pr) => (
                    <div key={pr.id} className="qp-dist-v2-profile-chip">
                      <span className="qp-dist-v2-profile-name">{pr.name}</span>
                      <span className="qp-dist-v2-profile-score" style={{ color: scoreColor(pr.avgScore) }}>
                        {pr.avgScore}%
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Portfolio avg callout */}
      {avgScore != null && (
        <div className="qp-dist-v2-avg-line">
          Portfolio avg: <strong>{avgScore}%</strong>
        </div>
      )}
    </div>
  );
}
