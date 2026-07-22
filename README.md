# Clínica Renata Amaral — Estética Avançada

Landing page institucional em Next.js (App Router) + TypeScript + Tailwind CSS +
Framer Motion, construída para converter visitantes em agendamentos pelo WhatsApp.

## Instalação

Pré-requisito: Node.js 18.18+ (recomendado 20 LTS).

```bash
npm install
```

## Rodar em desenvolvimento

```bash
npm run dev
```

Acesse http://localhost:3000

## Build de produção

```bash
npm run build
npm run start
```

## Dependências principais

| Pacote | Uso |
|---|---|
| `next` | Framework (App Router) |
| `react` / `react-dom` | UI |
| `framer-motion` | Animações, scroll reveal, mask reveal de texto |
| `lenis` | Scroll suave (smooth scroll) em toda a página |
| `lucide-react` | Ícones lineares |
| `tailwindcss` | Estilização utilitária |
| `typescript` | Tipagem |

Fontes (Playfair Display e Poppins) são carregadas via `next/font/google`
— sem dependência de CDN externo, com `font-display: swap` automático.

## Estrutura do projeto

```
src/
  app/
    layout.tsx          # metadata, JSON-LD, fontes
    page.tsx            # monta todas as seções da home
    globals.css
    icon.tsx            # favicon gerado (monograma RA)
    opengraph-image.tsx # imagem de compartilhamento gerada
    sitemap.ts
    robots.ts
    not-found.tsx        # página 404
    privacidade/page.tsx # política de privacidade
  components/            # um arquivo por seção/bloco (Header, Hero, Treatments...)
    ui/                   # primitivos reutilizáveis (Reveal, StarRating, ImagePlaceholder...)
  data/                   # conteúdo editável (treatments, testimonials, faq, nav, contact)
  lib/                    # helpers (whatsapp link builder, máscara de telefone, fontes)
  types/                  # tipos compartilhados
```

## Como editar o conteúdo

Praticamente todo o texto do site vem de `src/data/`, não precisa mexer nos
componentes para trocar conteúdo:

- **Tratamentos**: `src/data/treatments.ts` → `confirmedTreatments` (13 tratamentos,
  todos confirmados pela clínica; ícones associados em `src/components/Treatments.tsx`)
- **Texto da seção "Nosso espaço"**: `src/components/Space.tsx`
- **Depoimentos**: `src/data/testimonials.ts`
- **Perguntas frequentes**: `src/data/faq.ts`
- **Dados de contato, endereço, Instagram, nota do Google**: `src/data/contact.ts`
- **Itens do menu**: `src/data/nav.ts`

## Imagens

As fotos reais enviadas pela clínica já estão em `public/images/` e
conectadas nos componentes via `next/image` (AVIF/WebP automático):

| Arquivo | Usado em |
|---|---|
| `renata-amaral-retrato.jpeg` | Painel grande do Hero (foto de destaque, metade da tela) |
| `renata-amaral-retrato-2.jpeg` | Foto principal da seção Sobre |
| `avaliacao-consulta.jpg` | Foto do card de tratamento "Avaliação personalizada" |
| `sala-atendimento.jpg` | Tile "Sala de atendimento" da Galeria |
| `produtos-prateleira.jpg` | Tile "Produtos" da Galeria |
| `recepcao-clinica.jpeg` | Seção "Nosso espaço", tile "Recepção" da Galeria |
| `logo-parede-vertical.jpeg` | Detalhe sobreposto na seção "Nosso espaço" |
| `logo-parede-dourado.jpeg` | Tile "Bastidores" da Galeria |
| `preenchimento-labial-1.jpeg` | Foto do card de tratamento "Preenchimento" |
| `preenchimento-labial-glam.jpeg` | Tile "Procedimentos" da Galeria |
| `resultado-botox-olho.jpeg` | Foto do card de tratamento "Botox" |
| `resultado-pele-perfil.jpeg` | Foto do card de tratamento "Peelings" |
| `resultado-pele-acne.jpeg` | Foto do card de tratamento "Limpeza de pele" |
| `resultado-facial-frontal.jpeg` | Foto do card de tratamento "Harmonização facial" |
| `tatuagem-laser.jpeg` | Foto do card de tratamento "Remoção de tatuagem a laser" |
| `resultado-nariz-1.jpeg`, `resultado-nariz-2.jpeg`, `resultado-facial-1.jpeg`, `preenchimento-labial-2.jpeg`, `resultado-labial-perfil.jpeg`, `resultado-botox-testa.jpeg` | 6 cards de resultado (antes/depois) na seção Resultados |

