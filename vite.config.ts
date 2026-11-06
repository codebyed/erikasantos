// Eu importo o plugin oficial do Tailwind para o Vite.
import tailwindcss from '@tailwindcss/vite'
// Eu importo o plugin do React para o Vite.
import react from '@vitejs/plugin-react'
// Eu importo o defineConfig para tipar a configuração.
import { defineConfig } from 'vite'

// Eu documento que a referência da configuração fica no site do Vite.
// https://vite.dev/config/
export default defineConfig({
  // Eu uso caminhos relativos para o build funcionar no GitHub Pages.
  base: './',
  // Eu registro os plugins do Tailwind e do React.
  plugins: [tailwindcss(), react()],
  // Eu configuro o servidor de desenvolvimento.
  server: {
    // Eu fixo a porta 80 para facilitar o acesso local.
    port: 80,
    // Eu libero o acesso pela rede local.
    host: true
  }
})
