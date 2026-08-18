# CONTEXTO_PROJETO.md

# Template Flask — Contexto do Projeto

## 1. Identificação e objetivo

**Projeto:** Template Flask

Construção de um template administrativo/financeiro reutilizável para futuros sistemas desenvolvidos com Flask.

O objetivo é desenvolver competência prática para criar interfaces administrativas modernas, profissionais, organizadas e responsivas. O projeto não pretende formar um desenvolvedor Front-end generalista.

Sistemas-alvo incluem LicenSys, Sistema Financeiro, Sistema Pericial, Controle Patrimonial, Controle de Processos e outros sistemas Flask.

## 2. Estratégia de implementação

### Primeira implementação
- HTML5
- CSS3
- JavaScript ES2023+
- sem Bootstrap CSS
- sem frameworks CSS
- bibliotecas JavaScript apenas quando indispensáveis ou solicitadas
- bibliotecas independentes, como Bootstrap Icons, podem ser utilizadas

### Segunda implementação
Após a versão em código puro, o mesmo projeto será reconstruído com Bootstrap 5.3+ para comparar:
- abstrações;
- componentes;
- convenções;
- CSS próprio x Bootstrap;
- quando utilizar componentes próprios.

## 3. Escopo

O template deverá contemplar, entre outros:
- Layout Base;
- Sidebar;
- Navbar;
- Dashboard;
- Cards;
- KPIs;
- Breadcrumb;
- Alertas;
- Toasts;
- Badges;
- Botões;
- Formulários;
- Inputs;
- Selects;
- Checkboxes;
- Radio Buttons;
- Upload de Arquivos;
- Tabelas;
- Paginação;
- Pesquisa;
- Filtros;
- Modais;
- Offcanvas;
- Login;
- Recuperação de Senha;
- Cadastro;
- CRUD;
- Wizard;
- Perfil;
- Configurações;
- integração visual de gráficos;
- componentes reutilizáveis.

## 4. Metodologia

Cada etapa seguirá, quando aplicável:
1. Objetivo
2. Conceitos
3. Análise Visual
4. Implementação
5. Explicação
6. Alternativas
7. Conexão com Flask
8. Fixação
9. Resumo

Uma etapa só é encerrada após implementação, validação visual, revisão técnica/arquitetural e documentação.

As especificações devem ser objetivas, por exemplo:

```text
body
→ Inter
→ 1rem
→ weight 400
→ line-height 1.5
```

## 5. Conexão com Flask

O projeto deve manter desde o início uma visão de futura integração com:
- Jinja2;
- templates;
- static;
- Blueprints;
- `base.html`;
- includes;
- macros;
- formulários;
- Flash Messages;
- renderização dinâmica;
- `url_for()`.

A integração será implementada somente quando fizer sentido para a etapa.

## 6. Estrutura

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

## 7. Arquitetura CSS

Abordagem pragmática inspirada em ITCSS:

```text
base/
layout/
components/
pages/
main.css
```

- `base`: reset, variáveis e tipografia.
- `layout`: estrutura da aplicação.
- `components`: componentes reutilizáveis.
- `pages`: regras específicas de páginas.
- `main.css`: ponto de entrada e importação.

## 8. BEM

Uso pragmático:

```text
Block
Block__element
Block--modifier
```

Exemplos:

```text
sidebar
sidebar__brand
sidebar__nav
sidebar__section
sidebar__section-title
sidebar__link
sidebar__footer
sidebar__link--active
```

## 9. Grid e Flexbox

Grid é usado para estruturas bidimensionais, especialmente o layout principal:

```text
.app
→ display: grid
→ grid-template-columns: 240px 1fr
→ min-height: 100vh
```

Flexbox é usado para distribuição/alinhamento em uma dimensão:

```text
.app__content
→ display: flex
→ flex-direction: column
→ min-width: 0

.sidebar
→ display: flex
→ flex-direction: column

.sidebar__link
→ display: flex
→ align-items: center
→ gap: var(--space-3)
```

Não utilizar Grid/Flexbox quando o fluxo normal do HTML já resolver o problema.

## 10. Design System

Identidade:
- moderna;
- limpa;
- profissional;
- minimalista;
- corporativa;
- administrativa.

### Cores

```css
--color-primary: #2563EB;
--color-primary-hover: #1D4ED8;
--color-success: #16A34A;
--color-warning: #F59E0B;
--color-error: #DC2626;
--color-background: #F8FAFC;
--color-surface: #FFFFFF;
--color-border: #E5E7EB;
--color-text-primary: #111827;
--color-text-secondary: #6B7280;
--color-white: #FFFFFF;
```

### Espaçamento

```text
--space-1  → 0.25rem
--space-2  → 0.5rem
--space-3  → 0.75rem
--space-4  → 1rem
--space-5  → 1.25rem
--space-6  → 1.5rem
--space-8  → 2rem
--space-10 → 2.5rem
--space-12 → 3rem
--space-16 → 4rem
```

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

Pesos: 400 Regular, 500 Medium, 600 Semibold, 700 Bold.

## 11. Ícones

Biblioteca: **Bootstrap Icons**.

Seu uso não significa adoção do Bootstrap CSS.

Ícones decorativos utilizam `aria-hidden="true"`.

## 12. Estados e acessibilidade

Quando aplicável:

```text
normal
hover
focus-visible
active
disabled
```

A Sidebar já utiliza estados explícitos.

Princípios:
- HTML semântico;
- links para navegação;
- foco visual preservado;
- navegação por teclado;
- ícones decorativos sem informação redundante;
- estados não dependentes exclusivamente de cor.

## 13. Responsividade

A interface será responsiva para Desktop, Notebook, Tablet e Smartphone.

Estratégia inicial: Desktop First, evoluindo progressivamente.

## 14. Integração futura

Estrutura futura esperada:

```text
templates/
├── base.html
├── includes/
│   ├── sidebar.html
│   └── navbar.html
└── pages/

static/
├── css/
└── js/
```

Links atualmente em `href="#"` são placeholders e futuramente poderão utilizar `{{ url_for(...) }}`.

## 15. Regras

1. Não adicionar complexidade sem necessidade.
2. Não duplicar responsabilidades.
3. Reutilizar Design Tokens.
4. Separar Base, Layout e Components.
5. Utilizar HTML semântico.
6. Utilizar BEM de forma pragmática.
7. Utilizar Grid/Flexbox conforme o problema.
8. Evitar abstrações prematuras.
9. Validar cada etapa.
10. Discutir e consolidar mudanças arquiteturais.
11. Preservar reutilização para futuros sistemas Flask.
12. Tratar estados explicitamente.
13. Considerar acessibilidade desde a construção.
14. Não confundir bibliotecas independentes com frameworks de UI.
15. Manter CSS puro compreensível para posterior comparação com Bootstrap.

## 16. Governança documental

```text
CONTEXTO_PROJETO.md
→ arquitetura, princípios, metodologia e regras permanentes

ESTADO_ATUAL.md
→ situação concreta, arquivos, componentes, pendências e próxima etapa

FRONTEND_ROADMAP.md
→ evolução, aprendizagem, roadmap e histórico relevante
```

Os documentos não devem duplicar detalhadamente suas responsabilidades.

## 17. Princípio geral

Construir uma interface:

```text
moderna
+
profissional
+
consistente
+
reutilizável
+
responsiva
+
acessível
+
fácil de manter
+
fácil de integrar ao Flask
```

Simplicidade deve ser preservada sempre que não houver necessidade técnica de maior complexidade.
