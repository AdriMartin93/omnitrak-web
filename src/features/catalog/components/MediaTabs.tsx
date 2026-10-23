"use client";
import { MediaType } from "../types/catalog.types";

export type TabFilter = "ALL" | MediaType;

interface MediaTabsProps {
    activeTab: TabFilter;
    onTabChange: (tab: TabFilter) => void;
}

const TABS: { id: TabFilter; label: string }[] = [
    { id: "ALL", label: "Para ti" },
    { id: "ANIME", label: "Anime" },
    { id: "MANGA", label: "Manga" },
    { id: "VIDEOGAME", label: "Videojuegos" },
    { id: "SERIES", label: "Series" },
    { id: "MOVIE", label: "Películas" },
];

export function MediaTabs({ activeTab, onTabChange }: MediaTabsProps) {
    return (
        <nav className="sticky top-0 z-10 w-full border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
            <div className="flex overflow-x-auto no-scrollbar">
                {TABS.map((tab) => {
                    const isActive = activeTab === tab.id;

                    return (
                        <button
                            key={tab.id}
                            onClick={() => onTabChange(tab.id)}
                            className="relative flex-1 min-w-[100px] py-3.5 text-center text-sm font-semibold transition-colors hover:bg-slate-800/40"
                        >
                            <span
                                className={
                                    isActive
                                        ? "text-slate-100"
                                        : "text-slate-400 hover:text-slate-200"
                                }
                            >
                                {tab.label}
                            </span>

                            {isActive && (
                                <div className="absolute bottom-0 left-1/2 h-1 w-12 -translate-x-1/2 rounded-full bg-indigo-500" />
                            )}
                        </button>
                    );
                })}
            </div>
        </nav>
    );
}