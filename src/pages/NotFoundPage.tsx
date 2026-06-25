import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-[calc(100vh-200px)] items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-sky-400">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold text-slate-800">
          Página no encontrada
        </h2>

        <p className="mx-auto mt-4 max-w-md text-slate-500">
          Lo sentimos, la página que estás buscando no existe o fue movida.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-sky-400 px-8 py-3 font-semibold text-white transition hover:bg-sky-500"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}