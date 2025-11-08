PROJETO: Padaria do Bairro - Estrutura HTML Inicial


OBJETIVO:
Desenvolver a primeira página web, focando na estrutura semântica HTML5, hierarquia de títulos e organização de conteúdo textual (parágrafos e listas) para a Padaria do Bairro. Este é o alicerce do website.

ESTRUTURA DO PROJETO:
/Padaria_do_Bairro/
├── index.html       (O arquivo principal da página)
└── README.txt       (Este arquivo de documentação)
└── [Screenshot.png] (Captura de tela da validação HTML - a ser adicionada)

ARQUIVO: index.html

1. ESTRUTURA SEMÂNTICA (HTML5):
   - O documento utiliza a declaração `<!DOCTYPE html>` e a tag principal `<html lang="pt-BR">` para garantir um documento HTML5 válido e acessível.
   - Foram implementadas as principais tags semânticas para dividir o conteúdo:
     - `<header>`: Contém o título principal da página (`<h1>`).
     - `<main>`: Abriga todo o conteúdo único da página, dividido em seções.
     - `<footer>`: Inclui informações de direitos autorais e localização.

2. META TAGS E ACESSIBILIDADE:
   - Foram adicionadas meta tags essenciais (`charset`, `viewport`).
   - Meta tags descritivas (`description` e `keywords`) foram configuradas para SEO (Search Engine Optimization).
   - O `<title>` da página é descritivo e relevante.

3. HIERARQUIA DE TÍTULOS E CONTEÚDO (Atividade 2):
   - A hierarquia de títulos foi respeitada: `<h1>` (título principal) é seguido por `<h2>` (títulos de seção) e `<h3>` (subseções, como "Nossa História").
   - O conteúdo foi dividido em seções lógicas (`<section>`): "Sobre Nós", "Nossos Produtos", "Diferenciais" e "Localização e Horários".
   - Os parágrafos (`<p>`) são utilizados para apresentar o conteúdo textual de forma clara.

4. ORGANIZAÇÃO COM LISTAS (Atividade 3):
   - **Lista Não-Ordenada (`<ul>`):** Utilizada para listar itens onde a ordem não é relevante (e.g., Produtos Mais Vendidos e Diferenciais).
   - **Lista Ordenada (`<ol>`):** Utilizada para listar itens onde a ordem é sequencial e importante (e.g., Horários de Funcionamento).

PRÓXIMOS PASSOS:
1. Validação do `index.html` no W3C Validator e inclusão do screenshot (Atividade 4).
2. Desenvolvimento do CSS (`styles.css`) para estilizar a página.
3. Adição de interatividade com JavaScript (`script.js`).

OBJETIVO:
Enriquecer a página inicial da Padaria do Bairro (index.html) com elementos visuais e dados estruturados, como tabelas semânticas, galeria de imagens de produtos e ambiente, e conteúdo multimídia (vídeo).

ESTRUTURA DO PROJETO:
/padaria-do-bairro/
├── index.html       (Arquivo principal atualizado)
├── css/             (Pasta futura para estilos CSS)
├── js/              (Pasta futura para scripts JavaScript)
├── images/          (Pasta para todas as imagens)
│   ├── produtos/    (Imagens de pães, bolos, etc.)
│   ├── ambiente/    (Imagens da fachada, interior)
│   └── equipe/      (Imagens do processo/equipe)
└── README.txt       (Este arquivo de documentação atualizado)

____________________________________________________________________________
NOVAS FUNCIONALIDADES E MELHORIAS (Prática 2)
____________________________________________________________________________

1. ESTRUTURA SEMÂNTICA DE TABELAS (Atividade 1):
   - **Cardápio e Preços:** Implementada uma tabela (`<table>`) completa com `<thead>` (cabeçalho) e `<tbody>` (corpo) para listar produtos e preços.
   - **Horários Detalhados:** Adicionada uma segunda tabela para organizar o horário de funcionamento semanal de forma clara.
   - **Acessibilidade:** Utilizado `<caption>` para título e `<th>` com atributo `scope` para definir cabeçalhos de coluna e linha, melhorando a leitura por leitores de ecrã.

2. GALERIA DE IMAGENS (Atividade 2):
   - Incluídas 6 imagens na página, divididas nas seções "Nosso Ambiente e Equipe" e "Nossas Delícias".
   - **Acessibilidade Crítica:** Todas as tags `<img>` possuem o atributo `alt` (texto alternativo) preenchido com descrições relevantes para garantir a acessibilidade e o SEO.
   - **Organização:** As imagens estão organizadas em pastas temáticas (`images/produtos/`, `images/ambiente/`, etc.), seguindo a estrutura de pastas recomendada.

