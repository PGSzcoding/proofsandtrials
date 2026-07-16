import { Link } from "react-router-dom";
import logoBlanco from "../assets/logo-figure.png"
import AdminDropdownMenu from "./AdminDropdownMenu";

export default function AdminHeader(){
    return (
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-linear-to-r from-slate-950 via-slate-900 to-slate-800">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6">
          <Link  to="/" target="_blanc" className="flex items-center gap-3">
              <img src={logoBlanco} alt="P&T Logo" className="h-10 w-10 object-contain"/>
                <div>
                  <p className="text-lg font-bold text-white"> P&T Admin</p>
                  <p className="text-xs text-slate-400">Panel administrativo</p>
                </div>
          </Link>
          <AdminDropdownMenu/>
        </div>
      </header>
    )
}