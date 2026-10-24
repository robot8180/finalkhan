import React, { useEffect, useRef, useState } from "react";
import { Phone } from "lucide-react";

export default function SlidingCTA() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [highlight, setHighlight] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) {
        setMenuVisible(false);
        setHighlight(false);
      }
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuVisible(false);
        setHighlight(false);
      }
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  function onContextMenu(e: React.MouseEvent) {
    e.preventDefault();
    setPos({ x: e.clientX, y: e.clientY });
    setMenuVisible(true);
    setHighlight(true);
  }

  function handleCall() {
    window.location.href = "tel:+918088275348";
  }

  return (
    <>
      <a
        href="tel:+918088275348"
        className={`floating-cta ${highlight ? "highlight" : ""}`}
        aria-label="Call Now 08088275348"
        role="button"
        onContextMenu={onContextMenu}
        onMouseEnter={() => setHighlight(true)}
        onMouseLeave={() => setHighlight(false)}
      >
        <span className="bg flex items-center justify-center">
          <span className="ring" aria-hidden />
          <Phone className="h-5 w-5 text-white" />
        </span>
        <span className="label">
          Call Now
          <br />
          <span className="text-xs font-medium">08088275348</span>
        </span>
        <span className="click-badge">Click to call</span>
      </a>

      {menuVisible && (
        <div
          ref={menuRef}
          className="fixed z-60 w-44 rounded-lg border bg-white p-2 shadow-lg"
          style={{ left: pos.x, top: pos.y }}
          role="menu"
          aria-label="Call actions"
        >
          <button
            className="w-full rounded-md px-3 py-2 text-left text-sm hover:bg-muted/10"
            onClick={handleCall}
          >
            Call 08088275348
          </button>
          <button
            className="mt-1 w-full rounded-md px-3 py-2 text-left text-sm hover:bg-muted/10"
            onClick={() => {
              // copy number
              navigator.clipboard?.writeText("+918088275348");
              setMenuVisible(false);
              setHighlight(false);
            }}
          >
            Copy number
          </button>
        </div>
      )}
    </>
  );
}
