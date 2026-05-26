import { Helmet } from "react-helmet-async";
import StickyHeader from "@/components/landing/StickyHeader";
import Hero from "@/components/landing/Hero";
import Opening from "@/components/landing/Opening";
import ThreeWarnings from "@/components/landing/ThreeWarnings";
import ComparisonDiagram from "@/components/landing/ComparisonDiagram";
import CaseResultCards from "@/components/landing/CaseResultCards";
import Convergence from "@/components/landing/Convergence";
import CtaMidpage from "@/components/landing/CtaMidpage";
import WhatYoullLearn from "@/components/landing/WhatYoullLearn";
import HowItWorks from "@/components/landing/HowItWorks";
import AboutRicardo from "@/components/landing/AboutRicardo";
import ValueStack from "@/components/landing/ValueStack";
import Guarantee from "@/components/landing/Guarantee";
import ForWhom from "@/components/landing/ForWhom";
import FAQ from "@/components/landing/FAQ";
import WhyNow from "@/components/landing/WhyNow";
import FinalCTA from "@/components/landing/FinalCTA";
import MobileStickyCtA from "@/components/landing/MobileStickyCtA";

const Index = () => (
  <>
    <Helmet>
      <title>Não Seja uma Presa Fácil — Ricardo Pollack</title>
      <meta
        name="description"
        content="Em 5 semanas, sua empresa para de aceitar a primeira proposta do banco em qualquer operação. Programa com Ricardo Pollack, 25 anos de consultoria financeira."
      />
    </Helmet>

    <StickyHeader />

    {/* Topo */}
    <Hero />
    <Opening />
    <ThreeWarnings />

    {/* Mecanismo + Prova */}
    <ComparisonDiagram />
    <CaseResultCards />
    <Convergence />

    {/* CTA intermediário */}
    <CtaMidpage />

    {/* Programa */}
    <WhatYoullLearn />
    <HowItWorks />

    {/* Autoridade */}
    <AboutRicardo />

    {/* Oferta */}
    <ValueStack />
    <Guarantee />

    {/* Qualificação + Objeções */}
    <ForWhom />
    <FAQ />

    {/* Fechamento */}
    <WhyNow />
    <FinalCTA />

    {/* Mobile sticky */}
    <MobileStickyCtA />
  </>
);

export default Index;
