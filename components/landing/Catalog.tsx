"use client";

import Image from "next/image";
import catalogData from "@/data/catalog.json"; 

export default function Catalog() {
  return (
    <section 
      id="catalog" 
      className="relative py-20 md:py-32 px-6 md:px-12 bg-black border-t border-cyan-900/20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <span className="mb-4 px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest text-cyan-400 border border-cyan-400/30 rounded-full bg-cyan-400/5">
            Nossas Soluções
          </span>
          <h2 
            className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Catálogo <span className="text-cyan-500">Estelar</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl">
            Explore os sistemas projetados para conectar sua operação ao resultado.
          </p>
        </div>

        {/* Container dos Cards */}
        <div className="flex flex-col gap-12">
          {catalogData.catalogItems.map((item) => (
            <div 
              key={item.id}
              className="group relative bg-black/60 border border-cyan-900/30 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 shadow-[0_0_50px_rgba(0,255,255,0.05)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                
                {/* Lado Esquerdo: Imagem do Produto */}
                <div className="relative h-300px lg:h-450px w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-transparent to-black/80 lg:to-black/90" />
                </div>

                {/* Lado Direito: Informações e Botões */}
                <div className="p-8 lg:p-12 flex flex-col justify-center relative z-10">
                  <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-cyan-400 border border-cyan-400/30 rounded-full bg-cyan-400/5 mb-4 w-fit">
                    SaaS de Dropshipping
                  </span>

                  <h3 
                    className="text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-4"
                    style={{ fontFamily: "var(--font-orbitron)" }}
                  >
                    {item.label}
                  </h3>
                  
                  <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-8">
                    {item.description}
                  </p>

                  {/* Botões de Acesso (CTAs) Lendo do JSON */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href={item.linkFornecedor}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-6 py-4 bg-cyan-500 text-black font-bold uppercase tracking-wider text-sm rounded-sm transition-all duration-300 hover:bg-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.6)]"
                    >
                      Sou Fornecedor
                    </a>
                    
                    <a 
                      href={item.linkSeller}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-6 py-4 border border-cyan-500/50 text-cyan-400 font-bold uppercase tracking-wider text-sm rounded-sm backdrop-blur-md hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300"
                    >
                      Sou Seller
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}