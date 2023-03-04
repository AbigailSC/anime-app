import React from 'react';
import Carousel from 'react-multi-carousel';
import { CarrouselAnimeCardsProps } from '@interfaces/components/carrouselAnimeCards.interface';
import { responsive } from './responsiveData';
import 'react-multi-carousel/lib/styles.css';
import './CarrouselAnimeCards.scss';

const CarrouselAnimeCards: React.FC<CarrouselAnimeCardsProps> = ({
  title,
  data,
  hasNextPage
}) => {
  return (
    <div className="b-carrousel">
      <div className="b-carrousel__header">
        <h3 className="b-header__title">{title}</h3>
        {hasNextPage && <span className="b-header__span">See all</span>}
      </div>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={['mobile']}
        infinite={true}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
      >
        {data !== null ? (
          data.results instanceof Array &&
          data.results.map((anime) => (
            <div key={anime.id} className="b-carrousel__card">
              <img
                src={anime.image}
                alt={anime.title}
                className="b-card__img"
              />
              <p className="b-card__title">{anime.title}</p>
              <button className="b-card__btn">add to watchlist</button>
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
