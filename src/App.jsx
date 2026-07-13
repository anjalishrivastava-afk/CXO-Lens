import { useState } from 'react';
import { ExotelThemeProvider, ToastProvider } from '@exotel-npm-dev/signal-design-system';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Tabs from './components/Tabs';
import FilterBar from './components/FilterBar';
import AgentView from './components/AgentView';
import OverviewView from './components/OverviewView';
import CustomReportsView from './components/CustomReportsView';
import CxoLensView from './components/CxoLensView';

const FILTER_BAR_VIEWS = ['org', 'team', 'agent'];

export default function App() {
  const [section, setSection] = useState('ai-insights');
  const [view, setViewState] = useState('agent');
  const [period, setPeriod] = useState('month');
  const [selector, setSelector] = useState('H0967');

  const setView = (v) => {
    setViewState(v);
    setSelector(v === 'team' ? 'H0172' : 'H0967');
  };

  const openAgent = (code) => {
    setSection('ai-insights');
    setViewState('agent');
    setSelector(code);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isCxoLens = section === 'cxo-lens';
  const isCustomReports = section === 'custom-reports';

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
                  <div className="panel-title-row">
                    <span className="panel-title">
                      {isCxoLens ? 'CXO Lens' : isCustomReports ? 'Custom Reports' : 'AI Insights'}
                    </span>
                    <span className="panel-subtitle">
                      {isCxoLens
                        ? 'Bi-weekly AI-generated executive reports — narrative-first, admin-only'
                        : isCustomReports
                          ? 'Generate ad-hoc AI reports from a natural-language prompt — admin-only'
                          : 'AI-generated quality insights across your org, teams and agents'}
                    </span>
                  </div>
                  {!isCxoLens && !isCustomReports && (
                    <div className="tabs-row">
                      <Tabs view={view} onChange={setView} />
                    </div>
                  )}
                </div>

                {!isCxoLens && !isCustomReports && FILTER_BAR_VIEWS.includes(view) && (
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
                      {isCxoLens && <CxoLensView />}
                      {!isCxoLens && view === 'agent' && <AgentView />}
                      {!isCxoLens && (view === 'team' || view === 'org') && (
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
