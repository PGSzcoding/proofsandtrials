import { FileText, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function AdminHeader(){

    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem("token");
        navigate("/admin/login");
    }

    return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
              <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
    
                <Link  to="/admin/certificados" className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-400 text-white">
                    <FileText size={22} />
                  </div>
    
                  <div>
                    <p className="text-lg font-bold text-slate-800"> P&T Admin</p>
                    <p className="text-xs text-slate-400">Panel administrativo</p>
                  </div>
                </Link>
    
    
                <button onClick={handleLogout} className="flex cursor-pointer items-center gap-2 rounded-full border border-red-200 px-5 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-500 hover:text-white">
                  <LogOut size={18} /> Salir
                </button>
    
              </div>
          </header>
    )
}