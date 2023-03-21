import React, { useEffect } from 'react';
import { useCustomSelector, useCustomDispatch } from '@hooks/redux';
import { getAnimeByGenre } from '@store/slices/anime/anime';
import { useParams } from 'react-router-dom';
import './Details.scss';
import { AnimeCard } from '@components/AnimeCad';

const Details: React.FC = () => {
  const dispatch = useCustomDispatch();
  const { genre } = useParams();
  const { anime } = useCustomSelector((state) => state);
  const { animeByGenre } = useCustomSelector((state) => state.anime);

  useEffect(() => {
    void dispatch(getAnimeByGenre(genre as string));
  }, [dispatch, genre]);

  return (
    <div className="b-details">
      <h3 className="b-details-header">
        Results by <span className="b-header--span">{genre}</span>
      </h3>
      <div className="b-details-container">
        {anime.isLoading ? (
          <div>Loading...</div>
        ) : (
          animeByGenre?.results instanceof Array &&
          animeByGenre.results.map((item) => (
            <AnimeCard
              key={item.id}
              title={item.title}
              image={item.image}
              released={item.released}
              id={item.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Details;
