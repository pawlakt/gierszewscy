"use client";

import { useEffect } from "react";
import { Btn, Card, H, StatusPill } from "@/components/ui";
import { useCart } from "@/lib/cart";

const ROWS: [string, string][] = [
  ["Numer zamówienia", "ZAM/2026/0159"],
  ["Data i godzina", "23.07.2026, 21:36"],
  ["Termin realizacji", "26.07.2026"],
  ["Status", "Oczekuje"],
];

export default function ConfirmPage() {
  const { clear } = useCart();

  useEffect(() => {
    clear();
  }, [clear]);

  return (
    <div className="mx-auto flex max-w-[560px] flex-col items-center gap-2 py-[30px] text-center">
      <div className="mb-2 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-success/15 text-[34px] font-bold text-success">
        ✓
      </div>
      <H className="text-[30px] font-semibold">Zamówienie zostało wysłane</H>
      <p className="mt-[6px] mb-[18px] text-[15px] text-ink">
        Dziękujemy. Zamówienie trafiło do realizacji.
      </p>
      <Card className="w-full text-left">
        {ROWS.map(([a, b], i) => (
          <div
            key={a}
            className={`flex items-center justify-between px-5 py-3 ${i < ROWS.length - 1 ? "border-b border-linen/50" : ""}`}
          >
            <span className="text-sm text-muted">{a}</span>
            {a === "Status" ? (
              <StatusPill status="Oczekuje" />
            ) : (
              <span className="text-[14.5px] font-bold text-brand-900">{b}</span>
            )}
          </div>
        ))}
      </Card>
      <div className="mt-4 mb-1 rounded-[4px] bg-parchment px-4 py-3 text-[13.5px] text-ink">
        Zamówienie możesz samodzielnie edytować do godziny 23:00 dzisiaj.
      </div>
      <div className="mt-2 flex flex-wrap justify-center gap-[10px]">
        <Btn href="/portal/historia/0158">Zobacz szczegóły</Btn>
        <Btn href="/portal" kind="secondary">
          Strona główna
        </Btn>
        <Btn
          href="/portal/katalog"
          kind="ghost"
          className="rounded-[2px] border border-solid border-linen"
        >
          Złóż kolejne
        </Btn>
      </div>
    </div>
  );
}
