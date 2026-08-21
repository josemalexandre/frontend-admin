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

**Última etapa concluída:** Fase 1.2.7 — Estrutura de Conteúdo da Página

**Status:** concluída, revisada e validada.

**Próxima etapa:** Fase 1.2.8 — próxima etapa oficial do roadmap.

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
│   │   │   ├── navbar.css
│   │   │   ├── breadcrumb.css
│   │   │   └── page-header.css
│   │   ├── layout
│   │   │   └── app.css
│   │   └── pages
│   ├── fonts
│   ├── icons
│   ├── images
│   └── js
└── pages
```

## 4. Layout e Estrutura da Página

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

Responsabilidade: receber a estrutura e o conteúdo específico das páginas administrativas.

### Estrutura atual do `main`

```text
main
├── nav.breadcrumb
├── header.page-header
│   ├── .page-header__info
│   │   └── .page-header__title
│   └── .page-header__actions
└── section.page-content
```

## 5. Componentes Consolidados

### Sidebar

Status: implementada, revisada e validada.

Inclui:

- Bootstrap Icons;
- estado ativo;
- `:hover`;
- `:focus-visible`;
- navegação por teclado;
- `aria-hidden="true"` nos ícones decorativos.

### Navbar

Status: implementada, revisada e validada.

Estrutura:

```text
.navbar
├── .navbar__title
└── .navbar__actions
    └── span
```

A Navbar possui altura de `4rem`, alinhada dimensionalmente com `sidebar__brand`.

### Breadcrumb

**Arquivo:** `assets/css/components/breadcrumb.css`

Status: implementado, revisado e validado.

Estrutura:

```text
.breadcrumb
├── <a>
├── <span aria-hidden="true">
└── <span aria-current="page">
```

Especificação:

```text
.breadcrumb
→ display: flex
→ align-items: center
→ gap: var(--space-2)
→ font-size: 0.875rem
→ line-height: 1.5

.breadcrumb a
→ color: var(--color-text-secondary)
→ text-decoration: none

.breadcrumb a:hover
→ color: var(--color-primary)
→ text-decoration: underline

.breadcrumb span
→ color: var(--color-text-secondary)

.breadcrumb span[aria-current="page"]
→ color: var(--color-text-primary)
```

### Page Header

**Arquivo:** `assets/css/components/page-header.css`

Status: implementado, revisado e validado.

Estrutura:

```text
.page-header
├── .page-header__info
│   └── .page-header__title
└── .page-header__actions
```

Especificação:

```text
.page-header
→ display: flex
→ align-items: center
→ justify-content: space-between
→ min-height: 3.5rem
→ padding: var(--space-4) 0
→ margin-bottom: var(--space-6)

.page-header__title
→ 2rem
→ weight 700
→ line-height 1.2
→ color: var(--color-text-primary)
```

`page-header__info` e `page-header__actions` ainda não possuem regras próprias adicionais porque não existe necessidade visual concreta para elas.

### Page Content

Status: estruturado semanticamente e validado.

```text
.page-content
→ container lógico do conteúdo específico da página
→ sem CSS próprio neste momento
```

Não foi criado `page-content.css`, pois ainda não existe uma responsabilidade visual específica que justifique um arquivo próprio.

## 6. `index.html`

A estrutura atual da página foi validada:

```text
.app
├── aside.sidebar
└── .app__content
    ├── header.navbar
    └── main
        ├── nav.breadcrumb
        ├── header.page-header
        └── section.page-content
```

A estrutura utiliza HTML semântico e está preparada para futura integração com Jinja2.

## 7. `main.css`

É o ponto de entrada do CSS.

Ordem atual:

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
↓
breadcrumb.css
↓
page-header.css
```

## 8. Pendências

- responsividade completa;
- JavaScript;
- integração com Flask/Jinja2;
- conteúdo real do Dashboard;
- componentes e telas das fases posteriores.

Não há pendência relevante para o encerramento da Fase 1.2.7.

## 9. Próxima etapa

### Fase 1.2.8

Será definida pelo `FRONTEND_ROADMAP.md`.

Objetivo: continuar a construção da fundação visual e estrutural antes da implementação das telas e componentes de maior complexidade.

## 10. Status

```text
Fase 0 → ✅
Fase 1.0 → ✅
Fase 1.1 → ✅
Fase 1.2.1 → ✅
Fase 1.2.2 → ✅
Fase 1.2.3 → ✅
Fase 1.2.4 → ✅
Fase 1.2.5 → ✅
Fase 1.2.6 → ✅
Fase 1.2.7 → ✅
```

## 11. Progresso geral

**22%**

Percentual estimado sobre o escopo completo planejado, considerando a relevância da fundação já consolidada e o volume ainda restante de Dashboard, formulários, CRUD, componentes, telas, preparação para Flask e reconstrução com Bootstrap.
