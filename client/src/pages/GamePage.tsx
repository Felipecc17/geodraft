/**
 * DESIGN PHILOSOPHY: Neomórfico com Tipografia Ousada
 * Página principal do jogo solo
 */

import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CountrySpin from "@/components/CountrySpin";
import ProgressBar from "@/components/ProgressBar";
import CountryGrid from "@/components/CountryGrid";
import ScoreChart from "@/components/ScoreChart";
import ResultCard from "@/components/ResultCard";
import { useGameEngine } from "@/hooks/useGameEngine";
import { useConfetti } from "@/hooks/useConfetti";
import { categoryConfigs } from "@/data/gameConfig";
import { calculateFinalScore } from "@/lib/scoreEngine";
import { addGameResult } from "@/lib/storageUtils";
import { createResultLink } from "@/lib/randomUtils";
import type { Category } from "@/types";

export default function GamePage() {
  const [, navigate] = useLocation();
  const [gameResult, setGameResult] = useState<any>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const gameEngine = useGameEngine();
  const { celebrate, celebrateWin, celebrateCategory } = useConfetti();

  // Preparar categorias para o componente
  const categoriesForDisplay = categoryConfigs.map((cat) => ({
    id: cat.id,
    label: cat.label,
    icon: cat.icon,
    filled: !!gameEngine.gameState?.selectedCountries[cat.id as Category],
  }));

  // Quando o jogo termina
  useEffect(() => {
    if (gameEngine.isGameComplete && gameEngine.gameState) {
      const { score, ranking, categoryScores } = calculateFinalScore(
        gameEngine.gameState.selectedCountries as Record<Category, string>
      );

      const result = {
        gameId: gameEngine.gameState.gameId,
        mode: "solo" as const,
        selectedCountries: gameEngine.gameState.selectedCountries as Record<Category, string>,
        finalScore: score,
        finalRanking: ranking,
        categoryScores,
        completedAt: Date.now(),
        shareUrl: createResultLink(gameEngine.gameState.gameId, gameEngine.gameState.selectedCountries as Record<string, string>),
      };

      setGameResult(result);
      addGameResult(result);
      celebrateWin();
    }
  }, [gameEngine.isGameComplete, gameEngine.gameState, celebrateWin]);

  const handleSelectCountry = (category: Category) => {
    setIsSpinning(true);
    setTimeout(() => {
      gameEngine.selectCountry(category);
      setIsSpinning(false);
      celebrateCategory();
    }, 800);
  };

  if (gameEngine.loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin text-5xl mb-4">🌍</div>
          <p className="text-lg text-muted-foreground">Iniciando o jogo...</p>
        </div>
      </div>
    );
  }

  if (gameResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 py-8 md:py-12">
        <div className="container">
          {/* Header */}
          <div className="flex justify-between items-center mb-8 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold">GeoDraft</h1>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
            >
              X
            </Button>
          </div>

          {/* Result Card com Achievement */}
          <div className="mb-12">
            <ResultCard score={gameResult.finalScore} ranking={gameResult.finalRanking} showConfetti={false} />
          </div>

          {/* Gráfico de scores */}
          <div className="mb-12">
            <ScoreChart categoryScores={gameResult.categoryScores} chartType="radar" />
          </div>

          {/* Sua Composição */}
          <Card className="card-elevated p-8 md:p-12 mb-8 max-w-4xl mx-auto bg-gradient-to-br from-orange-50 to-pink-50 border-2 border-orange-200">
            <h3 className="text-2xl font-bold mb-6 text-center">Sua Composição</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {Object.entries(gameResult.selectedCountries).map(([category, countryId]: any) => {
                const config = categoryConfigs.find((c) => c.id === category);
                return (
                  <div
                    key={category}
                    className="bg-gradient-to-br from-orange-100 to-pink-100 p-3 rounded-lg border border-orange-200 animate-category-enter text-center"
                  >
                    <p className="text-lg mb-1">{config?.icon}</p>
                    <p className="text-xs text-orange-700 font-bold mb-1">{config?.label}</p>
                    <p className="font-bold text-foreground text-sm">{(gameResult.categoryScores?.[category as any] || 0).toFixed(1)}</p>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Botões de ação */}
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-4xl mx-auto">
            <Button
              size="lg"
              className="btn-neomorph bg-gradient-to-r from-orange-500 to-orange-600 text-white"
              onClick={() => navigate("/jogo")}
            >
              🎮 Jogar Novamente
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="btn-neomorph"
              onClick={() => navigate("/desafio")}
            >
              ⚔️ Desafiar Amigos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="btn-neomorph"
              onClick={() => navigate("/")}
            >
              🏠 Voltar ao Menu
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 py-8 md:py-12">
      <div className="container">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold">GeoDraft</h1>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
            >
              X
            </Button>
          </div>
          <ProgressBar
            filled={gameEngine.progress.filled}
            total={gameEngine.progress.total}
            percentage={gameEngine.progress.percentage}
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card className="card-elevated p-8 md:p-12 bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200">
              <CountrySpin
                country={gameEngine.currentCountry}
                isSpinning={isSpinning}
                onSpinComplete={() => setIsSpinning(false)}
              />

              <div className="mt-8">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                  Escolha uma categoria
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {categoriesForDisplay.map((category, idx) => (
                    <Button
                      key={category.id}
                      onClick={() => handleSelectCountry(category.id as Category)}
                      disabled={category.filled || isSpinning}
                      variant={category.filled ? "outline" : "default"}
                      className={`
                        relative overflow-hidden transition-all duration-200 animate-category-enter
                        ${category.filled ? "opacity-50 cursor-not-allowed" : "hover:shadow-lg active:shadow-md"}
                      `}
                      style={{ animationDelay: `${idx * 0.05}s` }}
                    >
                      <span className="mr-2">{category.icon}</span>
                      <span className="text-xs md:text-sm">{category.label}</span>
                      {category.filled && (
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent to-accent/10"></span>
                      )}
                    </Button>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <CountryGrid
              selectedCountries={gameEngine.gameState?.selectedCountries || {}}
              onCategoryClick={() => {}}
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-3 justify-center">
          {gameEngine.gameState && gameEngine.gameState.skipsRemaining > 0 && (
            <Button
              variant="outline"
              className="btn-neomorph"
              onClick={gameEngine.skipCountry}
              disabled={isSpinning}
            >
              Pular ({gameEngine.gameState.skipsRemaining})
            </Button>
          )}

          {gameEngine.gameState && gameEngine.gameState.currentCountryIndex > 0 && (
            <Button
              variant="outline"
              className="btn-neomorph"
              onClick={gameEngine.undoLastMove}
              disabled={isSpinning}
            >
              Desfazer
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
