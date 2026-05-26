const Guarantee = () => (
  <section className="bg-[#1d192e] py-16 md:py-20 border-t border-[#c3aa4e]/10">
    <div className="prose-narrow">
      <div className="flex flex-col sm:flex-row items-start gap-6">
        {/* Icon */}
        <div className="shrink-0 w-16 h-16 rounded-full border-2 border-[#c3aa4e]/40 flex items-center justify-center bg-[#c3aa4e]/5">
          <span className="text-[#c3aa4e] font-serif font-bold text-lg leading-none">7</span>
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h2 className="font-serif text-2xl md:text-3xl text-[#f1f5f9] font-bold">
            Garantia de 7 dias
          </h2>
          <p className="text-[#94a3b8] leading-relaxed text-base md:text-lg">
            Se em 7 dias após a compra você entender que o programa não é pra
            você, devolvemos 100% do valor investido. Sem perguntas, sem
            burocracia.
          </p>
          <p className="text-[#c3aa4e] text-sm font-medium">
            Você entra sem risco. O risco é continuar sem o programa.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Guarantee;
