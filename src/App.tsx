import { useState } from 'react'
import { BackButton } from './components/BackButton'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { BioPage } from './pages/BioPage'
import { ContactPage } from './pages/ContactPage'
import { GalleryPage } from './pages/GalleryPage'
import { ServicesPage } from './pages/ServicesPage'
import type { TabType } from './types'

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home')
  const [navHistory, setNavHistory] = useState<TabType[]>([])
  const [selectedService, setSelectedService] = useState('Social Media')

  const handleNavigate = (tab: TabType, service?: string) => {
    if (service) {
      setSelectedService(service)
    }
    if (tab !== activeTab) {
      setNavHistory((previous) => [...previous, activeTab].slice(-20))
      setActiveTab(tab)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBack = () => {
    setActiveTab(navHistory[navHistory.length - 1] ?? 'home')
    setNavHistory((previous) => previous.slice(0, -1))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#F9F3E3] text-[#102E4A] font-[Poppins,system-ui,sans-serif] selection:bg-[#6486AC] selection:text-[#F9F3E3] overflow-x-hidden w-full flex flex-col justify-between">
      <div>
        <Header activeTab={activeTab} onSelectTab={handleNavigate} />

        <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-12">
          {activeTab !== 'home' && (
            <div className="mb-6 sm:mb-8">
              <BackButton onClick={handleBack} />
            </div>
          )}
          {activeTab === 'home' && <BioPage onNavigate={handleNavigate} />}
          {activeTab === 'gallery' && <GalleryPage />}
          {activeTab === 'services' && (
            <ServicesPage
              selectedService={selectedService}
              onSelectService={setSelectedService}
              onNavigate={handleNavigate}
            />
          )}
          {activeTab === 'contact' && <ContactPage initialService={selectedService} />}
        </main>
      </div>

      <Footer />
    </div>
  )
}