3. CONTEÚDO MULTIMÍDIA (Atividade 3):
   - **Vídeo Institucional:** Um vídeo demonstrativo foi incorporado através de um `<iframe>` (utilizando o YouTube como fonte), o que assegura maior compatibilidade e otimização de carregamento.
   - **Atributos:** Foram configurados atributos de dimensão e permissões (`allowfullscreen`) para garantir a correta visualização e interação do vídeo.

4. ORGANIZAÇÃO GERAL:
   - A estrutura de pastas foi definida para ser escalável (incluindo `css/` e `js/` para futuras implementações).
   - O código HTML foi atualizado para referenciar corretamente os caminhos das novas mídias.

PRÓXIMOS PASSOS:
1. Validação final do `index.html`.
2. Desenvolvimento do CSS (`styles.css`) para estilizar a página e as novas mídias.
3. Adição de interatividade com JavaScript (`script.js`).

======================================================
PROJETO: Padaria do Bairro - Interatividade e Formulários
======================================================

OBJETIVO:
Implementar canais de comunicação direta com o cliente através de quatro formulários HTML5 estruturados, semânticos e acessíveis, separados em arquivos HTML dedicados para organizar o fluxo de trabalho e a navegação.

ESTRUTURA DO PROJETO (Atualizada):
/padaria-do-bairro/
├── index.html       (Página principal e navegação)
├── contato.html     (Formulário de Contato Geral)
├── pedidos.html     (Formulário de Pedidos Especiais/Encomendas)
├── feedback.html    (Formulário de Feedback e Avaliação)
├── cadastro.html    (Formulário de Cadastro/Newsletter)
├── css/             (Pasta futura para estilos CSS)
├── js/              (Pasta futura para scripts JavaScript)
├── images/          (Pasta para todas as imagens)
└── README.txt       (Este arquivo de documentação - Versão 3.0)

____________________________________________________________________________
NOVAS FUNCIONALIDADES E MELHORIAS (Prática 3)
___________________________________________________________________________

1. ESTRUTURA DE MÚLTIPLAS PÁGINAS:
   - O projeto foi expandido para incluir quatro páginas HTML dedicadas a formulários, melhorando a organização e o fluxo de navegação.
   - O arquivo 'index.html' foi atualizado com uma seção de links para acessar estes novos formulários.

2. SEMÂNTICA DE FORMULÁRIOS E ACESSIBILIDADE:
   - Todos os formulários usam a tag `<form>` com os atributos `action` e `method` definidos.
   - O agrupamento lógico dos campos é garantido pelo uso de `<fieldset>` e `<legend>`, o que melhora a acessibilidade e a usabilidade (UX).
   - **Acessibilidade Crítica:** Todas as entradas de dados (`<input>`, `<select>`, `<textarea>`) estão devidamente associadas às suas descrições visuais através das tags `<label>` e dos atributos `for`/`id`.

3. TIPOS DE INPUT E VALIDAÇÃO HTML5:
   - Foram implementados diversos tipos de `input` específicos (e.g., `email`, `tel`, `date`, `number`).
   - A validação básica é feita no lado do cliente usando:
     - `required`: Campos obrigatórios.
     - `type="email"`: Validação de formato de e-mail.
     - `pattern`: Definição de formatos esperados (e.g., para CEP e telefone).
     - `minlength` e `min`: Restrições de tamanho/valor.
   - Foram usados `radio buttons` para seleção única (Avaliação, Tipo de Produto) e `checkboxes` para seleções múltiplas e aceitação de termos.

4. DETALHE DOS FORMULÁRIOS:

   - **contato.html:** Foco em comunicação geral, utilizando `<select>` para Assunto.
   - **pedidos.html:** Foco em dados estruturados de encomenda, utilizando `input type="date"` e `input type="number"`.
   - **feedback.html:** Foco em coleta de opinião, utilizando `radio buttons` para um sistema de rating simples.
   - **cadastro.html:** Foco em dados pessoais e endereço, com uso de `pattern` para CEP e `checkboxes` obrigatórios (`required`).

PRÓXIMOS PASSOS:
1. Validação final de todas as páginas HTML.
2. Desenvolvimento do CSS (`styles.css`) para estilizar e dar um design profissional aos formulários e à navegação.
3. Adição de interatividade/funcionalidade com JavaScript (`script.js`).
======================================================
PROJETO: Padaria do Bairro - Estilização com CSS
======================================================

OBJETIVO:
Aplicar uma identidade visual coesa e profissional ao site da Padaria do Bairro, utilizando um arquivo CSS externo. O foco está na criação de uma experiência acolhedora, tipografia legível, organização de layout e interatividade.

