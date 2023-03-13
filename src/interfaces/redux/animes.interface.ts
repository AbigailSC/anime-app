export interface IAnime {
  recentEpisodes: IRecentEpisodes | null;
  topAnime: ITopAnimes | null;
  animeByGenre: IAnimeByGenre | null;
  searchAnime: ISearchAnime | null;
  animeDetails: IAnimeDetails | null;
  watchAnime: IAnimeEpisodes | null;
  isLoading: boolean;
}

/* Base interface */

interface IBaseInterface {
  currentPage: number;
  hasNextPage: boolean;
}

/* Recent episodes */

export interface IRecentEpisodes extends IBaseInterface {
  results: IRecentEpisode[];
}

export interface IRecentEpisode {
  id: string;
  episodeId: string;
  episodeNumber: number;
  title: string;
  image: string;
  url: string;
}

/* Top animes */

export interface ITopAnimes extends IBaseInterface {
  results: ITopAnime[];
}

export interface ITopAnime {
  id: string;
  title: string;
  image: string;
  url: string;
  genres: string[];
  episodeNumber?: number;
}

/* Search by genre */

export interface IAnimeByGenre {
  currentPage: number;
  results: IAnimeByGenreResult[];
}

export interface IAnimeByGenreResult {
  id: string;
  title: string;
  image: string;
  released: string;
  url: string;
}

/* Anime genres */

export interface IAnimeGenres {
  [index: number]: string;
}

/* Search anime */

export interface ISearchAnime extends IBaseInterface {
  results: IAnimeSearchResults[];
}

export interface IAnimeSearchResults {
  id: string;
  title: string;
  url: string;
  image: string;
  releaseDate: string;
  subOrDub: string;
}

/* Anime details */

export interface IAnimeDetails {
  id: string;
  title: string;
  url: string;
  genres: IAnimeGenres;
  totalEpisodes: number;
  image: string;
  releaseDate: string;
  description: string;
  subOrDub: string;
  type: string;
  status: string;
  otherName: string;
  episodes: IAnimeDetailsEpisodes[];
}

interface IAnimeDetailsEpisodes {
  id: string;
  number: number;
  url: string;
}

/* Anime episodes */

export interface IAnimeEpisodes {
  headers: {
    Referer: string;
  };
  sources: IAnimeEpisodesSources[];
  download: string;
}

interface IAnimeEpisodesSources {
  url: string;
  isM3U8: boolean;
  quality: string;
}
