import { useState } from "react";

type CaseData = {
  number: string;
  stat: string;
  statLabel: string;
  headline: string;
  sector: string;
  color: string;
  summary: string;
  detail: {
    intro: string[];
    findings?: string[];
    whatWasDone?: string[];
    immediateEffect?: string;
    quote?: string;
    results: string[];
    fourVariables?: string[];
    demonstration: string;
  };
};

const CASES: CaseData[] = [
  {
    number: "01",
    stat: "Zero",
    statLabel: "dívida bancária",
    headline: "Empresa prestes a fechar. Dois anos depois: sem dívida, caixa próprio.",
    sector: "Industrial · faturamento médio",
    color: "from-[#c3aa4e]/20 to-transparent",
    summary:
      "As parcelas dos empréstimos superavam o faturamento. A solução não foi pegar mais dinheiro — foi estruturar a carência de forma cirúrgica.",
    detail: {
      intro: [
        "O caixa só não tinha quebrado porque o dono raspava reserva pessoal para cobrir folha.",
        "A solução óbvia (e errada) seria mais um empréstimo para quitar outro. Não foi isso que fizemos.",
      ],
      whatWasDone: [
        "Contratamos um empréstimo com período de carência.",
        "Em vez de usar para quitar dívidas, usamos para quitar 12 parcelas de todas as dívidas ativas.",
      ],
      immediateEffect:
        "Durante 12 meses, a empresa não pagou parcela de nenhum empréstimo — só despesas operacionais.",
      results: [
        "Saiu do modo apaga-incêndio",
        "Voltou a gerar sobra de caixa",
        "Gestor financeiro voltou a pensar estrategicamente",
        "12 meses depois: quitou mais um ano de dívida com caixa próprio",
        "Hoje: zero dívida bancária",
      ],
      demonstration:
        "Usar carência para quitar parcelas — não dívidas — é uma decisão de engenharia financeira que nenhum gerente vai sugerir. Porque do ponto de vista do banco, rende menos. Do ponto de vista da empresa, é a diferença entre fechar e crescer.",
    },
  },
  {
    number: "02",
    stat: "R$350k",
    statLabel: "economizados",
    headline: "Dívida de R$420 mil. Negociada para R$70 mil em menos de uma semana.",
    sector: "Comercial · inadimplente",
    color: "from-[#c3aa4e]/20 to-transparent",
    summary:
      "O dono ia vender patrimônio pessoal. Uma análise da composição da dívida revelou irregularidades que mudaram completamente a negociação.",
    detail: {
      intro: [
        "Quando me chamou para negociar, fiz a primeira coisa que ninguém faz: analisei a composição da dívida. Não o valor total — a composição.",
      ],
      findings: [
        "Juros acima do contratualmente devido",
        "Tarifas sem fundamento cobradas ao longo dos meses",
        "Capitalização composta aplicada irregularmente sobre encargos",
      ],
      quote:
        '"Se a gente não chegar a um acordo aqui, o próximo passo é levar esta documentação ao Banco Central. E se for para o jurídico, contrato um perito independente para calcular os estornos devidos."',
      results: [
        "Dívida de R$420 mil → R$70 mil à vista",
        "R$350 mil economizados em menos de uma semana",
        "Sem advogado. Sem processo. Mesmo banco.",
      ],
      demonstration:
        "Não é truque. Não é blefe. É exercer o direito que toda empresa tem — mas que quase nenhuma exerce porque ninguém ensinou como chegar na mesa com pressão técnica documentada.",
    },
  },
  {
    number: "03",
    stat: "R$130k",
    statLabel: "por ano recuperados",
    headline: "R$1,1M aplicado a 16% do CDI quando existia produto a 99% do CDI.",
    sector: "Serviços · empresa saudável",
    color: "from-[#c3aa4e]/20 to-transparent",
    summary:
      "O gerente não foi desonesto. O gestor simplesmente não sabia pedir o produto pelo nome. A diferença em 12 meses: R$130 mil.",
    detail: {
      intro: [
        'A aplicação automática "rende 95% do CDI" — parece razoável. Mas na mesma instituição, com o mesmo risco e a mesma liquidez, existe um CDB que rende 99% do CDI.',
        'Perguntei ao gerente: "Por que você não ofereceu o CDB?" Resposta: "O gestor não tinha solicitado."',
      ],
      findings: [
        "Aplicação automática: 16% do CDI",
        "CDB disponível na mesma instituição: 99% do CDI",
        "Mesmo perfil de risco · mesma liquidez · produto nunca oferecido espontaneamente",
      ],
      results: [
        "R$130 mil por ano em rendimento recuperado",
        "Sem mudar de banco",
        "Sem mudar de risco",
        "Só pedindo o produto pelo nome",
      ],
      demonstration:
        "Toda instituição tem duas tabelas paralelas de aplicação. A tabela do balcão é a que rende menos e gera mais receita para o banco. A tabela sob demanda aparece só para quem pede. Quem não fala banquês fica na primeira. Quem fala, escolhe.",
    },
  },
  {
    number: "04",
    stat: "28%",
    statLabel: "do valor recebido — 100% de taxa paga",
    headline: "Consórcio contratado. Taxa calculada sobre o que não foi recebido.",
    sector: "Empresa em expansão · aquisição de bem",
    color: "from-[#c3aa4e]/20 to-transparent",
    summary:
      "72% de lance significa receber 28% líquido e pagar taxa sobre 100%. Em base anual: mais caro que empréstimo direto.",
    detail: {
      intro: [
        "O vendedor apresentou 72% de lance como vantagem. Em banquês: o cliente recebe 28% do valor da carta e paga taxa de administração sobre 100%.",
      ],
      findings: [
        "Recebeu líquido: 28% do valor da carta",
        "Pagou taxa de administração sobre: 100% do valor",
        "Custo efetivo anualizado: maior que empréstimo bancário comum",
      ],
      fourVariables: [
        "Taxa de administração e fundo de reserva com percentuais baixos",
        "Grupos com lances historicamente baixos",
        "Número de contemplados atrativo",
        "Curva de contemplação ao longo do ciclo",
      ],
      results: [
        "Consórcio estava contratado — impossível desfazer sem perda maior",
        "Orientação para todos os próximos consórcios usando as 4 variáveis",
        "Empresa nunca mais comprou consórcio de prateleira",
      ],
      demonstration:
        "Consórcio é uma ótima ferramenta de aquisição patrimonial — quando estruturado. O que está disponível no balcão, em 90% dos casos, serve para o gerente bater meta. Não para a empresa.",
    },
  },
];

