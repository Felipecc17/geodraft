/**
 * DESIGN PHILOSOPHY: Neomórfico com Tipografia Ousada
 * Página para criar um desafio X1
 */

import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { generateChallengeId, generateTimestampSeed, createChallengeLink } from "@/lib/randomUtils";

export default function ChallengeCreatePage() {
  const [, navigate] = useLocation();
  const [playerName, setPlayerName] = useState("");
  const [challengeLink, setChallengeLink] = useState("");

  const handleCreateChallenge = () => {
    if (!playerName.trim()) {
      alert("Digite seu nome para criar um desafio");
      return;
    }

    const challengeId = generateChallengeId();
    const seed = generateTimestampSeed();
    const link = createChallengeLink(challengeId, seed);

    setChallengeLink(link);
  };

  if (challengeLink) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 py-8 md:py-12">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <Card className="card-elevated p-8 md:p-12 text-center mb-8">
              <div className="text-6xl mb-6">🎉</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Desafio Criado!</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Compartilhe este link com um amigo para desafiá-lo
              </p>

              <div className="bg-muted/50 p-6 rounded-lg mb-8 break-all">
                <p className="text-sm text-muted-foreground mb-2">Link do Desafio:</p>
                <p className="font-mono text-sm text-foreground">{challengeLink}</p>
              </div>

              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="btn-neomorph bg-accent text-white"
                  onClick={() => {
                    navigator.clipboard.writeText(challengeLink);
                    alert("Link copiado para a área de transferência!");
                  }}
                >
                  Copiar Link
                </Button>

                <Button
                  size="lg"
                  className="btn-neomorph bg-accent text-white"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: "Monte Seu País",
                        text: `${playerName} te desafiou a montar seu país ideal!`,
                        url: challengeLink,
                      });
                    } else {
                      alert("Compartilhamento não suportado neste navegador");
                    }
                  }}
                >
                  Compartilhar
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
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 py-8 md:py-12">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">Criar Desafio X1</h1>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
            >
              X
            </Button>
          </div>

          <Card className="card-elevated p-8 md:p-12">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Seu Nome
                </label>
                <Input
                  type="text"
                  placeholder="Digite seu nome"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="bg-muted/50 p-6 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Como funciona:</p>
                <ul className="text-sm text-foreground space-y-2">
                  <li>✓ Você joga e monta seu país ideal</li>
                  <li>✓ Um link é gerado com sua seed</li>
                  <li>✓ Compartilhe com um amigo</li>
                  <li>✓ Seu amigo joga com a mesma sequência de países</li>
                  <li>✓ Comparem os resultados!</li>
                </ul>
              </div>

              <Button
                size="lg"
                className="btn-neomorph bg-accent text-white w-full"
                onClick={handleCreateChallenge}
              >
                Criar Desafio
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="btn-neomorph w-full"
                onClick={() => navigate("/")}
              >
                Cancelar
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
