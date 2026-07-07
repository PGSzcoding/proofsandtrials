import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Services2Page from "./pages/Services2Page";
import CertificatePage from "./pages/CertificatePage";
import AdminLayout from "./layouts/AdminLayout";
import LoginPage from "./pages/LoginPage";
import AdminCertificates from "./pages/AdminPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
function App() {
  return (
    <main className="min-h-screen">
      <Toaster />

      <BrowserRouter>
        <Routes>

          {/* Página normal */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services2Page />} />
            <Route 
              path="/consulta-certificado" 
              element={<CertificatePage />} 
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>


          {/* Admin */}
          <Route element={<AdminLayout />}>

            <Route element={<PublicRoute />}>
              <Route path="/admin/login"  element={<LoginPage />}  />
              <Route path="/admin"  element={<LoginPage />}  />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route  path="/admin/certificados"  element={<AdminCertificates />} />
            </Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App