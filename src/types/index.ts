export type TabType = 'home' | 'gallery' | 'services' | 'contact'

export interface Project {
  id: string
  title: string
  category: 'Identidade Visual' | 'Social Media' | 'Editorial' | 'Direção de Arte'
  description: string
  image: string
  year: string
  tags: string[]
}

export interface ServiceItem {
  id: string
  title: string
  subtitle: string
  icon: string
  deliverables: string[]
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}
