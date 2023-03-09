import React from 'react';
import Carousel from 'react-multi-carousel';
import { responsive } from '@components/CarrouselAnimeCards/responsiveData';
import { newsArray } from '@utils/dataNews';
import { TbClockHour3 } from '@components/Icons/Icons';

import './News.scss';

const News: React.FC = () => {
  return (
    <div className="b-news">
      <h3 className="b-news__title">News</h3>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
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
              <span>{news.category}</span>
              <p className="b-card__title">{news.title}</p>
              <div>
                <TbClockHour3 />
                <span>{news.date}</span>
              </div>
            </article>
          ))}
      </Carousel>
    </div>
  );
};

export default News;
