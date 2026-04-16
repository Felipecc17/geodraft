/**
 * DESIGN PHILOSOPHY: Neomórfico com Tipografia Ousada
 * Engine de cálculo de score
 * Lógica isolada e testável
 */

import type { Category, GameResult } from "@/types";
import { categoryConfigs, getTotalWeight } from "@/data/gameConfig";
import { getCountryScores } from "@/data/countryScores";

interface RankingTier {
  minScore: number;
  maxScore: number;
  label: string;
  description: string;
}

const RANKING_TIERS: RankingTier[] = [
  {
    minScore: 95,
    maxScore: 100,
    label: "Superpotência Perfeita",
    description: "Um país praticamente impecável. Você criou uma utopia.",
  },
  {
    minScore: 85,
    maxScore: 94,
    label: "Superpotência Global",
    description: "Um país extraordinário. Pronto para dominar o mundo.",
  },
  {
    minScore: 75,
    maxScore: 84,
    label: "Potência Regional",
    description: "Um país muito bom. Influência garantida na região.",
  },
  {
    minScore: 65,
    maxScore: 74,
    label: "Nação Desenvolvida",
    description: "Um país sólido e bem equilibrado. Futuro promissor.",
  },
  {
    minScore: 55,
    maxScore: 64,
    label: "Nação Estável",
    description: "Um país funcional com potencial de crescimento.",
  },
  {
    minScore: 45,
    maxScore: 54,
    label: "Nação em Desenvolvimento",
    description: "Um país com desafios, mas também oportunidades.",
  },
  {
    minScore: 35,
    maxScore: 44,
    label: "Nação Caótica",
    description: "Um país interessante, mas muito desorganizado.",
  },
  {
    minScore: 25,
    maxScore: 34,
    label: "Monstro Geopolítico",
    description: "Um país absurdo e imprevisível. Belo caos.",
  },
  {
    minScore: 0,
    maxScore: 24,
    label: "Desastre Absoluto",
    description: "Um país que desafia toda lógica. Obra de arte do caos.",
  },
];

/**
 * Calcula o score final baseado nos países escolhidos
 * @param selectedCountries Mapa de categoria → countryId
 * @returns Score final (0-100) e ranking
 */
export function calculateFinalScore(selectedCountries: Record<Category, string>): {
  score: number;
  ranking: string;
  categoryScores: Record<Category, number>;
} {
  const categoryScores: Partial<Record<Category, number>> = {};
  let totalWeightedScore = 0;
  let totalWeight = 0;

  // Calcular score ponderado por categoria
  for (const category of categoryConfigs) {
    const countryId = selectedCountries[category.id];

    if (countryId) {
      const scores = getCountryScores(countryId);
      if (scores) {
        const categoryScore = scores[category.id as Category];
        // Garantir 1 casa decimal
        categoryScores[category.id] = Math.round(categoryScore * 10) / 10;

        // Aplicar peso
        totalWeightedScore += categoryScore * category.weight;
        totalWeight += category.weight;
      }
    }
  }

  // Normalizar para escala 0-100
  const finalScore = totalWeight > 0 ? Math.round((totalWeightedScore / totalWeight) * 100) / 100 : 0;

  // Encontrar ranking
  const ranking = getRankingLabel(finalScore);

  return {
    score: Math.min(100, Math.max(0, finalScore)),
    ranking,
    categoryScores: categoryScores as Record<Category, number>,
  };
}

/**
 * Obtém o label do ranking baseado no score
 */
export function getRankingLabel(score: number): string {
  const tier = RANKING_TIERS.find((t) => score >= t.minScore && score <= t.maxScore);
  return tier ? `${tier.label} (${tier.description})` : "País Desconhecido";
}

/**
 * Obtém o tier de ranking completo
 */
export function getRankingTier(score: number): RankingTier | undefined {
  return RANKING_TIERS.find((t) => score >= t.minScore && score <= t.maxScore);
}

/**
 * Compara dois resultados de jogo (para X1)
 */
export function compareGameResults(
  result1: GameResult,
  result2: GameResult
): { winner: "player1" | "player2" | "tie"; scoreDiff: number } {
  if (result1.finalScore > result2.finalScore) {
    return {
      winner: "player1",
      scoreDiff: Math.round((result1.finalScore - result2.finalScore) * 100) / 100,
    };
  } else if (result2.finalScore > result1.finalScore) {
    return {
      winner: "player2",
      scoreDiff: Math.round((result2.finalScore - result1.finalScore) * 100) / 100,
    };
  } else {
    return {
      winner: "tie",
      scoreDiff: 0,
    };
  }
}

/**
 * Gera um resumo visual dos scores por categoria
 */
export function getCategoryScoresSummary(
  categoryScores: Record<Category, number>
): Array<{ category: string; label: string; score: number; icon: string }> {
  return categoryConfigs.map((config) => ({
    category: config.id,
    label: config.label,
    score: categoryScores[config.id] || 0,
    icon: config.icon,
  }));
}
