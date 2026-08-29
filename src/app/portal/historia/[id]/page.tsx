"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import {
  BackLink,
  Btn,
  Card,
  H,
  MetaGrid,
  StatusPill,
} from "@/components/ui";
import { ORDERS, ORDER_PRODUCTS } from "@/lib/data";

export default function OrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const o = ORDERS.find((x) => x.id === id);
  if (!o) notFound();
  const editable = o.status === "Oczekuje";

  return (
    <div className="flex max-w-[880px] flex-col gap-5">
      <BackLink href="/portal/historia">← Historia zamówień</BackLink>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <H className="text-[26px] font-semibold md:text-[32px]">{o.no}</H>
        <StatusPill status={o.status} />
      </div>

      {editable ? (
        <div className="flex flex-wrap items-center gap-[14px] rounded-[4px] border border-accent/40 bg-accent/12 px-[18px] py-[14px]">
          <div className="min-w-[220px] flex-1 text-sm font-semibold text-[#7a531a]">
            Możesz edytować to zamówienie jeszcze przez 2 godziny i 15 minut.
          </div>
          <Btn href="/portal/zamowienie" className="px-[22px] py-3">
            Edytuj zamówienie
          </Btn>
        </div>
      ) : (
        <div className="rounded-[4px] border border-danger/30 bg-danger/10 px-[18px] py-[14px] text-sm font-semibold text-danger">
          Czas na samodzielną edycję zamówienia minął. W celu wprowadzenia
          zmian skontaktuj się z obsługą: 52 398 24 11.
        </div>
      )}

      <MetaGrid
        className="grid-cols-1 md:grid-cols-3"
        pairs={[
          ["Data i godzina złożenia", o.date],
          ["Termin realizacji", o.term],
          ["Sklep", o.shop],
          ["Oddział", o.branch],
          ["Użytkownik składający", o.user],
          ["Źródło", "Portal internetowy"],
        ]}
      />

      <Card>
        <div className="border-b border-linen px-[18px] py-[14px] font-bold text-brand-900">
          Produkty ({ORDER_PRODUCTS.length})
        </div>
        <div className="px-[18px] py-1">
          {ORDER_PRODUCTS.map(([name, qty, note], i) => (
            <div
              key={i}
              className="flex justify-between gap-[14px] border-b border-linen/40 py-3 last:border-b-0"
            >
              <div>
                <span className="text-[15px] font-semibold text-brand-900">
                  {name}
                </span>
                {note && (
                  <div className="text-[12.5px] text-muted">Uwaga: {note}</div>
                )}
              </div>
              <span className="font-bold whitespace-nowrap text-brand-900">
                {qty}
              </span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="px-[18px] py-4">
        <div className="mb-[6px] text-xs font-bold tracking-[.06em] uppercase text-brand-700">
          Uwagi do całego zamówienia
        </div>
        <div className="text-[14.5px] leading-[1.6] text-ink">
          Proszę o dostawę w godzinach porannych. Wyroby garmażeryjne spakować
          osobno.
        </div>
      </Card>
    </div>
  );
}
