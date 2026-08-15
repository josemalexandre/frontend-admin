# FRONTEND_ROADMAP.md

# Template Flask — Roadmap, Diário de Aprendizagem e Base de Conhecimento

## 1. Finalidade deste documento

O `FRONTEND_ROADMAP.md` registra a **evolução do projeto e do aprendizado**.

Ele funciona simultaneamente como:

- Roadmap;
- Diário de Aprendizagem;
- Base de Conhecimento.

Este documento registra:

- etapas concluídas;
- etapa atual;
- próximas etapas;
- conceitos aprendidos;
- componentes desenvolvidos;
- padrões adotados;
- boas práticas;
- decisões relevantes para a evolução do projeto.

### Governança documental

O projeto possui três documentos oficiais, cada um com responsabilidade própria:

```text
CONTEXTO_PROJETO.md
→ arquitetura, princípios, metodologia e regras permanentes

ESTADO_ATUAL.md
→ situação concreta do projeto, arquivos, componentes, pendências e próxima etapa

FRONTEND_ROADMAP.md
→ evolução, aprendizagem, roadmap e histórico relevante
```

O Roadmap **não deve duplicar detalhadamente** o estado atual dos arquivos ou as regras arquiteturais permanentes já registradas nos outros documentos.

---

# 2. Objetivo Geral

Construir um template administrativo moderno, reutilizável e responsivo para sistemas Flask.

A primeira implementação será desenvolvida utilizando:

- HTML5;
- CSS3;
- JavaScript ES2023+.

Após a conclusão do sistema em código puro, o mesmo projeto será reconstruído utilizando Bootstrap 5.3+.

O objetivo da segunda implementação será compreender:

- o que o Bootstrap abstrai;
- quais componentes oferece;
- quando utilizar suas abstrações;
- quando desenvolver componentes próprios;
- como migrar uma interface feita em HTML/CSS puro para Bootstrap.

---

# 3. Metodologia de Aprendizagem

Cada etapa seguirá, sempre que aplicável:

1. Objetivo
2. Conceitos
3. Análise Visual
4. Implementação
5. Explicação
6. Alternativas
7. Conexão com Flask
8. Fixação
9. Resumo

Uma etapa somente será considerada concluída após:

- implementação;
- validação visual;
- revisão técnica;
- revisão arquitetural;
- resolução ou registro das pendências relevantes.

Antes da implementação, a especificação deverá ser apresentada de forma objetiva.

Sempre que útil, as propriedades deverão ser apresentadas em formato semelhante a:

```text
body
→ Inter
→ 1rem
→ weight 400
→ line-height 1.5
```

---

# 4. Visão do Roadmap

```text
Fase 0
→ Identidade Visual

Fase 1
→ Fundação

    1.0
    → Estrutura inicial

    1.1
    → Design System Base

    1.2
    → Primeiro HTML e Layout Base
        1.2.1 → Estrutura Visual do Layout Base
        1.2.2 → Dimensões e Superfícies
        1.2.3 → Sidebar: Estrutura e Navegação
        1.2.4 → Sidebar: Ícones e Estados de Navegação
        ...

Fase 2
→ Layout

Fase 3
→ Dashboard

Fase 4
→ Formulários

Fase 5
→ CRUD

Fase 6
→ Componentes

Fase 7
→ Telas

Fase 8
→ Refatoração e preparação para Flask

Fase 9
→ Bootstrap
```

---

# 5. Fase 0 — Identidade Visual

## Status

**Concluída e aprovada.**

## Objetivos concluídos

- [x] Visão geral do sistema
- [x] Definição dos layouts principais
- [x] Definição dos principais componentes
- [x] Paleta de cores
- [x] Tipografia
- [x] Biblioteca de ícones
- [x] Estratégia de responsividade

## Identidade consolidada

Características:

- moderna;
- limpa;
- profissional;
- minimalista;
- corporativa;
- voltada para sistemas administrativos.

A identidade será reutilizada em futuros sistemas Flask.

---

# 6. Fase 1 — Fundação

## Status

**Em andamento.**

---

## 6.1 Etapa 1.0 — Estrutura Inicial

