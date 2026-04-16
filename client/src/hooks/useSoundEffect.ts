/**
 * DESIGN PHILOSOPHY: Neomórfico com Tipografia Ousada
 * Hook para reproduzir efeitos sonoros
 */

import { useCallback } from "react";

export function useSoundEffect() {
  const playSpinSound = useCallback(() => {
    // Criar som de sorteio usando Web Audio API
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const now = audioContext.currentTime;
      
      // Criar múltiplos beeps para efeito de slot machine
      for (let i = 0; i < 8; i++) {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        
        osc.connect(gain);
        gain.connect(audioContext.destination);
        
        // Frequência aumentando (pitch bend)
        const startFreq = 400 + i * 50;
        const endFreq = 800 + i * 100;
        
        osc.frequency.setValueAtTime(startFreq, now + i * 0.08);
        osc.frequency.exponentialRampToValueAtTime(endFreq, now + i * 0.08 + 0.06);
        
        // Envelope de volume
        gain.gain.setValueAtTime(0.3, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.08 + 0.06);
        
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.06);
      }
    } catch (error) {
      // Silenciosamente falhar se Web Audio não estiver disponível
      console.debug("Web Audio API não disponível");
    }
  }, []);

  const playWinSound = useCallback(() => {
    // Criar som de vitória (3 beeps ascendentes)
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const now = audioContext.currentTime;
      
      const frequencies = [523.25, 659.25, 783.99]; // C5, E5, G5 (acorde)
      
      frequencies.forEach((freq, index) => {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        
        osc.connect(gain);
        gain.connect(audioContext.destination);
        
        osc.frequency.setValueAtTime(freq, now + index * 0.15);
        
        gain.gain.setValueAtTime(0.3, now + index * 0.15);
        gain.gain.exponentialRampToValueAtTime(0.01, now + index * 0.15 + 0.3);
        
        osc.start(now + index * 0.15);
        osc.stop(now + index * 0.15 + 0.3);
      });
    } catch (error) {
      console.debug("Web Audio API não disponível");
    }
  }, []);

  return { playSpinSound, playWinSound };
}
