# Template Flask — ESTADO ATUAL

## 1. Estado Geral

**Projeto:** Template Flask

**Objetivo:** template administrativo/financeiro reutilizável para futuros sistemas Flask.

**Implementação atual:** HTML5 + CSS3 + JavaScript ES2023+ puro.

**Bootstrap CSS:** não utilizado.

**Ícones:** Bootstrap Icons.

**JavaScript:** utilizado no comportamento responsivo da Sidebar.

---

## 2. Fase Atual

**Fase 1 — Fundação:** concluída.

**Fase 2 — Layout:** concluída, revisada e validada.

**Fase 3 — Dashboard:** concluída, revisada e validada.

**Fase 4 — Formulários:** concluída, revisada e validada.

**Próxima fase:** Fase 5 — CRUD.

---

## 3. Estrutura Atual

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
│   │   ├── fonts
│   │   ├── icons
│   │   ├── images
│   │   └── js
│   │       └── main.js
└── pages
    └── forms.html
```

---

## 4. Layout e Estrutura da Página

A estrutura geral do Template permanece:

```text
.app
├── aside.sidebar
└── .app__content
    ├── header.navbar
    └── main
        └── .page-container
            ├── nav.breadcrumb
            ├── header.page-header
            └── section.page-content
```

A página de formulários utiliza o Layout Base:

```text
.app
└── .app__content
    ├── header.navbar
    └── main
        └── .page-container
            ├── nav.breadcrumb
            ├── header.page-header
            └── section.page-content
                └── form.form
                    ├── .form__group
                    ├── .form__group
                    ├── .form__group
                    ├── .form__group
                    │   └── fieldset
                    │       ├── legend
                    │       └── .form__radio
                    ├── .form__group
                    └── .form__actions
```

---

## 5. Layout e Componentes Consolidados

### Sidebar

Status: **implementada, revisada, validada e responsiva**.

Inclui:

- Bootstrap Icons;
- estado ativo;
- `:hover`;
- `:focus-visible`;
- navegação por teclado;
- `aria-hidden="true"` nos ícones decorativos;
- comportamento mobile com abertura e fechamento via JavaScript;
- botão de fechamento;
- overlay;
- animações de abertura e fechamento.

### Navbar

Status: **implementada, revisada, validada e adaptada ao mobile**.

### Breadcrumb

Status: **implementado, revisado e validado**.

### Page Header

Status: **implementado, revisado e validado**.

### Page Content

Status: **estruturado semanticamente e validado**.

```text
.page-content
→ container lógico do conteúdo específico da página
→ sem CSS próprio
```

---

## 6. Dashboard

Status: **implementado, revisado, responsivo e validado**.

Componentes consolidados:

```text
Dashboard
├── dashboard-kpis
├── kpi
├── dashboard-cards
├── card
└── alert
```

O Dashboard contém quatro KPIs demonstrativos, dois Cards, um gráfico demonstrativo e um Alert.

O gráfico possui finalidade demonstrativa e sua biblioteca não constitui decisão tecnológica permanente.

---

## 7. Formulários

Status: **implementados, revisados, responsivos e validados**.

### Objetivo da Fase 4

Construir os primeiros componentes de formulário reutilizáveis do Template, mantendo consistência com o Design System e com o Layout Base.

### Componentes consolidados

```text
form
├── form__group
├── form__radio
├── form__message
└── form__actions
```

### Controles implementados

- Input de texto;
- Select;
- Checkbox;
- Radio Buttons;
- Upload de Arquivos.

### Acessibilidade e semântica

- `label` associado aos controles por `for` e `id`;
- Radio Buttons organizados com `fieldset` e `legend`;
- estrutura HTML semântica preservada.

### Validação nativa

```text
Razão Social
→ required

CNPJ
→ required
→ minlength="14"
→ maxlength="14"

Upload
→ accept=".pdf"
```

O `accept=".pdf"` funciona como orientação ao usuário e não substitui a validação de segurança que deverá existir futuramente no servidor.

### Estados

```text
:focus
:disabled
:user-valid
:user-invalid