ESTRUTURA DO PROJETO (Atualizada):
/padaria-do-bairro/
├── index.html       (Página principal e navegação)
├── contato.html     (Formulário de Contato)
├── pedidos.html     (Formulário de Pedidos)
├── feedback.html    (Formulário de Feedback)
├── cadastro.html    (Formulário de Cadastro)
├── css/
│   └── style.css    (Arquivo principal de estilização)
├── images/          
├── videos/
└── README.txt       (Este arquivo de documentação - Versão 4.0)

_____________________________________________________
NOVAS FUNCIONALIDADES E MELHORIAS (Prática 4)
_____________________________________________________

1. IDENTIDADE VISUAL E VARIÁVEIS CSS:
   - **Paleta de Cores:** Definida com tons terrosos (Sienna - cor primária) e Dourado (cor secundária/destaque), transmitindo tradição e calor.
   - **Variáveis:** Utilização de `:root` para declarar variáveis CSS (e.g., `--cor-primaria`, `--fonte-titulo`), garantindo a consistência e facilitando futuras modificações na identidade visual.
   - **Contraste:** As cores de fundo claro e texto escuro garantem legibilidade e bom contraste para acessibilidade.

2. TIPOGRAFIA E HIERARQUIA:
   - **Fontes:** Seleção de fontes legíveis (serifada para corpo, sans-serif para títulos).
   - **Hierarquia:** Estilização diferenciada para `h1`, `h2` e `h3` para estabelecer uma hierarquia visual clara. `h2` utiliza uma borda de destaque para separação de seções.

3. LAYOUT E ORGANIZAÇÃO ESPACIAL:
   - **Container Central:** Implementação de uma classe `.container` com `max-width` e `margin: 0 auto` para centralizar o conteúdo e evitar que ele se estenda por telas muito largas.
   - **Espaçamento:** Uso de `padding` e `margin` consistentes (`--espacamento-secao`) para criar "respiro" entre os blocos (`<section>`, `header`, `footer`), melhorando a escaneabilidade da página.

4. ESTILIZAÇÃO DE ELEMENTOS ESPECÍFICOS:
   - **Tabelas:** Estilizadas com cabeçalhos de cor sólida e zebra-striping (`tbody tr:nth-of-type(even)`) para facilitar a leitura dos dados.
   - **Galeria:** Uso de `flexbox` na classe `.galeria` para organizar imagens e aplicação de efeitos de `hover` (`transform: scale`) para interatividade sutil.

5. INTERATIVIDADE E ACESSIBILIDADE VISUAL:
   - **Links e Botões:** Aplicação de transições suaves (`transition: 0.3s`) para mudanças de cor no `a:hover`.
   - **Formulários:** Uso da pseudo-classe `:focus` para destacar campos ativos com uma borda colorida e sombra suave, fornecendo feedback visual imediato ao usuário.
   - **Botões de Envio:** Design atrativo com cor primária e efeito `transform: translateY(1px)` no estado `:active` para simular o clique.

PRÓXIMOS PASSOS:
1. Validação final de todo o código HTML e CSS.
2. Adição de interatividade e lógica com JavaScript (`script.js`).
3. Adaptação do layout para dispositivos móveis (Responsividade).

__________________________________________

Prática 5

Foram feits novas implementações dentro do site existente da padaria.

VALORES E IDENTIDADE VISUAL:
O design utiliza uma paleta de cores baseada em tons terrosos (Sienna e Dourado) para transmitir tradição, qualidade e aconchego.

ESTRUTURA DO PROJETO:
/padaria-do-bairro/
├── index.html       (Página principal e navegação)
├── contato.html     (Formulário de Contato)
├── pedidos.html     (Formulário de Pedidos Especiais)
├── feedback.html    (Formulário de Feedback e Avaliação)
├── cadastro.html    (Formulário de Cadastro/Newsletter)
├── css/
│   ├── reset.css    (Reinicialização de estilos padrão do navegador)
│   └── style.css    (Estilização principal e regras de layout)
├── js/
│   └── script.js    (Interatividade básica)
├── imagens/         (Pasta com logo, ambiente e produtos)
└── videos/          (Pasta com vídeos locais e referências de iframe)
└── README.txt       (Este arquivo de documentação)

------------------------------------------------------
FUNCIONALIDADES IMPLEMENTADAS
------------------------------------------------------

1. ESTRUTURA E SEMÂNTICA (HTML5):
   - Uso de tags semânticas (header, main, footer, section).
   - Implementação de tabelas de dados estruturadas (Cardápio e Horários).
   - Inclusão de multimídia: galeria de imagens (ambiente e produtos) e vídeo institucional (iframe/local).

