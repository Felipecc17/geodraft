/**
 * DESIGN PHILOSOPHY: Neomórfico com Tipografia Ousada
 * Página "Sobre o Jogo" - Informações e créditos
 */

import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Header com botão voltar */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </button>
          <h1 className="text-2xl font-bold text-foreground">Sobre o Jogo</h1>
          <div className="w-20" /> {/* Spacer para centralizar título */}
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="container py-12 max-w-3xl">
        {/* Seção: O que é */}
        <section className="mb-12 p-8 rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold text-foreground mb-4">O que é GeoDraft?</h2>
          <p className="text-lg text-card-foreground leading-relaxed mb-4">
            GeoDraft é um jogo viral e interativo onde você cria o país ideal escolhendo qual país melhor representa cada aspecto importante de uma nação.
          </p>
          <p className="text-lg text-card-foreground leading-relaxed">
            Com 16 categorias diferentes — desde bandeira e culinária até economia e saúde — você monta seu próprio país perfeito e recebe um score final que revela qual tipo de civilização você criou.
          </p>
        </section>

        {/* Seção: Como Funciona */}
        <section className="mb-12 p-8 rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold text-foreground mb-6">Como Funciona</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Escolha Países</h3>
                <p className="text-card-foreground">
                  Para cada categoria, escolha qual país melhor representa esse aspecto.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Acumule Pontos</h3>
                <p className="text-card-foreground">
                  Cada escolha acumula pontos baseados na qualidade daquele país naquela categoria.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Receba Ranking</h3>
                <p className="text-card-foreground">
                  Ao final, receba um ranking divertido que descreve seu país ideal (ex: "Superpotência Global").
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Compartilhe</h3>
                <p className="text-card-foreground">
                  Desafie amigos criando um link compartilhável e compare seus países!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Categorias */}
        <section className="mb-12 p-8 rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold text-foreground mb-6">16 Categorias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "🚩", name: "Bandeira" },
              { icon: "🌍", name: "Clima" },
              { icon: "🍽️", name: "Culinária" },
              { icon: "💰", name: "Economia" },
              { icon: "📚", name: "Educação" },
              { icon: "⚽", name: "Esporte" },
              { icon: "🎖️", name: "Exército" },
              { icon: "🏛️", name: "Governo" },
              { icon: "🏺", name: "História" },
              { icon: "🗣️", name: "Idioma" },
              { icon: "📍", name: "Localização" },
              { icon: "👥", name: "População" },
              { icon: "🛡️", name: "Segurança" },
              { icon: "🗺️", name: "Território" },
              { icon: "⚕️", name: "Saúde" },
              { icon: "🎭", name: "Cultura" },
            ].map((cat) => (
              <div key={cat.name} className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors">
                <span className="text-2xl">{cat.icon}</span>
                <span className="font-semibold text-foreground">{cat.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Seção: Achievements */}
        <section className="mb-12 p-8 rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold text-foreground mb-6">Sistema de Achievements</h2>
          <p className="text-lg text-card-foreground leading-relaxed mb-6">
            Conforme você acumula pontos, desbloqueia achievements especiais que descrevem sua civilização:
          </p>
          <div className="space-y-3">
            {[
              { score: "0+", name: "🌱 Iniciante", desc: "Seu primeiro país" },
              { score: "30+", name: "🧭 Explorador", desc: "Começando a se destacar" },
              { score: "50+", name: "🤝 Diplomata", desc: "Uma nação respeitada" },
              { score: "70+", name: "🚀 Potência Emergente", desc: "Crescimento impressionante" },
              { score: "85+", name: "🌍 Superpotência Global", desc: "Influência mundial" },
              { score: "100", name: "🏆 Utopia", desc: "Perfeição absoluta" },
            ].map((ach) => (
              <div key={ach.name} className="flex items-start gap-4 p-3 rounded-lg bg-background/50">
                <div className="flex-shrink-0">
                  <span className="text-3xl">{ach.name.split(" ")[0]}</span>
                </div>
                <div className="flex-grow">
                  <p className="font-bold text-foreground">{ach.name}</p>
                  <p className="text-sm text-muted-foreground">{ach.desc}</p>
                </div>
                <div className="flex-shrink-0 text-sm font-semibold text-primary">{ach.score}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Seção: Modos de Jogo */}
        <section className="mb-12 p-8 rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold text-foreground mb-6">Modos de Jogo</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">🎮 Modo Solo</h3>
              <p className="text-card-foreground">
                Jogue contra si mesmo! Escolha países aleatoriamente e veja qual score você consegue. Perfeito para descobrir seu tipo ideal de país.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">⚔️ Modo X1 Assíncrono</h3>
              <p className="text-card-foreground">
                Desafie seus amigos! Crie um desafio e compartilhe o link. Seus amigos jogam com a mesma sequência de países e vocês comparam os resultados. Quem montou o melhor país?
              </p>
            </div>
          </div>
        </section>

        {/* Seção: Créditos */}
        <section className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 shadow-lg">
          <h2 className="text-3xl font-bold text-foreground mb-4">Feito com ❤️</h2>
          <p className="text-lg text-card-foreground leading-relaxed">
            <strong>GeoDraft</strong> foi criado por <strong>Felipe Carvalho</strong>.
          </p>
          <p className="text-lg text-card-foreground leading-relaxed mt-4">
            Um jogo viral, compartilhável e divertido para descobrir qual país ideal você montaria. Perfeito para compartilhar com amigos, família e redes sociais!
          </p>
        </section>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={() => setLocation("/")}
            className="px-8 py-6 text-lg font-bold"
            size="lg"
          >
            🎮 Voltar ao Jogo
          </Button>
          <Button
            onClick={() => setLocation("/historico")}
            variant="outline"
            className="px-8 py-6 text-lg font-bold"
            size="lg"
          >
            📊 Ver Histórico
          </Button>
        </div>
      </div>
    </div>
  );
}
