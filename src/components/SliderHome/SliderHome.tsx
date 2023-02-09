/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { useInterval } from '@hooks/useInterval';
import './SliderHome.scss';

import csm from '@assets/bgImages/csm.jpeg';
import bocchi from '@assets/bgImages/bocchi.jpg';
import snk from '@assets/bgImages/snk.jpg';
import tensei from '@assets/bgImages/tensei.jpg';

const SliderHome: React.FC = () => {
  const imagesArray = [
    {
      src: csm,
      id: 1
    },
    {
      src: bocchi,
      id: 2
    },
    {
      src: snk,
      id: 3
    },
    {
      src: tensei,
      id: 4
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = (): void => {
    setCurrentIndex((currentIndex + 1) % imagesArray.length);
  };

  // const moveDot = (index: number): void => {
  //   setCurrentIndex(index);
  // };

  useInterval(nextCard, 5000);

  return (
    <section
      className="b-main-container"
      style={{ backgroundImage: `url(${imagesArray[currentIndex].src})` }}
    ></section>
  );
};

export default SliderHome;
