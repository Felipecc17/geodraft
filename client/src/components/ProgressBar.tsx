/**
 * DESIGN PHILOSOPHY: Neomórfico com Tipografia Ousada
 * Barra de progresso do jogo
 */

interface ProgressBarProps {
  filled: number;
  total: number;
  percentage: number;
}

export default function ProgressBar({ filled, total, percentage }: ProgressBarProps) {
  return (
    <div className="w-full">
      {/* Texto de progresso */}
      <div className="flex justify-between items-center mb-3">
        <p className="text-sm font-medium text-foreground">
          Progresso: <span className="text-accent font-bold">{filled}</span>/{total}
        </p>
        <p className="text-sm text-muted-foreground">{Math.round(percentage)}%</p>
      </div>

      {/* Barra de progresso */}
      <div className="w-full h-3 bg-muted rounded-full overflow-hidden card-elevated p-0">
        <div
          className="h-full bg-gradient-to-r from-accent to-orange-400 transition-all duration-500 ease-out rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      {/* Indicadores de categorias */}
      <div className="flex gap-1 mt-4">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full transition-all duration-300 ${
              i < filled ? "bg-accent" : "bg-muted"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
