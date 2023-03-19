import React from 'react';
import { AnimeCardProps } from '@interfaces/components/AnimeCard';
import './AnimeCard.scss';

const AnimeCard: React.FC<AnimeCardProps> = ({
  title,
  image,
  released,
  id
}) => {
  return (
    <div className="b-anime-card">
      <img className="b-card-image" src={image} alt={title} />
      <div className="b-card-header">
        <h3 className="b-header-title">{title}</h3>
        <span className="b-header-span">{released}</span>
      </div>
    </div>
  );
};

export default AnimeCard;