### Status

**Concluída e aprovada.**

### Conteúdos consolidados

Foi criada a estrutura inicial do projeto, incluindo:

```text
assets/
├── css/
│   ├── base/
│   ├── components/
│   ├── layout/
│   └── pages/
├── fonts/
├── icons/
├── images/
└── js/

pages/
```

Também foram estabelecidos:

- `index.html`;
- `main.css`;
- organização inicial dos arquivos CSS;
- separação entre fundamentos, layout e componentes.

---

# 7. Etapa 1.1 — Design System Base

## Status

**Concluída e aprovada.**

A etapa consolidou os fundamentos visuais necessários para começar a construção dos componentes.

---

## 7.1 Etapa 1.1.1 — Variáveis CSS

### Conceitos aprendidos

- CSS Custom Properties;
- Design Tokens;
- centralização de valores;
- reutilização de cores;
- separação entre valor e aplicação.

### Tokens consolidados

Foram definidos tokens para:

- cor primária;
- estado hover;
- sucesso;
- atenção;
- erro;
- background;
- superfície;
- borda;
- texto principal;
- texto secundário;
- texto branco.

### Observação

O projeto possui atualmente o token:

```text
--color-sucess
```

Essa nomenclatura foi mantida conforme o estado existente e não deve ser alterada sem decisão específica.

---

## 7.2 Etapa 1.1.2 — Escala de Espaçamento

### Conceitos aprendidos

- escala de espaçamento;
- uso de `rem`;
- relação entre `rem` e pixels;
- reutilização de valores;
- Design Tokens aplicados a espaçamentos.

### Escala consolidada

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

A escala é utilizada progressivamente nos componentes.

---

## 7.3 Etapa 1.1.3 — Tipografia

### Conceitos aprendidos

- `font-family`;
- `font-size`;
- `font-weight`;
- `line-height`;
- hierarquia tipográfica;
- escala de pesos.

### Escala consolidada

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

### Pesos consolidados

```text
400 → Regular
500 → Medium
600 → Semibold
700 → Bold
```

---

## 7.4 Etapa 1.1.4 — Reset CSS

### Conceitos aprendidos

- comportamento padrão do navegador;
- `box-sizing`;
- margens padrão;
- listas;
- controles de formulário;
- imagens;
- herança de fonte.

### Decisão

Não foi adotado `scroll-behavior: smooth` globalmente.

O reset permanece objetivo e sem comportamentos não necessários.

---

## 7.5 Etapa 1.1.5 — `main.css`

### Status

**Concluída, revisada e validada.**

`main.css` foi estabelecido como ponto de entrada do CSS.

A organização segue a progressão:

```text
Base
↓
Layout
↓
Components
```

---

# 8. Etapa 1.2 — Primeiro HTML e Layout Base

## Status

**Em andamento.**

Esta etapa iniciou a transformação dos fundamentos em uma interface administrativa real.

---

## 8.1 Etapa 1.2.1 — Estrutura Visual do Layout Base

### Status

**Concluída e aprovada.**

### Conceitos aprendidos

- CSS Grid;
- Grid Container;
- Grid Item;
- `grid-template-columns`;
- unidade `fr`;
- combinação entre Grid e Flexbox;
- Flex Container;
- Flex Item;
- `flex-direction: column`;
- `min-height: 100vh`;
- `min-width: 0`.

### Estrutura conceitual consolidada

```text
.app
│
├── aside
│
└── .app__content
    ├── header
    └── main
```

### Aprendizado principal

O Grid passou a ser utilizado para estruturar as áreas principais da aplicação:

```text
240px + 1fr
```

Enquanto o Flexbox passou a organizar verticalmente o conteúdo da área principal.

---

# 9. Etapa 1.2.2 — Dimensões e Superfícies

## Status

**Concluída e aprovada.**

### Conceitos aprendidos

- dimensões de regiões;
- `rem`;
- `vh`;
- superfícies;
- backgrounds;
- bordas estruturais;
- `flex: 1`;
- distribuição do espaço disponível.

### Decisões consolidadas

A Sidebar permanece com `240px` por responsabilidade do Grid.

