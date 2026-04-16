/**
 * DESIGN PHILOSOPHY: Neomórfico com Tipografia Ousada
 * Componente de exibição de Achievement/Badge
 */

import { Achievement } from "@/lib/achievements";

interface AchievementBadgeProps {
  achievement: Achievement;
  unlocked: boolean;
  size?: "sm" | "md" | "lg";
}

export default function AchievementBadge({
  achievement,
  unlocked,
  size = "md",
}: AchievementBadgeProps) {
  const sizeClasses = {
    sm: "w-12 h-12 text-lg",
    md: "w-16 h-16 text-3xl",
    lg: "w-24 h-24 text-5xl",
  };

  const rarityBgClasses = {
    common: "bg-gradient-to-br from-gray-400 to-gray-500",
    rare: "bg-gradient-to-br from-blue-400 to-blue-500",
    epic: "bg-gradient-to-br from-purple-400 to-purple-500",
    legendary: "bg-gradient-to-br from-yellow-300 to-amber-400",
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`
          ${sizeClasses[size]}
          ${unlocked ? rarityBgClasses[achievement.rarity] : "bg-gray-300"}
          rounded-full
          flex items-center justify-center
          shadow-lg
          ${unlocked ? "scale-100 opacity-100" : "scale-90 opacity-50"}
          transition-all duration-300
          hover:scale-110
          cursor-pointer
        `}
      >
        <span className={unlocked ? "drop-shadow-lg" : "grayscale"}>
          {achievement.icon}
        </span>
      </div>
      <div className="text-center">
        <p className="font-bold text-sm text-foreground">{achievement.name}</p>
        <p className="text-xs text-muted-foreground">{achievement.description}</p>
      </div>
    </div>
  );
}
