"use client";

import { useState } from "react";
import { useInView } from "./useInView";

const steps = [
  {
    number: "01",
    title: "Diagnóstico de revenue",
    short: "Analizamos tu sistema completo",
    description:
      "Analizamos tu sistema comercial completo: leads, funnel, equipo, métricas y procesos. Identificamos exactamente dónde se pierden oportunidades.",
    duration: "Semana 1–2",
    deliverables: [
      "Mapa actual del sistema",
      "Identificación de cuellos de botella",
      "Diagnóstico ejecutivo",
    ],
  },
  {
    number: "02",
    title: "Diseño del sistema",
    short: "Creamos la estructura a medida",
    description:
      "Creamos la estructura comercial a medida: proceso de ventas, KPIs, CRM, scripts y flujos de trabajo optimizados para tu negocio.",
    duration: "Semana 3–4",
    deliverables: [
      "Proceso comercial documentado",
      "KPIs y dashboards",
      "Scripts y playbooks",
    ],
  },
  {
    number: "03",
    title: "Implementación",
    short: "Activamos cada pieza del sistema",
    description:
      "Ponemos en marcha el sistema dentro de tu empresa. No es teoría: configuramos, integramos y activamos cada pieza.",
    duration: "Mes 2",
    deliverables: [
      "CRM configurado",
      "Equipo entrenado",
      "Reportes automáticos",
    ],
  },
  {
    number: "04",
    title: "Dirección y optimización",
    short: "Operamos contigo de forma continua",
    description:
      "Operamos el sistema contigo. Entrenamos al equipo, medimos resultados y ajustamos para escalar lo que funciona.",
    duration: "Continuo",
    deliverables: [
      "Reuniones semanales",
      "Coaching al equipo",
      "Optimización continua",
    ],
  },
];

export default function Process() {
  const { ref, isVisible } = useInView();
  const [active, setActive] = useState(0);

  return (
    <section
      id="proceso"
      ref={ref}
      className="section-padding"
      style={{ background: "var(--ink)" }}
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <span
            className={`label-tag block mb-4 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ color: "var(--green-400)" }}
          >
            Cómo trabajamos
          </span>
          <h2
            className={`heading-md ${
              isVisible ? "animate-fade-in-up delay-1" : "opacity-0"
            }`}
            style={{ color: "var(--white)" }}
          >
            Un proceso claro,{" "}
            <span style={{ fontStyle: "italic", color: "var(--green-400)" }}>
              de principio a fin
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 max-w-6xl mx-auto">
          {/* LEFT: Step list */}
          <div
            className={`flex flex-col ${
              isVisible ? "animate-fade-in-up delay-2" : "opacity-0"
            }`}
          >
            {steps.map((step, i) => {
              const isActive = active === i;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className="text-left relative"
                  style={{
                    padding: "20px 0",
                    borderTop:
                      i === 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    cursor: "pointer",
                  }}
                >
                  {/* Active indicator */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-0.5 transition-all"
                    style={{
                      background: isActive
                        ? "var(--green-400)"
                        : "transparent",
                      transitionDuration: "var(--duration-normal)",
                    }}
                  />

                  <div className="pl-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span
                        className="text-xs font-medium transition-colors"
                        style={{
                          color: isActive
                            ? "var(--green-400)"
                            : "rgba(255,255,255,0.4)",
                          transitionDuration: "var(--duration-normal)",
                        }}
                      >
                        {step.number}
                      </span>
                      <div>
                        <div
                          className="text-base font-medium transition-colors"
                          style={{
                            color: isActive
                              ? "var(--white)"
                              : "rgba(255,255,255,0.6)",
                            transitionDuration: "var(--duration-normal)",
                          }}
                        >
                          {step.title}
                        </div>
                        <div
                          className="text-xs mt-0.5 transition-opacity"
                          style={{
                            color: "rgba(255,255,255,0.4)",
                            opacity: isActive ? 1 : 0.5,
                          }}
                        >
                          {step.short}
                        </div>
                      </div>
                    </div>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="transition-transform"
                      style={{
                        transform: isActive
                          ? "translateX(0)"
                          : "translateX(-8px)",
                        opacity: isActive ? 1 : 0,
                        color: "var(--green-400)",
                        transitionDuration: "var(--duration-normal)",
                      }}
                    >
                      <path
                        d="M3 7h8M7 3l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT: Active step detail */}
          <div
            className={`relative ${
              isVisible ? "animate-fade-in-up delay-3" : "opacity-0"
            }`}
          >
            <div
              className="p-8 md:p-10 rounded-2xl h-full"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                key={active}
                className="animate-fade-in"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(76,175,80,0.15)",
                      color: "var(--green-400)",
                    }}
                  >
                    {steps[active].duration}
                  </span>
                </div>

                <h3
                  className="text-3xl mb-4"
                  style={{
                    color: "var(--white)",
                    fontFamily:
                      "var(--font-instrument-serif), Georgia, serif",
                  }}
                >
                  {steps[active].title}
                </h3>

                <p
                  className="text-base leading-relaxed mb-8"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {steps[active].description}
                </p>

                <div
                  className="text-xs font-medium uppercase tracking-wider mb-4"
                  style={{ color: "var(--gray-400)" }}
                >
                  Entregables
                </div>

                <ul className="space-y-3">
                  {steps[active].deliverables.map((d, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 animate-slide-in-left"
                      style={{ animationDelay: `${i * 80}ms` }}
                    >
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{
                          background: "rgba(76,175,80,0.15)",
                        }}
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path
                            d="M2 5l2 2 4-4"
                            stroke="var(--green-400)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span
                        className="text-sm"
                        style={{ color: "rgba(255,255,255,0.8)" }}
                      >
                        {d}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
