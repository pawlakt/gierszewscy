"use client";

import Image from "next/image";
import { use } from "react";
import { notFound } from "next/navigation";
import { BackLink, Badge, H } from "@/components/ui";
import { MESSAGES } from "@/lib/data";
import { messageImages } from "@/lib/images";

export default function MessagePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const m = MESSAGES.find((x) => x.id === id);
  if (!m) notFound();

  return (
    <div className="flex max-w-[680px] flex-col gap-[18px]">
      <BackLink href="/portal/komunikaty">← Komunikaty</BackLink>
      <div>
        {m.important && (
          <div className="mb-[10px]">
            <Badge tone="accent">Ważny komunikat</Badge>
          </div>
        )}
        <H className="text-[26px] font-semibold md:text-[32px]">{m.title}</H>
        <div className="mt-2 text-[13.5px] text-muted">
          Opublikowano {m.date}
        </div>
      </div>
      <div className="h-[220px] overflow-hidden rounded-[6px] bg-parchment">
        <Image
          src={messageImages[m.id]}
          alt=""
          placeholder="blur"
          priority
          sizes="(max-width: 768px) 100vw, 680px"
          className="h-full w-full object-cover"
        />
      </div>
      <p className="m-0 text-[16.5px] leading-[1.75] text-ink">{m.body}</p>
    </div>
  );
}
