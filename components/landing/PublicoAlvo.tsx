"use client";

import Image from "next/image";
import publicoAlvoData from "@/data/publicoAlvo.json";

export default function PublicoAlvo() {
  const { intro, personas } = publicoAlvoData;

  return (
    <section 
      id="publico-alvo" 
      className="relative py-24 md:py-32 px-6 md:px-12 bg-black border-t border-cyan-900/20 overflow-hidden"
    >
      {/* Efeito de Grade sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px)] bg-size:4rem_4rem mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%) -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Introdução */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="mb-4 inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-cyan-400 border border-cyan-400/30 rounded-full bg-cyan-400/5">
            Ecossistema
          </span>
          <h2 
            className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            {intro.title}
          </h2>
          <div className="text-sm md:text-base text-gray-400 leading-relaxed whitespace-pre-line space-y-4">
            {intro.text}
          </div>
        </div>

        {/* Grid de Personas - PADRONIZADO COM MESMA ALTURA */}
        {/* Trocamos 'columns' por 'grid' para garantir alinhamento perfeito */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personas.map((persona) => (
            <div 
              key={persona.id} 
              // Adicionado flex e h-full para o card preencher a altura do grid
              className="flex flex-col h-full relative group border border-cyan-900/30 rounded-lg bg-black/40 backdrop-blur-sm overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
            >
              {/* Imagem da Persona - Altura fixa de 256px (h-64) */}
              <div className="relative w-full h-64 shrink-0 overflow-hidden bg-gray-900">
                <Image
                  src={persona.image}
                  alt={`Foto de ${persona.name}`}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                {/* Gradiente de sobreposição */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-80" />
                
                {/* Nome e Idade */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-orbitron)" }}>
                      {persona.name}
                    </h3>
                    <p className="text-xs text-cyan-400 font-bold uppercase tracking-wider mt-1">
                      {persona.occupation}
                    </p>
                  </div>
                  <span className="text-sm font-mono text-gray-300 bg-black/50 px-2 py-1 rounded border border-gray-700">
                    {persona.age}
                  </span>
                </div>
              </div>

              {/* Conteúdo do Card - flex-1 empurra o texto para preencher o espaço */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <h4 className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest mb-1">Descritivo do Negócio</h4>
                  <p className="text-xs text-gray-300 leading-relaxed mb-4">{persona.business}</p>
                </div>
                
                <div className="pt-4 border-t border-gray-800">
                  <h4 className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest mb-1">Necessidade / Melhoria</h4>
                  {/* line-clamp-4 limita o texto a 4 linhas e coloca '...' se for muito longo */}
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-5">
                    {persona.need}
                  </p>
                </div>
              </div>

              {/* Detalhe decorativo lateral */}
              <div className="absolute top-0 right-0 w-1 h-0 bg-cyan-500 group-hover:h-full transition-all duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}