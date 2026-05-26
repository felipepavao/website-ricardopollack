import {
  CHECKOUT_URL,
  CURRENT_PRICE,
  NEXT_PRICE,
  MONTHLY_INSTALLMENTS,
  START_DATE,
} from "@/lib/landing-config";

type LineItem = { label: string; description: string; value: string };

const ITEMS: LineItem[] = [
  { label: "5 aulas ao vivo", description: "Mentoria em grupo com Ricardo Pollack", value: "R$ 4.500" },
  { label: "12 módulos gravados", description: "Área de membros — acesso de 12 meses", value: "R$ 2.400" },
  { label: "Planilha de Cálculos Financeiros", description: "A mesma usada em consultoria", value: "R$ 1.200" },
  { label: "Material didático completo", description: "Glossário do Banquês, checklists, argumentário", value: "R$ 800" },
  { label: "Suporte WhatsApp e e-mail", description: "Entre os 5 encontros ao vivo", value: "R$ 1.200" },
];

const ValueStack = () => (
  <section className="bg-[#17213a] py-20 md:py-28 border-t border-[#c3aa4e]/10">
    <div className="prose-medium">
      <p className="text-[#c3aa4e] text-xs uppercase tracking-[0.2em] font-semibold mb-3">
        Investimento
      </p>
      <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-4 leading-snug">
        O que você está recebendo
      </h2>

      {/* Anchoring context */}
      <div className="flex flex-col sm:flex-row gap-3 mb-10">
        <div className="flex-1 border border-white/8 bg-white/[0.02] rounded-xl px-5 py-4 text-center">
          <p className="text-[#64748b] text-xs uppercase tracking-wider font-semibold mb-1">
            Consultoria individual
          </p>
          <p className="font-serif text-2xl font-bold text-[#64748b] line-through">
            R$ 25–60k
          </p>
          <p className="text-[#64748b] text-xs mt-0.5">por engajamento</p>
        </div>
        <div className="flex-1 border border-[#c3aa4e]/20 bg-[#c3aa4e]/5 rounded-xl px-5 py-4 text-center">
          <p className="text-[#c3aa4e] text-xs uppercase tracking-wider font-semibold mb-1">
            Programa completo
          </p>
          <p className="font-serif text-2xl font-bold text-[#c3aa4e]">
            R$ 4.997
          </p>
          <p className="text-[#94a3b8] text-xs mt-0.5">mesmo método, em grupo</p>
        </div>
      </div>

      {/* Stack table */}
      <div className="border border-[#c3aa4e]/20 rounded-xl overflow-hidden mb-8">
        <div className="bg-[#c3aa4e]/10 px-5 md:px-7 py-3 grid grid-cols-[1fr_auto] gap-4">
          <span className="text-[#c3aa4e] text-xs uppercase tracking-widest font-semibold">
            Componente
          </span>
          <span className="text-[#c3aa4e] text-xs uppercase tracking-widest font-semibold text-right">
            Valor de mercado
          </span>
        </div>

        {ITEMS.map((item, i) => (
          <div
            key={i}
            className="px-5 md:px-7 py-4 grid grid-cols-[1fr_auto] gap-4 items-center border-t border-[#c3aa4e]/10 bg-[#1a2844]"
          >
            <div>
              <p className="text-[#f1f5f9] font-medium text-sm md:text-base">{item.label}</p>
              <p className="text-[#64748b] text-xs mt-0.5">{item.description}</p>
            </div>
            <span className="text-[#94a3b8] text-sm font-mono whitespace-nowrap line-through">
              {item.value}
            </span>
          </div>
        ))}

        <div className="px-5 md:px-7 py-4 grid grid-cols-[1fr_auto] gap-4 items-center border-t border-[#c3aa4e]/30 bg-[#c3aa4e]/5">
          <p className="text-[#f1f5f9] font-semibold text-sm md:text-base">
            Valor total — se vendidos individualmente
          </p>
          <span className="text-[#94a3b8] font-mono text-sm line-through whitespace-nowrap">
            R$ 10.100
          </span>
        </div>
      </div>

      {/* Price CTA */}
      <div className="border-2 border-[#c3aa4e]/50 bg-[#c3aa4e]/5 rounded-xl px-6 md:px-10 py-8 text-center space-y-4">
        <p className="text-[#c3aa4e] text-xs uppercase tracking-[0.2em] font-semibold">
          Investimento nesta turma
        </p>
        <p className="font-serif text-5xl md:text-6xl font-bold text-[#c3aa4e]">
          {CURRENT_PRICE}
        </p>
        <p className="text-[#94a3b8] text-sm">
          Em até {MONTHLY_INSTALLMENTS}x sem juros no cartão, ou via Pix
        </p>
        <a href={CHECKOUT_URL} className="btn-primary inline-block text-lg px-10 py-5 mt-2">
          Garantir Minha Vaga — {CURRENT_PRICE}
        </a>
        <p className="text-[#94a3b8]/60 text-xs pt-1">
          Início: {START_DATE} · A partir da próxima turma: {NEXT_PRICE}
        </p>
      </div>
    </div>
  </section>
);

export default ValueStack;
