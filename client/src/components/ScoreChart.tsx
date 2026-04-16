/**
 * DESIGN PHILOSOPHY: Neomórfico com Tipografia Ousada
 * Componente de gráfico de score por categoria
 */

import type { Category } from "@/types";
import { categoryConfigs } from "@/data/gameConfig";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Legend } from "recharts";

interface ScoreChartProps {
  categoryScores: Record<Category, number>;
  chartType?: "radar" | "bar";
}

export default function ScoreChart({ categoryScores, chartType = "radar" }: ScoreChartProps) {
  // Preparar dados para o gráfico
  const data = categoryConfigs.map((cat) => ({
    name: cat.label,
    score: categoryScores[cat.id as Category] || 0,
    fullMark: 100,
  }));

  if (chartType === "radar") {
    return (
      <div className="w-full card-elevated p-6">
        <h3 className="text-lg font-bold mb-2 text-foreground">Distribuição de Scores</h3>
        <p className="text-xs text-muted-foreground mb-4">Escala: 0 a 100</p>
        <div className="h-96">
          <ResponsiveContainer width="100%" height={320}>
            <RadarChart data={data}>
              <PolarGrid stroke="rgba(0,0,0,0.1)" />
              <PolarAngleAxis dataKey="name" tick={{ fontSize: 12 }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} />
              <Radar name="Score" dataKey="score" stroke="#f97316" fill="#f97316" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full card-elevated p-6">
      <h3 className="text-lg font-bold mb-2 text-foreground">Scores por Categoria</h3>
      <p className="text-xs text-muted-foreground mb-4">Escala: 0 a 100</p>
      <div className="h-96">
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} angle={-45} textAnchor="end" height={80} />
            <YAxis domain={[0, 100]} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255,255,255,0.95)",
                border: "1px solid #e8dfd7",
                borderRadius: "8px",
              }}
              formatter={(value) => typeof value === 'number' ? value.toFixed(1) : value}
            />
            <Bar dataKey="score" fill="#f97316" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
