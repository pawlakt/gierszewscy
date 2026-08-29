"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Btn,
  Card,
  Chip,
  Eyebrow,
  H,
  StatusPill,
  Table,
  Td,
} from "@/components/ui";
import { ORDERS, srcLabel } from "@/lib/data";

function Stat({
  label,
  val,
  color,
}: {
  label: string;
  val: string;
  color?: string;
}) {
  return (
    <Card className="px-5 py-[18px]">
      <div className="text-[12.5px] font-semibold text-muted">{label}</div>
      <div
        className="my-[2px] mt-1 font-serif text-[34px] font-bold"
        style={{ color: color ?? "#3d1f1a" }}
      >
        {val}
      </div>
    </Card>
  );
}

const TERMS: [string, string][] = [
  ["24.07", "ZAM/2026/0142 · U Marka"],
  ["25.07", "ZAM/2026/0151 · Anna"],
  ["26.07", "ZAM/2026/0158 · Grosik"],
];

export default function AdminDashboard() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-[14px]">
        <div>
          <Eyebrow>Panel administracyjny</Eyebrow>
          <H className="mt-2 text-[26px] font-semibold md:text-[32px]">
            Dashboard
          </H>
          <div className="mt-1 text-sm text-muted">Środa, 23 lipca 2026</div>
        </div>
        <div className="flex flex-wrap gap-[10px]">
          <Btn href="/admin/zamowienia/nowe" kind="secondary" className="px-[18px] py-3 text-[12.5px]">
            + Zamówienie
          </Btn>
          <Btn href="/admin/produkty/nowy" kind="secondary" className="px-[18px] py-3 text-[12.5px]">
            + Produkt
          </Btn>
          <Btn href="/admin/komunikaty/nowy" kind="secondary" className="px-[18px] py-3 text-[12.5px]">
            + Komunikat
          </Btn>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-[14px] lg:grid-cols-4">
        <Stat label="Nowe zamówienia" val="3" color="#8c2f26" />
        <Stat label="Zamówienia na dziś" val="7" />
        <Stat label="Oczekujące" val="3" color="#c58b3d" />
        <Stat label="Aktywni klienci" val="24" color="#5c7a3d" />
      </div>

      <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="mb-3 flex items-baseline justify-between">
            <H as="h2" className="text-xl font-semibold">
              Ostatnie zamówienia
            </H>
            <Link href="/admin/zamowienia" className="text-sm font-semibold no-underline">
              Wszystkie →
            </Link>
          </div>
          <Table headers={["Nr", "Sklep", "Źródło", "Status", ""]}>
            {ORDERS.slice(0, 4).map((o) => (
              <tr
                key={o.no}
                onClick={() => router.push(`/admin/zamowienia/${o.id}`)}
                className="cursor-pointer hover:bg-cream/60"
              >
                <Td>
                  <strong className="text-brand-900">{o.no}</strong>
                </Td>
                <Td>{o.shop}</Td>
                <Td>
                  <Chip tone="src">{srcLabel(o.source)}</Chip>
                </Td>
                <Td>
                  <StatusPill status={o.status} />
                </Td>
                <Td className="text-right">
                  <span className="font-bold text-brand-700">→</span>
                </Td>
              </tr>
            ))}
          </Table>
        </div>
        <div>
          <H as="h2" className="mb-3 text-xl font-semibold">
            Najbliższe terminy
          </H>
          <Card>
            {TERMS.map(([d, t], i) => (
              <div
                key={i}
                className={`flex items-center gap-[14px] px-4 py-[13px] ${i < TERMS.length - 1 ? "border-b border-linen/40" : ""}`}
              >
                <div className="min-w-[52px] font-serif text-base font-bold text-brand-700">
                  {d}
                </div>
                <div className="text-sm text-ink">{t}</div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}
