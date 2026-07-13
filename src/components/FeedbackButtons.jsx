import { useEffect, useRef, useState } from 'react';
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

  useEffect(() => {
    if (!panelOpen) return;
    const handleClick = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setPanelOpen(false);
    };
    const handleKey = (e) => {
      if (e.key === 'Escape') setPanelOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [panelOpen]);

  const reasonOptions = vote === 'down' ? DOWN_REASONS : UP_REASONS;
  const otherLabel = vote === 'down' ? 'Other issue' : 'Other';
  const hasOther = reasons.includes(otherLabel);

  const castVote = (v) => {
    setVote(v);
    setReasons([]);
    setOtherText('');
    if (v === 'down') {
      setPanelOpen(true);
    } else {
      setPanelOpen(false);
      trackInsightFeedback({ view, section, insightId, vote: v });
    }
  };

  const toggleReason = (r) => {
    setReasons((rs) => (rs.includes(r) ? rs.filter((x) => x !== r) : [...rs, r]));
  };

  const handleSubmit = () => {
    trackInsightFeedback({ view, section, insightId, vote, reasons, detail: otherText.trim() || undefined });
    setPanelOpen(false);
  };

  if (vote && !panelOpen) {
    return (
      <div className="feedback-done">
        <span>Thanks for your feedback!</span>
        <button className="feedback-share-btn" onClick={() => setPanelOpen(true)}>
          Share details
        </button>
      </div>
    );
  }

  return (
    <div className="feedback-buttons" ref={rootRef}>
      <span className="tooltip-anchor" data-tooltip="Helpful">
        <button
          className={`feedback-btn${vote === 'up' ? ' active-up' : ''}`}
          onClick={() => castVote('up')}
          aria-label="Mark this insight as helpful"
          aria-pressed={vote === 'up'}
        >
          <Icon name="thumb_up" />
        </button>
      </span>
      <span className="tooltip-anchor" data-tooltip="Not helpful">
        <button
          className={`feedback-btn${vote === 'down' ? ' active-down' : ''}`}
          onClick={() => castVote('down')}
          aria-label="Mark this insight as not helpful"
          aria-pressed={vote === 'down'}
        >
          <Icon name="thumb_down" />
        </button>
      </span>

      {panelOpen && (
        <div className="feedback-popover">
          <div className="feedback-popover-title">{vote === 'down' ? 'What went wrong?' : 'What worked well?'}</div>
          <div className="feedback-popover-list">
            {reasonOptions.map((r) => (
              <div
                key={r}
                className={`feedback-popover-option${reasons.includes(r) ? ' selected' : ''}`}
                onClick={() => toggleReason(r)}
              >
                <span>{r}</span>
                <span className="feedback-checkbox" />
              </div>
            ))}
          </div>
          {hasOther && (
            <textarea
              className="feedback-other-text"
              placeholder="Tell us more…"
              value={otherText}
              onChange={(e) => setOtherText(e.target.value)}
              rows={2}
              autoFocus
            />
          )}
          <button className="feedback-submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
