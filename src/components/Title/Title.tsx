import React from 'react';
import { Link } from 'react-router-dom';
import './Title.scss';

const Title: React.FC = () => {
  return (
    <h2 className="b-navbar__title">
      <Link to="/" className="b-items__link">
        <span>K</span>udasai
      </Link>
    </h2>
  );
};

export default Title;
