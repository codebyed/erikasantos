# Érika Santos · Designer & Estrategista Visual

Site institucional e portfólio de **Érika Santos**, com foco em identidade visual, social media e direção criativa. O projeto nasceu de um export do **Pencil** e foi reconstruído em **React 19 + TypeScript + Vite + Tailwind CSS v4**, com deploy automático no GitHub Pages.

---

## Sobre o projeto

A presença digital da Érika é organizada em uma experiência de página única com navegação por abas:

- **Link na Bio (`home`)** — crachá pendular interativo com selos flutuantes, apresentação da marca, atalhos sociais (Instagram, e-mail e WhatsApp), acesso rápido aos pacotes e FAQ com perguntas frequentes.
- **Galeria de Arte (`gallery`)** — portfólio filtrável por categoria, com cards e modal de detalhes de cada projeto.
- **Serviços (`services`)** — três pacotes (Social Media, Identidade Visual e Consultoria), entregáveis e metodologia em três etapas.
- **Contato (`contact`)** — formulário com chips de serviço e canais diretos (WhatsApp, e-mail e Instagram).

### Destaques de interface

- Botão **Voltar** nas páginas internas, com histórico de navegação (volta para a página anterior ou para o início).
- Crachá que balança ao ser clicado e selos com flutuação suave e zoom no hover.
- FAQ controlado por React, com abertura animada e apenas uma pergunta aberta por vez.
- Layout responsivo (mobile-first), tipografia Fraunces + Poppins e paleta navy/azul/creme.
- Respeito a `prefers-reduced-motion` nas animações.

---

## Stack

| Tecnologia | Uso |
| --- | --- |
| React 19 | Componentização e estado da interface |
| TypeScript | Tipagem dos dados e das props |
| Vite 8 | Dev server e build de produção |
| Tailwind CSS v4 | Estilos utilitários e tema da marca |
| oxlint | Lint rápido do projeto |

---

## Arquitetura

```text
src/
├── components/          # Componentes reutilizáveis
│   ├── BackButton.tsx   # Botão de voltar com histórico
│   ├── BadgeStage.tsx   # Crachá pendular, selos e brilhos
│   ├── Footer.tsx       # Rodapé institucional
│   ├── Header.tsx       # Navegação desktop e menu mobile
│   └── ProjectModal.tsx # Modal de detalhes dos projetos
├── data/                # Conteúdo desacoplado da interface
│   ├── projects.ts      # Trabalhos da galeria
│   └── services.ts      # Pacotes e etapas do processo
├── pages/               # Páginas modulares
│   ├── BioPage.tsx      # Link na Bio / início
│   ├── GalleryPage.tsx  # Galeria e filtros
│   ├── ServicesPage.tsx # Serviços e metodologia
│   └── ContactPage.tsx  # Formulário e canais de contato
├── types/               # Interfaces e tipos globais
│   └── index.ts
├── App.tsx              # Abas, histórico e layout raiz
├── index.css            # Tailwind, tema e animações
└── main.tsx             # Entrypoint do React
```

### Comentários no código

O código-fonte foi comentado **linha a linha, em primeira pessoa**, explicando a intenção de cada trecho (ex.: “Eu guardo o estado…”, “Eu monto a seção…”). O objetivo é documentar as decisões de implementação e facilitar o estudo do projeto.

---

## Como executar

### Requisitos

- Node.js 20 ou superior
- npm

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

O servidor sobe em `http://localhost:80` (porta configurada em `vite.config.ts`).

### Build de produção

```bash
npm run build
```

O build gera a pasta `dist/` com caminhos relativos (`base: './'`), pronta para hospedagem estática.

### Pré-visualizar o build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Deploy

O workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) publica automaticamente no **GitHub Pages** a cada push na branch `main`:

1. `npm ci` e `npm run build`
2. Upload do artefato de `dist/`
3. Deploy no ambiente `github-pages`

Site publicado: [codebyed.github.io/erikasantos](https://codebyed.github.io/erikasantos/)

---

## Contatos oficiais

- Instagram: [@erik4.designer](https://instagram.com/erik4.designer)
- E-mail: [contato@erikasantos.design](mailto:contato@erikasantos.design)
- WhatsApp: link direto disponível no site

---

## Créditos

- Identidade e conteúdo: **Érika Santos**
- Desenvolvimento: [codebyed](https://codebyed.com)
