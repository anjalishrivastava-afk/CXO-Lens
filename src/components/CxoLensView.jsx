import { useState } from 'react';
import {
  Box,
  Tooltip,
  Typography,
} from '@exotel-npm-dev/signal-design-system';
import Icon from './Icon';
import CxoInsightsView from './CxoInsightsView';
import CxoLensStatePanel from './CxoLensStatePanel';
import WeekPager from './WeekPager';
import {
  CXO_LENSES,
  LENS_SYSTEM_PROMPTS,
  fortnightPeriods,
  getLensById,
  getLensReportData,
  getReportStatus,
  PHASE2_CUSTOM_PROMPT_NOTE,
} from '../cxoLensData';

// Fortnight periods run newest-first in the data; present them oldest→newest
// for the pager so the left chevron steps back in time and the right chevron
// forward, matching the chart week pagers.
const PERIODS_CHRONO = [...fortnightPeriods].reverse();

const VIEW = 'cxo_lens';

export default function CxoLensView() {
  const [lensId, setLensId] = useState('sales_quality');
  const [periodId, setPeriodId] = useState('current');

  const lens = getLensById(lensId);
  const status = getReportStatus(lensId, periodId);
  const reportData = getLensReportData(lensId, periodId);
  const systemPrompt = LENS_SYSTEM_PROMPTS[lensId];

  const periodIndex = Math.max(0, PERIODS_CHRONO.findIndex((p) => p.id === periodId));
  const currentPeriod = PERIODS_CHRONO[periodIndex];

  const handleLensChange = (id) => {
    setLensId(id);
    setPeriodId('current');
  };

  const handlePeriodIndex = (idx) => {
    setPeriodId(PERIODS_CHRONO[idx].id);
  };

  return (
    <div className="cxo-lens">
      {/* Dashboard switcher — pill segmented control */}
      <div className="cxo-lens-switcher" role="tablist" aria-label="CXO Lens dashboards">
        {CXO_LENSES.map((l) => {
          const active = lensId === l.id;
          return (
            <button
              key={l.id}
              role="tab"
              aria-selected={active}
              className={`cxo-lens-pill${active ? ' active' : ''}`}
              onClick={() => handleLensChange(l.id)}
            >
              <Icon name={l.icon} />
              {l.label}
            </button>
          );
        })}
      </div>

      {/* Page header */}
      <div className="cxo-lens-header">
        <div className="cxo-lens-header-main">
          <div className="cxo-lens-title-row">
            <Typography variant="title2" component="h1">
              {lens.label}
            </Typography>
            <Tooltip
              title={
                <Box sx={{ p: 0.5, maxWidth: 320 }}>
                  <Typography variant="label3" sx={{ display: 'block', mb: 0.5, fontWeight: 600 }}>
                    System prompt
                  </Typography>
                  <Typography variant="body3" sx={{ whiteSpace: 'pre-wrap' }}>
                    {systemPrompt}
                  </Typography>
                </Box>
              }
              placement="bottom-start"
              arrow
            >
              <button className="cxo-lens-info-btn" aria-label="View system prompt used to generate this report">
                <Icon name="info" />
              </button>
            </Tooltip>
          </div>
          <Typography variant="body3" color="text.secondary" sx={{ mt: 0.25 }}>
            {lens.description}
          </Typography>
        </div>

        <div className="cxo-lens-header-actions">
          <WeekPager
            label={currentPeriod.label}
            index={periodIndex}
            total={PERIODS_CHRONO.length}
            onChange={handlePeriodIndex}
            prevTooltip="Previous fortnight"
            nextTooltip="Next fortnight"
          />
        </div>
      </div>

      {/* Report body or state panel */}
      {status === 'READY' && reportData ? (
        <CxoInsightsView
          data={reportData}
          viewKey={VIEW}
          showMetaBar={false}
          periodId={periodId}
          onPeriodChange={setPeriodId}
        />
      ) : (
        <CxoLensStatePanel status={status} />
      )}

      {/* Phase 2 placeholder — documented, not built */}
      {/* {PHASE2_CUSTOM_PROMPT_NOTE} */}
      <div className="cxo-lens-phase2-note" aria-hidden="true" data-phase2={PHASE2_CUSTOM_PROMPT_NOTE} />
    </div>
  );
}
