const rows = [
  {
    label: "Taxa anunciada",
    without: "1,89% ao mês (nominal)",
    with: "CET real calculado: 2,87%+",
  },
  {
    label: "Proposta de crédito",
    without: "Tabela do balcão",
    with: 'Tabela "sob demanda" negociada',
  },
  {
    label: "Dívida em atraso",
    without: "Paga o valor total ou quebra",
    with: "Composição auditada + negociação técnica",
  },
  {
    label: "Excedente de caixa",
    without: "Aplicação automática — 16% do CDI",
    with: "CDB negociado — 99% do CDI",
  },
  {
    label: "Aquisição de ativo",
    without: "Consórcio de prateleira",
    with: "Consórcio estruturado pelas 4 variáveis",
  },
];

const ComparisonDiagram = () => (
  <section className="bg-[#17213a] py-20 md:py-28 border-t border-[#c3aa4e]/10">
    <div className="prose-wide">
      <p className="text-[#c3aa4e] text-xs uppercase tracking-[0.2em] font-semibold mb-3">
        O que muda quando você sabe
      </p>
      <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-4 leading-snug">
        O banco tem duas tabelas.
        <br className="hidden md:block" />
        Você tem acesso a qual?
      </h2>
      <p className="text-[#94a3b8] text-base md:text-lg mb-10 max-w-2xl">
        Não é segredo guardado a sete chaves. É vocabulário. Quem usa o vocabulário
        certo, recebe a oferta certa.
      </p>

      {/* Desktop: side-by-side table */}
      <div className="hidden md:block rounded-xl overflow-hidden border border-[#c3aa4e]/15">
        {/* Header */}
        <div className="grid grid-cols-[1fr_1fr_1fr] bg-[#1a2844]">
          <div className="px-5 py-3 border-r border-[#c3aa4e]/10">
            <span className="text-[#64748b] text-xs uppercase tracking-widest font-semibold">
              Operação
            </span>
          </div>
          <div className="px-5 py-3 border-r border-[#c3aa4e]/10 bg-white/[0.02]">
            <span className="text-white/30 text-xs uppercase tracking-widest font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white/20 shrink-0" />
              Sem banquês
            </span>
          </div>
          <div className="px-5 py-3 bg-[#c3aa4e]/5">
            <span className="text-[#c3aa4e] text-xs uppercase tracking-widest font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c3aa4e] shrink-0" />
              Com banquês
            </span>
          </div>
        </div>

        {rows.map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-[1fr_1fr_1fr] border-t border-[#c3aa4e]/10"
          >
            <div className="px-5 py-4 border-r border-[#c3aa4e]/10 bg-[#1a2844]/60">
              <span className="text-[#f1f5f9] text-sm font-medium">{row.label}</span>
            </div>
            <div className="px-5 py-4 border-r border-[#c3aa4e]/10 bg-white/[0.01]">
              <span className="text-[#64748b] text-sm leading-relaxed">{row.without}</span>
            </div>
            <div className="px-5 py-4 bg-[#c3aa4e]/[0.04]">
              <span className="text-[#d4be70] text-sm leading-relaxed font-medium">
                {row.with}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: stacked cards */}
      <div className="md:hidden space-y-4">
        {rows.map((row, i) => (
          <div
            key={i}
            className="border border-[#c3aa4e]/15 rounded-xl overflow-hidden"
          >
            <div className="bg-[#1a2844] px-4 py-2">
              <span className="text-[#f1f5f9] text-xs font-semibold uppercase tracking-wide">
                {row.label}
              </span>
            </div>
            <div className="grid grid-cols-2 divide-x divide-[#c3aa4e]/10">
              <div className="px-4 py-3 bg-white/[0.02]">
                <p className="text-white/25 text-[10px] uppercase tracking-wider font-semibold mb-1">
                  Sem banquês
                </p>
                <p className="text-[#64748b] text-xs leading-relaxed">{row.without}</p>
              </div>
              <div className="px-4 py-3 bg-[#c3aa4e]/5">
                <p className="text-[#c3aa4e] text-[10px] uppercase tracking-wider font-semibold mb-1">
                  Com banquês
                </p>
                <p className="text-[#d4be70] text-xs leading-relaxed font-medium">
                  {row.with}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[#94a3b8] text-sm mt-6 text-center italic">
        Mesma instituição. Mesmo gerente. Mesma garantia. Linguagem diferente.
      </p>
    </div>
  </section>
);

export default ComparisonDiagram;
