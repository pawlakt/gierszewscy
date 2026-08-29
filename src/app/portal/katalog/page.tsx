"use client";

import Link from "next/link";
import { useState } from "react";
import { Btn, Card, Eyebrow, H, Input } from "@/components/ui";
import { ProductCard } from "@/components/product-card";
import { CATS, PRODUCTS } from "@/lib/data";
import { useCart } from "@/lib/cart";

export default function CatalogPage() {
  const [cat, setCat] = useState<string>(CATS[0]);
  const [search, setSearch] = useState("");
  const { lines, count, remove } = useCart();

  const filtered = PRODUCTS.filter((p) =>
    search
      ? p.name.toLowerCase().includes(search.toLowerCase())
      : p.cat === cat,
  );

  const catChip = (c: string, mobile: boolean) => {
    const a = !search && cat === c;
    return (
      <button
        key={c}
        onClick={() => {
          setCat(c);
          setSearch("");
        }}
        className={
          mobile
            ? `cursor-pointer rounded-[20px] border px-[15px] py-2 text-sm whitespace-nowrap ${
                a
                  ? "border-brand-700 bg-brand-700/10 font-bold text-brand-700"
                  : "border-linen bg-transparent font-medium text-ink"
              }`
            : `block w-full cursor-pointer rounded-r-[4px] border-none border-l-[3px] px-[13px] py-[10px] text-left text-sm ${
                a
                  ? "border-l-brand-700 bg-brand-700/10 font-bold text-brand-700"
                  : "border-l-transparent bg-transparent font-medium text-ink hover:bg-brand-700/5"
              }`
        }
        style={mobile ? undefined : { borderLeftStyle: "solid", borderLeftWidth: 3 }}
      >
        {c}
      </button>
    );
  };

  return (
    <div className="flex flex-col gap-[22px]">
      <div>
        <Eyebrow>Nowe zamówienie</Eyebrow>
        <H className="mt-2 text-[26px] font-semibold md:text-[32px]">
          Katalog produktów
        </H>
      </div>

      <div className="max-w-[420px]">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Szukaj produktu…"
        />
      </div>

      {/* mobile: horizontal category chips */}
      <div className="om-scroll -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:hidden">
        {CATS.map((c) => catChip(c, true))}
      </div>

      <div className="grid grid-cols-1 items-start gap-[26px] lg:grid-cols-[186px_1fr] xl:grid-cols-[186px_1fr_320px]">
        {/* desktop: category column */}
        <div className="sticky top-[100px] hidden lg:block">
          <Eyebrow className="mb-[10px] text-[11.5px]">Kategorie</Eyebrow>
          {CATS.map((c) => catChip(c, false))}
        </div>

        {/* grid */}
        <div>
          <div className="mb-[14px] flex items-baseline justify-between">
            <H as="h2" className="text-2xl font-semibold">
              {search ? "Wyniki wyszukiwania" : cat}
            </H>
            <span className="text-[13px] text-muted">
              {filtered.length} produktów
            </span>
          </div>
          {filtered.length ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-[repeat(auto-fill,minmax(215px,1fr))]">
              {filtered.map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          ) : (
            <div className="rounded-[6px] border border-dashed border-linen px-5 py-[50px] text-center text-muted">
              Brak produktów pasujących do wyszukiwania.
            </div>
          )}

          {/* mobile sticky go-to-order bar */}
          {count > 0 && (
            <Link
              href="/portal/zamowienie"
              className="sticky bottom-[76px] mt-4 flex items-center justify-between rounded-[4px] bg-brand-700 px-[18px] py-[14px] font-bold text-cream no-underline shadow-[0_8px_24px_rgba(61,31,26,.3)] xl:hidden"
            >
              Przejdź do zamówienia
              <span>{count} poz. →</span>
            </Link>
          )}
        </div>

        {/* order side panel (xl) */}
        <Card className="sticky top-[100px] hidden xl:block">
          <div className="flex items-center justify-between border-b border-linen px-[18px] py-4">
            <H as="div" className="text-lg font-semibold">
              Twoje zamówienie
            </H>
            <span
              className={`inline-flex h-6 min-w-6 items-center justify-center rounded-full px-[7px] text-xs font-bold ${
                count ? "bg-brand-700 text-cream" : "bg-linen text-[#7d7160]"
              }`}
            >
              {count}
            </span>
          </div>
          {count ? (
            <div className="om-scroll max-h-[340px] overflow-y-auto px-[18px] py-[6px]">
              {lines.map((l, i) => (
                <div
                  key={i}
                  className="flex items-center gap-[10px] border-b border-linen/50 py-[11px] last:border-b-0"
                >
                  <div className="min-w-0 flex-1">
                    <div className="text-sm leading-[1.25] font-semibold text-brand-900">
                      {l.name}
                    </div>
                    <div className="text-[12.5px] text-muted">
                      {l.qty} {l.unit}
                    </div>
                  </div>
                  <button
                    onClick={() => remove(i)}
                    className="cursor-pointer border-none bg-transparent text-xs font-semibold text-danger"
                  >
                    Usuń
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="px-[18px] py-[30px] text-center text-[13.5px] text-muted">
              Dodaj produkty z katalogu, aby rozpocząć zamówienie.
            </div>
          )}
          <div className="border-t border-linen px-[18px] py-[14px]">
            <Btn
              href="/portal/zamowienie"
              className={`w-full py-[13px] ${count ? "" : "pointer-events-none opacity-50"}`}
            >
              Przejdź do zamówienia
            </Btn>
          </div>
        </Card>
      </div>
    </div>
  );
}
