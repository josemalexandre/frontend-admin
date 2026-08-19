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

Principais entregas:

- identidade visual;
- paleta;
- tipografia;
- biblioteca de ícones;
- diretrizes de responsividade;
- definição do estilo visual.

## 5. Fase 1 — Fundação

**Status:** 🟡 Em andamento

### 1.0 — Estrutura Inicial

**Status:** ✅ Concluída

Entrega:

- estrutura inicial do projeto;
- organização de `assets`;
- `index.html`;
- `main.css`.

### 1.1 — Design System Base

**Status:** ✅ Concluída

Etapas:

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
1.2.1 → Estrutura Visual do Layout Base       ✅
1.2.2 → Dimensões e Superfícies               ✅
1.2.3 → Sidebar: Estrutura e Navegação        ✅
1.2.4 → Sidebar: Ícones e Estados             ✅
1.2.5 → Navbar: Estrutura e Layout             ✅
1.2.6 → Consolidação da Área Principal         ▶ Próxima
```

## 6. Próxima etapa

### Fase 1.2.6 — Consolidação da Área Principal

**Status:** ▶ Próxima

**Objetivo:**

Preparar a área principal para receber o conteúdo das futuras telas administrativas.

**Próximo marco:**

```text
main
↓
estrutura de conteúdo
↓
hierarquia de página
↓
Breadcrumb
↓
Dashboard
```

## 7. Fases futuras

### Fase 2 — Layout

- Sidebar consolidada;
- Navbar consolidada;
- área principal;
- Breadcrumb;
- responsividade estrutural.

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

## 8. Histórico resumido

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
```

## 9. Progresso geral

**20%**

Estimativa sobre o escopo completo do projeto.

O percentual será reavaliado ao final de cada etapa e não representa simplesmente a proporção de etapas concluídas.
