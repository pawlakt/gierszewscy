"use client";

import { useRouter } from "next/navigation";
import { Btn, Chip, PageHead, Table, Td } from "@/components/ui";
import { useToast } from "@/lib/toast";

const DATA: [string, string, string, string, string, string][] = [
  ["Sklep spożywczy „Anna”", "Chojnice", "2", "3", "Aktywny", "22.07.2026"],
  ["Delikatesy „U Marka”", "Brusy", "1", "1", "Aktywny", "20.07.2026"],
  ["Market „Grosik”", "Kościerzyna", "3", "2", "Aktywny", "22.07.2026"],
  ["Sklep „Kaszubski Smak”", "Bytów", "1", "1", "Zablokowany", "10.06.2026"],
];

export default function AdminClientsPage() {
  const router = useRouter();
  const toast = useToast();

  return (
    <div className="flex flex-col gap-[18px]">
      <PageHead
        eyebrow="Baza"
        title="Klienci i sklepy"
        right={
          <Btn onClick={() => toast("Nowy klient")} className="px-5 py-3 text-[12.5px]">
            + Dodaj klienta
          </Btn>
        }
      />

      {/* mobile cards */}
      <div className="flex flex-col gap-3 md:hidden">
        {DATA.map((c, i) => (
          <div
            key={i}
            onClick={() => router.push("/admin/klienci/anna")}
            className="cursor-pointer rounded-[4px] border border-linen bg-white p-[15px]"
          >
            <div className="mb-2 flex items-center justify-between gap-2">
              <strong className="text-brand-900">{c[0]}</strong>
              <Chip tone={c[4] === "Aktywny" ? "ok" : "off"}>{c[4]}</Chip>
            </div>
            <div className="text-[13.5px] leading-[1.7] text-ink">
              {c[1]} · oddziały: {c[2]} · użytkownicy: {c[3]}
              <br />
              Ostatnie zamówienie: {c[5]}
            </div>
          </div>
        ))}
      </div>

      {/* desktop table */}
      <div className="hidden md:block">
        <Table headers={["Sklep", "Miejscowość", "Oddziały", "Użytkownicy", "Status", "Ostatnie zam.", ""]}>
          {DATA.map((c, i) => (
            <tr
              key={i}
              onClick={() => router.push("/admin/klienci/anna")}
              className="cursor-pointer hover:bg-cream/60"
            >
              <Td>
                <strong className="text-brand-900">{c[0]}</strong>
              </Td>
              <Td>{c[1]}</Td>
              <Td>{c[2]}</Td>
              <Td>{c[3]}</Td>
              <Td>
                <Chip tone={c[4] === "Aktywny" ? "ok" : "off"}>{c[4]}</Chip>
              </Td>
              <Td>{c[5]}</Td>
              <Td className="text-right">
                <span className="text-[13px] font-semibold text-brand-700">
                  Szczegóły →
                </span>
              </Td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}
