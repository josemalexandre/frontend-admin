# FRONTEND_ROADMAP.md

# Template Flask — Roadmap, Diário de Aprendizagem e Base de Conhecimento

## 1. Finalidade

O `FRONTEND_ROADMAP.md` registra a evolução do projeto e do aprendizado.

Funciona como:
- Roadmap;
- Diário de Aprendizagem;
- Base de Conhecimento.

Registra:
- etapas concluídas;
- etapa atual;
- próximas etapas;
- conceitos aprendidos;
- componentes desenvolvidos;
- padrões;
- boas práticas;
- decisões relevantes.

### Governança documental

```text
CONTEXTO_PROJETO.md
→ arquitetura, princípios, metodologia e regras permanentes

ESTADO_ATUAL.md
→ situação concreta do projeto, arquivos, componentes, pendências e próxima etapa

FRONTEND_ROADMAP.md
→ evolução, aprendizagem, roadmap e histórico relevante
```

Não duplicar detalhadamente as responsabilidades dos outros documentos.

## 2. Objetivo geral

Construir um template administrativo moderno, reutilizável e responsivo para sistemas Flask.

Primeira implementação:
- HTML5;
- CSS3;
- JavaScript ES2023+;
- sem Bootstrap CSS.

Depois, reconstruir o mesmo projeto com Bootstrap 5.3+ para compreender abstrações, componentes e decisões CSS próprio x framework.

## 3. Metodologia

Cada etapa, quando aplicável:
1. Objetivo
2. Conceitos
3. Análise Visual
4. Implementação
5. Explicação
6. Alternativas
7. Conexão com Flask
8. Fixação
9. Resumo

Só encerrar após implementação, validação visual, revisão técnica/arquitetural e documentação.

Especificações devem usar referências objetivas, como:

```text
body
→ Inter
→ 1rem
→ weight 400
→ line-height 1.5
```

## 4. Visão do roadmap

```text
Fase 0 → Identidade Visual

Fase 1 → Fundação
  1.0 → Estrutura inicial
  1.1 → Design System Base
  1.2 → Primeiro HTML e Layout Base
    1.2.1 → Estrutura Visual do Layout Base
    1.2.2 → Dimensões e Superfícies
    1.2.3 → Sidebar: Estrutura e Navegação
    1.2.4 → Sidebar: Ícones e Estados de Navegação
    1.2.5 → Navbar: Estrutura e Layout

Fase 2 → Layout
Fase 3 → Dashboard
Fase 4 → Formulários
Fase 5 → CRUD
Fase 6 → Componentes
Fase 7 → Telas
Fase 8 → Refatoração e preparação para Flask
Fase 9 → Bootstrap
```

## 5. Fase 0 — Identidade Visual

**Status: concluída e aprovada.**

Concluídos:
- [x] visão geral;
- [x] layouts principais;
- [x] principais componentes;
- [x] paleta;
- [x] tipografia;
- [x] biblioteca de ícones;
- [x] responsividade.

Identidade:
- moderna;
- limpa;
- profissional;
- minimalista;
- corporativa;
- administrativa.

## 6. Fase 1 — Fundação

**Status: em andamento.**

### 6.1 Etapa 1.0 — Estrutura Inicial

**Status: concluída e aprovada.**

Criados:
- estrutura de `assets`;
- `index.html`;
- `main.css`;
- separação inicial entre Base, Layout e Components.

### 6.2 Etapa 1.1 — Design System Base

**Status: concluída e aprovada.**

#### 1.1.1 — Variáveis CSS

Conceitos:
- Custom Properties;
- Design Tokens;
- centralização e reutilização de valores.

Tokens atuais:

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

#### 1.1.2 — Escala de Espaçamento

Conceitos:
- escala;
- `rem`;
- Design Tokens.

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

#### 1.1.3 — Tipografia

```text
body
→ Inter
→ 1rem
→ weight 400
→ line-height 1.5

h1 → 2rem → weight 700 → line-height 1.2
h2 → 1.5rem → weight 600 → line-height 1.2
h3 → 1.25rem → weight 600 → line-height 1.2
h4 → 1.125rem → weight 600 → line-height 1.2
.text-small → 0.875rem → line-height 1.5
.text-caption → 0.75rem → line-height 1.5
```

Pesos:
```text
400 → Regular
500 → Medium
600 → Semibold
700 → Bold
```

#### 1.1.4 — Reset CSS

**Status: concluída e aprovada.**

