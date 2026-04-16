/**
 * DESIGN PHILOSOPHY: Neomórfico com Tipografia Ousada
 * Página 404
 */

import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center py-8">
      <div className="container">
        <div className="max-w-md mx-auto text-center">
          <div className="text-8xl mb-6">🤔</div>
          <h1 className="text-5xl font-bold mb-4">Página Não Encontrada</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Parece que você se perdeu. Esta página não existe.
          </p>

          <Button
            size="lg"
            className="btn-neomorph bg-accent text-white"
            onClick={() => navigate("/")}
          >
            Voltar ao Menu
          </Button>
        </div>
      </div>
    </div>
  );
}
