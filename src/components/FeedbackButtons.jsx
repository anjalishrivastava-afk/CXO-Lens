import { useRef, useState } from 'react';
import { Box, Button, Checkbox, EnhancedTextField, Popover, Tooltip, Typography, useToast } from '@exotel-npm-dev/signal-design-system';
import Icon from './Icon';
import { trackInsightFeedback } from '../analytics';

// Reason options are tailored to what's actually being judged here — the
// accuracy/usefulness of an AI-generated quality-metric insight — rather than
// generic app-feedback categories (bugs, slowness, etc.) that don't fit.
const DOWN_REASONS = [
  'Inaccurate — doesn’t match my data',
  'Not actionable',
  'Already knew this',
  'Unclear or confusing',
  'Wrong metric or KPI referenced',
  'Other issue',
];

const UP_REASONS = ['Accurate', 'Actionable', 'Told me something new', 'Well explained', 'Right metric or KPI', 'Other'];

export default function FeedbackButtons({ view, section, insightId }) {
  const [vote, setVote] = useState(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [reasons, setReasons] = useState([]);
  const [otherText, setOtherText] = useState('');
  const rootRef = useRef(null);
  const { showSuccess } = useToast();

  const reasonOptions = vote === 'down' ? DOWN_REASONS : UP_REASONS;
  const otherLabel = vote === 'down' ? 'Other issue' : 'Other';
  const hasOther = reasons.includes(otherLabel);

  const castVote = (v) => {
    // Clicking the already-active vote undoes it; clicking the other one switches to it.
    const next = vote === v ? null : v;
    setVote(next);
    setReasons([]);
    setOtherText('');
    if (next === 'down') {
      setPanelOpen(true);
    } else {
      setPanelOpen(false);
      trackInsightFeedback({ view, section, insightId, vote: next });
      if (next) showSuccess('Thanks for the feedback!', { autoHideDuration: 3000 });
    }
  };

  const toggleReason = (r) => {
    setReasons((rs) => (rs.includes(r) ? rs.filter((x) => x !== r) : [...rs, r]));
  };

  const handleSubmit = () => {
    trackInsightFeedback({ view, section, insightId, vote, reasons, detail: otherText.trim() || undefined });
    setPanelOpen(false);
    showSuccess('Thanks for the feedback!', { autoHideDuration: 3000 });
  };

  return (
    <div className="feedback-buttons" ref={rootRef}>
      <Tooltip title={vote === 'up' ? 'Undo' : 'Helpful'} placement="bottom" arrow>
        <button
          className={`feedback-btn${vote === 'up' ? ' active-up' : ''}`}
          onClick={() => castVote('up')}
          aria-label="Mark this insight as helpful"
          aria-pressed={vote === 'up'}
        >
          <Icon name="thumb_up" />
        </button>
      </Tooltip>
      <Tooltip title={vote === 'down' ? 'Undo' : 'Not helpful'} placement="bottom" arrow>
        <button
          className={`feedback-btn${vote === 'down' ? ' active-down' : ''}`}
          onClick={() => castVote('down')}
          aria-label="Mark this insight as not helpful"
          aria-pressed={vote === 'down'}
        >
          <Icon name="thumb_down" />
        </button>
      </Tooltip>
      {vote && (
        <Tooltip title="Share more details" placement="bottom" arrow>
          <button
            className="feedback-btn"
            onClick={() => setPanelOpen((o) => !o)}
            aria-label="Share more feedback details"
            aria-pressed={panelOpen}
          >
            <Icon name="edit_note" />
          </button>
        </Tooltip>
      )}

      <Popover
        open={panelOpen}
        anchorEl={rootRef.current}
        onClose={() => setPanelOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        slotProps={{ paper: { sx: { mt: 1, width: 280, borderRadius: 2 } } }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="label2" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
            {vote === 'down' ? 'What went wrong?' : 'What worked well?'}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {reasonOptions.map((r) => (
              <Box
                key={r}
                component="label"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  pr: 1,
                  borderRadius: 1.5,
                  cursor: 'pointer',
                  '&:hover': { bgcolor: 'action.hover' },
                }}
              >
                <Checkbox size="small" checked={reasons.includes(r)} onChange={() => toggleReason(r)} />
                <Typography variant="body2">{r}</Typography>
              </Box>
            ))}
          </Box>
          {hasOther && (
            <EnhancedTextField
              showLabel={false}
              placeholder="Tell us more…"
              value={otherText}
              onChange={(e) => setOtherText(e.target.value)}
              multiline
              rows={2}
              fullWidth
              size="small"
              autoFocus
              sx={{ mt: 1 }}
            />
          )}
          <Button variant="contained" color="primary" fullWidth onClick={handleSubmit} sx={{ mt: 1.5 }}>
            Submit
          </Button>
        </Box>
      </Popover>
    </div>
  );
}
