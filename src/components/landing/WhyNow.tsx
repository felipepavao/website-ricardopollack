const costs = [
  "Cada contrato assinado sem leitura técnica é uma operação que vai correr 12, 24, 36 e 48 meses no juro que você aceitou sem saber que era esse.",
  "Cada aplicação automática é capital seu rendendo abaixo do que poderia render — todo mês.",
  "Cada renegociação feita por confiança e não por argumento técnico é uma chance perdida de mudar a estrutura de custo da empresa.",
  "Cada consórcio assinado sem análise das 4 variáveis pode estar custando mais que um empréstimo direto.",
];

const WhyNow = () => (
  <section className="bg-[#1d192e] py-20 md:py-28 border-t border-[#c3aa4e]/10">
    <div className="prose-medium">
      <p className="text-[#c3aa4e] text-xs uppercase tracking-[0.2em] font-semibold mb-3">
        Por que agora
      </p>
      <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-6 leading-snug">
        Não vou inventar urgência falsa.
      </h2>
      <p className="text-[#94a3b8] text-base md:text-lg mb-10 max-w-2xl">
        Mas existe uma realidade: enquanto você adia a decisão, as operações
        continuam acontecendo no nome da sua empresa.
      </p>

      <div className="space-y-4">
        {costs.map((item, i) => (
          <div
            key={i}
            className="flex gap-4 border-l-2 border-[#c3aa4e]/30 pl-5 py-1"
          >
            <p className="text-[#94a3b8] leading-relaxed text-sm md:text-base">
              {item}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 border border-[#c3aa4e]/20 bg-[#c3aa4e]/5 rounded-xl px-6 py-5">
        <p className="text-[#f1f5f9] font-serif text-lg md:text-xl font-semibold leading-snug">
          A acomodação tem custo silencioso. O custo só fica visível quando o
          caixa aperta. E aí, geralmente, já é tarde pra negociar.
        </p>
      </div>
    </div>
  </section>
);

export default WhyNow;
