/**
 * DESIGN PHILOSOPHY: Neomórfico com Tipografia Ousada
 * Card de país com bandeira em destaque
 */

import type { Country, Category } from "@/types";
import { Button } from "@/components/ui/button";

interface CountryCardProps {
  country: Country | null;
  isLoading?: boolean;
  onSelect?: (category: Category) => void;
  categories: Array<{ id: string; label: string; icon: string; filled: boolean }>;
}

export default function CountryCard({ country, isLoading = false, onSelect, categories }: CountryCardProps) {
  if (isLoading) {
    return (
      <div className="w-full max-w-md mx-auto animate-pulse">
        <div className="bg-muted rounded-2xl h-64 md:h-80 mb-6"></div>
        <div className="bg-muted rounded-lg h-8 mb-4 w-3/4 mx-auto"></div>
      </div>
    );
  }

  if (!country) {
    return (
      <div className="w-full max-w-md mx-auto text-center py-12">
        <p className="text-muted-foreground text-lg">Nenhum país disponível</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Bandeira em destaque */}
      <div className="card-elevated mb-6 p-8 md:p-12 text-center">
        <div className="text-8xl md:text-9xl mb-4 animate-slide-up">{country.flag}</div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{country.name}</h2>
        <p className="text-muted-foreground text-sm">{country.nameEn}</p>
      </div>

      {/* Categorias disponíveis */}
      <div className="space-y-2 mb-8">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          Escolha uma categoria
        </p>
        <div className="grid grid-cols-2 gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => onSelect?.(category.id as Category)}
              disabled={category.filled}
              variant={category.filled ? "outline" : "default"}
              className={`
                relative overflow-hidden transition-all duration-200
                ${category.filled ? "opacity-50 cursor-not-allowed" : "hover:shadow-lg active:shadow-md"}
              `}
            >
              <span className="mr-2">{category.icon}</span>
              <span className="text-xs md:text-sm">{category.label}</span>
              {category.filled && (
                <span className="absolute inset-0 bg-gradient-to-r from-transparent to-accent/10"></span>
              )}
            </Button>
          ))}
        </div>
      </div>

      {/* Informações adicionais */}
      <div className="text-center text-xs text-muted-foreground">
        <p>Clique em uma categoria para escolher este país</p>
      </div>
    </div>
  );
}
