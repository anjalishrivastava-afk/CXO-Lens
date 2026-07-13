import { useState } from 'react';
import Icon from './Icon';
import FeedbackButtons from './FeedbackButtons';
import { seedHistory, generateMockReport } from '../customReportsData';

const VIEW = 'custom';
const PERIODS = ['DAILY', 'WEEKLY', 'MONTHLY'];

function StatusBadge({ status }) {
  if (status === 'GENERATING') {
    return <span className="history-status generating">Generating…</span>;
  }
  if (status === 'FAILED') {
    return <span className="history-status failed">Failed</span>;
  }
  return <span className="history-status ready">Ready</span>;
}

function ReportDetail({ entry }) {
  const { report } = entry;
  return (
    <div className="section-card" style={{ marginTop: 16 }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 14 }}>
        <div>
          <div className="section-card-title" style={{ marginBottom: 4 }}>“{entry.prompt}”</div>
          <div className="section-card-sub">
            {entry.period} · {entry.createdAt}
          </div>
        </div>
        <FeedbackButtons view={VIEW} section="exec_summary" insightId={entry.id} />
      </div>

      <div className="improve-detail-text" style={{ marginBottom: 14 }}>{report.exec}</div>

      <div className="top-cards-row" style={{ marginBottom: 16 }}>
        {report.highlights.map((h, i) => (
          <div key={h.title} className="info-card focus" style={{ flex: '1 1 240px' }}>
            <div className="info-card-heading-row" style={{ justifyContent: 'space-between' }}>
              <span className="info-card-kpi">{h.title}</span>
              <FeedbackButtons view={VIEW} section="highlight_card" insightId={`${entry.id}_h${i}`} />
            </div>
            <div className="info-card-text">{h.detail}</div>
          </div>
        ))}
      </div>

      <div className="kpi-grid" style={{ marginBottom: 16 }}>
        <div className="kpi-card">
          <div className="kpi-label">Total Calls</div>
          <div className="kpi-value">{report.stats.totalCalls.toLocaleString()}</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Total Agents</div>
          <div className="kpi-value">{report.stats.totalAgents.toLocaleString()}</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Avg Score</div>
          <div className="kpi-value">{report.stats.avgScore}%</div>
          <div className="kpi-delta-row">
            <Icon name={report.stats.scoreDelta >= 0 ? 'arrow_upward' : 'arrow_downward'} className={report.stats.scoreDelta >= 0 ? 'up' : 'down'} />
            <span className={`kpi-delta ${report.stats.scoreDelta >= 0 ? 'up' : 'down'}`}>
              {report.stats.scoreDelta >= 0 ? '+' : ''}
              {report.stats.scoreDelta}%
            </span>
          </div>
        </div>
      </div>

      <div className="rank-tables-grid" style={{ marginBottom: 16 }}>
        <div className="rank-table-card">
          <div className="rank-table-title">Top Agents</div>
          {report.topAgents.map((a) => (
            <div key={a.agent} className="rank-row" style={{ cursor: 'default' }}>
              <span className="rank-agent">{a.agent}</span>
              <span className="rank-score good">{a.score}%</span>
              <span className="rank-calls">{a.calls}</span>
              <span />
            </div>
          ))}
        </div>
        <div className="rank-table-card">
          <div className="rank-table-title">Bottom Agents</div>
          {report.bottomAgents.map((a) => (
            <div key={a.agent} className="rank-row" style={{ cursor: 'default' }}>
              <span className="rank-agent">{a.agent}</span>
              <span className="rank-score bad">{a.score}%</span>
              <span className="rank-calls">{a.calls}</span>
              <span />
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8, marginBottom: 16 }}>
        <div className="improve-detail-text">{report.strategic}</div>
        <FeedbackButtons view={VIEW} section="strategic" insightId={entry.id} />
      </div>

      <div className="coaching-list">
        {report.coaching.map((c, i) => (
          <div key={c.title} className="coaching-row">
            <div className="coaching-num">{i + 1}</div>
            <div style={{ flex: 1 }}>
              <div className="coaching-title">{c.title}</div>
              <div className="coaching-text">{c.text}</div>
            </div>
            <FeedbackButtons view={VIEW} section="coaching_list" insightId={`${entry.id}_c${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CustomReportsView() {
  const [prompt, setPrompt] = useState('');
  const [period, setPeriod] = useState('MONTHLY');
  const [history, setHistory] = useState(seedHistory);
  const [selectedId, setSelectedId] = useState(seedHistory[0]?.id ?? null);

  const selected = history.find((h) => h.id === selectedId) || null;
  const canGenerate = prompt.trim().length >= 10;

  const handleGenerate = () => {
    if (!canGenerate) return;
    const pendingId = `pending_${Date.now()}`;
    const pending = { id: pendingId, prompt: prompt.trim(), period, status: 'GENERATING', createdAt: 'just now' };
    setHistory((h) => [pending, ...h]);
    setSelectedId(null);
    setPrompt('');
    setTimeout(() => {
      setHistory((h) => {
        const finished = generateMockReport(pending.prompt, pending.period);
        return h.map((entry) => (entry.id === pendingId ? finished : entry));
      });
      setSelectedId((id) => id ?? null);
    }, 1200);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div className="cxo-meta-bar">
        <span className="tab-badge admin">ADMIN ONLY</span>
        <span className="cxo-meta-chip muted">
          <Icon name="bolt" /> On-demand · generated per request
        </span>
      </div>

      <div className="section-card">
        <div className="section-card-title" style={{ marginBottom: 8 }}>Ask a question</div>
        <textarea
          className="custom-prompt-textarea"
          placeholder='e.g. "Compare pitch quality across teams and highlight training gaps"'
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={3}
        />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, gap: 12, flexWrap: 'wrap' }}>
          <div className="periods">
            {PERIODS.map((p) => (
              <button key={p} className={`period-btn${period === p ? ' active' : ''}`} onClick={() => setPeriod(p)}>
                {p.charAt(0) + p.slice(1).toLowerCase()}
              </button>
            ))}
          </div>
          <button className="generate-btn" disabled={!canGenerate} onClick={handleGenerate}>
            <Icon name="auto_awesome" />
            Generate
          </button>
        </div>
        {prompt.length > 0 && prompt.trim().length < 10 && (
          <div className="custom-prompt-hint">Minimum 10 characters.</div>
        )}
      </div>

      <div className="section-card">
        <div className="section-card-title" style={{ marginBottom: 2 }}>History</div>
        <div className="section-card-sub" style={{ marginBottom: 10 }}>Click a past question to view its report.</div>
        <div className="history-list">
          {history.map((entry) => (
            <div
              key={entry.id}
              className={`history-row${selectedId === entry.id ? ' selected' : ''}`}
              onClick={() => entry.status === 'READY' && setSelectedId(entry.id)}
              style={{ cursor: entry.status === 'READY' ? 'pointer' : 'default' }}
            >
              <div className="history-prompt">{entry.prompt}</div>
              <div className="history-meta">
                <span>{entry.period}</span>
                <span>{entry.createdAt}</span>
                <StatusBadge status={entry.status} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && <ReportDetail entry={selected} />}
    </div>
  );
}
