"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "./useInView";

const problems = [
  {
    number: "01",
    title: "No sabes qué está funcionando",
    description:
      "Tienes muchos esfuerzos, pero no puedes identificar cuáles realmente generan revenue.",
  },
  {
    number: "02",
    title: "Tu equipo vende sin estructura",
    description:
      "Cada vendedor improvisa su propio proceso. Los resultados son impredecibles.",
  },
  {
    number: "03",
    title: "Marketing y ventas no se hablan",
    description:
      "Los leads que llegan no son los que necesitas. Las áreas trabajan en silos.",
  },
  {
    number: "04",
    title: "Decides sin datos confiables",
    description:
      "Las métricas existen, pero están dispersas. No sabes en qué confiar.",
  },
  {
    number: "05",
    title: "Terminas metido en todo",
    description:
      "El negocio depende de ti. No puedes salir de la operación a pensar estrategia.",
  },
];

function ProblemRow({
  problem,
  index,
}: {
  problem: typeof problems[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 items-start py-8 transition-all"
      style={{
        borderTop: "1px solid var(--sand-200)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transitionDuration: "700ms",
        transitionTimingFunction: "var(--ease-out)",
        transitionDelay: `${index * 60}ms`,
      }}
    >
      <span
        className="text-xs font-medium pt-1.5"
        style={{ color: "var(--gray-400)" }}
      >
        {problem.number}
      </span>

      <div>
        <h3
          className="text-xl md:text-2xl font-medium mb-2 transition-colors"
          style={{
            color: "var(--ink)",
            fontFamily: "var(--font-instrument-serif), Georgia, serif",
          }}
        >
          {problem.title}
        </h3>
        <p
          className="body-text overflow-hidden transition-all"
          style={{
            maxHeight: visible ? "100px" : "0px",
            opacity: visible ? 1 : 0,
            transitionDuration: "800ms",
            transitionDelay: `${index * 60 + 200}ms`,
          }}
        >
          {problem.description}
        </p>
      </div>

    </div>
  );
}

export default function Problem() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="problema"
      ref={ref}
      className="section-padding"
      style={{ background: "var(--white)" }}
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          {/* Sticky title */}
          <div
            className={`lg:sticky lg:top-32 lg:self-start ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <span className="label-tag block mb-4">El problema real</span>
            <h2 className="heading-md mb-6">
              Tu problema no es vender...{" "}
              <span style={{ fontStyle: "italic" }}>es el sistema</span>
            </h2>
            <p className="body-text mb-6">
              La mayoría de empresas no tienen un problema de ventas. Tienen un
              problema de estructura comercial.
            </p>
            <div
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-xs font-medium"
              style={{
                background: "var(--sand-50)",
                border: "1px solid var(--sand-200)",
                color: "var(--gray-700)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--red-text)" }}
              />
              Resultado: ingresos inestables y crecimiento impredecible
            </div>
          </div>

          {/* Scroll-revealing list */}
          <div>
            {problems.map((p, i) => (
              <ProblemRow key={p.number} problem={p} index={i} />
            ))}
            <div style={{ borderTop: "1px solid var(--sand-200)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
