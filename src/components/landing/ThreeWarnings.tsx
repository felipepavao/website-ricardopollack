const warnings = [
  {
    number: "01",
    title: "Este programa não é sobre brigar com banco.",
    paragraphs: [
      "Não é sobre processar gerente, reclamar no Bacen ou trocar de instituição cada vez que a taxa sobe.",
      "É sobre algo muito mais simples e mais poderoso: chegar na mesa de negociação sabendo exatamente o mesmo que o outro lado sabe.",
      "Quando isso acontece, a conversa muda. As taxas mudam. As condições mudam. O gerente, que continua sendo bom profissional, bem treinado, bem-intencionado, passa a oferecer o que ele oferece pra cliente que sabe - não o que ele oferece pra cliente que apenas confia.",
    ],
    highlight:
      "Você nunca viu a segunda proposta porque ela não está escrita em lugar algum. Ela aparece na conversa. E só aparece quando o gerente percebe, em 30 segundos, que o cliente do outro lado fala a mesma língua que ele.",
  },
  {
    number: "02",
    title: "Isso não é curso teórico.",
    paragraphs: [
      'Não é Macroeconomia. Não é "Sistema Financeiro Nacional para Iniciantes". É operacional, é prático. A vida como ela é.',
      "É o que você faz na próxima reunião com o gerente, no próximo contrato de capital de giro, na próxima negociação, na próxima aplicação financeira.",
    ],
    highlight: null,
  },
  {
    number: "03",
    title: 'Não propomos "educação financeira".',
    paragraphs: [
      "É um manual prático e objetivo para você ter resultados e parar de perder dinheiro.",
    ],
    highlight: null,
  },
];

const ThreeWarnings = () => (
  <section className="bg-[#17213a] py-20 md:py-28 border-t border-[#c3aa4e]/10">
    <div className="prose-medium">
      <p className="text-[#c3aa4e] text-xs uppercase tracking-[0.2em] font-semibold mb-3">
        Antes de qualquer coisa
      </p>
      <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-14 leading-snug">
        Três avisos honestos
      </h2>

      <div className="space-y-12">
        {warnings.map((w) => (
          <div key={w.number} className="flex gap-6 md:gap-10">
            {/* Number */}
            <div className="shrink-0 pt-0.5">
              <span className="font-serif text-5xl md:text-6xl font-bold text-[#c3aa4e]/20 leading-none select-none">
                {w.number}
              </span>
            </div>

            {/* Content */}
            <div className="space-y-4 pt-1">
              <h3 className="font-serif text-xl md:text-2xl text-[#f1f5f9] font-semibold leading-snug">
                {w.title}
              </h3>
              {w.paragraphs.map((p, i) => (
                <p key={i} className="text-[#94a3b8] leading-relaxed text-base md:text-lg">
                  {p}
                </p>
              ))}
              {w.highlight && (
                <div className="border-l-2 border-[#c3aa4e] pl-5 mt-4">
                  <p className="text-[#f1f5f9] italic leading-relaxed text-base md:text-lg">
                    {w.highlight}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ThreeWarnings;
