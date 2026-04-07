"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "./useInView";

const items = [
  {
    before: "Ventas desordenadas",
    after: "Proceso comercial estructurado",
    metric: "+40% productividad",
  },
  {
    before: "Decisiones por intuición",
    after: "Decisiones basadas en datos",
    metric: "Visibilidad total",
  },
  {
    before: "Dependencia del dueño",
    after: "Equipo autónomo y alineado",
    metric: "Tiempo recuperado",
  },
  {
    before: "Crecimiento impredecible",
    after: "Crecimiento predecible",
    metric: "+35% revenue",
  },
];

export default function Transformation() {
  const { ref, isVisible } = useInView(0.2);
  const [progress, setProgress] = useState(0); // 0 = before, 1 = after
  const [auto, setAuto] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isVisible || !auto) return;
    intervalRef.current = setInterval(() => {
      setProgress((p) => (p >= 1 ? 0 : Math.min(p + 0.02, 1)));
    }, 60);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isVisible, auto]);

  const t = progress; // 0..1

  return (
    <section
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--ink)" }}
    >
      {/* Animated dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Diagonal green light sweep */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity"
        style={{
          background:
            "linear-gradient(120deg, transparent 30%, rgba(76,175,80,0.06) 50%, transparent 70%)",
          opacity: 0.5 + t * 0.5,
          transform: `translateX(${(t - 0.5) * 200}px)`,
          transitionDuration: "60ms",
        }}
      />

      <div className="section-container relative">
        <div className="text-center mb-16">
          <span
            className={`label-tag block mb-4 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ color: "var(--green-400)" }}
          >
            Transformación
          </span>
          <h2
            className={`heading-md ${
              isVisible ? "animate-fade-in-up delay-1" : "opacity-0"
            }`}
            style={{ color: "var(--white)" }}
          >
            Lo que cambia cuando tienes{" "}
            <span style={{ fontStyle: "italic", color: "var(--green-400)" }}>
              un sistema
            </span>
          </h2>
        </div>

        {/* Slider control */}
        <div
          className={`max-w-3xl mx-auto mb-12 ${
            isVisible ? "animate-fade-in-up delay-2" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wider mb-4">
            <span style={{ color: t < 0.5 ? "var(--white)" : "rgba(255,255,255,0.3)" }}>
              ← Antes
            </span>
            <span style={{ color: "var(--gray-400)" }}>
              Arrastra o espera
            </span>
            <span style={{ color: t >= 0.5 ? "var(--green-400)" : "rgba(255,255,255,0.3)" }}>
              Después →
            </span>
          </div>

          <div
            className="relative h-1 rounded-full"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            <div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                width: `${t * 100}%`,
                background:
                  "linear-gradient(90deg, var(--gray-400), var(--green-400))",
              }}
            />
            <input
              type="range"
              min="0"
              max="100"
              value={t * 100}
              onChange={(e) => {
                setAuto(false);
                setProgress(Number(e.target.value) / 100);
              }}
              className="absolute inset-0 w-full opacity-0 cursor-grab"
              style={{ height: "32px", top: "-16px" }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full pointer-events-none"
              style={{
                left: `calc(${t * 100}% - 10px)`,
                background: "var(--white)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                border: "2px solid var(--green-400)",
              }}
            />
          </div>
        </div>

        {/* Transformation rows */}
        <div className="max-w-3xl mx-auto space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className={`grid grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-8 p-5 md:p-6 rounded-lg ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                animationDelay: `${(i + 3) * 100}ms`,
                background: `rgba(255,255,255,${0.03 + t * 0.04})`,
                border: `1px solid rgba(${
                  76 * t + 255 * (1 - t)
                },${175 * t + 255 * (1 - t)},${80 * t + 255 * (1 - t)},${
                  0.08 + t * 0.15
                })`,
                transitionDuration: "60ms",
              }}
            >
              {/* Before */}
              <div
                className="text-right"
                style={{
                  color: `rgba(255,255,255,${1 - t * 0.7})`,
                  textDecoration: t > 0.6 ? "line-through" : "none",
                  transitionDuration: "200ms",
                }}
              >
                <span className="text-sm md:text-base">{item.before}</span>
              </div>

              {/* Arrow */}
              <div
                className="flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0"
                style={{
                  background: `rgba(76,175,80,${0.1 + t * 0.3})`,
                  transform: `translateX(${(t - 0.5) * 8}px) scale(${
                    0.9 + t * 0.2
                  })`,
                  transitionDuration: "60ms",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 7h8M7 3l4 4-4 4"
                    stroke="var(--green-400)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* After */}
              <div
                style={{
                  color: `rgba(${165 + (255 - 165) * t},${214 + (255 - 214) * t},${167 + (255 - 167) * t},${0.5 + t * 0.5})`,
                  fontWeight: t > 0.5 ? 500 : 400,
                  transitionDuration: "200ms",
                }}
              >
                <span className="text-sm md:text-base">{item.after}</span>
                {t > 0.85 && (
                  <span
                    className="block text-xs mt-0.5 animate-fade-in"
                    style={{ color: "var(--green-400)" }}
                  >
                    {item.metric}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
