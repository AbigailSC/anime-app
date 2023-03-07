import React, { useEffect } from 'react';
import { SliderHome } from '@components/SliderHome';
import { useCustomSelector, useCustomDispatch } from '@hooks/redux';
import {
  getTopAiringAnimes,
  getRecentEpisodes
} from '@store/slices/animes/anime';
import { CarrouselAnimeCards } from '@components/CarrouselAnimeCards';
import { DividerAnime } from '@components/DividerAnime';
import ce from '@assets/dividers/cyberpunk.jpg';
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
    <main className="b-home">
      <SliderHome />
      <CarrouselAnimeCards
        header="Top airing anime"
        data={topAnime}
        hasNextPage={false}
      />
      <DividerAnime
        hasBtn={false}
        description="Cyberpunk: Edgerunners"
        title="Anime of the year"
        image={ce}
        mainColor="rgba(247, 224, 2, 0.9)"
        secondaryColor="rgba(247, 224, 2, 0)"
      />
      <CarrouselAnimeCards
        header="New Episode This Week"
        data={recentEpisodes}
        hasNextPage={false}
      />
    </main>
  );
};

export default Home;
