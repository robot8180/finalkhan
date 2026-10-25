import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#3378a8] text-white text-center py-6 px-4 pb-16 sm:pb-6">
      <div className="container max-w-5xl mx-auto space-y-3">
        <div className="flex flex-wrap justify-center items-center gap-4 text-xs sm:text-sm text-white/90">
          <Link to="/" className="hover:text-[#FFA700] transition-colors">Home</Link>
          <span>•</span>
          <Link to="/about" className="hover:text-[#FFA700] transition-colors">About Us</Link>
          <span>•</span>
          <Link to="/services" className="hover:text-[#FFA700] transition-colors">Services</Link>
          <span>•</span>
          <Link to="/gallery" className="hover:text-[#FFA700] transition-colors">Gallery</Link>
          <span>•</span>
          <Link to="/contact" className="hover:text-[#FFA700] transition-colors">Contact Us</Link>
          <span>•</span>
          <Link to="/privacy" className="hover:text-[#FFA700] transition-colors">Privacy Policy</Link>
          <span>•</span>
          <Link to="/terms" className="hover:text-[#FFA700] transition-colors">Terms</Link>
        </div>

        <p className="text-[13px] sm:text-[14px] text-white/90 leading-relaxed max-w-3xl mx-auto">
          Business Relationship, Company Name- 24x7 RO Service, https://24x7roservice.co.in/ <br />
          ©2025 24x7 RO Service. All rights reserved.
        </p>

        <p className="text-[11px] text-white/60 max-w-2xl mx-auto pt-1 leading-normal">
          Disclaimer: 24x7 RO Service is an independent doorstep water purifier service and repair provider. Brand names and logos are property of their respective holders and used for descriptive reference only.
        </p>
      </div>
    </footer>
  );
}
