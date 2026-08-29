"use client";

import Link from "next/link";
import type { OrderStatus } from "@/lib/data";

/* ---------- typography ---------- */

export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`text-[12.5px] font-bold tracking-[.18em] uppercase text-brand-700 ${className}`}
    >
      {children}
    </div>
  );
}

export function H({
  as: Tag = "h1",
  children,
  className = "",
}: {
  as?: "h1" | "h2" | "div";
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Tag
      className={`font-serif text-brand-900 m-0 leading-[1.1] tracking-[-.01em] ${className}`}
    >
      {children}
    </Tag>
  );
}

/* ---------- buttons ---------- */

const BTN_BASE =
  "inline-flex cursor-pointer items-center justify-center rounded-[2px] border-none text-[13.5px] font-bold tracking-[.06em] uppercase leading-[1.1] transition-all px-[30px] py-[13px] text-center";

const BTN_KINDS: Record<string, string> = {
  primary: "bg-brand-700 text-cream shadow-[0_1px_2px_rgba(61,31,26,.2)] hover:bg-brand-500",
  secondary:
    "bg-transparent text-brand-700 border border-solid border-brand-700 hover:bg-brand-700/5",
  dark: "bg-accent text-brand-900 hover:brightness-105",
  danger: "bg-transparent text-danger border border-solid border-danger hover:bg-danger/5",
  ghost:
    "bg-transparent text-ink px-3 py-2 normal-case tracking-normal font-semibold text-sm",
};

export function Btn({
  children,
  onClick,
  href,
  kind = "primary",
  className = "",
  type,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  kind?: keyof typeof BTN_KINDS;
  className?: string;
  type?: "button" | "submit";
}) {
  const cls = `${BTN_BASE} ${BTN_KINDS[kind]} ${className}`;
  if (href)
    return (
      <Link href={href} onClick={onClick} className={cls}>
        {children}
      </Link>
    );
  return (
    <button type={type ?? "button"} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function BackLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="self-start text-sm font-semibold text-brand-700 no-underline hover:text-brand-500"
    >
      {children}
    </Link>
  );
}

/* ---------- surfaces ---------- */

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[4px] border border-linen bg-white shadow-[0_2px_12px_rgba(61,31,26,.06)] ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------- badges / pills / chips ---------- */

export function Badge({
  children,
  tone = "success",
}: {
  children: React.ReactNode;
  tone?: "success" | "accent";
}) {
  const t =
    tone === "success"
      ? "bg-success/10 text-success"
      : "bg-accent/15 text-[#8a5a12]";
  return (
    <span
      className={`rounded-[2px] px-2 py-[3px] text-[11px] font-bold tracking-[.02em] ${t}`}
    >
      {children}
    </span>
  );
}

const STATUS_STYLES: Record<OrderStatus, { chip: string; dot: string }> = {
  Oczekuje: { chip: "bg-accent/15 text-[#8a5a12]", dot: "bg-accent" },
  Przyjęte: { chip: "bg-info/15 text-info", dot: "bg-info" },
  Zrealizowane: { chip: "bg-success/15 text-success", dot: "bg-success" },
};

export function StatusPill({ status }: { status: OrderStatus }) {
  const s = STATUS_STYLES[status];
  return (
    <span
      className={`inline-flex items-center gap-[6px] rounded-[2px] px-[10px] py-[3px] text-xs font-semibold whitespace-nowrap ${s.chip}`}
    >
      <span className={`h-[7px] w-[7px] rounded-full ${s.dot}`} />
      {status}
    </span>
  );
}

export function Chip({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "ok" | "off" | "src" | "neutral";
}) {
  const t = {
    ok: "bg-success/15 text-success",
    off: "bg-danger/10 text-danger",
    src: "bg-info/10 text-info",
    neutral: "bg-parchment text-[#7d7160]",
  }[tone];
  return (
    <span
      className={`rounded-[2px] px-[9px] py-[3px] text-xs font-bold whitespace-nowrap ${t}`}
    >
      {children}
    </span>
  );
}

/* ---------- forms ---------- */

export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-[6px]">
      <span className="text-[13px] font-semibold text-brand-900">{label}</span>
      {children}
      {hint && <span className="text-xs text-[#9a8b70]">{hint}</span>}
    </label>
  );
}

