import React from 'react';
import { LocalCityData } from '../data/localSeoData';
import { MapPin, Phone, Building, Clock, ExternalLink } from 'lucide-react';

interface LocalCityMapSectionProps {
  cityData: LocalCityData;
}

export const LocalCityMapSection: React.FC<LocalCityMapSectionProps> = ({ cityData }) => {
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    `${cityData.address.street}, ${cityData.address.city}, ${cityData.address.state} ${cityData.address.zip}`
  )}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${cityData.address.street}, ${cityData.address.city}, ${cityData.address.state} ${cityData.address.zip}`
  )}`;

  return (
    <section 
      id="local-service-area-map" 
      className="py-16 bg-white border-b border-slate-200"
      aria-label={`Local Google Maps Verification for ${cityData.cityName}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#16a34a]" />
              <span>Google Maps Local Entity & Service Area</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {cityData.cityName} Telehealth Service Area & Verification Desk
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Connect with California Medical Board-licensed cannabis physicians serving all residential neighborhoods, zip codes, and licensed dispensaries across <strong>{cityData.cityName}</strong> and the <strong>{cityData.metroArea}</strong>.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={googleMapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer border border-slate-200"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </div>
        </div>

        {/* Two-Column Grid: NAP Details & Responsive Google Maps Iframe */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Card: Local Entity & NAP Verification */}
          <div className="lg:col-span-5 bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200/90 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="border-b border-slate-200/80 pb-4">
                <div className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider mb-1">
                  Verified Local Presence (NAP)
                </div>
                <div className="text-lg font-extrabold text-slate-900">
                  Online MMJ Card — {cityData.cityName} Desk
                </div>
                <div className="text-xs text-slate-500">
                  100% HIPAA-Compliant Telemedicine & Physician Verification
                </div>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-3 text-xs text-slate-700">
                <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 text-[#16a34a] flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Registered Local Service Address</div>
                  <div className="text-slate-600">{cityData.address.street}</div>
                  <div className="text-slate-600">{cityData.address.city}, {cityData.address.state} {cityData.address.zip}</div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                    Geo: {cityData.geo.lat}° N, {cityData.geo.lng}° W
                  </div>
                </div>
              </div>

              {/* Direct Verification Phone */}
              <div className="flex items-start gap-3 text-xs text-slate-700">
                <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 text-[#16a34a] flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Physician & Dispensary Verification Desk</div>
                  <a href={`tel:${cityData.phone.replace(/[^0-9]/g, '')}`} className="font-bold text-[#16a34a] hover:underline">
                    {cityData.phone}
                  </a>
                  <div className="text-[11px] text-slate-500">Toll-Free Patient Line: (888) 420-6789</div>
                </div>
              </div>

              {/* Telehealth Hours */}
              <div className="flex items-start gap-3 text-xs text-slate-700">
                <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 text-[#16a34a] flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Virtual Clinic Operating Hours</div>
                  <div className="text-slate-600">Monday – Sunday: 8:00 AM – 10:00 PM EST</div>
                  <div className="text-[11px] text-emerald-700 font-semibold">Same-Day Digital Rec Guaranteed</div>
                </div>
              </div>
            </div>

            {/* Local Service Delivery Coverage Chips */}
            <div className="pt-4 border-t border-slate-200/80 space-y-2">
              <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                Key {cityData.cityName} Neighborhoods Served:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cityData.popularDispensaryAreas.map((area, i) => (
                  <span 
                    key={i} 
                    className="text-[11px] font-semibold text-slate-700 bg-white border border-slate-200 px-2.5 py-1 rounded-lg"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Card: Responsive Google Maps Iframe */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-slate-100 rounded-3xl border border-slate-200 overflow-hidden shadow-md group">
            <div className="relative w-full h-[360px] sm:h-[420px] lg:h-full min-h-[360px]">
              <iframe
                title={`Google Maps location coverage for ${cityData.cityName}, ${cityData.stateCode}`}
                src={mapEmbedUrl}
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* Sub-bar for Map SEO Citation */}
            <div className="bg-slate-900 text-slate-300 px-5 py-3 text-[11px] flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span className="truncate">
                  Official Telehealth & MMJ Recommendation Service Entity for <strong>{cityData.cityName}, {cityData.stateCode}</strong>
                </span>
              </div>
              <span className="shrink-0 text-slate-400 font-medium hidden sm:inline">
                HIPAA Enforced
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LocalCityMapSection;
