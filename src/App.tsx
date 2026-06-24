import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import ServicesPage from "./pages/ServicesPage"
import CertificatePage from "./pages/CertificatePage"

function App() {
  return (
    <main className="min-h-screen">
      <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/consulta-certificado" element={<CertificatePage />} />
      </Routes>
      <Footer/>

    </BrowserRouter>
    
    </main>
  )
}

export default App