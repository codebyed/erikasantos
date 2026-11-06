# Changelog

Todas as mudanças notáveis deste projeto são documentadas aqui.

O formato segue o [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/) e o versionamento segue o [SemVer](https://semver.org/lang/pt-BR/).

## [Não publicado]

### Adicionado

- Comentários explicativos linha a linha, em primeira pessoa, em todos os arquivos de código.
- Seção de arquitetura, destaques de interface e contatos oficiais no README.

### Alterado

- README reescrito para refletir o estado atual do site.
- `.gitignore` reorganizado por categorias (dependências, build, ambiente, logs, editores, sistema e temporários).

## [1.2.0] - 2026-11-06

### Adicionado

- Botão de atalho de e-mail na linha de ícones sociais do Link na Bio.
- Botão **Voltar** nas páginas internas, com histórico de navegação.
- Flutuação contínua e efeito de hover nos selos ao lado do crachá.
- Animação de abertura das respostas do FAQ.

### Alterado

- Botão “Falar no WhatsApp” com as cores do WhatsApp (verde) e texto branco.
- E-mail de contato atualizado para `contato@erikasantos.design`.
- Ícones sociais passaram a herdar a cor do texto (`fill-current`), corrigindo o hover.

### Corrigido

- FAQ que abria/fechava a pergunta errada por conflito entre `open` e `onToggle`.
- Ícones de Instagram e WhatsApp que ficavam pretos e sumiam no hover.
- Classe de animação do FAQ que não existia no CSS.

## [1.1.0] - 2026-11-06

### Adicionado

- FAQ com seis perguntas frequentes no Link na Bio.
- Acesso rápido em formato de pills (galeria, social media, identidade visual e WhatsApp).
- Balanço do crachá ao clique.

### Alterado

- Link na Bio redesenhado, com nova hierarquia visual e botões no estilo da marca.
- Rodapé simplificado.
- Projetos da galeria revisados (títulos, anos e ordem).

## [1.0.0] - 2026-11-05

### Adicionado

- Versão inicial do site: Link na Bio, galeria com filtros e modal, serviços e contato.
- Layout responsivo com Tailwind CSS v4, fontes Fraunces e Poppins.
- Deploy automático no GitHub Pages via GitHub Actions.
