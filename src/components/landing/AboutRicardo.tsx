const credenciais = [
  { value: "25 anos", label: "de consultoria financeira" },
  { value: "R$1 bi+", label: "em carteira orientada" },
  { value: "100s", label: "de casos em PMEs" },
];

const AboutRicardo = () => (
  <section className="bg-[#1d192e] py-20 md:py-28 border-t border-[#c3aa4e]/10">
    <div className="prose-medium">
      <p className="text-[#c3aa4e] text-xs uppercase tracking-[0.2em] font-semibold mb-10">
        Quem está do outro lado
      </p>

      <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">
        {/* Photo */}
        <div className="shrink-0 w-full md:w-72">
          <div className="relative rounded-xl overflow-hidden border border-[#c3aa4e]/20">
            <img
              src="/ricardo-pollack.jpg"
              alt="Ricardo Pollack — Consultor Financeiro"
              className="w-full object-cover object-top aspect-[3/4] md:aspect-auto md:h-96"
            />
            {/* Gradient overlay bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1d192e]/80 via-transparent to-transparent" />
            {/* Name badge */}
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-serif text-lg font-bold text-white leading-none">
                Ricardo Pollack
              </p>
              <p className="text-[#c3aa4e] text-xs mt-0.5">
                Consultor Financeiro · 25 anos de mercado
              </p>
            </div>
          </div>

          {/* Credential pills */}
          <div className="grid grid-cols-3 gap-2 mt-3">
            {credenciais.map((c, i) => (
              <div
                key={i}
                className="border border-[#c3aa4e]/20 bg-[#c3aa4e]/5 rounded-lg px-2 py-3 text-center"
              >
                <p className="font-serif text-base font-bold text-[#c3aa4e] leading-none">
                  {c.value}
                </p>
                <p className="text-[#64748b] text-[10px] mt-1 leading-tight">{c.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-5 text-[#94a3b8] leading-relaxed text-base md:text-lg">
          <p>
            25 anos de consultoria financeira para empresas de pequeno, médio e
            grande porte no Brasil. Hoje, a carteira de consultoria representa
            aproximadamente{" "}
            <span className="text-[#f1f5f9] font-semibold">
              R$ 1 bilhão de faturamento por ano.
            </span>
          </p>
          <p>
            Não vendo curso de educação financeira. Faço consultoria caso a caso
            — analisando contratos, auditando composição de dívida, identificando
            tarifas indevidas, treinando equipe financeira, sentando em reunião
            com banco quando é preciso.
          </p>
          <p>
            Os quatro casos que você acabou de ler são quatro entre centenas que
            passaram pelo meu escritório.
          </p>
          <div className="border-l-2 border-[#c3aa4e] pl-5">
            <p className="text-[#f1f5f9] font-medium text-base md:text-lg">
              Criei este programa porque a maioria das empresas que mais precisa
              deste trabalho não consegue contratar consultoria individual. Decidi
              colocar o método em formato que cabe no orçamento e na agenda de
              qualquer gestor disposto a parar de perder dinheiro silenciosamente.
            </p>
          </div>
          <p className="text-[#c3aa4e] font-medium text-sm">
            Uma consultoria individual com minha equipe custa entre R$ 25 mil e
            R$ 60 mil por engajamento. O programa entrega o mesmo método por
            R$ 4.997.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutRicardo;
