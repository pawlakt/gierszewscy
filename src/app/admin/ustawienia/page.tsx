"use client";

import { Btn, Card, Field, H, Input, PageHead, Select } from "@/components/ui";
import { useToast } from "@/lib/toast";

export default function AdminSettingsPage() {
  const toast = useToast();

  return (
    <div className="flex max-w-[680px] flex-col gap-5">
      <PageHead eyebrow="Konfiguracja" title="Ustawienia portalu" />

      <Card className="p-[22px]">
        <H as="div" className="mb-[14px] text-lg font-semibold">
          Zasady zamówień
        </H>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Field
            label="Godzina graniczna edycji"
            hint="Do tej godziny klient może edytować zamówienie w dniu jego złożenia."
          >
            <Input defaultValue="23:00" />
          </Field>
          <Field label="Minimalny czas realizacji">
            <Select
              className="w-full"
              options={["1 dzień roboczy", "2 dni robocze", "3 dni robocze"]}
            />
          </Field>
        </div>
      </Card>

      <Card className="p-[22px]">
        <H as="div" className="mb-[14px] text-lg font-semibold">
          Dane firmy
        </H>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Field label="Nazwa">
            <Input defaultValue="Masarnia Brusy Gierszewscy" />
          </Field>
          <Field label="Telefon kontaktowy">
            <Input defaultValue="52 398 24 11" />
          </Field>
          <Field label="E-mail">
            <Input defaultValue="biuro@masarniabrusy.pl" />
          </Field>
          <Field label="Adres">
            <Input defaultValue="ul. Gdańska 1, 89-632 Brusy" />
          </Field>
        </div>
      </Card>

      <div className="flex flex-wrap items-center gap-3">
        <Btn onClick={() => toast("Ustawienia zapisane")} className="px-[30px] py-[14px]">
          Zapisz ustawienia
        </Btn>
        <Btn href="/" kind="secondary">
          Wyloguj się
        </Btn>
      </div>
    </div>
  );
}
