import React, { useRef, useState, useEffect } from 'react';
import { 
  ShieldCheck, Stethoscope, Lock, Zap, CheckCircle2, 
  Scale, Smartphone, DollarSign, ChevronLeft, ChevronRight, Award 
} from 'lucide-react';

interface TrustBadgeItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  badgeTag: string;
  highlight?: string;
}

export const TrustBadgesCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const trustBadges: TrustBadgeItem[] = [
    {
      id: 'hipaa',
      icon: <Lock className="w-5 h-5 text-emerald-600" />,
      title: '100% HIPAA Compliant',
      subtitle: '256-Bit Encrypted Telehealth Portal',
      badgeTag: 'Federal Privacy Standard',
      highlight: 'Confidential Records'
    },
    {
      id: 'licensed-physicians',
      icon: <Stethoscope className="w-5 h-5 text-emerald-600" />,
      title: 'State-Licensed Physicians',
      subtitle: 'Board-Certified Medical Doctors (MD & DO)',
      badgeTag: 'Medical Board Verified',
      highlight: '9–20 Years Clinical Exp.'
    },
    {
      id: 'secure-checkout',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      title: 'Secure Checkout & Risk Reversal',
      subtitle: 'Pay Only If Approved · Full Money-Back Guarantee',
      badgeTag: 'FTC Compliant Guarantee',
      highlight: 'Zero Risk'
    },
    {
      id: 'same-day-digital',
      icon: <Zap className="w-5 h-5 text-emerald-600" />,
      title: 'Same-Day Digital Delivery',
      subtitle: 'Instant Signed PDF Recommendation & 24/7 Barcode',
      badgeTag: 'Immediate Verification',
      highlight: 'Email Delivery'
    },
    {
      id: 'dispensary-accepted',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
      title: 'Dispensary & Delivery Accepted',
      subtitle: '100% Valid at All Licensed Retailers Statewide',
      badgeTag: 'Statewide Recognition',
      highlight: 'Prop 215 & Prop 64'
    },
    {
      id: 'tax-exemption',
      icon: <Scale className="w-5 h-5 text-emerald-600" />,
      title: 'Cannabis Tax Exemption',
      subtitle: 'Exempt From Local & State Sales Taxes (Save Up to 34.5%)',
      badgeTag: 'Rev & Tax Code § 34011',
      highlight: 'Save $1,200+/Year'
    },
    {
      id: 'no-waiting-rooms',
      icon: <Smartphone className="w-5 h-5 text-emerald-600" />,
      title: 'No Waiting Rooms',
      subtitle: '100% Online Video & Phone Telehealth From Home',
      badgeTag: '10-15 Min Visit',
      highlight: 'Any Device'
    },
    {
      id: 'statutory-rights',
      icon: <Award className="w-5 h-5 text-emerald-600" />,
      title: 'AB 2188 Patient Rights',
      subtitle: 'California Statutory Protection for Off-Duty Patients',
      badgeTag: 'State Legal Protections',
      highlight: 'Cultivation Up to 99 Plants'
    }
  ];

  // Update scroll navigation indicators
  const checkScrollState = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScrollState, { passive: true });
    checkScrollState();
    return () => el.removeEventListener('scroll', checkScrollState);
  }, []);

  // Smooth scroll handler
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const distance = 320;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -distance : distance,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      aria-label="Medical Credentials and Trust Certifications"
      className="w-full mt-10 pt-6 border-t border-slate-100 relative group/carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header with Title and Nav Buttons */}
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse" />
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
            Verified E-E-A-T Medical & Legal Credentials
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-emerald-50 text-[10px] font-bold text-emerald-700 border border-emerald-200">
            State-Compliant Telehealth
          </span>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll trust badges left"
            className="w-7 h-7 rounded-full bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-600 disabled:opacity-30 disabled:pointer-events-none transition-colors flex items-center justify-center cursor-pointer border border-slate-200"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Scroll trust badges right"
            className="w-7 h-7 rounded-full bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-600 disabled:opacity-30 disabled:pointer-events-none transition-colors flex items-center justify-center cursor-pointer border border-slate-200"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Scrolling Badges Container */}
      <div className="relative">
        {/* Left Fade Gradient Mask */}
        <div 
          className={`absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none z-10 transition-opacity ${
            canScrollLeft ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Badges Track */}
        <div
          ref={scrollContainerRef}
          tabIndex={0}
          role="region"
          aria-label="Trust Badges Carousel Track"
          className="flex items-stretch gap-3 overflow-x-auto scrollbar-none py-1 px-1 snap-x snap-mandatory scroll-smooth focus:outline-none focus:ring-1 focus:ring-emerald-400 rounded-xl"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {trustBadges.map((badge) => (
            <div
              key={badge.id}
              className="flex-shrink-0 w-[270px] sm:w-[290px] snap-start bg-slate-50/80 hover:bg-emerald-50/40 border border-slate-200/90 hover:border-emerald-300 rounded-2xl p-3.5 transition-all duration-200 flex flex-col justify-between group shadow-2xs hover:shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 group-hover:border-emerald-300 group-hover:bg-emerald-50 flex items-center justify-center shrink-0 shadow-2xs transition-colors">
                    {badge.icon}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/70 border border-emerald-200 px-2 py-0.5 rounded-full truncate">
                    {badge.badgeTag}
                  </span>
                </div>

                <h3 className="text-xs sm:text-[13px] font-extrabold text-slate-900 group-hover:text-emerald-950 transition-colors leading-snug">
                  {badge.title}
                </h3>
                <p className="text-[11px] text-slate-600 leading-relaxed mt-1 line-clamp-2">
                  {badge.subtitle}
                </p>
              </div>

              {badge.highlight && (
                <div className="pt-2.5 mt-2.5 border-t border-slate-200/60 flex items-center gap-1.5 text-[10px] font-bold text-slate-700">
                  <CheckCircle2 className="w-3 h-3 text-[#16a34a] shrink-0" />
                  <span className="truncate">{badge.highlight}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Fade Gradient Mask */}
        <div 
          className={`absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none z-10 transition-opacity ${
            canScrollRight ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </section>
  );
};
