/**
 * DESIGN PHILOSOPHY: Neomórfico com Tipografia Ousada
 * Grid de países escolhidos por categoria
 */

import type { Category, Country } from "@/types";
import { categoryConfigs } from "@/data/gameConfig";
import { getCountryById } from "@/data/countries";

interface CountryGridProps {
  selectedCountries: Partial<Record<Category, string>>;
  onCategoryClick?: (category: string) => void;
}

export default function CountryGrid({ selectedCountries, onCategoryClick }: CountryGridProps) {
  return (
    <div className="w-full">
      <h3 className="text-lg md:text-xl font-bold text-foreground mb-4">Seu País em Construção</h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {categoryConfigs.map((category) => {
          const countryId = selectedCountries[category.id];
          const country = countryId ? getCountryById(countryId) : null;

          return (
            <button
              key={category.id}
              onClick={() => onCategoryClick?.(category.id)}
              className={`
                card-elevated p-4 text-center transition-all duration-200
                ${
                  country
                    ? "bg-gradient-to-br from-accent/10 to-orange-100 border-2 border-accent/30"
                    : "bg-muted/50 hover:bg-muted border-2 border-transparent"
                }
              `}
            >
              <div className="text-3xl mb-2">{category.icon}</div>
              <p className="text-xs font-medium text-muted-foreground uppercase mb-2">{category.label}</p>

              {country ? (
                <div>
                  <div className="text-2xl mb-1">{country.flag}</div>
                  <p className="text-xs font-bold text-foreground truncate">{country.name}</p>
                </div>
              ) : (
                <div className="h-12 flex items-center justify-center">
                  <p className="text-xs text-muted-foreground">Vazio</p>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
