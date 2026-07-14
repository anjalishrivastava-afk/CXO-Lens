import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ExotelThemeProvider, ToastProvider } from '@exotel-npm-dev/signal-design-system';
import QpInsightsTabs from './components/QpInsightsTabs';
import QpFilterBar from './components/QpFilterBar';
import QpInsightsView from './components/QpInsightsView';
import { trackQpAnalyticsPeriodChanged, trackQpAnalyticsTabSwitched } from './analytics';
import { useQpAnalyticsTimeSpent } from './useQpAnalyticsTimeSpent';
import {
  canAccessQpAnalytics,
  canViewPortfolioInsights,
  getCqaHostContext,
  isQpAnalyticsFeatureEnabled,
} from './cqaHostContext';
import { getQpProfile, QP_PROFILES } from './qpInsightsData';
import './index.css';

function QpAnalyticsEmbedApp() {
  const ctx = getCqaHostContext();
  const [qpTab, setQpTab] = useState(canViewPortfolioInsights(ctx) ? 'all-profiles' : 'per-qp');
  const [qpId, setQpId] = useState(() => QP_PROFILES[0]?.id ?? '');
  const [qpPeriod, setQpPeriod] = useState('month');

  useQpAnalyticsTimeSpent(true);

  if (!isQpAnalyticsFeatureEnabled(ctx)) {
    return (
      <div className="qp-embed-shell">
        <div className="cxo-lens-state cxo-lens-state--info">
          <div className="section-card-title">QP Analytics is not enabled</div>
          <div className="info-card-text">Ask your administrator to enable the QP Analytics feature flag.</div>
        </div>
      </div>
    );
  }

  if (!canAccessQpAnalytics(ctx)) {
    return (
      <div className="qp-embed-shell">
        <div className="cxo-lens-state cxo-lens-state--info">
          <div className="section-card-title">Access restricted</div>
          <div className="info-card-text">Your role does not have permission to view QP Analytics.</div>
        </div>
      </div>
    );
  }

  const handleQpTabChange = (nextTab) => {
    if (!canViewPortfolioInsights(ctx) && nextTab === 'all-profiles') return;
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
        <div className="qp-embed-shell">
          <div className="panel panel--flush">
            <div className="panel-titlebar">
              <div className="panel-titlebar-top">
                <div className="panel-title-row">
                  <span className="panel-title">QP Analytics</span>
                  <span className="panel-subtitle">Embedded from CQA at /cqa-ui/qp-analytics</span>
                </div>
              </div>
              {canViewPortfolioInsights(ctx) && (
                <div className="tabs-row">
                  <QpInsightsTabs tab={qpTab} onChange={handleQpTabChange} />
                </div>
              )}
            </div>

            <QpFilterBar
              qpId={qpId}
              onQpChange={handleQpChange}
              period={qpPeriod}
              onPeriodChange={handleQpPeriodChange}
              showProfileSelector={qpTab === 'per-qp' || !canViewPortfolioInsights(ctx)}
            />

            <div className="content">
              <div className="sections">
                <QpInsightsView
                  tab={qpTab}
                  qpId={qpId}
                  period={qpPeriod}
                  onProfileDrill={handleProfileDrill}
                />
                <div className="footer-note">AI-generated summary. May contain errors.</div>
              </div>
            </div>
          </div>
        </div>
      </ToastProvider>
    </ExotelThemeProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QpAnalyticsEmbedApp />
  </StrictMode>,
);
