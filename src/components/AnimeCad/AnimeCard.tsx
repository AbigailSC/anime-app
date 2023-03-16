import React from 'react';
import { AnimeCardProps } from '@interfaces/components/AnimeCard';

const AnimeCard: React.FC<AnimeCardProps> = ({ title, image, released }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <span>{released}</span>
      <h3>{title}</h3>
    </div>
  );
};

export default AnimeCard;
