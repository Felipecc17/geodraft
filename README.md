# GeoDraft 🌍

Um jogo viral e interativo onde você monta o país ideal escolhendo qual país melhor representa cada aspecto de uma nação.

**Criado com ❤️ por Felipe Carvalho**

## 🎮 Como Jogar

1. **Modo Solo**: Escolha países aleatoriamente para 16 categorias diferentes
2. **Modo X1 Assíncrono**: Desafie amigos criando um link compartilhável
3. **Veja seu Score**: Receba um ranking divertido baseado em seus pontos
4. **Compartilhe**: Exporte seu resultado como imagem e compartilhe nas redes sociais

## 🎯 Funcionalidades

✅ **16 Categorias**: Bandeira, Clima, Culinária, Economia, Educação, Esporte, Exército, Governo, História/Cultura, Idioma, Localização, População, Segurança, Território, Saúde, Cultura

✅ **195+ Países**: Base de dados completa com todos os países do mundo

✅ **Sistema de Scoring**: Cálculo ponderado e transparente de pontos

✅ **9 Rankings Divertidos**: De "Desastre Absoluto" a "Superpotência Perfeita"

✅ **Achievements**: Desbloqueia badges conforme você acumula pontos

✅ **Gráficos**: Visualize seu breakdown por categoria com radar chart

✅ **Export como Imagem**: Baixe seu resultado para compartilhar

✅ **Comparação X1**: Veja lado-a-lado quem venceu o desafio

✅ **Mobile-First**: Totalmente responsivo e otimizado para celular

## 🛠️ Stack Técnico

- **Frontend**: React 19 + TypeScript + Tailwind CSS 4
- **Componentes**: shadcn/ui + Radix UI
- **Gráficos**: Recharts (Radar Chart)
- **Animações**: Framer Motion + Canvas Confetti
- **Export**: html2canvas
- **Roteamento**: Wouter
- **Build**: Vite + Esbuild

## 📦 Instalação

```bash
# Instalar dependências
pnpm install

# Rodar em desenvolvimento
pnpm run dev

# Build para produção
pnpm run build

# Preview do build
pnpm run preview
```

## 🚀 Deploy

### GitHub

```bash
git init
git add .
git commit -m "Initial commit: GeoDraft"
git branch -M main
git remote add origin https://github.com/seu-usuario/geodraft.git
git push -u origin main
```

### Vercel

1. Conecte seu repositório GitHub ao Vercel
2. Selecione o projeto
3. Configure:
   - **Framework**: Vite
   - **Build Command**: `pnpm run build`
   - **Output Directory**: `dist`
4. Deploy automático em cada push para `main`

### Netlify

1. Conecte seu repositório GitHub ao Netlify
2. Configure:
   - **Build Command**: `pnpm run build`
   - **Publish Directory**: `dist`
3. Deploy automático

## 📊 Como o Scoring Funciona

1. **Scores Base**: Cada país tem um score de 0-100 em cada categoria
2. **Ponderação**: Algumas categorias têm peso maior (ex: Educação 1.1x)
3. **Cálculo**: `Score Final = Σ(score × peso) / Σ(pesos)`
4. **Ranking**: Score final é mapeado para um ranking narrativo divertido

## 🎨 Design

- **Filosofia**: Neomórfico com Tipografia Ousada
- **Tipografia**: Playfair Display (títulos) + Inter (corpo)
- **Paleta**: Tons quentes (beige, taupe) com destaque em laranja coral
- **Animações**: Sorteio giratório, bounce, transições suaves, confete

## 📱 Responsividade

- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)
- ✅ Testes em Chrome, Firefox, Safari, Edge

## 🔐 Segurança

- Dados salvos localmente (localStorage)
- Sem backend externo necessário
- Sem coleta de dados pessoais
- Seed determinística para desafios X1

## 📝 Licença

MIT

## 👨‍💻 Autor

**Felipe Carvalho**

---

Divirta-se montando seu país ideal! 🌍✨
