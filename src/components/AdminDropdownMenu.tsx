import { LogOut, ChevronDown } from "lucide-react";
import { useState} from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDropdownMenu(){
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    function handleLogout() {
        setOpen(false)
        localStorage.removeItem("token");
        navigate("/admin/login");
    }

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)}  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-white transition hover:text-sky-300" >
        <ChevronDown size={30} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-52 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
          <button onClick={handleLogout} className={`flex w-full cursor-pointer items-center gap-3 px-4 py-3 text-sm text-red-500 transition hover:bg-red-50`}>
            <LogOut size={18} /> Sign out
          </button>
        </div>
      )}
    </div>
  );
}