O `main` utiliza `flex: 1` para ocupar o espaço vertical restante.

As superfícies utilizam os Design Tokens existentes.

### Aprendizado principal

Foi consolidada a diferença entre:

```text
Grid
→ estrutura e dimensionamento das colunas

Flexbox
→ distribuição e alinhamento em uma dimensão
```

---

# 10. Etapa 1.2.3 — Sidebar: Estrutura e Navegação

## Status

**Concluída e aprovada.**

### Objetivo alcançado

Transformar o `<aside>` provisório em um componente administrativo estruturado.

### Estrutura conceitual

```text
.sidebar
│
├── .sidebar__brand
│
├── .sidebar__nav
│   └── .sidebar__section
│       ├── .sidebar__section-title
│       └── .sidebar__link × 4
│
└── .sidebar__footer
    └── .sidebar__link
```

### Conteúdo provisório

```text
Template Flask
Principal
Dashboard
Empresas
Licenças
Relatórios
Configurações
```

### Conceitos aprendidos

- `<aside>`;
- `<nav>`;
- `<a>`;
- semântica de navegação;
- BEM pragmático;
- separação entre Layout e Componentes;
- criação de `components/sidebar.css`;
- Flexbox vertical;
- `margin-top: auto`;
- `gap`;
- `align-items`;
- Flexbox em diferentes níveis.

### Insight importante sobre Flexbox

Foi consolidada a diferença entre:

```text
.sidebar
→ organiza Brand / Nav / Footer
```

e:

```text
.sidebar__link
→ organiza o conteúdo interno do link
→ futuramente: ícone + texto
```

O `.sidebar__section` não recebeu Flexbox porque o fluxo normal do HTML já resolve o empilhamento dos links neste momento.

### Decisões relevantes

- A largura da Sidebar continua sendo responsabilidade do Grid.
- Não foi adicionada largura redundante ao `aside`.
- A Sidebar passou a possuir arquivo próprio em `components/sidebar.css`.
- Os links utilizam `<a>`, preparando a futura integração com `url_for()`.
- Ícones e estados de interação foram deliberadamente adiados para a etapa seguinte.
- O pequeno desalinhamento entre `sidebar__brand` e `header` foi mantido para ser tratado durante a construção da Navbar.

---

# 11. Próxima Etapa Oficial

## Fase 1.2.4 — Sidebar: Ícones e Estados de Navegação

### Status

**Próxima etapa.**

### Objetivo

Evoluir a Sidebar estrutural para uma navegação visualmente completa.

### Conteúdos previstos

- Bootstrap Icons;
- ícone + texto;
- alinhamento;
- estado ativo;
- `:hover`;
- `:focus-visible`;
- modificadores BEM;
- feedback visual;
- acessibilidade básica.

### Conceitos para revisão

```text
Flexbox
→ display: flex
→ align-items
→ gap

Pseudo-classes
→ :hover
→ :focus-visible

BEM
→ Block
→ Element
→ Modifier

Acessibilidade
→ foco
→ teclado
→ semântica de links
```

---

# 12. Próximas Fases

## Fase 2 — Layout

- [ ] Sidebar — consolidação posterior
- [ ] Navbar
- [ ] Área principal
- [ ] Breadcrumb

## Fase 3 — Dashboard

- [ ] Cards
- [ ] KPIs
- [ ] Gráficos
- [ ] Alertas

## Fase 4 — Formulários

- [ ] Inputs
- [ ] Selects
- [ ] Checkboxes
- [ ] Radio Buttons
- [ ] Upload de Arquivos

## Fase 5 — CRUD

- [ ] Tabelas
- [ ] Pesquisa
- [ ] Filtros
- [ ] Paginação
- [ ] Ações

## Fase 6 — Componentes

- [ ] Modais
- [ ] Offcanvas
- [ ] Toasts
- [ ] Badges
- [ ] Dropdowns
- [ ] Wizards

## Fase 7 — Telas

- [ ] Login
- [ ] Recuperação de Senha
- [ ] Cadastro
- [ ] Perfil
- [ ] Configurações
- [ ] Estados de erro

