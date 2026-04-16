/**
 * DESIGN PHILOSOPHY: Neomórfico com Tipografia Ousada
 * Hook para disparar animação de confete
 */

import { useCallback } from "react";
import confetti from "canvas-confetti";

export function useConfetti() {
  const celebrate = useCallback(() => {
    // Confete padrão
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#f97316", "#fb923c", "#fdba74", "#fed7aa", "#fef3c7"],
    });
  }, []);

  const celebrateWin = useCallback(() => {
    // Confete mais intenso para vitória
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#f97316", "#fb923c", "#ec4899", "#8b5cf6", "#06b6d4"],
    });

    // Segundo disparo
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#f97316", "#fb923c", "#fdba74"],
      });
    }, 300);
  }, []);

  const celebrateCategory = useCallback(() => {
    // Confete pequeno para cada categoria
    confetti({
      particleCount: 30,
      spread: 45,
      origin: { y: 0.5 },
      colors: ["#f97316", "#fb923c"],
    });
  }, []);

  return {
    celebrate,
    celebrateWin,
    celebrateCategory,
  };
}
