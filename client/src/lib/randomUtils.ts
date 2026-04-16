/**
 * DESIGN PHILOSOPHY: Neomórfico com Tipografia Ousada
 * Utilitários de geração aleatória determinística
 * Permite reproducibilidade com seed para desafios X1
 */

/**
 * Gerador de números aleatórios determinísticos baseado em seed
 * Implementação do algoritmo Mulberry32
 */
export class SeededRandom {
  private seed: number;

  constructor(seed: string | number) {
    if (typeof seed === "string") {
      // Converter string para número usando hash simples
      this.seed = this.hashString(seed);
    } else {
      this.seed = seed;
    }
  }

  /**
   * Gera o próximo número aleatório entre 0 e 1
   */
  next(): number {
    this.seed = (this.seed + 0x6d2b79f5) >>> 0;
    let t = Math.imul(this.seed ^ (this.seed >>> 15), 1 | this.seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }

  /**
   * Gera um número inteiro entre min (inclusive) e max (exclusive)
   */
  nextInt(min: number, max: number): number {
    return Math.floor(this.next() * (max - min)) + min;
  }

  /**
   * Embaralha um array usando o algoritmo Fisher-Yates
   */
  shuffle<T>(array: T[]): T[] {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
      const j = this.nextInt(0, i + 1);
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  /**
   * Seleciona um elemento aleatório de um array
   */
  choice<T>(array: T[]): T {
    return array[this.nextInt(0, array.length)];
  }

  /**
   * Seleciona N elementos aleatórios únicos de um array
   */
  sample<T>(array: T[], n: number): T[] {
    const shuffled = this.shuffle(array);
    return shuffled.slice(0, Math.min(n, array.length));
  }

  /**
   * Hash simples de string para número
   */
  private hashString(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Converter para inteiro 32-bit
    }
    return Math.abs(hash);
  }
}

/**
 * Gera uma seed aleatória para um novo jogo
 */
export function generateRandomSeed(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

/**
 * Gera uma seed baseada em timestamp (para modo X1 assíncrono)
 */
export function generateTimestampSeed(): string {
  return Date.now().toString(36);
}

/**
 * Cria uma seed a partir de um desafio (para reproducibilidade)
 */
export function createChallengeSeed(challengeId: string): string {
  return `challenge_${challengeId}`;
}

/**
 * Valida se uma seed é válida
 */
export function isValidSeed(seed: string): boolean {
  return typeof seed === "string" && seed.length > 0;
}

/**
 * Gera um ID único para um jogo
 */
export function generateGameId(): string {
  return `game_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Gera um ID único para um desafio X1
 */
export function generateChallengeId(): string {
  return `x1_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Encoda dados em URL-safe base64
 */
export function encodeToUrlSafe(data: string): string {
  return btoa(data).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

/**
 * Decoda dados de URL-safe base64
 */
export function decodeFromUrlSafe(encoded: string): string {
  try {
    const padded = encoded.replace(/-/g, "+").replace(/_/g, "/");
    const padding = "=".repeat((4 - (padded.length % 4)) % 4);
    return atob(padded + padding);
  } catch {
    return "";
  }
}

/**
 * Cria um link compartilhável para um desafio
 */
export function createChallengeLink(challengeId: string, seed: string): string {
  const encoded = encodeToUrlSafe(JSON.stringify({ challengeId, seed }));
  return `${window.location.origin}/?challenge=${encoded}`;
}

/**
 * Extrai dados de um link de desafio
 */
export function parseChallengeLink(encoded: string): { challengeId: string; seed: string } | null {
  try {
    const decoded = decodeFromUrlSafe(encoded);
    return JSON.parse(decoded);
  } catch {
    return null;
  }
}

/**
 * Cria um link compartilhável para um resultado
 */
export function createResultLink(gameId: string, selectedCountries: Record<string, string>): string {
  const encoded = encodeToUrlSafe(JSON.stringify({ gameId, selectedCountries }));
  return `${window.location.origin}/?result=${encoded}`;
}

/**
 * Extrai dados de um link de resultado
 */
export function parseResultLink(encoded: string): { gameId: string; selectedCountries: Record<string, string> } | null {
  try {
    const decoded = decodeFromUrlSafe(encoded);
    return JSON.parse(decoded);
  } catch {
    return null;
  }
}
