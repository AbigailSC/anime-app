import { ITopAnimes } from '@interfaces/redux/animes.interface';

export interface CarrouselAnimeCardsProps {
  title: string;
  data: ITopAnimes | null;
  hasNextPage: boolean;
}
