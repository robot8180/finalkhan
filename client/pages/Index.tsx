import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Droplets,
  ShieldCheck,
  Clock,
  Wrench,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ChevronDown,
  MapPin,
  Award,
} from "lucide-react";
import ReviewsCarousel from "@/components/site/ReviewsCarousel";
import { toast } from "sonner";

const reviewsData = [
  {
    name: "Arun Krishnan",
    location: "Koramangala, Bengaluru",
    avatar: "/avatar1.svg",
    rating: 5,
    text: "Called them at 8:30 PM when our RO purifier started leaking heavily. Technician Anand arrived in 40 minutes, replaced the cracked elbow connector and tested the TDS. Super prompt and reasonable!",
  },
  {
    name: "Meera Ramesh",
    location: "HSR Layout, Bengaluru",
    avatar: "/avatar2.svg",
    rating: 5,
    text: "Excellent service for my Kent Grand Plus. Genuine filters were unpacked and installed right in front of me. Water taste is back to crisp and clean. Best RO service in South Bangalore.",
  },
  {
    name: "Siddharth Verma",
    location: "Whitefield, Bengaluru",
    avatar: "/avatar3.svg",
    rating: 5,
    text: "Very reliable team. Have been using their annual maintenance plan for 2 years now. Technicians are polite, professional, and always arrive on schedule.",
  },
  {
    name: "Divya Nair",
    location: "Indiranagar, Bengaluru",
    avatar: "/avatar2.svg",
    rating: 5,
    text: "Our Aquaguard suddenly stopped giving water. The technician diagnosed the booster pump adapter issue quickly, fixed it on the spot, and charged exactly what was quoted on phone.",
  },
];

const problems = [
  {
    icon: Droplets,
    title: "Water Leakage or Dripping",
    desc: "Cracked pipes, loose fittings, or ruptured filter housing causing water accumulation.",
  },
  {
    icon: AlertTriangle,
    title: "Strange Taste or Foul Odor",
    desc: "Exhausted carbon filter or choked membrane allowing foul taste and mineral imbalance.",
  },
  {
    icon: Clock,
    title: "Slow Water Flow / Drops",
    desc: "Clogged sediment candle, low booster pump pressure, or defective flow restrictor.",
  },
  {
    icon: Wrench,
    title: "Vibrations & Loud Noise",
    desc: "Air trapped in system, worn-out booster pump bearings, or excessive inlet pressure.",
  },
  {
    icon: Sparkles,
    title: "Purifier Not Turning On",
    desc: "Faulty SMPS power supply adapter, blown internal fuse, or float valve cutoff failure.",
  },
  {
    icon: ShieldCheck,
    title: "High TDS Level in Water",
    desc: "Membrane pores widened or expired; minerals and dissolved solids passing through.",
  },
];

const brands = [
  { name: "Kent", img: "/purifier1.svg" },
  { name: "Aquaguard", img: "/purifier2.svg" },
  { name: "Pureit", img: "/purifier3.svg" },
  { name: "Livpure", img: "/purifier1.svg" },
  { name: "Havells", img: "/purifier2.svg" },
  { name: "AO Smith", img: "/purifier3.svg" },
  { name: "Blue Star", img: "/purifier1.svg" },
  { name: "LG", img: "/purifier2.svg" },
];

const localities = [
  "Indiranagar", "Koramangala", "HSR Layout", "Whitefield", "Electronic City",
  "BTM Layout", "Marathahalli", "Jayanagar", "JP Nagar", "Bellandur",
  "Sarjapur Road", "Yelahanka", "Hebbal", "Banashankari", "Rajajinagar",
  "Malleshwaram", "Kalyan Nagar", "Richmond Town", "Vimanapura", "Kengeri"
];

const faqs = [
  {
    q: "How fast can a technician reach my home in Bengaluru?",
    a: "We have dedicated mobile technicians stationed across major zones in Bengaluru. On average, a technician reaches your doorstep within 45 to 60 minutes of booking confirmation."
  },
  {
    q: "What are your visiting and inspection charges?",
    a: "Inspection is just ₹199. If you proceed with the suggested repair or filter replacement, this visiting fee is waived or adjusted against your total service bill."
  },
  {
    q: "Do you use 100% genuine spare parts?",
    a: "Yes. All filters, booster pumps, adapters, and RO membranes are factory-sealed, 100% genuine, and opened in front of you with a warranty on new components."
  },
  {
    q: "How often should RO water purifier filters be serviced?",
    a: "Given Bengaluru's high TDS and borewell hardness in areas like Whitefield and Sarjapur, pre-filters should be replaced every 3-4 months, carbon/sediment every 6-9 months, and the RO membrane every 1-2 years."
  },
  {
    q: "Is there a service warranty on repairs?",
    a: "Yes! Every repair and part replacement completed by QuickROFix comes with a 30-day service guarantee. If the same issue recurs within 30 days, we fix it at zero additional cost."
  }
];

