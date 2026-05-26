import { useState, useEffect } from "react";
import { CHECKOUT_URL } from "@/lib/landing-config";

const StickyHeader = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      } bg-[#1d192e]/95 backdrop-blur-sm border-b border-[#c3aa4e]/20 py-3 px-6`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <div className="hidden sm:block">
          <p className="text-[#c3aa4e] font-semibold text-sm leading-none">
            Ricardo Pollack
          </p>
          <p className="text-white/40 text-xs mt-0.5">Não Seja uma Presa Fácil</p>
        </div>
        <a
          href={CHECKOUT_URL}
          className="ml-auto btn-primary px-5 py-2 text-sm whitespace-nowrap"
        >
          Garantir Vaga — R$ 4.997
        </a>
      </div>
    </header>
  );
};

export default StickyHeader;
