"use client";

import { Btn, Card, Field, H, Input, PageHead } from "@/components/ui";
import { useToast } from "@/lib/toast";

export default function ProfilePage() {
  const toast = useToast();

  return (
    <div className="flex max-w-[620px] flex-col gap-[22px]">
      <PageHead eyebrow="Twoje konto" title="Profil użytkownika" />

      <Card className="p-[22px]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Field label="Imię i nazwisko">
            <Input defaultValue="Anna Kowalska" />
          </Field>
          <Field label="Adres e-mail">
            <Input defaultValue="sklep.anna@example.pl" />
          </Field>
          <Field label="Numer telefonu">
            <Input defaultValue="605 112 340" />
          </Field>
          <Field label="Sklep">
            <Input
              defaultValue="Sklep spożywczy „Anna”"
              readOnly
              className="bg-parchment text-muted"
            />
          </Field>
        </div>
        <div className="mt-4">
          <Field
            label="Przypisane oddziały"
            hint="Zmiana danych firmy wymaga kontaktu z administratorem."
          >
            <Input
              defaultValue="Chojnice — Rynek 4; Chojnice — ul. Lipowa 9"
              readOnly
              className="bg-parchment text-muted"
            />
          </Field>
        </div>
      </Card>

      <Card className="p-[22px]">
        <H as="div" className="mb-[14px] text-lg font-semibold">
          Zmiana hasła
        </H>
        <div className="grid grid-cols-1 gap-[14px] md:grid-cols-2">
          <Field label="Nowe hasło">
            <Input type="password" placeholder="••••••••" />
          </Field>
          <Field label="Powtórz hasło">
            <Input type="password" placeholder="••••••••" />
          </Field>
        </div>
        <div className="mt-4">
          <Btn onClick={() => toast("Hasło zostało zmienione.")}>
            Zapisz nowe hasło
          </Btn>
        </div>
      </Card>

      <Btn href="/" kind="secondary" className="self-start">
        Wyloguj się
      </Btn>
    </div>
  );
}
