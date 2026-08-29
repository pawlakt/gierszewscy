"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import {
  BackLink,
  Btn,
  Card,
  Chip,
  H,
  MetaGrid,
  StatusPill,
} from "@/components/ui";
import { ORDERS, ORDER_PRODUCTS, srcLabel } from "@/lib/data";
import { useToast } from "@/lib/toast";

export default function AdminOrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const o = ORDERS.find((x) => x.id === id);
  const toast = useToast();
  if (!o) notFound();

  return (
    <div className="flex max-w-[980px] flex-col gap-5">
      <BackLink href="/admin/zamowienia">← Lista zamówień</BackLink>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-[14px]">
          <H className="text-2xl font-semibold md:text-[30px]">{o.no}</H>
          <StatusPill status={o.status} />
          <Chip tone="src">{srcLabel(o.source)}</Chip>
        </div>
        <Btn
          href={`/admin/zamowienia/${o.id}/druk`}
          kind="secondary"
          className="px-[18px] py-3 text-[12.5px]"
        >
          Drukuj zamówienie
        </Btn>
      </div>

      <div className="flex flex-wrap gap-[10px] rounded-[4px] border border-linen bg-parchment px-4 py-[14px]">
        <div className="min-w-[160px] flex-1 self-center text-[13px] font-semibold text-brand-900">
          Zmień status:
        </div>
        <Btn
          onClick={() => toast("Status zmieniony: Przyjęte")}
          className="px-[18px] py-3 text-[12.5px]"
        >
          Przyjmij zamówienie
        </Btn>
        <Btn
          onClick={() => toast("Status zmieniony: Zrealizowane")}
          kind="secondary"
          className="px-[18px] py-3 text-[12.5px]"
        >
          Oznacz jako zrealizowane
        </Btn>
        <Btn
          onClick={() => toast("Tryb edycji zamówienia")}
          kind="secondary"
          className="px-[18px] py-3 text-[12.5px]"
        >
          Edytuj
        </Btn>
      </div>

      <MetaGrid
        className="grid-cols-1 md:grid-cols-3"
        pairs={[
          ["Sklep", o.shop],
          ["Oddział", o.branch],
          ["Użytkownik", o.user],
          ["Data złożenia", o.date],
          ["Termin realizacji", o.term],
          ["Źródło", srcLabel(o.source)],
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
          Uwagi ogólne
        </div>
        <div className="text-[14.5px] leading-[1.6] text-ink">
          Proszę o dostawę w godzinach porannych. Wyroby garmażeryjne spakować
          osobno.
        </div>
      </Card>
    </div>
  );
}
