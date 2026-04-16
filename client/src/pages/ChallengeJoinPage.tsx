/**
 * DESIGN PHILOSOPHY: Neomórfico com Tipografia Ousada
 * Página para entrar em um desafio X1 por link
 */

import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { parseChallengeLink } from "@/lib/randomUtils";

export default function ChallengeJoinPage() {
  const [, navigate] = useLocation();
  const [challengeLink, setChallengeLink] = useState("");
  const [error, setError] = useState("");
  const [playerName, setPlayerName] = useState("");

  const handleJoinChallenge = () => {
    if (!challengeLink.trim()) {
      setError("Cole o link do desafio");
      return;
    }

    if (!playerName.trim()) {
      setError("Digite seu nome");
      return;
    }

    // Extrair código do link
    const urlParams = new URLSearchParams(new URL(challengeLink).search);
    const encoded = urlParams.get("challenge");

    if (!encoded) {
      setError("Link de desafio inválido");
      return;
    }

    const data = parseChallengeLink(encoded);

    if (!data) {
      setError("Não foi possível decodificar o link");
      return;
    }

    // Salvar dados do desafio e redirecionar para o jogo
    sessionStorage.setItem(
      "challenge_data",
      JSON.stringify({
        ...data,
        playerName,
      })
    );

    navigate(`/jogo?challenge=${encoded}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 py-8 md:py-12">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">Entrar em Desafio</h1>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
            >
              X
            </Button>
          </div>

          <Card className="card-elevated p-8 md:p-12 bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Link do Desafio
                </label>
                <Input
                  type="text"
                  placeholder="Cole o link que recebeu"
                  value={challengeLink}
                  onChange={(e) => {
                    setChallengeLink(e.target.value);
                    setError("");
                  }}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Seu Nome
                </label>
                <Input
                  type="text"
                  placeholder="Digite seu nome"
                  value={playerName}
                  onChange={(e) => {
                    setPlayerName(e.target.value);
                    setError("");
                  }}
                  className="w-full"
                />
              </div>

              {error && (
                <div className="bg-red-100 border border-red-300 text-red-800 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              <div className="bg-blue-100 p-6 rounded-lg">
                <p className="text-sm text-blue-900 mb-2">💡 Como funciona:</p>
                <ul className="text-sm text-blue-900 space-y-1">
                  <li>✓ Você joga com a mesma sequência de países</li>
                  <li>✓ Monta seu país ideal</li>
                  <li>✓ Seu score é calculado automaticamente</li>
                  <li>✓ Compara com o score do desafiante</li>
                </ul>
              </div>

              <Button
                size="lg"
                className="btn-neomorph bg-gradient-to-r from-cyan-500 to-blue-600 text-white w-full"
                onClick={handleJoinChallenge}
              >
                Entrar no Desafio
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
