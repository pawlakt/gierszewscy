"use client";

import Image from "next/image";
import {
  Btn,
  Card,
  Eyebrow,
  Field,
  H,
  Input,
  Stepper,
  Textarea,
} from "@/components/ui";
import { useCart } from "@/lib/cart";
import { productImages, pustyKoszyk } from "@/lib/images";

export default function OrderPage() {
  const { lines, count, setQty, setNote, remove } = useCart();

  if (!count) {
    return (
      <div className="mx-auto flex max-w-[560px] flex-col items-center gap-[18px] py-[50px] text-center">
        <Image
          src={pustyKoszyk}
          alt=""
          className="h-[130px] w-[130px] object-contain"
        />
        <H className="text-[28px] font-semibold">Twoje zamówienie jest puste</H>
        <p className="m-0 text-[15px] text-ink">
          Dodaj produkty z katalogu, aby rozpocząć nowe zamówienie.
        </p>
        <Btn href="/portal/katalog">Przejdź do katalogu</Btn>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[22px]">
      <div>
        <Eyebrow>Bieżące zamówienie</Eyebrow>
        <H className="mt-2 text-[26px] font-semibold md:text-[32px]">
          Twoje zamówienie
        </H>
      </div>

      <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[1fr_340px]">
        <div>
          <div className="flex flex-col">
            {lines.map((l, i) => (
              <div
                key={i}
                className="flex flex-wrap items-start gap-4 border-b border-linen py-[18px]"
              >
                <div className="h-[74px] w-[74px] flex-none overflow-hidden rounded-[3px] bg-parchment">
                  <Image
                    src={productImages[l.id]}
                    alt={l.name}
                    placeholder="blur"
                    sizes="74px"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-[180px] flex-1">
                  <div className="text-base font-bold text-brand-900">
                    {l.name}
                  </div>
                  <div className="mb-[9px] text-[12.5px] text-muted">
                    {l.cat}
                  </div>
                  <Input
                    value={l.note}
                    onChange={(e) => setNote(i, e.target.value)}
                    placeholder="Uwaga do pozycji (np. pakowanie, gramatura)"
                    className="max-w-[420px] px-[11px] py-[9px] text-sm"
                  />
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2">
                    <Stepper
                      qty={l.qty}
                      onDec={() => setQty(i, -1)}
                      onInc={() => setQty(i, 1)}
                    />
                    <span className="min-w-[44px] text-sm font-semibold text-ink">
                      {l.unit}
                    </span>
                  </div>
                  <button
                    onClick={() => remove(i)}
                    className="cursor-pointer border-none bg-transparent text-[13px] font-semibold text-danger"
                  >
                    Usuń pozycję
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Btn
            href="/portal/katalog"
            kind="ghost"
            className="mt-4 rounded-[3px] border border-solid border-linen px-[18px] py-[11px] text-brand-700"
          >
            + Dodaj kolejne produkty
          </Btn>
        </div>

        <Card className="lg:sticky lg:top-[100px]">
          <div className="p-5">
            <H as="div" className="mb-4 text-lg font-semibold">
              Szczegóły zamówienia
            </H>
            <div className="flex flex-col gap-[15px]">
              <Field label="Oczekiwany termin realizacji" hint="Na kiedy zamówienie">
                <Input defaultValue="26.07.2026" className="font-semibold" />
              </Field>
              <Field label="Oddział / sklep">
                <select
                  defaultValue="a"
                  className="w-full rounded-[3px] border border-linen bg-white px-[13px] py-[11px] text-[15px] text-ink"
                >
                  <option value="a">Sklep „Anna”, Chojnice, Rynek 4</option>
                  <option value="b">Sklep „Anna”, Chojnice, ul. Lipowa 9</option>
                </select>
              </Field>
              <Field label="Uwagi do całego zamówienia">
                <Textarea
                  rows={3}
                  placeholder="np. proszę spakować osobno wyroby garmażeryjne"
                />
              </Field>
            </div>
          </div>
          <div className="rounded-b-[4px] border-t border-linen bg-parchment px-5 py-4">
            <div className="mb-[14px] flex justify-between text-sm font-semibold text-brand-900">
              <span>Liczba pozycji</span>
              <span>{count}</span>
            </div>
            <Btn href="/portal/podsumowanie" className="w-full py-[14px]">
              Przejdź do podsumowania
            </Btn>
          </div>
        </Card>
      </div>
    </div>
  );
}