Conceitos:
- comportamento padrão;
- `box-sizing`;
- margens;
- listas;
- controles;
- imagens;
- herança.

Não foi adotado `scroll-behavior: smooth` globalmente.

#### 1.1.5 — `main.css`

**Status: concluída, revisada e validada.**

Estabelecido como ponto de entrada do CSS.

Ordem conceitual:

```text
Base
↓
Layout
↓
Components
```

## 7. Fase 1.2 — Primeiro HTML e Layout Base

**Status: em andamento.**

### 7.1 Etapa 1.2.1 — Estrutura Visual do Layout Base

**Status: concluída e aprovada.**

Conceitos:
- Grid Container/Item;
- `grid-template-columns`;
- `fr`;
- Flex Container/Item;
- `flex-direction`;
- `min-height: 100vh`;
- `min-width: 0`.

Estrutura:

```text
.app
│
├── aside
│
└── .app__content
    ├── header
    └── main
```

Grid estrutura as áreas principais; Flexbox organiza verticalmente a área de conteúdo.

### 7.2 Etapa 1.2.2 — Dimensões e Superfícies

**Status: concluída e aprovada.**

Conceitos:
- dimensões;
- `rem`;
- `vh`;
- superfícies;
- backgrounds;
- bordas;
- `flex: 1`.

A Sidebar permanece com 240px por responsabilidade do Grid. `main` utiliza `flex: 1`.

### 7.3 Etapa 1.2.3 — Sidebar: Estrutura e Navegação

**Status: concluída e aprovada.**

Estrutura:

```text
.sidebar
│
├── .sidebar__brand
├── .sidebar__nav
│   └── .sidebar__section
│       ├── .sidebar__section-title
│       └── .sidebar__link × 4
└── .sidebar__footer
    └── .sidebar__link
```

Conceitos:
- HTML semântico;
- `<aside>`;
- `<nav>`;
- `<a>`;
- BEM pragmático;
- `components/sidebar.css`;
- Flexbox;
- `margin-top: auto`;
- `gap`;
- `align-items`.

Insight:
```text
.sidebar
→ organiza Brand / Nav / Footer

.sidebar__link
→ organiza conteúdo interno
```

O `.sidebar__section` não recebeu Flexbox porque o fluxo normal já atende ao empilhamento.

### 7.4 Etapa 1.2.4 — Sidebar: Ícones e Estados de Navegação

**Status: concluída, revisada e validada.**

Implementado:
- Bootstrap Icons;
- ícone + texto;
- alinhamento;
- estado ativo;
- `:hover`;
- `:focus-visible`;
- BEM modifier;
- acessibilidade básica.

Estrutura:

```text
<a>
├── <i>
└── <span>
```

Exemplo:

```html
<a class="sidebar__link sidebar__link--active" href="#">
    <i class="bi bi-speedometer2" aria-hidden="true"></i>
    <span>Dashboard</span>
</a>
```

Ícones:

```text
Dashboard → bi-speedometer2
Empresas → bi-buildings
Licenças → bi-file-earmark-text
Relatórios → bi-bar-chart
Configurações → bi-gear
```

Estados:

```text
.sidebar__link
→ normal

.sidebar__link:hover
→ interação por ponteiro

.sidebar__link:focus-visible
→ foco visível

.sidebar__link--active
→ item atualmente selecionado

.sidebar__link--active:hover
→ item ativo sob hover
```

Conceitos:
- `:hover`;
- `:focus-visible`;
- estado ativo;
- `aria-hidden="true"`;
- modificador BEM;
- navegação por teclado;
- Flexbox para ícone + texto.

Resultado validado:
```text
Dashboard → ativo
Relatórios → foco visível
Demais links → normal
```

Decisões:
1. Bootstrap CSS continua fora da primeira implementação.
2. Bootstrap Icons pode ser utilizado independentemente do Bootstrap CSS.
3. Ícones decorativos utilizam `aria-hidden="true"`.
4. Dashboard representa inicialmente o item ativo.
5. Estado ativo utiliza `sidebar__link--active`.
6. `:focus-visible` fornece indicação visual de foco.
7. Estado ativo possui comportamento próprio em `:hover`.
8. Não foram criados tokens específicos para estados da Sidebar.
9. Não foram criadas abstrações adicionais sem necessidade.
10. O pequeno desalinhamento entre Sidebar e Navbar será tratado durante a Navbar.

