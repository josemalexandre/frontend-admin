# FRONTEND_ROADMAP.md

# Projeto

**Template Administrativo para Sistemas Flask**

---

# Objetivo Geral

Construir um template administrativo moderno, reutilizável e responsivo
utilizando:

- HTML5
- CSS3
- JavaScript (ES2023+)

Após a conclusão, reconstruiremos todo o projeto utilizando Bootstrap
5.3+, comparando cada abstração com a implementação em código puro.

O objetivo é criar uma base reutilizável para sistemas Flask como:

- LicenSys
- Sistema Financeiro
- Sistema Pericial
- Controle Patrimonial
- Controle de Processos
- futuros sistemas administrativos

---

# Metodologia

Cada etapa seguirá a sequência:

1. Objetivo
2. Conceitos
3. Análise Visual
4. Implementação
5. Explicação
6. Alternativas
7. Conexão com Flask
8. Fixação
9. Resumo

Avançaremos para a próxima etapa apenas após a validação da etapa atual.

Durante as implementações práticas, o código será construído de forma
guiada: primeiro será apresentada a especificação da implementação,
depois o usuário implementará e enviará o resultado para revisão.

---

# Arquitetura do Projeto

## Fase 0 --- Identidade Visual

- [x] Visão geral
- [x] Layouts principais
- [x] Componentes
- [x] Paleta de cores
- [x] Tipografia
- [x] Ícones
- [x] Responsividade

**Status:** concluída e aprovada.

### Identidade Visual Consolidada

- Estilo moderno, minimalista, corporativo e atemporal.
- Interface voltada para sistemas administrativos.
- Tema inicial claro.
- Abordagem Desktop First, com responsividade para notebook, tablet e smartphone.
- Tipografia principal: Inter.
- Biblioteca de ícones definida: Bootstrap Icons.
- Paleta visual enxuta, baseada em azul primário, neutros e cores semânticas.

### Paleta Principal

- Primária: `#2563EB`
- Primária Hover: `#1D4ED8`
- Sucesso: `#16A34A`
- Atenção: `#F59E0B`
- Erro: `#DC2626`
- Fundo: `#F8FAFC`
- Superfície: `#FFFFFF`
- Borda: `#E5E7EB`
- Texto principal: `#111827`
- Texto secundário: `#6B7280`
- Branco: `#FFFFFF`

---

## Fase 1 --- Fundação

### Etapa 1.0 --- Estrutura inicial

- [x] Estrutura de pastas
- [x] `index.html` criado como arquivo inicial
- [x] `assets/css/base/`
- [x] `assets/css/components/`
- [x] `assets/css/layout/`
- [x] `assets/css/pages/`
- [x] `assets/js/`
- [x] `assets/images/`
- [x] `assets/icons/`
- [x] `assets/fonts/`
- [x] `pages/`

**Status:** concluída e aprovada.

### Etapa 1.1 --- Design System Base

- [x] Variáveis CSS
- [x] Escala de espaçamento
- [x] Tipografia
- [x] Reset CSS
- [x] `main.css`

**Status:** concluída e aprovada.

### Etapa 1.1.1 --- Variáveis CSS

Foram definidos tokens para:

- cores;
- estados semânticos;
- fundo e superfície;
- bordas;
- textos.

### Etapa 1.1.2 --- Escala de espaçamento

Escala adotada com `rem`:

- `--space-1: 0.25rem`
- `--space-2: 0.5rem`
- `--space-3: 0.75rem`
- `--space-4: 1rem`
- `--space-5: 1.25rem`
- `--space-6: 1.5rem`
- `--space-8: 2rem`
- `--space-10: 2.5rem`
- `--space-12: 3rem`
- `--space-16: 4rem`

A variável `--space-7` foi avaliada e não faz parte da escala oficial.

### Etapa 1.1.3 --- Tipografia

Escala tipográfica consolidada:

- `body` → Inter → `1rem` → weight `400` → line-height `1.5`
- `h1` → `2rem` → weight `700` → line-height `1.2`
- `h2` → `1.5rem` → weight `600` → line-height `1.2`
- `h3` → `1.25rem` → weight `600` → line-height `1.2`
- `h4` → `1.125rem` → weight `600` → line-height `1.2`
- `.text-small` → `0.875rem` → line-height `1.5`
- `.text-caption` → `0.75rem` → line-height `1.5`

Pesos adotados:

- `400` --- Regular
- `500` --- Medium
- `600` --- Semibold
- `700` --- Bold

Line-heights iniciais:

- `1.2` --- títulos
- `1.5` --- texto comum
- `1.6` --- textos mais longos, quando necessário

### Etapa 1.1.4 --- Reset CSS

Reset inicial consolidado para:

- `box-sizing: border-box`;
- margem do `body`;
- margens de títulos e parágrafos;
- listas;
- herança de fonte em controles de formulário;
- comportamento básico de imagens.

Não foi adotado `scroll-behavior: smooth` globalmente.

### Etapa 1.1.5 --- `main.css`

`main.css` foi definido como ponto de entrada do CSS e importa, nesta ordem:

1. `reset.css`
2. `variables.css`
3. `typography.css`

**Status:** concluída e revisada.

---

## Etapa 1.2 --- Primeiro HTML e Layout Base

- [ ] Estrutura semântica inicial do `index.html`
- [ ] Conexão do HTML com `main.css`
- [ ] Validação visual da fundação
- [ ] Estrutura inicial do Layout Base
- [ ] Preparação para Sidebar e Navbar

**Status:** próxima etapa oficial.

---

## Fase 2 --- Layout

- [ ] Sidebar
- [ ] Navbar
- [ ] Área principal
- [ ] Breadcrumb

## Fase 3 --- Dashboard

- [ ] Cards
- [ ] KPIs
- [ ] Gráficos (integração visual)
- [ ] Alertas

## Fase 4 --- Formulários

- [ ] Inputs
- [ ] Selects
- [ ] Checkboxes
- [ ] Radios
- [ ] Upload

## Fase 5 --- CRUD

- [ ] Tabelas
- [ ] Pesquisa
- [ ] Filtros
- [ ] Paginação
- [ ] Ações

## Fase 6 --- Componentes

- [ ] Modais
- [ ] Offcanvas
- [ ] Toasts
- [ ] Badges
- [ ] Dropdowns
- [ ] Wizards

## Fase 7 --- Telas

- [ ] Login
- [ ] Recuperação de senha
- [ ] Cadastro
- [ ] Perfil
- [ ] Configurações
- [ ] Estados de erro

## Fase 8 --- Refatoração

- [ ] Componentização
- [ ] Organização final
- [ ] Preparação para Flask

## Fase 9 --- Bootstrap

- [ ] Migração completa
- [ ] Comparação entre abordagens
- [ ] Ajustes finais

---

# Diário de Aprendizagem

## Etapas Concluídas

### Fase 0 --- Identidade Visual

Foi definida e aprovada a identidade visual do template:

- estilo moderno, minimalista e corporativo;
- paleta de cores;
- tipografia;
- biblioteca de ícones;
- estratégia de responsividade;
- referência visual para dashboards, CRUDs e formulários.

### Fase 1.1 --- Design System Base

Foram aprendidos e implementados:

- CSS Custom Properties;
- Design Tokens;
- escala de espaçamento;
- unidades `rem`;
- escala tipográfica;
- `font-weight`;
- `line-height`;
- herança de propriedades CSS;
- Reset CSS;
- `box-sizing: border-box`;
- `font: inherit`;
- `@import`;
- caminhos relativos em CSS;
- organização do `main.css`.

---

# Padrões do Projeto

- HTML semântico.
- CSS organizado por responsabilidade.
- JavaScript modular e objetivo.
- Componentes reutilizáveis.
- Layout preparado para Jinja2.
- Estrutura compatível com Flask.
- Design Tokens centralizados em `variables.css`.
- Reset controlado, evitando regras desnecessárias.
- Uso de `rem` para espaçamento e tipografia.
- `main.css` como ponto de entrada do CSS.
- Componentes serão construídos de forma incremental e revisados antes do avanço.

