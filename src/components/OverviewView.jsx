import { useState } from 'react';
import Icon from './Icon';
import CollapsibleSection from './CollapsibleSection';
import ScoreDistribution from './ScoreDistribution';
import { dataByView } from '../data';

const CARD_COLOR = {
  accent: 'var(--accent)',
  text: 'var(--text)',
  green: 'var(--green-text)',
  red: 'var(--red-text)',
};

function RankTable({ title, rows, scoreClass, onOpenAgent }) {
  return (
    <div className="rank-table-card">
      <div className="rank-table-title">{title}</div>
      <div className="rank-head-row">
        <span>Agent</span>
        <span>Score</span>
        <span>Calls</span>
        <span>Rank</span>
      </div>
      {rows.map((r) => (
        <div key={r.agent} className="rank-row" onClick={() => onOpenAgent(r.agent)} title="Open in Agent Insights">
          <span className="rank-agent">{r.agent}</span>
          <span className={`rank-score ${scoreClass}`}>{r.score}</span>
          <span className="rank-calls">{r.calls}</span>
          <span className="rank-position">{r.rank}</span>
        </div>
      ))}
    </div>
  );
}

export default function OverviewView({ view, onOpenAgent }) {
  const D = dataByView[view];
  const [collapsed, setCollapsed] = useState({});
  const toggle = (key) => setCollapsed((s) => ({ ...s, [key]: !s[key] }));
  const isOpen = (key) => !collapsed[key];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div className="top-cards-row overview">
        {D.hasFocus && (
          <div className="info-card focus">
            <div className="info-card-label">Previous Day's Focus</div>
            <div className="info-card-heading-row">
              <span className="info-card-kpi">{D.focusKpi}</span>
              {D.focusDelta && <span className="info-card-delta">{D.focusDelta}</span>}
              <span className="info-card-from-to">{D.focusFromTo}</span>
            </div>
            <div className="info-card-text">{D.focusText}</div>
          </div>
        )}
        <div className="info-card priority">
          <div className="info-card-heading-row">
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Icon name="target" />
              <span className="info-card-title">{D.priorityTitle}</span>
            </span>
          </div>
          <div className="info-card-text">{D.priorityText}</div>
        </div>
        <div className="info-card strength">
          <div className="info-card-heading-row">
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Icon name="verified" />
              <span className="info-card-title">{D.strengthTitle}</span>
            </span>
          </div>
          <div className="info-card-text">{D.strengthText}</div>
        </div>
      </div>

      <div>
        <div className="section-heading">{D.overviewLabel}</div>
        <div className="kpi-grid">
          {D.cards.map((c) => {
            const up = c.deltaUp;
            return (
              <div key={c.label} className="kpi-card">
                <div className="kpi-label">{c.label}</div>
                <div className="kpi-value" style={{ color: CARD_COLOR[c.colorKey] }}>
                  {c.value}
                </div>
                {c.delta && (
                  <div className="kpi-delta-row">
                    <Icon name={up ? 'arrow_upward' : 'arrow_downward'} className={up ? 'up' : 'down'} />
                    <span className={`kpi-delta ${up ? 'up' : 'down'}`}>{c.delta}</span>
                    <span className="kpi-delta-caption">vs prev period</span>
                  </div>
                )}
                {c.sub && <div className="kpi-sub">{c.sub}</div>}
              </div>
            );
          })}
        </div>
      </div>

      {D.roster && D.roster.length > 0 && (
        <CollapsibleSection
          title="Team Agents"
          subtitle="Per-agent performance for this period. Click an agent in Agent Insights for full detail."
          open={isOpen('roster')}
          onToggle={() => toggle('roster')}
        >
          <div className="roster-scroll">
            <div className="roster-table">
              <div className="roster-grid-row roster-head">
                <span>Agent</span>
                <span>Score</span>
                <span>Δ Period</span>
                <span>Calls</span>
                <span>Unhappy</span>
                <span>Weakest KPI</span>
              </div>
              {D.roster.map((r) => (
                <div
                  key={r.agent}
                  className="roster-grid-row roster-row"
                  onClick={() => onOpenAgent(r.agent)}
                  title="Open in Agent Insights"
                >
                  <div className="roster-agent-cell">
                    <div className="roster-avatar">{r.agent.slice(0, 2)}</div>
                    <span className="roster-agent-name">{r.agent}</span>
                  </div>
                  <span className="roster-score" style={{ color: r.scoreGood ? 'var(--green-text)' : 'var(--yellow-text)' }}>
                    {r.score}
                  </span>
                  <span className="roster-delta-cell">
                    <Icon name={r.deltaUp ? 'arrow_upward' : 'arrow_downward'} className={r.deltaUp ? 'up' : 'down'} />
                    <span className={`roster-delta-text ${r.deltaUp ? 'up' : 'down'}`}>{r.delta}</span>
                  </span>
                  <span className="roster-calls">{r.calls}</span>
                  <span className="roster-unhappy">{r.unhappy}</span>
                  <span>
                    <span className="weak-kpi-chip">{r.weakKpi}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CollapsibleSection>
      )}

      <CollapsibleSection
        title="Score Distribution"
        subtitle="Agents by overall quality score band"
        open={isOpen('dist')}
        onToggle={() => toggle('dist')}
      >
        <ScoreDistribution dist={D.dist} avgVal={D.avgVal} />
      </CollapsibleSection>

      {D.hasRankTables && (
        <div className="rank-tables-grid">
          <RankTable title="Top 5 Agents" rows={D.top5} scoreClass="good" onOpenAgent={onOpenAgent} />
          <RankTable title="Bottom 5 Agents" rows={D.bottom5} scoreClass="bad" onOpenAgent={onOpenAgent} />
        </div>
      )}

      <CollapsibleSection
        title={D.weakLabel}
        subtitle="KPIs with the highest evaluation fail rates. Agent count = agents below 50% pass rate."
        open={isOpen('weak')}
        onToggle={() => toggle('weak')}
      >
        <div className="weak-list">
          {D.weak.map((k, i) => {
            const red = k.pct >= 80;
            const sev = k.pct >= 80 ? 'Critical' : k.pct >= 65 ? 'High' : 'Moderate';
            return (
              <div key={k.name} className="weak-row">
                <div className="weak-name-row">
                  <span className="weak-name">{k.name}</span>
                  <span className={`weak-sev-badge ${sev.toLowerCase()}`}>{sev}</span>
                </div>
                <span className="weak-fail" style={{ color: red ? 'var(--red-text)' : 'var(--yellow-text)' }}>
                  {k.fail || `${k.pct}%`} eval fail
                </span>
                <span className="weak-below-badge">{k.below}</span>
                <div className="weak-bar-track">
                  <div
                    className="weak-bar-fill"
                    style={{ width: `${k.pct}%`, background: red ? 'var(--red)' : 'var(--yellow)', animationDelay: `${i * 60}ms` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="weak-footnote">
          Eval fail = share of scored calls where this KPI did not pass the AI quality check (score = 0). "Below 50%"
          counts agents whose pass rate on that KPI is under 50%.
        </div>
      </CollapsibleSection>

      <CollapsibleSection
        title="AI Coaching Recommendations"
        subtitle={`Based on ${D.coachingScope} performance data, here are the top actions to improve quality scores.`}
        open={isOpen('coach')}
        onToggle={() => toggle('coach')}
      >
        <div className="coaching-list">
          {D.coaching.map((c) => (
            <div key={c.n} className="coaching-row">
              <div className="coaching-num">{c.n}</div>
              <div style={{ flex: 1 }}>
                <div className="coaching-title">{c.title}</div>
                <div className="coaching-text">{c.text}</div>
              </div>
            </div>
          ))}
        </div>
      </CollapsibleSection>

      <CollapsibleSection
        title="Agents Needing Attention"
        subtitle="Score = overall quality %. Delta = vs previous period. Unhappy = negative sentiment %. Weak KPI badge = agent pass rate on worst KPI."
        open={isOpen('attn')}
        onToggle={() => toggle('attn')}
      >
        <div className="attention-list">
          {D.attention.map((a) => (
            <div key={a.name} className="attention-row" onClick={() => onOpenAgent(a.name)} title="Open in Agent Insights">
              <div className="attention-top">
                <div className="attention-left">
                  <div className="attention-avatar">{a.avatar}</div>
                  <span className="attention-name">{a.name}</span>
                  <span className="attention-lowrank">Low rank</span>
                </div>
                <div className="attention-right">
                  <div className="attention-stat">
                    <div className="attention-stat-label">Score</div>
                    <div className="attention-stat-value" style={{ color: 'var(--yellow-text)' }}>
                      {a.score}
                    </div>
                  </div>
                  {a.delta && (
                    <div className="attention-stat">
                      <div className="attention-stat-label">Δ Period</div>
                      <div className="attention-stat-value" style={{ color: 'var(--red-text)' }}>
                        {a.delta}
                      </div>
                    </div>
                  )}
                  <div className="attention-stat">
                    <div className="attention-stat-label">Calls</div>
                    <div className="attention-stat-value">{a.calls}</div>
                  </div>
                  <div className="attention-stat">
                    <div className="attention-stat-label">Unhappy</div>
                    <div
                      className="attention-stat-value"
                      style={{ color: parseInt(a.unhappy, 10) >= 20 ? 'var(--red-text)' : 'var(--text-muted)' }}
                    >
                      {a.unhappy}
                    </div>
                  </div>
                </div>
              </div>
              <div className="attention-bottom">
                <span className="attention-tag">{a.tag}</span>
                <span className="attention-note">{a.note}</span>
              </div>
            </div>
          ))}
        </div>
      </CollapsibleSection>
    </div>
  );
}
