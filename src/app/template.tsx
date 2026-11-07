"use client";

import { useState } from "react";
import SplashScreen from "../../components/ui/SplashScreen"; // Ajuste o caminho se necessário

// Adicione esta linha para desativar a validação de Instant UI neste segmento
export const instant = false; 

export default function Template({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <div className={showSplash ? "invisible" : ""}>
        {children}
      </div>
    </>
  );
}