import type { ProcessStep, ServiceItem } from '../types'

export const SERVICES: ServiceItem[] = [
  {
    id: 'Social Media',
    title: 'Social Media',
    subtitle: 'Estratégia visual e conteúdo contínuo para transformar seguidores em clientes fiéis.',
    icon: 'social',
    deliverables: [
      'Planejamento mensal de posts',
      'Design de carrosséis & capas de Reels',
      'Identidade de Stories & destaques',
      'Relatório de performance visual',
    ],
  },
  {
    id: 'Identidade Visual',
    title: 'Identidade Visual',
    subtitle: 'Criação de logotipo, paleta, tipografia e diretrizes de marca completas e autorais.',
    icon: 'brand',
    deliverables: [
      'Logo principal & variações/símbolos',
      'Paleta cromática e tipografia',
      'Brandbook completo com guia de uso',
      'Materiais impressos e digitais',
    ],
  },
  {
    id: 'Consultoria',
    title: 'Consultoria & Direção',
    subtitle: 'Diagnóstico visual e direcionamento estratégico para elevar a percepção de valor.',
    icon: 'consulting',
    deliverables: [
      'Sessão individual de diagnóstico 1:1',
      'Análise detalhada do perfil e presença',
      'Moodboard e plano de ação estruturado',
      'Suporte de 15 dias via WhatsApp',
    ],
  },
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Briefing & Imersão',
    description: 'Entendimento profundo do seu negócio, público, diferenciais e objetivos de mercado.',
  },
  {
    number: '02',
    title: 'Criação & Conceito',
    description: 'Pesquisa visual, moodboards e desenvolvimento de propostas exclusivas e autorais.',
  },
  {
    number: '03',
    title: 'Apresentação & Entrega',
    description: 'Apresentação guiada, ajustes finos e envio de todos os arquivos organizados com suporte.',
  },
]
