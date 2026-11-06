// Eu importo o useState para guardar a aba ativa, o histórico e o serviço escolhido.
import { useState } from 'react'
// Eu importo o botão de voltar para reutilizar o mesmo visual em todas as páginas internas.
import { BackButton } from './components/BackButton'
// Eu importo o rodapé que aparece em todas as telas.
import { Footer } from './components/Footer'
// Eu importo o cabeçalho com o menu de navegação.
import { Header } from './components/Header'
// Eu importo a página inicial (Link na Bio).
import { BioPage } from './pages/BioPage'
// Eu importo a página de contato.
import { ContactPage } from './pages/ContactPage'
// Eu importo a galeria de projetos.
import { GalleryPage } from './pages/GalleryPage'
// Eu importo a página de serviços.
import { ServicesPage } from './pages/ServicesPage'
// Eu importo o tipo que limita as abas possíveis.
import type { TabType } from './types'

// Eu crio o componente raiz que decide qual página mostrar.
export default function App() {
  // Eu guardo qual aba está aberta agora, começando pela home.
  const [activeTab, setActiveTab] = useState<TabType>('home')
  // Eu guardo o caminho das abas para o botão de voltar saber para onde ir.
  const [navHistory, setNavHistory] = useState<TabType[]>([])
  // Eu guardo o serviço escolhido para levar essa informação até o formulário de contato.
  const [selectedService, setSelectedService] = useState('Social Media')

  // Eu centralizo toda troca de aba nesta função.
  const handleNavigate = (tab: TabType, service?: string) => {
    // Eu atualizo o serviço selecionado quando a navegação traz essa informação.
    if (service) {
      setSelectedService(service)
    }
    // Eu só mexo no histórico quando realmente muda de página.
    if (tab !== activeTab) {
      // Eu empilho a aba atual e limito o histórico a 20 entradas para não crescer sem fim.
      setNavHistory((previous) => [...previous, activeTab].slice(-20))
      // Eu troco a aba ativa.
      setActiveTab(tab)
    }
    // Eu rolo a página para o topo para a pessoa começar a ler do início.
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Eu trato o clique no botão voltar.
  const handleBack = () => {
    // Eu abro a última aba do histórico ou volto para a home se ele estiver vazio.
    setActiveTab(navHistory[navHistory.length - 1] ?? 'home')
    // Eu removo a última entrada do histórico depois de usá-la.
    setNavHistory((previous) => previous.slice(0, -1))
    // Eu subo a página para o topo também ao voltar.
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Eu monto a estrutura visual que envolve todas as páginas.
  return (
    // Eu crio o container principal com fundo creme, altura mínima e layout em coluna.
    <div className="min-h-screen bg-[#F9F3E3] text-[#102E4A] font-[Poppins,system-ui,sans-serif] selection:bg-[#6486AC] selection:text-[#F9F3E3] overflow-x-hidden w-full flex flex-col justify-between">
      {/* Eu agrupo header e conteúdo para o rodapé ficar sempre embaixo. */}
      <div>
        {/* Eu passo a aba ativa e a função de navegação para o header. */}
        <Header activeTab={activeTab} onSelectTab={handleNavigate} />

        {/* Eu crio a área de conteúdo com largura máxima e espaçamento responsivo. */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-12">
          {/* Eu mostro o botão de voltar em todas as páginas que não são a home. */}
          {activeTab !== 'home' && (
            // Eu aplico uma margem inferior para separar o botão do conteúdo.
            <div className="mb-6 sm:mb-8">
              {/* Eu renderizo o botão que chama o voltar do histórico. */}
              <BackButton onClick={handleBack} />
            </div>
          )}
          {/* Eu renderizo a página inicial quando a aba ativa é a home. */}
          {activeTab === 'home' && <BioPage onNavigate={handleNavigate} />}
          {/* Eu renderizo a galeria quando a aba ativa é gallery. */}
          {activeTab === 'gallery' && <GalleryPage />}
          {/* Eu renderizo os serviços quando a aba ativa é services. */}
          {activeTab === 'services' && (
            // Eu passo o serviço selecionado, a função que o troca e a navegação.
            <ServicesPage
              selectedService={selectedService}
              onSelectService={setSelectedService}
              onNavigate={handleNavigate}
            />
          )}
          {/* Eu renderizo o contato quando a aba ativa é contact, já com o serviço escolhido. */}
          {activeTab === 'contact' && <ContactPage initialService={selectedService} />}
        </main>
      </div>

      {/* Eu coloco o rodapé institucional no fim da página. */}
      <Footer />
    </div>
  )
}
