"use client";

import { useInView } from "./useInView";

const funnel = [
  { label: "Leads", value: 1240, percent: 100, color: "var(--sand-200)" },
  { label: "Calificados", value: 720, percent: 58, color: "var(--green-light)" },
  { label: "Propuestas", value: 384, percent: 31, color: "var(--green-200)" },
  { label: "Negociación", value: 192, percent: 15, color: "var(--green-400)" },
  { label: "Cerrados", value: 86, percent: 7, color: "var(--green-accent)" },
];

export default function Solution() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="solucion"
      ref={ref}
      className="section-padding"
      style={{ background: "var(--white)" }}
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
          {/* LEFT: Content */}
          <div>
            <span
              className={`label-tag block mb-4 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              La solución
            </span>
            <h2
              className={`heading-md mb-6 ${
                isVisible ? "animate-fade-in-up delay-1" : "opacity-0"
              }`}
            >
              No te damos recomendaciones.{" "}
              <span style={{ fontStyle: "italic" }}>
                Tomamos control
              </span>{" "}
              del sistema.
            </h2>
            <div
              className={`flex flex-col gap-4 mb-8 ${
                isVisible ? "animate-fade-in-up delay-2" : "opacity-0"
              }`}
            >
              <p className="body-text">
                Nos integramos a tu empresa como tu dirección comercial
                externa. Nos encargamos de estructurar, medir y optimizar tu
                sistema de ventas, y de alinear a tu equipo para que ejecute
                con claridad, disciplina y foco en resultados.
              </p>
              <p
                className="body-text font-medium"
                style={{ color: "var(--gray-700)" }}
              >
                Desde cómo llegan los leads, hasta cómo se cierran las ventas.
              </p>
            </div>

            {/* Mini features */}
            <div
              className={`grid grid-cols-2 gap-4 ${
                isVisible ? "animate-fade-in-up delay-3" : "opacity-0"
              }`}
            >
              {[
                { label: "Operación", value: "Diaria" },
                { label: "Reportes", value: "Semanales" },
                { label: "Decisiones", value: "Contigo" },
                { label: "Resultados", value: "Medibles" },
              ].map((f) => (
                <div
                  key={f.label}
                  className="px-4 py-3 rounded-lg"
                  style={{
                    background: "var(--sand-50)",
                    border: "1px solid var(--sand-200)",
                  }}
                >
                  <div
                    className="text-xs"
                    style={{ color: "var(--gray-500)" }}
                  >
                    {f.label}
                  </div>
                  <div
                    className="text-sm font-semibold mt-0.5"
                    style={{ color: "var(--ink)" }}
                  >
                    {f.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Visual funnel dashboard */}
          <div
            className={`${
              isVisible ? "animate-fade-in-up delay-3" : "opacity-0"
            }`}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "var(--sand-50)",
                border: "1px solid var(--sand-200)",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              {/* Header */}
              <div
                className="px-6 py-4 flex items-center justify-between"
                style={{
                  background: "var(--white)",
                  borderBottom: "1px solid var(--sand-200)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-md flex items-center justify-center"
                    style={{ background: "var(--ink)" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2 3h10M3 7h8M5 11h4"
                        stroke="var(--green-400)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <div
                      className="text-sm font-semibold"
                      style={{ color: "var(--ink)" }}
                    >
                      Funnel comercial
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "var(--gray-500)" }}
                    >
                      Últimos 30 días
                    </div>
                  </div>
                </div>
                <span
                  className="text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{
                    background: "var(--green-light)",
                    color: "var(--green-accent)",
                  }}
                >
                  Optimizado
                </span>
              </div>

              {/* Funnel body */}
              <div className="p-6 space-y-3">
                {funnel.map((stage, i) => (
                  <div
                    key={i}
                    className="group"
                    style={{
                      animation: isVisible
                        ? `fadeInUp 0.6s var(--ease-out) both ${
                            (i + 3) * 100
                          }ms`
                        : "none",
                    }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: stage.color }}
                        />
                        <span
                          className="text-xs font-medium"
                          style={{ color: "var(--gray-700)" }}
                        >
                          {stage.label}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span
                          className="text-sm font-semibold"
                          style={{ color: "var(--ink)" }}
                        >
                          {stage.value.toLocaleString()}
                        </span>
                        <span
                          className="text-xs"
                          style={{ color: "var(--gray-400)" }}
                        >
                          {stage.percent}%
                        </span>
                      </div>
                    </div>
                    <div
                      className="h-7 rounded-md relative overflow-hidden"
                      style={{
                        background: "var(--white)",
                        border: "1px solid var(--sand-200)",
                      }}
                    >
                      <div
                        className="h-full rounded-md flex items-center justify-end pr-3 transition-all"
                        style={{
                          width: isVisible ? `${stage.percent}%` : "0%",
                          background: stage.color,
                          transitionDuration: "1.2s",
                          transitionTimingFunction: "var(--ease-out)",
                          transitionDelay: `${(i + 3) * 120}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer summary */}
              <div
                className="px-6 py-4 grid grid-cols-3 gap-4"
                style={{
                  background: "var(--white)",
                  borderTop: "1px solid var(--sand-200)",
                }}
              >
                {[
                  { label: "Conversión", value: "6.9%" },
                  { label: "Velocidad", value: "18d" },
                  { label: "Revenue", value: "$406k" },
                ].map((s) => (
                  <div key={s.label}>
                    <div
                      className="text-xs"
                      style={{ color: "var(--gray-500)" }}
                    >
                      {s.label}
                    </div>
                    <div
                      className="text-base font-semibold mt-0.5"
                      style={{
                        color: "var(--ink)",
                        fontFamily:
                          "var(--font-instrument-serif), Georgia, serif",
                      }}
                    >
                      {s.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
