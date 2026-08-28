# Template Flask — ESTADO ATUAL

## 1. Estado Geral

**Projeto:** Template Flask

**Objetivo:** template administrativo/financeiro reutilizável para futuros sistemas Flask.

**Implementação atual:** HTML5 + CSS3 + JavaScript ES2023+ puro.

**Bootstrap CSS:** não utilizado.

**Ícones:** Bootstrap Icons.

**JavaScript:** utilizado no comportamento responsivo da Sidebar (abertura, fechamento e overlay).

---

## 2. Fase Atual

**Fase 1 — Fundação:** concluída.

**Fase 2 — Layout:** concluída, revisada e validada.

**Fase 3 — Dashboard:** concluída, revisada e validada.

**Próxima fase:** Fase 4 — Formulários.

A Fase 3 utilizou o Layout Base consolidado nas fases anteriores e acrescentou os primeiros componentes reais de conteúdo do Template.

---

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
│   │   │   ├── page-header.css
│   │   │   ├── kpi.css
│   │   │   ├── card.css
│   │   │   └── alert.css
│   │   ├── layout
│   │   │   └── app.css
│   │   └── pages
│   ├── fonts
│   ├── icons
│   ├── images
│   └── js
└── pages
```

---

## 4. Layout e Estrutura da Página

```text
.app
├── aside.sidebar
└── .app__content
    ├── header.navbar
    └── main
        └── .page-container
            ├── nav.breadcrumb
            ├── header.page-header
            │   ├── .page-header__info
            │   │   └── .page-header__title
            │   └── .page-header__actions
            └── section.page-content
                ├── .dashboard-kpis
                │   ├── .kpi
                │   │   ├── .kpi__label
                │   │   ├── .kpi__value
                │   │   └── .kpi__description
                │   ├── .kpi
                │   ├── .kpi
                │   └── .kpi
                │
                ├── .dashboard-cards
                │   ├── .card
                │   │   ├── .card__header
                │   │   ├── .card__body
                │   │   └── .card__footer
                │   │
                │   └── .card
                │       ├── .card__header
                │       ├── .card__body
                │       └── .card__footer
                │
                └── .alert
                    ├── .alert__icon
                    ├── .alert__content
                    │   ├── .alert__title
                    │   └── .alert__message
                    └── .alert__action
```

---

## 5. Layout e Componentes Consolidados

### Sidebar

Status: **implementada, revisada, validada e responsiva**.

Inclui:

- Bootstrap Icons;
- estado ativo;
- `:hover`;
- `:focus-visible`;
- navegação por teclado;
- `aria-hidden="true"` nos ícones decorativos;
- comportamento mobile com abertura e fechamento via JavaScript;
- botão de fechamento;
- overlay;
- animações de abertura e fechamento.

### Navbar

Status: **implementada, revisada, validada e adaptada ao mobile**.

Estrutura:

```text
.navbar
├── .navbar__menu
├── .navbar__title
└── .navbar__actions
```

Altura consolidada: `4rem`.

O botão `.navbar__menu` aparece até `640px`, possui área de interação de `2.5rem × 2.5rem`, estados `:hover` e `:focus-visible`, e utiliza Bootstrap Icons.

### Breadcrumb

Status: **implementado, revisado e validado**.

Arquivo:

```text
assets/css/components/breadcrumb.css
```

Especificação:

```text
.breadcrumb
→ display: flex
→ align-items: center
→ gap: var(--space-2)
→ font-size: 0.875rem
→ line-height: 1.5
→ margin-bottom: var(--space-3)
```

### Page Header

Status: **implementado, revisado e validado**.

Arquivo:

```text
assets/css/components/page-header.css
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

`page-header__info` e `page-header__actions` não possuem regras próprias adicionais porque não existe necessidade visual concreta.

### Page Content

Status: **estruturado semanticamente e validado**.

```text
.page-content
→ container lógico do conteúdo específico da página
→ sem CSS próprio
```

Não foi criado `page-content.css`, pois não existe responsabilidade visual que justifique um arquivo próprio.

---

## 6. Dashboard

Status: **implementado, revisado, responsivo e validado**.

### KPIs

Estrutura:

```text
.dashboard-kpis
├── .kpi
│   ├── .kpi__label
│   ├── .kpi__value
│   └── .kpi__description
├── .kpi
├── .kpi
└── .kpi
```

KPIs demonstrativos:

- Total de Registros;
- Em andamento;
- Concluídos;
- Pendências.

Cada KPI representa uma unidade independente de informação.

### Cards

Estrutura:

```text
.dashboard-cards
├── .card
│   ├── .card__header
│   ├── .card__body
│   └── .card__footer
│
└── .card
    ├── .card__header
    ├── .card__body
    └── .card__footer
```

Cards demonstrativos:

- Atividades recentes;
- Evolução.

O segundo Card contém um gráfico demonstrativo.

