import Header from "../../components/landing/Header";
import Hero from "../../components/landing/Hero";
import Catalog from "../../components/landing/Catalog";
import About from "../../components/landing/About";
import PublicoAlvo from "../../components/landing/PublicoAlvo";
import Footer from "../../components/landing/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden flex flex-col selection:bg-cyan-500 selection:text-black">
      {/* Efeito de fundo global (Gradiente radial ciano) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black -z-10" />

      {/* O Header fica fixo no topo para facilitar a navegação */}
      <Header />
      {/* O conteúdo principal é empilhado aqui */}
      <div className="flex-1 flex flex-col relative z-10">
        <Hero />
        <About />
        <PublicoAlvo />
        <Catalog />
        <Footer />
      </div>
    </main>
  );
}