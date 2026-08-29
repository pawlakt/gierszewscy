"use client";

import { Btn, Chip, PageHead } from "@/components/ui";
import { CATS, PRODUCTS } from "@/lib/data";
import { useToast } from "@/lib/toast";

export default function AdminCategoriesPage() {
  const toast = useToast();

  return (
    <div className="flex max-w-[760px] flex-col gap-[18px]">
      <PageHead
        eyebrow="Organizacja katalogu"
        title="Kategorie"
        right={
          <Btn onClick={() => toast("Nowa kategoria")} className="px-5 py-3 text-[12.5px]">
            + Dodaj kategorię
          </Btn>
        }
      />
      <div className="text-[13.5px] text-muted">
        Przeciągnij, aby zmienić kolejność kategorii w katalogu klienta.
      </div>
      <div className="flex flex-col gap-[10px]">
        {CATS.map((c, i) => (
          <div
            key={c}
            className="flex flex-wrap items-center gap-x-[14px] gap-y-2 rounded-[4px] border border-linen bg-white px-4 py-[14px]"
          >
            <span className="cursor-grab text-lg text-[#b8ab93]">⋮⋮</span>
            <div className="min-w-[140px] flex-1 text-[15.5px] font-semibold text-brand-900">
              {c}
            </div>
            <span className="text-[12.5px] text-muted">
              {PRODUCTS.filter((p) => p.cat === c).length} produktów
            </span>
            <Chip tone={i === 4 ? "off" : "ok"}>{i === 4 ? "Ukryta" : "Widoczna"}</Chip>
            <div className="flex gap-[10px]">
              <button
                onClick={() => toast("Zmiana nazwy kategorii")}
                className="cursor-pointer border-none bg-transparent text-[13px] font-semibold text-brand-700"
              >
                Zmień nazwę
              </button>
              <button
                onClick={() => toast(i === 4 ? "Kategoria widoczna" : "Kategoria ukryta")}
                className="cursor-pointer border-none bg-transparent text-[13px] font-semibold text-muted"
              >
                {i === 4 ? "Pokaż" : "Ukryj"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
