import Image from "next/image";
import { Btn, Eyebrow, Field, H, Input, Logo } from "@/components/ui";
import { Footer } from "@/components/footer";
import { hero } from "@/lib/images";

export default function LoginPage() {
  return (
    <div className="grid min-h-dvh grid-cols-1 lg:grid-cols-2">
      {/* mobile hero */}
      <div className="relative h-[200px] sm:h-[240px] lg:hidden">
        <Image
          src={hero}
          alt="Wędliny Masarni Brusy"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="flex items-start px-[22px] py-[30px] lg:items-center lg:p-[60px]">
        <div className="mx-auto flex w-full max-w-[380px] flex-col gap-[22px]">
          <Logo size={1.05} />
          <div>
            <Eyebrow className="mb-[10px]">Portal zamówień B2B</Eyebrow>
            <H className="text-[30px] font-semibold lg:text-4xl">
              Zaloguj się do portalu
            </H>
            <p className="m-0 mt-[10px] text-[15px] leading-[1.6] text-ink">
              Składaj zamówienia dla swojego sklepu wygodnie przez przeglądarkę.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <Field label="Login lub adres e-mail">
              <Input placeholder="np. sklep.anna@example.pl" defaultValue="sklep.anna@example.pl" />
            </Field>
            <Field label="Hasło">
              <Input type="password" defaultValue="••••••••" />
            </Field>
            <div className="text-right">
              <span className="cursor-pointer text-[13.5px] font-semibold text-brand-700">
                Nie pamiętam hasła
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-[10px]">
            <Btn href="/portal" className="w-full py-[15px]">
              Zaloguj się jako sklep
            </Btn>
            <Btn href="/admin" kind="secondary" className="w-full py-[14px]">
              Zaloguj się jako pracownik / admin
            </Btn>
          </div>

          <div className="border-t border-linen pt-4 text-[13px] leading-[1.6] text-muted">
            Problem z logowaniem? Zadzwoń:{" "}
            <strong className="text-brand-900">52 398 24 11</strong> (pn–pt
            7:00–15:00).
          </div>

          <Footer className="mt-1" />
        </div>
      </div>

      {/* desktop hero */}
      <div className="relative hidden lg:block">
        <Image
          src={hero}
          alt="Wędliny Masarni Brusy"
          fill
          priority
          placeholder="blur"
          sizes="50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent from-30% to-brand-900/70" />
        <div className="absolute right-[52px] bottom-[52px] left-[52px] text-cream">
          <div className="font-serif text-[34px] font-semibold">
            „Smak jak sprzed lat.”
          </div>
          <p className="m-0 mt-3 max-w-[420px] text-[15px] leading-[1.6] text-cream/85">
            Rodzinna masarnia z Brus. Wędzimy na drewnie olchowym od 1991 roku.
          </p>
        </div>
      </div>
    </div>
  );
}
