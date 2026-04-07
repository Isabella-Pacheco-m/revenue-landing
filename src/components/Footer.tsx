export default function Footer() {
  return (
    <footer
      className="py-8"
      style={{
        background: "var(--sand-100)",
        borderTop: "1px solid var(--sand-200)",
      }}
    >
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          href="#"
          suppressHydrationWarning
          className="text-base font-semibold tracking-tight"
          style={{ color: "var(--ink)", fontFamily: "var(--font-instrument-serif), Georgia, serif" }}
        >
          <span style={{ color: "var(--green-accent)" }}>R</span>evenue<span style={{ color: "var(--green-accent)" }}>.</span>
        </a>

        <p className="text-xs" style={{ color: "var(--gray-400)" }}>
          &copy; {new Date().getFullYear()} Revenue by Richi Pinzón. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
