import React, { useEffect } from 'react';
import { SliderHome } from '@components/SliderHome';
import { useCustomSelector, useCustomDispatch } from '@hooks/redux';
import { getTopAiringAnimes } from '@store/slices/animes/anime';
import { CarrouselAnimeCards } from '@components/CarrouselAnimeCards';
import './Home.scss';

const Home: React.FC = () => {
  const dispatch = useCustomDispatch();
  const { topAnime } = useCustomSelector((state) => state.anime);

  useEffect(() => {
    void dispatch(getTopAiringAnimes());
  }, [dispatch]);

  return (
    <div className="Home">
      <SliderHome />
      <CarrouselAnimeCards
        title="Top airing anime"
        data={topAnime}
        hasNextPage={false}
      />
    </div>
  );
};

export default Home;
