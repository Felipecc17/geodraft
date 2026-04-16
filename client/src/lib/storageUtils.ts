/**
 * DESIGN PHILOSOPHY: Neomórfico com Tipografia Ousada
 * Utilitários para persistência local (localStorage)
 * Salva histórico de partidas, melhores scores, etc.
 */

import type { GameResult, HistoryEntry, StorageData } from "@/types";

const STORAGE_KEY = "monte_seu_pais_data";

/**
 * Inicializa os dados de armazenamento se não existirem
 */
function initializeStorage(): StorageData {
  return {
    gameHistory: [],
    bestScore: 0,
    totalGamesPlayed: 0,
  };
}

/**
 * Obtém todos os dados armazenados
 */
export function getStorageData(): StorageData {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Erro ao ler localStorage:", error);
  }
  return initializeStorage();
}

/**
 * Salva dados no localStorage
 */
function saveStorageData(data: StorageData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Erro ao salvar em localStorage:", error);
  }
}

/**
 * Adiciona um resultado de jogo ao histórico
 */
export function addGameResult(result: GameResult): void {
  const data = getStorageData();

  const historyEntry: HistoryEntry = {
    gameId: result.gameId,
    mode: result.mode,
    finalScore: result.finalScore,
    finalRanking: result.finalRanking,
    completedAt: result.completedAt,
    shareUrl: result.shareUrl,
    opponentName: result.playerName,
  };

  data.gameHistory.unshift(historyEntry); // Adiciona no início
  data.totalGamesPlayed += 1;

  // Atualizar melhor score
  if (result.finalScore > data.bestScore) {
    data.bestScore = result.finalScore;
  }

  // Manter apenas os últimos 50 jogos
  if (data.gameHistory.length > 50) {
    data.gameHistory = data.gameHistory.slice(0, 50);
  }

  data.lastGameId = result.gameId;

  saveStorageData(data);
}

/**
 * Obtém o histórico de jogos
 */
export function getGameHistory(): HistoryEntry[] {
  const data = getStorageData();
  return data.gameHistory;
}

/**
 * Obtém o melhor score
 */
export function getBestScore(): number {
  const data = getStorageData();
  return data.bestScore;
}

/**
 * Obtém o total de jogos jogados
 */
export function getTotalGamesPlayed(): number {
  const data = getStorageData();
  return data.totalGamesPlayed;
}

/**
 * Obtém o último ID de jogo
 */
export function getLastGameId(): string | undefined {
  const data = getStorageData();
  return data.lastGameId;
}

/**
 * Calcula estatísticas do histórico
 */
export function getHistoryStats() {
  const history = getGameHistory();

  if (history.length === 0) {
    return {
      totalGames: 0,
      bestScore: 0,
      averageScore: 0,
      soloGames: 0,
      x1Games: 0,
      winRate: 0,
    };
  }

  const soloGames = history.filter((h) => h.mode === "solo").length;
  const x1Games = history.filter((h) => h.mode === "x1").length;
  const x1Wins = history.filter((h) => h.mode === "x1" && h.result === "win").length;

  const scores = history.map((h) => h.finalScore);
  const bestScore = Math.max(...scores);
  const averageScore = Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 100) / 100;

  return {
    totalGames: history.length,
    bestScore,
    averageScore,
    soloGames,
    x1Games,
    winRate: x1Games > 0 ? Math.round((x1Wins / x1Games) * 100) : 0,
  };
}

/**
 * Limpa todo o histórico (com confirmação)
 */
export function clearHistory(): boolean {
  if (confirm("Tem certeza que deseja limpar todo o histórico? Esta ação não pode ser desfeita.")) {
    saveStorageData(initializeStorage());
    return true;
  }
  return false;
}

/**
 * Exporta o histórico como JSON
 */
export function exportHistory(): string {
  const data = getStorageData();
  return JSON.stringify(data, null, 2);
}

/**
 * Importa o histórico de um JSON
 */
export function importHistory(jsonData: string): boolean {
  try {
    const data = JSON.parse(jsonData) as StorageData;

    // Validar estrutura básica
    if (!Array.isArray(data.gameHistory) || typeof data.bestScore !== "number") {
      throw new Error("Formato de dados inválido");
    }

    saveStorageData(data);
    return true;
  } catch (error) {
    console.error("Erro ao importar histórico:", error);
    return false;
  }
}

/**
 * Salva um estado de jogo em progresso
 */
export function saveGameState(gameId: string, state: any): void {
  try {
    localStorage.setItem(`game_state_${gameId}`, JSON.stringify(state));
  } catch (error) {
    console.error("Erro ao salvar estado do jogo:", error);
  }
}

/**
 * Carrega um estado de jogo em progresso
 */
export function loadGameState(gameId: string): any | null {
  try {
    const data = localStorage.getItem(`game_state_${gameId}`);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Erro ao carregar estado do jogo:", error);
    return null;
  }
}

/**
 * Remove um estado de jogo em progresso
 */
export function deleteGameState(gameId: string): void {
  try {
    localStorage.removeItem(`game_state_${gameId}`);
  } catch (error) {
    console.error("Erro ao deletar estado do jogo:", error);
  }
}
