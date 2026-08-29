"use client";

import { useRouter } from "next/navigation";
import { Btn, Chip, PageHead, Table, Td } from "@/components/ui";
import { MESSAGES } from "@/lib/data";

export default function AdminMessagesPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-[18px]">
      <PageHead
        eyebrow="Informacje dla klientów"
        title="Komunikaty"
        right={
          <Btn href="/admin/komunikaty/nowy" className="px-5 py-3 text-[12.5px]">
            + Nowy komunikat
          </Btn>
        }
      />

      {/* mobile cards */}
      <div className="flex flex-col gap-3 md:hidden">
        {MESSAGES.map((m) => (
          <div
            key={m.id}
            onClick={() => router.push("/admin/komunikaty/nowy")}
            className="cursor-pointer rounded-[4px] border border-linen bg-white p-[15px]"
          >
            <div className="mb-1 flex items-center justify-between gap-2">
              <strong className="text-brand-900">{m.title}</strong>
              {m.important ? (
                <Chip tone="src">Ważny</Chip>
              ) : (
                <span className="text-[13px] text-muted">Zwykły</span>
              )}
            </div>
            <div className="text-[13.5px] text-ink">
              {m.date} · <Chip tone="ok">Opublikowany</Chip>
            </div>
          </div>
        ))}
      </div>

      {/* desktop table */}
      <div className="hidden md:block">
        <Table headers={["Tytuł", "Data publikacji", "Typ", "Status", ""]}>
          {MESSAGES.map((m) => (
            <tr
              key={m.id}
              onClick={() => router.push("/admin/komunikaty/nowy")}
              className="cursor-pointer hover:bg-cream/60"
            >
              <Td>
                <strong className="text-brand-900">{m.title}</strong>
              </Td>
              <Td>{m.date}</Td>
              <Td>
                {m.important ? (
                  <Chip tone="src">Ważny</Chip>
                ) : (
                  <span className="text-muted">Zwykły</span>
                )}
              </Td>
              <Td>
                <Chip tone="ok">Opublikowany</Chip>
              </Td>
              <Td className="text-right">
                <span className="text-[13px] font-semibold text-brand-700">
                  Edytuj
                </span>
              </Td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}
