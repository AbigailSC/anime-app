import React, { useEffect } from 'react';
import { SliderHome } from '@components/SliderHome';
import { useCustomSelector, useCustomDispatch } from '@hooks/redux';
import {
  getTopAiringAnimes,
  getRecentEpisodes
} from '@store/slices/animes/anime';
import { CarrouselAnimeCards } from '@components/CarrouselAnimeCards';
import { DividerAnime } from '@components/DividerAnime';
import { Footer } from '@components/Footer';
import { News } from '@components/News';
import ce from '@assets/dividers/cyberpunk.jpg';
import eva from '@assets/dividers/evangelion.jpg';
import jjk from '@assets/dividers/jjk.jpg';
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
        secondaryColor="rgba(247, 224, 2, 0.1)"
      />
      <CarrouselAnimeCards
        header="New Episode This Week"
        data={recentEpisodes}
        hasNextPage={false}
      />
      <DividerAnime
        hasBtn={true}
        description="Your favorite articles are waiting for you"
        title="Visit our merch store"
        image={eva}
        mainColor="rgba(43, 45, 66, 0.9)"
        secondaryColor="rgba(43, 45, 66, 0.1)"
      />
      <News />
      <DividerAnime
        hasBtn={false}
        description="of Kudasai"
        title="Join the community"
        image={jjk}
        mainColor="rgba(36, 124, 181,0.9)"
        secondaryColor="rgba(36, 124, 181,0.1)"
      />
      <Footer />
    </main>
  );
};

export default Home;
