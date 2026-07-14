import { useEffect, useState } from 'react';
import { ExotelThemeProvider, ToastProvider } from '@exotel-npm-dev/signal-design-system';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Tabs from './components/Tabs';
import FilterBar from './components/FilterBar';
import FeedbackButtons from './components/FeedbackButtons';
import AgentView from './components/AgentView';
import OverviewView from './components/OverviewView';
import CustomReportsView from './components/CustomReportsView';
import CxoLensView from './components/CxoLensView';

const FILTER_BAR_VIEWS = ['org', 'team', 'agent'];

function dashboardFeedback(section, view, insightId) {
  if (section === 'agent-summary') {
    return { view, section: 'dashboard', insightId: view };
  }
  if (section === 'cx-pulse') {
    return { view: 'cxo_lens', section: 'dashboard', insightId: insightId ?? 'cx_pulse' };
  }
  return null;
}

export default function App() {
  const [section, setSection] = useState('agent-summary');
  const [view, setViewState] = useState('agent');
  const [period, setPeriod] = useState('month');
  const [selector, setSelector] = useState('H0967');

  const setView = (v) => {
    setViewState(v);
    setSelector(v === 'team' ? 'H0172' : 'H0967');
  };

  const openAgent = (code) => {
    setSection('agent-summary');
    setViewState('agent');
    setSelector(code);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isCxoLens = section === 'cx-pulse';
  const isCustomReports = section === 'custom-insights';
  const isAgentSummary = section === 'agent-summary';
  const [dashboardReady, setDashboardReady] = useState({ ready: true, insightId: view });

  useEffect(() => {
    if (isAgentSummary) {
      setDashboardReady({ ready: true, insightId: view });
    } else {
      setDashboardReady({ ready: false, insightId: null });
    }
  }, [section, view, isAgentSummary]);

  const feedback =
    isAgentSummary || (isCxoLens && dashboardReady.ready)
      ? dashboardFeedback(section, view, dashboardReady.insightId)
      : null;

  return (
    <ExotelThemeProvider defaultMode="light">
      <ToastProvider>
        <div className="app-shell">
          <Sidebar section={section} onSectionChange={setSection} />
          <div className="content-col">
            <Header />
            {/* Same flush shell (8px gutter, borderless panel) everywhere —
                CXO Lens and AI Insights used to sit in a wider 16px-inset,
                bordered panel while Custom Reports had its own tighter chrome;
                now all three sections share identical outer padding/spacing. */}
            <main className="main main--flush">
              <div className="panel panel--flush">
                <div className="panel-titlebar">
                  <div className="panel-titlebar-top">
                    <div className="panel-title-row">
                      <span className="panel-title">
                        {isCxoLens ? 'CX Pulse' : isCustomReports ? 'Custom Insights' : 'Overview'}
                      </span>
                      <span className="panel-subtitle">
                        {isCxoLens
                          ? 'Bi-weekly AI-generated executive reports — narrative-first, admin-only'
                          : isCustomReports
                            ? 'Generate ad-hoc AI reports from a natural-language prompt — admin-only'
                            : 'AI-generated quality insights across your org, teams and agents'}
                      </span>
                    </div>
                    {feedback && (
                      <FeedbackButtons
                        key={feedback.insightId}
                        view={feedback.view}
                        section={feedback.section}
                        insightId={feedback.insightId}
                      />
                    )}
                  </div>
                  {isAgentSummary && (
                    <div className="tabs-row">
                      <Tabs view={view} onChange={setView} />
                    </div>
                  )}
                </div>

                {isAgentSummary && FILTER_BAR_VIEWS.includes(view) && (
                  <FilterBar
                    view={view}
                    period={period}
                    onPeriodChange={setPeriod}
                    selector={selector}
                    onSelectorChange={setSelector}
                  />
                )}

                {isCustomReports ? (
                  <CustomReportsView />
                ) : (
                  <div className="content">
                    <div className="sections">
                      {isCxoLens && <CxoLensView onDashboardReadyChange={setDashboardReady} />}
                      {isAgentSummary && view === 'agent' && <AgentView />}
                      {isAgentSummary && (view === 'team' || view === 'org') && (
                        <OverviewView view={view} onOpenAgent={openAgent} />
                      )}
                      <div className="footer-note">AI-generated summary. May contain errors.</div>
                    </div>
                  </div>
                )}
              </div>
            </main>
          </div>
        </div>
      </ToastProvider>
    </ExotelThemeProvider>
  );
}
