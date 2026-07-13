import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Tabs from './components/Tabs';
import FilterBar from './components/FilterBar';
import AgentView from './components/AgentView';
import OverviewView from './components/OverviewView';
import CxoInsightsView from './components/CxoInsightsView';
import CustomReportsView from './components/CustomReportsView';

const FILTER_BAR_VIEWS = ['org', 'team', 'agent'];

export default function App() {
  const [view, setViewState] = useState('agent');
  const [period, setPeriod] = useState('month');
  const [selector, setSelector] = useState('H0967');

  const setView = (v) => {
    setViewState(v);
    setSelector(v === 'team' ? 'H0172' : 'H0967');
  };

  const openAgent = (code) => {
    setViewState('agent');
    setSelector(code);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-shell">
      <Sidebar />
      <div className="content-col">
        <Header />
        <main className="main">
          <div className="panel">
            <div className="panel-titlebar">
              <div className="panel-title-row">
                <span className="panel-title">AI Insights</span>
                <span className="panel-subtitle">
                  AI-generated quality insights across your org, teams and agents
                </span>
              </div>
              <div className="tabs-row">
                <Tabs view={view} onChange={setView} />
              </div>
            </div>

            {FILTER_BAR_VIEWS.includes(view) && (
              <FilterBar
                view={view}
                period={period}
                onPeriodChange={setPeriod}
                selector={selector}
                onSelectorChange={setSelector}
              />
            )}

            <div className="content">
              <div className="sections">
                {view === 'agent' && <AgentView />}
                {(view === 'team' || view === 'org') && <OverviewView view={view} onOpenAgent={openAgent} />}
                {view === 'cxo' && <CxoInsightsView />}
                {view === 'custom' && <CustomReportsView />}
                <div className="footer-note">AI-generated summary. May contain errors.</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
