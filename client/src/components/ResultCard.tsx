/**
 * DESIGN PHILOSOPHY: Neomórfico com Tipografia Ousada
 * Componente de resultado com Achievement e opções de compartilhamento
 */

import { Achievement, getAchievementByScore } from "@/lib/achievements";
import { Button } from "@/components/ui/button";
import { Download, Share2 } from "lucide-react";
import { useExportResult } from "@/hooks/useExportResult";
import { useConfetti } from "@/hooks/useConfetti";
import { useEffect, useState } from "react";
import AchievementBadge from "./AchievementBadge";
import { countryFacts } from "@/data/countryFacts";
import { getCountryById } from "@/data/countries";
import type { Category } from "@/types";

interface ResultCardProps {
  score: number;
  ranking: string;
  showConfetti?: boolean;
  selectedCountries?: Record<Category, string>;
}

export default function ResultCard({ score, ranking, showConfetti = true, selectedCountries }: ResultCardProps) {
  const achievement = getAchievementByScore(score);
  const { exportAsImage } = useExportResult();
  const { celebrateWin } = useConfetti();
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [displayedFacts, setDisplayedFacts] = useState<Array<{ country: string; fact: string }>>([]);

  useEffect(() => {
    if (showConfetti) {
      celebrateWin();
    }
  }, [showConfetti, celebrateWin]);

  // Extrair fatos dos países selecionados
  useEffect(() => {
    if (selectedCountries) {
      const facts: Array<{ country: string; fact: string }> = [];
      Object.values(selectedCountries).forEach((countryId: string) => {
        const country = getCountryById(countryId);
        if (country && countryFacts[country.slug]) {
          const countryFactList = countryFacts[country.slug];
          const randomFact = countryFactList[Math.floor(Math.random() * countryFactList.length)];
          facts.push({
            country: country.name,
            fact: randomFact,
          });
        }
      });
      setDisplayedFacts(facts);
      setCurrentFactIndex(0);
    }
  }, [selectedCountries]);

  const handleNextFact = () => {
    if (displayedFacts.length > 0) {
      setCurrentFactIndex((prev) => (prev + 1) % displayedFacts.length);
    }
  };

  const handleExport = async () => {
    await exportAsImage("result-card", "geodraft-resultado");
  };

  const handleShare = () => {
    const text = `🌍 Meu resultado no GeoDraft: ${score.toFixed(1)} pontos!\n${ranking}\n\nVocê consegue fazer melhor? Jogue agora!`;
    
    if (navigator.share) {
      navigator.share({
        title: "GeoDraft",
        text: text,
        url: window.location.origin,
      });
    } else {
      // Fallback: copiar para clipboard
      navigator.clipboard.writeText(text);
      alert("Texto copiado para clipboard!");
    }
  };

  return (
    <div id="result-card" className="w-full max-w-2xl mx-auto" style={{ pageBreakInside: 'avoid' }}>
      {/* Card Principal */}
      <div className="bg-gradient-to-br from-background via-card to-background rounded-3xl border-2 border-primary/20 shadow-2xl p-8 md:p-12">
        {/* Achievement Badge */}
        {achievement && (
          <div className="flex justify-center mb-8 animate-bounce-in">
            <AchievementBadge achievement={achievement} unlocked={true} size="lg" />
          </div>
        )}

        {/* Score Principal */}
        <div className="text-center mb-8">
          <div className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4">
            {score.toFixed(1)}
          </div>
          <p className="text-lg md:text-2xl font-semibold text-foreground mb-2">Pontos</p>
          <p className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto">{ranking}</p>
        </div>

        {/* Barra de Progresso */}
        <div className="mb-8">
          <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
              style={{ width: `${Math.min(100, (score / 100) * 100)}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleShare}
            variant="outline"
            className="flex items-center gap-2"
            size="lg"
          >
            <Share2 className="w-5 h-5" />
            Compartilhar
          </Button>
          <Button
            onClick={handleExport}
            variant="outline"
            className="flex items-center gap-2"
            size="lg"
          >
            <Download className="w-5 h-5" />
            Baixar
          </Button>
        </div>

        {/* Fatos Educacionais */}
        {displayedFacts.length > 0 && (
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📚</span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-blue-900 mb-2">
                  Curiosidade sobre {displayedFacts[currentFactIndex]?.country}:
                </p>
                <p className="text-sm text-blue-800 mb-4">
                  {displayedFacts[currentFactIndex]?.fact}
                </p>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={handleNextFact}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    → Próximo fato
                  </Button>
                  <span className="text-xs text-blue-600">
                    {currentFactIndex + 1} de {displayedFacts.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Díca */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          💡 Desafie seus amigos para ver quem monta o melhor país!
        </p>

        {/* Link Instituto Diplomun */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            Conheça{" "}
            <a
              href="https://instagram.com/institutodiplomun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent font-semibold transition-colors underline"
            >
              @institutodiplomun
            </a>
            {" "}no Instagram para aprender mais sobre o mundo!
          </p>
        </div>
      </div>
    </div>
  );
}
