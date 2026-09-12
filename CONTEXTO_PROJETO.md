# Template Flask — Contexto do Projeto

## 1. Identificação e objetivo

**Projeto:** Template Flask

Construção de um template administrativo/financeiro reutilizável para futuros sistemas desenvolvidos com Flask.

O objetivo é criar uma base profissional, moderna, responsiva, acessível e reutilizável, que possa ser adaptada ao LicenSys e a outros sistemas Flask.

O projeto também funciona como ambiente prático de aprendizado de HTML, CSS e posteriormente JavaScript, sempre com foco em aplicação real.

Sistemas-alvo incluem LicenSys, Sistema Financeiro, Sistema Pericial, Controle Patrimonial, Controle de Processos e outros sistemas Flask.

---

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

---

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

---

## 4. Metodologia

Cada etapa seguirá, quando aplicável:

1. Objetivo
2. Conceitos
3. Análise Visual
4. Especificação
5. Implementação
6. Validação
7. Revisão
8. Resumo

Uma etapa só é encerrada após implementação, validação visual, revisão técnica/arquitetural e documentação correspondente.

As especificações devem ser objetivas.

### Metodologia de aprendizagem

As quatro perguntas obrigatórias de consolidação foram suprimidas.

Elas poderão ser utilizadas quando houver dúvida conceitual relevante, mas não constituem requisito de todas as etapas.

O aprendizado será aprofundado quando:

- surgir conceito novo relevante;
- houver dúvida do usuário;
- uma decisão arquitetural exigir compreensão;
- a implementação apresentar comportamento inesperado.

### Ciclo específico para CSS e HTML

Para HTML e CSS:

```text
Especificação
↓
Implementação pelo usuário
↓
Validação visual
↓
Revisão do arquivo
↓
Explicação didática
```

Para HTML, a especificação deve priorizar a representação da estrutura em árvore.

Para CSS, a especificação deve apresentar as propriedades no formato objetivo definido pelo projeto.

Após a implementação, a revisão deverá explicar as propriedades utilizadas, incluindo:

- o que a propriedade significa;
- por que foi escolhida;
- qual responsabilidade possui no componente;
- como se relaciona com as demais propriedades;
- como influencia o comportamento responsivo, quando aplicável.

O objetivo é que a implementação funcione simultaneamente como desenvolvimento e aprendizado prático.

### Princípio de produtividade

Uma nova etapa somente deve ser criada quando houver uma necessidade real de desenvolvimento.

Não criar microetapas artificiais apenas para manter a numeração.

---

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

---

## 6. Estrutura arquitetural atual

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
│   │   │   ├── alert.css
│   │   │   └── form.css
│   │   ├── layout
│   │   │   └── app.css
│   │   └── pages
│   ├── fonts
│   ├── icons
│   ├── images
│   └── js
└── pages
    └── forms.html
```

A estrutura representa a organização física e arquitetural atual. Novos componentes ou mudanças de camadas devem ser tratados como alterações estruturais.

No Layout Base responsivo, o `.sidebar-overlay` permanece dentro de `.app__content`, para não participar do Grid estrutural da aplicação.

---

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

`main.css` mantém a ordem geral:

```text
reset.css
↓
variables.css
↓
typography.css
↓
layout/app.css
↓
components/sidebar.css
↓
components/navbar.css
↓
components/breadcrumb.css
↓
components/page-header.css
↓
components/kpi.css
↓
components/card.css
↓
components/alert.css
↓
components/form.css
```

### Formulários

O `form.css` é um componente reutilizável da camada `components`.

Responsabilidades:

- agrupamento de campos;
- labels;
- inputs;
- selects;
- checkboxes;
- radio buttons;
- upload de arquivos;
- foco;
- estado desabilitado;
- estados de erro e sucesso;
- feedback visual da validação nativa.

O CSS não determina regras de negócio. Ele apenas representa visualmente estados determinados pelo HTML, navegador ou aplicação.

---

## 8. BEM

Uso pragmático:

```text
Block
Block__element
Block--modifier
```

Componentes e estruturas consolidados:

```text
sidebar
sidebar__brand
sidebar__nav
sidebar__section
sidebar__section-title
sidebar__link
sidebar__footer
sidebar__link--active

navbar
navbar__menu
navbar__title
navbar__actions

breadcrumb

page-header
page-header__info
page-header__title
page-header__actions

page-content
page-container

dashboard-kpis
kpi
kpi__label
kpi__value
kpi__description

dashboard-cards
card
card__header
card__body
card__footer

alert
alert__icon
alert__content
alert__title
alert__message
alert__action

form
form__group
form__radio
form__message
form__actions

