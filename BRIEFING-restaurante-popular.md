# BRIEFING — Projeto 02B: Tempero da Vila — Comida caseira (restaurante do dia a dia)

## 0. Contexto (leia primeiro)

Este é um site demonstrativo para o portfólio de um serviço de criação de sites. Ele será mostrado a donos de restaurantes comuns: self-service, prato feito, almoço executivo e marmitex. **É o perfil de cliente mais numeroso do Brasil, e o objetivo do site é um só: gerar pedidos.**

- O portfólio já tem uma padaria (creme e terracota, elegante) e um restaurante de alto padrão (escuro e imersivo). **Este precisa ser diferente dos dois**: claro, alegre, direto e prático.
- O dono desse tipo de restaurante quer receber mais pedidos no WhatsApp e no delivery. Ele não quer um site conceitual. Cada seção precisa empurrar para o pedido.
- Conteúdo generalizável, que sirva para qualquer restaurante desse tipo. **Não mostre preços.**
- Fora do escopo: backend, carrinho, pagamento, integração real com iFood e depoimentos ou avaliações.

## 1. Prioridades (em caso de conflito, siga esta ordem)

1. Clareza e conversão no celular: a pessoa entende em 3 segundos o que tem hoje e como pedir.
2. Acessibilidade WCAG 2.2 AA. O público inclui pessoas mais velhas, então use fonte grande e contraste alto.
3. Desempenho: Lighthouse mobile ≥ 90. Muita gente vai abrir no 4G, na hora do almoço.
4. Código organizado, com todos os dados em `src/data/site.ts`.

## 2. A marca

**Tempero da Vila — Comida caseira.** Restaurante de bairro que serve almoço de segunda a sábado: pratos executivos, marmitex para entrega e retirada, e feijoada aos sábados. Comida farta, tempero de casa e atendimento rápido.

Público: trabalhadores da região, famílias e quem pede marmita no escritório.

Tom de voz: simpático, direto e informal na medida certa. Frases curtas. Nada de linguagem de restaurante chique e nada de clichês genéricos.

## 3. Identidade visual

### Paleta (clara e vibrante)

| Uso | Cor |
|---|---|
| Fundo principal (off-white quente) | `#FFFBF3` |
| Fundo de seções alternadas (amarelo bem claro) | `#FFF1CC` |
| Texto principal | `#1F2A1F` |
| Verde da marca: botões e títulos | `#2E6B3A` |
| Vermelho tomate: destaques e selos ("Hoje!") | `#C2412D` |
| Mostarda: detalhes decorativos, sem texto | `#E8A33D` |

Verifique o contraste de todas as combinações. Texto branco sobre o verde e sobre o vermelho precisa passar 4,5:1.

### Tipografia

- Títulos: **Bricolage Grotesque**, em pesos fortes. Tem personalidade sem ser infantil.
- Texto: **Nunito Sans**, com corpo mínimo de 17px no celular.

### Direção

- Visual de restaurante de bairro bem cuidado: fotos de comida apetitosas, bem iluminadas e de perto.
- Bordas arredondadas generosas e pequenos selos ou etiquetas ("Hoje", "Sábado").
- Pode ter uma textura ou ilustração simples de fundo, como um padrão leve de azulejo ou de toalha xadrez, em opacidade baixa.
- Hierarquia muito clara. Nada de layout editorial ou assimétrico: aqui vence a objetividade.

## 4. Plano de animação (leve e funcional)

Use CSS com IntersectionObserver. Use **Motion** só se for realmente necessário.

1. **Entrada do hero:** o prato principal entra com um leve giro e escala, e os selos aparecem em seguida.
2. **Abas do cardápio:** transição suave entre as categorias, com o indicador da aba ativa deslizando.
3. **Cartões:** sobem 4px e a foto ganha um zoom leve no hover.
4. **Barra fixa de pedido no celular:** desliza de baixo para cima depois que a pessoa passa do hero.
5. **Revelação na rolagem:** só fade simples, sem exagero.

Regras:

- `prefers-reduced-motion` deixa tudo estático.
- Anime só `transform` e `opacity`.
- Nenhuma animação pode atrasar o acesso ao botão de pedido.

## 5. Estrutura (one-page)

### 5.1 Cabeçalho

- Logo textual "Tempero da Vila".
- Menu: Cardápio · Marmitex · Como pedir · Onde estamos.
- Botão verde "Pedir agora".
- Menu mobile acessível.

### 5.2 Hero

- Título direto, na linha de "Almoço caseiro de verdade, todo dia." (escreva o seu).
- Destaque visual para o horário: "Seg a sáb · 11h às 15h".
- Botões: "Pedir pelo WhatsApp" (principal) e "Ver cardápio".
- Foto grande de um prato feito bem servido.

### 5.3 Cardápio da semana (elemento-assinatura)

- Faixa com os 6 dias (segunda a sábado) e o prato do dia de cada um. O sábado é a feijoada.
- O dia atual fica destacado automaticamente com o selo "Hoje", usando a data do navegador.
- Domingo mostra "Fechado hoje — volte segunda!".
- Os pratos ficam em `site.ts`, para facilitar a troca semanal.

