# ESTADO_ATUAL.md

# Template Flask — Estado Atual

## 1. Estado Geral

**Projeto:** Template Flask

**Objetivo:** template administrativo/financeiro reutilizável para futuros sistemas Flask.

**Implementação:** HTML5 + CSS3 puro.

**Bootstrap CSS:** ainda não utilizado.

**Ícones:** Bootstrap Icons.

**JavaScript:** ainda não utilizado.

## 2. Fase Atual

**Fase 1 — Fundação**

**Subfase:** Fase 1.2 — Primeiro HTML e Layout Base

**Última etapa concluída:** Fase 1.2.4 — Sidebar: Ícones e Estados de Navegação

**Status:** concluída e validada.

**Próxima etapa:** Fase 1.2.5 — Navbar: Estrutura e Layout

## 3. Estrutura Atual

```text
.
├── .gitignore
├── index.html
├── LICENSE
├── README.md
├── assets
│   ├── css
│   │   ├── main.css
│   │   ├── base
│   │   │   ├── reset.css
│   │   │   ├── typography.css
│   │   │   └── variables.css
│   │   ├── components
│   │   │   └── sidebar.css
│   │   ├── layout
│   │   │   └── app.css
│   │   └── pages
│   ├── fonts
│   ├── icons
│   ├── images
│   └── js
└── pages
```

## 4. Fundamentos

### Variables

Cores:

```text
--color-primary
--color-primary-hover
--color-success
--color-warning
--color-error
--color-background
--color-surface
--color-border
--color-text-primary
--color-text-secondary
--color-white
```

Espaçamento:

```text
--space-1
--space-2
--space-3
--space-4
--space-5
--space-6
--space-8
--space-10
--space-12
--space-16
```

### Typography

```text
body
→ Inter
→ 1rem
→ weight 400
→ line-height 1.5

h1
→ 2rem
→ weight 700
→ line-height 1.2

h2
→ 1.5rem
→ weight 600
→ line-height 1.2

h3
→ 1.25rem
→ weight 600
→ line-height 1.2

h4
→ 1.125rem
→ weight 600
→ line-height 1.2

.text-small
→ 0.875rem
→ line-height 1.5

.text-caption
→ 0.75rem
→ line-height 1.5
```

Reset implementado e validado. Não foi adotado `scroll-behavior: smooth` globalmente.

`main.css` é o ponto de entrada do CSS.

## 5. Layout Base

### `.app`

```text
display: grid
grid-template-columns: 240px 1fr
min-height: 100vh
```

### `.app__content`

```text
display: flex
flex-direction: column
min-width: 0
```

Organiza verticalmente:

```text
header
↓
main
```

### `aside`

```text
background: var(--color-surface)
border-right: 1px solid var(--color-border)
```

### `header`

Ainda é provisório, mas já possui:

```text
height: 4rem
background: var(--color-surface)
border-bottom: 1px solid var(--color-border)
```

### `main`

```text
flex: 1
background: var(--color-background)
padding: var(--space-6)
```

## 6. Sidebar

Arquivo:

```text
assets/css/components/sidebar.css
```

Status: **implementada, revisada e validada.**

Estrutura:

```text
.sidebar
│
├── .sidebar__brand
├── .sidebar__nav
│   └── .sidebar__section
│       ├── .sidebar__section-title
│       ├── .sidebar__link
│       ├── .sidebar__link
│       ├── .sidebar__link
│       └── .sidebar__link
└── .sidebar__footer
    └── .sidebar__link
```

Conteúdo:

```text
Template Flask
Principal
Dashboard
Empresas
Licenças
Relatórios
Configurações
```

## 7. Sidebar — Ícones

Biblioteca: Bootstrap Icons.

```text
Dashboard → bi-speedometer2
Empresas → bi-buildings
Licenças → bi-file-earmark-text
Relatórios → bi-bar-chart
Configurações → bi-gear
```

Ícones decorativos utilizam:

```html
aria-hidden="true"
```

## 8. Sidebar — Estados

Implementados:

```text
.sidebar__link
.sidebar__link:hover
.sidebar__link:focus-visible
.sidebar__link--active
.sidebar__link--active:hover
```

O Dashboard está ativo.

O foco visível foi validado com navegação por teclado usando `Tab`.

## 9. Conceitos consolidados na Fase 1.2.4

- diferença entre estado normal e modificador BEM;
- `:hover`;
- `:focus-visible`;
- estado ativo;
- `aria-hidden="true"`;
- navegação por teclado;
- ícone + texto com Flexbox;
- separação de responsabilidades entre Sidebar e links.

## 10. Validação

Resultado visual validado:

```text
Dashboard
→ ativo

Relatórios
→ foco visível

Empresas / Licenças / Configurações
→ normal
```

Os ícones foram carregados corretamente.

## 11. Decisões recentes

1. Bootstrap CSS continua fora da primeira implementação.
2. Bootstrap Icons pode ser utilizado independentemente do Bootstrap CSS.
3. Ícones decorativos utilizam `aria-hidden="true"`.
4. Dashboard representa inicialmente o item ativo.
5. O estado ativo utiliza `sidebar__link--active`.
6. `:focus-visible` fornece indicação visual de foco.
7. O estado ativo possui comportamento próprio em `:hover`.
8. Não foram criados tokens específicos para estados da Sidebar.
9. Não foram criadas abstrações adicionais sem necessidade.
10. O pequeno desalinhamento entre Sidebar e Navbar será analisado durante a construção da Navbar.

## 12. Pendências

### Navbar

Ainda provisória. Precisa receber:
- estrutura;
- dimensões;
- alinhamento;
- espaçamento;
- áreas internas;
- conteúdo;
- estados necessários;
- relação visual com Sidebar.

### Responsividade

Ainda não implementada de forma completa.

### JavaScript

Ainda não implementado.

### Flask

Integração ainda não implementada. Os links continuam com `href="#"`.

## 13. Próxima etapa oficial

### Fase 1.2.5 — Navbar: Estrutura e Layout

Objetivo: transformar a Navbar provisória em componente estruturado e estabelecer sua relação visual com Sidebar e conteúdo principal.

Conteúdos:
- estrutura semântica;
- Flexbox;
- dimensões;
- alinhamento;
- espaçamento;
- áreas internas;
- `margin-left: auto`;
- preparação para ações do usuário.

Revisar:

```text
display: flex
align-items
justify-content
gap
margin-left: auto

width
height
padding
border
```

## 14. Status resumido

```text
Fase 0 → ✅ Concluída
Fase 1.0 → ✅ Concluída
Fase 1.1 → ✅ Concluída
Fase 1.2.1 → ✅ Concluída
Fase 1.2.2 → ✅ Concluída
Fase 1.2.3 → ✅ Concluída
Fase 1.2.4 → ✅ Concluída
Fase 1.2.5 → ▶ Próxima
```

## 15. Estado atual oficial

> O projeto possui uma fundação CSS organizada, Layout Base estruturado com Grid e Flexbox e uma Sidebar funcional, semântica e validada, incluindo ícones, estado ativo, hover e foco visível.

> A próxima etapa será a construção da Navbar, incluindo seu relacionamento dimensional e visual com a Sidebar e a área principal.
