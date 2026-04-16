/**
 * DESIGN PHILOSOPHY: Neomórfico com Tipografia Ousada
 * Página inicial do jogo
 */

import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header com gradiente vibrante */}
      <header className="container py-8 md:py-12">
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

        {/* CTA Principal com gradientes */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="btn-neomorph bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 text-lg px-8 py-6 animate-slide-left"
            onClick={() => navigate("/jogo")}
          >
            🎮 Jogar Solo
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="btn-neomorph text-lg px-8 py-6 animate-slide-left"
            style={{ animationDelay: "0.1s" }}
            onClick={() => navigate("/desafio")}
          >
            ⚔️ Criar Desafio X1
          </Button>
        </div>
      </header>

      {/* Como Funciona */}
      <section className="container py-12 md:py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Como Funciona</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="card-elevated p-6 gradient-vibrant-1 bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 animate-category-enter">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold mb-3 text-orange-900">Um País é Sorteado</h3>
            <p className="text-orange-800">
              A cada rodada, um país aleatório é sorteado com sua bandeira em destaque.
            </p>
          </Card>

          <Card className="card-elevated p-6 bg-gradient-to-br from-pink-50 to-pink-100 border-2 border-pink-200 animate-category-enter" style={{ animationDelay: "0.1s" }}>
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-3 text-pink-900">Você Escolhe a Categoria</h3>
            <p className="text-pink-800">
              Decida em qual categoria aquele país melhor se encaixa (bandeira, culinária, economia, etc.).
            </p>
          </Card>

          <Card className="card-elevated p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 animate-category-enter" style={{ animationDelay: "0.2s" }}>
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-3 text-purple-900">Seu Score é Calculado</h3>
            <p className="text-purple-800">
              No final, o sistema calcula automaticamente a nota do seu país montado.
            </p>
          </Card>
        </div>

        {/* Categorias com cores */}
        <div className="bg-gradient-to-r from-orange-50 via-pink-50 to-purple-50 rounded-2xl p-8 md:p-12 card-elevated border-2 border-orange-200">
          <h3 className="text-3xl font-bold mb-6 text-center text-foreground">16 Categorias</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { emoji: "🚩", label: "Bandeira", color: "from-orange-100 to-orange-200" },
              { emoji: "🌍", label: "Clima", color: "from-cyan-100 to-cyan-200" },
              { emoji: "🍽️", label: "Culinária", color: "from-red-100 to-red-200" },
              { emoji: "💰", label: "Economia", color: "from-green-100 to-green-200" },
              { emoji: "📚", label: "Educação", color: "from-blue-100 to-blue-200" },
              { emoji: "⚽", label: "Esporte", color: "from-yellow-100 to-yellow-200" },
              { emoji: "🎖️", label: "Exército", color: "from-gray-100 to-gray-200" },
              { emoji: "🏛️", label: "Governo", color: "from-indigo-100 to-indigo-200" },
              { emoji: "🏺", label: "História", color: "from-amber-100 to-amber-200" },
              { emoji: "🗣️", label: "Idioma", color: "from-pink-100 to-pink-200" },
              { emoji: "📍", label: "Localização", color: "from-teal-100 to-teal-200" },
              { emoji: "👥", label: "População", color: "from-violet-100 to-violet-200" },
              { emoji: "🛡️", label: "Segurança", color: "from-rose-100 to-rose-200" },
              { emoji: "🗺️", label: "Território", color: "from-lime-100 to-lime-200" },
              { emoji: "⚕️", label: "Saúde", color: "from-red-100 to-red-200" },
              { emoji: "🎭", label: "Cultura", color: "from-purple-100 to-purple-200" },
            ].map((cat, idx) => (
              <div
                key={cat.label}
                className={`text-center p-4 bg-gradient-to-br ${cat.color} rounded-lg border border-white/50 animate-category-enter`}
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <p className="text-2xl mb-1">{cat.emoji}</p>
                <p className="font-medium text-sm text-gray-700">{cat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Secundário */}
      <section className="container py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <Button
            variant="outline"
            size="lg"
            className="btn-neomorph h-auto py-6 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 hover:border-blue-300 animate-category-enter"
            onClick={() => navigate("/historico")}
          >
            <span className="text-3xl mb-2">📈</span>
            <span className="text-lg font-bold text-blue-900">Histórico</span>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="btn-neomorph h-auto py-6 flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 hover:border-green-300 animate-category-enter"
            style={{ animationDelay: "0.1s" }}
            onClick={() => navigate("/entrar-desafio")}
          >
            <span className="text-3xl mb-2">🔗</span>
            <span className="text-lg font-bold text-green-900">Entrar em Desafio</span>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="btn-neomorph h-auto py-6 flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 hover:border-purple-300 animate-category-enter"
            style={{ animationDelay: "0.2s" }}
            onClick={() => navigate("/sobre")}
          >
            <span className="text-3xl mb-2">ℹ️</span>
            <span className="text-lg font-bold text-purple-900">Sobre o Jogo</span>
          </Button>
        </div>
      </section>

      {/* Footer com créditos */}
      <footer className="container py-8 md:py-12 text-center border-t border-border">
        <p className="text-muted-foreground mb-2">GeoDraft © 2026 • Um jogo viciante e compartilhável</p>
        <p className="text-sm text-muted-foreground">
          Feito com ❤️ por <span className="font-bold text-accent">Felipe Carvalho</span>
        </p>
      </footer>
    </div>
  );
}
