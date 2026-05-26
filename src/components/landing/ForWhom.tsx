const forList = [
  "Sua empresa tem operações ativas com banco (capital de giro, antecipação, financiamento, conta garantida)",
  "Você assina contratos bancários com alguma frequência",
  "Você ou seu gestor financeiro tomam decisões de aplicação de excedente de caixa",
  "Você desconfia que paga mais do que precisa e rende menos do que poderia — mas não tem ferramenta pra provar",
];

const notForList = [
  'Quem é resistente a mudanças — "sempre foi assim e deve continuar"',
  "Quem não dá valor ao próprio dinheiro, perde e depois recupera",
  "Quem prefere confiar do que entender",
  "Quem não foca no resultado como trilha do sucesso",
];

const ForWhom = () => (
  <section className="bg-[#17213a] py-20 md:py-28 border-t border-[#c3aa4e]/10">
    <div className="prose-medium">
      <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-12 leading-snug">
        Esse programa é pra você?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* For */}
        <div className="border border-[#c3aa4e]/30 bg-[#1a2844] rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c3aa4e]" />
            <h3 className="text-[#c3aa4e] font-semibold uppercase text-xs tracking-[0.15em]">
              Para quem é
            </h3>
          </div>
          <ul className="space-y-3">
            {forList.map((item, i) => (
              <li key={i} className="flex gap-3 text-[#f1f5f9] text-sm md:text-base leading-relaxed">
                <span className="text-[#c3aa4e] shrink-0 mt-0.5 font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Not for */}
        <div className="border border-white/8 bg-[#1a2844]/60 rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white/20" />
            <h3 className="text-white/40 font-semibold uppercase text-xs tracking-[0.15em]">
              Para quem não é
            </h3>
          </div>
          <ul className="space-y-3">
            {notForList.map((item, i) => (
              <li key={i} className="flex gap-3 text-[#64748b] text-sm md:text-base leading-relaxed">
                <span className="text-white/20 shrink-0 mt-0.5">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ForWhom;
