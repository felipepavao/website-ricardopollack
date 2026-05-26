const Guarantee = () => (
  <section className="bg-[#1d192e] py-16 md:py-20 border-t border-[#c3aa4e]/10">
    <div className="prose-medium">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        {/* Visual seal */}
        <div className="shrink-0 flex flex-col items-center">
          <div className="relative w-32 h-32 md:w-36 md:h-36">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-[#c3aa4e]/40" />
            {/* Inner ring */}
            <div className="absolute inset-3 rounded-full border border-[#c3aa4e]/20" />
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3">
              <p className="font-serif text-3xl font-bold text-[#c3aa4e] leading-none">7</p>
              <p className="text-[#c3aa4e] text-xs font-bold uppercase tracking-wider leading-none mt-0.5">
                dias
              </p>
              <div className="w-8 h-px bg-[#c3aa4e]/30 my-1.5" />
              <p className="text-[#94a3b8] text-[9px] uppercase tracking-widest leading-tight">
                Garantia
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="font-serif text-2xl md:text-3xl text-[#f1f5f9] font-bold">
            Garantia incondicional de 7 dias
          </h2>
          <p className="text-[#94a3b8] leading-relaxed text-base md:text-lg">
            Se em 7 dias após a compra você entender que o programa não é para
            você, devolvemos 100% do valor investido. Sem perguntas, sem
            burocracia, sem ligação de retenção.
          </p>

          {/* Three points */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            {["Sem perguntas", "Sem burocracia", "Sem retenção"].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center md:justify-start gap-2 border border-[#c3aa4e]/20 bg-[#c3aa4e]/5 rounded-lg px-3 py-2"
              >
                <span className="text-[#c3aa4e] text-sm">✓</span>
                <span className="text-[#f1f5f9] text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-[#c3aa4e] text-sm font-medium">
            Você entra sem risco. O risco é continuar sem o programa.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Guarantee;
