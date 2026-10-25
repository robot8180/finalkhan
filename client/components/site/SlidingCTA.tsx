import { Phone } from "lucide-react";

export default function SlidingCTA() {
  return (
    <>
      {/* Floating Call Button on Left Side - Always Visible Everywhere */}
      <aside
        aria-label="24x7 Call Floating CTA"
        className="fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 z-[999999] pointer-events-auto select-none"
      >
        <a
          href="tel:08088275348"
          className="group relative flex items-center gap-2 sm:gap-2.5 rounded-2xl bg-gradient-to-r from-[#FFA700] to-[#e69500] text-white p-2 sm:p-2.5 pr-3 sm:pr-4 shadow-[0_10px_35px_rgba(255,167,0,0.55)] border-2 border-white/90 hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label="Call RO Technician at 08088275348"
        >
          {/* Continuous Pulsing Wave Glow */}
          <span className="absolute -inset-1 sm:-inset-1.5 rounded-2xl bg-[#FFA700] opacity-40 animate-ping -z-10 pointer-events-none" />

          {/* Animated Ringing Phone Icon */}
          <div className="flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white text-[#FFA700] shadow-md shrink-0">
            <Phone className="h-5 w-5 sm:h-6 sm:w-6 fill-[#FFA700] text-[#FFA700] animate-phone-ring" />
          </div>

          {/* Call Information - Always Displayed, Never Hidden */}
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[10px] sm:text-[11px] font-extrabold text-white/95 uppercase tracking-wider flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              24x7 Call Now
            </span>
            <span className="text-[14px] sm:text-[16px] font-black text-white tracking-wide leading-tight drop-shadow-sm">
              08088275348
            </span>
            <span className="hidden sm:block text-[9px] text-white/90 font-medium leading-none mt-0.5">
              Doorstep in 60 Mins
            </span>
          </div>
        </a>
      </aside>

      {/* Mobile Bottom Sticky Call Bar - Always Visible on Mobile */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-[999998] h-[52px] shadow-[0_-4px_20px_rgba(0,0,0,0.18)] bg-[#FFA700] border-t border-white/20">
        <a
          href="tel:08088275348"
          className="w-full h-full flex items-center justify-center gap-2.5 text-white font-extrabold text-[16px] tracking-wide active:bg-[#e09300] transition-colors"
          aria-label="Call 08088275348"
        >
          <div className="flex items-center justify-center h-7 w-7 rounded-full bg-white/20">
            <Phone className="h-4 w-4 fill-white text-white animate-phone-ring" />
          </div>
          <span>Call Now: 08088275348</span>
        </a>
      </div>
    </>
  );
}
