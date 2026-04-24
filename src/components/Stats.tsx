import { useList } from "../context/ListContext";

export function Stats() {
  const { lista } = useList();

  const total = lista.length;
  const viendo = lista.filter(a => a.estado === "VIENDO").length;
  const completados = lista.filter(a => a.estado === "COMPLETADO").length;
  const pendientes = lista.filter(a => a.estado === "PENDIENTE").length;

  const conPuntuacion = lista.filter(a => a.puntuacion !== null);
  const mediaPuntuacion = conPuntuacion.length > 0
    ? (conPuntuacion.reduce((acc, a) => acc + (a.puntuacion ?? 0), 0) / conPuntuacion.length).toFixed(1)
    : "N/A";

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 w-full">
      {[
        { label: "Total", valor: total, color: "bg-gray-700" },
        { label: "Viendo", valor: viendo, color: "bg-blue-800" },
        { label: "Completados", valor: completados, color: "bg-green-800" },
        { label: "Pendientes", valor: pendientes, color: "bg-yellow-800" },
        { label: "Media", valor: mediaPuntuacion, color: "bg-purple-800" },
      ].map(stat => (
        <div key={stat.label} className={`${stat.color} rounded-lg p-4 text-center`}>
          <p className="text-white text-2xl font-bold">{stat.valor}</p>
          <p className="text-gray-300 text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}