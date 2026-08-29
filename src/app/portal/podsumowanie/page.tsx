"use client";

import { BackLink, Btn, Card, Eyebrow, H } from "@/components/ui";
import { useCart } from "@/lib/cart";

function Row({ a, b }: { a: string; b: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-linen/50 py-[9px] text-[14.5px] last:border-b-0">
      <span className="text-muted">{a}</span>
      <span className="text-right font-semibold text-brand-900">{b}</span>
    </div>
  );
}

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="px-5 py-[18px]">
      <div className="mb-2 text-[12.5px] font-bold tracking-[.1em] uppercase text-brand-700">
        {title}
      </div>
      {children}
    </Card>
  );
}

export default function SummaryPage() {
  const { lines, count } = useCart();

  return (
    <div className="mx-auto flex max-w-[820px] flex-col gap-[22px]">
      <BackLink href="/portal/zamowienie">← Wróć do edycji</BackLink>
      <div>
        <Eyebrow>Krok ostatni</Eyebrow>
        <H className="mt-2 text-[26px] font-semibold md:text-[32px]">
          Podsumowanie zamówienia
        </H>
      </div>

      <div className="grid grid-cols-1 gap-[14px] md:grid-cols-2">
        <SectionCard title="Sklep">
          <Row a="Nazwa" b="Sklep „Anna”" />
          <Row a="Oddział" b="Chojnice, Rynek 4" />
          <Row a="Składający" b="Anna Kowalska" />
        </SectionCard>
        <SectionCard title="Realizacja">
          <Row a="Termin realizacji" b="26.07.2026" />
          <Row a="Liczba pozycji" b={String(count)} />
          <Row a="Uwagi ogólne" b="—" />
        </SectionCard>
      </div>

      <Card>
        <div className="border-b border-linen px-5 py-4 font-bold text-brand-900">
          Produkty w zamówieniu
        </div>
        <div className="px-5 py-[6px]">
          {lines.map((l, i) => (
            <div
              key={i}
              className="flex justify-between gap-4 border-b border-linen/50 py-3 last:border-b-0"
            >
              <div>
                <span className="text-[15px] font-semibold text-brand-900">
                  {l.name}
                </span>
                {l.note && (
                  <div className="text-[12.5px] text-muted">Uwaga: {l.note}</div>
                )}
              </div>
              <span className="text-[15px] font-bold whitespace-nowrap text-brand-900">
                {l.qty} {l.unit}
              </span>
            </div>
          ))}
          {!lines.length && (
            <div className="py-6 text-center text-sm text-muted">
              Zamówienie jest puste.
            </div>
          )}
        </div>
      </Card>

      <div className="flex items-start gap-3 rounded-[4px] border border-info/25 bg-info/10 px-4 py-[14px] text-sm font-semibold text-info">
        <span>ℹ</span>
        <span>Zamówienie możesz edytować do godziny 23:00 w dniu jego złożenia.</span>
      </div>

      <div className="flex flex-wrap gap-3">
        <Btn href="/portal/zamowienie" kind="secondary">
          Wróć do edycji
        </Btn>
        <Btn href="/portal/potwierdzenie" className="px-10 py-[14px]">
          Wyślij zamówienie
        </Btn>
      </div>
    </div>
  );
}
