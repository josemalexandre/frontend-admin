# ESTADO_ATUAL.md

# Template Flask — Estado Atual

## 1. Estado Geral

**Projeto:** Template Flask

**Objetivo atual:** Construção progressiva de um template administrativo reutilizável para futuros sistemas Flask.

**Implementação atual:** HTML5 + CSS3 puro.

**Bootstrap:** ainda não utilizado. Será introduzido somente após a conclusão da primeira implementação completa.

**JavaScript:** ainda não utilizado; será introduzido conforme houver necessidade de comportamento interativo.

---

# 2. Fase Atual

## Fase 1 — Fundação

### Subfase atual

**Fase 1.2 — Primeiro HTML e Layout Base**

### Última etapa concluída

**Fase 1.2.3 — Sidebar: Estrutura e Navegação**

**Status:** concluída e validada.

### Próxima etapa oficial

**Fase 1.2.4 — Sidebar: Ícones e Estados de Navegação**

---

# 3. Estrutura Atual do Projeto

```text
.
├── .gitignore
├── index.html
├── LICENSE
├── README.md
│
├── assets
│   ├── css
│   │   ├── main.css
│   │   │
│   │   ├── base
│   │   │   ├── reset.css
│   │   │   ├── typography.css
│   │   │   └── variables.css
│   │   │
│   │   ├── components
│   │   │   └── sidebar.css
│   │   │
│   │   ├── layout
│   │   │   └── app.css
│   │   │
│   │   └── pages
│   │
│   ├── fonts
│   ├── icons
│   ├── images
│   └── js
│
└── pages
```

---

# 4. Arquivos Implementados

## `index.html`

Responsabilidade atual:

- estrutura HTML inicial da aplicação;
- Layout Base;
- Sidebar;
- área de conteúdo;
- Navbar provisória;
- Main provisório.

Estrutura atual:

```text
.app
│
├── .sidebar
│   │
│   ├── .sidebar__brand
│   │
│   ├── .sidebar__nav
│   │   └── .sidebar__section
│   │       ├── .sidebar__section-title
│   │       ├── .sidebar__link
│   │       ├── .sidebar__link
│   │       ├── .sidebar__link
│   │       └── .sidebar__link
│   │
│   └── .sidebar__footer
│       └── .sidebar__link
│
└── .app__content
    ├── header
    └── main
```

Conteúdo provisório da Sidebar:

```text
Template Flask
Principal
Dashboard
Empresas
Licenças
Relatórios
Configurações
```

Os links atualmente utilizam `href="#"` como placeholder.

---

## `assets/css/base/variables.css`

Contém os Design Tokens de cores e estágios visuais definidos até o momento.

Principais tokens:

```text
--color-primary
--color-primary-hover
--color-sucess
--color-warning
--color-error
--color-background
--color-surface
--color-border
--color-text-primary
--color-text-secondary
--color-text-white
```

A nomenclatura atual `--color-sucess` foi mantida conforme o estado existente do projeto e não deve ser alterada sem decisão específica.

---

## `assets/css/base/typography.css`

Tipografia consolidada:

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

---

## `assets/css/base/reset.css`

Reset CSS implementado e validado.

Inclui as configurações básicas definidas para:

- `box-sizing`;
- margens;
- títulos;
- parágrafos;
- listas;
- formulários;
- imagens;
- herança de fonte em controles.

Não foi adotado `scroll-behavior: smooth` globalmente.

---

## `assets/css/layout/app.css`

Responsabilidade:

**Layout estrutural da aplicação.**

Implementação conceitual atual:

```text
.app

→ display: grid
→ grid-template-columns: 240px 1fr
→ min-height: 100vh
```

```text
.app__content

→ display: flex
→ flex-direction: column
→ min-width: 0
```

```text
aside

→ background: var(--color-surface)
→ border-right: 1px solid var(--color-border)
```

