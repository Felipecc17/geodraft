/**
 * DESIGN PHILOSOPHY: Elegância Sofisticada
 * Paleta: Azul Profundo + Dourado Elegante
 * Página de histórico de partidas
 */

import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getGameHistory, getHistoryStats, clearHistory } from "@/lib/storageUtils";

export default function HistoryPage() {
  const [, navigate] = useLocation();
  const history = getGameHistory();
  const stats = getHistoryStats();

  return (
    <div className="min-h-screen bg-background py-8 md:py-12">
      <div className="container">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Seu Histórico</h1>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
            >
              X
            </Button>
          </div>
        </div>

        {/* Estatísticas - Cards com cores harmoniosas */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-4 mb-12">
          <Card className="card-elevated p-6 text-center" style={{ backgroundColor: "#f0f9ff", borderColor: "#bfdbfe", borderWidth: "1px" }}>
            <div className="text-3xl font-bold mb-2" style={{ color: "#d97706" }}>{stats.totalGames}</div>
            <p className="text-sm text-muted-foreground">Partidas Jogadas</p>
          </Card>

          <Card className="card-elevated p-6 text-center" style={{ backgroundColor: "#fffbeb", borderColor: "#fcd34d", borderWidth: "1px" }}>
            <div className="text-3xl font-bold mb-2" style={{ color: "#1e3a8a" }}>{stats.bestScore.toFixed(1)}</div>
            <p className="text-sm text-muted-foreground">Melhor Score</p>
          </Card>

          <Card className="card-elevated p-6 text-center" style={{ backgroundColor: "#f8fafc", borderColor: "#cbd5e1", borderWidth: "1px" }}>
            <div className="text-3xl font-bold mb-2" style={{ color: "#d97706" }}>{stats.averageScore.toFixed(1)}</div>
            <p className="text-sm text-muted-foreground">Score Médio</p>
          </Card>

          <Card className="card-elevated p-6 text-center" style={{ backgroundColor: "#f0f9ff", borderColor: "#bfdbfe", borderWidth: "1px" }}>
            <div className="text-3xl font-bold mb-2" style={{ color: "#1e3a8a" }}>{stats.winRate}%</div>
            <p className="text-sm text-muted-foreground">Taxa de Vitória (X1)</p>
          </Card>
        </div>

        {/* Histórico de partidas */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Últimas Partidas</h2>

          {history.length === 0 ? (
            <Card className="card-elevated p-12 text-center" style={{ backgroundColor: "#f0f9ff", borderColor: "#bfdbfe", borderWidth: "1px" }}>
              <p className="text-lg text-muted-foreground mb-6">Você ainda não jogou nenhuma partida</p>
              <Button
                size="lg"
                className="btn-neomorph text-white"
                style={{ backgroundColor: "#1e3a8a", backgroundImage: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)" }}
                onClick={() => navigate("/jogo")}
              >
                Jogar Agora
              </Button>
            </Card>
          ) : (
            <div className="space-y-4">
              {history.map((entry) => (
                <Card key={entry.gameId} className="card-elevated p-6" style={{ backgroundColor: "#ffffff", borderColor: "#cbd5e1", borderWidth: "1px" }}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {new Date(entry.completedAt).toLocaleDateString("pt-BR")}
                      </p>
                      <p className="text-lg font-bold text-foreground">{entry.finalRanking}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold" style={{ color: "#d97706" }}>{entry.finalScore.toFixed(1)}</div>
                      <p className="text-xs text-muted-foreground">{entry.mode === "solo" ? "Solo" : "X1"}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="btn-neomorph flex-1"
                      style={{ backgroundColor: "#1e3a8a", color: "#ffffff", border: "1px solid #1e3a8a" }}
                      onClick={() => {
                        navigator.clipboard.writeText(entry.shareUrl);
                        alert("Link copiado!");
                      }}
                    >
                      Compartilhar
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Botões de ação */}
        <div className="max-w-4xl mx-auto mt-12 flex flex-col md:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="btn-neomorph text-white"
            style={{ backgroundColor: "#1e3a8a", backgroundImage: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)" }}
            onClick={() => navigate("/jogo")}
          >
            Jogar Novamente
          </Button>
          <Button
            size="lg"
            className="btn-neomorph"
            style={{ backgroundColor: "transparent", border: "2px solid #d97706", color: "#d97706" }}
            onClick={() => navigate("/")}
          >
            Voltar ao Menu
          </Button>
          {history.length > 0 && (
            <Button
              size="lg"
              className="btn-neomorph"
              style={{ backgroundColor: "transparent", border: "2px solid #dc2626", color: "#dc2626" }}
              onClick={() => {
                if (clearHistory()) {
                  window.location.reload();
                }
              }}
            >
              Limpar Histórico
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
