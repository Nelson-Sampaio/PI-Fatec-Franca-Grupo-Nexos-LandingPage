"use client";

import { useEffect, useState } from "react";
// Ajuste o caminho se o arquivo foi salvo em outro lugar (ex: "../ui/GhostFibers")
import GhostFibers from "./GhostFibers"; 

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [isFading, setIsFading] = useState(false);

  const handleExit = () => {
    if (isFading) return;
    setIsFading(true);
    
    setTimeout(() => {
      onFinish();
    }, 500);
  };

  useEffect(() => {
    const autoExitTimer = setTimeout(() => {
      handleExit();
    }, 15000);

    return () => clearTimeout(autoExitTimer);
  }, []);

  return (
    <div 
      onClick={handleExit}
      className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center cursor-pointer transition-opacity duration-700 ease-in-out ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Camada 1: Fundo Animado GhostFibers */}
      <div className="absolute inset-0 z-0">
        <GhostFibers 
          // Cores do tema NEXOS (Ciano e Azul)
          glowColor="#00ffff" 
          lineColor="#ffffff" 
          secondaryColor="#0088ff"
          // Ajustes de comportamento para uma Splash Screen
          speed={0.3} 
          glow={1} 
          brightness={1.2}
          mouseInteraction={true} // Desativa o mouse para não conflitar com o clique de saída
          intro={true} // Faz os feixes entrarem na tela
          style={{ width: "100%", height: "100%" }} 
        />
      </div>

      {/* Camada 2: Texto Centralizado e Instrução */}
      <div className="relative z-10 flex flex-col items-center gap-6 pointer-events-none">
        <h1 
          className="text-5xl md:text-7xl font-black uppercase tracking-widest text-white drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          NEXOS
        </h1>
        
        <div className="flex flex-col items-center gap-2 animate-pulse mt-4">
          <p className="text-cyan-400 tracking-[0.3em] uppercase text-xs md:text-sm font-bold">
            Inicializando Sistema...
          </p>

        </div>
      </div>

      {/* Linha decorativa inferior */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse z-10" />
    </div>
  );
}