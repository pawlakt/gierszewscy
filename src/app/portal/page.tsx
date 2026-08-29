"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Badge, Btn, Card, Eyebrow, H, StatusPill } from "@/components/ui";
import { MESSAGES, ORDERS } from "@/lib/data";

function Stat({
  label,
  val,
  sub,
}: {
  label: string;
  val: string;
  sub?: string;
}) {
  return (
    <Card className="px-5 py-[18px]">
      <div className="text-[12.5px] font-semibold tracking-[.02em] text-muted">
        {label}
      </div>
      <div className="my-[2px] mt-[6px] font-serif text-[30px] font-bold text-brand-900">
        {val}
      </div>
      {sub && <div className="text-[12.5px] text-ink">{sub}</div>}
    </Card>
  );
}

export default function ClientDashboard() {
  const router = useRouter();
  const msg = MESSAGES[0];
  const recent = ORDERS.slice(0, 3);

  return (
    <div className="flex flex-col gap-[26px]">
      <div>
        <Eyebrow>Sklep spożywczy „Anna” · Chojnice</Eyebrow>
        <H className="mt-2 text-[28px] font-semibold md:text-[34px]">
          Dzień dobry, Anno
        </H>
        <p className="m-0 mt-2 text-[15px] text-ink">Środa, 23 lipca 2026</p>
      </div>

      {/* important message banner */}
      <div
        onClick={() => router.push(`/portal/komunikaty/${msg.id}`)}
        className="flex cursor-pointer items-start gap-[14px] rounded-[4px] border border-linen border-l-4 border-l-accent bg-parchment px-[18px] py-4"
      >
        <div className="flex-1">
          <div className="mb-1 flex items-center gap-2">
            <Badge tone="accent">Ważny komunikat</Badge>
          </div>
          <div className="text-base font-bold text-brand-900">{msg.title}</div>
          <div className="mt-[3px] text-sm text-ink">{msg.excerpt}</div>
        </div>
        <span className="text-xl font-bold text-brand-700">→</span>
      </div>

      {/* primary CTA */}
      <div className="flex flex-wrap items-center gap-[14px] rounded-[6px] bg-brand-900 p-[22px] md:px-[30px] md:py-[26px]">
        <div className="min-w-[200px] flex-1">
          <div className="font-serif text-[22px] font-semibold text-cream">
            Złóż nowe zamówienie
          </div>
          <div className="mt-1 text-sm text-cream/75">
            Standardowe zamówienie złożysz w ok. 2 minuty.
          </div>
        </div>
        <Btn href="/portal/katalog" kind="dark" className="px-[26px] py-[14px]">
          Złóż zamówienie →
        </Btn>
      </div>

      <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-3">
        <Stat label="Ostatnie zamówienie" val="#0158" sub="Oczekuje · termin 26.07" />
        <Stat label="Zamówień w tym miesiącu" val="14" />
        <Stat label="Nieprzeczytane komunikaty" val="2" />
      </div>

      <div>
        <div className="mb-3 flex items-baseline justify-between">
          <H as="h2" className="text-[22px] font-semibold">
            Ostatnie zamówienia
          </H>
          <Link
            href="/portal/historia"
            className="text-sm font-semibold no-underline"
          >
            Zobacz historię →
          </Link>
        </div>
        <div className="flex flex-col gap-[10px]">
          {recent.map((o) => (
            <div
              key={o.no}
              onClick={() => router.push(`/portal/historia/${o.id}`)}
              className="flex cursor-pointer flex-wrap items-center gap-x-4 gap-y-2 rounded-[4px] border border-linen bg-white px-[18px] py-[14px]"
            >
              <div className="min-w-[130px] text-[15px] font-bold text-brand-900">
                {o.no}
              </div>
              <div className="min-w-[140px] flex-1 text-[13.5px] text-ink">
                Złożono {o.date.split(" ")[0]} · {o.pos} pozycji · termin{" "}
                {o.term}
              </div>
              <StatusPill status={o.status} />
              <span className="font-bold text-brand-700">→</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
