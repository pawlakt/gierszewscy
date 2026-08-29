"use client";

import { useRouter } from "next/navigation";
import {
  BackLink,
  Btn,
  Card,
  Field,
  Input,
  PageHead,
  Select,
  Textarea,
} from "@/components/ui";
import { CATS } from "@/lib/data";
import { useToast } from "@/lib/toast";

export default function AdminProductFormPage() {
  const router = useRouter();
  const toast = useToast();

  return (
    <div className="flex max-w-[760px] flex-col gap-5">
      <BackLink href="/admin/produkty">← Produkty</BackLink>
      <PageHead eyebrow="Katalog" title="Nowy produkt" />

      <Card className="p-[22px]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Field label="Nazwa produktu">
            <Input placeholder="np. Kiełbasa swojska podwędzana" />
          </Field>
          <Field label="Kategoria">
            <Select className="w-full" options={[...CATS]} />
          </Field>
        </div>
        <div className="mt-4">
          <Field label="Zdjęcie produktu">
            <div className="flex h-[150px] items-center justify-center rounded-[4px] border border-dashed border-linen bg-[repeating-linear-gradient(135deg,#ECE2D0,#ECE2D0_11px,#E4D8C2_11px,#E4D8C2_22px)] p-[10px] text-center font-mono text-[11px] font-semibold tracking-[.03em] whitespace-pre-line text-[#9c8d72]">
              {"przeciągnij zdjęcie\nlub kliknij, aby wybrać"}
            </div>
          </Field>
        </div>
        <div className="mt-4">
          <div className="mb-2 text-[13px] font-semibold text-brand-900">
            Dostępne jednostki sprzedaży
          </div>
          <div className="flex gap-5">
            {["kg", "szt.", "paczka"].map((u) => (
              <label key={u} className="flex cursor-pointer items-center gap-[7px] text-sm">
                <input type="checkbox" defaultChecked={u !== "paczka"} />
                {u}
              </label>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <Field label="Krótki opis">
            <Textarea rows={3} placeholder="Opis produktu widoczny dla klienta…" />
          </Field>
        </div>
        <label className="mt-4 flex cursor-pointer items-center gap-2 text-sm">
          <input type="checkbox" defaultChecked />
          Produkt aktywny (widoczny w katalogu klienta)
        </label>
      </Card>

      <div className="flex flex-wrap gap-3">
        <Btn
          onClick={() => {
            toast("Produkt zapisany");
            router.push("/admin/produkty");
          }}
          className="px-[30px] py-[14px]"
        >
          Opublikuj produkt
        </Btn>
        <Btn href="/admin/produkty" kind="secondary">
          Anuluj
        </Btn>
      </div>
    </div>
  );
}
