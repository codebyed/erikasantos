# Érika Santos · Designer & Estrategista Visual

Projeto exportado do **Pencil** com suporte completo a **Tailwind CSS**, arquitetado em **React 19**, **TypeScript** e **Vite**, pronto para deploy no **GitHub Pages**.

## 🎨 Sobre o Projeto

Identidade e presença digital para **Érika Santos (Érika Designer)**, contemplando:
- **Link na Bio / Início**: Crachá pendular responsivo com fundo transparente e selos flutuantes
- **Galeria de Arte & Portfólio**: Vitrine com filtros por categoria e modal de detalhes
- **Serviços & Metodologia**: 3 pacotes detalhados com entregáveis e processo em 3 etapas
- **Contato & Orçamento**: Formulário interativo com chips de serviços e canais diretos
- **Contatos Oficiais**: `@erik4.designer` e `erikasantos.com.br`

---

## 📂 Arquitetura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── BadgeStage.tsx   # Crachá transparente pendular e selos flutuantes
│   ├── Header.tsx       # Barra de navegação e menu mobile
│   ├── Footer.tsx       # Rodapé institucional
│   └── ProjectModal.tsx # Modal de visualização dos trabalhos
├── pages/               # Páginas modulares
│   ├── BioPage.tsx      # Link na Bio / Tela Inicial
│   ├── GalleryPage.tsx  # Galeria de Arte & Portfólio
│   ├── ServicesPage.tsx # Serviços & Metodologia
│   └── ContactPage.tsx  # Contato & Formulário de Orçamento
├── data/                # Dados estáticos desacoplados
│   ├── projects.ts      # Trabalhos da galeria
│   └── services.ts      # Serviços e etapas do processo
├── types/               # Tipagem TypeScript
│   └── index.ts         # Interfaces e tipos globais
├── App.tsx              # Componente raiz
└── index.css            # Tailwind CSS v4 & animações
```

---

## 🌐 Deploy Automático (GitHub Pages)

O projeto possui workflow configurado em `.github/workflows/deploy.yml`. A cada push na branch `main`, o build é gerado e publicado automaticamente no GitHub Pages.

---

## 🚀 Como Executar Localmente

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm run dev
```

### Build de Produção
```bash
npm run build
```
