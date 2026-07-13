import { Box, CircularProgress, Typography } from '@exotel-npm-dev/signal-design-system';
import Icon from './Icon';

const STATE_CONFIG = {
  GENERATING: {
    icon: 'hourglass_top',
    title: 'Report generating',
    detail: 'Your bi-weekly executive report is being prepared. This usually takes a few minutes after the fortnight closes.',
    tone: 'info',
  },
  EMPTY: {
    icon: 'call_missed',
    title: 'No calls analyzed this period',
    detail: 'There weren’t enough interactions in this fortnight to produce a reliable executive summary. Check back after the next refresh cycle.',
    tone: 'muted',
  },
  FAILED: {
    icon: 'error_outline',
    title: 'Generation failed',
    detail: 'We couldn’t complete this report. The data pipeline may have been interrupted — try again after the next scheduled refresh or contact your admin.',
    tone: 'error',
  },
};

export default function CxoLensStatePanel({ status }) {
  const cfg = STATE_CONFIG[status] || STATE_CONFIG.FAILED;

  return (
    <div className={`cxo-lens-state cxo-lens-state--${cfg.tone}`}>
      <div className="cxo-lens-state-icon-wrap">
        {status === 'GENERATING' ? (
          <CircularProgress size={28} color="primary" />
        ) : (
          <Icon name={cfg.icon} />
        )}
      </div>
      <Typography variant="title3" sx={{ mb: 0.5 }}>
        {cfg.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 420, textAlign: 'center' }}>
        {cfg.detail}
      </Typography>
      {status === 'GENERATING' && (
        <Box sx={{ mt: 2 }}>
          <span className="history-status generating">Generating…</span>
        </Box>
      )}
      {status === 'FAILED' && (
        <Box sx={{ mt: 2 }}>
          <span className="history-status failed">Failed</span>
        </Box>
      )}
    </div>
  );
}