```text
header

→ height: 4rem
→ background: var(--color-surface)
→ border-bottom: 1px solid var(--color-border)
```

```text
main

→ flex: 1
→ background: var(--color-background)
→ padding: var(--space-6)
```

### Responsabilidades consolidadas

O Grid é responsável por:

```text
Sidebar
+
Área de conteúdo
```

O Flexbox de `.app__content` é responsável pela organização vertical:

```text
header
↓
main
```

O `flex: 1` do `main` permite que ele ocupe o espaço vertical restante.

---

# 5. Sidebar Atual

## Arquivo

```text
assets/css/components/sidebar.css
```

## Status

**Implementada, revisada e validada.**

---

## Estrutura

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

---

## `.sidebar`

```text
→ display: flex
→ flex-direction: column
→ height: 100%
```

Responsabilidade:

Organizar verticalmente:

```text
Brand
↓
Nav
↓
Footer
```

---

## `.sidebar__brand`

```text
→ padding: var(--space-6)
→ border-bottom: 1px solid var(--color-border)
```

---

## `.sidebar__nav`

```text
→ padding: var(--space-4)
```

---

## `.sidebar__section`

```text
→ margin-bottom: var(--space-6)
```

Não utiliza Flexbox neste momento porque o fluxo normal dos elementos já resolve o empilhamento da navegação.

---

## `.sidebar__section-title`

```text
→ font-size: 0.75rem
→ font-weight: 600
```

---

## `.sidebar__link`

```text
→ display: flex
→ align-items: center
→ gap: var(--space-3)
→ padding: var(--space-3)
→ text-decoration: none
→ color: var(--color-text-secondary)
```

O Flexbox do link foi adotado para organizar futuramente:

```text
[ícone] Texto
```

O Flexbox do link não é responsável por empilhar os links entre si.

---

## `.sidebar__footer`

```text
→ margin-top: auto
→ padding: var(--space-4)
→ border-top: 1px solid var(--color-border)
```

O `margin-top: auto` utiliza o espaço livre do Flex Container para empurrar o Footer para o final da Sidebar.

---

# 6. `assets/css/main.css`

`main.css` é o ponto de entrada do CSS.

Ordem atual:

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
```

A ordem segue a lógica:

```text
Base
↓
Layout
↓
Components
```

---

# 7. Conceitos Já Consolidados

Até o momento foram estudados e aplicados:

## HTML

- HTML5;
- semântica;
- `<aside>`;
- `<nav>`;
- `<a>`;
- `<header>`;
- `<main>`;
- estrutura hierárquica;
- preparação para futura integração com Jinja2.

## CSS

- Custom Properties;
- Design Tokens;
- `rem`;
- `vh`;
- Reset CSS;
- `box-sizing`;
- `@import`;
- organização por arquivos;
- especificidade básica;
- separação de responsabilidades.

## CSS Grid

- Grid Container;
- Grid Item;
- `display: grid`;
- `grid-template-columns`;
- `fr`;
- coluna fixa + coluna flexível.

Aplicação atual:

```text
240px + 1fr
```

## Flexbox

- Flex Container;
- Flex Item;
- `display: flex`;
- `flex-direction`;
- `align-items`;
- `gap`;
- `flex: 1`;
- `margin-top: auto`.

Aplicações atuais:

```text
.app__content
→ organização vertical

.sidebar
→ organização vertical

.sidebar__link
→ organização interna

