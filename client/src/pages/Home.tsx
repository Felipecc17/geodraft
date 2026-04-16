/**
 * DESIGN PHILOSOPHY: Elegância Sofisticada
 * Paleta: Azul Profundo + Dourado Elegante
 * Página inicial do jogo
 */

import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container py-8 md:py-16">
        <div className="text-center mb-12">
          <div className="text-7xl md:text-8xl mb-4 animate-bounce-in">🌍</div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 animate-slide-up">
            GeoDraft
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Crie o país ideal escolhendo qual país melhor representa cada aspecto. Um jogo viciante e compartilhável.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Feito com ❤️ por Felipe Carvalho
          </p>
        </div>

        {/* CTA Principal */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="btn-neomorph text-white text-lg px-8 py-6 animate-slide-left"
            style={{ backgroundColor: "#1e3a8a", backgroundImage: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)" }}
            onClick={() => navigate("/jogo")}
          >
            🎮 Jogar Solo
          </Button>
          <Button
            size="lg"
            className="btn-neomorph text-lg px-8 py-6 animate-slide-left"
            style={{ 
              animationDelay: "0.1s",
              backgroundColor: "transparent",
              border: "2px solid #d97706",
              color: "#d97706"
            }}
            onClick={() => navigate("/desafio")}
          >
            ⚔️ Criar Desafio X1
          </Button>
        </div>
      </header>

      {/* Como Funciona */}
      <section className="container py-12 md:py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">Como Funciona</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="card-elevated p-6 animate-category-enter" style={{ backgroundColor: "#f0f9ff", borderColor: "#bfdbfe", borderWidth: "1px" }}>
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">Um País é Sorteado</h3>
            <p className="text-muted-foreground">
              A cada rodada, um país aleatório é sorteado com sua bandeira em destaque.
            </p>
          </Card>

          <Card className="card-elevated p-6 animate-category-enter" style={{ backgroundColor: "#fef3c7", borderColor: "#fbbf24", borderWidth: "1px", animationDelay: "0.1s" }}>
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">Você Escolhe a Categoria</h3>
            <p className="text-muted-foreground">
              Decida em qual categoria aquele país melhor se encaixa (bandeira, culinária, economia, etc.).
            </p>
          </Card>

          <Card className="card-elevated p-6 animate-category-enter" style={{ backgroundColor: "#fed7aa", borderColor: "#d97706", borderWidth: "1px", animationDelay: "0.2s" }}>
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">Seu Score é Calculado</h3>
            <p className="text-muted-foreground">
              No final, o sistema calcula automaticamente a nota do seu país montado.
            </p>
          </Card>
        </div>

        {/* Categorias */}
        <div className="rounded-2xl p-8 md:p-12 card-elevated" style={{ backgroundColor: "#f0f9ff", borderColor: "#bfdbfe", borderWidth: "1px" }}>
          <h3 className="text-3xl font-bold mb-6 text-center text-foreground">16 Categorias</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { emoji: "🚩", label: "Bandeira" },
              { emoji: "🌍", label: "Clima" },
              { emoji: "🍽️", label: "Culinária" },
              { emoji: "💰", label: "Economia" },
              { emoji: "📚", label: "Educação" },
              { emoji: "⚽", label: "Esporte" },
              { emoji: "🎖️", label: "Exército" },
              { emoji: "🏛️", label: "Governo" },
              { emoji: "🏺", label: "História" },
              { emoji: "🗣️", label: "Idioma" },
              { emoji: "📍", label: "Localização" },
              { emoji: "👥", label: "População" },
              { emoji: "🛡️", label: "Segurança" },
              { emoji: "🗺️", label: "Território" },
              { emoji: "⚕️", label: "Saúde" },
              { emoji: "🎭", label: "Cultura" },
            ].map((cat, idx) => (
              <div
                key={cat.label}
                className="text-center p-4 rounded-lg animate-category-enter"
                style={{ 
                  backgroundColor: "#dbeafe",
                  borderColor: "#bfdbfe",
                  borderWidth: "1px",
                  color: "#0c4a6e",
                  animationDelay: `${idx * 0.05}s`
                }}
              >
                <p className="text-2xl mb-1">{cat.emoji}</p>
                <p className="font-medium text-sm">{cat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Secundário */}
      <section className="container py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <Button
            size="lg"
            className="btn-neomorph h-auto py-6 flex flex-col items-center justify-center animate-category-enter"
            style={{ backgroundColor: "#f0f9ff", borderColor: "#bfdbfe", borderWidth: "1px", color: "#0c4a6e" }}
            onClick={() => navigate("/historico")}
          >
            <span className="text-3xl mb-2">📈</span>
            <span className="text-lg font-bold">Histórico</span>
          </Button>

          <Button
            size="lg"
            className="btn-neomorph h-auto py-6 flex flex-col items-center justify-center animate-category-enter"
            style={{ backgroundColor: "#fef3c7", borderColor: "#fbbf24", borderWidth: "1px", color: "#78350f", animationDelay: "0.1s" }}
            onClick={() => navigate("/entrar-desafio")}
          >
            <span className="text-3xl mb-2">🔗</span>
            <span className="text-lg font-bold">Entrar em Desafio</span>
          </Button>

          <Button
            size="lg"
            className="btn-neomorph h-auto py-6 flex flex-col items-center justify-center animate-category-enter"
            style={{ backgroundColor: "#fed7aa", borderColor: "#d97706", borderWidth: "1px", color: "#7c2d12", animationDelay: "0.2s" }}
            onClick={() => navigate("/sobre")}
          >
            <span className="text-3xl mb-2">ℹ️</span>
            <span className="text-lg font-bold">Sobre o Jogo</span>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container py-8 md:py-12 text-center border-t border-border">
        <p className="text-muted-foreground mb-2">GeoDraft © 2026 • Um jogo viciante e compartilhável</p>
        <p className="text-sm text-muted-foreground">
          Feito com ❤️ por <span className="font-bold" style={{ color: "#d97706" }}>Felipe Carvalho</span>
        </p>
      </footer>
    </div>
  );
}
