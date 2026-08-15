# CONTEXTO_PROJETO.md

# Template Flask

## 1. Identificação do Projeto

**Nome:** Template Flask

**Finalidade:** Construção de um template administrativo/financeiro reutilizável para sistemas desenvolvidos com Flask.

O projeto será desenvolvido inicialmente utilizando exclusivamente:

- HTML5
- CSS3
- JavaScript moderno (ES2023+)

Após a conclusão da primeira implementação, o mesmo projeto será reconstruído utilizando Bootstrap 5.3+, permitindo comparar a implementação manual com as abstrações fornecidas pelo framework.

---

# 2. Objetivo do Projeto

O objetivo é criar uma base de interfaces administrativas modernas, profissionais, organizadas e responsivas que possa ser reutilizada em futuros sistemas Flask.

O projeto não tem como objetivo formar um desenvolvedor Front-end generalista.

O foco é desenvolver competência prática para construção de interfaces administrativas aplicáveis a sistemas como:

- LicenSys;
- Sistema Financeiro;
- Sistema Pericial;
- Controle Patrimonial;
- Controle de Processos;
- outros sistemas administrativos desenvolvidos posteriormente em Flask.

O template deverá servir como uma base visual e estrutural reutilizável.

---

# 3. Escopo

O projeto contemplará, entre outros:

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
- Perfil do Usuário;
- Configurações;
- integração visual de gráficos;
- componentes reutilizáveis.

O escopo poderá ser ampliado quando houver necessidade real de um componente adicional.

---

# 4. Filosofia do Projeto

A construção será orientada para aplicações administrativas e não para sites institucionais, landing pages ou desenvolvimento Front-end generalista.

A prioridade será:

1. clareza;
2. organização;
3. reutilização;
4. manutenção;
5. responsividade;
6. acessibilidade;
7. integração futura com Flask;
8. simplicidade.

Serão evitados:

- aprofundamentos desnecessários em Design;
- animações complexas;
- dependências desnecessárias;
- frameworks Front-end pesados;
- complexidade prematura.

---

# 5. Metodologia de Desenvolvimento e Ensino

O projeto também funciona como ambiente de aprendizagem.

O usuário possui conhecimento inicial de HTML/CSS, mas pouca experiência prática com CSS Grid e Flexbox. Portanto, a construção deve ser guiada progressivamente.

Cada etapa deverá seguir, sempre que aplicável:

1. Objetivo
2. Conceitos
3. Análise Visual
4. Implementação
5. Explicação
6. Alternativas
7. Conexão com Flask
8. Fixação
9. Resumo

A etapa somente será considerada concluída após implementação e revisão.

Antes de implementar um componente, deverá ser apresentada sua especificação visual e técnica.

Quando apropriado, a especificação deverá utilizar referências objetivas como:

```text
body
→ Inter
→ 1rem
→ weight 400
→ line-height 1.5
```

Isso facilita a implementação e a revisão.

---

# 6. Princípios de Ensino

O ensino deve responder, sempre que possível:

- O que estamos construindo?
- Por que estamos construindo dessa maneira?
- Onde isso será utilizado?
- Como isso será integrado posteriormente ao Flask?

O objetivo não é estudar HTML, CSS e JavaScript isoladamente, mas aprender sua aplicação na construção de uma interface administrativa completa.

A relação com Flask deve ser explicada progressivamente, incluindo:

- Jinja2;
- templates;
- static;
- Blueprints;
- herança de templates;
- `base.html`;
- componentes reutilizáveis;
- macros;
- formulários;
- Flash Messages;
- renderização dinâmica;
- `url_for()`.

A integração não precisa ser implementada imediatamente quando o objetivo da etapa for exclusivamente Front-end.

---

# 7. Estratégia de Implementação

## Primeira implementação

O sistema será construído sem Bootstrap.

Tecnologias:

- HTML5;
- CSS3;
- JavaScript ES2023+.

Não serão utilizadas bibliotecas JavaScript, salvo quando forem indispensáveis para demonstrar determinado componente ou quando solicitadas.

O objetivo é compreender como os componentes funcionam por baixo do capô.

## Segunda implementação

Após a conclusão do sistema em HTML/CSS/JavaScript puro, o mesmo projeto será reconstruído utilizando Bootstrap 5.3+.

Objetivos da comparação:

- identificar o que o Bootstrap abstrai;
- conhecer seus componentes;
- compreender suas convenções;
- avaliar quando utilizar Bootstrap;
- avaliar quando criar componentes próprios;
- compreender a migração de CSS puro para Bootstrap.

---

# 8. Arquitetura de Pastas

Estrutura inicial consolidada:

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

