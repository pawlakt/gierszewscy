"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Btn, Chip, PageHead, Table, Td } from "@/components/ui";
import { PRODUCTS } from "@/lib/data";
import { productImages } from "@/lib/images";

const CHANGED = ["21.07.2026", "19.07.2026", "15.07.2026"];

export default function AdminProductsPage() {
  const router = useRouter();
  const data = PRODUCTS.slice(0, 10).map((p, i) => ({
    ...p,
    status: i % 5 === 4 ? "Ukryty" : "Aktywny",
    changed: CHANGED[i % 3],
  }));

  return (
    <div className="flex flex-col gap-[18px]">
      <PageHead
        eyebrow="Katalog"
        title="Produkty"
        right={
          <Btn href="/admin/produkty/nowy" className="px-5 py-3 text-[12.5px]">
            + Dodaj produkt
          </Btn>
        }
      />

      {/* mobile cards */}
      <div className="flex flex-col gap-3 md:hidden">
        {data.map((p) => (
          <div
            key={p.id}
            onClick={() => router.push("/admin/produkty/nowy")}
            className="flex cursor-pointer items-center gap-3 rounded-[4px] border border-linen bg-white p-3"
          >
            <div className="h-10 w-[46px] flex-none overflow-hidden rounded-[3px] bg-parchment">
              <Image
                src={productImages[p.id]}
                alt=""
                placeholder="blur"
                sizes="46px"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-bold text-brand-900">
                {p.name}
              </div>
              <div className="text-xs text-muted">
                {p.cat} · {p.units.join(", ")}
              </div>
            </div>
            <Chip tone={p.status === "Aktywny" ? "ok" : "off"}>{p.status}</Chip>
          </div>
        ))}
      </div>

      {/* desktop table */}
      <div className="hidden md:block">
        <Table headers={["", "Nazwa", "Kategoria", "Jednostki", "Status", "Zmiana", "Akcje"]}>
          {data.map((p) => (
            <tr
              key={p.id}
              onClick={() => router.push("/admin/produkty/nowy")}
              className="cursor-pointer hover:bg-cream/60"
            >
              <Td>
                <div className="h-10 w-[46px] overflow-hidden rounded-[3px] bg-parchment">
                  <Image
                    src={productImages[p.id]}
                    alt=""
                    placeholder="blur"
                    sizes="46px"
                    className="h-full w-full object-cover"
                  />
                </div>
              </Td>
              <Td>
                <strong className="text-brand-900">{p.name}</strong>
              </Td>
              <Td>{p.cat}</Td>
              <Td>{p.units.join(", ")}</Td>
              <Td>
                <Chip tone={p.status === "Aktywny" ? "ok" : "off"}>{p.status}</Chip>
              </Td>
              <Td>{p.changed}</Td>
              <Td>
                <div className="flex justify-end gap-[10px]">
                  <span className="text-[13px] font-semibold text-brand-700">Edytuj</span>
                  <span className="text-[13px] font-semibold text-muted">
                    {p.status === "Aktywny" ? "Ukryj" : "Pokaż"}
                  </span>
                </div>
              </Td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}
