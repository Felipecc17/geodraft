/**
 * DESIGN PHILOSOPHY: Neomórfico com Tipografia Ousada
 * Componente de sorteio com animação de slot machine
 */

import { useEffect, useState, useMemo } from "react";
import { ALL_COUNTRIES } from "@/data/allCountries";
import { useSoundEffect } from "@/hooks/useSoundEffect";

type CountryData = typeof ALL_COUNTRIES[0];

interface CountrySpinProps {
  country: CountryData | null;
  isSpinning?: boolean;
  onSpinComplete?: () => void;
}

export default function CountrySpin({ country, isSpinning = false, onSpinComplete }: CountrySpinProps) {
  const [displayCountry, setDisplayCountry] = useState<CountryData | null>(country);
  const [spinIndex, setSpinIndex] = useState(0);
  const allCountries = useMemo(() => ALL_COUNTRIES, []);
  const { playSpinSound, playWinSound } = useSoundEffect();

  // Criar sequência de países para animação
  const spinSequence = useMemo(() => {
    const sequence: CountryData[] = [];
    // Adicionar países aleatórios para o efeito de slot machine
    for (let i = 0; i < 20; i++) {
      sequence.push(allCountries[Math.floor(Math.random() * allCountries.length)]);
    }
    // Adicionar o país final no final
    if (country) {
      sequence.push(country);
    }
    return sequence;
  }, [country, allCountries]);

  useEffect(() => {
    if (isSpinning) {
      // Tocar som de sorteio
      playSpinSound();
      
      let currentIndex = 0;
      const spinDuration = 800; // ms
      const frameCount = spinSequence.length;
      const frameInterval = spinDuration / frameCount;

      const spinTimer = setInterval(() => {
        setSpinIndex(currentIndex);
        setDisplayCountry(spinSequence[currentIndex]);
        currentIndex++;

        if (currentIndex >= frameCount) {
          clearInterval(spinTimer);
          setDisplayCountry(country);
          // Tocar som de vitória ao completar
          setTimeout(() => playWinSound(), 100);
          onSpinComplete?.();
        }
      }, frameInterval);

      return () => clearInterval(spinTimer);
    } else {
      setDisplayCountry(country);
      setSpinIndex(0);
    }
  }, [isSpinning, country, spinSequence, onSpinComplete, playSpinSound, playWinSound]);

  return (
    <div className="w-full">
      {/* Container de spinning com efeito de slot machine */}
      <div className="relative mb-6">
        {/* Fundo com gradiente */}
        <div className="absolute inset-0 gradient-vibrant-1 rounded-3xl opacity-10 -z-10"></div>

        {/* Frame da bandeira (como slot machine) */}
        <div className="relative h-80 md:h-96 flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-orange-50 to-yellow-50 border-4 border-orange-200 shadow-lg">
          {/* Efeito de vidro/reflexo no topo */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white/40 to-transparent rounded-t-3xl pointer-events-none z-20"></div>

          {/* Bandeira animada */}
          <div
            className={`
              text-9xl md:text-10xl
              transition-all duration-75
              ${isSpinning ? "scale-95 opacity-80" : "scale-100 opacity-100"}
            `}
          >
            {displayCountry?.flag || "🌍"}
          </div>

          {/* Efeito de brilho durante spinning */}
          {isSpinning && (
            <div className="absolute inset-0 rounded-3xl border-4 border-accent/30 animate-pulse pointer-events-none"></div>
          )}

          {/* Partículas de efeito */}
          {isSpinning && (
            <>
              <div className="absolute top-12 left-8 text-3xl animate-bounce" style={{ animationDelay: "0s" }}>
                ✨
              </div>
              <div className="absolute top-12 right-8 text-3xl animate-bounce" style={{ animationDelay: "0.1s" }}>
                ✨
              </div>
              <div className="absolute bottom-12 left-8 text-3xl animate-bounce" style={{ animationDelay: "0.2s" }}>
                ✨
              </div>
              <div className="absolute bottom-12 right-8 text-3xl animate-bounce" style={{ animationDelay: "0.3s" }}>
                ✨
              </div>
            </>
          )}
        </div>
      </div>

      {/* Nome do país abaixo da bandeira */}
      <div className="text-center">
        <h2
          className={`
            text-3xl md:text-4xl font-bold text-foreground
            transition-all duration-300
            ${isSpinning ? "opacity-50 scale-95" : "opacity-100 scale-100"}
          `}
        >
          {displayCountry?.name || "Sorteando..."}
        </h2>

      </div>

      {/* Indicador de progresso durante spinning */}
      {isSpinning && (
        <div className="mt-6 flex justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i < (spinIndex % 5) ? "bg-primary w-4" : "bg-muted w-2"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
