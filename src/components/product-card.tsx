"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Badge, Btn, Card, Select, Stepper } from "@/components/ui";
import type { Product } from "@/lib/data";
import { useCart } from "@/lib/cart";
import { useToast } from "@/lib/toast";
import { productImages } from "@/lib/images";

export function ProductCard({ p }: { p: Product }) {
  const { add, inOrder } = useCart();
  const toast = useToast();
  const [qty, setQty] = useState(1);
  const [unit, setUnit] = useState(p.units[0]);
  const count = inOrder(p.id);

  return (
    <Card className="flex flex-col">
      <div className="relative">
        <Link href={`/portal/produkt/${p.id}`} className="block">
          <div className="h-[150px] overflow-hidden bg-parchment">
            <Image
              src={productImages[p.id]}
              alt={p.name}
              placeholder="blur"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 250px"
              className="h-full w-full object-cover"
            />
          </div>
        </Link>
        {p.badges.length > 0 && (
          <div className="absolute top-[9px] left-[9px] flex max-w-[80%] flex-wrap gap-[5px]">
            {p.badges.map((b) => (
              <span key={b} className="rounded-[2px] bg-cream/95">
                <Badge>{b}</Badge>
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-[11px] px-[15px] pt-[13px] pb-[15px]">
        <div>
          <Link
            href={`/portal/produkt/${p.id}`}
            className="font-serif text-lg leading-[1.2] font-semibold text-brand-900 no-underline"
          >
            {p.name}
          </Link>
          <div className="mt-[2px] text-[12.5px] text-muted">{p.cat}</div>
        </div>
        <div className="flex gap-2">
          <Stepper
            qty={qty}
            onDec={() => setQty((q) => Math.max(1, q - 1))}
            onInc={() => setQty((q) => q + 1)}
          />
          <Select
            options={p.units}
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="h-[44px] flex-1"
          />
        </div>
        <div className="flex items-center gap-[10px]">
          <Btn
            onClick={() => {
              add(p, qty, unit);
              toast(`Dodano do zamówienia: ${p.name}`);
            }}
            className="flex-1 px-2 py-[11px] text-xs"
          >
            Dodaj do zamówienia
          </Btn>
          {count > 0 && (
            <span className="text-xs font-bold whitespace-nowrap text-success">
              ✓ {count}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}
