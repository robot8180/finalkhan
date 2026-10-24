import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SlidingCTA from "./SlidingCTA";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <SlidingCTA />
    </div>
  );
}
