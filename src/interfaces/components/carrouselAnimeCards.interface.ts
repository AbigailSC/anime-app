import {
  IRecentEpisodes,
  ITopAnimes
} from '@interfaces/redux/animes.interface';

export interface CarrouselAnimeCardsProps {
  header: string;
  data: ITopAnimes | IRecentEpisodes | null;
  hasNextPage: boolean;
}
