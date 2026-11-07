"use client";

import Link from "next/link";
import { useState } from "react";
import GlassSurface from "../ui/GlassSurface"; // Ajuste o caminho se necessário

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100]">
      {/* Container do GlassSurface */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-4">
        <GlassSurface
          width="100%"
          height={40}
          borderRadius={8}
          backgroundOpacity={0.1}
          saturation={1}
          blur={12}
          borderWidth={0.06}
          brightness={75}
          opacity={1}
          className="w-full"
        >
          <div className="w-full h-full flex items-center justify-between px-6 md:px-8">
            
            {/* Logo */}
            <Link 
              href="#home" 
              onClick={handleLinkClick}
              className="text-2xl font-black tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              NEXOS
            </Link>

            {/* Navegação Desktop */}
            <nav className="hidden md:flex gap-8 text-sm font-bold tracking-widest text-gray-300 uppercase">
              <Link href="#home" className="hover:text-cyan-400 transition-colors">Início</Link>
              <Link href="#about" className="hover:text-cyan-400 transition-colors">Sobre</Link>
              <Link href="#publico-alvo" className="hover:text-cyan-400 transition-colors">Público Alvo</Link>
              <Link href="#catalog" className="hover:text-cyan-400 transition-colors">Catálogo</Link>
            </nav>

            {/* Botão de Ação Desktop */}
            <div className="hidden md:block">
              <Link 
                href="#catalog" 
                className="px-6 py-2 border border-cyan-500/50 text-cyan-400 text-sm font-bold uppercase tracking-wider rounded-full hover:bg-cyan-500/10 transition-all duration-300"
              >
                Contato
              </Link>
            </div>

            {/* Botão Menu Mobile */}
            <button 
              className="md:hidden text-cyan-400 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </GlassSurface>
      </div>

      {/* Menu Mobile Dropdown (mantido igual, mas com fundo de vidro) */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-24 mx-4 z-[90]">
          <div className="bg-black/80 backdrop-blur-2xl border border-cyan-900/30 rounded-2xl h-auto py-8">
            <nav className="flex flex-col items-center gap-6 text-sm font-bold tracking-widest text-gray-300 uppercase">
              <Link href="#home" onClick={handleLinkClick} className="hover:text-cyan-400 transition-colors">Início</Link>
              <Link href="#about" onClick={handleLinkClick} className="hover:text-cyan-400 transition-colors">Sobre</Link>
              <Link href="#publico-alvo" onClick={handleLinkClick} className="hover:text-cyan-400 transition-colors">Público Alvo</Link>
              <Link href="#catalog" onClick={handleLinkClick} className="hover:text-cyan-400 transition-colors">Catálogo</Link>
              
              <Link 
                href="#catalog" 
                onClick={handleLinkClick}
                className="mt-2 px-8 py-3 border border-cyan-500/50 text-cyan-400 rounded-full hover:bg-cyan-500/10 transition-all duration-300"
              >
                Acessar
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}