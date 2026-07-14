import { useEffect, useRef } from 'react';
import { CQA_PAGES, trackTimeSpentC3 } from './analytics';

export function useQpAnalyticsTimeSpent(active) {
  const enteredAt = useRef(null);

  useEffect(() => {
    if (!active) {
      enteredAt.current = null;
      return undefined;
    }

    enteredAt.current = Date.now();

    return () => {
      if (!enteredAt.current) return;
      const elapsedMs = Date.now() - enteredAt.current;
      const minutes = Math.round((elapsedMs / 60000) * 10) / 10;
      if (minutes >= 0.1) {
        trackTimeSpentC3({
          route: CQA_PAGES.QP_ANALYTICS,
          minutes,
        });
      }
    };
  }, [active]);
}
