import { useState } from "react";
import { Phone, ChevronDown } from "lucide-react";

function TickIcon() {
  return (
    <svg
      className="w-[18px] h-[18px] fill-[#FFA700] shrink-0 mt-0.5"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M506.231,75.508c-7.689-7.69-20.158-7.69-27.849,0l-319.21,319.211L33.617,269.163c-7.689-7.691-20.158-7.691-27.849,0 c-7.69,7.69-7.69,20.158,0,27.849l139.481,139.481c7.687,7.687,20.16,7.689,27.849,0l333.133-333.136 C513.921,95.666,513.921,83.198,506.231,75.508z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="w-4 h-4 fill-[#FFA700]" viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-white text-[#666] font-['Poppins',sans-serif]">
      {/* 1. HERO BANNER SECTION (Copied exactly from 24x7roservice.co.in) */}
      <section id="banner" className="py-6 sm:py-10 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-4">
              <h1 className="text-[26px] sm:text-[34px] lg:text-[40px] text-[#3378a8] font-normal leading-[1.2]">
                Get <strong className="font-bold text-[#3378a8]">RO Service Technician</strong> at Your Doorstep
              </h1>

              {/* Offer Callout */}
              <div className="banOffer pt-1 pb-1">
                <span className="text-[14px] sm:text-[15px] text-[#666] block leading-none mb-1">
                  at Just
                </span>
                <div className="text-[26px] sm:text-[34px] font-bold text-[#FFA700] leading-tight">
                  <span className="text-[#666] text-[20px] sm:text-[24px] font-normal mr-2">
                    ₹ 399
                  </span>
                  ₹ 299*
                </div>
              </div>

              {/* Bullet Features */}
              <ul className="space-y-2.5 pt-1">
                {[
                  "Includes Full Water Purifier Checkup",
                  "Service & spare part charges extra as per rate card",
                  "Save Upto 50% on Annual Maintainence (AMC)",
                  "Branded & Non-Branded RO Authentic Service",
                  "Installation, Repair & Relocation Services",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[15px] sm:text-[16px] text-[#666]">
                    <TickIcon />
                    <p className="leading-snug">{item}</p>
                  </li>
                ))}
              </ul>

              {/* Calling CTA (Only Calling CTA) */}
              <div className="pt-3 flex items-center gap-3">
                <a
                  href="tel:08088275348"
                  className="inline-flex items-center gap-2.5 rounded-lg bg-[#FFA700] px-7 py-3.5 text-[17px] font-bold text-white shadow-lg shadow-[#FFA700]/30 hover:bg-[#e09300] transition-all hover:scale-[1.02] active:scale-95"
                  aria-label="Call 08088275348"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now: 08088275348</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Images from 24x7roservice.co.in */}
            <div className="lg:col-span-5">
              <div className="mx-auto max-w-md lg:max-w-none text-center">
                {/* Desktop Hero Image */}
                <div className="hidden sm:block">
                  <img
                    src="/images/banner-bg.jpg"
                    alt="RO Service Technician at Your Doorstep"
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>

                {/* Mobile Hero Image */}
                <div className="sm:hidden">
                  <img
                    src="/images/banner-mobile.jpg"
                    alt="RO Service Technician at Your Doorstep"
                    className="w-full max-w-[260px] mx-auto h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. IMPORTANT USPs SECTION (3 Key Highlights on #3378a8 background) */}
      <section className="bg-[#3378a8] py-5">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center gap-3.5 text-left">
              <div className="h-[60px] w-[60px] shrink-0 bg-white rounded-full flex items-center justify-center p-2.5 shadow">
                <img src="/images/ic1.png" alt="Save More on AMC Package" className="max-h-full max-w-full object-contain" />
              </div>
              <strong className="text-white text-[16px] sm:text-[17px] font-bold leading-tight">
                Save More<br />on AMC Package
              </strong>
            </div>

            <div className="flex items-center justify-center gap-3.5 text-left">
              <div className="h-[60px] w-[60px] shrink-0 bg-white rounded-full flex items-center justify-center p-2.5 shadow">
                <img src="/images/ic2.png" alt="RO Installation Maintenance Repair Service" className="max-h-full max-w-full object-contain" />
              </div>
              <strong className="text-white text-[16px] sm:text-[17px] font-bold leading-tight">
                RO Installation<br />Maintenance, Repair, Service
              </strong>
            </div>

            <div className="flex items-center justify-center gap-3.5 text-left">
              <div className="h-[60px] w-[60px] shrink-0 bg-white rounded-full flex items-center justify-center p-2.5 shadow">
                <img src="/images/ic3.png" alt="Specially Trained Technicians" className="max-h-full max-w-full object-contain" />
              </div>
              <strong className="text-white text-[16px] sm:text-[17px] font-bold leading-tight">
                Specially Trained <br />Technicians
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FACING THE BELOW PROBLEMS? (Diagnostic Center with drop icons) */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-[26px] sm:text-[32px] font-bold text-[#3378a8]">
              Facing the Below Problems?
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-4 items-center">
            {/* Left 4 problems */}
            <div className="md:col-span-4 space-y-6 text-left md:text-right">
              {[
                { l1: "RO Making", l2: "Beep Sound" },
                { l1: "LCD Indicators", l2: "Not Displayed" },
                { l1: "TDS Level", l2: "Increased" },
                { l1: "RO Dispensing", l2: "Less or No Water" },
              ].map((item, idx) => (
                <div key={idx} className="flex md:flex-row-reverse items-center gap-3">
                  <img src="/images/drop.png" alt="Problem" className="w-[30px] h-[30px] object-contain shrink-0" />
                  <span className="text-[17px] sm:text-[19px] font-bold text-[#3378a8] leading-tight">
                    {item.l1}<br />{item.l2}
                  </span>
                </div>
              ))}
            </div>

            {/* Center Image */}
            <div className="md:col-span-4 text-center py-4">
              <img
                src="/images/center-image.png"
                alt="Home Water Purifier Service Center"
                className="w-[85%] max-w-[300px] mx-auto h-auto object-contain"
              />
            </div>

            {/* Right 4 problems */}
            <div className="md:col-span-4 space-y-6 text-left">
              {[
                { l1: "Water Leakage", l2: "Bad Taste or Smell" },
                { l1: "Vibrations or Noise", l2: "in RO Purifier" },
                { l1: "Low Water Flow or", l2: "Slow Storage Tank Filling" },
                { l1: "RO Purifier", l2: "Not Working" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <img src="/images/drop.png" alt="Problem" className="w-[30px] h-[30px] object-contain shrink-0" />
                  <span className="text-[17px] sm:text-[19px] font-bold text-[#3378a8] leading-tight">
                    {item.l1}<br />{item.l2}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Callout CTA bar */}
          <div className="mt-10 max-w-2xl mx-auto rounded-lg bg-[#FFA700] text-white py-3.5 px-6 text-center shadow">
            <p className="text-[16px] sm:text-[18px] font-bold leading-tight">Your RO Needs Immediate Service</p>
            <div className="mt-1 text-[15px] sm:text-[16px]">
              <span>For Booking Call: </span>
              <a href="tel:08088275348" className="font-extrabold underline hover:text-slate-900">
                08088275348
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US? */}
      <section className="py-12 sm:py-16 bg-slate-50 border-t">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-[26px] sm:text-[32px] font-bold text-[#3378a8] mb-2">
              Why Choose us?
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#666] leading-relaxed">
              Home Water Purifier Service Center RO Service Center stands out as one of the top water purifier RO service centers in the region due to a multitude of reasons, despite the existence of several other similar service providers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <span className="w-[65px] h-[65px] rounded-full bg-[#cee0eb] flex items-center justify-center shrink-0">
                <img src="/images/prof.png" alt="Professional Service" className="w-[70%] object-contain" />
              </span>
              <div>
                <p className="text-[17px] font-bold text-slate-800 leading-tight">Unmatched Professional Service</p>
                <small className="text-[13px] text-[#666] block mt-1">Specially Trained Technicians at Affordable Price</small>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <span className="w-[65px] h-[65px] rounded-full bg-[#cee0eb] flex items-center justify-center shrink-0">
                <img src="/images/ic1.png" alt="Transparent Charges" className="w-[60%] object-contain" />
              </span>
              <div>
                <p className="text-[17px] font-bold text-slate-800 leading-tight">Transparent Charges (No Hidden Charges)</p>
                <small className="text-[13px] text-[#666] block mt-1">Before Any Part Replacement, We Take Your Approval</small>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <span className="w-[65px] h-[65px] rounded-full bg-[#cee0eb] flex items-center justify-center shrink-0">
                <img src="/images/ic1.png" alt="Affordable AMCs" className="w-[60%] object-contain" />
              </span>
              <div>
                <p className="text-[17px] font-bold text-slate-800 leading-tight">Affordable AMCs</p>
                <small className="text-[13px] text-[#666] block mt-1">Great way to get regular and timely repairs</small>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <span className="w-[65px] h-[65px] rounded-full bg-[#cee0eb] flex items-center justify-center shrink-0">
                <img src="/images/exp.png" alt="16 Years Experience" className="w-[70%] object-contain" />
              </span>
              <div>
                <p className="text-[17px] font-bold text-slate-800 leading-tight">16 Years of RO Service Experience</p>
                <small className="text-[13px] text-[#666] block mt-1">Installed 47,000 RO purifiers</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SUBSCRIPTION PLANS (AMC) */}
      <section className="py-12 sm:py-16 bg-white border-t">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-[26px] sm:text-[32px] font-bold text-[#3378a8] mb-1">
              Subscription Plans
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#666]">
              Recommend for Family of 2 members
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Plan 1 */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between bg-white">
              <div>
                <div className="bg-[#0d5792] text-white text-center py-2.5 text-[17px] font-bold">
                  AMC Plan 1
                </div>
                <div className="text-center py-2.5 text-[18px] font-bold text-[#3378a8] border-b border-[#3378a8] mx-5">
                  Rs. 999
                </div>
                <div className="p-5">
                  <ul className="list-disc pl-5 space-y-2 text-[14px] text-[#3378a8]">
                    <li><p className="text-[#666]">Includes Service</p></li>
                    <li><p className="text-[#666]">Filter (Not Covered)</p></li>
                    <li><p className="text-[#666]">Membrane (Not Covered)</p></li>
                    <li><p className="text-[#666]">Electrical Parts (Not Covered)</p></li>
                    <li><p className="text-[#666]">Faulty Parts (Not Covered)</p></li>
                  </ul>
                </div>
              </div>
              <div className="p-5 pt-0">
                <a
                  href="tel:08088275348"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded bg-[#FFA700] text-white text-[15px] font-bold hover:bg-[#FFA700]/90 transition-colors shadow-sm"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call to Book Plan</span>
                </a>
              </div>
            </div>

            {/* Plan 2 (Gold) */}
            <div className="rounded-2xl border-2 border-[#FFA700] overflow-hidden shadow-md flex flex-col justify-between bg-white relative">
              <span className="absolute top-1 right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                POPULAR
              </span>
              <div>
                <div className="bg-[#FFA700] text-white text-center py-2.5 text-[17px] font-bold">
                  AMC Plan 2
                </div>
                <div className="text-center py-2.5 text-[18px] font-bold text-[#3378a8] border-b border-[#3378a8] mx-5">
                  Rs. 8500
                </div>
                <div className="p-5">
                  <ul className="list-disc pl-5 space-y-2 text-[14px] text-[#3378a8]">
                    <li><p className="text-[#666]">Includes Service</p></li>
                    <li><p className="text-[#666] font-semibold text-slate-800">Electrical Parts Covered</p></li>
                    <li><p className="text-[#666] font-semibold text-slate-800">Filter Covered</p></li>
                    <li><p className="text-[#666] font-semibold text-slate-800">Membrane Covered</p></li>
                    <li><p className="text-[#666]">Faulty Parts (Not Covered)</p></li>
                  </ul>
                </div>
              </div>
              <div className="p-5 pt-0">
                <a
                  href="tel:08088275348"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded bg-[#FFA700] text-white text-[15px] font-bold hover:bg-[#FFA700]/90 transition-colors shadow-sm"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call to Book Plan</span>
                </a>
              </div>
            </div>

            {/* Plan 3 */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between bg-white">
              <div>
                <div className="bg-[#0d5792] text-white text-center py-2.5 text-[17px] font-bold">
                  AMC Plan 3
                </div>
                <div className="text-center py-2.5 text-[18px] font-bold text-[#3378a8] border-b border-[#3378a8] mx-5">
                  Rs. 10500
                </div>
                <div className="p-5">
                  <ul className="list-disc pl-5 space-y-2 text-[14px] text-[#3378a8]">
                    <li><p className="text-[#666]">Includes Service</p></li>
                    <li><p className="text-[#666] font-semibold text-slate-800">Filter Covered</p></li>
                    <li><p className="text-[#666] font-semibold text-slate-800">Electrical Parts Covered</p></li>
                    <li><p className="text-[#666] font-semibold text-slate-800">Membrane Covered</p></li>
                    <li><p className="text-[#666] font-semibold text-slate-800">Faulty Parts Covered</p></li>
                  </ul>
                </div>
              </div>
              <div className="p-5 pt-0">
                <a
                  href="tel:08088275348"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded bg-[#FFA700] text-white text-[15px] font-bold hover:bg-[#FFA700]/90 transition-colors shadow-sm"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call to Book Plan</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CARING FOR 45,000+ FAMILIES ANNUALLY WITH LOVE */}
      <section className="py-12 sm:py-16 bg-slate-50 border-t text-center">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-10">
            <h2 className="text-[24px] sm:text-[30px] font-bold text-[#3378a8] mb-2 leading-tight">
              Caring for 45,000+ families annually with love.
            </h2>
            <p className="text-[14px] text-[#666] leading-relaxed">
              We take pride in our commitment to providing exceptional service to our customers. We understand the importance of clean and safe drinking water, which is why we offer annual maintenance contracts to ensure that our customers' water purifiers are functioning optimally. Our team of experts conducts servicing with care and love, making sure that our customers have access to the best possible water purifier services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
            <div className="p-4">
              <img src="/images/ic1-1.png" alt="Expertise and Experience" className="w-[60px] h-[60px] mx-auto mb-3 object-contain" />
              <h3 className="text-[18px] font-bold text-[#3378a8] mb-2">Expertise and Experience</h3>
              <p className="text-[13.5px] text-[#666] leading-relaxed">
                With 13 years of experience in the industry, we have developed a deep understanding of the complexities of water purifiers. Our team of experts is equipped with the latest knowledge and technologies to provide the most efficient and effective solutions.
              </p>
            </div>

            <div className="p-4">
              <img src="/images/ic2.png" alt="Prompt and Efficient Service" className="w-[60px] h-[60px] mx-auto mb-3 object-contain" />
              <h3 className="text-[18px] font-bold text-[#3378a8] mb-2">Prompt and Efficient Service</h3>
              <p className="text-[13.5px] text-[#666] leading-relaxed">
                We understand the importance of having a functional water purifier at all times, which is why we provide prompt and efficient services to address any problems you may have. Our technicians are trained to diagnose and fix issues quickly.
              </p>
            </div>

            <div className="p-4">
              <img src="/images/ic3.png" alt="Customer Satisfaction" className="w-[60px] h-[60px] mx-auto mb-3 object-contain" />
              <h3 className="text-[18px] font-bold text-[#3378a8] mb-2">Customer Satisfaction</h3>
              <p className="text-[13.5px] text-[#666] leading-relaxed">
                Our commitment to customer satisfaction is what sets us apart from the rest. We strive to exceed your expectations by providing exceptional services. Our team is dedicated to ensuring you receive the highest quality of service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HAPPY CUSTOMERS (Real Testimonials from 24x7roservice.co.in) */}
      <section className="py-12 sm:py-16 bg-white border-t text-center">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#3378a8] mb-12">
            Happy Customers
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Customer 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_0_20px_-10px_#000] flex flex-col justify-between pt-10 relative mt-6">
              <span className="w-[80px] h-[80px] rounded-full overflow-hidden absolute -top-10 left-1/2 -translate-x-1/2 border-2 border-white shadow">
                <img src="/images/person1.png" alt="Shivani" className="w-full h-full object-cover" />
              </span>
              <div>
                <div className="text-[15px] font-bold text-[#666] mt-2">
                  Shivani <small className="block text-xs font-normal text-slate-400">HITEC City</small>
                </div>
                <p className="text-[13.5px] text-[#666] leading-relaxed mt-3">
                  "I recently used their services for my RO purifier, and I must say I am impressed. The technician was prompt, courteous, and knowledgeable. He quickly identified and fixed the problem, and now my purifier is working better than ever before. I highly recommend their services."
                </p>
              </div>
              <div className="flex items-center justify-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
            </div>

            {/* Customer 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_0_20px_-10px_#000] flex flex-col justify-between pt-10 relative mt-6">
              <span className="w-[80px] h-[80px] rounded-full overflow-hidden absolute -top-10 left-1/2 -translate-x-1/2 border-2 border-white shadow">
                <img src="/images/person2.png" alt="Dheeman" className="w-full h-full object-cover" />
              </span>
              <div>
                <div className="text-[15px] font-bold text-[#666] mt-2">
                  Dheeman <small className="block text-xs font-normal text-slate-400">Secunderabad</small>
                </div>
                <p className="text-[13.5px] text-[#666] leading-relaxed mt-3">
                  "I have been using their annual maintenance contract for my RO purifier for the past few years, and I am extremely satisfied with their services. Their technicians are always on time, and they do a thorough job of servicing my purifier. I feel confident that my family is drinking safe water."
                </p>
              </div>
              <div className="flex items-center justify-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
            </div>

            {/* Customer 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_0_20px_-10px_#000] flex flex-col justify-between pt-10 relative mt-6">
              <span className="w-[80px] h-[80px] rounded-full overflow-hidden absolute -top-10 left-1/2 -translate-x-1/2 border-2 border-white shadow">
                <img src="/images/person3.png" alt="Rashmi" className="w-full h-full object-cover" />
              </span>
              <div>
                <div className="text-[15px] font-bold text-[#666] mt-2">
                  Rashmi <small className="block text-xs font-normal text-slate-400">Secunderabad</small>
                </div>
                <p className="text-[13.5px] text-[#666] leading-relaxed mt-3">
                  "I had an urgent issue with my RO purifier, and I called their customer support. The representative was very helpful and immediately arranged for a technician to visit my home. The technician arrived within an hour, and he quickly fixed the issue."
                </p>
              </div>
              <div className="flex items-center justify-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. DIRECT CALLING HERO BANNER (No Form - Only Calling CTA) */}
      <section className="py-12 sm:py-16 bg-[#3378a8] text-white text-center">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="flex items-center justify-center h-14 w-14 rounded-full bg-white/20 mx-auto mb-4">
            <Phone className="h-7 w-7 text-[#FFA700]" />
          </div>
          <h2 className="text-[24px] sm:text-[30px] font-bold text-white mb-2 leading-tight">
            Need an RO Technician at Your Doorstep?
          </h2>
          <p className="text-[14px] text-white/90 max-w-xl mx-auto mb-6 leading-relaxed">
            Call our helpline directly for immediate technician dispatch within 60 minutes. Kent, Aquaguard, Pureit, Livpure &amp; all brands serviced.
          </p>
          <a
            href="tel:08088275348"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#FFA700] px-8 py-3.5 font-black text-white text-[18px] sm:text-[20px] shadow-xl hover:bg-[#e09300] transition-all hover:scale-105 active:scale-95"
          >
            <Phone className="h-6 w-6" />
            <span>Call Now: 08088275348</span>
          </a>
        </div>
      </section>

      {/* 9. FAQ ACCORDION */}
      <section className="py-12 bg-white border-t">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-[24px] sm:text-[30px] font-bold text-[#3378a8]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "What is included in the ₹299* Water Purifier Checkup?",
                a: "The ₹299 checkup covers full multi-point diagnostics: checking booster pump pressure, measuring TDS, inspecting electrical SMPS adapter and solenoid valve, checking pre-filters and RO membrane condition, and testing pipe fittings for leaks. Replacement spares are charged separately with prior approval."
              },
              {
                q: "How fast will the technician reach my doorstep?",
                a: "Our technicians are stationed locally and reach your doorstep within 45 to 60 minutes across major zones."
              },
              {
                q: "Are the replacement filters genuine?",
                a: "Yes. All replacement filters, sediment cartridges, carbon blocks, and reverse osmosis membranes are 100% factory-sealed OEM parts."
              },
              {
                q: "Do you service all brands like Kent, Aquaguard, Pureit, and Livpure?",
                a: "Yes! Our technicians are specially trained on branded & non-branded water purifiers including Kent, Eureka Forbes Aquaguard, Pureit, Livpure, Havells, AO Smith, and Blue Star."
              }
            ].map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="rounded-lg border border-slate-200 bg-white overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-3.5 text-left font-bold text-slate-800 text-[14.5px] hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-3.5 pb-3.5 text-[13.5px] text-[#666] leading-relaxed border-t border-slate-100 pt-2.5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
