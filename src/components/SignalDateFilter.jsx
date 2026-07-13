import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import { fortnightPeriods } from '../cxoData';

// Styled against the real Signal design system tokens exported to
// signal-fig/fig-tokens.css in the original handoff bundle (no live Figma
// component to reference, so this follows Signal's outlined-input /
// dropdown-menu color tokens directly — see the --signal-* vars in index.css).
export default function SignalDateFilter({ selectedId, onChange }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const selected = fortnightPeriods.find((p) => p.id === selectedId) || fortnightPeriods[0];

  useEffect(() => {
    if (!open) return;
    const handleClick = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    const handleKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [open]);

  return (
    <div className="signal-date-filter" ref={rootRef}>
      <button
        type="button"
        className={`signal-filter-btn${open ? ' open' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Icon name="calendar_month" />
        <span>{selected.label}</span>
        <Icon name="expand_more" className={`signal-filter-chevron${open ? ' open' : ''}`} />
      </button>
      {open && (
        <div className="signal-filter-menu" role="listbox">
          <div className="signal-filter-menu-label">Fortnightly report period</div>
          {fortnightPeriods.map((p) => (
            <div
              key={p.id}
              role="option"
              aria-selected={p.id === selectedId}
              className={`signal-filter-option${p.id === selectedId ? ' selected' : ''}`}
              onClick={() => {
                onChange(p.id);
                setOpen(false);
              }}
            >
              <span>{p.label}</span>
              {p.id === selectedId && <Icon name="check" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
