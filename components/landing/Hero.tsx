

import Link from "next/link";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative flex flex-col items-center justify-center min-h-screen pt-32 pb-20 md:pt-24 md:pb-12 px-6 md:px-12 overflow-hidden"
    >
      {/* Efeito de Grade (Grid) de fundo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)] -z-10" />

      {/* Elementos decorativos de HUD (Cantos) - Escondidos em telas muito pequenas para não poluir */}
      <div className="hidden sm:block absolute top-28 md:top-32 left-4 md:left-12 w-8 md:w-12 h-8 md:h-12 border-t-2 border-l-2 border-cyan-500/30" />
      <div className="hidden sm:block absolute top-28 md:top-32 right-4 md:right-12 w-8 md:w-12 h-8 md:h-12 border-t-2 border-r-2 border-cyan-500/30" />
      <div className="hidden sm:block absolute bottom-16 md:bottom-12 left-4 md:left-12 w-8 md:w-12 h-8 md:h-12 border-b-2 border-l-2 border-cyan-500/30" />
      <div className="hidden sm:block absolute bottom-16 md:bottom-12 right-4 md:right-12 w-8 md:w-12 h-8 md:h-12 border-b-2 border-r-2 border-cyan-500/30" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto w-full">
        
        {/* Tag de Status */}
        <div className="flex items-center gap-2 mb-8 px-3 py-1.5 md:px-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-cyan-400 border border-cyan-400/30 rounded-full bg-cyan-400/5 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Conexão Estabelecida
        </div>

        {/* Título Principal */}
        <h1 
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight mb-6 w-full"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
            Desvende o
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_30px_rgba(0,255,255,0.3)] mt-2">
            Desconhecido
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed px-2">
          Explore nossa interface de alta performance. Uma experiência imersiva 
          projetada para o futuro, combinando design de ponta e tecnologia de 
          renderização avançada.
        </p>

        {/* Botões de Ação caso necessário */}
        
      </div>


    </section>
  );
}