.form__group--error
.form__group--success
```

### CSS

Arquivo:

```text
assets/css/components/form.css
```

Responsabilidades:

- estrutura e espaçamento dos grupos;
- labels;
- inputs;
- selects;
- checkbox;
- radio;
- upload;
- foco;
- estado desabilitado;
- estados de erro e sucesso;
- feedback visual da validação nativa.

Não existem mais as regras temporárias `:valid` e `:invalid`.

### Página de demonstração

Arquivo:

```text
pages/forms.html
```

A página serve como laboratório e demonstração dos componentes.

Ela não representa uma tela de negócio definitiva e não deverá ser utilizada como modelo para duplicação de páginas futuras.

---

## 8. `index.html`

O `index.html` permanece como referência do Layout Base.

A página `forms.html` segue o mesmo Layout Base.

A arquitetura preserva a ideia de que o Layout Base será posteriormente convertido para `base.html`, enquanto conteúdos específicos serão organizados como páginas Jinja.

---

## 9. `main.css`

É o ponto de entrada do CSS.

Ordem atual:

```text
reset.css
↓
variables.css
↓
typography.css
↓
app.css
↓
sidebar.css
↓
navbar.css
↓
breadcrumb.css
↓
page-header.css
↓
kpi.css
↓
card.css
↓
alert.css
↓
form.css
```

---

## 10. Fase 1 — Resultado Final

A Fase 1 foi concluída com:

- estrutura inicial;
- Design System Base;
- Layout Base;
- Sidebar;
- Navbar;
- área principal;
- Breadcrumb;
- Page Header;
- Page Content;
- container de conteúdo.

---

## 11. Fase 2 — Resultado Final

A Fase 2 foi concluída com:

- análise do comportamento do Application Shell em diferentes larguras;
- definição e validação do breakpoint de `640px`;
- Sidebar responsiva;
- botão de abertura da Sidebar na Navbar;
- botão de fechamento da Sidebar;
- overlay;
- abertura e fechamento controlados por JavaScript;
- fechamento pelo botão e pelo overlay;
- transições da Sidebar e do overlay;
- validação em desktop, tablet e smartphone;
- correção estrutural do overlay para que não participe do Grid;
- validação integrada de `.app`, `.app__content`, `main` e `.page-container`;
- manutenção de `.page-content` sem CSS próprio.

---

## 12. Fase 3 — Resultado Final

A Fase 3 foi concluída com:

- primeira estrutura funcional de Dashboard;
- KPIs;
- Cards;
- gráfico demonstrativo;
- Alert;
- organização visual do conteúdo;
- responsividade dos componentes;
- validação em desktop e smartphone;
- utilização dos Design Tokens;
- utilização pragmática de BEM;
- correção de dimensionamento com `min-width: 0`;
- preservação de `.page-content` sem CSS próprio.

---

## 13. Fase 4 — Resultado Final

A Fase 4 foi concluída com:

- Inputs;
- Selects;
- Checkboxes;
- Radio Buttons;
- Upload de Arquivos;
- estados de formulário;
- validação nativa do HTML;
- validação visual;
- responsividade;
- revisão técnica e arquitetural;
- revisão didática do CSS;
- utilização de Design Tokens;
- utilização pragmática de BEM;
- manutenção da separação entre apresentação, validação de entrada e regras de negócio.

### Validação

Foram validados:

- preenchimento e obrigatoriedade;
- quantidade mínima e máxima de caracteres;
- estados de foco;
- estados de erro;
- estados de sucesso;
- estados desabilitados;
- interação com Select;
- Checkbox;
- Radio Buttons;
- Upload;
- comportamento responsivo;
- ausência de overflow horizontal relevante;
- organização dos arquivos.

Não existem pendências residuais relevantes da Fase 4.

---

## 14. Pendências

- componentes das fases posteriores;
- CRUD;
- componentes adicionais;
- telas;
- integração com Flask/Jinja2;
- refatoração e preparação final para Flask;
- reconstrução comparativa com Bootstrap.

---

## 15. Próxima Fase

### Fase 5 — CRUD

Objetivo:

- construir os elementos necessários para telas de consulta e manutenção de registros;
- trabalhar Tabelas;
- Pesquisa;
- Filtros;
- Paginação;
- ações;
- estados vazios;
- mensagens de resultado.

A Fase 5 deverá utilizar o Layout Base, o Design System e os componentes consolidados nas fases anteriores.

---

## 16. Progresso Geral

**60%**

A estimativa considera o peso relativo das fases e o estado efetivo de implementação.

O projeto já possui a identidade visual, a fundação, o Layout Base responsivo, o Dashboard e os componentes fundamentais de formulário.

As Fases 8 e 9 permanecem no escopo do projeto, mas continuam fora do denominador do progresso principal.
