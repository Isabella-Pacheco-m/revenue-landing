"use client";

import { useInView } from "./useInView";
import { useState, useEffect, useRef } from "react";

function AnimatedNumber({
  target,
  suffix = "",
  isVisible,
  decimals = 0,
}: {
  target: number;
  suffix?: string;
  isVisible: boolean;
  decimals?: number;
}) {
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;
    const duration = 1400;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [isVisible, target]);

  return (
    <>
      {value.toFixed(decimals)}
      {suffix}
    </>
  );
}

export default function Demo() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="demo"
      ref={ref}
      className="section-padding"
      style={{ background: "var(--white)" }}
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <span
            className={`label-tag block mb-4 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Resultados que entregamos
          </span>
          <h2
            className={`heading-md ${
              isVisible ? "animate-fade-in-up delay-1" : "opacity-0"
            }`}
          >
            Así pensamos el crecimiento de una empresa
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 max-w-6xl mx-auto">
          {/* LEFT: Testimonial card */}
          <div
            className={`relative p-10 md:p-12 rounded-2xl ${
              isVisible ? "animate-fade-in-up delay-2" : "opacity-0"
            }`}
            style={{
              background: "var(--sand-50)",
              border: "1px solid var(--sand-200)",
            }}
          >
            {/* Big quote mark */}
            <div
              className="absolute top-6 right-8 text-7xl leading-none select-none"
              style={{
                color: "var(--green-200)",
                fontFamily: "var(--font-instrument-serif), Georgia, serif",
                opacity: 0.5,
              }}
            >
              &ldquo;
            </div>

            <p
              className="text-xl md:text-2xl leading-relaxed mb-10"
              style={{
                color: "var(--ink)",
                fontFamily: "var(--font-instrument-serif), Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              Llegamos con 120 leads al mes y solo cerrábamos el 10%. En tres
              meses identificaron exactamente dónde se nos caía el proceso,
              reescribieron nuestro discurso comercial y entrenaron al equipo.
              Hoy cerramos el 25% — con el mismo tráfico.
            </p>

            {/* Author */}
            <div
              className="flex items-center gap-4 pt-6"
              style={{ borderTop: "1px solid var(--sand-200)" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-base font-semibold"
                style={{
                  background: "var(--green-light)",
                  color: "var(--green-accent)",
                }}
              >
                DR
              </div>
              <div className="flex-1">
                <div
                  className="text-sm font-semibold"
                  style={{ color: "var(--ink)" }}
                >
                  Daniela Rivas
                </div>
                <div
                  className="text-xs"
                  style={{ color: "var(--gray-500)" }}
                >
                  CEO · Empresa de software B2B
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Metrics */}
          <div
            className={`flex flex-col gap-4 ${
              isVisible ? "animate-fade-in-up delay-3" : "opacity-0"
            }`}
          >
            {/* Big metric card */}
            <div
              className="p-8 rounded-2xl"
              style={{
                background: "var(--ink)",
                color: "var(--white)",
              }}
            >
              <div
                className="text-xs font-medium uppercase tracking-wider mb-3"
                style={{ color: "var(--green-400)" }}
              >
                Tasa de cierre
              </div>
              <div className="flex items-baseline gap-3 mb-2">
                <span
                  className="text-6xl font-semibold"
                  style={{
                    fontFamily:
                      "var(--font-instrument-serif), Georgia, serif",
                  }}
                >
                  <AnimatedNumber target={25} suffix="%" isVisible={isVisible} />
                </span>
                <span
                  className="text-sm font-medium px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(76,175,80,0.15)",
                    color: "var(--green-400)",
                  }}
                >
                  +150%
                </span>
              </div>
              <div className="text-sm" style={{ color: "var(--gray-400)" }}>
                Antes: 10% · Después: 25%
              </div>

              {/* Bar comparison */}
              <div className="mt-6 space-y-3">
                <div>
                  <div
                    className="text-xs mb-1"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    Antes
                  </div>
                  <div
                    className="h-2 rounded-full"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                  >
                    <div
                      style={{
                        width: isVisible ? "10%" : "0%",
                        height: "100%",
                        background: "rgba(255,255,255,0.3)",
                        borderRadius: "var(--radius-full)",
                        transition: "width 1.5s var(--ease-out) 0.5s",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div
                    className="text-xs mb-1"
                    style={{ color: "var(--green-400)" }}
                  >
                    Después
                  </div>
                  <div
                    className="h-2 rounded-full"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                  >
                    <div
                      style={{
                        width: isVisible ? "25%" : "0%",
                        height: "100%",
                        background: "var(--green-400)",
                        borderRadius: "var(--radius-full)",
                        transition: "width 1.5s var(--ease-out) 0.8s",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Two small cards */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className="p-5 rounded-2xl"
                style={{
                  background: "var(--sand-50)",
                  border: "1px solid var(--sand-200)",
                }}
              >
                <div
                  className="text-xs font-medium uppercase tracking-wider mb-2"
                  style={{ color: "var(--gray-400)" }}
                >
                  Tráfico
                </div>
                <div
                  className="text-2xl font-semibold"
                  style={{
                    color: "var(--ink)",
                    fontFamily:
                      "var(--font-instrument-serif), Georgia, serif",
                  }}
                >
                  Igual
                </div>
              </div>
              <div
                className="p-5 rounded-2xl"
                style={{
                  background: "var(--green-light)",
                  border: "1px solid var(--green-200)",
                }}
              >
                <div
                  className="text-xs font-medium uppercase tracking-wider mb-2"
                  style={{ color: "var(--green-accent)" }}
                >
                  Ingresos
                </div>
                <div
                  className="text-2xl font-semibold"
                  style={{
                    color: "var(--green-accent)",
                    fontFamily:
                      "var(--font-instrument-serif), Georgia, serif",
                  }}
                >
                  +150%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
