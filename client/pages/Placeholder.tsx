import { Phone, CheckCircle2, Wrench, ShieldCheck, Clock, Droplets, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ReviewsCarousel from "@/components/site/ReviewsCarousel";

interface PlaceholderProps {
  title: string;
}

const reviewsData = [
  {
    name: "Suresh Rao",
    location: "HSR Layout",
    avatar: "/images/person1.png",
    rating: 5,
    text: "My RO stopped filtering on a Sunday morning. The technician arrived in under 45 minutes, replaced the sediment filter and calibrated TDS. Truly 24x7 service!",
  },
  {
    name: "Pooja Hegde",
    location: "Indiranagar",
    avatar: "/images/person2.png",
    rating: 5,
    text: "Transparent pricing and verified technician. He explained the TDS count before and after the repair. Highly recommended for Aquaguard service.",
  },
  {
    name: "Vikram Sharma",
    location: "Whitefield",
    avatar: "/images/person3.png",
    rating: 5,
    text: "Signed up for their annual AMC plan. Prompt periodic visits and free filter replacements when needed. Very courteous staff.",
  },
];

export default function Placeholder({ title }: PlaceholderProps) {
  if (title === "About Us") {
    return (
      <div className="py-10 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-[26px] sm:text-[32px] font-bold text-[#3378a8]">
              About 24x7 RO Service
            </h1>
            <p className="mt-2 text-[14px] text-[#666] max-w-2xl mx-auto">
              Foremost on-demand doorstep RO service, repair, and water purifier installation specialists.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center my-8">
            <div className="space-y-3 text-[14px] text-[#666]">
              <h2 className="text-[20px] font-bold text-[#3378a8]">Pure Water for Every Home</h2>
              <p className="leading-relaxed">
                Founded with a mission to eliminate contaminated water and excessive maintenance charges, 24x7 RO Service brings certified water purification technicians directly to your doorstep within 60 minutes.
              </p>
              <p className="leading-relaxed">
                Whether you live in high-rise apartments or independent houses dealing with hard borewell water, our multi-brand experts ensure your RO, UV, and UF systems maintain ideal mineral balance and safe TDS levels.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="tel:08088275348"
                  className="inline-flex items-center gap-2 rounded bg-[#FFA700] px-6 py-2.5 font-bold text-white text-sm shadow hover:bg-[#e09300] transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Call Now: 08088275348
                </a>
              </div>
            </div>

            <div className="rounded-xl border bg-slate-50 p-5 shadow-sm space-y-3.5">
              <h3 className="font-bold text-[16px] text-slate-800 border-b pb-2">Why Thousands Trust Us</h3>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[#FFA700] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-slate-800">60-Minute Response</h4>
                  <p className="text-xs text-slate-500">Rapid technician dispatch across all major zones.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-[#FFA700] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-slate-800">100% Genuine Spare Parts</h4>
                  <p className="text-xs text-slate-500">Original membrane, carbon filters, pumps, and UV lamps with warranty.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Wrench className="h-5 w-5 text-[#FFA700] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-slate-800">Multi-Brand Certified</h4>
                  <p className="text-xs text-slate-500">Specialized training for Kent, Aquaguard, Pureit, Livpure, Havells &amp; more.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-[#FFA700] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-slate-800">30-Day Service Guarantee</h4>
                  <p className="text-xs text-slate-500">Free re-visit if the same issue recurs within 30 days of service.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-[22px] font-bold text-center text-[#3378a8] mb-6">What Our Customers Say</h2>
            <ReviewsCarousel reviews={reviewsData} />
          </div>
        </div>
      </div>
    );
  }

  if (title === "Services") {
    return (
      <div className="py-10 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-[26px] sm:text-[32px] font-bold text-[#3378a8]">
              Our Professional RO Services
            </h1>
            <p className="mt-1 text-[14px] text-[#666] max-w-2xl mx-auto">
              Doorstep water purifier services with fixed pricing and guaranteed parts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <img src="/images/ic2.png" alt="RO Repair" className="h-12 w-12 mb-3" />
                <h3 className="text-[17px] font-bold text-slate-800">RO Repair &amp; Diagnostics</h3>
                <p className="text-xs sm:text-sm text-[#666] mt-2">
                  Comprehensive troubleshooting for water leakage, low flow, abnormal motor sound, power issues, and high TDS output.
                </p>
                <ul className="mt-3 space-y-1.5 text-xs text-[#666]">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-[#FFA700] shrink-0" /> Full electrical &amp; hydraulic check</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-[#FFA700] shrink-0" /> Booster pump &amp; adapter repair</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-[#FFA700] shrink-0" /> TDS &amp; water quality testing</li>
                </ul>
              </div>
              <div className="mt-5 pt-3 border-t flex items-center justify-between">
                <span className="font-bold text-base text-[#3378a8]">Checkup ₹299*</span>
                <a href="tel:08088275348" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#FFA700] text-white text-xs font-bold hover:bg-[#e09300] transition-colors"><Phone className="h-3 w-3" /> Call 08088275348</a>
              </div>
            </div>

            <div className="rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <img src="/images/ic1.png" alt="Filter Replacement" className="h-12 w-12 mb-3" />
                <h3 className="text-[17px] font-bold text-slate-800">Filter &amp; Membrane Change</h3>
                <p className="text-xs sm:text-sm text-[#666] mt-2">
                  Periodic replacement of spun pre-filters, carbon blocks, sediment candles, and high-rejection TFC RO membranes.
                </p>
                <ul className="mt-3 space-y-1.5 text-xs text-[#666]">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-[#FFA700] shrink-0" /> 100% genuine sealed filters</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-[#FFA700] shrink-0" /> 75/80/100 GPD membranes</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-[#FFA700] shrink-0" /> Post-carbon taste enhancers</li>
                </ul>
              </div>
              <div className="mt-5 pt-3 border-t flex items-center justify-between">
                <span className="font-bold text-base text-[#3378a8]">Starting ₹499</span>
                <a href="tel:08088275348" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#FFA700] text-white text-xs font-bold hover:bg-[#e09300] transition-colors"><Phone className="h-3 w-3" /> Call 08088275348</a>
              </div>
            </div>

            <div className="rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <img src="/images/ic3.png" alt="Installation" className="h-12 w-12 mb-3" />
                <h3 className="text-[17px] font-bold text-slate-800">Installation &amp; Uninstallation</h3>
                <p className="text-xs sm:text-sm text-[#666] mt-2">
                  Safe wall mounting, leak-proof plumbing connectors, pre-filter housing installation, and relocations during shifting.
                </p>
                <ul className="mt-3 space-y-1.5 text-xs text-[#666]">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-[#FFA700] shrink-0" /> Zero water damage installation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-[#FFA700] shrink-0" /> Pressure regulatory valve setup</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-[#FFA700] shrink-0" /> Uninstallation for house moves</li>
                </ul>
              </div>
              <div className="mt-5 pt-3 border-t flex items-center justify-between">
                <span className="font-bold text-base text-[#3378a8]">Starting ₹399</span>
                <a href="tel:08088275348" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#FFA700] text-white text-xs font-bold hover:bg-[#e09300] transition-colors"><Phone className="h-3 w-3" /> Call 08088275348</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (title === "Gallery") {
    return (
      <div className="py-10 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-[26px] sm:text-[32px] font-bold text-[#3378a8]">
              Service Gallery
            </h1>
            <p className="mt-1 text-[14px] text-[#666] max-w-2xl mx-auto">
              Real technician work installing, repairing, and calibrating water purifiers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              { src: "/images/banner-bg.jpg", label: "Kent Grand RO Multi-Stage Servicing" },
              { src: "/images/center-image.png", label: "Booster Pump & Membrane Diagnostics" },
              { src: "/images/banner-mobile.jpg", label: "Pureit Mineral RO Checkup & TDS Calibration" },
              { src: "/images/prof.png", label: "Aquaguard Wall Mounting & Plumbing" },
              { src: "/images/ic1-1.png", label: "Under-Sink Commercial RO Setup" },
              { src: "/images/exp.png", label: "Routine Annual Maintenance Visit" },
            ].map((item, idx) => (
              <div key={idx} className="overflow-hidden rounded-xl border bg-white shadow-sm hover:shadow-md transition-all">
                <div className="h-44 bg-slate-50 flex items-center justify-center p-4">
                  <img src={item.src} alt={item.label} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="p-3 border-t text-center">
                  <h4 className="font-bold text-slate-800 text-xs sm:text-sm">{item.label}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="tel:08088275348"
              className="inline-flex items-center gap-2 rounded bg-[#FFA700] px-6 py-2.5 font-bold text-white text-sm shadow hover:bg-[#FFA700]/90"
            >
              <Phone className="h-4 w-4" />
              Call Now: 08088275348
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 text-center container">
      <h1 className="text-2xl font-bold text-[#3378a8]">{title}</h1>
      <p className="text-[#666] mt-2">Content coming soon.</p>
    </div>
  );
}
