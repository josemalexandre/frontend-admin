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

As Fases 8 e 9 continuam pertencendo ao projeto, mas ficam fora do denominador do progresso principal.

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
Fase 8 → Bootstrap
Fase 9 → Consolidação final + Flask/Jinja
```

A ordem final foi definida para que o Template seja concluído primeiro em sua implementação visual Vanilla, depois reconstruído/adaptado com Bootstrap e somente então integrado ao Flask/Jinja.

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

---

# 6. Fase 2 — Layout

**Status:** ✅ Concluída

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

---

# 7. Fase 3 — Dashboard

**Status:** ✅ Concluída

## Objetivo

Construir a primeira tela de conteúdo do Template utilizando o Layout Base e os componentes já consolidados.

### Escopo

- Cards;
- KPIs;
- gráficos;
- alertas;
- organização do conteúdo do Dashboard.

### Resultado

```text
Dashboard
├── KPIs
├── Cards
├── Gráfico
└── Alert
```

### Validações

- desktop;
- smartphone;
- organização responsiva;
- ausência de overflow horizontal relevante;
- utilização dos Design Tokens;
- componentes estruturados com BEM.

---

# 8. Fase 4 — Formulários

**Status:** ✅ Concluída

## Objetivo

Construir os componentes de formulário do Template de forma reutilizável, acessível e consistente com o Design System.

### Escopo

- Inputs;
- Selects;
- Checkboxes;
- Radio Buttons;
- Upload de Arquivos;
- estados de formulário;
- validação visual.

### Resultado

```text
Formulários
├── Inputs
├── Selects
├── Checkboxes
├── Radio Buttons
├── Upload de Arquivos
├── Estados
└── Validação
```

### Validações

- campos obrigatórios;
- `minlength`;
- `maxlength`;
- estados de foco;
- estados desabilitados;
- estados de erro;
- estados de sucesso;
- `:user-valid`;
- `:user-invalid`;
- responsividade;
- interação dos controles;
- acessibilidade e semântica;
- ausência de overflow horizontal relevante.

### Conceitos consolidados

- associação entre `label` e controles por `for`/`id`;
- agrupamento semântico com `fieldset` e `legend`;
- agrupamento de Radio Buttons por `name`;
- validação nativa do HTML;
- diferença entre `:valid`/`:invalid` e `:user-valid`/`:user-invalid`;
- separação entre validação de entrada, estado visual e regra de negócio;
- utilização de CSS para representar estados sem introduzir JavaScript desnecessário.

### Componentes consolidados

```text
form
├── form__group
├── form__radio
├── form__message
└── form__actions
```

### Arquivos

```text
assets/css/components/form.css
pages/forms.html
```

A página `forms.html` possui finalidade de demonstração e laboratório dos componentes.

---

# 9. Fase 5 — CRUD

**Status:** ▶ Próxima

## Objetivo

Construir os elementos necessários para telas de consulta, pesquisa e manutenção de registros.

### Escopo

- Tabelas;
- Pesquisa;
- Filtros;
- Paginação;
- ações;
- estados vazios;
- mensagens de resultado.

A Fase 5 deverá utilizar os componentes e padrões consolidados nas fases anteriores.

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

### Objetivo arquitetural

Concluir a versão Vanilla do Template com páginas compostas e coerentes, utilizando os componentes desenvolvidos nas fases anteriores.

Ao final desta fase, a versão visual em HTML5 + CSS3 + JavaScript puro deverá estar suficientemente consolidada para servir de referência para a implementação Bootstrap.

---

# 12. Fase 8 — Bootstrap

**Status:** ⏳ Planejada

## Objetivo

Reconstruir/adaptar a versão visual consolidada do Template utilizando Bootstrap 5.3+, sem perder a estrutura conceitual e semântica já validada.

### Estratégia

A implementação partirá da versão Vanilla existente.

O processo será:

```text
componente Vanilla
↓
análise das responsabilidades
↓
classes/componentes Bootstrap adequados
↓
adaptação do HTML
↓
CSS próprio complementar, quando necessário
↓
validação
↓
comparação com Vanilla
```

### Escopo

- Layout;
- componentes;
- formulários;
- tabelas;
- botões;
- estados;
- responsividade;
- utilitários;
- componentes Bootstrap pertinentes;
- comparação de manutenção e produtividade;
- definição do que continuará como CSS próprio.

### Resultado esperado

Duas implementações comparáveis:

```text
Template Flask — Vanilla
        ↕
