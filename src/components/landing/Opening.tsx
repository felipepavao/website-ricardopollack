const Opening = () => (
  <>
    {/* ── Story Hook ─────────────────────────────────────────────── */}
    <section className="bg-[#17213a] py-20 md:py-28">
      <div className="prose-narrow">
        <div className="space-y-5 text-[#94a3b8] leading-relaxed text-base md:text-lg">
          <p className="font-serif text-xl md:text-2xl text-[#f1f5f9] font-semibold leading-snug">
            Uma empresa estava prestes a fechar.
          </p>
          <p>
            As parcelas dos empréstimos, somadas aos juros e às despesas
            operacionais, eram maiores que o faturamento mensal.
          </p>
          <p>
            Não tinha capital de giro. Não tinha caixa. Não tinha como pagar a
            folha do mês seguinte.
          </p>

          <div className="border-l-2 border-[#c3aa4e] pl-6 py-1 my-8 space-y-2">
            <p className="font-serif text-xl md:text-2xl text-[#f1f5f9] font-semibold leading-snug">
              24 meses depois, essa mesma empresa não tem dívida bancária.
            </p>
            <p className="text-[#c3aa4e] font-medium">
              Tem capital de giro próprio. E paga as contas com sobra.
            </p>
          </div>

          <p>Sem trocar de banco. Sem advogado. Sem recuperação judicial.</p>
          <p className="text-[#f1f5f9] font-medium">
            A única coisa que mudou foi a maneira como o gestor financeiro
            decidia operações bancárias.
          </p>
        </div>
      </div>
    </section>

    {/* ── Post-VSL Bridge ─────────────────────────────────────────── */}
    <section className="bg-[#1d192e] py-20 md:py-28 border-t border-[#c3aa4e]/10">
      <div className="prose-narrow">
        <p className="text-[#c3aa4e] text-xs uppercase tracking-[0.2em] font-semibold mb-8">
          Você acabou de assistir a aula
        </p>

        <div className="space-y-5 text-[#94a3b8] leading-relaxed text-base md:text-lg">
          <p>
            Você entendeu por que mais de 90% das taxas que os gerentes informam
            não correspondem à taxa efetiva.
          </p>
          <p>
            Você viu como uma proposta bancária esconde o custo real dentro de
            um vocabulário que parece técnico, mas é projetado pra te manter
            confiando em vez de calculando.
          </p>
          <p>
            Você percebeu que o problema da sua empresa com banco nunca foi falta
            de relacionamento.
          </p>
          <p className="font-serif text-xl md:text-2xl text-[#f1f5f9] font-semibold">
            Foi falta de tradução.
          </p>
          <p>E você está aqui porque entendeu uma coisa desconfortável:</p>

          <div className="border border-[#c3aa4e]/30 bg-[#c3aa4e]/5 rounded-lg px-6 py-5 my-2">
            <p className="text-[#f1f5f9] font-medium leading-relaxed">
              Se você ou seu gestor financeiro não falam{" "}
              <span className="gold-term">"banquês"</span>, todo contrato
              bancário da sua empresa está sendo decidido com informação parcial.
            </p>
          </div>

          <p className="text-[#c3aa4e] font-medium">
            Nossa solução é sobre o que fazer com isso.
          </p>
        </div>
      </div>
    </section>
  </>
);

export default Opening;
