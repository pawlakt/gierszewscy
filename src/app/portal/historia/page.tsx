"use client";

import { useRouter } from "next/navigation";
import {
  Input,
  PageHead,
  Select,
  StatusPill,
  Table,
  Td,
} from "@/components/ui";
import { ORDERS } from "@/lib/data";

export default function HistoryPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-5">
      <PageHead eyebrow="Twoje zamówienia" title="Historia zamówień" />

      <div className="flex flex-wrap items-center gap-[10px]">
        <Input placeholder="Szukaj po numerze…" className="max-w-[220px] px-3 py-[9px] text-sm" />
        <Select options={["Wszystkie statusy", "Oczekuje", "Przyjęte", "Zrealizowane"]} />
        <Select options={["Wszyscy użytkownicy", "Anna Kowalska", "Marek Nowak"]} />
        <Input placeholder="Zakres dat" className="max-w-[150px] px-3 py-[9px] text-sm" />
      </div>

      {/* mobile cards */}
      <div className="flex flex-col gap-3 md:hidden">
        {ORDERS.map((o) => (
          <div
            key={o.no}
            onClick={() => router.push(`/portal/historia/${o.id}`)}
            className="cursor-pointer rounded-[4px] border border-linen bg-white p-[15px]"
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="font-bold text-brand-900">{o.no}</span>
              <StatusPill status={o.status} />
            </div>
            <div className="text-[13.5px] leading-[1.7] text-ink">
              Złożono: {o.date.split(" ")[0]}
              <br />
              Termin: {o.term} · {o.pos} pozycji
              <br />
              Składający: {o.user}
            </div>
          </div>
        ))}
      </div>

      {/* desktop table */}
      <div className="hidden md:block">
        <Table headers={["Nr zamówienia", "Data złożenia", "Termin", "Pozycje", "Status", "Użytkownik", ""]}>
          {ORDERS.map((o) => (
            <tr
              key={o.no}
              onClick={() => router.push(`/portal/historia/${o.id}`)}
              className="cursor-pointer hover:bg-cream/60"
            >
              <Td>
                <strong className="text-brand-900">{o.no}</strong>
              </Td>
              <Td>{o.date.split(" ")[0]}</Td>
              <Td>{o.term}</Td>
              <Td>{o.pos}</Td>
              <Td>
                <StatusPill status={o.status} />
              </Td>
              <Td>{o.user}</Td>
              <Td className="text-right whitespace-nowrap">
                <span className="font-bold text-brand-700">Szczegóły →</span>
              </Td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}
