import React from 'react';
import { DividerAnimeProps } from '@interfaces/components/dividerAnime.interface';
import './DividerAnime.scss';

const DividerAnime: React.FC<DividerAnimeProps> = ({
  description,
  btnText,
  imageAlt,
  image
}) => {
  return (
    <div className="b-divider">
      <img src={image} alt={imageAlt} className="b-divider__background" />
      <p className="b-divider__text">{description}</p>
      <button className="b-divider__btn">{btnText}</button>
    </div>
  );
};

export default DividerAnime;
