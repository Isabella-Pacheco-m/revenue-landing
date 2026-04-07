"use client";

import { useInView } from "./useInView";
import { useEffect, useState } from "react";

export default function Hero() {
  const { ref, isVisible } = useInView(0.1);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        paddingTop: "calc(var(--space-32) + var(--space-12))",
        paddingBottom: "var(--space-24)",
        background: "var(--sand-50)",
      }}
    >
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--sand-200) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Green accent blob */}
      <div
        className="absolute top-20 -right-32 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(45,106,79,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="section-container relative">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
          {/* LEFT — Content */}
          <div>
            {/* Tag */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                background: "var(--white)",
                border: "1px solid var(--sand-200)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: "var(--green-400)",
                  boxShadow: "0 0 0 3px rgba(76,175,80,0.15)",
                }}
              />
              <span
                className="text-xs font-medium"
                style={{ color: "var(--gray-700)" }}
              >
                Sistema comercial integrado
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`heading-lg mb-6 ${
                isVisible ? "animate-fade-in-up delay-1" : "opacity-0"
              }`}
              style={{ maxWidth: "640px" }}
            >
              Diseñamos y operamos el sistema que optimiza tu{" "}
              <span
                style={{
                  fontFamily:
                    "var(--font-instrument-serif), Georgia, serif",
                  fontStyle: "italic",
                  color: "var(--green-accent)",
                }}
              >
                revenue
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className={`body-text-lg mb-4 ${
                isVisible ? "animate-fade-in-up delay-2" : "opacity-0"
              }`}
              style={{ maxWidth: "540px" }}
            >
              Nos integramos a tu empresa para estructurar, medir y optimizar
              tu sistema comercial — desde cómo llegan los leads hasta cómo se
              convierten en ingresos.
            </p>

            {/* Reinforcement */}
            <p
              className={`text-sm font-medium mb-10 ${
                isVisible ? "animate-fade-in-up delay-3" : "opacity-0"
              }`}
              style={{ color: "var(--gray-700)" }}
            >
              Sin improvisación. Sin intuición. Con sistema.
            </p>

            {/* CTA */}
            <div
              className={`flex flex-wrap gap-4 ${
                isVisible ? "animate-fade-in-up delay-4" : "opacity-0"
              }`}
            >
              <a href="#cta" className="btn-primary">
                Agendar diagnóstico de revenue
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="ml-1"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#sistema" className="btn-secondary">
                Conocer el sistema
              </a>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-8 mt-16 max-w-md ${
                isVisible ? "animate-fade-in-up delay-5" : "opacity-0"
              }`}
            >
              {[
                { value: "120+", label: "Empresas asesoradas" },
                { value: "+35%", label: "Revenue promedio" },
                { value: "4", label: "Países en LATAM" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-3xl font-semibold"
                    style={{
                      color: "var(--ink)",
                      fontFamily:
                        "var(--font-instrument-serif), Georgia, serif",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ color: "var(--gray-500)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Visual: Live revenue dashboard */}
          <div
            className={`relative ${
              isVisible ? "animate-fade-in-up delay-3" : "opacity-0"
            }`}
          >
            <RevenueChart tick={tick} />
          </div>
        </div>
      </div>
    </section>
  );
}

// Animated mini-dashboard
function RevenueChart({ tick }: { tick: number }) {
  // Generate slowly-shifting bar values to give a "live" feel
  const seed = (i: number) =>
    0.4 + 0.6 * Math.abs(Math.sin((i + tick * 0.7) * 0.9));
  const bars = Array.from({ length: 14 }, (_, i) => seed(i));

  return (
    <div
      className="relative p-7 rounded-2xl"
      style={{
        background: "var(--white)",
        border: "1px solid var(--sand-200)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div
            className="text-xs font-medium uppercase tracking-wider mb-1"
            style={{ color: "var(--gray-400)" }}
          >
            Revenue mensual
          </div>
          <div className="flex items-baseline gap-2">
            <span
              className="text-3xl font-semibold"
              style={{
                color: "var(--ink)",
                fontFamily:
                  "var(--font-instrument-serif), Georgia, serif",
              }}
            >
              $284,500
            </span>
            <span
              className="text-xs font-medium px-2 py-0.5 rounded-full"
              style={{
                background: "var(--green-light)",
                color: "var(--green-accent)",
              }}
            >
              +35%
            </span>
          </div>
        </div>
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center"
          style={{ background: "var(--sand-50)" }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{
              background: "var(--green-400)",
              boxShadow: "0 0 0 4px rgba(76,175,80,0.2)",
              animation: "pulse 2s var(--ease-in-out) infinite",
            }}
          />
        </div>
      </div>

      {/* Bar chart */}
      <div className="flex items-end gap-1.5 h-32 mb-6">
        {bars.map((v, i) => (
          <div
            key={i}
            className="flex-1 rounded-t"
            style={{
              height: `${v * 100}%`,
              background:
                i === bars.length - 1
                  ? "var(--green-accent)"
                  : i > bars.length - 4
                  ? "var(--green-200)"
                  : "var(--sand-200)",
              transition: "height 1.2s var(--ease-out)",
            }}
          />
        ))}
      </div>

      {/* KPI rows */}
      <div className="space-y-3">
        {[
          { label: "Tasa de conversión", value: "12.4%", trend: "+2.1" },
          { label: "Ciclo de venta", value: "18d", trend: "-5d" },
          { label: "Ticket promedio", value: "$4,720", trend: "+12%" },
        ].map((kpi, i) => (
          <div
            key={i}
            className="flex items-center justify-between pt-3"
            style={{
              borderTop: i === 0 ? "1px solid var(--sand-200)" : "none",
            }}
          >
            <span className="text-xs" style={{ color: "var(--gray-500)" }}>
              {kpi.label}
            </span>
            <div className="flex items-center gap-2">
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--ink)" }}
              >
                {kpi.value}
              </span>
              <span
                className="text-xs font-medium"
                style={{ color: "var(--green-accent)" }}
              >
                {kpi.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Floating tag */}
      <div
        className="absolute -bottom-3 -left-3 px-3 py-2 rounded-lg flex items-center gap-2"
        style={{
          background: "var(--ink)",
          color: "var(--white)",
          boxShadow: "var(--shadow-md)",
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{
            background: "var(--green-400)",
            animation: "pulse 1.5s var(--ease-in-out) infinite",
          }}
        />
        <span className="text-xs font-medium">En operación</span>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
