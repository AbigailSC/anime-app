// import { LoginButton } from '@components/LoginButton';
// import { LogOutButton } from '@components/LogOutButton';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { Title } from '@components/Title';
import './Navbar.scss';

const Navbar: React.FC = () => {
  const [menu, setMenu] = useState(true);

  const handleMenu = (): void => {
    setMenu(!menu);
  };

  const location = useLocation();

  const redirectInOtherPage = (
    title: string,
    id: string = '#'
  ): JSX.Element => {
    if (location.pathname !== '/') {
      return (
        <Link to={`/${id}`} className="b-items__link">
          <li className="b-items__li">
            <span>{title.slice(0, 1)}</span>
            {title.slice(1, title.length)}
          </li>
        </Link>
      );
    } else {
      return (
        <a href={id} className="b-items__link">
          <li className="b-items__li">
            <span>{title.slice(0, 1)}</span>
            {title.slice(1, title.length)}
          </li>
        </a>
      );
    }
  };

  return (
    <nav className={menu ? 'b-navbar' : 'b-navbar b-navbar--mobile'}>
      <div className="b-navbar__container">
        <div className="b-container__header">
          <Title />
          <button className="b-container__btn" onClick={() => handleMenu()}>
            {menu ? <AiOutlineMenu /> : <AiOutlineClose />}
          </button>
        </div>
        <div
          className={menu ? 'b-container-items--hidden' : 'b-container-items'}
        >
          <form className="b-container__form-group">
            <input
              className="b-form-group__input"
              type="text"
              placeholder="Search"
            />
            <button className="b-form-group__btn">
              <AiOutlineSearch />
            </button>
          </form>
          <ul className="b-items__ul">
            <span className="b-items__link">
              <li className="b-items__li">
                <span>G</span>enres
              </li>
            </span>
            {redirectInOtherPage('Recent', '#recentEpisodes')}
            {redirectInOtherPage('Trending', '#topAiring')}
            {redirectInOtherPage('News', '#news')}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
