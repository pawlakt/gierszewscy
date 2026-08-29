"use client";

import { useRouter } from "next/navigation";
import {
  Chip,
  Input,
  PageHead,
  Select,
  StatusPill,
  Table,
  Td,
} from "@/components/ui";
import { ORDERS, srcLabel } from "@/lib/data";

export default function AdminOrdersPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-[18px]">
      <PageHead eyebrow="Praca operacyjna" title="Zamówienia" />

      <div className="flex flex-wrap items-center gap-[10px]">
        <Input placeholder="Szukaj: nr, sklep, użytkownik…" className="max-w-[240px] px-3 py-[9px] text-sm" />
        <Select options={["Wszystkie statusy", "Oczekuje", "Przyjęte", "Zrealizowane"]} />
        <Select options={["Wszystkie źródła", "Portal", "Telefon", "E-mail", "Inne"]} />
        <Select options={["Wszystkie sklepy", "Anna", "U Marka", "Grosik"]} />
        <Input placeholder="Termin realizacji" className="max-w-[150px] px-3 py-[9px] text-sm" />
      </div>

      {/* mobile cards */}
      <div className="flex flex-col gap-3 md:hidden">
        {ORDERS.map((o) => (
          <div
            key={o.no}
            onClick={() => router.push(`/admin/zamowienia/${o.id}`)}
            className="cursor-pointer rounded-[4px] border border-linen bg-white p-[15px]"
          >
            <div className="mb-2 flex justify-between">
              <strong className="text-brand-900">{o.no}</strong>
              <StatusPill status={o.status} />
            </div>
            <div className="text-[13.5px] leading-[1.7] text-ink">
              {o.shop}
              <br />
              Termin {o.term} · {o.pos} poz. ·{" "}
              <Chip tone="src">{srcLabel(o.source)}</Chip>
            </div>
          </div>
        ))}
      </div>

      {/* desktop table */}
      <div className="hidden md:block">
        <Table headers={["Nr", "Data", "Termin", "Sklep", "Użytkownik", "Poz.", "Źródło", "Status", "Akcje"]}>
          {ORDERS.map((o) => (
            <tr
              key={o.no}
              onClick={() => router.push(`/admin/zamowienia/${o.id}`)}
              className="cursor-pointer hover:bg-cream/60"
            >
              <Td>
                <strong className="text-brand-900">{o.no}</strong>
              </Td>
              <Td>{o.date.split(" ")[0]}</Td>
              <Td>{o.term}</Td>
              <Td>{o.shop}</Td>
              <Td>{o.user}</Td>
              <Td>{o.pos}</Td>
              <Td>
                <Chip tone="src">{srcLabel(o.source)}</Chip>
              </Td>
              <Td>
                <StatusPill status={o.status} />
              </Td>
              <Td className="text-right whitespace-nowrap">
                <span className="font-bold text-brand-700">Otwórz →</span>
              </Td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}
