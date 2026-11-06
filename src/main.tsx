// Eu importo o StrictMode para o React me avisar de problemas durante o desenvolvimento.
import { StrictMode } from 'react'
// Eu importo o createRoot, que é a forma moderna de montar o React na página.
import { createRoot } from 'react-dom/client'
// Eu importo o CSS global para o Tailwind e os estilos da marca entrarem no bundle.
import './index.css'
// Eu importo o componente raiz da aplicação.
import App from './App.tsx'

// Eu procuro a div#root no HTML e monto o React dentro dela.
createRoot(document.getElementById('root')!).render(
  // Eu envolvo a aplicação em StrictMode para pegar efeitos colaterais indevidos.
  <StrictMode>
    {/* Eu renderizo o App, que controla as abas e o layout geral. */}
    <App />
  </StrictMode>,
)
