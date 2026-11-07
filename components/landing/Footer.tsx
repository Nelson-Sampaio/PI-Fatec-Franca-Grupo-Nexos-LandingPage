"use client";

import { useState, useEffect } from "react";
import LogoLoop from "../ui/LogoLoop"; // Ajuste o caminho se necessário

// Lista de marketplaces (com os caminhos corretos da sua pasta public)
const marketplaces = [
  { name: "Shopee", image: "/logoMarketplace/shopee.svg" },
  { name: "Mercado Pago", image: "/logoMarketplace/mercadopago.svg" },
  { name: "Shopify", image: "/logoMarketplace/shopify.svg" },
  { name: "TikTok Shop", image: "/logoMarketplace/tiktok.svg" },
];

export default function Footer() {
  // Estado para evitar erro de pré-renderização do Next.js com o new Date()
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative bg-black border-t border-cyan-900/30 overflow-hidden">
      
      {/* --- SEÇÃO DE LOGOS COM ANIMAÇÃO --- */}
      <div className="py-12 border-b border-cyan-900/20 relative">
        {/* Efeito sutil de luz no fundo dos logos */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 text-center mb-8 relative z-10">
          <h3 
            className="text-lg md:text-xl font-bold uppercase tracking-widest text-gray-400"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Integrado aos principais <span className="text-cyan-500 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">Marketplaces</span>
          </h3>
        </div>
        
        {/* Container do LogoLoop */}
        <div className="w-full h-20 relative [&_img]:brightness-0 [&_img]:invert z-10">
          <LogoLoop
            logos={marketplaces.map((m) => ({
              src: m.image,
              alt: m.name,
            }))}
            speed={80}          
            direction="left"    
            logoHeight={40}     
            gap={80}            
            pauseOnHover={true} 
            fadeOut={true}      
          />
        </div>
      </div>

      {/* --- CONTEÚDO TRADICIONAL DO FOOTER --- */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        
        {/* Logo e Slogan */}
        <div className="text-center md:text-left">
          <span 
            className="text-2xl font-black tracking-widest text-cyan-400 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            NEXOS
          </span>
          <p className="text-xs text-gray-500 mt-2 uppercase tracking-widest">
            Soluções em Tecnologia de Ponta.
          </p>
        </div>
        
        {/* Direitos Autorais */}
        <div className="text-center text-xs text-gray-600 uppercase tracking-widest">
          <p>© {currentYear ?? "2026"} NEXOS. Todos os direitos reservados.</p>
        </div>
      </div>

      {/* Linha decorativa na base do footer */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </footer>
  );
}