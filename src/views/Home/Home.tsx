import React, { useEffect } from 'react';
import { SliderHome } from '@components/SliderHome';
import { useCustomSelector, useCustomDispatch } from '@hooks/redux';
import {
  getTopAiringAnimes,
  getRecentEpisodes
} from '@store/slices/animes/anime';
import { CarrouselAnimeCards } from '@components/CarrouselAnimeCards';
import './Home.scss';

const Home: React.FC = () => {
  const dispatch = useCustomDispatch();
  const { topAnime } = useCustomSelector((state) => state.anime);
  const { recentEpisodes } = useCustomSelector((state) => state.anime);

  useEffect(() => {
    void dispatch(getTopAiringAnimes());
    void dispatch(getRecentEpisodes());
  }, [dispatch]);

  return (
    <div className="Home">
      <SliderHome />
      <CarrouselAnimeCards
        header="Top airing anime"
        data={topAnime}
        hasNextPage={false}
      />
      <CarrouselAnimeCards
        header="New Episode This Week"
        data={recentEpisodes}
        hasNextPage={false}
      />
    </div>
  );
};

export default Home;
