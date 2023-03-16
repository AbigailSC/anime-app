/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react';
import Carousel from 'react-multi-carousel';
import { CarrouselAnimeCardsProps } from '@interfaces/components/carrouselAnimeCards.interface';
import { responsive } from '../../utils/responsiveData';
import 'react-multi-carousel/lib/styles.css';
import './CarrouselAnimeCards.scss';
import { IRecentEpisode, ITopAnime } from '@interfaces/redux/animes.interface';

const CarrouselAnimeCards: React.FC<CarrouselAnimeCardsProps> = ({
  header,
  data,
  hasNextPage,
  id
}) => {
  return (
    <div className="b-carrousel" id={id}>
      <div className="b-carrousel__header">
        <h3 className="b-header__title">
          {header}
          <span className="b-title--span">{header}</span>
        </h3>
        {hasNextPage && <span className="b-header__span">See all</span>}
      </div>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
      >
        {data !== null ? (
          data.results instanceof Array &&
          data.results.map((anime: ITopAnime | IRecentEpisode) => (
            <div key={anime.id} className="b-carrousel__card">
              <div className="b-card__image">
                {anime.episodeNumber && (
                  <div className="b-card__episode">{anime.episodeNumber}</div>
                )}
                <img
                  src={anime.image}
                  alt={anime.title}
                  className="b-image--zoom"
                />
              </div>
              <p className="b-card__title">{anime.title}</p>
            </div>
          ))
        ) : (
          <>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
          </>
        )}
      </Carousel>
    </div>
  );
};

export default CarrouselAnimeCards;
