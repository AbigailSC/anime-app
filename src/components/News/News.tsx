import React from 'react';
import Carousel from 'react-multi-carousel';
import { responsive } from '@components/CarrouselAnimeCards/responsiveData';
import { newsArray } from '@utils/dataNews';
import { AiOutlineClockCircle } from 'react-icons/ai';

import './News.scss';

const News: React.FC = () => {
  return (
    <div className="b-news">
      <h3 className="b-news__title">News</h3>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        infinite={true}
        centerMode={true}
        containerClass="carousel-container"
      >
        {newsArray instanceof Array &&
          newsArray.map((news) => (
            <article
              key={news.id}
              className="b-news__card"
              style={{
                backgroundImage: `linear-gradient(
                rgba(13, 13, 13, 0.3) 0%,
                rgba(13, 13, 13, 0.3) 50%,
                rgba(13, 13, 13, 0.9) 100%),url(${news.image}
              )`
              }}
            >
              <header className="b-card__header">
                <span className="b-card__category">{news.category}</span>
                <p className="b-card__title">{news.title}</p>
                <div className="b-card__footer">
                  <span className="b-card__footer__line"></span>
                  <AiOutlineClockCircle className="b-card__footer__icon" />
                  <span className="b-card__footer__date">{news.date}</span>
                </div>
              </header>
            </article>
          ))}
      </Carousel>
    </div>
  );
};

export default News;
