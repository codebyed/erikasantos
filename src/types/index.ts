// Eu declaro o tipo que lista as abas possíveis do site.
export type TabType = 'home' | 'gallery' | 'services' | 'contact'

// Eu descrevo o formato de um projeto da galeria.
export interface Project {
  // Eu guardo um id único para usar como key e para abrir o modal certo.
  id: string
  // Eu guardo o título que aparece no card e no modal.
  title: string
  // Eu limito a categoria a uma das quatro que o filtro conhece.
  category: 'Identidade Visual' | 'Social Media' | 'Editorial' | 'Direção de Arte'
  // Eu escrevo a descrição curta que aparece no card.
  description: string
  // Eu guardo o caminho da imagem dentro de public.
  image: string
  // Eu guardo o ano que aparece no selo do card.
  year: string
  // Eu listo as tags que resumem as técnicas do projeto.
  tags: string[]
}

// Eu descrevo um serviço oferecido na página de Serviços.
export interface ServiceItem {
  // Eu uso o id para selecionar o serviço e pré-preencher o contato.
  id: string
  // Eu mostro o título no card do serviço.
  title: string
  // Eu explico em uma frase o que o serviço entrega.
  subtitle: string
  // Eu guardo qual ícone desenhar no card.
  icon: string
  // Eu listo os entregáveis de cada pacote.
  deliverables: string[]
}

// Eu descrevo uma etapa do processo criativo.
export interface ProcessStep {
  // Eu mostro o número da etapa (01, 02, 03).
  number: string
  // Eu dou um nome curto para a etapa.
  title: string
  // Eu explico o que acontece naquela etapa.
  description: string
}
