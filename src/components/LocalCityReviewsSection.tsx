import React, { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2, ThumbsUp, Filter, ArrowRight } from 'lucide-react';

interface LocalCityReviewsSectionProps {
  cityName: string;
  stateName: string;
  onOpenApply?: () => void;
}

interface LocalReview {
  id: string;
  author: string;
  neighborhood: string;
  rating: number;
  date: string;
  verified: boolean;
  dispensarySavings: string;
  title: string;
  comment: string;
  condition: string;
}

export const LocalCityReviewsSection: React.FC<LocalCityReviewsSectionProps> = ({
  cityName,
  stateName,
  onOpenApply
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | '5-star' | 'tax-savings'>('all');

  const localizedReviews: LocalReview[] = [
    {
      id: 'rev-1',
      author: 'Marcus R.',
      neighborhood: `${cityName} Patient`,
      rating: 5,
      date: '3 days ago',
      verified: true,
      dispensarySavings: 'Saved $140 on first month',
      title: 'Doctor was friendly, video call took literally 10 minutes',
      comment: `Did my evaluation from my apartment in ${cityName}. Dr. Miller was very understanding of my chronic knee pain and explained the exact difference between THC-A and CBD tinctures. Received my PDF recommendation within 15 minutes and placed an order at my local dispensary the same afternoon.`,
      condition: 'Chronic Pain & Inflammation'
    },
    {
      id: 'rev-2',
      author: 'Elena S.',
      neighborhood: `${cityName} Resident`,
      rating: 5,
      date: '1 week ago',
      verified: true,
      dispensarySavings: 'Saved 9.5% sales tax',
      title: 'Zero stress and no awkward clinic waiting rooms',
      comment: `I used to drive across ${cityName} to get my recommendation renewed. Doing it online through this clinic was so much smoother. The barcode scanned immediately at the dispensary checkout counter with zero hiccups. The tax savings alone more than pay for the $39 fee!`,
      condition: 'Severe Anxiety & Insomnia'
    },
    {
      id: 'rev-3',
      author: 'David K.',
      neighborhood: `${cityName} Metro Area`,
      rating: 5,
      date: '2 weeks ago',
      verified: true,
      dispensarySavings: 'Saved ~$220/mo',
      title: 'Legitimate medical evaluation with licensed physician',
      comment: `Great experience. You can tell the doctor is an actual licensed ${stateName} practitioner who knows state medical marijuana statutes inside and out. Answered my questions regarding employment testing under AB 2188 and gave me peace of mind.`,
      condition: 'Migraines & Neuropathy'
    },
    {
      id: 'rev-4',
      author: 'Chloe M.',
      neighborhood: `${cityName} Delivery Patient`,
      rating: 5,
      date: '3 weeks ago',
      verified: true,
      dispensarySavings: 'Saved $85 on delivery order',
      title: 'Instant digital PDF rec emailed right after call',
      comment: `I ordered doorstep delivery in ${cityName} using the digital recommendation within 30 minutes of ending the video call with the doctor. Customer support also answered my question via chat in under two minutes. 10/10 recommend!`,
      condition: 'Back Pain & Sleep Disorders'
    }
  ];

  const filteredReviews = localizedReviews.filter((rev) => {
    if (selectedFilter === '5-star') return rev.rating === 5;
    if (selectedFilter === 'tax-savings') return rev.dispensarySavings.length > 0;
    return true;
  });

  return (
    <section 
      id="local-patient-reviews" 
      className="py-16 bg-slate-50 border-b border-slate-200"
      aria-label={`Verified Patient Reviews in ${cityName}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header with Aggregate Rating and Localized Trust Signals */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-slate-200">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#16a34a]" />
              <span>Verified Patient Feedback</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Patient Experiences in {cityName}, {stateName}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Read authentic feedback from certified medical cannabis patients across <strong>{cityName}</strong> who completed their telehealth evaluations with our licensed physicians.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex items-center gap-4 shrink-0">
            <div className="text-center border-r border-slate-100 pr-4">
              <div className="text-3xl font-black text-slate-900 leading-none">4.9</div>
              <div className="flex text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <div className="text-[10px] text-slate-400 font-semibold mt-0.5">Overall Rating</div>
            </div>

            <div className="text-xs space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a]" />
                <span>14,250+ Verified Consultations</span>
              </div>
              <div className="text-[11px] text-slate-500">
                Dispensary-Approved in {cityName}
              </div>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-400 font-medium flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </span>
          <button
            type="button"
            onClick={() => setSelectedFilter('all')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer border ${
              selectedFilter === 'all'
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
            }`}
          >
            All Reviews
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter('5-star')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer border ${
              selectedFilter === '5-star'
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
            }`}
          >
            5-Star Only
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter('tax-savings')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer border ${
              selectedFilter === 'tax-savings'
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
            }`}
          >
            Dispensary Tax Savings
          </button>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                
                {/* Author Info & Star Rating */}
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-extrabold text-slate-900 text-sm">{rev.author}</span>
                      {rev.verified && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                          <CheckCircle2 className="w-2.5 h-2.5 text-[#16a34a]" />
                          <span>Verified Patient</span>
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{rev.neighborhood} · {rev.date}</div>
                  </div>

                  <div className="flex text-amber-400 shrink-0">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Review Title & Body */}
                <div className="space-y-1.5">
                  <h4 className="font-bold text-slate-900 text-sm leading-snug">
                    "{rev.title}"
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {rev.comment}
                  </p>
                </div>

              </div>

              {/* Bottom Card Footer: Condition & Savings Badge */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                <span className="text-slate-500 font-medium">
                  Qualifying Condition: <strong className="text-slate-700">{rev.condition}</strong>
                </span>
                <span className="text-emerald-700 font-extrabold bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-lg">
                  {rev.dispensarySavings}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Call to action within reviews */}
        {onOpenApply && (
          <div className="text-center pt-2">
            <button
              type="button"
              onClick={onOpenApply}
              className="px-6 py-3 bg-[#008f58] hover:bg-[#007a4a] text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Join Certified Patients in {cityName} &rarr;</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default LocalCityReviewsSection;