export const INPUT_CLS =
  "w-full rounded-[3px] border border-linen bg-white px-[13px] py-[11px] text-[15px] text-ink";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${INPUT_CLS} ${props.className ?? ""}`} />;
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`${INPUT_CLS} resize-y font-sans ${props.className ?? ""}`}
    />
  );
}

export function Select({
  options,
  className = "",
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { options: string[] }) {
  return (
    <select
      {...props}
      className={`cursor-pointer rounded-[3px] border border-linen bg-white px-3 py-[10px] text-sm font-semibold text-ink ${className}`}
    >
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

export function Stepper({
  qty,
  onDec,
  onInc,
  className = "",
}: {
  qty: number;
  onDec: () => void;
  onInc: () => void;
  className?: string;
}) {
  const b =
    "h-[42px] w-9 cursor-pointer border-none bg-parchment text-[19px] font-bold leading-none text-brand-700 hover:bg-linen/60";
  return (
    <div
      className={`inline-flex items-center overflow-hidden rounded-[3px] border border-linen ${className}`}
    >
      <button type="button" aria-label="Zmniejsz ilość" onClick={onDec} className={b}>
        −
      </button>
      <span className="min-w-10 text-center text-[15px] font-bold text-brand-900">
        {qty}
      </span>
      <button type="button" aria-label="Zwiększ ilość" onClick={onInc} className={b}>
        +
      </button>
    </div>
  );
}

/* ---------- data display ---------- */

export function Table({
  headers,
  children,
}: {
  headers: string[];
  children: React.ReactNode;
}) {
  return (
    <Card className="overflow-hidden">
      <div className="om-scroll overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              {headers.map((hd, i) => (
                <th
                  key={i}
                  className="whitespace-nowrap border-b border-linen bg-parchment px-4 py-[13px] text-left text-[11.5px] font-bold tracking-[.05em] uppercase text-muted"
                >
                  {hd}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </Card>
  );
}

export function Td({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <td className={`border-b border-linen/40 px-4 py-[14px] align-middle text-ink ${className}`}>
      {children}
    </td>
  );
}

export function MetaGrid({
  pairs,
  className = "",
}: {
  pairs: [string, React.ReactNode][];
  className?: string;
}) {
  return (
    <div
      className={`grid gap-[2px] overflow-hidden rounded-[4px] border border-linen bg-linen ${className}`}
    >
      {pairs.map(([a, b], i) => (
        <div key={i} className="bg-white px-4 py-3">
          <div className="mb-[3px] text-[11.5px] font-semibold tracking-[.03em] text-muted">
            {a}
          </div>
          <div className="text-[14.5px] font-semibold text-brand-900">{b}</div>
        </div>
      ))}
    </div>
  );
}

export function PageHead({
  eyebrow,
  title,
  right,
}: {
  eyebrow: string;
  title: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="mb-1 flex flex-wrap items-end justify-between gap-4">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <H className="mt-2 text-[26px] font-semibold md:text-[32px]">{title}</H>
      </div>
      {right ?? null}
    </div>
  );
}

/* ---------- logo ---------- */

export function Logo({
  dark = false,
  size = 1,
}: {
  dark?: boolean;
  size?: number;
}) {
  return (
    <div className="flex items-center" style={{ gap: 10 * size }}>
      <div
        className="flex flex-none items-center justify-center rounded-full border-2 border-accent bg-brand-700 font-serif font-bold text-cream"
        style={{ width: 38 * size, height: 38 * size, fontSize: 16 * size }}
      >
        MB
      </div>
      <div className="leading-[1.05]">
        <div
          className={`font-serif font-bold tracking-[-.01em] ${dark ? "text-cream" : "text-brand-900"}`}
          style={{ fontSize: 16 * size }}
        >
          Masarnia Brusy
        </div>
        <div
          className={`font-semibold tracking-[.16em] uppercase ${dark ? "text-accent" : "text-brand-700"}`}
          style={{ fontSize: 9.5 * size }}
        >
          Gierszewscy · od 1991
        </div>
      </div>
    </div>
  );
}
