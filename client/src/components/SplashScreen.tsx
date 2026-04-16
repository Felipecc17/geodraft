/**
 * DESIGN PHILOSOPHY: Neomórfico com Tipografia Ousada
 * Tela de abertura com animação de globo e título
 */

import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete?: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Desaparecer após 3 segundos
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 animate-splash-fade-out z-50">
      <div className="text-center">
        {/* Globo girando */}
        <div className="text-9xl mb-8 animate-spin-globe">
          🌍
        </div>

        {/* Título com efeito de entrada */}
        <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-title-enter">
          GeoDraft
        </h1>

        {/* Subtítulo */}
        <p className="text-lg text-muted-foreground mt-4 animate-title-enter" style={{ animationDelay: "0.5s" }}>
          Monte seu país ideal
        </p>
      </div>
    </div>
  );
}
