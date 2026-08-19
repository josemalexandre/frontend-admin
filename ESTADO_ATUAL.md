# Template Flask — Estado Atual

## 1. Estado Geral

**Projeto:** Template Flask

**Objetivo:** template administrativo/financeiro reutilizável para futuros sistemas Flask.

**Implementação atual:** HTML5 + CSS3 puro.

**Bootstrap CSS:** não utilizado.

**Ícones:** Bootstrap Icons.

**JavaScript:** ainda não utilizado.

## 2. Fase Atual

**Fase 1 — Fundação**

**Subfase:** Fase 1.2 — Primeiro HTML e Layout Base

**Última etapa concluída:** Fase 1.2.5 — Navbar: Estrutura e Layout

**Status:** concluída, revisada e validada.

**Próxima etapa:** Fase 1.2.6 — Consolidação da Área Principal.

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
│   │   │   ├── sidebar.css
│   │   │   └── navbar.css
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

### Design Tokens

Cores e escala de espaçamento definidas em `variables.css`.

### Tipografia

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

Reset implementado e validado.

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

### `main`

```text
flex: 1
background: var(--color-background)
padding: var(--space-6)
```

## 6. Sidebar

**Status:** implementada, revisada e validada.

Estrutura:

```text
.sidebar
├── .sidebar__brand
├── .sidebar__nav
│   └── .sidebar__section
│       ├── .sidebar__section-title
│       └── .sidebar__link × 4
└── .sidebar__footer
    └── .sidebar__link
```

Inclui:

- Bootstrap Icons;
- estado ativo;
- `:hover`;
- `:focus-visible`;
- navegação por teclado;
- `aria-hidden="true"` nos ícones decorativos.

O Dashboard está inicialmente ativo.

## 7. Navbar

**Arquivo:** `assets/css/components/navbar.css`

**Status:** implementada, revisada e validada.

Estrutura:

```text
.navbar
├── .navbar__title
└── .navbar__actions
    └── span
```

Especificações:

```text
.navbar
→ display: flex
→ align-items: center
→ height: 4rem
→ padding: 0 var(--space-6)
→ background: var(--color-surface)
→ border-bottom: 1px solid var(--color-border)

.navbar__title
→ 1.125rem
→ weight 600
→ color var(--color-text-primary)

.navbar__actions
→ display: flex
→ align-items: center
→ gap: var(--space-4)
→ margin-left: auto
```

A ação atual é um placeholder textual:

```text
Usuário
```

O alinhamento entre `sidebar__brand` e Navbar foi corrigido e validado visualmente, utilizando `4rem` como altura comum.

## 8. `main.css`

**Status:** revisado e validado.

Ordem:

```text
reset.css
↓
variables.css
↓
typography.css
↓
app.css
↓
sidebar.css
↓
navbar.css
```

## 9. Pendências

- consolidação da área principal;
- responsividade completa;
- JavaScript;
- integração com Flask/Jinja2;
- componentes e telas das fases posteriores.

## 10. Próxima etapa

### Fase 1.2.6 — Consolidação da Área Principal

Objetivo:

Preparar o `main` para receber o conteúdo real das futuras telas administrativas.

Pontos previstos:

- estrutura semântica;
- hierarquia inicial;
- espaçamento;
- largura disponível;
- relação entre `main` e `.app__content`;
- preparação para Breadcrumb e Dashboard.

## 11. Status

```text
Fase 0 → ✅
Fase 1.0 → ✅
Fase 1.1 → ✅
Fase 1.2.1 → ✅
Fase 1.2.2 → ✅
Fase 1.2.3 → ✅
Fase 1.2.4 → ✅
Fase 1.2.5 → ✅
Fase 1.2.6 → ▶ Próxima
```

## 12. Progresso geral

**20%**

Percentual estimado sobre o escopo completo planejado. Será reavaliado ao final de cada etapa concluída.
