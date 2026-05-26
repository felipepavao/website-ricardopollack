import {
  CHECKOUT_URL,
  START_DATE,
  SPOTS_TOTAL,
  CURRENT_PRICE,
  NEXT_PRICE,
  MONTHLY_INSTALLMENTS,
} from "@/lib/landing-config";

const stats = [
  { value: "25 anos", label: "de consultoria financeira" },
  { value: "R$1 bilhão", label: "em carteira sob orientação" },
  { value: "20 vagas", label: "nesta turma" },
];

const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center bg-[#1d192e] relative overflow-hidden">
    {/* Diagonal subtle lines */}
    <div
      className="absolute inset-0 opacity-[0.035] pointer-events-none"
      style={{
        backgroundImage:
          "repeating-linear-gradient(-45deg, #c3aa4e, #c3aa4e 1px, transparent 1px, transparent 14px)",
      }}
    />
    {/* Gold glow */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#c3aa4e]/5 rounded-full blur-[80px] pointer-events-none" />

    <div className="relative max-w-4xl mx-auto px-6 py-28 text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2.5 border border-[#c3aa4e]/40 rounded-full px-5 py-2 mb-10 bg-[#c3aa4e]/5">
        <span className="w-2 h-2 rounded-full bg-[#c3aa4e] animate-pulse shrink-0" />
        <span className="text-[#c3aa4e] text-sm font-medium tracking-wide">
          Turma especial · Início {START_DATE} · {SPOTS_TOTAL} vagas
        </span>
      </div>

      {/* Eyebrow */}
      <p className="text-white/35 text-xs uppercase tracking-[0.2em] font-medium mb-5">
        Para donos de PME · Pós-VSL
      </p>

      {/* Headline */}
      <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.05] mb-8">
        Não Seja uma
        <br />
        <em className="not-italic text-[#c3aa4e]">Presa Fácil</em>
      </h1>

      {/* Big promise */}
      <p className="text-lg sm:text-xl md:text-2xl text-white/65 max-w-2xl mx-auto leading-relaxed mb-14">
        Em 5 semanas, sua empresa para de aceitar a primeira proposta do banco
        em qualquer operação.
      </p>

      {/* CTA */}
      <div className="flex flex-col items-center gap-4 mb-14">
        <a
          href={CHECKOUT_URL}
          className="btn-primary text-lg md:text-xl px-10 md:px-14 py-5 md:py-6"
        >
          Garantir Minha Vaga — {CURRENT_PRICE}
        </a>
        <p className="text-white/30 text-sm">
          Em até {MONTHLY_INSTALLMENTS}x sem juros · 7 dias de garantia · Próxima turma: {NEXT_PRICE}
        </p>
      </div>

      {/* Stats strip */}
      <div className="border border-[#c3aa4e]/20 bg-[#c3aa4e]/5 rounded-xl px-6 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-[#c3aa4e]/15 gap-0">
          {stats.map((s, i) => (
            <div key={i} className="px-6 py-3 sm:py-0 text-center">
              <p className="font-serif text-xl font-bold text-[#c3aa4e] leading-none">
                {s.value}
              </p>
              <p className="text-[#94a3b8] text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
      <div className="w-px h-10 bg-gradient-to-b from-[#c3aa4e] to-transparent" />
    </div>
  </section>
);

export default Hero;
