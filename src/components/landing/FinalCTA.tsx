import {
  CHECKOUT_URL,
  CURRENT_PRICE,
  NEXT_PRICE,
  MONTHLY_INSTALLMENTS,
  START_DATE,
  SPOTS_TOTAL,
} from "@/lib/landing-config";

const FinalCTA = () => (
  <>
    {/* ── Final CTA ────────────────────────────────────────────── */}
    <section className="bg-[#17213a] py-20 md:py-28 border-t border-[#c3aa4e]/10">
      <div className="prose-narrow text-center">
        <p className="text-[#c3aa4e] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
          Próximo passo
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-[#f1f5f9] font-bold mb-4 leading-snug">
          Se você chegou até aqui,<br className="hidden md:block" /> você já decidiu.
        </h2>
        <p className="text-[#94a3b8] text-base md:text-lg mb-10">
          A única coisa que sobra é fazer o checkout antes que a turma fechar.
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href={CHECKOUT_URL}
            className="btn-primary text-lg md:text-xl px-10 md:px-14 py-5 md:py-6 w-full sm:w-auto"
          >
            Garantir Minha Vaga — {CURRENT_PRICE} em até {MONTHLY_INSTALLMENTS}x
          </a>
          <p className="text-[#64748b] text-sm">
            Turma especial · {SPOTS_TOTAL} vagas · Início {START_DATE} · Próxima turma: {NEXT_PRICE}
          </p>
        </div>
      </div>
    </section>

    {/* ── P.S. ────────────────────────────────────────────────── */}
    <section className="bg-[#1d192e] py-16 md:py-20 border-t border-[#c3aa4e]/10">
      <div className="prose-narrow">
        <p className="text-[#c3aa4e] text-xs uppercase tracking-[0.2em] font-semibold mb-6">
          P.S.
        </p>
        <div className="space-y-4 text-[#94a3b8] leading-relaxed text-base md:text-lg">
          <p>
            Uma observação que talvez seja a mais importante desta carta inteira:
          </p>
          <p>
            As quatro empresas que aparecem nos casos acima — a que ia fechar, a
            que ia vender patrimônio, a que perdia R$ 130k por ano em aplicação,
            a que comprou consórcio caro — nenhuma delas fez nada extraordinário
            pra resolver o problema.
          </p>
          <div className="space-y-1 pl-5 border-l-2 border-[#c3aa4e]/30">
            <p>Nenhuma trocou de banco.</p>
            <p>Nenhuma contratou advogado.</p>
            <p>Nenhuma fez barulho.</p>
          </div>
          <p className="text-[#f1f5f9] font-medium">
            Cada uma só aprendeu a fazer perguntas diferentes nas próximas
            reuniões.
          </p>
          <p className="text-[#c3aa4e] font-semibold">
            As perguntas estão no programa.
          </p>
          <p>E o programa começa na próxima turma.</p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href={CHECKOUT_URL}
            className="btn-primary text-base px-8 py-4"
          >
            Quero Entrar — {CURRENT_PRICE}
          </a>
        </div>
      </div>
    </section>

    {/* ── Footer ──────────────────────────────────────────────── */}
    <footer className="bg-[#1d192e] border-t border-[#c3aa4e]/10 py-8 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#c3aa4e] font-semibold text-sm">Ricardo Pollack</p>
        <p className="text-[#64748b] text-xs mt-1">
          Consultoria Financeira · 25 anos de mercado
        </p>
      </div>
    </footer>
  </>
);

export default FinalCTA;
