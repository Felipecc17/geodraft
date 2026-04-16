# 🚀 GeoDraft - Setup Local

## Pré-requisitos

- **Node.js** 18+ ([download](https://nodejs.org/))
- **pnpm** 10+ (instale com: `npm install -g pnpm`)

## Instalação Rápida

```bash
# 1. Instalar dependências
pnpm install

# 2. Rodar em desenvolvimento
pnpm run dev

# 3. Abrir no navegador
# Acesse: http://localhost:5173
```

## Comandos Disponíveis

```bash
# Desenvolvimento
pnpm run dev          # Inicia servidor de desenvolvimento

# Build para produção
pnpm run build        # Compila para produção
pnpm run preview      # Visualiza build de produção

# Verificação
pnpm run check        # Verifica tipos TypeScript
pnpm run format       # Formata código com Prettier
```

## Deploy

### Vercel (Recomendado)

1. Faça push do código para GitHub
2. Conecte seu repositório ao [Vercel](https://vercel.com)
3. Configure:
   - **Framework**: Vite
   - **Build Command**: `pnpm run build`
   - **Output Directory**: `dist`
4. Deploy automático em cada push

### Netlify

1. Faça push do código para GitHub
2. Conecte seu repositório ao [Netlify](https://netlify.com)
3. Configure:
   - **Build Command**: `pnpm run build`
   - **Publish Directory**: `dist`
4. Deploy automático

### GitHub Pages

```bash
# Adicione ao vite.config.ts:
# base: '/seu-repo-name/',

pnpm run build
# Faça push da pasta `dist` para branch `gh-pages`
```

## Estrutura do Projeto

```
geodraft/
├── client/                    # Frontend React
│   ├── src/
│   │   ├── pages/            # Páginas (Home, Game, etc)
│   │   ├── components/       # Componentes reutilizáveis
│   │   ├── hooks/            # Custom hooks
│   │   ├── lib/              # Utilitários
│   │   ├── data/             # Dados (países, scores)
│   │   ├── types/            # Tipos TypeScript
│   │   ├── contexts/         # React contexts
│   │   ├── App.tsx           # App principal
│   │   ├── main.tsx          # Entry point
│   │   └── index.css         # Estilos globais
│   ├── public/               # Assets estáticos
│   └── index.html            # HTML template
├── server/                    # Backend (Express)
├── shared/                    # Código compartilhado
├── package.json              # Dependências
├── tsconfig.json             # Config TypeScript
├── vite.config.ts            # Config Vite
└── README.md                 # Documentação
```

## Troubleshooting

### Porta 5173 já está em uso

```bash
# Use outra porta
pnpm run dev -- --port 3000
```

### Erro de dependências

```bash
# Limpe cache e reinstale
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build falha

```bash
# Verifique tipos TypeScript
pnpm run check

# Limpe e reconstrua
rm -rf dist
pnpm run build
```

## Tecnologias

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Vite** - Build tool
- **shadcn/ui** - Component library
- **Recharts** - Data visualization
- **Framer Motion** - Animations
- **Canvas Confetti** - Celebratory effects
- **html2canvas** - Screenshot export

## Suporte

Para reportar bugs ou sugerir features, abra uma issue no GitHub.

---

**Feito com ❤️ por Felipe Carvalho**
