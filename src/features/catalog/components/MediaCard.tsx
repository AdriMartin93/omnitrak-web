import { MediaItem } from '../types/catalog.types';

interface MediaCardProps {
    media: MediaItem;
}

export function MediaCard({ media }: MediaCardProps) {
    return (
        <article className="group relative overflow-hidden rounded-xl bg-slate-800/80 border-slate-700/60 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/60 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col bg-gradient-to-br from-slate-900/70 to-slate-800/90 h-full">
            <div className="aspect-[2/3] w-full bg-slate-900 relative">
                {media.posterUrl ? (
                    <img
                        src={media.posterUrl}
                        alt={media.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center text-slate-500 text-xs font-medium">
                        Sin Imagen
                    </div>
                )}
                <span className="absolute top-2 right-2 px-2 py-0.5 text-[10px] font-bold tracking-wider rounded uppercase bg-slate-900/80 text-indigo-400 border border-indigo-500/30 backdrop-blur-sm">
                    {media.type}
                </span>
            </div>

            <div className="p-3.5 flex flex-col flex-grow justify-between">
                <div>
                    <h3
                        className="font-semibold text-sm text-slate-100 line-clamp-1 group-hover:text-indigo-400 transition-colors"
                        title={media.title}
                    >
                        {media.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                        {media.genres && media.genres.length > 0 ? media.genres.slice(0, 2).join(' • ') : 'General'}
                    </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-700/40 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="capitalize">{media.status.toLowerCase()}</span>
                    {media.releaseDate && (
                        <span>{media.releaseDate.split('-')[0]}</span>
                    )}
                </div>
            </div>
        </article>
    )
}