2. ESTILIZAÇÃO E LAYOUT (CSS):
   - **Modularidade:** Separação do `reset.css` e uso de variáveis CSS (`:root`) no `style.css`.
   - **Layout Profissional:** Centralização do conteúdo principal via `.container`.
   - **Cabeçalho:** Implementação de layout Flexbox para posicionar a logo à esquerda e manter o título centralizado.
   - **Galerias:** Estilização uniforme das galerias com `display: flex` para alinhamento horizontal, espaçamento consistente e efeitos de `hover`.
   - **Hierarquia:** Uso coeso de `h1`, `h2` e `h3` com cores e tamanhos apropriados.

3. FORMULÁRIOS E ACESSIBILIDADE:
   - Criação de quatro formulários dedicados, utilizando campos HTML5 específicos (`email`, `tel`, `date`, `number`).
   - Uso de `<fieldset>` e `<legend>` para agrupamento lógico.
   - **Acessibilidade:** Uso de tags `<label>` associadas aos inputs e validações básicas via atributos HTML5 (`required`, `pattern`).

4. INTERATIVIDADE BÁSICA (JAVASCRIPT):
   - Inclusão de `script.js` para manipulação do DOM.
   - **Funcionalidade:** Atualização automática do ano no rodapé.
   - **Feedback:** Simulação de envio de formulário com uma mensagem de alerta para o usuário.

------------------------------------------------------
PRÓXIMOS PASSOS SUGERIDOS
------------------------------------------------------
1. Responsividade: Adaptar o layout para diferentes tamanhos de tela (Mobile-First).
2. Otimização de Performance: Compressão de imagens e minificação de CSS/JS.
3. Tratamento de Erros: Implementar validação de formulário mais robusta com JavaScript.

___________________________________________________________________________

Prática 7

PROJETO: Padaria do Bairro - Website Profissional e Responsivo

Foram feits novas implementações dentro do site existente da padaria.

OBJETIVO GERAL:
Desenvolver um site completo, funcional, acessível e otimizado para a Padaria do Bairro, aplicando as melhores práticas de HTML5 Semântico [cite: 2727][cite_start], CSS3 (incluindo Box Model, Flexbox, Grid e Posicionamento) [cite: 3230][cite_start], e JavaScript para interatividade e lógica de negócio (Calculadora e Eventos DOM)[cite: 3417].

ESTRUTURA COMPLETA DO PROJETO:
/padaria-do-bairro/
├── index.html       (Página principal e todo o conteúdo estático/dinâmico)
├── contato.html     (Formulário de Contato Geral) [cite: 3001]
├── pedidos.html     (Formulário de Pedidos Especiais/Encomendas) [cite: 3001]
├── feedback.html    (Formulário de Feedback e Avaliação) [cite: 3001]
├── cadastro.html    (Formulário de Cadastro/Newsletter) [cite: 3001]
├── css/
│   ├── reset.css    (Reinicialização de estilos padrão do navegador)
│   └── style.css    (Estilização, variáveis CSS, layout Flexbox/Grid e Responsividade) [cite: 6344, 6368]
├── js/
│   └── script.js    (Interatividade DOM: Menu Off-Canvas, Modal, Eventos de Formulário)
├── imagens/         (Logo, ambiente, produtos, etc.) [cite: 6322]
└── videos/          (Vídeos locais e referências de iframe)
└── README.txt       (Este arquivo de documentação)

1. CSS GRID (Layout Bidimensional)
   - Uso: Ideal para estruturar áreas principais da página (layout macro).
   - Implementação:
      - Seção Hero (#hero): Utilizada para criar um layout assimétrico (e.g., 2/3 para texto e 1/3 para imagem).
      - Seção Contato (#contato): Grade de 2 colunas para alinhar informações de contato e o formulário lado a lado no desktop.
      - Galeria de Produtos: O layout muda de Flexbox para Grid em resoluções maiores para definir colunas explícitas (e.g., 3 colunas no desktop).

2. FLEXBOX (Layout Unidimensional)
   - Uso: Ideal para alinhamento de componentes internos e distribuição de espaço (layout micro).
   - Implementação:
      - Cabeçalho (#cabecalho-principal): Uso de `display: flex`, `align-items: center` e `justify-content: space-between` para garantir que o logo, título e menu fiquem alinhados horizontalmente e distribuam o espaço de forma inteligente.
      - Cards de Depoimentos: Uso de `flex-wrap: wrap` para quebrar os cards para a próxima linha em telas menores, mantendo-os alinhados e centralizados.

3. RESPONSIVIDADE (Mobile-First)
   - Estratégia: O design e o CSS base (`style.css`) são construídos focando no mobile (tela mais estreita).
   - Breakpoints: O layout se adapta em resoluções específicas (e.g., `max-width: 768px` para empilhamento, `min-width: 1200px` para layout de tela larga), alterando dinamicamente `grid-template-columns` e `flex-direction`.
