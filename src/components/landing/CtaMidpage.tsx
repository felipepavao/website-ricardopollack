import { CHECKOUT_URL, CURRENT_PRICE, NEXT_PRICE } from "@/lib/landing-config";

const CtaMidpage = () => (
  <section className="bg-[#1d192e] py-14 md:py-16 border-t border-b border-[#c3aa4e]/10">
    <div className="prose-narrow text-center">
      <p className="text-[#94a3b8] text-sm mb-4">
        Já entendeu o suficiente para decidir?
      </p>
      <a
        href={CHECKOUT_URL}
        className="btn-primary inline-block text-base md:text-lg px-10 py-5"
      >
        Garantir Minha Vaga — {CURRENT_PRICE}
      </a>
      <p className="text-[#64748b] text-xs mt-3">
        Em até 12x sem juros · 7 dias de garantia · Próxima turma: {NEXT_PRICE}
      </p>
    </div>
  </section>
);

export default CtaMidpage;
