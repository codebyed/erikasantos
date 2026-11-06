// Eu importo o tipo Project para garantir que cada item abaixo tenha todos os campos.
import type { Project } from '../types'

// Eu declaro a lista de projetos que alimenta a galeria e o modal.
export const PROJECTS: Project[] = [
  // Eu começo o primeiro projeto do portfólio.
  {
    // Eu crio o id único do projeto de branding.
    id: 'branding-autoral',
    // Eu defino o título que aparece no card.
    title: 'Branding & Identidade Autoral',
    // Eu classifico o projeto como Identidade Visual para o filtro.
    category: 'Identidade Visual',
    // Eu escrevo a descrição curta que resume o trabalho.
    description: 'Construção conceitual de marca, tipografia personalizada, paleta terrosa e elementos gráficos exclusivos.',
    // Eu aponto para a imagem que fica em public/images/gallery.
    image: './images/gallery/branding-identidade.png',
    // Eu marco o ano do projeto.
    year: '2026',
    // Eu listo as tags que aparecem no card.
    tags: ['Logotipo', 'Brandbook', 'Tipografia'],
  },
  // Eu começo o segundo projeto, focado em selos e emblemas.
  {
    // Eu crio o id único do projeto de selos.
    id: 'selos-emblemas',
    // Eu defino o título exibido no card.
    title: 'Selos Gráficos & Emblemas',
    // Eu classifico o projeto como Editorial.
    category: 'Editorial',
    // Eu descrevo o que foi criado nesse projeto.
    description: 'Criação de insígnias, selos circulares e monogramas de alto valor para aplicações físicas e digitais.',
    // Eu aponto para a imagem do selo em destaque.
    image: './images/gallery/selo-destaque.png',
    // Eu marco o ano do projeto.
    year: '2026',
    // Eu listo as tags de acabamento e emblemas.
    tags: ['Emblemas', 'Selos', 'Acabamentos'],
  },
  // Eu começo o terceiro projeto, de social media.
  {
    // Eu crio o id único do projeto de posts.
    id: 'social-posts',
    // Eu defino o título exibido no card.
    title: 'Social Media & Conteúdo Estratégico',
    // Eu classifico o projeto como Social Media.
    category: 'Social Media',
    // Eu descrevo a proposta visual dos posts.
    description: 'Composições com hierarquia tipográfica apurada, fotos autorais e ritmo visual para marcas de serviços e produtos.',
    // Eu aponto para a imagem do post de social media.
    image: './images/gallery/social-media-post.png',
    // Eu marco o ano do projeto.
    year: '2026',
    // Eu listo as tags de design gráfico e conteúdo.
    tags: ['Design Gráfico', 'Stories', 'Reels'],
  },
  // Eu começo o quarto projeto, de editorial e papelaria.
  {
    // Eu crio o id único do projeto editorial.
    id: 'editorial-papelaria',
    // Eu defino o título exibido no card.
    title: 'Design Editorial & Papelaria Fina',
    // Eu classifico o projeto como Editorial.
    category: 'Editorial',
    // Eu descrevo os materiais impressos criados.
    description: 'Cartões de visita táteis, embalagens personalizadas e manuais impressos com atenção extrema a detalhes.',
    // Eu aponto para a imagem da papelaria.
    image: './images/gallery/editorial-design.png',
    // Eu marco o ano do projeto.
    year: '2026',
    // Eu listo as tags de impressos e embalagens.
    tags: ['Impressos', 'Papelaria', 'Embalagens'],
  },
  // Eu começo o quinto projeto, de direção criativa.
  {
    // Eu crio o id único do projeto de estratégia.
    id: 'direcao-criativa',
    // Eu defino o título exibido no card.
    title: 'Estratégia & Direção Criativa',
    // Eu classifico o projeto como Direção de Arte.
    category: 'Direção de Arte',
    // Eu descrevo o diagnóstico e a consultoria feitos.
    description: 'Diagnóstico e consultoria 360° para reposicionar marcas e elevar a percepção de valor no mercado.',
    // Eu aponto para a imagem da estratégia visual.
    image: './images/gallery/visual-strategy.png',
    // Eu marco o ano do projeto.
    year: '2026',
    // Eu listo as tags de consultoria e direção.
    tags: ['Consultoria', 'Direção de Arte', 'Moodboards'],
  },
]
