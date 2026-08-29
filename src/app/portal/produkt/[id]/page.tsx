"use client";

import Image from "next/image";
import { use, useState } from "react";
import { notFound } from "next/navigation";
import {
  BackLink,
  Badge,
  Btn,
  Eyebrow,
  Field,
  H,
  Select,
  Stepper,
  Textarea,
} from "@/components/ui";
import { PRODUCTS } from "@/lib/data";
import { useCart } from "@/lib/cart";
import { useToast } from "@/lib/toast";
import { productImages } from "@/lib/images";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const p = PRODUCTS.find((x) => x.id === id);
  const { add, inOrder } = useCart();
  const toast = useToast();
  const [qty, setQty] = useState(1);
  const [unit, setUnit] = useState(p?.units[0] ?? "kg");
  if (!p) notFound();
  const count = inOrder(p.id);

  return (
    <div className="flex flex-col gap-5">
      <BackLink href="/portal/katalog">← Wróć do katalogu</BackLink>
      <div className="grid grid-cols-1 items-start gap-[34px] md:grid-cols-2">
        <div className="h-[240px] overflow-hidden rounded-[6px] bg-parchment md:h-[360px]">
          <Image
            src={productImages[p.id]}
            alt={p.name}
            placeholder="blur"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-[18px]">
          <div>
            <Eyebrow>{p.cat}</Eyebrow>
            <H className="mt-2 text-[28px] font-semibold md:text-4xl">
              {p.name}
            </H>
            {p.badges.length > 0 && (
              <div className="mt-3 flex gap-[6px]">
                {p.badges.map((b) => (
                  <Badge key={b}>{b}</Badge>
                ))}
              </div>
            )}
          </div>
          <p className="m-0 text-base leading-[1.7] text-ink">{p.desc}</p>
          <div className="grid max-w-[420px] grid-cols-2 gap-[14px]">
            <Field label="Jednostka">
              <Select
                options={p.units}
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="h-[44px] w-full"
              />
            </Field>
            <Field label="Ilość">
              <Stepper
                qty={qty}
                onDec={() => setQty((q) => Math.max(1, q - 1))}
                onInc={() => setQty((q) => q + 1)}
                className="w-fit"
              />
            </Field>
          </div>
          <Field label="Uwaga do produktu">
            <Textarea
              rows={3}
              placeholder="np. pakowanie próżniowe po 0,5 kg; plastry cienko krojone"
            />
          </Field>
          <div className="flex flex-wrap items-center gap-3">
            <Btn
              onClick={() => {
                add(p, qty, unit);
                toast(`Dodano do zamówienia: ${p.name}`);
              }}
              className="px-[30px] py-[14px]"
            >
              Dodaj do zamówienia
            </Btn>
            {count > 0 && (
              <span className="text-sm font-bold text-success">
                ✓ W zamówieniu: {count}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