form__group--error
form__group--success
```

BEM é utilizado como convenção de nomenclatura, sem aplicação rígida quando isso adicionar complexidade desnecessária.

---

## 9. Grid e Flexbox

Grid é usado para estruturas bidimensionais, especialmente o layout principal:

```text
.app
→ display: grid
→ grid-template-columns: 240px 1fr
→ min-height: 100vh
```

Flexbox é usado para distribuição e alinhamento em uma dimensão.

Não utilizar Grid/Flexbox quando o fluxo normal do HTML já resolver o problema.

---

## 10. Design System

Identidade:

- moderna;
- limpa;
- profissional;
- minimalista;
- corporativa;
- administrativa.

### Cores

```text
--color-primary: #2563EB
--color-primary-hover: #1D4ED8
--color-success: #16A34A
--color-warning: #F59E0B
--color-error: #DC2626
--color-background: #F8FAFC
--color-surface: #FFFFFF
--color-border: #E5E7EB
--color-text-primary: #111827
--color-text-secondary: #6B7280
--color-white: #FFFFFF
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

---

## 11. Ícones

Biblioteca: **Bootstrap Icons**.

Seu uso não significa adoção do Bootstrap CSS.

Ícones decorativos utilizam `aria-hidden="true"`.

---

## 11.1. JavaScript

JavaScript ES2023+ puro é utilizado quando existe necessidade real de comportamento interativo.

No estado atual, o `main.js` controla o comportamento responsivo da Sidebar:

```text
menuButton
→ abre Sidebar e ativa overlay

closeButton
→ fecha Sidebar e desativa overlay

sidebarOverlay
→ fecha Sidebar e desativa overlay

closeSidebar()
→ concentra a lógica reutilizável de fechamento
```

A validação básica dos formulários utiliza prioritariamente os mecanismos nativos do HTML e CSS, sem JavaScript adicional quando este não for necessário.

---

## 12. Estados e acessibilidade

Quando aplicável:

```text
normal
hover
focus-visible
active
disabled
```

Para formulários também são utilizados:

```text
:user-valid
:user-invalid
.form__group--error
.form__group--success
```

Princípios:

- HTML semântico;
- links para navegação;
- foco visual preservado;
- navegação por teclado;
- ícones decorativos sem informação redundante;
- estados não dependentes exclusivamente de cor;
- Breadcrumb utiliza `nav` com `aria-label`;
- página atual do Breadcrumb utiliza `aria-current="page"`;
- ícones decorativos do Alert utilizam `aria-hidden="true"`;
- campos de formulário utilizam `label` associado ao controle;
- grupos de Radio Buttons utilizam `fieldset` e `legend`.

A validação nativa do HTML é utilizada para regras simples de entrada, enquanto regras de negócio permanecem sob responsabilidade da aplicação.

---

## 13. Responsividade

A interface é responsiva para Desktop, Notebook, Tablet e Smartphone.

Estratégia: Desktop First, evoluindo progressivamente.

A Fase 2 consolidou o comportamento responsivo do Layout Base, com breakpoint principal em `640px`, Sidebar móvel, overlay e controles de abertura/fechamento.

Os componentes do Dashboard também devem respeitar a largura disponível, evitando overflow horizontal.

O `.card` e o `.card__body` utilizam `min-width: 0` quando necessário para permitir que conteúdos internos, como gráficos, acompanhem o espaço disponível.

Os formulários utilizam os recursos de largura disponíveis do Layout Base, mantendo os controles com largura adequada ao espaço do container.

Não devem ser criados novos breakpoints sem necessidade técnica concreta.

---

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

---

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
16. Não criar microetapas sem necessidade real.
17. Para HTML e CSS, especificar antes de implementar e revisar didaticamente após a implementação.
18. Não transformar uma biblioteca utilizada para demonstração em decisão arquitetural permanente sem consolidação explícita.
19. Utilizar validação nativa do HTML quando ela atender às regras simples de entrada.
20. Não utilizar JavaScript para validação quando HTML e CSS forem suficientes.
21. Manter separadas as regras de entrada, a representação visual dos estados e as regras de negócio da aplicação.

---

## 16. Governança documental

```text
CONTEXTO_PROJETO.md
→ planta baixa: arquitetura, princípios, metodologia e regras permanentes

ESTADO_ATUAL.md
→ fotografia atual: situação concreta, arquivos, componentes, pendências e próxima etapa

FRONTEND_ROADMAP.md
→ cronograma: evolução, etapas, status e próximos marcos
```

O `CONTEXTO_PROJETO.md` só deve ser alterado quando houver mudança estrutural, arquitetural, metodológica ou de regra permanente.

O `ESTADO_ATUAL.md` deve acompanhar a situação concreta do projeto.

O `FRONTEND_ROADMAP.md` deve registrar o planejamento e o progresso sem reproduzir o conteúdo detalhado dos outros documentos.

---

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
