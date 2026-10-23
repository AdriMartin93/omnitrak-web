"use client";

import { useState } from "react";
import { MediaCard } from "@/features/catalog/components/MediaCard";
import { MediaTabs, TabFilter } from "@/features/catalog/components/MediaTabs";
import { SearchBar } from "@/features/catalog/components/SearchBar";
import { MediaItem } from "@/features/catalog/types/catalog.types";

// 2. DATOS MOCK EXPANDIDOS:
// Varios elementos de distintos tipos para probar que el filtrado funciona.
const MOCK_DATA: MediaItem[] = [
  {
    id: "1",
    title: "Cyberpunk: Edgerunners",
    type: "ANIME",
    status: "ENDED",
    genres: ["Acción", "Ciencia Ficción"],
    releaseDate: "2022-09-13",
    posterUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    title: "Elden Ring",
    type: "VIDEOGAME",
    status: "RELEASED",
    genres: ["RPG", "Fantasía Oscura"],
    releaseDate: "2022-02-25",
    posterUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "3",
    title: "Berserk",
    type: "MANGA",
    status: "HIATUS",
    genres: ["Fantasía Oscura", "Acción"],
    releaseDate: "1989-08-25",
    posterUrl: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "4",
    title: "Dune: Part Two",
    type: "MOVIE",
    status: "RELEASED",
    genres: ["Ciencia Ficción", "Aventura"],
    releaseDate: "2024-03-01",
    posterUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "5",
    title: "The Last of Us",
    type: "SERIES",
    status: "AIRING",
    genres: ["Drama", "Post-apocalíptico"],
    releaseDate: "2023-01-15",
    posterUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
  },
];

export default function HomePage() {
  // 3. ESTADOS REACTIVOS (Client State):
  const [activeTab, setActiveTab] = useState<TabFilter>("ALL");
  const [searchTerm, setSearchTerm] = useState("");

  // 4. LÓGICA DE FILTRADO DINÁMICO:
  // Filtra por tipo de medio (si no está en 'ALL') y por coincidencia con el buscador.
  const filteredMedia = MOCK_DATA.filter((item) => {
    const matchesTab = activeTab === "ALL" || item.type === activeTab;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    // CONTENEDOR PRINCIPAL: Aumentamos el ancho máximo a 1600px para pantallas grandes
    <div className="flex justify-center min-h-screen bg-slate-950 text-slate-100">
      <div className="flex w-full max-w-[1600px] px-2 sm:px-4">

        {/* --- COLUMNA 1: SIDEBAR IZQUIERDA --- */}
        {/* Mantenemos un ancho compacto y fijo */}
        <aside className="hidden sm:flex flex-col items-end w-16 xl:w-60 px-2 xl:px-4 py-4 border-r border-slate-800 shrink-0">
          <div className="sticky top-4 flex flex-col items-center xl:items-start gap-6 w-full">
            {/* Logotipo */}
            <div className="flex items-center gap-3 px-3 py-2 text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              <span className="text-3xl">◈</span>
              <span className="hidden xl:inline">OmniTrak</span>
            </div>

            {/* Navegación */}
            <nav className="flex flex-col gap-2 w-full">
              <button className="flex items-center gap-4 px-3 xl:px-4 py-3 rounded-full font-bold text-slate-100 bg-slate-800/60 hover:bg-slate-800 transition-colors w-full justify-center xl:justify-start">
                <span className="text-lg">🏠</span>
                <span className="hidden xl:inline text-base">Inicio</span>
              </button>
              <button className="flex items-center gap-4 px-3 xl:px-4 py-3 rounded-full font-semibold text-slate-400 hover:text-slate-100 hover:bg-slate-900 transition-colors w-full justify-center xl:justify-start">
                <span className="text-lg">📚</span>
                <span className="hidden xl:inline text-base">Mi Lista</span>
              </button>
              <button className="flex items-center gap-4 px-3 xl:px-4 py-3 rounded-full font-semibold text-slate-400 hover:text-slate-100 hover:bg-slate-900 transition-colors w-full justify-center xl:justify-start">
                <span className="text-lg">👤</span>
                <span className="hidden xl:inline text-base">Perfil</span>
              </button>
            </nav>
          </div>
        </aside>

        {/* --- COLUMNA 2: FEED CENTRAL (EXPANDIDO) --- */}
        {/* Quitamos 'max-w-2xl' / 'max-w-3xl': ahora flex-1 toma todo el espacio disponible */}
        <main className="flex-1 min-w-0 border-r border-slate-800">
          {/* Cabecera pegajosa */}
          <div className="sticky top-0 z-20 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
            <div className="px-4 py-2.5 max-w-xl">
              <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />
            </div>
            <MediaTabs activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          {/* Listado de tarjetas de medios:
              Ahora soporta hasta 4 o 5 columnas en pantallas medianas/grandes */}
          <div className="p-4 sm:p-6">
            {filteredMedia.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
                {filteredMedia.map((media) => (
                  <MediaCard key={media.id} media={media} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-slate-400 text-sm">
                  No se encontraron resultados para los filtros actuales.
                </p>
              </div>
            )}
          </div>
        </main>

        {/* --- COLUMNA 3: WIDGETS / PANEL DERECHO --- */}
        {/* Ancho contenido de 72 (288px) para no robar protagonismo al centro */}
        <aside className="hidden lg:block w-72 xl:w-80 px-4 xl:px-6 py-4 shrink-0">
          <div className="sticky top-4 flex flex-col gap-4">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
              <h3 className="font-bold text-slate-200 text-sm mb-1.5">
                Tendencias de la comunidad
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Próximamente: actividad reciente de amigos, listas populares y estrenos de la semana.
              </p>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}