"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  BackLink,
  Btn,
  Card,
  Chip,
  H,
  MetaGrid,
  StatusPill,
  Table,
  Td,
} from "@/components/ui";
import { ORDERS } from "@/lib/data";
import { useToast } from "@/lib/toast";

const BRANCHES = ["Chojnice — Rynek 4", "Chojnice — ul. Lipowa 9"];
const USERS: [string, string][] = [
  ["Anna Kowalska", "Aktywny"],
  ["Tomasz Kowalski", "Aktywny"],
  ["Kasia Nowak", "Aktywny"],
];

export default function AdminClientDetailPage() {
  const router = useRouter();
  const toast = useToast();

  return (
    <div className="flex max-w-[900px] flex-col gap-5">
      <BackLink href="/admin/klienci">← Klienci</BackLink>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <H className="text-2xl font-semibold md:text-[30px]">
            Sklep spożywczy „Anna”
          </H>
          <Chip tone="ok">Aktywny</Chip>
        </div>
        <div className="flex flex-wrap gap-2">
          <Btn
            onClick={() => toast("Edycja klienta")}
            kind="secondary"
            className="px-[18px] py-[11px] text-[12.5px]"
          >
            Edytuj
          </Btn>
          <Btn
            onClick={() => toast("Konto zablokowane")}
            kind="danger"
            className="px-[18px] py-[11px] text-[12.5px]"
          >
            Zablokuj konto
          </Btn>
        </div>
      </div>

      <MetaGrid
        className="grid-cols-1 md:grid-cols-2"
        pairs={[
          ["Nazwa firmy", "Anna Kowalska — Handel"],
          ["NIP", "555-123-45-67"],
          ["Telefon", "605 112 340"],
          ["E-mail", "sklep.anna@example.pl"],
        ]}
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Card className="px-5 py-[18px]">
          <div className="mb-3 flex items-center justify-between">
            <H as="div" className="text-lg font-semibold">
              Oddziały
            </H>
            <button
              onClick={() => toast("Nowy oddział")}
              className="cursor-pointer border-none bg-transparent text-[13px] font-semibold text-brand-700"
            >
              + Dodaj
            </button>
          </div>
          {BRANCHES.map((b, i) => (
            <div
              key={i}
              className={`py-[10px] text-[14.5px] text-ink ${i < BRANCHES.length - 1 ? "border-b border-linen/40" : ""}`}
            >
              {b}
            </div>
          ))}
        </Card>
        <Card className="px-5 py-[18px]">
          <div className="mb-3 flex items-center justify-between">
            <H as="div" className="text-lg font-semibold">
              Użytkownicy
            </H>
            <Link
              href="/admin/uzytkownicy"
              className="text-[13px] font-semibold text-brand-700 no-underline"
            >
              Zarządzaj
            </Link>
          </div>
          {USERS.map(([name, st], i) => (
            <div
              key={i}
              className={`flex justify-between py-[10px] text-[14.5px] ${i < USERS.length - 1 ? "border-b border-linen/40" : ""}`}
            >
              <span className="text-ink">{name}</span>
              <Chip tone="ok">{st}</Chip>
            </div>
          ))}
        </Card>
      </div>

      <div>
        <H as="h2" className="mb-[10px] text-xl font-semibold">
          Historia zamówień
        </H>
        <Table headers={["Nr", "Data", "Termin", "Status"]}>
          {ORDERS.slice(0, 3).map((o) => (
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
              <Td>
                <StatusPill status={o.status} />
              </Td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}
