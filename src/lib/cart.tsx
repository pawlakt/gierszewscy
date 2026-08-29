"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import type { Product } from "./data";

export type CartLine = {
  id: string;
  name: string;
  cat: string;
  unit: string;
  qty: number;
  note: string;
};

type CartCtx = {
  lines: CartLine[];
  add: (p: Product, qty: number, unit: string) => void;
  setQty: (idx: number, delta: number) => void;
  setNote: (idx: number, note: string) => void;
  remove: (idx: number) => void;
  clear: () => void;
  count: number;
  inOrder: (id: string) => number;
};

const Ctx = createContext<CartCtx | null>(null);

const STORAGE_KEY = "gierszewscy-order";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  // Child effects run before this provider's effects on first mount, so a
  // clear() from a page must stop the initial load from resurrecting the cart.
  const skipLoad = useRef(false);
  const loaded = useRef(false);

  useEffect(() => {
    if (!skipLoad.current) {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) setLines(JSON.parse(raw));
      } catch {}
    }
    loaded.current = true;
  }, []);

  useEffect(() => {
    if (!loaded.current) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {}
  }, [lines]);

  const add = useCallback((p: Product, qty: number, unit: string) => {
    setLines((ls) => {
      const i = ls.findIndex((l) => l.id === p.id && l.unit === unit);
      if (i >= 0) {
        const next = [...ls];
        next[i] = { ...next[i], qty: next[i].qty + qty };
        return next;
      }
      return [...ls, { id: p.id, name: p.name, cat: p.cat, unit, qty, note: "" }];
    });
  }, []);

  const setQty = useCallback((idx: number, delta: number) => {
    setLines((ls) =>
      ls.map((l, i) =>
        i === idx ? { ...l, qty: Math.max(1, l.qty + delta) } : l,
      ),
    );
  }, []);

  const setNote = useCallback((idx: number, note: string) => {
    setLines((ls) => ls.map((l, i) => (i === idx ? { ...l, note } : l)));
  }, []);

  const remove = useCallback((idx: number) => {
    setLines((ls) => ls.filter((_, i) => i !== idx));
  }, []);

  const clear = useCallback(() => {
    skipLoad.current = true;
    setLines([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  }, []);

  const inOrder = useCallback(
    (id: string) =>
      lines.filter((l) => l.id === id).reduce((a, l) => a + l.qty, 0),
    [lines],
  );

  return (
    <Ctx.Provider
      value={{ lines, add, setQty, setNote, remove, clear, count: lines.length, inOrder }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart outside CartProvider");
  return ctx;
}
