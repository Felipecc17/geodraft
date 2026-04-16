/**
 * DESIGN PHILOSOPHY: Neomórfico com Tipografia Ousada
 * Sistema de Achievements/Badges baseado em ranking
 */

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  minScore: number;
  color: string;
  rarity: "common" | "rare" | "epic" | "legendary";
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "iniciante",
    name: "Iniciante",
    description: "Completar seu primeiro jogo",
    icon: "🌱",
    minScore: 0,
    color: "from-gray-400 to-gray-500",
    rarity: "common",
  },
  {
    id: "explorador",
    name: "Explorador",
    description: "Atingir 30.0 pontos",
    icon: "🧭",
    minScore: 30.0,
    color: "from-blue-400 to-blue-500",
    rarity: "common",
  },
  {
    id: "viajante",
    name: "Viajante",
    description: "Atingir 40.0 pontos",
    icon: "✈️",
    minScore: 40.0,
    color: "from-cyan-400 to-cyan-500",
    rarity: "common",
  },
  {
    id: "diplomata",
    name: "Diplomata",
    description: "Atingir 50.0 pontos",
    icon: "🤝",
    minScore: 50.0,
    color: "from-green-400 to-green-500",
    rarity: "rare",
  },
  {
    id: "lider_regional",
    name: "Líder Regional",
    description: "Atingir 60.0 pontos",
    icon: "👑",
    minScore: 60.0,
    color: "from-yellow-400 to-yellow-500",
    rarity: "rare",
  },
  {
    id: "potencia_emergente",
    name: "Potência Emergente",
    description: "Atingir 70.0 pontos",
    icon: "🚀",
    minScore: 70.0,
    color: "from-orange-400 to-orange-500",
    rarity: "rare",
  },
  {
    id: "potencia_regional",
    name: "Potência Regional",
    description: "Atingir 75.0 pontos",
    icon: "💪",
    minScore: 75.0,
    color: "from-red-400 to-red-500",
    rarity: "epic",
  },
  {
    id: "superpotencia_regional",
    name: "Superpotência Regional",
    description: "Atingir 80.0 pontos",
    icon: "⚡",
    minScore: 80.0,
    color: "from-purple-400 to-purple-500",
    rarity: "epic",
  },
  {
    id: "superpotencia_global",
    name: "Superpotência Global",
    description: "Atingir 85.0 pontos",
    icon: "🌍",
    minScore: 85.0,
    color: "from-indigo-400 to-indigo-500",
    rarity: "epic",
  },
  {
    id: "imperio_mundial",
    name: "Império Mundial",
    description: "Atingir 90.0 pontos",
    icon: "👸",
    minScore: 90.0,
    color: "from-pink-400 to-pink-500",
    rarity: "legendary",
  },
  {
    id: "civilizacao_perfeita",
    name: "Civilização Perfeita",
    description: "Atingir 95.0 pontos",
    icon: "✨",
    minScore: 95.0,
    color: "from-amber-300 to-amber-400",
    rarity: "legendary",
  },
  {
    id: "utopia",
    name: "Utopia",
    description: "Atingir 100.0 pontos",
    icon: "🏆",
    minScore: 100.0,
    color: "from-yellow-200 to-yellow-300",
    rarity: "legendary",
  },
];

export function getAchievementByScore(score: number): Achievement | null {
  // Retorna o achievement mais alto que o score atingiu
  let bestAchievement: Achievement | null = null;

  for (const achievement of ACHIEVEMENTS) {
    if (score >= achievement.minScore) {
      bestAchievement = achievement;
    } else {
      break;
    }
  }

  return bestAchievement;
}

export function getUnlockedAchievements(score: number): Achievement[] {
  return ACHIEVEMENTS.filter((a) => score >= a.minScore);
}

export function getNextAchievement(score: number): Achievement | null {
  return ACHIEVEMENTS.find((a) => score < a.minScore) || null;
}

export function getProgressToNextAchievement(score: number): {
  current: Achievement | null;
  next: Achievement | null;
  progress: number;
} {
  const current = getAchievementByScore(score);
  const next = getNextAchievement(score);

  if (!next) {
    return {
      current,
      next: null,
      progress: 100,
    };
  }

  const currentMinScore = current?.minScore || 0;
  const nextMinScore = next.minScore;
  const range = nextMinScore - currentMinScore;
  const progress = ((score - currentMinScore) / range) * 100;

  return {
    current,
    next,
    progress: Math.min(100, Math.max(0, progress)),
  };
}