A estrutura poderá evoluir conforme novos componentes e páginas forem introduzidos.

---

# 9. Arquitetura CSS

A organização do CSS utiliza uma abordagem pragmática inspirada em ITCSS.

Estrutura:

```text
css/
├── base/
├── layout/
├── components/
├── pages/
└── main.css
```

Responsabilidades:

## `base/`

Fundamentos globais:

- reset;
- variáveis;
- tipografia.

## `layout/`

Estrutura geral da aplicação:

- Grid principal;
- áreas estruturais;
- dimensionamento global;
- organização do layout.

## `components/`

Componentes reutilizáveis:

- Sidebar;
- Navbar;
- Cards;
- Alerts;
- Modals;
- etc.

## `pages/`

Regras específicas de páginas quando forem realmente necessárias.

## `main.css`

Ponto de entrada e responsável por importar os arquivos CSS na ordem definida.

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

A ordem poderá evoluir conforme a arquitetura crescer.

---

# 10. BEM

O projeto utiliza BEM de forma pragmática.

BEM não será aplicado de maneira rígida quando isso gerar complexidade desnecessária.

Estrutura conceitual:

```text
Block
Block__element
Block--modifier
```

Exemplo já adotado:

```text
sidebar
sidebar__brand
sidebar__nav
sidebar__section
sidebar__section-title
sidebar__link
sidebar__footer
```

Modificadores serão introduzidos quando houver necessidade real de representar estados ou variações.

Exemplo futuro:

```text
sidebar__link--active
```

---

# 11. Grid e Flexbox

CSS Grid e Flexbox são tecnologias centrais do projeto.

A escolha deve considerar o problema que está sendo resolvido.

## Grid

Preferencialmente utilizado para estruturas bidimensionais do layout.

Exemplo atual:

```text
.app

→ display: grid
→ grid-template-columns: 240px 1fr
→ min-height: 100vh
```

Responsabilidade:

```text
Sidebar
+
Área principal
```

## Flexbox

Utilizado para distribuição e alinhamento em uma dimensão.

Exemplo atual:

```text
.app__content

→ display: flex
→ flex-direction: column
→ min-width: 0
```

Outro exemplo:

```text
.sidebar

→ display: flex
→ flex-direction: column
```

E:

```text
.sidebar__footer

→ margin-top: auto
```

O projeto evita utilizar Flexbox ou Grid quando o fluxo normal do HTML já resolve adequadamente o problema.

---

# 12. Design System

A identidade visual deverá permanecer única durante todo o projeto.

Características:

- moderna;
- limpa;
- profissional;
- minimalista;
- corporativa;
- voltada para sistemas administrativos.

---

# 13. Paleta de Cores

Tokens atualmente definidos:

```css
--color-primary: #2563EB;
--color-primary-hover: #1D4ED8;
--color-sucess: #16A34A;
--color-warning: #F59E0B;
--color-error: #DC2626;
--color-background: #F8FAFC;
--color-surface: #FFFFFF;
--color-border: #E5E7EB;
--color-text-primary: #111827;
--color-text-secondary: #6B7280;
--color-text-white: #FFFFFF;
```

Os tokens existentes devem ser reutilizados antes da criação de novos valores.

Observação: o token atualmente existente para sucesso utiliza o nome `--color-sucess`. Essa nomenclatura faz parte do estado atual e não deve ser alterada sem uma decisão específica de refatoração.

---

# 14. Espaçamento

A escala de espaçamento utiliza `rem`.

Escala consolidada:

```text
--space-1
→ 0.25rem

--space-2
→ 0.5rem

--space-3
→ 0.75rem

--space-4
→ 1rem

--space-5
→ 1.25rem

--space-6
→ 1.5rem

--space-8
→ 2rem

--space-10
→ 2.5rem

--space-12
→ 3rem

--space-16
→ 4rem
```

A escala deve ser utilizada preferencialmente em componentes.

---

# 15. Tipografia

A identidade tipográfica definida utiliza Inter.

Escala consolidada:

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

Pesos definidos:

```text
400 → Regular
500 → Medium
600 → Semibold
700 → Bold
```

---

# 16. Ícones

A biblioteca definida para os componentes de interface é:

**Bootstrap Icons**

A introdução dos ícones ocorrerá progressivamente.

A primeira utilização prevista está na Sidebar, onde os links serão posteriormente apresentados como:

```text
[ícone] Dashboard
[ícone] Empresas
[ícone] Licenças
[ícone] Relatórios
```

---

# 17. Responsividade

A interface será construída com comportamento responsivo para:

- Desktop;
- Notebook;
- Tablet;
- Smartphone.

