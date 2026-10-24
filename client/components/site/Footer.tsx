import { Link } from "react-router-dom";
import { Droplets } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)",
        boxSizing: "border-box",
      }}
      className="bg-white/95 text-foreground"
    >
      <div className="container py-12 grid gap-8 sm:grid-cols-2 md:grid-cols-5">
        {/* About / Logo */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 font-extrabold text-xl md:text-2xl text-primary">
              <Droplets className="h-6 w-6 text-accent" />
              <span>RO Service</span>
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            We are one of the leading RO service providers, delivering reliable doorstep repair, installation and AMC services with transparent pricing and specially trained technicians.
          </p>
          <p className="mt-4 text-sm">
            <a href="https://bookroservice.com" target="_blank" rel="noreferrer" className="text-primary hover:underline">Visit our network site</a>
          </p>
        </div>

        {/* Information */}
        <div>
          <h4 className="font-semibold text-primary">Information</h4>
          <ul className="mt-3 space-y-2 text-sm text-foreground/70">
            <li><Link to="/" className="hover:underline text-primary">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
          </ul>
        </div>

        {/* More Link */}
        <div>
          <h4 className="font-semibold text-primary">More Link</h4>
          <ul className="mt-3 space-y-2 text-sm text-foreground/70">
            <li><Link to="/contact" onClick={() => window.scrollTo(0,0)} className="hover:underline">Contact Us</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:underline">Terms &amp; Conditions</Link></li>
          </ul>
        </div>

        {/* Get in touch */}
        <div>
          <h4 className="font-semibold text-primary">Get In Touch</h4>
          <div className="mt-3 text-sm text-foreground/70">
            <div className="font-semibold">RO SERVICES</div>
            <div>Service area: Bengaluru and nearby areas</div>
            <div className="mt-3">Phone: <a className="text-accent hover:underline" href="tel:+918088275348">08088275348</a></div>
            <div>Email: <a className="text-accent hover:underline" href="mailto:info@bookroservice.com">info@bookroservice.com</a></div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(15,23,36,0.06)" }} className="py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-sm text-foreground/70">Â© 2025 QuickROFix. All Rights Reserved Designed & Maintained by QuickROFix Team</div>
          <div className="flex items-center gap-3">
            <Link to="/privacy" className="hover:text-accent text-foreground/70">Privacy Policy</Link>
            <span className="text-foreground/40">â€¢</span>
            <Link to="/terms" className="hover:text-accent text-foreground/70">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
