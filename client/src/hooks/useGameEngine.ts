/**
 * DESIGN PHILOSOPHY: Neomórfico com Tipografia Ousada
 * Hook customizado para gerenciar a lógica do jogo
 */

import { useState, useCallback, useEffect } from "react";
import type { Category, GameState, Country } from "@/types";
import { gameConfig } from "@/data/gameConfig";
import { countries } from "@/data/countries";
import { SeededRandom, generateGameId, generateRandomSeed } from "@/lib/randomUtils";
import { saveGameState, loadGameState, deleteGameState } from "@/lib/storageUtils";

export function useGameEngine(seed?: string, mode: "solo" | "x1" = "solo") {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [currentCountry, setCurrentCountry] = useState<Country | null>(null);
  const [availableCountries, setAvailableCountries] = useState<Country[]>([]);
  const [usedCountries, setUsedCountries] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [shouldShowInitialSpin, setShouldShowInitialSpin] = useState(true);

  // Inicializar o jogo
  useEffect(() => {
    const initGame = () => {
      const gameSeed = seed || generateRandomSeed();
      const gameId = generateGameId();

      const newGameState: GameState = {
        gameId,
        mode,
        seed: gameSeed,
        currentCountryIndex: 0,
        selectedCountries: {},
        skipsRemaining: gameConfig.skipsPerGame,
        startedAt: Date.now(),
      };

      setGameState(newGameState);
      saveGameState(gameId, newGameState);

      // Inicializar sorteio de países
      const rng = new SeededRandom(gameSeed);
      const shuffled = rng.shuffle(countries);
      setAvailableCountries(shuffled);
      // Não mostrar país inicial - deixar para primeira seleção
      setCurrentCountry(shuffled[0]);
      setUsedCountries(new Set());
      setLoading(false);
      setShouldShowInitialSpin(true);
    };

    initGame();
  }, [seed, mode]);

  // Selecionar um país para uma categoria
  const selectCountry = useCallback(
    (category: Category) => {
      if (!gameState || !currentCountry) return;

      const newSelectedCountries = {
        ...gameState.selectedCountries,
        [category]: currentCountry.id,
      };

      const newGameState: GameState = {
        ...gameState,
        selectedCountries: newSelectedCountries,
        currentCountryIndex: gameState.currentCountryIndex + 1,
      };

      // Verificar se o jogo terminou
      const allCategoriesFilled = gameConfig.categories.every(
        (cat) => newSelectedCountries[cat.id]
      );

      if (allCategoriesFilled) {
        newGameState.completedAt = Date.now();
      }

      setGameState(newGameState);
      saveGameState(gameState.gameId, newGameState);

      // Atualizar país usado
      const newUsedCountries = new Set(usedCountries);
      newUsedCountries.add(currentCountry.id);
      setUsedCountries(newUsedCountries);

      // Próximo país
      if (!allCategoriesFilled && gameState.currentCountryIndex + 1 < availableCountries.length) {
        setCurrentCountry(availableCountries[gameState.currentCountryIndex + 1]);
      }
    },
    [gameState, currentCountry, availableCountries, usedCountries]
  );

  // Pular um país
  const skipCountry = useCallback(() => {
    if (!gameState || gameState.skipsRemaining <= 0 || !currentCountry) return;

    const newGameState: GameState = {
      ...gameState,
      skipsRemaining: gameState.skipsRemaining - 1,
      currentCountryIndex: gameState.currentCountryIndex + 1,
    };

    setGameState(newGameState);
    saveGameState(gameState.gameId, newGameState);

    // Próximo país
    if (gameState.currentCountryIndex + 1 < availableCountries.length) {
      setCurrentCountry(availableCountries[gameState.currentCountryIndex + 1]);
    }
  }, [gameState, currentCountry, availableCountries]);

  // Desfazer última jogada
  const undoLastMove = useCallback(() => {
    if (!gameState || !gameConfig.undoAllowed || gameState.currentCountryIndex === 0) return;

    // Encontrar a última categoria preenchida
    const lastCategory = Object.keys(gameState.selectedCountries).pop() as Category | undefined;

    if (lastCategory) {
      const newSelectedCountries = { ...gameState.selectedCountries };
      delete newSelectedCountries[lastCategory];

      const newGameState: GameState = {
        ...gameState,
        selectedCountries: newSelectedCountries,
        currentCountryIndex: gameState.currentCountryIndex - 1,
        completedAt: undefined,
      };

      setGameState(newGameState);
      saveGameState(gameState.gameId, newGameState);

      // Voltar ao país anterior
      if (gameState.currentCountryIndex - 1 >= 0) {
        setCurrentCountry(availableCountries[gameState.currentCountryIndex - 1]);
      }

      // Remover país usado
      const lastCountryId = gameState.selectedCountries[lastCategory];
      if (lastCountryId) {
        const newUsedCountries = new Set(usedCountries);
        newUsedCountries.delete(lastCountryId);
        setUsedCountries(newUsedCountries);
      }
    }
  }, [gameState, availableCountries, usedCountries]);

  // Verificar se o jogo terminou
  const isGameComplete = gameState?.completedAt !== undefined;

  // Verificar categorias preenchidas
  const filledCategories = new Set(Object.keys(gameState?.selectedCountries || {}));

  // Progresso do jogo
  const progress = {
    filled: filledCategories.size,
    total: gameConfig.categories.length,
    percentage: (filledCategories.size / gameConfig.categories.length) * 100,
  };

  return {
    gameState,
    currentCountry,
    availableCountries,
    usedCountries,
    loading,
    isGameComplete,
    filledCategories,
    progress,
    selectCountry,
    skipCountry,
    undoLastMove,
    shouldShowInitialSpin,
  };
}
