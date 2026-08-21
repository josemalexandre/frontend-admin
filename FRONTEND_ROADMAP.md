# Template Flask — Frontend Roadmap

## 1. Objetivo

Registrar de forma objetiva o **cronograma de desenvolvimento** do Template Flask.

O documento responde principalmente a três perguntas:

```text
Onde estamos?
↓
O que já foi concluído?
↓
Qual é o próximo passo?
```

Detalhes de arquitetura permanecem no `CONTEXTO_PROJETO.md`.

Detalhes do estado concreto permanecem no `ESTADO_ATUAL.md`.

## 2. Metodologia de progresso

Uma etapa só passa para **concluída** após:

- implementação;
- validação;
- revisão técnica/arquitetural;
- documentação.

Ao final de cada etapa será informado o percentual estimado de progresso geral do projeto.

## 3. Cronograma geral

```text
Fase 0 → Identidade Visual
Fase 1 → Fundação
Fase 2 → Layout
Fase 3 → Dashboard
Fase 4 → Formulários
Fase 5 → CRUD
Fase 6 → Componentes
Fase 7 → Telas
Fase 8 → Refatoração e preparação para Flask
Fase 9 → Bootstrap
```

## 4. Fase 0 — Identidade Visual

**Status:** ✅ Concluída

## 5. Fase 1 — Fundação

**Status:** 🟡 Em andamento

### 1.0 — Estrutura Inicial

**Status:** ✅ Concluída

### 1.1 — Design System Base

**Status:** ✅ Concluída

```text
1.1.1 → Variáveis CSS       ✅
1.1.2 → Espaçamento         ✅
1.1.3 → Tipografia          ✅
1.1.4 → Reset CSS           ✅
1.1.5 → main.css            ✅
```

### 1.2 — Primeiro HTML e Layout Base

**Status:** 🟡 Em andamento

```text
1.2.1 → Estrutura Visual do Layout Base        ✅
1.2.2 → Dimensões e Superfícies                ✅
1.2.3 → Sidebar: Estrutura e Navegação         ✅
1.2.4 → Sidebar: Ícones e Estados              ✅
1.2.5 → Navbar: Estrutura e Layout             ✅
1.2.6 → Consolidação da Área Principal         ✅
1.2.7 → Estrutura de Conteúdo da Página        ✅
1.2.8 → Próxima etapa                           ▶
```

## 6. Fase 1.2.7 — Estrutura de Conteúdo da Página

**Status:** ✅ Concluída

Marco concluído:

```text
main
↓
Breadcrumb
↓
Page Header
↓
Page Content
```

A etapa consolidou a estrutura semântica e a separação de responsabilidades entre:

```text
Breadcrumb
→ localização do usuário

Page Header
→ identificação da página e futuras ações

Page Content
→ conteúdo específico da página
```

Também foram consolidados os componentes:

```text
breadcrumb.css
page-header.css
```

O `page-content` permaneceu sem CSS próprio por não possuir ainda uma necessidade visual específica.

## 7. Próxima etapa oficial

### Fase 1.2.8

**Status:** ▶ Próxima

**Objetivo:**

Continuar a consolidação do Layout Base antes de iniciar a construção dos componentes de conteúdo do Dashboard.

A etapa deverá ser definida e detalhada antes da implementação, seguindo a metodologia do projeto.

## 8. Fases futuras

### Fase 2 — Layout

- consolidação estrutural;
- responsividade;
- ajustes gerais de layout.

### Fase 3 — Dashboard

- Cards;
- KPIs;
- gráficos;
- alertas.

### Fase 4 — Formulários

- Inputs;
- Selects;
- Checkboxes;
- Radio Buttons;
- Upload.

### Fase 5 — CRUD

- Tabelas;
- Pesquisa;
- Filtros;
- Paginação;
- Ações.

### Fase 6 — Componentes

- Modais;
- Offcanvas;
- Toasts;
- Badges;
- Dropdowns;
- Wizards.

### Fase 7 — Telas

- Login;
- Recuperação de senha;
- Cadastro;
- Perfil;
- Configurações;
- Estados de erro.

### Fase 8 — Refatoração e preparação para Flask

- Componentização final;
- organização final;
- templates;
- static;
- Jinja2;
- Blueprints.

### Fase 9 — Bootstrap

- reconstrução com Bootstrap 5.3+;
- comparação com CSS puro;
- análise das abstrações;
- CSS próprio x Bootstrap.

## 9. Histórico resumido

```text
Fase 0
→ identidade visual definida

Fase 1.0
→ estrutura inicial criada

Fase 1.1
→ Design System Base consolidado

Fase 1.2.1
→ estrutura do Layout Base criada

Fase 1.2.2
→ dimensões e superfícies consolidadas

Fase 1.2.3
→ Sidebar estruturada

Fase 1.2.4
→ ícones e estados da Sidebar implementados

Fase 1.2.5
→ Navbar estruturada e alinhada à Sidebar

Fase 1.2.6
→ área principal consolidada

Fase 1.2.7
→ Breadcrumb, Page Header e Page Content estruturados
```

## 10. Progresso geral

**22%**

Estimativa sobre o escopo completo do projeto.

O percentual considera o peso relativo da fundação já consolidada e o volume ainda restante de Dashboard, formulários, CRUD, componentes, telas, preparação para Flask e reconstrução com Bootstrap.

O percentual não representa simplesmente a proporção de etapas concluídas.
