"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import aboutData from "@/data/about.json";

export default function About() {
  const { sobre, mvv, fundadores } = aboutData;

  return (
    <section 
      id="about" 
      className="relative py-24 md:py-32 px-6 md:px-12 bg-black border-t border-cyan-900/20 overflow-hidden"
    >
      {/* Efeito de Grade de Fundo sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] -z-10" />

      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        
        {/* --- BLOCO 1: SOBRE A EMPRESA --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="mb-4 inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-cyan-400 border border-cyan-400/30 rounded-full bg-cyan-400/5">
              Nossa História
            </span>
            <h2 
              className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              {sobre.title}
            </h2>
            <div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed">
              {sobre.paragraphs.map((p, i) => (
                <p key={i} className={i === 1 ? "text-cyan-400 font-bold text-lg md:text-xl" : ""}>
                  {p}
                </p>
              ))}
            </div>
          </div>
          
          {/* Elemento Visual Lúdico (Imagem) */}
          <div className="relative h-[300px] lg:h-[400px] border border-cyan-500/20 rounded-lg overflow-hidden group">
             {/* Imagem de Fundo */}
             <Image
               src="/images/elementoVisualAbout.jpg"
               alt="Nexos conectando a produção ao futuro"
               fill
               sizes="(max-width: 1024px) 100vw, 50vw"
               priority
               className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
             />

             {/* Overlay de gradiente sutil */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
             
             {/* Linha decorativa neon na base */}
             <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

                {/* --- BLOCO 2: MISSÃO, VISÃO E VALORES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Coluna da Esquerda (Missão e Visão) */}
          <div className="flex flex-col gap-6 h-full">
            {[mvv.missao, mvv.visao].map((item, idx) => (
              <div 
                key={idx} 
                // flex-1 faz os cards esticarem para preencher o espaço vertical
                className="flex-1 flex flex-col p-6 border border-cyan-900/30 rounded-lg bg-black/40 backdrop-blur-sm hover:border-cyan-500/50 transition-colors"
              >
                <h3 className="text-cyan-400 font-bold uppercase tracking-widest mb-3 text-sm shrink-0">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed flex-1">
                  {item.content}
                </p>
              </div>
            ))}
          </div>

          {/* Coluna da Direita (Valores) */}
          <div className="flex flex-col p-6 border border-cyan-900/30 rounded-lg bg-black/40 backdrop-blur-sm h-full">
            <h3 className="text-cyan-400 font-bold uppercase tracking-widest mb-4 text-sm shrink-0">
              Valores
            </h3>
            <ul className="space-y-4 flex-1">
              {mvv.valores.map((v, i) => (
                <li key={i} className="text-sm">
                  <strong className="text-white block mb-1">{v.title}</strong>
                  <span className="text-gray-400 leading-relaxed">{v.desc}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>

        {/* --- BLOCO 3: FUNDADORES (Carrossel com Setas e Arrasto) --- */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 
              className="text-2xl md:text-4xl font-black uppercase text-white"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Os <span className="text-cyan-500">Fundadores</span>
            </h3>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {fundadores.map((fundador, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  
                  {/* O Card 3D */}
                  <div className="group relative h-[450px] w-full [perspective:1000px]">
                    <div className="relative h-full w-full rounded-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-[0_0_20px_rgba(0,255,255,0.05)]">
                      
                      {/* Frente do Card (Foto) */}
                      <div className="absolute inset-0 rounded-xl overflow-hidden border border-cyan-900/30 bg-black [backface-visibility:hidden]">
                        <img 
                          src={fundador.image} 
                          alt={fundador.name}
                          className="w-full h-full object-cover grayscale opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                          <h4 className="text-xl font-bold text-white uppercase tracking-wider" style={{ fontFamily: "var(--font-orbitron)" }}>
                            {fundador.name}
                          </h4>
                          <div className="w-12 h-1 bg-cyan-500 mx-auto mt-2 rounded-full" />
                        </div>
                      </div>

                      {/* Verso do Card (Informações com Scroll) */}
                      <div className="absolute inset-0 rounded-xl overflow-hidden border border-cyan-500/50 bg-black/95 backdrop-blur-xl p-6 flex flex-col [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <h4 className="text-xl font-bold text-cyan-400 uppercase tracking-wider mb-1 shrink-0" style={{ fontFamily: "var(--font-orbitron)" }}>
                          {fundador.name}
                        </h4>
                        <p className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-4 border-b border-cyan-900/50 pb-3 shrink-0">
                          {fundador.role}
                        </p>
                        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                          <p className="text-sm text-gray-200 leading-relaxed">
                            {fundador.bio}
                          </p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Botões de Navegação (Setas) */}
            <CarouselPrevious className="left-0 bg-black/50 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10" />
            <CarouselNext className="right-0 bg-black/50 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10" />
          </Carousel>
        </div>

      </div>
    </section>
  );
}