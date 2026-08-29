export function Footer({ className = "" }: { className?: string }) {
  return (
    <footer
      className={`flex flex-col items-center gap-[5px] border-t border-linen/60 px-4 pt-5 pb-4 text-center ${className}`}
    >
      <div className="text-[10.5px] font-semibold tracking-[.14em] uppercase text-muted/80">
        Wersja demonstracyjna · for demonstration purposes only
      </div>
      <div className="text-[11.5px] text-muted">
        © nublado · designed &amp; engineered by Tomasz Pawlak
      </div>
    </footer>
  );
}