A estratégia inicial é Desktop First.

A responsividade será implementada progressivamente e não deverá antecipar complexidade nas etapas estruturais.

---

# 18. Integração futura com Flask

A interface está sendo construída de maneira compatível com futura integração em Flask.

A estrutura futura esperada poderá utilizar:

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

A estrutura atual em HTML estático será posteriormente convertida para templates Jinja2.

Os links atualmente utilizados como:

```html
href="#"
```

são placeholders.

Na integração com Flask, deverão ser substituídos por rotas reais, normalmente utilizando:

```jinja2
{{ url_for(...) }}
```

e Blueprints.

---

# 19. Regras Arquiteturais

1. Não adicionar complexidade sem necessidade.
2. Não duplicar responsabilidades de layout.
3. Utilizar Design Tokens existentes sempre que possível.
4. Evitar valores arbitrários quando houver token adequado.
5. Separar Layout de Componentes.
6. Utilizar HTML semântico.
7. Utilizar BEM de forma pragmática.
8. Utilizar Grid e Flexbox conforme o problema.
9. Não utilizar Flexbox ou Grid apenas porque são disponíveis quando o fluxo normal do HTML já resolve o problema.
10. Componentes reutilizáveis devem possuir responsabilidade clara.
11. Não antecipar responsividade, JavaScript ou estados quando a etapa atual não exigir.
12. Validar cada etapa antes de avançar.
13. Mudanças arquiteturais devem ser explicitamente discutidas e consolidadas.
14. O template deve permanecer reutilizável para futuros sistemas Flask.
15. O aprendizado deve permanecer orientado à aplicação prática.

---

# 20. Regras Documentais

O projeto utiliza três documentos oficiais:

```text
CONTEXTO_PROJETO.md
ESTADO_ATUAL.md
FRONTEND_ROADMAP.md
```

Cada documento possui uma responsabilidade específica.

## `CONTEXTO_PROJETO.md`

Registra:

- propósito;
- arquitetura;
- princípios;
- metodologia;
- convenções;
- decisões permanentes.

Não deve registrar detalhadamente cada microetapa.

## `ESTADO_ATUAL.md`

Registra:

- situação concreta do projeto;
- arquivos existentes;
- componentes implementados;
- etapa atual;
- próxima etapa;
- pendências;
- decisões recentes.

## `FRONTEND_ROADMAP.md`

Funciona como:

- roadmap;
- diário de aprendizagem;
- base de conhecimento.

Registra:

- etapas concluídas;
- etapa atual;
- próximas etapas;
- conceitos aprendidos;
- padrões adotados;
- componentes;
- boas práticas;
- decisões relevantes para a evolução.

Os três documentos não devem duplicar desnecessariamente informações.

---

# 21. Processo de Validação

Uma etapa somente poderá ser considerada concluída quando:

1. a implementação tiver sido realizada;
2. o resultado visual tiver sido verificado;
3. o código tiver sido revisado;
4. a arquitetura tiver sido verificada;
5. a metodologia tiver sido respeitada;
6. eventuais pendências relevantes tiverem sido resolvidas ou explicitamente registradas.

Somente depois disso o projeto poderá avançar para a próxima etapa.

---

# 22. Estado Arquitetural Consolidado até o momento

O projeto já possui uma fundação funcional composta por:

```text
HTML
↓
main.css
↓
base
↓
layout
↓
components
```

O Layout Base utiliza:

```text
CSS Grid
+
Flexbox
```

A Sidebar já está estruturada como componente reutilizável.

A arquitetura atual não utiliza Bootstrap.

A implementação continua sendo feita em HTML5 e CSS3 puro, com JavaScript reservado para futuras necessidades comportamentais.

---

# 23. Diretriz de Evolução

O projeto deverá evoluir por camadas:

```text
Fundamentos
↓
Layout
↓
Componentes
↓
Estados
↓
Páginas
↓
Integração
↓
Bootstrap
```

Cada camada deverá ser compreendida e validada antes de receber complexidade adicional.

A prioridade é construir uma base sólida que possa ser reutilizada nos futuros sistemas Flask, mantendo simultaneamente o valor didático do projeto.

---

# 24. Próxima Diretriz

A próxima etapa prevista é:

**Fase 1.2.4 — Sidebar: Ícones e Estados de Navegação**

O objetivo será introduzir:

- Bootstrap Icons;
- ícone + texto;
- estados de navegação;
- `:hover`;
- `:focus-visible`;
- estado ativo;
- modificadores BEM;
- feedback visual;
- acessibilidade básica.

Essa etapa somente deverá ser iniciada após a manutenção deste contexto como referência arquitetural.
