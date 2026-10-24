import { Link } from "react-router-dom";
import { Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 text-center container max-w-lg">
      <span className="text-6xl font-black text-primary">404</span>
      <h1 className="mt-4 text-2xl font-bold text-foreground">Page Not Found</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        The page you are looking for doesn't exist or has been moved. Need RO service immediately?
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow hover:bg-primary/90"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
        <a
          href="tel:+918088275348"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow hover:bg-accent/90"
        >
          <Phone className="h-4 w-4" />
          Call 08088275348
        </a>
      </div>
    </div>
  );
}
