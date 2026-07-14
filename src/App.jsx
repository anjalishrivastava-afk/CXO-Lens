import { useEffect, useState } from 'react';
import { ExotelThemeProvider, ToastProvider } from '@exotel-npm-dev/signal-design-system';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Tabs from './components/Tabs';
import QpInsightsTabs from './components/QpInsightsTabs';
import FilterBar from './components/FilterBar';
import QpFilterBar from './components/QpFilterBar';
import FeedbackButtons from './components/FeedbackButtons';
import AgentView from './components/AgentView';
import OverviewView from './components/OverviewView';
import CustomReportsView from './components/CustomReportsView';
import CxoLensView from './components/CxoLensView';
import QpInsightsView from './components/QpInsightsView';
import { trackQpAnalyticsPeriodChanged, trackQpAnalyticsTabSwitched } from './analytics';
import { useQpAnalyticsTimeSpent } from './useQpAnalyticsTimeSpent';
import { getQpProfile, QP_PROFILES } from './qpInsightsData';

const FILTER_BAR_VIEWS = ['org', 'team', 'agent'];

function dashboardFeedback(section, view, insightId, qpTab, qpId) {
  if (section === 'agent-summary') {
    return { view, section: 'dashboard', insightId: view };
  }
  if (section === 'cx-pulse') {
    return { view: 'cxo_lens', section: 'dashboard', insightId: insightId ?? 'cx_pulse' };
  }
  if (section === 'qp-insights') {
    return {
      view: 'qp_insights',
      section: 'dashboard',
      insightId: qpTab === 'all-profiles' ? 'all_profiles' : `qp_${qpId}`,
    };
  }
  return null;
}

function panelTitle(section) {
  if (section === 'cx-pulse') return 'CX Pulse';
  if (section === 'custom-insights') return 'Custom Insights';
  if (section === 'qp-insights') return 'QP Insights';
  return 'Overview';
}

function panelSubtitle(section) {
  if (section === 'cx-pulse') {
    return 'Bi-weekly AI-generated executive reports — narrative-first, admin-only';
  }
  if (section === 'custom-insights') {
    return 'Generate ad-hoc AI reports from a natural-language prompt — admin-only';
  }
  if (section === 'qp-insights') {
    return 'Compare quality profiles portfolio-wide, or drill into one profile at a time';
  }
  return 'AI-generated quality insights across your org, teams and agents';
}

export default function App() {
  const [section, setSection] = useState('agent-summary');
  const [view, setViewState] = useState('agent');
  const [period, setPeriod] = useState('month');
  const [selector, setSelector] = useState('H0967');
  const [qpTab, setQpTab] = useState('all-profiles');
  const [qpId, setQpId] = useState(() => QP_PROFILES[0]?.id ?? '');
  const [qpPeriod, setQpPeriod] = useState('month');

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
  const isQpInsights = section === 'qp-insights';
  const [dashboardReady, setDashboardReady] = useState({ ready: true, insightId: view });

  useQpAnalyticsTimeSpent(isQpInsights);

  useEffect(() => {
    if (isAgentSummary) {
      setDashboardReady({ ready: true, insightId: view });
    } else if (isQpInsights) {
      setDashboardReady({ ready: true, insightId: qpTab === 'all-profiles' ? 'all_profiles' : qpId });
    } else {
      setDashboardReady({ ready: false, insightId: null });
    }
  }, [section, view, isAgentSummary, isQpInsights, qpTab, qpId]);

  const feedback =
    isAgentSummary || isQpInsights || (isCxoLens && dashboardReady.ready)
      ? dashboardFeedback(section, view, dashboardReady.insightId, qpTab, qpId)
      : null;

  const handleQpTabChange = (nextTab) => {
    setQpTab(nextTab);
    const profile = nextTab === 'per-qp' ? getQpProfile(qpId) : null;
    trackQpAnalyticsTabSwitched({
      tabType: nextTab === 'all-profiles' ? 'all_profiles' : 'specific_qp',
      profileId: profile?.id ?? null,
      profileName: profile?.label ?? null,
      source: 'tab_bar',
      period: qpPeriod,
    });
  };

  const handleProfileDrill = (profileId, source) => {
    const profile = getQpProfile(profileId);
    trackQpAnalyticsTabSwitched({
      tabType: 'specific_qp',
      profileId: profile.id,
      profileName: profile.label,
      source,
      period: qpPeriod,
    });
  };

  const handleQpChange = (nextQpId) => {
    const profile = getQpProfile(nextQpId);
    setQpId(nextQpId);
    if (qpTab === 'per-qp') {
      trackQpAnalyticsTabSwitched({
        tabType: 'specific_qp',
        profileId: profile.id,
        profileName: profile.label,
        source: 'profile_selector',
        period: qpPeriod,
      });
    }
  };

  const handleQpPeriodChange = (nextPeriod) => {
    setQpPeriod(nextPeriod);
    const profile = qpTab === 'per-qp' ? getQpProfile(qpId) : null;
    trackQpAnalyticsPeriodChanged({
      period: nextPeriod,
      tabType: qpTab === 'all-profiles' ? 'all_profiles' : 'specific_qp',
      profileId: profile?.id ?? null,
      profileName: profile?.label ?? null,
    });
  };

  return (
    <ExotelThemeProvider defaultMode="light">
      <ToastProvider>
        <div className="app-shell">
          <Sidebar section={section} onSectionChange={setSection} />
          <div className="content-col">
            <Header />
            <main className="main main--flush">
              <div className="panel panel--flush">
                <div className="panel-titlebar">
                  <div className="panel-titlebar-top">
                    <div className="panel-title-row">
                      <span className="panel-title">{panelTitle(section)}</span>
                      <span className="panel-subtitle">{panelSubtitle(section)}</span>
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
                  {isQpInsights && (
                    <div className="tabs-row">
                      <QpInsightsTabs tab={qpTab} onChange={handleQpTabChange} />
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

                {isQpInsights && (
                  <QpFilterBar
                    qpId={qpId}
                    onQpChange={handleQpChange}
                    period={qpPeriod}
                    onPeriodChange={handleQpPeriodChange}
                    showProfileSelector={qpTab === 'per-qp'}
                  />
                )}

                {isCustomReports ? (
                  <CustomReportsView />
                ) : (
                  <div className="content">
                    <div className="sections">
                      {isCxoLens && <CxoLensView onDashboardReadyChange={setDashboardReady} />}
                      {isQpInsights && (
                        <QpInsightsView
                          tab={qpTab}
                          qpId={qpId}
                          period={qpPeriod}
                          onProfileDrill={handleProfileDrill}
                        />
                      )}
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