.sidebar__footer
→ deslocamento para o final da Sidebar
```

## Arquitetura

- separação entre `base`;
- `layout`;
- `components`;
- `pages`;
- BEM pragmático;
- ITCSS pragmático;
- `main.css` como ponto de entrada.

---

# 8. Decisões Importantes Já Consolidadas

## Grid x largura da Sidebar

A largura de `240px` pertence ao Grid:

```css
grid-template-columns: 240px 1fr;
```

Não será repetida como:

```css
aside {
    width: 240px;
}
```

sem necessidade.

---

## Fluxo normal x Flexbox

Não utilizar Flexbox apenas para reproduzir um comportamento que o fluxo normal do HTML já resolve adequadamente.

Exemplo:

`.sidebar__section` não recebeu:

```css
display: flex;
flex-direction: column;
```

porque os links já são organizados adequadamente pelo fluxo normal.

---

## Flexbox no `.sidebar__link`

Foi mantido:

```css
display: flex;
```

porque o objetivo é organizar futuramente:

```text
ícone + texto
```

e não organizar os links entre si.

---

## Layout x Componentes

`app.css` é responsável pelo layout geral.

`sidebar.css` é responsável pela Sidebar como componente.

Essa separação deve ser preservada para os próximos componentes.

---

# 9. Pendências Conhecidas

## Desalinhamento entre Sidebar e Navbar

Existe atualmente um pequeno desalinhamento visual entre:

```text
.sidebar__brand
```

e:

```text
header
```

A causa está relacionada às estratégias dimensionais diferentes:

```text
sidebar__brand
→ padding

header
→ height: 4rem
```

Isso **não é considerado erro da Sidebar**.

A correção será analisada durante a construção da Navbar, quando seu espaçamento e alinhamento forem definidos.

---

## Sidebar ainda sem ícones

Ainda não foram implementados:

- ícones;
- estado ativo;
- `hover`;
- `focus-visible`;
- estados visuais;
- modificadores BEM.

Esses itens pertencem à próxima etapa.

---

## Links ainda são placeholders

Atualmente:

```html
href="#"
```

Na futura integração com Flask deverão ser substituídos por rotas reais utilizando `url_for()` e Blueprints.

---

# 10. O que ainda não foi implementado

Ainda estão pendentes:

- Navbar completa;
- Sidebar com ícones;
- estados de navegação;
- Breadcrumb;
- Dashboard;
- Cards;
- KPIs;
- Alertas;
- Toasts;
- Badges;
- Botões;
- Formulários;
- Tabelas;
- CRUD;
- Modais;
- Offcanvas;
- Login;
- Cadastro;
- Perfil;
- Configurações;
- responsividade completa;
- JavaScript;
- integração com Flask;
- reconstrução com Bootstrap.

---

# 11. Próxima Etapa Oficial

## Fase 1.2.4 — Sidebar: Ícones e Estados de Navegação

### Objetivo

Evoluir a Sidebar estrutural para uma navegação visualmente completa.

### Conteúdo previsto

- Bootstrap Icons;
- ícone + texto;
- alinhamento dos ícones;
- estado ativo;
- `:hover`;
- `:focus-visible`;
- modificadores BEM;
- feedback visual;
- acessibilidade básica.

### Conceitos a revisar

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
→ navegação por teclado
→ semântica de links
```

---

# 12. Condição para Encerramento da Próxima Etapa

A Fase 1.2.4 somente será considerada concluída após:

1. implementação;
2. validação visual;
3. revisão do CSS;
4. revisão da arquitetura;
5. revisão da semântica;
6. verificação dos estados de interação;
7. atualização da documentação.

---

# 13. Documentação Oficial

O projeto possui três documentos oficiais:

```text
CONTEXTO_PROJETO.md
ESTADO_ATUAL.md
FRONTEND_ROADMAP.md
```

Responsabilidades:

```text
CONTEXTO_PROJETO.md
→ arquitetura e regras permanentes

ESTADO_ATUAL.md
→ situação concreta do projeto

FRONTEND_ROADMAP.md
→ roadmap + diário + base de conhecimento
```

Os documentos não devem duplicar desnecessariamente suas informações.

---

# 14. Status Resumido

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

**Estado atual oficial:**

> O Layout Base está estruturado e a Sidebar possui sua primeira implementação estrutural validada. O projeto está pronto para iniciar a introdução de ícones e estados de navegação na Fase 1.2.4.
