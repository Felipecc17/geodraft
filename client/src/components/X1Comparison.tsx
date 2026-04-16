/**
 * DESIGN PHILOSOPHY: Neomórfico com Tipografia Ousada
 * Componente de comparação lado-a-lado para desafios X1
 */

import { GameResult } from "@/types";
import { Trophy, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

interface X1ComparisonProps {
  creatorResult: GameResult;
  challengerResult: GameResult;
  winner: "creator" | "challenger" | "tie";
}

export default function X1Comparison({
  creatorResult,
  challengerResult,
  winner,
}: X1ComparisonProps) {
  const scoreDiff = Math.abs(creatorResult.finalScore - challengerResult.finalScore);

  const getWinnerColor = (isWinner: boolean) => {
    if (isWinner) return "from-yellow-100 to-amber-100 border-yellow-300";
    return "from-gray-100 to-gray-200 border-gray-300";
  };

  const creatorIsWinner = winner === "creator";
  const challengerIsWinner = winner === "challenger";

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Resultado Geral */}
      <div className="text-center mb-8">
        {winner === "tie" ? (
          <div className="text-4xl font-bold text-foreground mb-2">🤝 Empate Perfeito!</div>
        ) : (
          <div className="flex items-center justify-center gap-3 mb-2">
            <Trophy className="w-8 h-8 text-yellow-500" />
            <span className="text-3xl font-bold text-foreground">
              {creatorIsWinner ? "Criador Venceu!" : "Desafiante Venceu!"}
            </span>
            <Trophy className="w-8 h-8 text-yellow-500" />
          </div>
        )}
        <p className="text-lg text-muted-foreground">
          Diferença: <span className="font-bold text-primary">{scoreDiff.toFixed(1)} pontos</span>
        </p>
      </div>

      {/* Comparação Lado-a-Lado */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Criador */}
        <Card
          className={`bg-gradient-to-br ${getWinnerColor(creatorIsWinner)} p-6 border-2 ${
            creatorIsWinner ? "ring-2 ring-yellow-400" : ""
          }`}
        >
          <div className="text-center">
            {creatorIsWinner && <Zap className="w-6 h-6 text-yellow-500 mx-auto mb-2" />}
            <h3 className="text-lg font-bold text-foreground mb-2">Criador</h3>
            <p className="text-sm text-muted-foreground mb-3">{creatorResult.playerName || "Anônimo"}</p>

            <div className="bg-white/50 rounded-lg p-4 mb-4">
              <div className="text-5xl font-bold text-primary mb-1">
                {creatorResult.finalScore.toFixed(1)}
              </div>
              <p className="text-xs text-muted-foreground">pontos</p>
            </div>

            <p className="text-sm text-foreground font-semibold">{creatorResult.finalRanking}</p>
          </div>
        </Card>

        {/* Desafiante */}
        <Card
          className={`bg-gradient-to-br ${getWinnerColor(challengerIsWinner)} p-6 border-2 ${
            challengerIsWinner ? "ring-2 ring-yellow-400" : ""
          }`}
        >
          <div className="text-center">
            {challengerIsWinner && <Zap className="w-6 h-6 text-yellow-500 mx-auto mb-2" />}
            <h3 className="text-lg font-bold text-foreground mb-2">Desafiante</h3>
            <p className="text-sm text-muted-foreground mb-3">{challengerResult.playerName || "Anônimo"}</p>

            <div className="bg-white/50 rounded-lg p-4 mb-4">
              <div className="text-5xl font-bold text-primary mb-1">
                {challengerResult.finalScore.toFixed(1)}
              </div>
              <p className="text-xs text-muted-foreground">pontos</p>
            </div>

            <p className="text-sm text-foreground font-semibold">{challengerResult.finalRanking}</p>
          </div>
        </Card>
      </div>

      {/* Breakdown por Categoria */}
      <Card className="p-6 bg-card border-2 border-border">
        <h4 className="text-lg font-bold text-foreground mb-4">Breakdown por Categoria</h4>

        <div className="space-y-3">
          {Object.entries(creatorResult.categoryScores).map(([category, creatorScore]) => {
            const challengerScore = challengerResult.categoryScores[category as keyof typeof challengerResult.categoryScores] || 0;
            const diff = creatorScore - challengerScore;
            const isCreatorWinning = diff > 0;

            return (
              <div key={category} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-24 text-sm font-semibold text-foreground capitalize">
                  {category.replace("_", " ")}
                </div>

                <div className="flex-grow flex items-center gap-2">
                  {/* Score Criador */}
                  <div className={`flex-1 text-right pr-2 ${isCreatorWinning ? "font-bold text-primary" : ""}`}>
                    {creatorScore.toFixed(1)}
                  </div>

                  {/* Barra comparativa */}
                  <div className="flex-grow max-w-xs">
                    <div className="flex h-6 rounded-full overflow-hidden bg-muted">
                      <div
                        className="bg-gradient-to-r from-orange-400 to-orange-500"
                        style={{
                          width: `${(creatorScore / Math.max(creatorScore, challengerScore)) * 100}%`,
                        }}
                      />
                      <div
                        className="bg-gradient-to-r from-blue-400 to-blue-500"
                        style={{
                          width: `${(challengerScore / Math.max(creatorScore, challengerScore)) * 100}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Score Desafiante */}
                  <div className={`flex-1 pl-2 ${!isCreatorWinning && diff < 0 ? "font-bold text-primary" : ""}`}>
                    {challengerScore.toFixed(1)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legenda */}
        <div className="flex gap-6 mt-6 pt-4 border-t border-border text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-r from-orange-400 to-orange-500" />
            <span className="text-muted-foreground">Criador</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-r from-blue-400 to-blue-500" />
            <span className="text-muted-foreground">Desafiante</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
