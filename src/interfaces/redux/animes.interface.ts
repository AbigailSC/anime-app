export interface IAnime {
  recentEpisodes: IRecentEpisodes | null;
  topAnimes: ITopAnimes | null;
  isLoading: boolean;
}

/* Recent episodes */

export interface IRecentEpisodes {
  currentPage: number;
  hasNextPage: boolean;
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

export interface ITopAnimes {
  currentPage: number;
  hasNextPage: boolean;
  results: ITopAnime[];
}

export interface ITopAnime {
  id: string;
  title: string;
  image: string;
  url: string;
  genres: string[];
}
