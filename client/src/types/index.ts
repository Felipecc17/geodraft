/**
 * DESIGN PHILOSOPHY: Neomórfico com Tipografia Ousada
 * Tipos centrais do jogo "GeoDraft"
 * Estrutura simples e extensível para suportar todos os países
 */

export type Category =
  | "bandeira"
  | "clima"
  | "culinaria"
  | "economia"
  | "educacao"
  | "esporte"
  | "exercito"
  | "governo"
  | "historia"
  | "idioma"
  | "localizacao"
  | "populacao"
  | "seguranca"
  | "territorio"
  | "saude"
  | "cultura";

export interface Country {
  id: string;
  slug: string;
  name: string; // Nome em português
  nameEn: string; // Nome em inglês (opcional)
  flag: string; // Emoji ou URL da bandeira
  isoCode: string; // Código ISO-3166-1 alpha-2
}

export interface CountryScores {
  countryId: string;
  bandeira: number;
  clima: number;
  culinaria: number;
  economia: number;
  educacao: number;
  esporte: number;
  exercito: number;
  governo: number;
  historia: number;
  idioma: number;
  localizacao: number;
  populacao: number;
  seguranca: number;
  territorio: number;
  saude: number;
  cultura: number;
}

export interface GameState {
  gameId: string;
  mode: "solo" | "x1";
  seed: string; // Para reproducibilidade
  currentCountryIndex: number;
  selectedCountries: Partial<Record<Category, string>>; // countryId por categoria
  skipsRemaining: number;
  startedAt: number;
  completedAt?: number;
  finalScore?: number;
  finalRanking?: string;
}

export interface GameResult {
  gameId: string;
  mode: "solo" | "x1";
  playerName?: string;
  selectedCountries: Record<Category, string>; // countryId por categoria
  finalScore: number;
  finalRanking: string;
  categoryScores: Record<Category, number>;
  completedAt: number;
  shareUrl: string;
}

export interface X1Challenge {
  challengeId: string;
  creatorName: string;
  seed: string;
  createdAt: number;
  creatorResult?: GameResult;
  challengerResult?: GameResult;
  winner?: "creator" | "challenger" | "tie";
}

export interface CategoryConfig {
  id: Category;
  label: string;
  description: string;
  weight: number; // Para cálculo de score ponderado
  icon: string; // Emoji ou ícone
}

export interface GameConfig {
  categories: CategoryConfig[];
  skipsPerGame: number;
  undoAllowed: boolean;
  totalCountries: number; // Quantos países serão sorteados
}

export interface HistoryEntry {
  gameId: string;
  mode: "solo" | "x1";
  finalScore: number;
  finalRanking: string;
  completedAt: number;
  shareUrl: string;
  opponentName?: string;
  result?: "win" | "loss" | "tie"; // Para X1
}

export interface StorageData {
  gameHistory: HistoryEntry[];
  bestScore: number;
  totalGamesPlayed: number;
  lastGameId?: string;
}
