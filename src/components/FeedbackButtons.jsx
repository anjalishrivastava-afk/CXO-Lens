import { useState } from 'react';
import Icon from './Icon';
import { trackInsightFeedback } from '../analytics';

export default function FeedbackButtons({ view, section, insightId }) {
  const [vote, setVote] = useState(null);

  const handleVote = (v) => {
    if (vote === v) return;
    setVote(v);
    trackInsightFeedback({ view, section, insightId, vote: v });
  };

  return (
    <div className="feedback-buttons">
      <span className="tooltip-anchor" data-tooltip="Helpful">
        <button
          className={`feedback-btn${vote === 'up' ? ' active-up' : ''}`}
          onClick={() => handleVote('up')}
          aria-label="Mark this insight as helpful"
          aria-pressed={vote === 'up'}
        >
          <Icon name="thumb_up" />
        </button>
      </span>
      <span className="tooltip-anchor" data-tooltip="Not helpful">
        <button
          className={`feedback-btn${vote === 'down' ? ' active-down' : ''}`}
          onClick={() => handleVote('down')}
          aria-label="Mark this insight as not helpful"
          aria-pressed={vote === 'down'}
        >
          <Icon name="thumb_down" />
        </button>
      </span>
    </div>
  );
}
