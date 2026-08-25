# Template Flask — FRONTEND ROADMAP

## 1. Objetivo

Registrar de forma objetiva o **cronograma de desenvolvimento** do Template Flask.

O documento responde:

```text
Onde estamos?
↓
O que já foi concluído?
↓
Qual é o próximo marco?
```

Detalhes de arquitetura permanecem no `CONTEXTO_PROJETO.md`.

Detalhes da implementação atual permanecem no `ESTADO_ATUAL.md`.

O roadmap não deve reproduzir esses documentos.

---

## 2. Metodologia de progresso

Uma etapa ou fase somente é considerada concluída após:

- implementação;
- validação;
- revisão técnica/arquitetural;
- documentação correspondente.

Novas microetapas somente devem ser criadas quando houver necessidade real de desenvolvimento.

**Não criar etapas artificiais apenas para manter a numeração.**

O percentual geral é uma estimativa ponderada pelo escopo e pela relevância das partes concluídas.

Para o indicador principal de desenvolvimento, o cálculo considera as **Fases 0 a 7**.

As Fases 8 e 9 continuam pertencendo ao projeto, mas ficam fora do denominador do progresso principal por representarem, respectivamente, preparação/integração com Flask e reconstrução comparativa com Bootstrap.

---

# 3. Cronograma Geral

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

---

# 4. Fase 0 — Identidade Visual

**Status:** ✅ Concluída

---

# 5. Fase 1 — Fundação

**Status:** ✅ Concluída

## 1.0 — Estrutura Inicial

**Status:** ✅ Concluída

## 1.1 — Design System Base

**Status:** ✅ Concluída

```text
1.1.1 → Variáveis CSS       ✅
1.1.2 → Espaçamento         ✅
1.1.3 → Tipografia          ✅
1.1.4 → Reset CSS           ✅
1.1.5 → main.css            ✅
```

## 1.2 — Primeiro HTML e Layout Base

**Status:** ✅ Concluída

```text
1.2.1 → Estrutura Visual do Layout Base        ✅
1.2.2 → Dimensões e Superfícies                ✅
1.2.3 → Sidebar: Estrutura e Navegação         ✅
1.2.4 → Sidebar: Ícones e Estados              ✅
1.2.5 → Navbar: Estrutura e Layout             ✅
1.2.6 → Consolidação da Área Principal         ✅
1.2.7 → Estrutura de Conteúdo da Página        ✅
1.2.8 → Espaçamento e Ritmo Vertical            ✅
1.2.9 → Container de Conteúdo                  ✅
```

### Marco de encerramento da Fase 1.2

O Layout Base atingiu o nível necessário para receber os componentes reais do template.

Não serão criadas novas microetapas estruturais antes da evolução para a Fase 2.

---

# 6. Fase 2 — Layout

**Status:** ▶ Próxima

## Objetivo

Evoluir o Layout Base já consolidado para comportamento real em diferentes tamanhos de tela.

### Escopo

- responsividade;
- comportamento da Sidebar;
- comportamento da área principal;
- breakpoints;
- adaptação para tablet;
- adaptação para smartphone;
- preservação da usabilidade.

A Fase 2 deverá trabalhar sobre a estrutura existente, sem recriar o Layout Base.

---

# 7. Fase 3 — Dashboard

**Status:** ⏳ Planejada

### Escopo

- Cards;
- KPIs;
- gráficos;
- alertas;
- organização do conteúdo do Dashboard.

---

# 8. Fase 4 — Formulários

**Status:** ⏳ Planejada

### Escopo

- Inputs;
- Selects;
- Checkboxes;
- Radio Buttons;
- Upload de Arquivos;
- estados de formulário;
- validação visual.

---

# 9. Fase 5 — CRUD

**Status:** ⏳ Planejada

### Escopo

- Tabelas;
- Pesquisa;
- Filtros;
- Paginação;
- ações;
- estados vazios;
- mensagens de resultado.

---

# 10. Fase 6 — Componentes

**Status:** ⏳ Planejada

### Escopo

- Modais;
- Offcanvas;
- Toasts;
- Badges;
- Dropdowns;
- Wizards;
- outros componentes reutilizáveis necessários.

---

# 11. Fase 7 — Telas

**Status:** ⏳ Planejada

### Escopo

- Login;
- Recuperação de senha;
- Cadastro;
- Perfil;
- Configurações;
- estados de erro;
- estados vazios.

---

# 12. Fase 8 — Refatoração e preparação para Flask

**Status:** ⏳ Planejada

### Escopo

- componentização final;
- organização final;
- templates;
- static;
- Jinja2;
- `base.html`;
- includes;
- macros;
- integração com Blueprints;
- `url_for()`.

**Observação:** permanece no projeto, mas não entra no cálculo do progresso principal.

---

# 13. Fase 9 — Bootstrap

**Status:** ⏳ Planejada

### Escopo

- reconstrução com Bootstrap 5.3+;
- comparação com CSS puro;
- componentes;
- abstrações;
- produtividade;
- manutenção;
- CSS próprio × Bootstrap.

**Observação:** permanece no projeto, mas não entra no cálculo do progresso principal.

---

# 14. Histórico dos principais marcos

```text
Fase 0
→ identidade visual definida                         ✅

Fase 1.0
→ estrutura inicial criada                           ✅

Fase 1.1
→ Design System Base consolidado                     ✅

Fase 1.2
→ Layout Base completo e validado                    ✅
```

---

# 15. Próximo marco

**Fase 2 — Layout**

Objetivo imediato:

> tornar o Layout Base já consolidado adaptável a diferentes tamanhos de tela, sem recriar sua estrutura.

---

# 16. Progresso geral

**25%**

O indicador considera as Fases 0 a 7.

As Fases 8 e 9 continuam no escopo do projeto, mas não participam do denominador do progresso principal.

O percentual não é calculado pela simples quantidade de tarefas ou arquivos concluídos; considera o peso relativo das partes do produto e o estágio efetivo de implementação.
