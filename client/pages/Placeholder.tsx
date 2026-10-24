import { Phone, CheckCircle2, Wrench, ShieldCheck, Clock, Droplets, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ReviewsCarousel from "@/components/site/ReviewsCarousel";

interface PlaceholderProps {
  title: string;
}

const reviewsData = [
  {
    name: "Suresh Rao",
    location: "HSR Layout, Bengaluru",
    avatar: "/avatar1.svg",
    rating: 5,
    text: "My Kent RO stopped filtering on a Sunday morning. The technician arrived in under 45 minutes, replaced the sediment filter and calibrated TDS. Truly 24x7 service!",
  },
  {
    name: "Pooja Hegde",
    location: "Indiranagar, Bengaluru",
    avatar: "/avatar2.svg",
    rating: 5,
    text: "Transparent pricing and verified technician. He explained the TDS count before and after the repair. Highly recommended for Aquaguard service.",
  },
  {
    name: "Vikram Sharma",
    location: "Whitefield, Bengaluru",
    avatar: "/avatar3.svg",
    rating: 5,
    text: "Signed up for their annual AMC plan. Prompt periodic visits and free filter replacements when needed. Very courteous staff.",
  },
];

export default function Placeholder({ title }: PlaceholderProps) {
  if (title === "About Us") {
    return (
      <div className="py-12 md:py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
              <Droplets className="h-3.5 w-3.5 text-accent" />
              Trusted Water Purification Experts
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mt-4 tracking-tight">
              About QuickROFix
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Bengaluru's foremost on-demand RO service, repair, and water purifier installation specialists.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center my-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">Pure Water for Every Bengaluru Home</h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded with a mission to eliminate contaminated water and high service costs, QuickROFix brings certified water purification technicians directly to your doorstep within 60 minutes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you live in high-rise apartments dealing with hard borewell water or central Bengaluru with municipal supply, our multi-brand experts ensure your RO, UV, and UF systems maintain ideal mineral balance and safe TDS levels.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="tel:+918088275348"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-white shadow hover:bg-accent/90"
                >
                  <Phone className="h-4 w-4" />
                  Call 08088275348
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 font-semibold text-primary hover:bg-primary/5"
                >
                  Book Online
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border bg-card p-6 shadow-sm space-y-4">
              <h3 className="font-bold text-lg text-foreground border-b pb-3">Why Thousands Trust Us</h3>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm">60-Minute Response</h4>
                  <p className="text-xs text-muted-foreground">Rapid dispatch across East, West, North, and South Bengaluru.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm">100% Genuine Spare Parts</h4>
                  <p className="text-xs text-muted-foreground">Original membrane, carbon filters, pumps, and UV lamps with warranty.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Wrench className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm">Multi-Brand Certified</h4>
                  <p className="text-xs text-muted-foreground">Specialized training for Kent, Aquaguard, Pureit, Livpure, Havells &amp; more.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm">30-Day Service Guarantee</h4>
                  <p className="text-xs text-muted-foreground">Free re-visit if the same issue recurs within 30 days of service.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">What Our Customers Say</h2>
            <ReviewsCarousel reviews={reviewsData} />
          </div>
        </div>
      </div>
    );
  }

  if (title === "Services") {
    return (
      <div className="py-12 md:py-20 bg-background">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
              <Wrench className="h-3.5 w-3.5 text-accent" />
              Complete Water Purifier Solutions
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mt-4 tracking-tight">
              Our Professional RO Services
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparent, doorstep water purifier services across Bengaluru with fixed pricing and guaranteed parts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <img src="/service-1.svg" alt="RO Repair" className="h-16 w-16 mb-4" />
                <h3 className="text-xl font-bold text-foreground">RO Repair &amp; Diagnostics</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Comprehensive troubleshooting for water leakage, low flow, abnormal motor sound, power issues, and high TDS output.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> Full electrical &amp; hydraulic check</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> Booster pump &amp; adapter repair</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> TDS &amp; water quality testing</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t flex items-center justify-between">
                <span className="font-extrabold text-lg text-primary">Visiting ₹199</span>
                <a href="tel:+918088275348" className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-semibold hover:bg-accent/90">Book Now</a>
              </div>
            </div>

            <div className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <img src="/service-2.svg" alt="Filter Replacement" className="h-16 w-16 mb-4" />
                <h3 className="text-xl font-bold text-foreground">Filter &amp; Membrane Change</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Periodic replacement of spun pre-filters, carbon blocks, sediment candles, and high-rejection TFC RO membranes.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> 100% genuine sealed filters</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> 75/80/100 GPD membranes</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> Post-carbon taste enhancers</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t flex items-center justify-between">
                <span className="font-extrabold text-lg text-primary">Starting ₹499</span>
                <a href="tel:+918088275348" className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-semibold hover:bg-accent/90">Book Now</a>
              </div>
            </div>

            <div className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <img src="/service-3.svg" alt="Installation" className="h-16 w-16 mb-4" />
                <h3 className="text-xl font-bold text-foreground">Installation &amp; Uninstallation</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Safe wall mounting, leak-proof plumbing connectors, pre-filter housing installation, and relocations during shifting.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> Zero water damage installation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> Pressure regulatory valve setup</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> Uninstallation for house moves</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t flex items-center justify-between">
                <span className="font-extrabold text-lg text-primary">Starting ₹399</span>
                <a href="tel:+918088275348" className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-semibold hover:bg-accent/90">Book Now</a>
              </div>
            </div>
          </div>

          {/* AMC Section */}
          <div className="mt-16 rounded-2xl bg-primary/5 border border-primary/20 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-accent font-bold uppercase text-xs tracking-wider">Hassle-Free Protection</span>
                <h2 className="text-2xl md:text-3xl font-extrabold mt-1 text-foreground">Annual Maintenance Contract (AMC)</h2>
                <p className="mt-3 text-muted-foreground">
                  Never worry about water quality again. Our comprehensive AMC plans cover scheduled service visits, periodic filter replacements, emergency breakdown calls, and genuine spare parts coverage.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a href="tel:+918088275348" className="rounded-full bg-accent px-6 py-3 font-semibold text-white hover:bg-accent/90">
                    Get AMC Quote
                  </a>
                  <Link to="/contact" className="rounded-full border border-primary px-6 py-3 font-semibold text-primary hover:bg-primary/5">
                    Request Call Back
                  </Link>
                </div>
              </div>
              <div className="space-y-3 bg-white p-6 rounded-xl shadow-sm border">
                <h4 className="font-bold text-foreground">Every AMC Includes:</h4>
                <div className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-accent" /> 3 Mandatory Routine Service Visits per Year</div>
                <div className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-accent" /> Complete Set of Filters (Sediment + Carbon)</div>
                <div className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-accent" /> High-Performance RO Membrane Replacement</div>
                <div className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-accent" /> Unlimited Breakdown Support Visits</div>
                <div className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-accent" /> Priority Dispatch within 60 Minutes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (title === "Gallery") {
    return (
      <div className="py-12 md:py-20 bg-background">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
              <Droplets className="h-3.5 w-3.5 text-accent" />
              Real Technician Work in Bengaluru
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mt-4 tracking-tight">
              Service Gallery
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Take a look at our professional technicians at work installing, maintaining, and calibrating RO purifiers across the city.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { src: "/gallery1.svg", label: "Kent Grand RO Installation", loc: "Whitefield, Bengaluru" },
              { src: "/gallery2.svg", label: "Aquaguard Multi-Stage Membrane Change", loc: "Indiranagar, Bengaluru" },
              { src: "/gallery3.svg", label: "Commercial RO Water Plant Service", loc: "Electronic City, Bengaluru" },
              { src: "/purifier1.svg", label: "Pureit Mineral RO Repair & TDS Tuning", loc: "Koramangala, Bengaluru" },
              { src: "/purifier2.svg", label: "Livpure Under-Sink RO Unit Setup", loc: "HSR Layout, Bengaluru" },
              { src: "/purifier3.svg", label: "Havells Copper Alkaline RO Servicing", loc: "Bellandur, Bengaluru" },
            ].map((item, idx) => (
              <div key={idx} className="group overflow-hidden rounded-2xl border bg-card shadow-sm hover:shadow-md transition-all">
                <div className="h-48 bg-muted/20 flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-300">
                  <img src={item.src} alt={item.label} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="p-4 bg-white border-t">
                  <h4 className="font-semibold text-foreground text-sm">{item.label}</h4>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                    <MapPin className="h-3 w-3 text-accent" />
                    <span>{item.loc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground">Need quick doorstep assistance for your water purifier?</p>
            <a
              href="tel:+918088275348"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-white shadow hover:bg-accent/90"
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
    <div className="py-20 text-center container">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-muted-foreground mt-2">Content coming soon.</p>
    </div>
  );
}