---

# Arquitetura CSS

O projeto adotará uma abordagem pragmática combinando conceitos de diferentes metodologias.

## ITCSS --- princípios adotados

Serão utilizados principalmente:

- organização por camadas;
- separação entre fundamentos, layout, componentes e páginas;
- regras gerais antes das específicas;
- controle de especificidade;
- organização do CSS do mais geral para o mais específico.

A estrutura atual é:

```text
css/
├── base/
├── layout/
├── components/
├── pages/
└── main.css
```

Não será adotada uma implementação rígida de todas as camadas formais do ITCSS quando isso adicionar complexidade sem benefício para o projeto.

## BEM --- uso pragmático

BEM será utilizado principalmente para nomenclatura de componentes reutilizáveis:

- Blocks;
- Elements;
- Modifiers.

Exemplo conceitual:

```text
card
card__header
card__body
card--highlight
```

BEM será utilizado como orientação de nomenclatura, sem impedir soluções mais simples quando elas forem mais claras.

---

# Convenções

## CSS

- Variáveis CSS para tema e Design Tokens.
- Flexbox e Grid quando apropriados.
- Classes reutilizáveis.
- Nomenclatura consistente.
- Princípios de ITCSS.
- BEM pragmático para componentes.
- Evitar valores arbitrários quando existir um token adequado.
- Evitar complexidade prematura.

## JavaScript

- ES2023+
- Sem dependências desnecessárias.
- Separação por responsabilidade.
- JavaScript utilizado apenas quando agregar comportamento à interface.

## HTML

- HTML5 semântico.
- Estrutura preparada para futura conversão em templates Jinja2.
- Separação entre conteúdo, apresentação e comportamento.

---

# Integração futura com Flask

Cada componente será posteriormente convertido para:

- `templates/`
- `static/css/`
- `static/js/`
- `includes/`
- `macros/`
- `base.html`

A estrutura está sendo construída desde o início para minimizar retrabalho durante a migração.

---

# Boas práticas

- Reutilização acima de duplicação.
- Responsividade desde o início.
- Organização antes da complexidade.
- Componentes independentes.
- Código limpo e comentado apenas quando necessário.
- Não assumir componentes, atributos ou regras sem necessidade.
- Validar cada etapa antes de avançar.
- Priorizar clareza e manutenção futura.
- Evitar decisões prematuras de implementação.
- Manter a identidade visual consistente em todo o template.

---

# Status Atual

**Fase 0 --- Identidade Visual:** concluída.

**Fase 1.0 --- Estrutura inicial:** concluída.

**Fase 1.1 --- Design System Base:** concluída.

**Fase 1.1.5 --- `main.css`:** concluída e validada.

**Fase 1.2 --- Primeiro HTML e Layout Base:** próxima etapa oficial.

---

# Próxima Etapa

**Fase 1.2 --- Primeiro HTML e Layout Base**

## Objetivo

Criar o primeiro `index.html` funcional, conectar o documento ao `main.css` e validar no navegador a fundação construída nas etapas anteriores.

A etapa também iniciará a estrutura semântica do Layout Base que posteriormente receberá:

- Sidebar;
- Navbar;
- Área principal;
- Breadcrumb;
- conteúdo das páginas.

## Conceitos a revisar antes de continuar

- Estrutura básica de um documento HTML5.
- `<!DOCTYPE html>`.
- `<html lang="pt-BR">`.
- `<head>` e `<body>`.
- `<meta charset="UTF-8">`.
- `<meta name="viewport">`.
- `<title>`.
- `<link rel="stylesheet">`.
- Caminhos relativos.
- Elementos semânticos HTML5.
- Relação entre HTML e CSS.
- Herança CSS.
- CSS Custom Properties.
- `rem`.
- `box-sizing`.
