import React from 'react';
import { DividerAnimeProps } from '@interfaces/components/dividerAnime.interface';
import './DividerAnime.scss';

const DividerAnime: React.FC<DividerAnimeProps> = ({
  description,
  hasBtn,
  title,
  image,
  mainColor,
  secondaryColor
}) => {
  const titleModified = (title: string): JSX.Element => {
    const titleArray = title.split(' ');
    const titleArrayLength = titleArray.length;
    return (
      <>
        <h4 className="b-divider__title">
          <span>{titleArray.slice(0, titleArrayLength - 1).join(' ')} </span>
          <span className="b-divider__title--line">
            {titleArray.slice(titleArrayLength - 1, titleArrayLength)}
          </span>
        </h4>
      </>
    );
  };
  return (
    <div
      className="b-divider"
      style={{
        backgroundImage: `linear-gradient(to left, ${secondaryColor} 0%, ${mainColor} 70%),url(${image})`,
        color: mainColor
      }}
    >
      <div className="b-divider__header">
        {title !== undefined && titleModified(title)}
        {description !== undefined && titleModified(description)}
      </div>
      <p className="b-divider__text">{description}</p>
      {hasBtn && <button className="b-divider__btn">See more</button>}
    </div>
  );
};

export default DividerAnime;
