import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_0_20px_-9px_#666]">
      <div className="container max-w-7xl flex h-16 sm:h-[72px] items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="24x7 RO Service"
            className="h-9 sm:h-11 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-[14px] font-medium text-[#3378a8]">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `transition-colors hover:text-[#FFA700] py-1 ${
                  isActive ? "text-[#FFA700] font-bold" : "text-[#3378a8]"
                }`
              }
              end
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Call Number */}
        <div className="flex items-center gap-3">
          <div className="text-right flex items-center gap-1.5 sm:gap-2">
            <span className="hidden sm:inline text-xs sm:text-sm text-[#666] font-normal">Call Now:</span>
            <a
              href="tel:08088275348"
              className="text-base sm:text-xl font-bold text-[#FFA700] hover:text-[#3378a8] transition-colors leading-none"
            >
              08088275348
            </a>
          </div>

          <a
            href="tel:08088275348"
            className="flex sm:hidden items-center justify-center h-8 w-8 rounded-full bg-[#FFA700] text-white shadow"
            aria-label="Call Now"
          >
            <Phone className="h-4 w-4" />
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 text-[#3378a8] md:hidden rounded hover:bg-slate-100"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-white px-4 py-3 space-y-2 shadow-lg">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-semibold text-[#3378a8] hover:text-[#FFA700] border-b border-slate-100"
            >
              {n.label}
            </Link>
          ))}
          <div className="pt-2 pb-1">
            <a
              href="tel:08088275348"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded bg-[#FFA700] text-white font-bold text-sm"
            >
              <Phone className="h-4 w-4" />
              Call Now: 08088275348
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
