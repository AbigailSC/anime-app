/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { useInterval } from '@hooks/useInterval';
import { pageButtonsProps } from '@interfaces/components/sliderInterfaces';
import { imagesArray } from '@utils/dataImage';
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
        className={`b-slider ${active ? 'active' : ''}`}
        onClick={onClick}
      >
        {index + 1}
      </button>
    );
  };

  const handleResetDelay = (): void => {
    setDelay(0);
    setTimeout(() => setDelay(5000), 0);
  };

  useInterval(nextCard, delay);

  return (
    <section className="b-main-container">
      {imagesArray.map((image, index) => {
        return (
          <div
            className={index === currentIndex ? 'b-current-slide' : 'b-slide'}
            key={index}
          >
            {index === currentIndex && <img src={image.src} alt="anime" />}
          </div>
        );
      })}
      <div className="b-dots-container">
        {imagesArray.map((image, index) => {
          return (
            <button key={image.id} onClick={() => handleResetDelay()}>
              {pageButtons({
                index,
                active: index === currentIndex,
                onClick: () => setCurrentIndex(index)
              })}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default SliderHome;
