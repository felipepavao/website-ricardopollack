type Component = {
  icon: string;
  label: string;
  title: string;
  description: string;
};

const COMPONENTS: Component[] = [
  {
    icon: "01",
    label: "Aulas ao vivo",
    title: "5 aulas ao vivo comigo",
    description:
      "Terças-feiras às 20h. Você traz a situação real da sua empresa — uma proposta que chegou, uma operação ativa com dúvida, uma reunião que vai acontecer — e a gente resolve ao vivo.",
  },
  {
    icon: "02",
    label: "Área de membros",
    title: "12 módulos gravados",
    description:
      "Você assiste no horário que conseguir. Acesso por 12 meses — tempo pra revisitar quando aparecer operação nova.",
  },
  {
    icon: "03",
    label: "Ferramenta",
    title: "Planilha de Cálculos Financeiros",
    description:
      "A mesma que eu uso em consultoria. CET, taxa efetiva, comparativo de propostas, simulação de antecipação, cálculo de consórcio (taxa real sobre líquido), análise de aplicações. Pronta pra abrir e usar.",
  },
  {
    icon: "04",
    label: "Material didático",
    title: "Glossário do Banquês + Kit Completo",
    description:
      "Modelos de proposta comentados, checklist de pré-assinatura, Glossário do Banquês e argumentário de negociação técnica.",
  },
  {
    icon: "05",
    label: "Suporte",
    title: "WhatsApp e e-mail entre as aulas",
    description:
      "Suporte direto entre os 5 encontros ao vivo. Traga dúvidas reais enquanto o programa acontece.",
  },
];

const HowItWorks = () => (
  <section className="bg-[#17213a] py-20 md:py-28 border-t border-[#c3aa4e]/10">
    <div className="prose-medium">
      <p className="text-[#c3aa4e] text-xs uppercase tracking-[0.2em] font-semibold mb-3">
        Estrutura
      </p>
      <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-12 leading-snug">
        Como o programa funciona
      </h2>

      <div className="space-y-4">
        {COMPONENTS.map((c) => (
          <div
            key={c.icon}
            className="flex gap-5 md:gap-7 border border-[#c3aa4e]/15 bg-[#1a2844] rounded-xl px-5 md:px-7 py-5"
          >
            {/* Number */}
            <div className="shrink-0 pt-0.5">
              <span className="font-serif text-3xl font-bold text-[#c3aa4e]/25 leading-none select-none">
                {c.icon}
              </span>
            </div>

            {/* Content */}
            <div>
              <p className="text-[#c3aa4e] text-xs uppercase tracking-[0.15em] font-semibold mb-0.5">
                {c.label}
              </p>
              <h3 className="font-serif text-lg text-[#f1f5f9] font-bold mb-2">
                {c.title}
              </h3>
              <p className="text-[#94a3b8] leading-relaxed text-sm md:text-base">
                {c.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
