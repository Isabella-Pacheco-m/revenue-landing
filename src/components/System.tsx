"use client";

import { useInView } from "./useInView";

export default function System() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="sistema"
      ref={ref}
      className="section-padding"
      style={{ background: "var(--sand-50)" }}
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <span
            className={`label-tag block mb-4 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            El sistema
          </span>
          <h2
            className={`heading-md ${
              isVisible ? "animate-fade-in-up delay-1" : "opacity-0"
            }`}
          >
            Un sistema completo de crecimiento,{" "}
            <br className="hidden md:block" />
            <span style={{ fontStyle: "italic" }}>no servicios aislados</span>
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {/* 1. Dirección comercial — wide */}
          <BentoCard
            isVisible={isVisible}
            delay={200}
            className="md:col-span-4"
            title="Dirección comercial"
            description="Tomamos decisiones contigo, hacemos seguimiento y controlamos el sistema de revenue."
            visual={
              <div className="absolute inset-0 flex items-end pb-6 px-6 pointer-events-none">
                <svg
                  className="w-full"
                  height="100"
                  viewBox="0 0 400 100"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="rgba(45,106,79,0.25)" />
                      <stop offset="100%" stopColor="rgba(45,106,79,0)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,80 C60,60 100,75 150,55 C200,35 240,50 290,30 C330,15 360,20 400,10 L400,100 L0,100 Z"
                    fill="url(#g1)"
                  />
                  <path
                    d="M0,80 C60,60 100,75 150,55 C200,35 240,50 290,30 C330,15 360,20 400,10"
                    stroke="var(--green-accent)"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
            }
          />

          {/* 2. KPIs — narrow */}
          <BentoCard
            isVisible={isVisible}
            delay={280}
            className="md:col-span-2"
            title="Inteligencia de revenue"
            description="KPIs claros. Datos en decisiones accionables."
            visual={
              <div className="absolute right-5 bottom-2 pointer-events-none">
                <div
                  className="text-7xl md:text-8xl font-semibold leading-none"
                  style={{
                    color: "var(--green-accent)",
                    fontFamily:
                      "var(--font-instrument-serif), Georgia, serif",
                    opacity: 0.18,
                  }}
                >
                  +35%
                </div>
              </div>
            }
          />

          {/* 3. Sistema de ventas */}
          <BentoCard
            isVisible={isVisible}
            delay={360}
            className="md:col-span-2"
            title="Sistema de ventas"
            description="Funnel, CRM, proceso comercial y estructura."
            visual={
              <div className="absolute bottom-0 right-0 w-48 h-32 pointer-events-none">
                <svg viewBox="0 0 200 120" fill="none" className="w-full h-full">
                  <rect x="20" y="10" width="160" height="14" rx="2" fill="var(--sand-200)" />
                  <rect x="35" y="32" width="130" height="14" rx="2" fill="var(--green-light)" />
                  <rect x="50" y="54" width="100" height="14" rx="2" fill="var(--green-200)" />
                  <rect x="65" y="76" width="70" height="14" rx="2" fill="var(--green-400)" />
                  <rect x="80" y="98" width="40" height="14" rx="2" fill="var(--green-accent)" />
                </svg>
              </div>
            }
          />

          {/* 4. Entrenamiento — wide */}
          <BentoCard
            isVisible={isVisible}
            delay={440}
            className="md:col-span-4"
            title="Entrenamiento del equipo"
            description="Trabajamos directamente con tu equipo para que entienda, ejecute y mejore continuamente. No es capacitación aislada — es entrenamiento aplicado a resultados reales."
            visual={
              <div className="absolute inset-0 flex items-end justify-end p-6 md:p-8 pointer-events-none">
                <div className="flex -space-x-4 md:-space-x-5">
                  {[
                    "var(--green-accent)",
                    "var(--green-400)",
                    "var(--green-200)",
                    "var(--sand-200)",
                    "var(--green-light)",
                  ].map((c, i) => (
                    <div
                      key={i}
                      className="rounded-full border-[3px]"
                      style={{
                        width: "clamp(48px, 6vw, 72px)",
                        height: "clamp(48px, 6vw, 72px)",
                        background: c,
                        borderColor: "var(--sand-50)",
                        opacity: 0.75,
                      }}
                    />
                  ))}
                </div>
              </div>
            }
          />

          {/* 5. Crecimiento — full width */}
          <BentoCard
            isVisible={isVisible}
            delay={520}
            className="md:col-span-6"
            title="Crecimiento y optimización"
            description="Identificamos cuellos de botella, optimizamos el sistema y escalamos lo que funciona: marketing, automatización, pricing."
            visual={
              <div className="absolute inset-0 flex items-center justify-end px-8 pointer-events-none">
                <div className="flex items-end gap-2 h-20">
                  {[40, 55, 35, 70, 50, 80, 65, 95, 75, 100].map((h, i) => (
                    <div
                      key={i}
                      style={{
                        width: "10px",
                        height: `${h}%`,
                        background:
                          i > 6 ? "var(--green-accent)" : "var(--sand-200)",
                        borderRadius: "2px",
                      }}
                    />
                  ))}
                </div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  isVisible,
  delay,
  className,
  title,
  description,
  visual,
}: {
  isVisible: boolean;
  delay: number;
  className?: string;
  title: string;
  description: string;
  visual?: React.ReactNode;
}) {
  return (
    <div
      className={`relative p-7 rounded-2xl overflow-hidden min-h-[200px] flex flex-col transition-all card-hover ${className} ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{
        animationDelay: `${delay}ms`,
        background: "var(--white)",
        border: "1px solid var(--sand-200)",
      }}
    >
      {visual}
      <div className="relative z-10 max-w-sm">
        <h3
          className="text-xl font-medium mb-2"
          style={{
            color: "var(--ink)",
            fontFamily: "var(--font-instrument-serif), Georgia, serif",
          }}
        >
          {title}
        </h3>
        <p className="text-sm" style={{ color: "var(--gray-500)", lineHeight: 1.6 }}>
          {description}
        </p>
      </div>
    </div>
  );
}
