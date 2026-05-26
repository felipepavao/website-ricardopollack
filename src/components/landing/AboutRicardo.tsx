const AboutRicardo = () => (
  <section className="bg-[#1d192e] py-20 md:py-28 border-t border-[#c3aa4e]/10">
    <div className="prose-medium">
      <p className="text-[#c3aa4e] text-xs uppercase tracking-[0.2em] font-semibold mb-10">
        Quem está do outro lado
      </p>

      <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">
        {/* Photo placeholder */}
        <div className="shrink-0 w-40 h-40 md:w-52 md:h-52 rounded-xl bg-[#1a2844] border border-[#c3aa4e]/20 flex flex-col items-center justify-center gap-2 text-[#c3aa4e]/40">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span className="text-xs text-center px-3">Foto do Ricardo</span>
        </div>

        {/* Bio */}
        <div className="space-y-5 text-[#94a3b8] leading-relaxed text-base md:text-lg">
          <h2 className="font-serif text-2xl md:text-3xl text-[#f1f5f9] font-bold">
            Ricardo Pollack
          </h2>

          <p>
            25 anos de consultoria financeira para empresas de pequeno, médio e
            grande porte no Brasil. Hoje, minha carteira de consultoria representa
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
            <p className="text-[#f1f5f9] font-medium">
              Criei este programa porque a maioria das empresas que mais precisa
              do meu trabalho não consegue contratar consultoria individual.
              Decidi colocar o método em formato que cabe no orçamento e na
              agenda de qualquer gestor disposto a parar de perder dinheiro
              silenciosamente.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutRicardo;
