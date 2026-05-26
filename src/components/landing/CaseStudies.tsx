type Case = {
  number: string;
  title: string;
  sector: string;
  intro: string[];
  findings?: string[];
  whatWasDone?: string[];
  immediateEffect?: string;
  quote?: string;
  results: string[];
  demonstration: string[];
  fourVariables?: string[];
};

const CASES: Case[] = [
  {
    number: "01",
    title:
      "A empresa que ia fechar saiu da espiral de dívidas em uma única operação bancária",
    sector: "Setor industrial · faturamento médio",
    intro: [
      "Quando o dono me chamou, a situação era a seguinte: as parcelas dos empréstimos ativos, somadas aos juros mensais, somadas às despesas operacionais da empresa, eram maiores que o faturamento mensal.",
      "Em linguagem clara: a empresa estava perdendo dinheiro todo mês, e o caixa só não tinha quebrado ainda porque o dono estava raspando reserva pessoal pra cobrir folha.",
      "A solução óbvia (e errada) seria pegar mais um empréstimo pra quitar um dos empréstimos existentes. Eu não fiz isso.",
    ],
    whatWasDone: [
      "Contratei um novo empréstimo com período de carência.",
      'Em vez de usar esse empréstimo pra quitar uma dívida, usei pra quitar 12 parcelas de todas as dívidas ativas.',
    ],
    immediateEffect:
      "Durante 12 meses, a empresa não pagou parcela de nenhum empréstimo. Só pagava as despesas operacionais.",
    results: [
      "A empresa saiu da espiral",
      "Passou a pagar menos do que recebia",
      'Saiu do "modo apaga-incêndio"',
      "O gestor financeiro saiu do operacional e voltou a pensar estrategicamente",
      "A empresa começou a gerar sobra de caixa",
      "12 meses depois, tinha caixa pra quitar mais um ano de dívida",
      "Hoje: sem dívida bancária, capital de giro próprio, contas pagas com sobra",
    ],
    demonstration: [
      "A diferença entre uma empresa que sobrevive e uma que fecha, em situação de stress de caixa, não é o tamanho da dívida. É como você estrutura o pagamento dela.",
      "Saber que existe a possibilidade de contratar empréstimo com carência e usar a carência pra quitar parcelas — não pra quitar dívidas — é uma decisão de engenharia financeira que nenhum gerente vai te sugerir. Porque do ponto de vista do banco, essa operação rende menos do que rolar a dívida normalmente.",
      "Mas do ponto de vista da empresa, é a diferença entre fechar e crescer.",
    ],
  },
  {
    number: "02",
    title: "Uma dívida de R$ 420 mil que virou R$ 70 mil à vista",
    sector: "Setor comercial · inadimplente",
    intro: [
      "O dono tinha praticamente decidido vender patrimônio pessoal pra quitar a dívida.",
      "Quando me chamou pra negociar, fiz a primeira coisa que ninguém faz: analisei a composição da dívida. Não o valor total — a composição.",
    ],
    findings: [
      "Juros acima do que era contratualmente devido",
      "Tarifas que não tinham fundamento (cobradas indevidamente ao longo dos meses)",
      "Aplicação irregular de capitalização composta sobre encargos",
      'Uma salada de irregularidades acumuladas ao longo de anos',
    ],
    quote:
      '"Eu prefiro resolver isso de forma amigável, aqui. Mas se a gente não chegar a um acordo nesta reunião, o próximo passo é levar essa documentação pro Banco Central pra avaliação. E se for pro jurídico, eu contrato um perito independente que vai calcular os estornos devidos pela instituição."',
    results: [
      "Dívida de R$ 420 mil negociada para R$ 70 mil à vista",
      "Economia de R$ 350 mil em menos de uma semana",
    ],
    demonstration: [
      "A maioria dos empresários, quando o banco aperta, paga ou quebra. Pagam mais do que deviam ou correm pra recuperação judicial.",
      "Existe um terceiro caminho que quase ninguém usa: negociar com pressão técnica documentada. Quando você chega na mesa com a composição da dívida auditada, e quando o gerente entende que do outro lado tem alguém que vai escalar pro Bacen ou contratar perito, o valor da negociação muda de patamar.",
      "Isso não é truque. Não é blefe. É exercer o direito que toda empresa tem — mas que quase nenhuma exerce, porque ninguém ensinou.",
    ],
  },
  {
    number: "03",
    title: "Uma aplicação automática que custava R$ 130 mil por ano",
    sector: "Setor de serviços · saudável · excedente de R$ 1.145.000",
    intro: [
      'O gerente, querendo ajudar (e ele realmente queria), propôs uma aplicação ao gestor financeiro. O argumento foi simples: "muita comodidade, todo o valor que sobra do caixa fica aplicado automaticamente, e quando você precisa do dinheiro, o resgate é automático."',
      "O gestor financeiro aceitou. Pareceu razoável.",
    ],
    findings: [
      "A aplicação automática rende 16% do CDI",
      "Na mesma instituição, com o mesmo perfil de risco e a mesma liquidez, existe um CDB que rende 99% do CDI",
    ],
    quote:
      '"Por que você não ofereceu o CDB de 99% do CDI ao invés da aplicação automática?"\n\nResposta do gerente: "O gestor não tinha solicitado."',
    results: [
      "Mais de R$ 130 mil por ano em rendimento perdido",
      "Não por desonestidade — porque o gestor não sabia perguntar pelo nome do produto",
    ],
    demonstration: [
      "A maioria das instituições financeiras têm duas ou três tabelas paralelas de produtos de aplicação, com rentabilidades muito diferentes pro mesmo perfil de risco.",
      'A tabela de balcão (aplicação automática, fundos do banco) é a que rende menos e gera mais receita pro banco. A tabela "sob demanda" (CDBs específicos, LCAs, LCIs negociadas) é a que rende mais — e aparece só pra quem pede.',
      "Quem não fala banquês fica na primeira tabela. Quem fala, escolhe.",
    ],
  },
  {
    number: "04",
    title: "Um consórcio que saiu mais caro que empréstimo",
    sector: "Empresa em expansão · aquisição de bem",
    intro: [
      "O vendedor do consórcio apresentou uma proposta com 72% de lance. Em linguagem clara: o cliente seria contemplado com a carta de crédito, porém recebeu apenas 28% do valor líquido e pagou a taxa de administração sobre 100% da carta — não sobre o que efetivamente recebeu.",
    ],
    findings: [
      "O cliente recebeu, líquido, apenas 28% do valor da carta",
      "Pagou taxa de administração sobre 100% do valor",
      "A operação ficou, em base anualizada, mais cara que um empréstimo bancário comum",
    ],
    results: [],
    fourVariables: [
      "Taxa de administração e fundo de reserva com percentuais baixos",
      "Estudo de grupos com lances historicamente baixos",
      "Número de contemplados atrativo no grupo",
      "Análise da curva de contemplação ao longo do ciclo",
    ],
    demonstration: [
      'Consórcio é um dos produtos mais incompreendidos do mercado financeiro brasileiro. A maioria dos empresários acha que tá "fugindo de juro" comprando consórcio.',
      "Em muitos casos, está pagando juro disfarçado de taxa de administração. E pagando mais do que pagaria em empréstimo direto.",
      "Saber a diferença entre os dois tipos de consórcio é a diferença entre uma decisão de aquisição patrimonial inteligente e uma armadilha de longo prazo.",
    ],
  },
];

