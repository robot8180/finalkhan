import React, { useEffect, useRef, useState } from "react";

type Review = {
  name: string;
  location?: string;
  avatar: string;
  rating: number;
  text: string;
};

export default function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    function updateVisible() {
      const w = window.innerWidth;
      if (w >= 1024) setVisible(3);
      else if (w >= 640) setVisible(2);
      else setVisible(1);
    }
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const items = Array.from(el.querySelectorAll("[data-item]")) as HTMLElement[];
    const target = items[active];
    if (!target) return;

    // Center the active item in the carousel to avoid it being cut off at edges
    const containerWidth = el.clientWidth;
    const targetWidth = target.clientWidth;
    const targetCenter = target.offsetLeft + targetWidth / 2;
    let scrollLeft = Math.max(0, targetCenter - containerWidth / 2);

    // Clamp to maximum scroll to prevent overscrolling which causes items to be cut off
    const maxScroll = Math.max(0, el.scrollWidth - containerWidth);
    if (scrollLeft > maxScroll) scrollLeft = maxScroll;

    el.scrollTo({ left: scrollLeft, behavior: "smooth" });
  }, [active, visible, reviews]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPaused) return;
      setActive((s) => (s + 1) % Math.max(reviews.length, 1));
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, reviews.length]);

  return (
    <div
      className="mx-auto mt-8 max-w-6xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative">
        <div
          ref={containerRef}
          className="flex items-start gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 py-4"
          style={{ scrollBehavior: "smooth", paddingInline: 32, scrollPaddingInline: 32 }}
        >
          {reviews.map((r, idx) => {
            // extra margin to avoid clipping on small viewports
            const itemStyle: React.CSSProperties | undefined = visible === 1 ? { minWidth: 'calc(100% - 64px)' } : undefined;
            return (
              <article
                key={r.name + idx}
                data-item
                style={itemStyle}
                className="snap-center sm:min-w-[60%] md:min-w-[380px] flex-shrink-0 min-h-[160px] md:min-h-[200px] rounded-2xl bg-white p-5 sm:p-6 shadow-sm ring-1 ring-border flex flex-col max-w-full box-border"
                aria-label={`Review by ${r.name}`}
              >
                <div className="flex items-center gap-4">
                  <img src={r.avatar} alt={r.name} className="h-14 w-14 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold">{r.name}</div>
                    {r.location && <div className="text-sm text-muted-foreground">{r.location}</div>}
                  </div>
                </div>
                <p
                  className="mt-4 text-sm text-muted-foreground whitespace-normal break-words leading-relaxed w-full max-w-full overflow-visible"
                  style={{ whiteSpace: 'normal', wordBreak: 'break-word', overflowWrap: 'anywhere' }}
                >
                  {r.text}
                </p>
                <div className="mt-4 flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 ${i < r.rating ? "fill-current" : "opacity-30"}`}
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.955L10 0l2.95 5.955 6.562.955-4.756 4.635 1.122 6.545z" />
                    </svg>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Dots */}
        <div className="absolute left-1/2 top-full mt-4 flex -translate-x-1/2 items-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 w-8 rounded-full transition-all ${i === active ? "bg-primary" : "bg-muted/40"}`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