## Fase 8 — Refatoração e Preparação para Flask

- [ ] Componentização final
- [ ] Organização final
- [ ] Preparação dos templates
- [ ] Preparação dos arquivos estáticos
- [ ] Integração conceitual com Jinja2
- [ ] Preparação para Blueprints

## Fase 9 — Bootstrap

- [ ] Reconstrução completa com Bootstrap 5.3+
- [ ] Comparação com CSS puro
- [ ] Análise das abstrações
- [ ] Avaliação de componentes próprios x Bootstrap
- [ ] Ajustes finais

---

# 13. Diário de Aprendizagem

## Principais conhecimentos consolidados

### Design System

- Design Tokens;
- Custom Properties;
- escala de espaçamento;
- escala tipográfica;
- cores semânticas;
- reutilização de valores.

### HTML

- HTML5;
- semântica;
- estrutura hierárquica;
- `<aside>`;
- `<nav>`;
- `<a>`;
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

### Arquitetura

- separação Base / Layout / Components;
- ITCSS pragmático;
- BEM pragmático;
- responsabilidade única;
- evitar duplicação de regras;
- evitar complexidade prematura.

---

# 14. Padrões Aprendidos

## Não repetir responsabilidades

Exemplo:

```text
Grid
→ define 240px da Sidebar
```

Portanto não é necessário:

```css
aside {
    width: 240px;
}
```

sem motivo adicional.

---

## Utilizar o fluxo normal quando suficiente

Se o HTML já empilha os elementos corretamente, não adicionar Flexbox apenas para reproduzir o mesmo comportamento.

---

## Flexbox conforme o problema

```text
.sidebar
→ organiza áreas verticais

.sidebar__link
→ organiza conteúdo interno

.app__content
→ organiza Header + Main
```

---

## Design Tokens

Preferir:

```css
var(--space-4)
```

a:

```css
16px
```

quando existir token equivalente.

---

# 15. Histórico de Decisões de Implementação

Até o momento foram consolidadas as seguintes decisões relevantes:

1. A primeira implementação será feita sem Bootstrap.
2. Bootstrap será estudado somente após a conclusão da versão em CSS puro.
3. O layout principal utiliza CSS Grid.
4. Flexbox é utilizado quando o problema envolve distribuição em uma dimensão.
5. A Sidebar possui largura de `240px` definida pelo Grid.
6. A Sidebar é um componente separado em `components/sidebar.css`.
7. A Sidebar utiliza BEM pragmático.
8. Os links de navegação utilizam `<a>`.
9. `href="#"` é apenas placeholder para a futura integração com Flask.
10. `margin-top: auto` posiciona o Footer no final da Sidebar.
11. `.sidebar__link` utiliza Flexbox para preparar a futura composição ícone + texto.
12. Não foi adicionado Flexbox ao `.sidebar__section` porque o fluxo normal já atende à necessidade atual.
13. Ícones e estados de navegação foram adiados para a Fase 1.2.4.
14. O pequeno desalinhamento entre Sidebar e Navbar será revisitado durante a construção da Navbar.

---

# 16. Integração com Flask — Aprendizados já estabelecidos

O projeto está sendo desenvolvido de forma compatível com futura integração em Flask.

Conceitos que já foram introduzidos conceitualmente:

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

A implementação da integração será realizada somente quando o objetivo do projeto justificar essa transição.

---

# 17. Status Atual

```text
Fase 0
→ ✅ Concluída

Fase 1.0
→ ✅ Concluída

Fase 1.1
→ ✅ Concluída

Fase 1.2.1
→ ✅ Concluída

Fase 1.2.2
→ ✅ Concluída

Fase 1.2.3
→ ✅ Concluída

Fase 1.2.4
→ ▶ Próxima
```

---

# 18. Próximo Marco de Aprendizagem

O próximo marco será a evolução da Sidebar para um componente com interação visual.

A próxima etapa deverá demonstrar, na prática:

```text
HTML
+
CSS
+
Flexbox
+
BEM
+
Ícones
+
Estados
+
Acessibilidade
```

A documentação deverá ser atualizada novamente após a conclusão e validação da Fase 1.2.4.
