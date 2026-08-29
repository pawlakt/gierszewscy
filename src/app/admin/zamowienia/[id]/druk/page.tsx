"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { Btn } from "@/components/ui";
import { ORDERS, srcLabel } from "@/lib/data";

const PRODUCTS_PRINT: [string, string, string, string][] = [
  ["Kiełbasa swojska podwędzana", "8", "kg", "pakować po 1 kg"],
  ["Szynka wędzona swojska", "5", "kg", "plastry"],
  ["Kabanosy wieprzowe", "12", "paczka", ""],
  ["Pasztet pieczony domowy", "6", "szt.", ""],
];

function Line({ l, v }: { l: string; v: string }) {
  return (
    <div className="mb-[3px] flex gap-2 text-[13px]">
      <span className="min-w-[150px] text-[#555]">{l}</span>
      <strong>{v}</strong>
    </div>
  );
}

export default function PrintPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const o = ORDERS.find((x) => x.id === id);
  if (!o) notFound();

  return (
    <div className="min-h-dvh bg-[#555] px-4 py-[30px] print:bg-white print:p-0">
      <div className="mx-auto flex max-w-[820px] flex-col gap-[14px]">
        <div className="no-print flex justify-center gap-[10px]">
          <Btn onClick={() => window.print()}>Drukuj</Btn>
          <Btn href={`/admin/zamowienia/${o.id}`} kind="secondary" className="bg-cream">
            Wróć
          </Btn>
        </div>
        <div className="bg-white px-6 py-10 font-sans text-[#111] shadow-[0_10px_40px_rgba(0,0,0,.3)] md:px-11 print:shadow-none">
          <div className="mb-[18px] flex flex-wrap items-start justify-between gap-2 border-b-2 border-[#111] pb-[14px]">
            <div>
              <div className="font-serif text-[22px] font-bold">
                Masarnia Brusy Gierszewscy
              </div>
              <div className="text-xs text-[#555]">
                Karta zamówienia — magazyn / produkcja
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold">{o.no}</div>
              <div className="text-xs text-[#555]">Wydruk: 23.07.2026</div>
            </div>
          </div>

          <div className="mb-[18px] grid grid-cols-1 gap-1 sm:grid-cols-2">
            <div>
              <Line l="Sklep:" v={o.shop} />
              <Line l="Oddział:" v={o.branch} />
              <Line l="Kontakt:" v="605 112 340" />
            </div>
            <div>
              <Line l="Data złożenia:" v={o.date} />
              <Line l="Termin realizacji:" v={o.term} />
              <Line l="Źródło:" v={srcLabel(o.source)} />
            </div>
          </div>

          <div className="om-scroll overflow-x-auto">
            <table className="mb-[18px] w-full border-collapse text-sm">
              <thead>
                <tr>
                  {["Lp.", "Produkt", "Ilość", "Jedn.", "Uwagi"].map((hd) => (
                    <th
                      key={hd}
                      className="border-b-[1.5px] border-[#111] px-[6px] py-[7px] text-left text-xs uppercase"
                    >
                      {hd}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PRODUCTS_PRINT.map((p, i) => (
                  <tr key={i}>
                    {[String(i + 1), p[0], p[1], p[2], p[3]].map((c, j) => (
                      <td key={j} className="border-b border-[#ccc] px-[6px] py-[9px]">
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mb-[6px] text-xs font-bold text-[#333]">
            Uwagi ogólne:
          </div>
          <div className="mb-5 min-h-10 border border-[#ccc] p-2 text-[13px]">
            Dostawa w godzinach porannych. Wyroby garmażeryjne spakować osobno.
          </div>
          <div className="mb-[6px] text-xs font-bold text-[#333]">
            Notatki magazynu:
          </div>
          <div className="mb-6 h-[70px] border border-[#ccc]" />
          <div className="flex justify-between gap-10 text-xs text-[#333]">
            <div className="flex-1 border-t border-[#111] pt-[6px]">
              Przygotował (podpis)
            </div>
            <div className="flex-1 border-t border-[#111] pt-[6px]">
              Potwierdzenie realizacji
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
