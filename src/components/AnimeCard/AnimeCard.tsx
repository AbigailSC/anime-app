import React from 'react';
import { Link } from 'react-router-dom';
import { useCustomDispatch } from '@hooks/redux';
import { AnimeCardProps } from '@interfaces/components/AnimeCard';
import { getAnimeDetails } from '@store/slices/anime/anime';
import './AnimeCard.scss';

const AnimeCard: React.FC<AnimeCardProps> = ({
  title,
  image,
  released,
  id
}) => {
  const dispatch = useCustomDispatch();
  const getAnimeInfo = (): void => {
    void dispatch(getAnimeDetails(id));
  };
  return (
    <div className="b-anime-card">
      <img className="b-card-image" src={image} alt={title} />
      <div className="b-card-header">
        <h3 className="b-header-title">
          <Link
            className="b-items__link"
            to={`/anime/${id}`}
            onClick={() => getAnimeInfo()}
          >
            {title}
          </Link>
        </h3>
        <span className="b-header-span">{released}</span>
      </div>
    </div>
  );
};

export default AnimeCard;
