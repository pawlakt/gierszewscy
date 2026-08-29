"use client";

import { useRouter } from "next/navigation";
import {
  BackLink,
  Btn,
  Card,
  Field,
  H,
  Input,
  PageHead,
  Select,
  Table,
  Td,
} from "@/components/ui";
import { PRODUCTS } from "@/lib/data";
import { useToast } from "@/lib/toast";

const ROWS: [string, string, string][] = [
  ["Kiełbasa swojska podwędzana", "6", "kg"],
  ["Baleron pieczony", "3", "szt."],
];

export default function AdminAddOrderPage() {
  const router = useRouter();
  const toast = useToast();

  return (
    <div className="flex max-w-[820px] flex-col gap-5">
      <BackLink href="/admin/zamowienia">← Lista zamówień</BackLink>
      <PageHead eyebrow="Zamówienie spoza portalu" title="Ręczne dodawanie zamówienia" />

      <Card className="p-[22px]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Field label="Sklep">
            <Select
              className="w-full"
              options={[
                "Sklep „Anna”, Chojnice",
                "Delikatesy „U Marka”, Brusy",
                "Market „Grosik”, Kościerzyna",
              ]}
            />
          </Field>
          <Field label="Oddział">
            <Select className="w-full" options={["Chojnice — Rynek 4", "Chojnice — ul. Lipowa 9"]} />
          </Field>
          <Field label="Użytkownik">
            <Select className="w-full" options={["Anna Kowalska", "Wprowadzone przez obsługę"]} />
          </Field>
          <Field label="Źródło zamówienia">
            <Select className="w-full" options={["Telefon", "E-mail", "Papier / zdjęcie", "Inne"]} />
          </Field>
          <Field label="Termin realizacji">
            <Input defaultValue="26.07.2026" />
          </Field>
        </div>
      </Card>

      <Card className="p-[22px]">
        <H as="div" className="mb-[14px] text-lg font-semibold">
          Produkty
        </H>
        <div className="mb-[14px] flex flex-wrap items-end gap-2">
          <div className="min-w-[180px] flex-1">
            <Field label="Produkt">
              <Select className="w-full" options={PRODUCTS.slice(0, 10).map((p) => p.name)} />
            </Field>
          </div>
          <Field label="Ilość">
            <Input defaultValue="1" className="w-20" />
          </Field>
          <Field label="Jedn.">
            <Select options={["kg", "szt.", "paczka"]} />
          </Field>
          <Btn onClick={() => toast("Dodano pozycję")} className="px-5 py-3">
            Dodaj
          </Btn>
        </div>
        <Table headers={["Produkt", "Ilość", "Jedn.", ""]}>
          {ROWS.map((r, i) => (
            <tr key={i}>
              <Td>{r[0]}</Td>
              <Td>{r[1]}</Td>
              <Td>{r[2]}</Td>
              <Td className="text-right">
                <button className="cursor-pointer border-none bg-transparent text-[13px] font-semibold text-danger">
                  Usuń
                </button>
              </Td>
            </tr>
          ))}
        </Table>
      </Card>

      <Field label="Uwagi do zamówienia">
        <textarea
          rows={3}
          placeholder="Przekazane telefonicznie uwagi…"
          className="w-full resize-y rounded-[3px] border border-linen bg-white px-[13px] py-[11px] font-sans text-[15px] text-ink"
        />
      </Field>

      <div className="flex flex-wrap gap-3">
        <Btn
          onClick={() => {
            toast("Zamówienie zapisane");
            router.push("/admin/zamowienia");
          }}
          className="px-[34px] py-[14px]"
        >
          Zapisz zamówienie
        </Btn>
        <Btn href="/admin/zamowienia" kind="secondary">
          Anuluj
        </Btn>
      </div>
    </div>
  );
}