export default function Index() {
  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    service: "RO Repair & Checkup",
    locality: "",
  });
  const [booked, setBooked] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!booking.name || !booking.phone) {
      toast.error("Please enter your name and phone number");
      return;
    }
    setBooked(true);
    toast.success("Service request submitted! Our technician will call you in 5 minutes.");
  };

  return (
    <div className="bg-background text-foreground">
      {/* Top Notification Bar */}
      <div className="bg-primary text-white text-xs md:text-sm py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
        <span className="cta-dot shrink-0" />
        <span>Doorstep RO Technicians available right now in Bengaluru</span>
        <a href="tel:+918088275348" className="underline font-bold hover:text-accent">
          Call 08088275348
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-background py-12 md:py-20 border-b">
        <div className="container max-w-6xl grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Hero Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              <span className="cta-dot" />
              <span>Bengaluru's #1 Doorstep Water Purifier Specialist</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Pure Drinking Water, Guaranteed.
              <span className="block text-primary mt-1">Technician at Your Door in 60 Mins.</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Fast, reliable doorstep repair, membrane change, installation, and AMC across Bengaluru. All brands supported: Kent, Aquaguard, Pureit, Livpure &amp; Havells.
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="tel:+918088275348"
                className="inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-accent/20 hover:bg-accent/90 transition-all hover:scale-[1.02]"
                aria-label="Call Now 08088275348"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now: 08088275348</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3.5 text-base font-bold text-primary hover:bg-primary/5 transition-colors"
              >
                Book Inspection (₹199)
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border/80">
              <div className="flex items-center gap-2.5">
                <Clock className="h-5 w-5 text-accent shrink-0" />
                <div>
                  <span className="font-extrabold text-foreground text-sm block">60 Mins</span>
                  <span className="text-xs text-muted-foreground">Doorstep Arrival</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-5 w-5 text-accent shrink-0" />
                <div>
                  <span className="font-extrabold text-foreground text-sm block">100% Genuine</span>
                  <span className="text-xs text-muted-foreground">Spare Parts</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="h-5 w-5 text-accent shrink-0" />
                <div>
                  <span className="font-extrabold text-foreground text-sm block">30-Day</span>
                  <span className="text-xs text-muted-foreground">Warranty</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Droplets className="h-5 w-5 text-accent shrink-0" />
                <div>
                  <span className="font-extrabold text-foreground text-sm block">Free TDS</span>
                  <span className="text-xs text-muted-foreground">Testing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Booking Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border bg-card p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-accent" />
              
              <div className="mb-4">
                <h2 className="text-xl font-extrabold text-foreground">Express Doorstep Booking</h2>
                <p className="text-xs text-muted-foreground mt-1">
                  Get a certified technician dispatched in Bengaluru immediately.
                </p>
              </div>

              {booked ? (
                <div className="text-center py-8 space-y-3">
                  <div className="h-12 w-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold">Booking Confirmed!</h3>
                  <p className="text-xs text-muted-foreground">
                    Technician will reach out to {booking.phone} shortly.
                  </p>
                  <a
                    href="tel:+918088275348"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline"
                  >
                    Need faster help? Call 08088275348
                  </a>
                </div>
              ) : (
                <form onSubmit={handleBooking} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={booking.name}
                      onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={booking.phone}
                      onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">Select Service</label>
                    <select
                      value={booking.service}
                      onChange={(e) => setBooking({ ...booking, service: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="RO Repair & Checkup">RO Repair &amp; Diagnostics (₹199)</option>
                      <option value="Filter / Membrane Change">Filter &amp; Membrane Change</option>
                      <option value="Installation / Relocation">Installation / Relocation</option>
                      <option value="Annual Maintenance (AMC)">Annual Maintenance (AMC)</option>
                      <option value="Emergency Breakdown">Emergency Breakdown</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">Area in Bengaluru</label>
                    <input
                      type="text"
                      placeholder="e.g. Koramangala 4th Block"
                      value={booking.locality}
                      onChange={(e) => setBooking({ ...booking, locality: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 rounded-lg bg-accent py-3 font-bold text-white text-sm shadow hover:bg-accent/90 transition-colors"
                  >
                    Confirm Doorstep Visit
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-1">
                    <span>⚡ 60-min express arrival</span>
                    <span>🔒 Safe &amp; verified technicians</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Common RO Problems We Fix */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">Fast Troubleshooting</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mt-2">
              Common Water Purifier Issues We Fix
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              Don't compromise your family's health with substandard water. Our technicians identify and resolve problems within minutes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {problems.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="reveal rounded-xl border bg-card p-6 shadow-sm hover:border-primary/50 hover:shadow-md transition-all flex flex-col justify-between"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <div>
                    <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-bold text-foreground text-base">{p.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t flex items-center justify-between text-xs">
                    <span className="text-primary font-semibold">Fixed in 1 Visit</span>
                    <a href="tel:+918088275348" className="text-accent font-bold hover:underline">
                      Call Tech &rarr;
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-muted/20 border-y">
        <div className="container max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">Transparent Pricing</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mt-2">
              Professional RO Services
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              Fixed rate cards, no surprises. Genuine brand spares with invoice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="rounded-2xl border bg-card p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <img src="/service-1.svg" alt="Service 1" className="h-14 w-14 mb-4" />
                <h3 className="text-xl font-bold text-foreground">RO Repair &amp; Diagnostics</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Complete health checkup of membrane, motor pump, solenoid valve, electrical adapter, and filtration stages.
                </p>
                <div className="mt-4 space-y-2 text-xs sm:text-sm text-foreground/80">
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> Free TDS &amp; pH water analysis</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> Leakage &amp; pipe repair</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> 30-Day service warranty</div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t flex items-center justify-between">
                <div>
                  <span className="text-xs text-muted-foreground block">Inspection</span>
                  <span className="text-lg font-black text-primary">₹199</span>
                </div>
                <a href="tel:+918088275348" className="rounded-lg bg-accent px-4 py-2 text-xs font-bold text-white hover:bg-accent/90">
                  Book Now
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border-2 border-primary/40 bg-card p-6 sm:p-8 shadow-md relative flex flex-col justify-between">
              <span className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-0.5 text-[11px] font-bold text-white uppercase tracking-wider">
                Most Popular
              </span>
              <div>
                <img src="/service-2.svg" alt="Service 2" className="h-14 w-14 mb-4" />
                <h3 className="text-xl font-bold text-foreground">Filter &amp; Membrane Kit</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Complete rejuvenation for choked purifiers. High-rejection TFC membrane and micron sediment/carbon block filters.
                </p>
                <div className="mt-4 space-y-2 text-xs sm:text-sm text-foreground/80">
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> 75 / 80 / 100 GPD Membranes</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> Spun pre-filter + Carbon blocks</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> Mineral cartridge taste enhancer</div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t flex items-center justify-between">
                <div>
                  <span className="text-xs text-muted-foreground block">Starting at</span>
                  <span className="text-lg font-black text-primary">₹499</span>
                </div>
                <a href="tel:+918088275348" className="rounded-lg bg-accent px-4 py-2 text-xs font-bold text-white hover:bg-accent/90">
                  Book Now
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border bg-card p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <img src="/service-3.svg" alt="Service 3" className="h-14 w-14 mb-4" />
                <h3 className="text-xl font-bold text-foreground">Installation &amp; AMC</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Safe wall installation, uninstallation during house shifting, and 1-year all-inclusive Annual Maintenance Contracts.
                </p>
                <div className="mt-4 space-y-2 text-xs sm:text-sm text-foreground/80">
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> Safe masonry drilling &amp; wall mounting</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> 3 Mandatory periodic visits in AMC</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> Unlimited breakdown visits covered</div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t flex items-center justify-between">
                <div>
                  <span className="text-xs text-muted-foreground block">AMC from</span>
                  <span className="text-lg font-black text-primary">₹1,999/yr</span>
                </div>
                <a href="tel:+918088275348" className="rounded-lg bg-accent px-4 py-2 text-xs font-bold text-white hover:bg-accent/90">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Supported */}
      <section className="py-14 bg-white">
        <div className="container max-w-6xl">
          <h3 className="text-center text-sm font-bold uppercase tracking-wider text-muted-foreground mb-8">
            Expert Technicians For All Major Purifier Brands
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 items-center">
            {brands.map((b, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-3 rounded-xl border bg-muted/10 hover:border-primary/40 transition-colors"
              >
                <img src={b.img} alt={b.name} className="h-12 w-12 object-contain mb-1.5" />
                <span className="text-xs font-bold text-foreground">{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50/50 to-white border-y">
        <div className="container max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">Customer Testimonials</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mt-2">
              Loved by 15,000+ Homes in Bengaluru
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              See what your neighbors in Indiranagar, Koramangala, Whitefield, and HSR Layout have to say.
            </p>
          </div>

          <ReviewsCarousel reviews={reviewsData} />
        </div>
      </section>

      {/* Coverage Areas in Bengaluru */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">Doorstep Reach</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-2">
              Serving All Areas Across Bengaluru
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Our service vans and field technicians operate in every neighborhood.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
            {localities.map((loc, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 rounded-full bg-muted/40 px-3.5 py-1.5 text-xs font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
              >
                <MapPin className="h-3 w-3 text-accent" />
                {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 bg-muted/20 border-t">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">Got Questions?</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="rounded-xl border bg-card overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 text-left font-bold text-foreground text-sm hover:bg-muted/10 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Bottom Call Banner */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-12 px-4">
        <div className="container max-w-4xl text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Need Quick RO Service Today?</h2>
          <p className="text-blue-100 max-w-lg mx-auto text-sm">
            Speak directly with our Bengaluru dispatch coordinator. We will have a certified technician at your home in under 60 minutes.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+918088275348"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-base font-extrabold text-white shadow-lg hover:bg-accent/90 transition-all hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Call Now: 08088275348
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 px-6 py-3.5 text-base font-bold text-white hover:bg-white/10 transition-colors"
            >
              Book Service Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
