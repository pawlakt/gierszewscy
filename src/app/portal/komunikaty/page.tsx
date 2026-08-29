"use client";

import { useRouter } from "next/navigation";
import { Badge, PageHead } from "@/components/ui";
import { MESSAGES } from "@/lib/data";

export default function MessagesPage() {
  const router = useRouter();

  return (
    <div className="flex max-w-[760px] flex-col gap-[18px]">
      <PageHead eyebrow="Od dostawcy" title="Komunikaty" />
      <div className="flex flex-col gap-3">
        {MESSAGES.map((m) => (
          <div
            key={m.id}
            onClick={() => router.push(`/portal/komunikaty/${m.id}`)}
            className={`flex cursor-pointer items-start gap-[14px] rounded-[4px] border border-linen border-l-4 bg-white px-[18px] py-4 ${
              m.important ? "border-l-accent" : "border-l-linen"
            }`}
          >
            <div className="flex-1">
              <div className="mb-1 flex flex-wrap items-center gap-2">
                {m.unread ? (
                  <Badge tone="accent">Nowy</Badge>
                ) : (
                  <span className="text-[11.5px] font-semibold text-muted">
                    Przeczytany
                  </span>
                )}
                <span className="text-xs text-muted">{m.date}</span>
              </div>
              <div className="text-base font-bold text-brand-900">{m.title}</div>
              <div className="mt-[2px] text-sm text-ink">{m.excerpt}</div>
            </div>
            <span className="font-bold text-brand-700">→</span>
          </div>
        ))}
      </div>
    </div>
  );
}
