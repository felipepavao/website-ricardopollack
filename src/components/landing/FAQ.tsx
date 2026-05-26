import { useState } from "react";

type FaqItem = { q: string; a: string };

const FAQS: FaqItem[] = [
  {
    q: "Já tenho gestor financeiro. Ele não cuida disso?",
    a: "Em 9 de cada 10 empresas que atendemos, o gestor financeiro é uma pessoa séria, formada e dedicada — que nunca recebeu treinamento operacional para ler contratos bancários. Ele aprendeu contabilidade, DRE, fluxo de caixa. Não aprendeu a calcular CET, identificar tarifas indevidas ou estruturar negociação com argumento técnico. Não é culpa dele — isso não é ensinado em nenhum curso de administração ou contabilidade do Brasil. É ensinado dentro dos bancos, para quem trabalha nos bancos. O programa resolve isso para você e, se quiser, para seu gestor também.",
  },
  {
    q: "R$ 4.997 é muito para um programa online.",
    a: 'Empresa típica de R$ 5M de faturamento tem, em média, R$ 1,5M em operações ativas com banco. Uma diferença de 8 pontos percentuais ao ano — abaixo do piso da nossa experiência — representa R$ 120 mil de custo evitável por ano. O programa se paga inteiro na primeira operação bem aplicada. Para referência: uma consultoria individual custa entre R$ 25 mil e R$ 60 mil por engajamento. O programa entrega o mesmo método e ferramentas por R$ 4.997.',
  },
  {
    q: "Não tenho tempo para mais um programa.",
    a: "O formato foi desenhado para quem não tem tempo. São 5 aulas ao vivo às terças-feiras às 20h — você não precisa reorganizar sua agenda diurna. Os 12 módulos gravados ficam disponíveis por 12 meses: você assiste quando aparecer uma operação nova que precisa de orientação. Não é mais um item de to-do. É uma ferramenta que você aciona quando precisa.",
  },
  {
    q: "Isso funciona para o tamanho da minha empresa?",
    a: "Os quatro casos demonstrados incluem empresas em fases completamente diferentes: uma com caixa em colapso, uma inadimplente, uma saudável com excedente, uma em expansão. Faturamentos que variam de R$ 1,2M a empresas maiores. O mecanismo — saber falar banquês — funciona para qualquer empresa que opera com banco regularmente. Se você assina contratos bancários com alguma frequência, o programa é para você.",
  },
  {
    q: "Já tentei negociar com banco antes e não funcionou.",
    a: "A maioria das tentativas de negociação falha por uma razão específica: o empresário chega pedindo desconto, e o gerente genuinamente não tem autoridade para dar desconto. Quem tem autoridade para mudar spread, modalidade e estrutura é o gerente quando percebe que do outro lado há um cliente que conhece o produto. Não é negociação no sentido popular. É linguagem. Quando você usa a linguagem certa, a conversa muda em 30 segundos — como demonstrado nos 4 casos.",
  },
  {
    q: "O banco não vai simplesmente dizer não para qualquer pedido?",
    a: "Bancos não dizem não para pedidos que qualificam. Eles oferecem o que o cliente merece receber — e quem define esse merecimento é o próprio cliente, pela linguagem que usa na reunião. Isso não é metáfora: há produtos, taxas e condições literalmente diferentes para clientes que demonstram conhecimento técnico. A prova está nos quatro casos: mesmos bancos, mesmos gerentes, condições completamente diferentes.",
  },
  {
    q: "Em quanto tempo vejo resultado?",
    a: "Depende de quando você tiver sua próxima operação bancária. Se você tiver uma reunião com o banco na semana seguinte ao início do programa, você entra com ferramentas que não tinha antes. Os primeiros resultados aplicáveis vêm da primeira aula. A garantia de 7 dias existe exatamente porque resultados rápidos são o padrão, não a exceção.",
  },
  {
    q: "E se eu não gostar do programa?",
    a: "7 dias de garantia incondicional. Se em qualquer momento nos primeiros 7 dias você entender que o programa não é para você, devolvemos 100% do valor. Sem perguntas, sem burocracia, sem ligação de retenção. Você entra sem risco.",
  },
];

const FaqItem = ({ item, index }: { item: FaqItem; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#c3aa4e]/15 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 px-5 md:px-6 py-5 text-left hover:bg-[#c3aa4e]/5 transition-colors group"
      >
        <div className="flex items-start gap-3">
          <span className="text-[#c3aa4e]/40 font-serif text-sm font-bold leading-none mt-0.5 shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-[#f1f5f9] font-medium text-sm md:text-base leading-snug group-hover:text-white transition-colors">
            {item.q}
          </span>
        </div>
        <span
          className={`text-[#c3aa4e]/60 shrink-0 transition-transform duration-200 mt-0.5 ${open ? "rotate-180" : ""}`}
        >
          ▾
        </span>
      </button>

      {open && (
        <div className="px-5 md:px-6 pb-5 border-t border-[#c3aa4e]/10 pt-4">
          <p className="text-[#94a3b8] leading-relaxed text-sm md:text-base pl-7">
            {item.a}
          </p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => (
  <section className="bg-[#17213a] py-20 md:py-28 border-t border-[#c3aa4e]/10">
    <div className="prose-medium">
      <p className="text-[#c3aa4e] text-xs uppercase tracking-[0.2em] font-semibold mb-3">
        Perguntas frequentes
      </p>
      <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-12 leading-snug">
        O que você ainda quer saber
      </h2>

      <div className="space-y-3">
        {FAQS.map((item, i) => (
          <FaqItem key={i} item={item} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;
