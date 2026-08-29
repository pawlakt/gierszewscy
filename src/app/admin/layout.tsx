"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Btn, Logo } from "@/components/ui";
import { Footer } from "@/components/footer";

const NAV: [string, string][] = [
  ["/admin", "Dashboard"],
  ["/admin/zamowienia", "Zamówienia"],
  ["/admin/produkty", "Produkty"],
  ["/admin/kategorie", "Kategorie"],
  ["/admin/klienci", "Klienci"],
  ["/admin/uzytkownicy", "Użytkownicy"],
  ["/admin/komunikaty", "Komunikaty"],
  ["/admin/ustawienia", "Ustawienia"],
];

const TABS: [string, string][] = [
  ["/admin", "Panel"],
  ["/admin/zamowienia", "Zamów."],
  ["/admin/produkty", "Produkty"],
  ["/admin/klienci", "Klienci"],
  ["/admin/komunikaty", "Komun."],
];

function isActive(pathname: string, href: string) {
  if (href === "/admin") return pathname === "/admin";
  return pathname.startsWith(href);
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isPrint = pathname.endsWith("/druk");

  if (isPrint) return <>{children}</>;

  return (
    <div className="flex min-h-dvh">
      {/* desktop sidebar */}
      <aside className="sticky top-0 hidden h-dvh w-[250px] flex-none flex-col border-r border-linen bg-white lg:flex">
        <div className="border-b border-linen px-[18px] py-[22px]">
          <Link href="/admin" className="no-underline">
            <Logo size={0.95} />
          </Link>
        </div>
        <nav className="om-scroll min-h-0 flex-1 overflow-y-auto px-2 py-[14px]">
          {NAV.map(([href, label]) => {
            const a = isActive(pathname, href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex w-full items-center gap-[10px] border-l-[3px] px-4 py-[11px] text-[14.5px] no-underline ${
                  a
                    ? "border-brand-700 bg-brand-700/10 font-bold text-brand-700"
                    : "border-transparent font-medium text-ink hover:bg-brand-700/5"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="flex flex-none flex-col gap-3 border-t border-linen px-[18px] py-4">
          <div className="flex items-center gap-[10px]">
            <div className="flex-1 text-right leading-[1.2]">
              <div className="text-[13.5px] font-bold text-brand-900">
                Piotr Gierszewski
              </div>
              <div className="text-[11.5px] text-[#8a7d6a]">Administrator</div>
            </div>
            <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-linen bg-parchment text-sm font-bold text-brand-700">
              PG
            </div>
          </div>
          <Link
            href="/"
            className="w-full rounded-[3px] border border-linen p-[9px] text-center text-[13px] font-semibold text-brand-700 no-underline"
          >
            Wyloguj się
          </Link>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        {/* top bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-linen bg-cream/90 px-4 py-3 backdrop-blur-lg md:px-10 md:py-4">
          <div className="lg:hidden">
            <Link href="/admin" className="no-underline">
              <Logo size={0.82} />
            </Link>
          </div>
          <div className="hidden text-[13px] font-semibold tracking-[.02em] text-[#8a7d6a] lg:block">
            Panel administracyjny
          </div>
          <div className="flex items-center gap-2">
            <Btn
              href="/admin/zamowienia/nowe"
              className="px-3 py-2 text-[11.5px] whitespace-nowrap md:px-[18px] md:py-[10px] md:text-[12.5px]"
            >
              <span className="md:hidden">+ Zamówienie</span>
              <span className="hidden md:inline">+ Dodaj zamówienie</span>
            </Btn>
            <Link
              href="/"
              className="rounded-[20px] border border-linen px-3 py-[6px] text-[12.5px] font-semibold text-brand-700 no-underline lg:hidden"
            >
              Wyloguj
            </Link>
          </div>
        </div>

        <main className="anim-fade w-full max-w-[1240px] flex-1 px-4 pt-6 pb-[100px] md:px-10 md:pt-[34px] lg:pb-[60px]">
          {children}
          <Footer className="mt-14" />
        </main>
      </div>

      {/* mobile bottom tabs */}
      <nav className="fixed inset-x-0 bottom-0 z-30 flex border-t border-linen bg-white pb-[env(safe-area-inset-bottom)] lg:hidden">
        {TABS.map(([href, label]) => {
          const on = isActive(pathname, href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex-1 border-t-2 px-[2px] pt-[11px] pb-[13px] text-center text-[11.5px] no-underline ${
                on
                  ? "border-brand-700 font-bold text-brand-700"
                  : "border-transparent font-medium text-[#8a7d6a]"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