### Gráfico

Foi integrado um gráfico genérico de evolução mensal apenas para demonstrar visualmente como gráficos podem ocupar um componente do Template.

A biblioteca utilizada para a demonstração não constitui decisão tecnológica permanente para os futuros sistemas.

No projeto real, a implementação poderá utilizar Plotly, Chart.js ou outra biblioteca adequada à necessidade.

Durante a validação responsiva, foi necessário permitir que `.card` e `.card__body` encolhessem adequadamente com `min-width: 0`, evitando overflow horizontal em telas estreitas.

### Alert

Estrutura:

```text
.alert
├── .alert__icon
├── .alert__content
│   ├── .alert__title
│   └── .alert__message
└── .alert__action
```

O Dashboard utiliza um alerta demonstrativo de atenção relacionado às pendências.

O componente utiliza `--color-warning` e foi estruturado para permitir futura criação de variantes sem duplicar a estrutura.

O espaçamento superior foi definido no próprio componente:

```text
.alert
→ margin-top: var(--space-4)
```

Isso mantém a relação visual entre Cards e Alert no componente, sem atribuir responsabilidade visual ao `.page-content`.

---

## 7. `index.html`

O `index.html` permanece como referência do Layout Base e estrutura inicial do Template.

Com a evolução para páginas específicas, o Dashboard passou a representar uma tela de conteúdo própria, sem transformar o `index.html` em um clone de cada nova página.

A arquitetura preserva a ideia de que o Layout Base será posteriormente convertido para `base.html`, enquanto conteúdos específicos serão organizados como páginas Jinja.

---

## 8. `main.css`

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
↓
kpi.css
↓
card.css
↓
alert.css
```

---

## 9. Fase 1 — Resultado Final

A Fase 1 foi concluída com:

- estrutura inicial;
- Design System Base;
- Layout Base;
- Sidebar;
- Navbar;
- área principal;
- Breadcrumb;
- Page Header;
- Page Content;
- container de conteúdo.

---

## 10. Fase 2 — Resultado Final

A Fase 2 foi concluída com:

- análise do comportamento do Application Shell em diferentes larguras;
- definição e validação do breakpoint de `640px`;
- Sidebar responsiva;
- botão de abertura da Sidebar na Navbar;
- botão de fechamento da Sidebar;
- overlay;
- abertura e fechamento controlados por JavaScript;
- fechamento pelo botão e pelo overlay;
- transições da Sidebar e do overlay;
- validação em desktop, tablet e smartphone;
- correção estrutural do overlay para que não participe do Grid;
- validação integrada de `.app`, `.app__content`, `main` e `.page-container`;
- revisão do Breadcrumb e Page Header sem introdução de CSS desnecessário;
- manutenção de `.page-content` sem CSS próprio, conforme decisão anterior.

### Estrutura responsiva consolidada

```text
Desktop
.app
├── .sidebar
└── .app__content

Mobile
.app
├── .sidebar (fixed)
└── .app__content
    └── .sidebar-overlay
```

### JavaScript consolidado

```text
main.js
├── referências aos elementos da Sidebar
├── abertura da Sidebar
├── função closeSidebar()
├── fechamento pelo botão
└── fechamento pelo overlay
```

---

## 11. Fase 3 — Resultado Final

A Fase 3 foi concluída com:

- primeira estrutura funcional de Dashboard;
- KPIs;
- Cards;
- gráfico demonstrativo;
- Alert;
- organização visual do conteúdo;
- responsividade dos componentes;
- validação em desktop e smartphone;
- utilização dos Design Tokens;
- utilização pragmática de BEM;
- correção de dimensionamento com `min-width: 0`;
- preservação de `.page-content` sem CSS próprio.

### Componentes consolidados

```text
Dashboard
├── dashboard-kpis
├── kpi
├── dashboard-cards
├── card
└── alert
```

---

## 12. Pendências

- componentes das fases posteriores;
- integração com Flask/Jinja2;
- refatoração e preparação final para Flask;
- reconstrução comparativa com Bootstrap.

Não existem pendências residuais relevantes da Fase 3.

---

## 13. Próxima Fase

### Fase 4 — Formulários

Objetivo:

- construir componentes de formulário reutilizáveis;
- trabalhar Inputs;
- Selects;
- Checkboxes;
- Radio Buttons;
- Upload de Arquivos;
- estados de formulário;
- validação visual.

A Fase 4 deverá utilizar o Layout Base, o Design System e os padrões de componentes consolidados nas fases anteriores.

---

## 14. Progresso Geral

**50%**

A estimativa considera o peso relativo das Fases 0 a 7 e o estado efetivo de implementação.

O projeto já possui a identidade visual, a fundação, o Layout Base responsivo e a primeira tela de conteúdo com componentes reutilizáveis.

As Fases 8 e 9 permanecem no escopo do projeto, mas continuam fora do denominador do progresso principal.
