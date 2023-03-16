import React, { useEffect } from 'react';
import { useCustomSelector, useCustomDispatch } from '@hooks/redux';
import { getAnimeByGenre } from '@store/slices/anime/anime';
import { useParams } from 'react-router-dom';
import './Details.scss';

const Details: React.FC = () => {
  const dispatch = useCustomDispatch();
  const { genre } = useParams();
  const { animeByGenre } = useCustomSelector((state) => state.anime);
  console.log('🚀 ~ file: Details.tsx:11 ~ animeByGenre:', animeByGenre);

  useEffect(() => {
    void dispatch(getAnimeByGenre(genre as string));
  }, [dispatch, genre]);

  return (
    <div className="b-details">
      <h3>
        Results by <span>{genre}</span>
      </h3>
    </div>
  );
};

export default Details;
