"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";

const Ctx = createContext<(msg: string) => void>(() => {});

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [msg, setMsg] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const show = useCallback((m: string) => {
    setMsg(m);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setMsg(null), 2200);
  }, []);

  return (
    <Ctx.Provider value={show}>
      {children}
      {msg && (
        <div className="anim-fade fixed bottom-[26px] left-1/2 z-[300] -translate-x-1/2 rounded-[3px] border border-accent bg-brand-900 px-[22px] py-3 text-sm font-semibold whitespace-nowrap text-cream shadow-[0_10px_30px_rgba(0,0,0,.3)]">
          {msg}
        </div>
      )}
    </Ctx.Provider>
  );
}

export function useToast() {
  return useContext(Ctx);
}
