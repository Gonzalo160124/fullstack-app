import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-6">
      <h1 className="text-8xl font-bold text-purple-400">404</h1>
      <p className="text-2xl text-gray-300">Página no encontrada</p>
      <p className="text-gray-500">Esta página no existe o fue eliminada.</p>
      <Link
        to="/"
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold"
      >
        Volver al inicio
      </Link>
    </div>
  );
}