"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui";
import { Footer } from "@/components/footer";
import { useCart } from "@/lib/cart";

const NAV: [string, string][] = [
  ["/portal", "Strona główna"],
  ["/portal/katalog", "Katalog"],
  ["/portal/historia", "Historia zamówień"],
  ["/portal/komunikaty", "Komunikaty"],
  ["/portal/profil", "Profil"],
];

const TABS: [string, string][] = [
  ["/portal", "Start"],
  ["/portal/katalog", "Katalog"],
  ["/portal/zamowienie", "Zamówienie"],
  ["/portal/historia", "Historia"],
  ["/portal/profil", "Konto"],
];

function isActive(pathname: string, href: string) {
  if (href === "/portal") return pathname === "/portal";
  if (href === "/portal/katalog")
    return (
      pathname.startsWith("/portal/katalog") ||
      pathname.startsWith("/portal/produkt") ||
      pathname.startsWith("/portal/zamowienie") ||
      pathname.startsWith("/portal/podsumowanie") ||
      pathname.startsWith("/portal/potwierdzenie")
    );
  return pathname.startsWith(href);
}

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { count } = useCart();

  const orderBadge = (
    <span
      className={`inline-flex h-[22px] min-w-[22px] items-center justify-center rounded-full px-[6px] text-xs font-bold ${
        count ? "bg-brand-700 text-cream" : "bg-linen text-[#7d7160]"
      }`}
    >
      {count}
    </span>
  );

  return (
    <div className="flex min-h-dvh flex-col">
      {/* header */}
      <header className="sticky top-0 z-20 border-b border-linen bg-cream/90 backdrop-blur-lg">
        <div className="mx-auto flex h-[62px] max-w-[1240px] items-center gap-4 px-4 md:h-[70px] md:gap-[34px] md:px-10">
          <Link href="/portal" className="no-underline">
            <Logo size={0.9} />
          </Link>
          <nav className="ml-3 hidden gap-[26px] md:flex">
            {NAV.map(([href, label]) => {
              const a = isActive(pathname, href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`border-b-2 px-[2px] py-[6px] text-[14.5px] no-underline ${
                    a
                      ? "border-accent font-bold text-brand-900"
                      : "border-transparent font-medium text-ink hover:text-brand-900"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          <div className="ml-auto flex items-center gap-3 md:gap-5">
            <Link
              href="/portal/zamowienie"
              className="flex items-center gap-2 rounded-[3px] border border-linen px-3 py-[7px] text-[13px] font-semibold text-brand-900 no-underline md:px-[14px] md:py-[9px] md:text-[13.5px]"
            >
              <span className="hidden sm:inline">Twoje zamówienie</span>
              <span className="sm:hidden">Zam.</span>
              {orderBadge}
            </Link>
            <div className="hidden items-center gap-[10px] lg:flex">
              <div className="text-right leading-[1.2]">
                <div className="text-[13.5px] font-bold text-brand-900">
                  Anna Kowalska
                </div>
                <div className="text-[11.5px] text-[#8a7d6a]">
                  Sklep „Anna”, Chojnice
                </div>
              </div>
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-linen bg-parchment text-sm font-bold text-brand-700">
                AK
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* content */}
      <main className="anim-fade mx-auto w-full max-w-[1240px] flex-1 px-4 pt-6 pb-[100px] md:px-10 md:pt-[34px] md:pb-[70px]">
        {children}
        <Footer className="mt-14" />
      </main>

      {/* mobile bottom tabs */}
      <nav className="fixed inset-x-0 bottom-0 z-30 flex border-t border-linen bg-white pb-[env(safe-area-inset-bottom)] md:hidden">
        {TABS.map(([href, label]) => {
          const on =
            href === "/portal/zamowienie"
              ? pathname.startsWith("/portal/zamowienie") ||
                pathname.startsWith("/portal/podsumowanie") ||
                pathname.startsWith("/portal/potwierdzenie")
              : href === "/portal/katalog"
                ? pathname.startsWith("/portal/katalog") ||
                  pathname.startsWith("/portal/produkt")
                : href === "/portal"
                  ? pathname === "/portal"
                  : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`relative flex-1 border-t-2 px-[2px] pt-[11px] pb-[13px] text-center text-[11.5px] no-underline ${
                on
                  ? "border-brand-700 font-bold text-brand-700"
                  : "border-transparent font-medium text-[#8a7d6a]"
              }`}
            >
              {label}
              {href === "/portal/zamowienie" && count > 0 && (
                <span className="absolute top-[6px] right-[22%] h-[7px] w-[7px] rounded-full bg-brand-700" />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
