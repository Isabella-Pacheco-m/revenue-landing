"use client";

import { useState, FormEvent } from "react";
import { useInView } from "./useInView";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function CtaFinal() {
  const { ref, isVisible } = useInView();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Error al enviar");
      setStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    fontSize: "var(--text-sm)",
    background: "var(--sand-50)",
    border: "1px solid var(--sand-200)",
    borderRadius: "var(--radius-md)",
    color: "var(--ink)",
    transition: `border-color var(--duration-fast) var(--ease-out)`,
  };

  return (
    <section
      id="cta"
      ref={ref}
      className="section-padding"
      style={{ background: "var(--white)" }}
    >
      <div className="section-container">
        <div className="max-w-xl mx-auto text-center">
          <span className={`label-tag block mb-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            Da el primer paso
          </span>
          <h2 className={`heading-md mb-4 ${isVisible ? "animate-fade-in-up delay-1" : "opacity-0"}`}>
            Si no tienes un sistema claro de ventas, estás perdiendo dinero todos los días
          </h2>
          <p className={`body-text mb-10 ${isVisible ? "animate-fade-in-up delay-2" : "opacity-0"}`}>
            En 30–45 minutos vas a entender exactamente qué está fallando y qué hacer.
          </p>

          <form
            onSubmit={handleSubmit}
            className={`text-left flex flex-col gap-4 ${isVisible ? "animate-fade-in-up delay-3" : "opacity-0"}`}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--gray-700)" }}>
                  Nombre
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--gray-700)" }}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="tu@empresa.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--gray-700)" }}>
                Empresa
              </label>
              <input
                type="text"
                required
                placeholder="Nombre de tu empresa"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                style={inputStyle}
              />
            </div>

            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--gray-700)" }}>
                Cuéntanos sobre tu reto comercial
              </label>
              <textarea
                rows={3}
                placeholder="Brevemente, ¿cuál es tu principal reto de ventas?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{ ...inputStyle, resize: "vertical" as const }}
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full justify-center py-3.5 mt-2"
              disabled={status === "loading"}
              style={{
                opacity: status === "loading" ? 0.7 : 1,
              }}
            >
              {status === "loading" ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeDasharray="28" strokeDashoffset="8" strokeLinecap="round"/>
                  </svg>
                  Enviando...
                </span>
              ) : (
                "Agendar diagnóstico de revenue"
              )}
            </button>

            {status === "success" && (
              <div
                className="p-4 rounded-lg text-center text-sm animate-fade-in-up"
                style={{ background: "var(--green-light)", color: "var(--green-accent)" }}
              >
                Recibimos tu solicitud. Te contactaremos en las próximas 24 horas.
              </div>
            )}

            {status === "error" && (
              <div
                className="p-4 rounded-lg text-center text-sm animate-fade-in-up"
                style={{ background: "var(--red-soft)", color: "var(--red-text)" }}
              >
                Hubo un error. Intenta de nuevo o escríbenos directamente.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
