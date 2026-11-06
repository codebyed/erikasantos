// Eu importo os tipos ProcessStep e ServiceItem para tipar os dados abaixo.
import type { ProcessStep, ServiceItem } from '../types'

// Eu declaro a lista de serviços que aparece na página de Serviços.
export const SERVICES: ServiceItem[] = [
  // Eu começo o pacote de Social Media.
  {
    // Eu uso o id para ligar o card ao formulário de contato.
    id: 'Social Media',
    // Eu mostro o nome do serviço no card.
    title: 'Social Media',
    // Eu explico em uma frase o que o pacote entrega.
    subtitle: 'Estratégia visual e conteúdo contínuo para transformar seguidores em clientes fiéis.',
    // Eu escolho o ícone de lista para representar o serviço.
    icon: 'social',
    // Eu listo os entregáveis do pacote.
    deliverables: [
      // Eu incluo o planejamento mensal.
      'Planejamento mensal de posts',
      // Eu incluo os carrosséis e capas de Reels.
      'Design de carrosséis & capas de Reels',
      // Eu incluo a identidade de Stories e destaques.
      'Identidade de Stories & destaques',
      // Eu incluo o relatório de performance.
      'Relatório de performance visual',
    ],
  },
  // Eu começo o pacote de Identidade Visual.
  {
    // Eu uso o id para pré-selecionar esse serviço no contato.
    id: 'Identidade Visual',
    // Eu mostro o nome do serviço no card.
    title: 'Identidade Visual',
    // Eu explico o que a criação de marca entrega.
    subtitle: 'Criação de logotipo, paleta, tipografia e diretrizes de marca completas e autorais.',
    // Eu escolho o ícone de lápis para representar o serviço.
    icon: 'brand',
    // Eu listo os entregáveis do pacote.
    deliverables: [
      // Eu incluo o logo e suas variações.
      'Logo principal & variações/símbolos',
      // Eu incluo a paleta e a tipografia.
      'Paleta cromática e tipografia',
      // Eu incluo o brandbook completo.
      'Brandbook completo com guia de uso',
      // Eu incluo os materiais impressos e digitais.
      'Materiais impressos e digitais',
    ],
  },
  // Eu começo o pacote de Consultoria.
  {
    // Eu uso o id para pré-selecionar consultoria no contato.
    id: 'Consultoria',
    // Eu mostro o nome do serviço no card.
    title: 'Consultoria & Direção',
    // Eu explico o objetivo da consultoria.
    subtitle: 'Diagnóstico visual e direcionamento estratégico para elevar a percepção de valor.',
    // Eu escolho o ícone de lâmpada para representar o serviço.
    icon: 'consulting',
    // Eu listo os entregáveis do pacote.
    deliverables: [
      // Eu incluo a sessão individual de diagnóstico.
      'Sessão individual de diagnóstico 1:1',
      // Eu incluo a análise de perfil e presença.
      'Análise detalhada do perfil e presença',
      // Eu incluo o moodboard e o plano de ação.
      'Moodboard e plano de ação estruturado',
      // Eu incluo o suporte via WhatsApp.
      'Suporte de 15 dias via WhatsApp',
    ],
  },
]

// Eu declaro as etapas do processo criativo mostradas na página de Serviços.
export const PROCESS_STEPS: ProcessStep[] = [
  // Eu começo a primeira etapa do processo.
  {
    // Eu numero a etapa como 01.
    number: '01',
    // Eu dou o nome da etapa de briefing.
    title: 'Briefing & Imersão',
    // Eu explico o que acontece no briefing.
    description: 'Entendimento profundo do seu negócio, público, diferenciais e objetivos de mercado.',
  },
  // Eu começo a segunda etapa do processo.
  {
    // Eu numero a etapa como 02.
    number: '02',
    // Eu dou o nome da etapa de criação.
    title: 'Criação & Conceito',
    // Eu explico o que acontece na criação.
    description: 'Pesquisa visual, moodboards e desenvolvimento de propostas exclusivas e autorais.',
  },
  // Eu começo a terceira etapa do processo.
  {
    // Eu numero a etapa como 03.
    number: '03',
    // Eu dou o nome da etapa de entrega.
    title: 'Apresentação & Entrega',
    // Eu explico o que acontece na entrega.
    description: 'Apresentação guiada, ajustes finos e envio de todos os arquivos organizados com suporte.',
  },
]