Essas fotos de antes/depois já vêm com "antes", "depois" e o logotipo
aplicados pela própria clínica (arte pronta) — por isso a seção Resultados
exibe cada uma como uma foto única, e não como o slider arrastável genérico
(que exigiria duas fotos separadas, mesmo ângulo, sem composição prévia).

O Hero foi redesenhado como tela dividida (foto grande de um lado, texto do
outro) para dar mais destaque à foto da Renata Amaral — no celular a foto
aparece primeiro, em boa altura, antes do texto.

A Galeria passou por duas fases: primeiro virou uma grade uniforme (todos os
tiles quadrados, mesmo tamanho) porque o mosaico original com tiles de
tamanhos variados ficou com aparência desorganizada. Na transformação
premium, virou um masonry de verdade (`columns-2/3/4` do CSS, ao estilo
Pinterest) — cada foto mantém sua proporção natural e as colunas fluem sem
buracos ou desalinhamento, o que resolve o problema visual original sem
abrir mão da variedade de proporções.

### Fotos genéricas (substituir assim que possível)

Seis fotos recebidas (depilação a laser na perna, tratamento facial com
aparelho, massagem na coxa/ombros/perna, seringa na testa) não têm a marca
d'água da clínica e têm aparência de banco de imagens genérico — o que o
briefing original pediu para evitar. A pedido de quem conduziu esta rodada,
elas foram usadas mesmo assim para não deixar tratamentos sem nenhuma
imagem, mas ficaram nomeadas com o prefixo `stock-` propositalmente, para
serem fáceis de localizar e trocar primeiro assim que houver fotos próprias:

| Arquivo | Usado em |
|---|---|
| `stock-laser-perna.jpeg` | Card "Depilação a laser", tile "Equipamentos" da Galeria |
| `stock-facial-aparelho.jpeg` | Card "Estética facial" |
| `stock-drenagem-perna.jpeg` | Card "Drenagem linfática" |
| `stock-massagem-ombros.jpeg` | Card "Massagem", tile "Atendimento" da Galeria |
| `stock-massagem-perna.jpeg` | Card "Massagem modeladora" |
| `stock-seringa-testa.jpeg` | Card "Bioestimuladores", tile "Cuidados faciais" da Galeria |

Todos os 13 tratamentos e as 8 categorias da Galeria já têm foto. Para
adicionar ou trocar fotos no futuro: coloque o arquivo em `public/images/` e
use `<Image src="/images/arquivo.jpg" alt="..." fill className="object-cover" />`
dentro de um contêiner com `position: relative` e tamanho definido (o
componente `ImagePlaceholder` continua disponível em
`src/components/ui/ImagePlaceholder.tsx` para qualquer novo espaço que ainda
não tenha foto).

## Sistema visual premium

O projeto passou por uma segunda rodada de refinamento visual, inspirada em
sites premiados (Awwwards), com foco em elegância, profundidade e
micro-interações discretas — sem perder a leveza editorial do restante do
site.

