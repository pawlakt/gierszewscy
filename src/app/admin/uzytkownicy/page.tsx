"use client";

import { Btn, Chip, PageHead, Table, Td } from "@/components/ui";
import { useToast } from "@/lib/toast";

const DATA: [string, string, string, string, string][] = [
  ["Anna Kowalska", "sklep.anna@example.pl", "Sklep „Anna”", "Chojnice — Rynek 4, Lipowa 9", "Aktywny"],
  ["Tomasz Kowalski", "tomek@example.pl", "Sklep „Anna”", "Chojnice — Rynek 4", "Aktywny"],
  ["Marek Nowak", "marek@umarka.pl", "Delikatesy „U Marka”", "Brusy", "Aktywny"],
  ["Ewa Lis", "ewa@ksmak.pl", "Kaszubski Smak", "Bytów", "Zablokowany"],
];

export default function AdminUsersPage() {
  const toast = useToast();

  return (
    <div className="flex flex-col gap-[18px]">
      <PageHead
        eyebrow="Dostępy"
        title="Użytkownicy"
        right={
          <Btn onClick={() => toast("Nowy użytkownik")} className="px-5 py-3 text-[12.5px]">
            + Dodaj użytkownika
          </Btn>
        }
      />

      {/* mobile cards */}
      <div className="flex flex-col gap-3 md:hidden">
        {DATA.map((u, i) => (
          <div key={i} className="rounded-[4px] border border-linen bg-white p-[15px]">
            <div className="mb-1 flex items-center justify-between gap-2">
              <strong className="text-brand-900">{u[0]}</strong>
              <Chip tone={u[4] === "Aktywny" ? "ok" : "off"}>{u[4]}</Chip>
            </div>
            <div className="text-[13.5px] leading-[1.7] text-ink">
              {u[1]}
              <br />
              {u[2]} · {u[3]}
            </div>
            <div className="mt-2 flex gap-3 text-[13px] font-semibold">
              <span className="text-brand-700">Edytuj</span>
              <span className="text-muted">Reset hasła</span>
              <span className="text-danger">
                {u[4] === "Aktywny" ? "Blokuj" : "Odblokuj"}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* desktop table */}
      <div className="hidden md:block">
        <Table headers={["Imię i nazwisko", "E-mail", "Sklep", "Oddziały", "Status", "Akcje"]}>
          {DATA.map((u, i) => (
            <tr key={i}>
              <Td>
                <strong className="text-brand-900">{u[0]}</strong>
              </Td>
              <Td>{u[1]}</Td>
              <Td>{u[2]}</Td>
              <Td>{u[3]}</Td>
              <Td>
                <Chip tone={u[4] === "Aktywny" ? "ok" : "off"}>{u[4]}</Chip>
              </Td>
              <Td>
                <div className="flex justify-end gap-[10px] text-[13px] font-semibold whitespace-nowrap">
                  <span className="text-brand-700">Edytuj</span>
                  <span className="text-muted">Reset hasła</span>
                  <span className="text-danger">
                    {u[4] === "Aktywny" ? "Blokuj" : "Odblokuj"}
                  </span>
                </div>
              </Td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}
