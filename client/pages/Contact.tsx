import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Contact() {
  return (
    <div className="py-10 bg-white">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-[26px] sm:text-[32px] font-bold text-[#3378a8]">
            Contact &amp; Customer Support
          </h1>
          <p className="mt-1 text-[14px] text-[#666] max-w-2xl mx-auto">
            Doorstep water purifier service across all areas. Call our helpline directly for rapid dispatch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* Main Calling Card */}
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-sky-50/50 to-white p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-[#FFA700] text-white flex items-center justify-center shadow">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#3378a8] uppercase tracking-wider block">Immediate Dispatch</span>
                  <h2 className="text-xl font-bold text-slate-800">24x7 Service Hotline</h2>
                </div>
              </div>

              <p className="text-sm text-[#666] leading-relaxed mb-6">
                Our technicians are stationed locally. Call our direct line to explain your water purifier issue and schedule an on-demand visit within 60 minutes.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                  <span>Doorstep inspection at just ₹299*</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                  <span>Kent, Aquaguard, Pureit, Livpure &amp; all brands</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                  <span>100% Genuine spare parts with 30-day warranty</span>
                </div>
              </div>
            </div>

            <a
              href="tel:08088275348"
              className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#FFA700] py-3.5 px-6 font-extrabold text-white text-[17px] shadow-lg hover:bg-[#e09300] transition-all hover:scale-[1.02] active:scale-95 text-center"
              aria-label="Call 08088275348"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now: 08088275348</span>
            </a>
          </div>

          {/* Operational Details Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-800 border-b pb-3 mb-4">
                Service Information
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-[#3378a8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-800 text-[14px]">Working Hours</strong>
                    <span className="text-xs text-[#666]">Open 24 Hours / 7 Days a Week (including Sundays &amp; Holidays)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-[#3378a8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-800 text-[14px]">Email Support</strong>
                    <a href="mailto:service@24x7roservice.co.in" className="text-xs text-[#3378a8] hover:underline">
                      service@24x7roservice.co.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#3378a8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-800 text-[14px]">Doorstep Coverage</strong>
                    <span className="text-xs text-[#666]">Doorstep service available across Bengaluru and nearby areas.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-[#3378a8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-800 text-[14px]">Emergency Assistance</strong>
                    <span className="text-xs text-[#666]">Water leakage, bad smell, motor vibration, or purifier not starting.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t text-center">
              <span className="text-xs text-[#666] block mb-2">Need immediate assistance?</span>
              <a
                href="tel:08088275348"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#FFA700] hover:text-[#3378a8] hover:underline"
              >
                <Phone className="h-4 w-4" />
                <span>Direct Line: 08088275348</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