const CaseCard = ({ c }: { c: CaseData }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#c3aa4e]/15 bg-[#1a2844] rounded-xl overflow-hidden">
      {/* Result header */}
      <div className={`bg-gradient-to-br ${c.color} p-6 md:p-8`}>
        <div className="flex items-start justify-between gap-4 mb-4">
          <span className="font-serif text-3xl md:text-4xl font-bold text-[#c3aa4e]/25 leading-none select-none">
            {c.number}
          </span>
          <span className="text-[#c3aa4e] text-xs uppercase tracking-widest font-semibold border border-[#c3aa4e]/30 px-2.5 py-1 rounded-full">
            {c.sector}
          </span>
        </div>

        {/* Big stat */}
        <div className="mb-3">
          <p className="font-serif text-4xl md:text-5xl font-bold text-[#c3aa4e] leading-none">
            {c.stat}
          </p>
          <p className="text-[#94a3b8] text-sm mt-1">{c.statLabel}</p>
        </div>

        <h3 className="font-serif text-lg md:text-xl text-[#f1f5f9] font-bold leading-snug mb-3">
          {c.headline}
        </h3>
        <p className="text-[#94a3b8] text-sm leading-relaxed">{c.summary}</p>
      </div>

      {/* Expand button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-3.5 border-t border-[#c3aa4e]/10 text-left hover:bg-[#c3aa4e]/5 transition-colors group"
      >
        <span className="text-[#c3aa4e] text-xs uppercase tracking-widest font-semibold group-hover:text-[#d4be70] transition-colors">
          {open ? "Fechar caso" : "Ver caso completo"}
        </span>
        <span
          className={`text-[#c3aa4e]/60 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          ▾
        </span>
      </button>

      {/* Detail panel */}
      {open && (
        <div className="border-t border-[#c3aa4e]/10 p-6 md:p-8 space-y-5">
          {/* Intro */}
          {c.detail.intro.map((p, i) => (
            <p key={i} className="text-[#94a3b8] text-sm md:text-base leading-relaxed">
              {p}
            </p>
          ))}

          {/* What was done */}
          {c.detail.whatWasDone && (
            <div className="space-y-2">
              <p className="text-[#f1f5f9] text-xs uppercase tracking-widest font-semibold">
                O que foi feito
              </p>
              <ul className="space-y-2">
                {c.detail.whatWasDone.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[#94a3b8] text-sm leading-relaxed">
                    <span className="text-[#c3aa4e] shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              {c.detail.immediateEffect && (
                <p className="text-[#f1f5f9] font-medium text-sm pl-5 border-l border-[#c3aa4e]/40 mt-2">
                  {c.detail.immediateEffect}
                </p>
              )}
            </div>
          )}

          {/* Findings */}
          {c.detail.findings && (
            <div className="space-y-2">
              <p className="text-[#f1f5f9] text-xs uppercase tracking-widest font-semibold">
                O que foi encontrado
              </p>
              <ul className="space-y-1.5">
                {c.detail.findings.map((f, i) => (
                  <li key={i} className="flex gap-3 text-[#94a3b8] text-sm leading-relaxed">
                    <span className="text-[#c3aa4e] shrink-0">·</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Quote */}
          {c.detail.quote && (
            <blockquote className="border-l-2 border-[#c3aa4e] pl-4 italic text-[#f1f5f9] text-sm leading-relaxed">
              {c.detail.quote}
            </blockquote>
          )}

          {/* Four variables */}
          {c.detail.fourVariables && (
            <div className="space-y-2">
              <p className="text-[#f1f5f9] text-xs uppercase tracking-widest font-semibold">
                As 4 variáveis do consórcio estruturado
              </p>
              <ul className="space-y-1.5">
                {c.detail.fourVariables.map((v, i) => (
                  <li key={i} className="flex gap-3 text-[#94a3b8] text-sm leading-relaxed">
                    <span className="text-[#c3aa4e] font-bold shrink-0">{i + 1}.</span>
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Results */}
          {c.detail.results.length > 0 && (
            <div className="border border-[#c3aa4e]/30 bg-[#c3aa4e]/5 rounded-lg px-5 py-4 space-y-2">
              <p className="text-[#c3aa4e] text-xs uppercase tracking-widest font-semibold">
                Resultado
              </p>
              {c.detail.results.map((r, i) => (
                <p key={i} className="flex gap-3 text-[#f1f5f9] text-sm leading-relaxed">
                  <span className="text-[#c3aa4e] shrink-0">✓</span>
                  {r}
                </p>
              ))}
            </div>
          )}

          {/* Demonstration */}
          <div className="pt-2 border-t border-[#c3aa4e]/10">
            <p className="text-[#c3aa4e] text-xs uppercase tracking-widest font-semibold mb-2">
              O que esse caso demonstra
            </p>
            <p className="text-[#94a3b8] text-sm leading-relaxed italic">
              {c.detail.demonstration}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const CaseResultCards = () => (
  <section className="bg-[#1d192e] py-20 md:py-28 border-t border-[#c3aa4e]/10">
    <div className="prose-wide">
      <p className="text-[#c3aa4e] text-xs uppercase tracking-[0.2em] font-semibold mb-3">
        Prova em campo
      </p>
      <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-4 leading-snug">
        Quatro casos reais.
        <br className="hidden md:block" /> Cada um paga o programa muitas vezes.
      </h2>
      <p className="text-[#94a3b8] text-base md:text-lg mb-10 max-w-2xl">
        Todos aconteceram em 25 anos de consultoria. Clique em cada caso para ver o
        detalhamento completo.
      </p>

      {/* Quick result stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        {[
          { n: "Zero", label: "dívida bancária após reestruturação" },
          { n: "R$350k", label: "economizados em uma negociação" },
          { n: "R$130k", label: "por ano recuperados em aplicação" },
          { n: "28% vs 100%", label: "custo real descoberto em consórcio" },
        ].map((s, i) => (
          <div
            key={i}
            className="border border-[#c3aa4e]/20 bg-[#c3aa4e]/5 rounded-lg px-4 py-4 text-center"
          >
            <p className="font-serif text-xl md:text-2xl font-bold text-[#c3aa4e] leading-none mb-1">
              {s.n}
            </p>
            <p className="text-[#94a3b8] text-xs leading-snug">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {CASES.map((c) => (
          <CaseCard key={c.number} c={c} />
        ))}
      </div>
    </div>
  </section>
);

export default CaseResultCards;