### 7.5 Etapa 1.2.5 — Navbar: Estrutura e Layout

**Status: próxima etapa oficial.**

Objetivo:
Transformar a Navbar provisória em componente estruturado e estabelecer sua relação visual com Sidebar e área principal.

Conteúdos previstos:
- estrutura semântica;
- Flexbox;
- dimensões;
- alinhamento;
- espaçamento;
- áreas internas;
- `margin-left: auto`;
- preparação para futuras ações do usuário.

Referência inicial:

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

Conceitos para revisar:
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

A etapa ainda não foi implementada.

## 8. Próximas Fases

### Fase 2 — Layout
- [ ] consolidação da Sidebar;
- [ ] Navbar;
- [ ] área principal;
- [ ] Breadcrumb;
- [ ] responsividade estrutural.

### Fase 3 — Dashboard
- [ ] Cards;
- [ ] KPIs;
- [ ] Gráficos;
- [ ] Alertas.

### Fase 4 — Formulários
- [ ] Inputs;
- [ ] Selects;
- [ ] Checkboxes;
- [ ] Radio Buttons;
- [ ] Upload de Arquivos.

### Fase 5 — CRUD
- [ ] Tabelas;
- [ ] Pesquisa;
- [ ] Filtros;
- [ ] Paginação;
- [ ] Ações.

### Fase 6 — Componentes
- [ ] Modais;
- [ ] Offcanvas;
- [ ] Toasts;
- [ ] Badges;
- [ ] Dropdowns;
- [ ] Wizards.

### Fase 7 — Telas
- [ ] Login;
- [ ] Recuperação de Senha;
- [ ] Cadastro;
- [ ] Perfil;
- [ ] Configurações;
- [ ] Estados de erro.

### Fase 8 — Refatoração e preparação para Flask
- [ ] Componentização final;
- [ ] Organização final;
- [ ] Templates;
- [ ] arquivos estáticos;
- [ ] Jinja2;
- [ ] Blueprints.

### Fase 9 — Bootstrap
- [ ] reconstrução com Bootstrap 5.3+;
- [ ] comparação com CSS puro;
- [ ] análise das abstrações;
- [ ] avaliação de componentes próprios x Bootstrap.

## 9. Diário de Aprendizagem

### Design System
- Design Tokens;
- Custom Properties;
- escala de espaçamento;
- escala tipográfica;
- cores semânticas;
- reutilização.

### HTML
- HTML5;
- semântica;
- `<aside>`;
- `<nav>`;
- `<a>`;
- estrutura hierárquica;
- preparação para templates.

### CSS
- Reset;
- `box-sizing`;
- `rem`;
- `vh`;
- `@import`;
- organização por arquivos;
- separação de responsabilidades.

### Grid
- Grid Container;
- Grid Item;
- `grid-template-columns`;
- `fr`;
- coluna fixa + coluna flexível.

### Flexbox
- Flex Container;
- Flex Item;
- `display: flex`;
- `flex-direction`;
- `align-items`;
- `gap`;
- `flex: 1`;
- `margin-top: auto`.

### Estados e acessibilidade
- `:hover`;
- `:focus-visible`;
- estados ativos;
- modificadores BEM;
- `aria-hidden`;
- navegação por teclado.

## 10. Padrões aprendidos

### Não repetir responsabilidades
Se o Grid define a largura da Sidebar, não adicionar largura redundante ao `aside` sem necessidade.

### Utilizar o fluxo normal quando suficiente
Não utilizar Flexbox ou Grid apenas para reproduzir o comportamento natural do HTML.

### Flexbox conforme o problema
```text
.sidebar → áreas verticais
.sidebar__link → ícone + texto
.app__content → Header + Main
```

### Design Tokens
Preferir `var(--space-4)` a valores arbitrários quando houver token equivalente.

### Estados explícitos
Componentes interativos devem possuir estados claros quando necessários.

## 11. Integração com Flask — Aprendizados

Conceitos introduzidos:

```text
HTML estático
↓
Jinja2
↓
templates
↓
base.html
↓
componentes reutilizáveis
↓
Blueprints
↓
url_for()
```

A integração será realizada quando o estágio do projeto justificar.

## 12. Status atual

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

## 13. Próximo marco

Construir a Navbar e consolidar:

```text
HTML
+
CSS
+
Flexbox
+
Box Model
+
BEM
+
Layout
```

A documentação deverá ser atualizada novamente após a conclusão e validação da Fase 1.2.5.
