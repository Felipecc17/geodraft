/**
 * DESIGN PHILOSOPHY: Neomórfico com Tipografia Ousada
 * Página de resultado do desafio X1
 */

import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { compareGameResults } from "@/lib/scoreEngine";
import type { GameResult } from "@/types";
import X1Comparison from "@/components/X1Comparison";

interface ChallengeResultProps {
  creatorResult: GameResult;
  challengerResult: GameResult;
}

export default function ChallengeResultPage() {
  const [, navigate] = useLocation();

  // Dados de exemplo (em produção, viriam de props ou state)
  const creatorResult: GameResult = {
    gameId: "game_1",
    mode: "x1",
    playerName: "João",
    selectedCountries: {} as Record<string, string>,
    finalScore: 78.5,
    finalRanking: "Potência Regional",
    categoryScores: {} as Record<string, number>,
    completedAt: Date.now(),
    shareUrl: "",
  };

  const challengerResult: GameResult = {
    gameId: "game_2",
    mode: "x1",
    playerName: "Maria",
    selectedCountries: {} as Record<string, string>,
    finalScore: 82.3,
    finalRanking: "Superpotência Global",
    categoryScores: {} as Record<string, number>,
    completedAt: Date.now(),
    shareUrl: "",
  };

  const comparison = compareGameResults(creatorResult, challengerResult);
  const winner = comparison.winner === "player1" ? creatorResult : comparison.winner === "player2" ? challengerResult : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 py-8 md:py-12">
      <div className="container">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">Resultado do Desafio</h1>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
          >
            X
          </Button>
        </div>

        {/* Comparação X1 */}
        <div className="mb-12">
          <X1Comparison 
            creatorResult={creatorResult} 
            challengerResult={challengerResult}
            winner={comparison.winner === "player1" ? "creator" : comparison.winner === "player2" ? "challenger" : "tie"}
          />
        </div>

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
            ⚔️ Criar Novo Desafio
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
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">Resultado do Desafio</h1>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
            >
              X
            </Button>
          </div>

          {/* Placar */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Criador */}
            <Card className={`card-elevated p-8 text-center ${comparison.winner === "player1" ? "bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300" : "bg-gradient-to-br from-gray-50 to-gray-100"}`}>
              <div className="text-4xl mb-4">{comparison.winner === "player1" ? "🥇" : "🥈"}</div>
              <h3 className="text-2xl font-bold mb-2">{creatorResult.playerName}</h3>
              <div className="text-5xl font-bold text-accent mb-2">{creatorResult.finalScore}</div>
              <p className="text-sm text-muted-foreground">{creatorResult.finalRanking}</p>
            </Card>

            {/* Desafiante */}
            <Card className={`card-elevated p-8 text-center ${comparison.winner === "player2" ? "bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300" : "bg-gradient-to-br from-gray-50 to-gray-100"}`}>
              <div className="text-4xl mb-4">{comparison.winner === "player2" ? "🥇" : "🥈"}</div>
              <h3 className="text-2xl font-bold mb-2">{challengerResult.playerName}</h3>
              <div className="text-5xl font-bold text-accent mb-2">{challengerResult.finalScore}</div>
              <p className="text-sm text-muted-foreground">{challengerResult.finalRanking}</p>
            </Card>
          </div>

          {/* Resultado */}
          <Card className="card-elevated p-8 md:p-12 text-center bg-gradient-to-br from-orange-50 to-pink-50 border-2 border-orange-200 mb-8">
            {comparison.winner === "tie" ? (
              <>
                <div className="text-6xl mb-4">🤝</div>
                <h2 className="text-3xl font-bold mb-2">Empate!</h2>
                <p className="text-lg text-muted-foreground">Ambos criaram países igualmente incríveis!</p>
              </>
            ) : (
              <>
                <div className="text-6xl mb-4">🏆</div>
                <h2 className="text-3xl font-bold mb-2">{winner?.playerName} Venceu!</h2>
                <p className="text-lg text-muted-foreground">
                  Diferença de {comparison.scoreDiff} pontos
                </p>
              </>
            )}
          </Card>

          {/* Botões de ação */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="btn-neomorph bg-gradient-to-r from-orange-500 to-orange-600 text-white"
              onClick={() => navigate("/jogo")}
            >
              Jogar Novamente
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="btn-neomorph"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copiado!");
              }}
            >
              Compartilhar Resultado
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="btn-neomorph"
              onClick={() => navigate("/")}
            >
              Voltar ao Menu
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
