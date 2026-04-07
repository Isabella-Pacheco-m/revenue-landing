"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Por qué nosotros", href: "#problema" },
    { label: "Cómo lo hacemos", href: "#solucion" },
    { label: "Qué incluye", href: "#sistema" },
    { label: "Casos de éxito", href: "#demo" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all"
      style={{
        background: scrolled ? "rgba(250,250,248,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--sand-200)" : "1px solid transparent",
        transitionDuration: "var(--duration-normal)",
        transitionTimingFunction: "var(--ease-out)",
      }}
    >
      <nav className="section-container flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#"
          suppressHydrationWarning
          className="text-2xl md:text-3xl font-semibold tracking-tight"
          style={{ color: "var(--ink)", fontFamily: "var(--font-instrument-serif), Georgia, serif" }}
        >
          <span style={{ color: "var(--green-accent)" }}>R</span>evenue<span style={{ color: "var(--green-accent)" }}>.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition-colors"
              style={{
                color: "var(--gray-500)",
                transitionDuration: "var(--duration-fast)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--ink)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--gray-500)")
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a href="#cta" className="btn-primary text-sm">
            Agendar diagnóstico
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menú"
        >
          <span
            className="block w-5 h-0.5 bg-current transition-transform"
            style={{
              transform: mobileOpen ? "rotate(45deg) translate(2px, 4px)" : "none",
              transitionDuration: "var(--duration-normal)",
              transitionTimingFunction: "var(--ease-out)",
            }}
          />
          <span
            className="block w-5 h-0.5 bg-current transition-opacity"
            style={{
              opacity: mobileOpen ? 0 : 1,
              transitionDuration: "var(--duration-fast)",
            }}
          />
          <span
            className="block w-5 h-0.5 bg-current transition-transform"
            style={{
              transform: mobileOpen ? "rotate(-45deg) translate(2px, -4px)" : "none",
              transitionDuration: "var(--duration-normal)",
              transitionTimingFunction: "var(--ease-out)",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all"
        style={{
          maxHeight: mobileOpen ? "320px" : "0",
          opacity: mobileOpen ? 1 : 0,
          transitionDuration: "var(--duration-slow)",
          transitionTimingFunction: "var(--ease-out)",
          background: "rgba(250,250,248,0.98)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="section-container flex flex-col gap-4 py-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base"
              style={{ color: "var(--gray-700)" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#cta" className="btn-primary text-sm w-fit mt-2" onClick={() => setMobileOpen(false)}>
            Agendar diagnóstico
          </a>
        </div>
      </div>
    </header>
  );
}
