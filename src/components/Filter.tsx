"use client";

import { useInView } from "./useInView";

const fitItems = [
  {
    title: "Ya están vendiendo",
    description: "Tienes ingresos recurrentes y un mercado validado.",
  },
  {
    title: "Quieren escalar con estructura",
    description: "Buscas crecer sin improvisar ni depender de la suerte.",
  },
  {
    title: "Tienen o quieren equipo comercial",
    description: "Estás listo para construir o profesionalizar tu equipo.",
  },
];

export default function Filter() {
  const { ref, isVisible } = useInView();

  return (
    <section
      ref={ref}
      className="section-padding"
      style={{ background: "var(--sand-50)" }}
    >
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span
              className={`label-tag block mb-4 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              Antes de agendar
            </span>
            <h2
              className={`heading-md mb-4 ${
                isVisible ? "animate-fade-in-up delay-1" : "opacity-0"
              }`}
            >
              No es para todas las empresas.{" "}
              <span style={{ fontStyle: "italic" }}>
                ¿Es para la tuya?
              </span>
            </h2>
            <p
              className={`body-text max-w-xl mx-auto ${
                isVisible ? "animate-fade-in-up delay-2" : "opacity-0"
              }`}
            >
              Trabajamos con un grupo selecto de empresas. Para asegurar
              resultados reales, solo aceptamos clientes que cumplen con estos
              criterios.
            </p>
          </div>

          {/* Fit cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {fitItems.map((item, i) => (
              <div
                key={i}
                className={`relative p-6 rounded-2xl card-hover ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${(i + 3) * 100}ms`,
                  background: "var(--white)",
                  border: "1px solid var(--sand-200)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "var(--green-light)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8l3 3 7-7"
                      stroke="var(--green-accent)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  className="text-lg font-medium mb-2"
                  style={{
                    color: "var(--ink)",
                    fontFamily:
                      "var(--font-instrument-serif), Georgia, serif",
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--gray-500)" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Not for you - emphasized */}
          <div
            className={`relative p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-4 ${
              isVisible ? "animate-fade-in-up delay-6" : "opacity-0"
            }`}
            style={{
              background: "var(--ink)",
              border: "1px solid var(--gray-700)",
            }}
          >
            <div
              className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M6 6l8 8M14 6l-8 8"
                  stroke="var(--gray-400)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex-1">
              <div
                className="text-xs font-medium uppercase tracking-wider mb-1"
                style={{ color: "var(--gray-400)" }}
              >
                Sé honesto contigo
              </div>
              <p
                className="text-base md:text-lg"
                style={{
                  color: "var(--white)",
                  fontFamily:
                    "var(--font-instrument-serif), Georgia, serif",
                  fontStyle: "italic",
                }}
              >
                Si solo buscas más leads o capacitación puntual,{" "}
                <span style={{ color: "var(--green-400)" }}>no somos para ti.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
