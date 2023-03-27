import React from 'react';
import { useCustomSelector } from '@hooks/redux';
import './AnimeInfo.scss';

const AnimeInfo: React.FC = () => {
  const animeDetail = useCustomSelector((state) => state.anime.animeDetails);
  const anime = useCustomSelector((state) => state.anime);
  console.log('🚀 ~ file: AnimeInfo.tsx:6 ~ animeDetail:', animeDetail);

  const verifyData = (
    isLoading: boolean,
    element: JSX.Element
  ): JSX.Element => {
    return isLoading ? <div className="b-header__image skeleton" /> : element;
  };

  return (
    <div className="b-anime-info">
      <div className="b-header">
        <div className="b-image__container">
          {verifyData(
            anime.isLoading,
            <img
              className="b-header__image"
              src={animeDetail?.image}
              alt={animeDetail?.title}
            />
          )}
          <span className="b-image--sub">{animeDetail?.subOrDub}</span>
        </div>
        <div className="b-body">
          {verifyData(
            anime.isLoading,
            <h1 className="b-body__title">{animeDetail?.title}</h1>
          )}
          <div className="b-body__stack">
            {verifyData(
              anime.isLoading,
              <span className="b-stack__item">{animeDetail?.otherName}</span>
            )}
            {verifyData(
              anime.isLoading,
              <span className="b-stack__item">{animeDetail?.releaseDate}</span>
            )}
          </div>
          {verifyData(
            anime.isLoading,
            <p className="b-body__description">{animeDetail?.description}</p>
          )}
          {animeDetail?.status !== 'Not yet aired' ? (
            <button className="b-body__button">Watch now</button>
          ) : (
            <button className="b-body__button">Notify me</button>
          )}
        </div>
      </div>
      {animeDetail?.status !== 'Not yet aired' && (
        <div>
          <h2>Episodes</h2>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default AnimeInfo;
