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
import { useToast } from "@/lib/toast";

export default function AdminMessageFormPage() {
  const router = useRouter();
  const toast = useToast();

  return (
    <div className="flex max-w-[720px] flex-col gap-5">
      <BackLink href="/admin/komunikaty">← Komunikaty</BackLink>
      <PageHead eyebrow="Publikacja" title="Nowy komunikat" />

      <Card className="p-[22px]">
        <Field label="Tytuł">
          <Input placeholder="np. Zmiana godzin przyjmowania zamówień" />
        </Field>
        <div className="mt-4">
          <Field label="Treść">
            <Textarea rows={6} placeholder="Treść komunikatu widoczna dla klientów…" />
          </Field>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Field label="Data publikacji">
            <Input defaultValue="23.07.2026" />
          </Field>
          <Field label="Odbiorcy">
            <Select
              className="w-full"
              options={["Wszyscy klienci", "Wybrani klienci", "Wybrane oddziały"]}
            />
          </Field>
        </div>
        <div className="mt-4">
          <Field label="Zdjęcie / załącznik (opcjonalnie)">
            <div className="flex h-[110px] items-center justify-center rounded-[4px] border border-dashed border-linen bg-[repeating-linear-gradient(135deg,#ECE2D0,#ECE2D0_11px,#E4D8C2_11px,#E4D8C2_22px)] p-[10px] text-center font-mono text-[11px] font-semibold tracking-[.03em] text-[#9c8d72]">
              przeciągnij plik lub kliknij
            </div>
          </Field>
        </div>
        <label className="mt-4 flex cursor-pointer items-center gap-2 text-sm">
          <input type="checkbox" />
          Oznacz jako ważny (wyróżnij na stronie głównej klienta)
        </label>
      </Card>

      <div className="flex flex-wrap gap-3">
        <Btn
          onClick={() => {
            toast("Komunikat opublikowany");
            router.push("/admin/komunikaty");
          }}
          className="px-[30px] py-[14px]"
        >
          Opublikuj komunikat
        </Btn>
        <Btn href="/admin/komunikaty" kind="secondary">
          Anuluj
        </Btn>
      </div>
    </div>
  );
}