**Paleta dourada** (`tailwind.config.ts`): além de `gold` (#B89A65), agora
existem `gold-light` (#D1B37A), `gold-mid` (#C6A46A) e `gold-deep` (#AE8F57),
usados em ícones no hover, sublinhados, números de etapas, chevron do FAQ e
detalhes decorativos — nunca como cor de texto corrido.

**Fundo com profundidade** (`globals.css`): o `body` usa gradientes radiais
muito sutis (nunca branco puro) mais uma textura de ruído quase imperceptível
via SVG embutido (`body::before`, opacity 0.025).

**Scroll suave e progresso**: `SmoothScroll.tsx` inicializa a biblioteca
Lenis (desativada automaticamente se o usuário preferir menos movimento);
`ScrollProgress.tsx` é a barra dourada fina no topo da página, ligada ao
progresso de rolagem via Framer Motion.

**Sistema de revelação** (`src/components/ui/`):
- `Reveal.tsx` — wrapper de scroll-reveal com variantes `fade-up` (padrão),
  `blur`, `scale` e `image` (zoom 106%→100% + blur→foco, usado na Galeria)
- `RevealText.tsx` — revelação de texto palavra por palavra com máscara
  (usado no título do Hero e da seção de CTA final)
- `Sparkle.tsx` — marcas decorativas douradas (✦ ✧ ❋ ◇)
- `GoldParticles.tsx` — pequenos pontos dourados flutuantes no Hero
- `WaveDivider.tsx` — divisor orgânico em onda entre o Hero/CTA e a seção
  seguinte, evitando cortes retos entre fundos escuros e claros

**Hero redesenhado**: painel fotográfico grande com brilho suave atrás da
imagem (`.glow-behind`), cartão de vidro (glassmorphism) com nome e avaliação
sobre a foto, título com revelação em máscara, botões aparecendo em
sequência e indicador de scroll.

**Cards com hover vivo**: elevação suave, zoom lento na imagem, ícone
dourado com leve brilho, sublinhado dourado crescendo (classe utilitária
`.gold-underline`) e texto com deslocamento sutil — aplicado em Tratamentos,
Diferenciais, Galeria e Depoimentos.

**Botões premium**: classe utilitária `.btn-shine` adiciona um brilho
diagonal que passa lentamente ao passar o mouse, aplicada em todos os CTAs
principais do site.

### O que foi simplificado de propósito

Alguns itens do briefing de "experiência premium" foram deliberadamente
substituídos por alternativas mais alinhadas à estética editorial/luxo do
restante do site, em vez de implementados literalmente:

- **Cursor customizado**: não foi implementado — cursores customizados
  tendem a prejudicar acessibilidade e não são um padrão da linguagem visual
  editorial/minimalista do resto do site.
- **Efeito ripple nos botões**: substituído pelo brilho diagonal (`.btn-shine`)
  — ripple é uma linguagem visual do Material Design, não combina com o
  tom "luxo discreto" pedido no restante do briefing.
- **Parallax por movimento do mouse em cada imagem**: mantido apenas o
  parallax por scroll (mais robusto e leve); parallax por mouse em muitas
  imagens ao mesmo tempo tende a pesar a performance sem ganho visual
  proporcional.

## Deploy

O projeto é um app Next.js padrão — funciona em qualquer host compatível
(Vercel é o caminho mais simples: `vercel --prod` após `vercel login`, ou
conectar o repositório Git direto no painel da Vercel). Também funciona em
Netlify, Railway, ou qualquer VPS com Node 18+.

Antes do primeiro deploy, atualize `siteUrl` em `src/data/contact.ts` para o
domínio final — ele é usado no `sitemap.xml`, `robots.txt`, canonical e Open
Graph.

## O que já está pronto

- Layout completo das 16 seções do briefing (mais uma seção extra "Nosso
  espaço" sobre o ambiente/recepção), responsivo (mobile, tablet, desktop,
  wide)
- WhatsApp integrado em todos os CTAs (cabeçalho, hero, tratamentos, CTA,
  localização, rodapé, botão flutuante e formulário de contato)
- Formulário de contato com validação, máscara de telefone e envio via
  WhatsApp (sem backend / sem armazenar dados em servidor)
- Seção "Resultados" com 6 fotos reais de antes/depois autorizadas pela clínica
- FAQ em acordeão nativo (`<details>`), acessível sem JavaScript adicional
- Mapa do Google incorporado sem necessidade de chave de API
- SEO básico: metadata, Open Graph/Twitter card gerados dinamicamente,
  sitemap.xml, robots.txt, dados estruturados `BeautySalon` (Schema.org) só
  com informações confirmadas (sem inventar horário, preço ou certificação)
- Acessibilidade: navegação por teclado, foco visível, labels em todos os
  campos, `prefers-reduced-motion` respeitado em todas as animações
- Favicon e imagem de Open Graph gerados automaticamente com o monograma "RA"
- Sistema visual premium: scroll suave (Lenis), barra de progresso, revelação
  de texto em máscara, partículas douradas, glassmorphism, divisores em onda
  e hover elaborado nos cards (ver seção "Sistema visual premium" acima)

## Pendências para a clínica validar

- [ ] Confirmar se as fotos `stock-*.jpeg` (laser, facial, drenagem,
      massagens, seringa) são de uso autorizado pela clínica; se não forem,
      substituir por fotos próprias assim que possível
- [ ] Confirmar `siteUrl` definitivo antes do deploy
- [ ] Se desejar exibir horário de atendimento, adicionar em `contact.ts`
      (hoje o site mostra apenas "Horários mediante agendamento.", conforme
      solicitado, sem inventar dias/horas)
