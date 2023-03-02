/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { useInterval } from '@hooks/useInterval';
import { pageButtonsProps } from '@interfaces/components/slider.Interface';
import { imagesArray } from '@utils/dataImage';
import { BsPlayFill } from 'react-icons/bs';
import { BiPlus } from 'react-icons/bi';
import './SliderHome.scss';

const SliderHome: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [delay, setDelay] = useState(5000);

  const nextCard = (): void => {
    setCurrentIndex((currentIndex + 1) % imagesArray.length);
  };

  const pageButtons = ({
    index,
    active,
    onClick
  }: pageButtonsProps): JSX.Element => {
    return (
      <button
        className={`b-slider__btn ${active ? 'active' : ''}`}
        onClick={onClick}
      >
        {/* {index + 1} */}
      </button>
    );
  };

  const handleResetDelay = (): void => {
    setDelay(0);
    setTimeout(() => setDelay(5000), 0);
  };

  useInterval(nextCard, delay);

  return (
    <section
      className="b-main-container"
      style={{
        backgroundImage: `linear-gradient(rgba(13, 13, 13, 0.1), rgba(13, 13, 13, 1)),url(${imagesArray[currentIndex].src})`
      }}
    >
      {imagesArray.map((anime, index) => {
        return (
          <div
            className={index === currentIndex ? 'b-current-slide' : 'b-slide'}
            key={index}
          >
            {index === currentIndex && (
              <>
                <h2 className="b-current-slide__title">{anime.name}</h2>
                <p className="b-current-slide__description">{anime.summary}</p>
                <div className="b-description__container">
                  <button className="b-description__btn">
                    <BsPlayFill className="b-btn__icon" /> Watch Now
                  </button>
                  <button className="b-description__btn">
                    <BiPlus className="b-btn__icon" />
                    See later
                  </button>
                </div>
              </>
            )}
          </div>
        );
      })}
      <div className="b-dots-container">
        {imagesArray.map((image, index) => {
          return (
            <div className="b-dots--btn" key={image.id}>
              {pageButtons({
                index,
                active: index === currentIndex,
                onClick: () => {
                  setCurrentIndex(index);
                  handleResetDelay();
                }
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SliderHome;
