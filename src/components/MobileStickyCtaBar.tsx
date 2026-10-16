import React from 'react';
import { ShieldCheck, ArrowRight, Zap, Star } from 'lucide-react';

interface MobileStickyCtaBarProps {
  onOpenBook: () => void;
  statePrice?: string | number;
  stateCode?: string;
}

export const MobileStickyCtaBar: React.FC<MobileStickyCtaBarProps> = ({
  onOpenBook,
  statePrice = 39,
  stateCode = 'CA'
}) => {
  return (
    <aside 
      aria-label="Quick Mobile Booking Bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md text-white border-t border-emerald-500/30 shadow-[0_-8px_25px_rgba(0,0,0,0.3)] px-3 py-2.5 transition-all"
    >
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        {/* Left Side: Value Proposition & Risk Reversal */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 text-emerald-400 text-[11px] font-extrabold uppercase tracking-wider leading-none">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="truncate">Pay only if approved</span>
          </div>
          <div className="text-xs font-bold text-slate-100 flex items-center gap-1.5 mt-0.5 leading-tight">
            <span>Book in 10 min</span>
            <span className="text-slate-400">·</span>
            <span className="text-emerald-400 font-extrabold">${statePrice}</span>
            <span className="text-[10px] text-slate-300 font-medium">({stateCode})</span>
          </div>
        </div>

        {/* Right Side: High-Conversion Instant CTA Button */}
        <button
          type="button"
          onClick={onOpenBook}
          className="shrink-0 px-4 py-2.5 bg-[#008f58] hover:bg-[#007a4a] active:scale-95 text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-950/40 flex items-center gap-1.5 transition-all cursor-pointer"
        >
          <span>Get Your Card</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
