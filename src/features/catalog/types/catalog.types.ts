export type MediaType = 'MOVIE' | 'SERIES' | 'ANIME' | 'MANGA' | 'VIDEOGAME';

export type ReleaseStatus = 
| 'RELEASED'
| 'UPCOMING'
| 'AIRING'
| 'CANCELLED'
| 'HIATUS'
| 'ENDED';

export interface MediaItem {
    id: string;
    title: string;
    originalTitle?:string;
    alternativeTitles?: string[];
    sinopsis?: string;
    posterUrl?: string;
    bannerUrl?: string;
    releaseDate?: string;
    genres: string[];
    type: MediaType;
    status: ReleaseStatus;
    externalProvider?: string;
    externalId?: number;
}