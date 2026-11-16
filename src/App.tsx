import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowToOrder } from "./components/HowToOrder";
import { Location } from "./components/Location";
import { Marmitex } from "./components/Marmitex";
import { Menu } from "./components/Menu";
import { StickyOrderBar } from "./components/StickyOrderBar";
import { WeekMenu } from "./components/WeekMenu";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal();

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only-focusable fixed left-4 top-4 z-50 rounded-full bg-ink px-5 py-3 font-bold text-white"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <WeekMenu />
        <Menu />
        <Marmitex />
        <HowToOrder />
        <Location />
      </main>
      <Footer />
      {/* Espaço reservado para a barra fixa no celular, para ela não cobrir o rodapé */}
      <div aria-hidden="true" className="h-[calc(5.5rem+env(safe-area-inset-bottom))] bg-brand-dark md:hidden" />
      <StickyOrderBar />
    </>
  );
}
