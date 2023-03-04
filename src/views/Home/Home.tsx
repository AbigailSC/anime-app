import React, { useEffect } from 'react';
import SliderHome from '@components/SliderHome/SliderHome';
import { useCustomDispatch } from '@hooks/redux';
import {
  getRecentEpisodes,
  getTopAiringAnimes,
  getAnimeByGenre
} from '@store/slices/animes/anime';
import './Home.scss';

const Home: React.FC = () => {
  const dispatch = useCustomDispatch();
  useEffect(() => {
    void dispatch(getRecentEpisodes());
    void dispatch(getTopAiringAnimes());
    void dispatch(getAnimeByGenre('action'));
  }, [dispatch]);

  return (
    <div className="Home">
      <SliderHome />
    </div>
  );
};

export default Home;
