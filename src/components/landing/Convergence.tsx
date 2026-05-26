const cases = [
  { label: "Caso 01", desc: "empresa em crise aguda, prestes a fechar" },
  { label: "Caso 02", desc: "empresa inadimplente, ia vender patrimônio" },
  { label: "Caso 03", desc: "empresa saudável, com excedente de caixa" },
  { label: "Caso 04", desc: "empresa em expansão, comprando ativo" },
];

const skills = [
  "Estruturar empréstimo com carência aplicada estrategicamente",
  "Compor e auditar dívida ativa",
  "Pedir o produto de aplicação pelo nome",
  "Distinguir consórcio de prateleira de consórcio estruturado",
];

const Convergence = () => (
  <section className="bg-[#17213a] py-20 md:py-28 border-t border-[#c3aa4e]/10">
    <div className="prose-medium">
      <p className="text-[#c3aa4e] text-xs uppercase tracking-[0.2em] font-semibold mb-3">
        O padrão
      </p>
      <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-10 leading-snug">
        O que esses quatro casos têm em comum
      </h2>

      {/* Cases grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
        {cases.map((c) => (
          <div
            key={c.label}
            className="flex gap-3 items-start border border-[#c3aa4e]/15 bg-[#1a2844] rounded-lg px-4 py-3"
          >
            <span className="text-[#c3aa4e] font-bold text-xs shrink-0 mt-0.5 uppercase tracking-wide">
              {c.label}
            </span>
            <span className="text-[#94a3b8] text-sm leading-relaxed">{c.desc}</span>
          </div>
        ))}
      </div>

      <div className="space-y-5 text-[#94a3b8] leading-relaxed text-base md:text-lg">
        <p>
          Quatro empresas em quatro fases completamente diferentes do ciclo de vida.
          Quatro problemas que, à primeira vista, parecem não ter nada em comum.
        </p>
        <p className="text-[#f1f5f9] font-medium">
          E ainda assim, a solução pra cada um veio do mesmo lugar: saber falar a
          língua que do outro lado da mesa se fala.
        </p>

        <ul className="space-y-2 pl-1">
          {skills.map((s, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-[#c3aa4e] shrink-0">→</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>

        <p>
          São quatro competências distintas. Quatro vocabulários distintos.
        </p>
        <p>
          E nenhum deles é ensinado em curso de administração, contabilidade ou gestão
          financeira no Brasil.
        </p>

        <div className="border-l-2 border-[#c3aa4e] pl-6 py-1">
          <p className="text-[#f1f5f9] font-semibold text-lg md:text-xl font-serif">
            Eles são ensinados dentro dos bancos. Pra quem trabalha nos bancos.
          </p>
        </div>

        <p className="text-[#c3aa4e] font-medium text-lg">
          E é exatamente isso que esse programa transfere pra você.
        </p>
      </div>
    </div>
  </section>
);

export default Convergence;
