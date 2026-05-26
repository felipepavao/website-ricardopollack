type Dimension = {
  label: string;
  title: string;
  items: string[];
};

const DIMENSIONS: Dimension[] = [
  {
    label: "Dimensão 01",
    title: "Dívidas ativas",
    items: [
      "Auditar a composição de qualquer empréstimo da sua empresa",
      "Identificar juros indevidos, tarifas indevidas, capitalizações irregulares",
      "Estruturar reorganização de dívida usando carência estratégica (não rolagem)",
      "Negociar com pressão técnica documentada — não com pedido",
    ],
  },
  {
    label: "Dimensão 02",
    title: "Contratação de crédito",
    items: [
      "Ler qualquer proposta em 5 minutos identificando o CET (Custo Efetivo Total) real",
      "Calcular taxa efetiva sem depender do banco",
      "Comparar modalidades (giro, antecipação, conta garantida, BNDES) tecnicamente",
      "Saber qual modalidade serve pra qual problema — a maioria das empresas usa giro pra problema que pediria antecipação",
      "Identificar linhas específicas para investimento, incluindo diversas linhas de repasse do BNDES com finalidade específica, juros baixos e carência",
    ],
  },
  {
    label: "Dimensão 03",
    title: "Excedente de caixa",
    items: [
      "Identificar quando seu dinheiro está rendendo abaixo do mercado",
      "Pedir produtos de aplicação pelo nome (CDB de liquidez, LCAs negociadas, etc.)",
      "Avaliar fundos pela composição da carteira, não pela rentabilidade declarada",
      "Distinguir crédito público de crédito privado em qualquer aplicação que você fizer",
    ],
  },
  {
    label: "Dimensão 04",
    title: "Consórcios e aquisição patrimonial",
    items: [
      "Distinguir consórcio de prateleira de consórcio estruturado",
      "Calcular a taxa de administração efetiva sobre o líquido recebido",
      "Avaliar o histórico de contemplação de qualquer grupo antes de entrar",
      "Decidir quando consórcio faz sentido e quando empréstimo é melhor",
    ],
  },
  {
    label: "Dimensão 05",
    title: "A reunião com o gerente",
    items: [
      "Negociar com argumento técnico, não com pedido",
      "Saber as perguntas que mudam a tabela que o gerente vai oferecer",
      "Identificar quando o banco está negociando do lado dele ou do seu",
    ],
  },
];

const WhatYoullLearn = () => (
  <section className="bg-[#1d192e] py-20 md:py-28 border-t border-[#c3aa4e]/10">
    <div className="prose-wide">
      <p className="text-[#c3aa4e] text-xs uppercase tracking-[0.2em] font-semibold mb-3">
        O programa em detalhe
      </p>
      <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-4 leading-snug">
        O que você sai sabendo fazer
      </h2>
      <p className="text-[#94a3b8] text-base md:text-lg mb-12 max-w-2xl">
        Não é "como negociar taxa". É como operar com banco em todas as dimensões
        críticas que decidem o caixa da sua empresa.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {DIMENSIONS.map((d) => (
          <div
            key={d.label}
            className="border border-[#c3aa4e]/15 bg-[#1a2844] rounded-xl p-6 space-y-4"
          >
            <div>
              <p className="text-[#c3aa4e] text-xs uppercase tracking-[0.15em] font-semibold mb-1">
                {d.label}
              </p>
              <h3 className="font-serif text-lg md:text-xl text-[#f1f5f9] font-bold">
                {d.title}
              </h3>
            </div>
            <ul className="space-y-2.5">
              {d.items.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-[#94a3b8] text-sm leading-relaxed"
                >
                  <span className="text-[#c3aa4e] shrink-0 mt-0.5">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatYoullLearn;