Template Flask — Bootstrap
```

O objetivo não é criar um projeto independente do zero, mas produzir uma segunda implementação do mesmo template.

---

# 13. Fase 9 — Consolidação final + Flask/Jinja

**Status:** ⏳ Planejada

## Objetivo

Consolidar a versão final do Template e transformá-la em uma base efetivamente reutilizável para aplicações Flask.

### Primeira etapa — Consolidação

Antes da integração dinâmica:

- comparar as versões Vanilla e Bootstrap;
- revisar organização;
- revisar componentes;
- definir a versão de referência para os sistemas reais;
- consolidar padrões;
- identificar e eliminar inconsistências residuais.

### Segunda etapa — Flask/Jinja

Somente após a consolidação visual:

- `base.html`;
- herança de templates;
- `block`;
- includes;
- macros quando justificadas;
- organização de `templates/`;
- organização de `static/`;
- `url_for()`;
- renderização dinâmica;
- integração com Blueprints;
- integração de dados nos componentes;
- formulários e mensagens quando aplicável.

### Resultado esperado

```text
Template visual consolidado
        ↓
Flask/Jinja
        ↓
Template Flask integrado
        ↓
base reutilizável para aplicações reais
```

A etapa Flask/Jinja não deverá reabrir decisões visuais já consolidadas sem necessidade técnica.

---

# 14. Transição para aplicações reais

Depois da conclusão da Fase 9, o Template estará preparado para servir como base de sistemas reais.

Fluxo:

```text
Template Flask
      ↓
adaptação ao domínio
      ↓
regras de negócio
      ↓
dados
      ↓
aplicação real
```

Exemplos de sistemas que poderão utilizar a base:

- LicenSys;
- Sistema Financeiro;
- Sistema Pericial;
- Controle Patrimonial;
- Controle de Processos;
- outros sistemas Flask.

O Template não deverá incorporar regras de negócio específicas desses sistemas.

---

# 15. Histórico dos principais marcos

```text
Fase 0
→ identidade visual definida                         ✅

Fase 1.0
→ estrutura inicial criada                           ✅

Fase 1.1
→ Design System Base consolidado                     ✅

Fase 1.2
→ Layout Base completo e validado                    ✅

Fase 2
→ Layout responsivo e interativo validado            ✅

Fase 3
→ Dashboard com KPIs, Cards, gráfico e Alert         ✅

Fase 4
→ Formulários, estados e validação consolidados      ✅
```

---

# 16. Próximo marco

**Fase 5 — CRUD**

Objetivo imediato:

> construir os elementos necessários para telas de consulta e manutenção de registros, incluindo tabelas, pesquisa, filtros, paginação, ações, estados vazios e mensagens de resultado.

---

# 17. Progresso geral

**60%**

O indicador considera as Fases 0 a 7.

As Fases 8 e 9 continuam no escopo do projeto, mas não participam do denominador do progresso principal.

O percentual não é calculado pela simples quantidade de tarefas ou arquivos concluídos; considera o peso relativo das partes do produto e o estágio efetivo de implementação.

A conclusão da Fase 4 elevou o progresso estimado de 50% para 60%, considerando a relevância dos componentes de formulário e o ciclo completo de implementação, validação e revisão realizado.

---

# 18. Diretriz de ordem das etapas finais

A ordem estabelecida é:

```text
Fases 5–7
→ conclusão da versão Vanilla

Fase 8
→ Bootstrap

Fase 9
→ consolidação final + Flask/Jinja

Depois
→ aplicação real
```

Essa ordem evita integrar Flask/Jinja enquanto a camada visual ainda está em evolução e permite que o Template seja comparado em duas implementações antes de receber a camada dinâmica.

