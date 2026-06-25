import { useEffect, useState } from "react";
import logoImage from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { login } from "../services/auth.service";
export default function LoginPage() {
    const navigate = useNavigate();

const [loading, setLoading] = useState(false);
  const labelClasses = "mb-2 block text-sm font-medium text-slate-700"
  const inputClasses = "w-full rounded-full border border-slate-300 px-5 py-3 outline-none transition focus:border-sky-400"

  const [password, setPassword] = useState("")
  const [email, setEmail] = useState(() => {
    try {
      const usuarioGuardado = localStorage.getItem("usuarioPT");
      if (usuarioGuardado) {
        const { email } = JSON.parse(usuarioGuardado);
        return email || ''; // Si existe, lo pone como estado inicial
      }
    } catch (e) {
      console.error(e);
    }
    return ''; 
  });


async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  setLoading(true);

  try {
    const data = await login({email,password,});
    localStorage.setItem("token",data.token);
    localStorage.setItem("email",data.email);
    toast.success("Bienvenido");
    navigate("/admin/certificados");

  } catch(error) {
    if (error instanceof Error) {toast.error(error.message);}

  } finally {
    setLoading(false);
  }
}

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-lg">
        
        <div className="mb-10 text-center">
          <img  src={logoImage}  alt="P&T"  className="mx-auto h-20 w-auto"  />

          <h1 className="mt-6 text-3xl font-bold text-slate-800">Administrador </h1>

          <p className="mt-2 text-sm text-slate-500">Ingresa tus datos para continuar</p>
        </div>


        <form onSubmit={handleSubmit}>
          <div>
            <label className={labelClasses}>Correo</label>

            <input
              type="email"
              placeholder="admin@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClasses}
            />
          </div>


          <div className="mt-5">
            <label className={labelClasses}>Contraseña</label>

            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputClasses}
            />
          </div>

          <button type="submit" disabled={loading} className="mt-8 w-full cursor-pointer rounded-full bg-[#4EACE9] px-6 py-3 font-semibold text-white transition hover:bg-sky-500 disabled:opacity-50">
            {loading ? "Ingresando..." : "Iniciar sesión"}
          </button>

        </form>
      </div>
    </main>
  );
}