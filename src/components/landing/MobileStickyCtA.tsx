import { useState, useEffect } from "react";
import { CHECKOUT_URL, CURRENT_PRICE } from "@/lib/landing-config";

const MobileStickyCtA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      } bg-[#1d192e]/98 backdrop-blur-sm border-t border-[#c3aa4e]/20 px-4 py-3`}
    >
      <a
        href={CHECKOUT_URL}
        className="btn-primary block text-center py-4 text-base font-bold w-full"
      >
        Garantir Vaga — {CURRENT_PRICE}
      </a>
      <p className="text-[#64748b] text-xs text-center mt-1.5">
        Em até 12x sem juros · 7 dias de garantia
      </p>
    </div>
  );
};

export default MobileStickyCtA;