// ──────────────────────────────────────────────────────────
// Sub-components
// ──────────────────────────────────────────────────────────

const ResultBox = ({ items }: { items: string[] }) =>
  items.length === 0 ? null : (
    <div className="border border-[#c3aa4e]/40 bg-[#c3aa4e]/5 rounded-lg px-6 py-5">
      <p className="text-[#c3aa4e] text-xs uppercase tracking-[0.15em] font-semibold mb-3">
        Resultado
      </p>
      <ul className="space-y-2">
        {items.map((r, i) => (
          <li
            key={i}
            className="flex gap-3 text-[#f1f5f9] text-sm md:text-base leading-relaxed"
          >
            <span className="text-[#c3aa4e] shrink-0 mt-0.5">✓</span>
            {r}
          </li>
        ))}
      </ul>
    </div>
  );

const CaseCard = ({ c }: { c: Case }) => (
  <div className="border border-[#c3aa4e]/15 bg-[#1a2844] rounded-xl p-6 md:p-8 space-y-6">
    {/* Header */}
    <div className="flex items-start gap-4">
      <span className="font-serif text-4xl md:text-5xl font-bold text-[#c3aa4e]/25 leading-none shrink-0 select-none">
        {c.number}
      </span>
      <div>
        <h3 className="font-serif text-lg md:text-2xl text-[#f1f5f9] font-bold leading-snug">
          {c.title}
        </h3>
        <p className="text-[#c3aa4e] text-xs font-medium mt-1 uppercase tracking-wide">
          {c.sector}
        </p>
      </div>
    </div>

    {/* Intro */}
    <div className="space-y-3">
      {c.intro.map((p, i) => (
        <p key={i} className="text-[#94a3b8] leading-relaxed text-sm md:text-base">
          {p}
        </p>
      ))}
    </div>

    {/* What was done */}
    {c.whatWasDone && (
      <div className="space-y-3">
        <p className="text-[#f1f5f9] text-xs uppercase tracking-widest font-semibold">
          O que foi feito
        </p>
        <ul className="space-y-2 pl-1">
          {c.whatWasDone.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 text-[#94a3b8] text-sm md:text-base leading-relaxed"
            >
              <span className="text-[#c3aa4e] shrink-0 mt-0.5">→</span>
              {item}
            </li>
          ))}
        </ul>
        {c.immediateEffect && (
          <p className="text-[#f1f5f9] font-medium text-sm md:text-base pl-5 border-l border-[#c3aa4e]/40">
            {c.immediateEffect}
          </p>
        )}
      </div>
    )}

    {/* Findings */}
    {c.findings && (
      <div className="space-y-2">
        <p className="text-[#f1f5f9] text-xs uppercase tracking-widest font-semibold">
          O que foi encontrado
        </p>
        <ul className="space-y-2">
          {c.findings.map((f, i) => (
            <li
              key={i}
              className="flex gap-3 text-[#94a3b8] text-sm md:text-base leading-relaxed"
            >
              <span className="text-[#c3aa4e] shrink-0 mt-0.5">·</span>
              {f}
            </li>
          ))}
        </ul>
      </div>
    )}

    {/* Quote */}
    {c.quote && (
      <blockquote className="border-l-2 border-[#c3aa4e] pl-5 italic text-[#f1f5f9] text-sm md:text-base leading-relaxed whitespace-pre-line">
        {c.quote}
      </blockquote>
    )}

    {/* Four variables (Case 04) */}
    {c.fourVariables && (
      <div className="space-y-2">
        <p className="text-[#f1f5f9] text-xs uppercase tracking-widest font-semibold">
          As 4 variáveis do consórcio estruturado
        </p>
        <ul className="space-y-2">
          {c.fourVariables.map((v, i) => (
            <li
              key={i}
              className="flex gap-3 text-[#94a3b8] text-sm md:text-base leading-relaxed"
            >
              <span className="text-[#c3aa4e] font-bold shrink-0">{i + 1}.</span>
              {v}
            </li>
          ))}
        </ul>
      </div>
    )}

    {/* Results */}
    <ResultBox items={c.results} />

    {/* Demonstration */}
    <div className="pt-2 border-t border-[#c3aa4e]/10 space-y-3">
      <p className="text-[#c3aa4e] text-xs uppercase tracking-[0.15em] font-semibold">
        O que esse caso demonstra
      </p>
      {c.demonstration.map((p, i) => (
        <p
          key={i}
          className="text-[#94a3b8] leading-relaxed text-sm md:text-base italic"
        >
          {p}
        </p>
      ))}
    </div>
  </div>
);

// ──────────────────────────────────────────────────────────
// Section
// ──────────────────────────────────────────────────────────

const CaseStudies = () => (
  <section className="bg-[#1d192e] py-20 md:py-28 border-t border-[#c3aa4e]/10">
    <div className="prose-wide">
      <p className="text-[#c3aa4e] text-xs uppercase tracking-[0.2em] font-semibold mb-3">
        Prova em campo
      </p>
      <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-4 leading-snug">
        Quatro casos reais.
        <br className="hidden md:block" /> Cada um paga o programa muitas vezes.
      </h2>
      <p className="text-[#94a3b8] text-base md:text-lg mb-14 max-w-2xl">
        Todos aconteceram na minha consultoria de 25 anos. Detalhes e dados sensíveis
        preservados. Lê os quatro com calma.
      </p>

      <div className="space-y-6">
        {CASES.map((c) => (
          <CaseCard key={c.number} c={c} />
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudies;