### 5.4 Cardápio

- Abas: Pratos executivos · Grelhados · Porções · Bebidas · Sobremesas.
- Cartões com foto (em parte dos itens), nome e descrição curta. **Sem preço.**
- Inclua a observação "Acompanha arroz, feijão, salada e guarnição do dia" onde fizer sentido.

### 5.5 Marmitex

- Bloco de destaque: tamanhos (P, M, G, só com os nomes e sem preço) e opções de entrega e retirada.
- Botão "Pedir marmitex pelo WhatsApp" com mensagem pré-preenchida.

### 5.6 Como pedir

Três passos com ícones Lucide:

1. Escolha o prato.
2. Chame no WhatsApp ou peça pelo app de delivery.
3. Receba ou retire.

Tenha um botão de WhatsApp e um botão para o delivery (`deliveryUrl` em `site.ts`). Se o `deliveryUrl` estiver vazio, esconda o botão de delivery.

### 5.7 Onde estamos

- Endereço fictício marcado como demonstrativo.
- Tabela de horários.
- Bloco no lugar do mapa (sem embed).
- Formas de pagamento aceitas, com ícones genéricos e sem logos de marcas.

### 5.8 Rodapé

- Logo, links e redes com `aria-disabled` e a etiqueta "demonstrativo".
- Crédito do portfólio: "Site demonstrativo criado por [NOME] — quer um site assim para o seu restaurante? [Fale comigo]", com link para `creatorWhatsapp`.

### 5.9 Barra fixa de pedido (só no celular)

- Botão fixo no rodapé da tela, "Pedir pelo WhatsApp", que aparece depois do hero.
- Não pode cobrir conteúdo: reserve um padding inferior.
- Precisa ser acessível e ter boa área de toque.

## 6. Configuração centralizada (`src/data/site.ts`)

Todos os dados ficam nesse arquivo: textos, cardápio da semana, cardápio, horários, endereço, redes e pagamentos.

```ts
export const contact = {
  whatsappNumber: "",   // 5531999999999 — preencher antes de publicar
  whatsappMessage: "Olá! Gostaria de fazer um pedido.",
  marmitexMessage: "Olá! Quero pedir uma marmitex. Tamanho: , prato: , endereço: ",
  deliveryUrl: "",      // link do restaurante no app de delivery, se houver
  creatorName: "",
  creatorWhatsapp: "",
};
```

Se `whatsappNumber` estiver vazio, use `https://wa.me/?text=...`. Nunca invente números.

## 7. Imagens

- Busque e baixe as fotos no Pexels ou no Unsplash. Se houver `PEXELS_API_KEY` ou `UNSPLASH_ACCESS_KEY` no `.env`, use a API oficial. Nunca invente URLs.
- Priorize **comida brasileira caseira**: arroz e feijão, prato feito, feijoada, bife acebolado, frango grelhado, marmita.
- **Abra cada imagem para conferir.** Rejeite fotos de comida estrangeira que destoem (sushi, hambúrguer gourmet), fotos escuras ou fotos com marca d'água.
- Arquivos: `hero.jpg`, `feijoada.jpg`, `prato-executivo.jpg`, `grelhado.jpg`, `porcao.jpg`, `marmitex.jpg`, `sobremesa.jpg` e `ambiente.jpg`.
- Se não achar uma foto adequada para algum item, use um placeholder e avise no relatório.
- Registre os créditos em `CREDITS.md`.

**Otimização desde o início:**

- WebP em 2 tamanhos (800 e 1600px), com `srcset`/`sizes`.
- `fetchpriority="high"` na foto do hero.
- `loading="lazy"` no resto, com `width` e `height` definidos.
- Pré-carregar a fonte dos títulos.

## 8. Stack

- React, TypeScript, Vite, Tailwind CSS e Lucide React. Motion só se for indispensável.
- Deploy na Vercel, na raiz.

## 9. Acessibilidade e SEO

- HTML semântico, um único `h1` e link "Pular para o conteúdo".
- As abas do cardápio seguem o padrão ARIA de tabs, com navegação por setas.
- Foco visível, alvos de toque de pelo menos 44px, zoom de 200% e telas de 320px sem rolagem horizontal.
- `lang="pt-BR"`.
- `title`, `meta description`, Open Graph, favicon em SVG e JSON-LD do tipo `Restaurant` com `openingHours`.

## 10. Como trabalhar

1. Inspecione a pasta.
2. Apresente o plano: componentes, direção visual e lista de imagens.
3. Implemente seção por seção, com textos finais em português brasileiro.
4. Rode `tsc --noEmit`, lint e build, e corrija o que aparecer.
5. Relatório final:
   - Arquivos criados.
   - O que precisa ser preenchido.
   - Imagens faltantes.
   - O que não foi possível testar visualmente.

Não afirme que fez testes visuais se não os executou.
