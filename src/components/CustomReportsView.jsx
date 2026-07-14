import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Button, ChatInputBox, CircularProgress, Tooltip, Typography } from '@exotel-npm-dev/signal-design-system';
import Icon from './Icon';
import FeedbackButtons from './FeedbackButtons';
import WeekPager from './WeekPager';
import SimpleLineChart from './SimpleLineChart';
import {
  seedHistory,
  generateMockReport,
  groupHistoryByRecency,
  SUGGESTED_PROMPTS,
  THINKING_STEPS,
  THINKING_STEP_INTERVAL_MS,
  enhancePrompt,
} from '../customReportsData';

const GENERATION_DELAY_MS = THINKING_STEP_INTERVAL_MS * (THINKING_STEPS.length + 1) + 300;

function ThinkingDots() {
  return (
    <span className="custom-reports-thinking-dots">
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}

const VIEW = 'custom';
const DEFAULT_PERIOD = 'MONTHLY';
const HISTORY_GROUPS = [
  { key: 'today', label: 'Today' },
  { key: 'last7', label: 'Previous 7 Days' },
  { key: 'last30', label: 'Previous 30 Days' },
  { key: 'older', label: 'Older' },
];

function scoreColor(score) {
  return score >= 80 ? 'var(--green)' : score >= 60 ? 'var(--yellow)' : 'var(--red)';
}

function ChartCard({ title, subtitle, headerRight, children, className = '' }) {
  return (
    <div className={`section-card${className ? ` ${className}` : ''}`}>
      <div className="section-card-header chart-card-header">
        <div>
          <div className="section-card-title">{title}</div>
          <div className="section-card-sub">{subtitle}</div>
        </div>
        {headerRight}
      </div>
      <div className="section-card-body">{children}</div>
    </div>
  );
}

function ReportTrendChart({ trend, period }) {
  const [selectedIdx, setSelectedIdx] = useState(trend.length - 1);
  const point = trend[selectedIdx];

  return (
    <ChartCard
      className="custom-reports-trend-card"
      title="Score & Volume Trend"
      subtitle={`Avg quality score across recent ${period.toLowerCase()} periods.`}
      headerRight={
        <WeekPager
          label={point.label}
          index={selectedIdx}
          total={trend.length}
          onChange={setSelectedIdx}
          prevTooltip="Previous period"
          nextTooltip="Next period"
        />
      }
    >
      <SimpleLineChart points={trend.map((p) => ({ label: p.label, value: p.score, color: scoreColor(p.score) }))} />
      <div className="week-detail-panel">
        <span className="week-detail-label">{point.label}</span>
        <span className="week-detail-stat" style={{ color: scoreColor(point.score) }}>
          Avg score {point.score}%
        </span>
        <span className="week-detail-stat" style={{ color: 'var(--text-secondary)' }}>
          {point.calls.toLocaleString()} calls
        </span>
      </div>
    </ChartCard>
  );
}

function ReportDetail({ entry }) {
  const { report } = entry;
  return (
    <div className="section-card custom-reports-report-card">
      <div className="custom-reports-report-header">
        <div>
          <div className="section-card-title">“{entry.prompt}”</div>
          <div className="section-card-sub">
            {entry.period} · {entry.createdAt}
          </div>
        </div>
        <FeedbackButtons view={VIEW} section="dashboard" insightId={entry.id} />
      </div>

      <div className="improve-detail-text" style={{ marginBottom: 14 }}>{report.exec}</div>

      <div className="top-cards-row" style={{ marginBottom: 16 }}>
        {report.highlights.map((h) => (
          <div key={h.title} className="info-card focus" style={{ flex: '1 1 240px' }}>
            <div className="info-card-heading-row">
              <span className="info-card-kpi">{h.title}</span>
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

      {report.trend && <ReportTrendChart trend={report.trend} period={entry.period} />}

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

      <div className="improve-detail-text" style={{ marginBottom: 16 }}>{report.strategic}</div>

      <div className="coaching-list">
        {report.coaching.map((c, i) => (
          <div key={c.title} className="coaching-row">
            <div className="coaching-num">{i + 1}</div>
            <div style={{ flex: 1 }}>
              <div className="coaching-title">{c.title}</div>
              <div className="coaching-text">{c.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ThinkingCard({ prompt, entryId }) {
  const [stepIdx, setStepIdx] = useState(-1);
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    setStepIdx(-1);
    const timer = setInterval(() => {
      setStepIdx((i) => (i < THINKING_STEPS.length - 1 ? i + 1 : i));
    }, THINKING_STEP_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [entryId]);

  return (
    <div className="custom-reports-thinking-wrap">
      <div className="custom-reports-chat-bubble-row">
        <div className="custom-reports-chat-bubble">{prompt}</div>
      </div>
      <div className="custom-reports-thinking-card">
        <button
          type="button"
          className="custom-reports-thinking-header"
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
        >
          <span className="custom-reports-thinking-header-left">
            <ThinkingDots />
            <span>Thinking</span>
          </span>
          <Icon name="expand_more" className={`custom-reports-thinking-chevron${expanded ? ' expanded' : ''}`} />
        </button>
        {expanded && stepIdx >= 0 && (
          <div className="custom-reports-thinking-steps">
            {THINKING_STEPS.slice(0, stepIdx + 1).map((step, i) => {
              const active = i === stepIdx;
              return (
                <div key={step} className="custom-reports-thinking-step">
                  {active ? (
                    <CircularProgress size={15} thickness={5} sx={{ flex: 'none' }} />
                  ) : (
                    <Icon name="check" className="custom-reports-thinking-step-icon done" />
                  )}
                  <span className="custom-reports-thinking-step-text">{step}</span>
                  <Icon name="expand_more" className="custom-reports-thinking-step-chevron" />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function historyIcon(status) {
  if (status === 'GENERATING') return 'hourglass_top';
  if (status === 'FAILED') return 'error_outline';
  return 'schedule';
}

function HistoryGroup({ label, entries, selectedId, onSelect, collapsed, onToggle }) {
  if (!entries.length) return null;
  return (
    <div className="custom-reports-nav-group">
      <button
        type="button"
        className="custom-reports-nav-group-label"
        onClick={onToggle}
        aria-expanded={!collapsed}
      >
        <Icon name="chevron_right" className={`custom-reports-nav-group-chevron${collapsed ? '' : ' expanded'}`} />
        <span>{label}</span>
      </button>
      {!collapsed &&
        entries.map((entry) => (
          <button
            key={entry.id}
            className={`custom-reports-nav-item${selectedId === entry.id ? ' active' : ''}${
              entry.status !== 'READY' ? ` pending-${entry.status.toLowerCase()}` : ''
            }`}
            onClick={() => onSelect(entry.id)}
            title={entry.prompt}
          >
            <Icon name={historyIcon(entry.status)} />
            <span className="custom-reports-nav-item-text">{entry.prompt}</span>
          </button>
        ))}
    </div>
  );
}

function PromptComposer({ prompt, setPrompt, onSend, canGenerate, compact, statusLabel }) {
  const boxRef = useRef(null);
  const [iconSlot, setIconSlot] = useState(null);
  const [enhancing, setEnhancing] = useState(false);

  // ChatInputBox manages its own contentEditable DOM internally and never
  // reads its `value` prop, so programmatic prefills (suggestion chips,
  // enhance-prompt, "New Report" reset) have to be pushed into the DOM node.
  useEffect(() => {
    const root = boxRef.current;
    if (!root) return;
    const editable = root.querySelector('[contenteditable]');
    if (!editable || editable.textContent === prompt) return;

    editable.textContent = prompt;
    if (prompt) {
      editable.focus();
      const range = document.createRange();
      range.selectNodeContents(editable);
      range.collapse(false);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
    }
    editable.dispatchEvent(new InputEvent('input', { bubbles: true }));
  }, [prompt]);

  // Locate the composer's bottom-left icon row so we can inject an "Enhance
  // prompt" (wand) button next to the attachment button. Re-runs when the
  // status banner toggles because ChatInputBox re-parents its input subtree
  // (which recreates the icon DOM) when a `label` is added/removed.
  useEffect(() => {
    const attach = boxRef.current?.querySelector('[aria-label="Attach file"]');
    setIconSlot(attach?.parentElement ?? null);
  }, [statusLabel, compact]);

  const handleEnhance = () => {
    const editable = boxRef.current?.querySelector('[contenteditable]');
    const current = (editable?.textContent ?? prompt).trim();
    if (!current || enhancing) return;
    setEnhancing(true);
    setTimeout(() => {
      setPrompt(enhancePrompt(current));
      setEnhancing(false);
    }, 650);
  };

  return (
    <div className={`custom-reports-composer${compact ? ' compact' : ''}`}>
      <ChatInputBox
        ref={boxRef}
        value={prompt}
        onChange={setPrompt}
        onSend={(value) => onSend(value)}
        placeholder='Analyze quality data — try "Compare pitch quality across teams"'
        sendDisabled={!canGenerate}
        showVoiceInput
        label={statusLabel}
      />
      {iconSlot &&
        createPortal(
          <Tooltip title="Enhance prompt" placement="top" arrow>
            <button
              type="button"
              className="custom-reports-enhance-btn"
              onClick={handleEnhance}
              disabled={enhancing || !prompt.trim()}
              aria-label="Enhance prompt"
            >
              {enhancing ? <CircularProgress size={15} thickness={5} /> : <Icon name="auto_fix_high" />}
            </button>
          </Tooltip>,
          iconSlot,
        )}
      {!compact && prompt.length > 0 && prompt.trim().length < 10 && (
        <div className="custom-reports-composer-footer">
          <span className="custom-prompt-hint">Minimum 10 characters.</span>
        </div>
      )}
      {compact && <div className="footer-note">AI can make mistakes, always verify.</div>}
    </div>
  );
}

export default function CustomReportsView() {
  const [prompt, setPrompt] = useState('');
  const [history, setHistory] = useState(seedHistory);
  const [selectedId, setSelectedId] = useState(null);
  const [search, setSearch] = useState('');
  const [collapsedGroups, setCollapsedGroups] = useState({});
  const [navCollapsed, setNavCollapsed] = useState(false);

  const toggleGroup = (key) => setCollapsedGroups((c) => ({ ...c, [key]: !c[key] }));

  const selected = history.find((h) => h.id === selectedId) || null;
  const canGenerate = prompt.trim().length >= 10;

  const filteredHistory = useMemo(() => {
    if (!search.trim()) return history;
    const q = search.trim().toLowerCase();
    return history.filter((h) => h.prompt.toLowerCase().includes(q));
  }, [history, search]);

  const groups = useMemo(() => groupHistoryByRecency(filteredHistory), [filteredHistory]);

  const runGeneration = (text, forPeriod) => {
    const pendingId = `pending_${Date.now()}`;
    const pending = { id: pendingId, prompt: text, period: forPeriod, status: 'GENERATING', createdAt: 'just now' };
    setHistory((h) => [pending, ...h]);
    setSelectedId(pendingId);
    setPrompt('');
    setTimeout(() => {
      setHistory((h) => {
        const finished = { ...generateMockReport(text, forPeriod), id: pendingId };
        return h.map((entry) => (entry.id === pendingId ? finished : entry));
      });
    }, GENERATION_DELAY_MS);
  };

  const handleGenerate = (value) => {
    const text = (value ?? prompt).trim();
    if (text.length < 10) return;
    runGeneration(text, DEFAULT_PERIOD);
  };

  const handleRetry = (entry) => {
    runGeneration(entry.prompt, entry.period);
  };

  const handleNewReport = () => {
    setSelectedId(null);
    setPrompt('');
  };

  const handleSuggestion = (s) => {
    setPrompt(s.prompt);
  };

  return (
    <div className="custom-reports-app">
      <div className={`custom-reports-nav${navCollapsed ? ' collapsed' : ''}`}>
        <button type="button" className="custom-reports-new-btn" onClick={handleNewReport}>
          <Icon name="edit_square" />
          <span>New Report</span>
        </button>

        <div className="custom-reports-nav-search">
          <Icon name="search" />
          <input
            type="text"
            placeholder="Search reports"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="custom-reports-nav-scroll">
          {HISTORY_GROUPS.map((g) => (
            <HistoryGroup
              key={g.key}
              label={g.label}
              entries={groups[g.key]}
              selectedId={selectedId}
              onSelect={setSelectedId}
              collapsed={!!collapsedGroups[g.key]}
              onToggle={() => toggleGroup(g.key)}
            />
          ))}
          {filteredHistory.length === 0 && (
            <div className="custom-reports-nav-empty">No reports match “{search}”.</div>
          )}
        </div>
      </div>

      <div className="custom-reports-main">
        <div className="custom-reports-main-topbar">
          <button
            type="button"
            className="custom-reports-panel-toggle"
            onClick={() => setNavCollapsed((c) => !c)}
            title={navCollapsed ? 'Show history' : 'Hide history'}
            aria-expanded={!navCollapsed}
          >
            <Icon name={navCollapsed ? 'left_panel_open' : 'left_panel_close'} />
          </button>
          {navCollapsed && (
            <button
              type="button"
              className="custom-reports-panel-toggle"
              onClick={handleNewReport}
              title="New Report"
              aria-label="New Report"
            >
              <Icon name="edit_square" />
            </button>
          )}
        </div>
        {!selected ? (
          <div className="custom-reports-landing">
            <div className="custom-reports-landing-center">
              <div className="custom-reports-landing-icon">
                <Icon name="auto_awesome" />
              </div>
              <Typography variant="title2" sx={{ mb: 0.5, textAlign: 'center' }}>
                What report do you want to generate?
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3, textAlign: 'center', maxWidth: 420 }}>
                Ask a question about your quality data and get a narrative report with the charts and tables to back it up.
              </Typography>
              <PromptComposer prompt={prompt} setPrompt={setPrompt} onSend={handleGenerate} canGenerate={canGenerate} />
              <div className="custom-reports-suggested-row">
                {SUGGESTED_PROMPTS.map((s) => (
                  <Tooltip key={s.id} title={s.description} placement="top" arrow>
                    <Button
                      variant="outlined"
                      color="inherit"
                      size="small"
                      startIcon={<Icon name={s.icon} />}
                      onClick={() => handleSuggestion(s)}
                      className={`custom-reports-suggested-btn ${s.color}`}
                    >
                      {s.title}
                    </Button>
                  </Tooltip>
                ))}
              </div>
            </div>
            <div className="footer-note custom-reports-landing-footer">AI can make mistakes, always verify.</div>
          </div>
        ) : (
          <>
            <div className="custom-reports-report-scroll">
              <div className="custom-reports-transcript">
                {selected.status === 'GENERATING' && (
                  <ThinkingCard prompt={selected.prompt} entryId={selected.id} />
                )}
                {selected.status === 'FAILED' && (
                  <div className="custom-reports-failed">
                    <Icon name="error_outline" />
                    <div>
                      <div className="custom-reports-generating-title">Generation failed</div>
                      <div className="custom-reports-generating-sub">
                        “{selected.prompt}” — try rephrasing or generating again.
                      </div>
                    </div>
                    <button className="generate-btn" onClick={() => handleRetry(selected)}>
                      <Icon name="refresh" />
                      Retry
                    </button>
                  </div>
                )}
                {selected.status === 'READY' && <ReportDetail entry={selected} />}
              </div>
            </div>
            <PromptComposer
              prompt={prompt}
              setPrompt={setPrompt}
              onSend={handleGenerate}
              canGenerate={canGenerate}
              compact
              statusLabel={selected.status === 'GENERATING' ? 'Thinking...' : undefined}
            />
          </>
        )}
      </div>
    </div>
  );
}
