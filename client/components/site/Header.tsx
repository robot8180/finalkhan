import { Link, NavLink } from "react-router-dom";
import { Phone, Droplets } from "lucide-react";

function Brand() {
  return (
    <Link to="/" className="flex items-center gap-2 font-extrabold text-xl md:text-2xl text-primary">
      <Droplets className="h-6 w-6 text-accent" />
      <span>RO Service</span>
    </Link>
  );
}

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Brand />
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `transition-colors hover:text-primary ${isActive ? "text-primary" : "text-foreground/70"}`
              }
              end
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <a
          href="tel:+918088275348"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow hover:bg-accent/90"
          aria-label="Call Now 08088275348"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">Call Now:</span>
          <span>08088275348</span>
        </a>
      </div>
    </header>
  );
}
