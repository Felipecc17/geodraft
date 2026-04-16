/**
 * DESIGN PHILOSOPHY: Neomórfico com Tipografia Ousada
 * Configuração do jogo: categorias, pesos, regras
 * Fácil de editar para ajustar a experiência do jogo
 */

import type { CategoryConfig, GameConfig } from "@/types";

export const categoryConfigs: CategoryConfig[] = [
  {
    id: "bandeira",
    label: "Bandeira",
    description: "Design e estética da bandeira",
    weight: 1,
    icon: "🚩",
  },
  {
    id: "clima",
    label: "Clima",
    description: "Condições climáticas e temperatura",
    weight: 1,
    icon: "🌍",
  },
  {
    id: "culinaria",
    label: "Culinária",
    description: "Gastronomia e pratos típicos",
    weight: 1.2,
    icon: "🍽️",
  },
  {
    id: "economia",
    label: "Economia",
    description: "PIB e desenvolvimento econômico",
    weight: 1.1,
    icon: "💰",
  },
  {
    id: "educacao",
    label: "Educação",
    description: "Qualidade do sistema educacional",
    weight: 1.1,
    icon: "📚",
  },
  {
    id: "esporte",
    label: "Esporte",
    description: "Tradição e desempenho esportivo",
    weight: 1,
    icon: "⚽",
  },
  {
    id: "exercito",
    label: "Exército",
    description: "Força militar e defesa",
    weight: 0.9,
    icon: "🎖️",
  },
  {
    id: "governo",
    label: "Governo",
    description: "Estabilidade política e governança",
    weight: 1.1,
    icon: "🏛️",
  },
  {
    id: "historia",
    label: "História",
    description: "Patrimônio histórico e legado cultural",
    weight: 1.2,
    icon: "📜",
  },
  {
    id: "idioma",
    label: "Idioma",
    description: "Importância e influência do idioma",
    weight: 1,
    icon: "🗣️",
  },
  {
    id: "localizacao",
    label: "Localização",
    description: "Posição geográfica estratégica",
    weight: 1,
    icon: "📍",
  },
  {
    id: "populacao",
    label: "População",
    description: "Tamanho e diversidade populacional",
    weight: 1,
    icon: "👥",
  },
  {
    id: "seguranca",
    label: "Segurança",
    description: "Taxa de criminalidade e segurança pública",
    weight: 1.1,
    icon: "🛡️",
  },
  {
    id: "territorio",
    label: "Território",
    description: "Extensão e características geográficas",
    weight: 1,
    icon: "🗺️",
  },
  {
    id: "saude",
    label: "Saúde",
    description: "Sistema de saúde e qualidade de vida",
    weight: 1.1,
    icon: "⚕️",
  },
];

export const gameConfig: GameConfig = {
  categories: categoryConfigs,
  skipsPerGame: 3, // Quantas vezes o jogador pode pular um país
  undoAllowed: true, // Permitir desfazer a última jogada
  totalCountries: 16, // Exatamente o número de categorias
};

/**
 * Função auxiliar para obter a configuração de uma categoria
 */
export function getCategoryConfig(categoryId: string): CategoryConfig | undefined {
  return categoryConfigs.find((c) => c.id === categoryId);
}

/**
 * Função para calcular o peso total de todas as categorias
 */
export function getTotalWeight(): number {
  return categoryConfigs.reduce((sum, cat) => sum + cat.weight, 0);
}

/**
 * Função para normalizar scores com base nos pesos
 */
export function normalizeScores(scores: Record<string, number>): Record<string, number> {
  const totalWeight = getTotalWeight();
  const normalized: Record<string, number> = {};

  for (const [categoryId, score] of Object.entries(scores)) {
    const config = getCategoryConfig(categoryId);
    if (config) {
      normalized[categoryId] = (score * config.weight) / totalWeight;
    }
  }

  return normalized;
}
