import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from "react-helmet-async";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <div className="max-w-[1600px] mx-auto">
        <App />
      </div>
    </HelmetProvider>
  </StrictMode>,
)
