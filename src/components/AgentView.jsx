import { useRef, useState } from 'react';
import Icon from './Icon';
import { agentData as D } from '../data';

export default function AgentView() {
  const [expanded, setExpanded] = useState(null);
  const [copied, setCopied] = useState(null);
  const copyTimer = useRef(null);

  const up = D.scoreDelta >= 0;
  const scoreDeltaStr = (up ? '+' : '') + D.scoreDelta + '%';

  const handleCopy = (e, i, text) => {
    e.stopPropagation();
    if (navigator.clipboard) navigator.clipboard.writeText(text);
    setCopied(i);
    clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopied(null), 1600);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div className="top-cards-row">
        <div className="info-card priority">
          <div className="info-card-heading-row">
            <Icon name="target" />
            <span className="info-card-title">Today's Priority</span>
          </div>
          <div className="info-card-text">{D.priorityText}</div>
        </div>
      </div>

      <div>
        <div className="section-heading">Key Performance Indicators</div>
        <div className="kpi-grid">
          <div className="kpi-card">
            <div className="kpi-label">Avg Score</div>
            <div className="kpi-value">{D.avgScoreStr}</div>
            <div className="kpi-delta-row">
              <Icon name={up ? 'arrow_upward' : 'arrow_downward'} className={up ? 'up' : 'down'} />
              <span className={`kpi-delta ${up ? 'up' : 'down'}`}>{scoreDeltaStr}</span>
              <span className="kpi-delta-caption">vs prev period</span>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Percentile</div>
            <div className="kpi-value" style={{ fontSize: 24, color: D.pctGood ? 'var(--green-text)' : 'var(--red-text)' }}>
              {D.pctLabel}
            </div>
            <div className="kpi-sub">{D.pctRank}</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Calls Analyzed</div>
            <div className="kpi-value">{D.calls}</div>
            <div className="kpi-note">{D.callsKpis}</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Customer Mood</div>
            <div className="mood-bar">
              <div
                className="mood-seg"
                style={{ width: `${D.moodHappy}%`, background: 'var(--green)' }}
              />
              <div
                className="mood-seg"
                style={{
                  width: `${100 - D.moodHappy - D.moodUnhappy}%`,
                  background: 'var(--yellow)',
                  animationDelay: '.1s',
                }}
              />
              <div
                className="mood-seg"
                style={{ width: `${D.moodUnhappy}%`, background: 'var(--red)', animationDelay: '.2s' }}
              />
            </div>
            <div className="mood-labels">
              <span className="mood-happy-label">{D.moodHappy}% happy</span>
              <span className="mood-unhappy-label">{D.moodUnhappy}% unhappy</span>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Professionalism</div>
            <div className="kpi-value">{D.prof}</div>
            <div className="kpi-sub">{D.profNote}</div>
          </div>
        </div>
      </div>

      <div>
        <div className="section-heading">Good Job</div>
        <div className="good-job-card">
          <div className="good-job-title">{D.goodJob.title}</div>
          <div className="good-job-value-row">
            <span className="good-job-pct">{D.goodJob.pct}</span>
            <span className="good-job-team">{D.goodJob.team}</span>
          </div>
          <div className="good-job-text">{D.goodJob.text}</div>
        </div>
      </div>

      <div>
        <div className="section-heading" style={{ marginBottom: 2 }}>
          Areas to Improve
        </div>
        <div className="list-caption">Click a row to see coaching tips.</div>
        <div className="improve-list">
          {D.improve.map((r, i) => {
            const below = r.pct < r.teamAvg;
            const diff = Math.abs(r.pct - r.teamAvg).toFixed(1);
            const isExpanded = expanded === i;
            return (
              <div key={r.name} className={`improve-row${isExpanded ? ' expanded' : ''}`}>
                <div
                  className="improve-header"
                  onClick={() => setExpanded(isExpanded ? null : i)}
                  title={isExpanded ? 'Collapse' : 'Expand'}
                >
                  <div className="improve-name-row">
                    <span className="improve-dot" style={{ background: below ? 'var(--red)' : 'var(--green)' }} />
                    <span className="improve-name">{r.name}</span>
                  </div>
                  <div className="improve-meta">
                    <span className="improve-pct">{r.pct}%</span>
                    <span className="improve-teamavg">team avg {r.teamAvg}%</span>
                    <div className="improve-bar-track">
                      <div
                        className="improve-bar-fill"
                        style={{
                          width: `${Math.min(100, r.pct)}%`,
                          background: below ? 'var(--red)' : 'var(--green)',
                          animationDelay: `${i * 70}ms`,
                        }}
                      />
                    </div>
                    <span className={`improve-badge ${below ? 'below' : 'above'}`}>
                      {diff}% {below ? 'below' : 'above'} team avg
                    </span>
                    <Icon name="expand_more" className={`improve-chevron${isExpanded ? ' open' : ''}`} />
                  </div>
                </div>
                {isExpanded && (
                  <div className="improve-detail">
                    <div className="improve-detail-grid">
                      <div className="improve-detail-box">
                        <div className="improve-detail-label">What this means</div>
                        <div className="improve-detail-text">{r.means}</div>
                      </div>
                      <div className="improve-detail-box">
                        <div className="improve-detail-label">Highlights from your calls</div>
                        <div className="improve-missed-title">{r.missed}</div>
                        <div className="improve-missed-text">{r.missedText}</div>
                        <div className="improve-quote">{r.quote}</div>
                      </div>
                    </div>
                    <div className="say-this-box">
                      <div className="say-this-header">
                        <div className="say-this-label">Say this on your next call</div>
                        <button
                          className={`copy-btn${copied === i ? ' copied' : ''}`}
                          onClick={(e) => handleCopy(e, i, r.sayThis)}
                        >
                          <Icon name={copied === i ? 'check' : 'content_copy'} />
                          <span>{copied === i ? 'Copied!' : 'Copy'}</span>
                        </button>
                      </div>
                      <div className="say-this-text">{r.sayThis}</div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
