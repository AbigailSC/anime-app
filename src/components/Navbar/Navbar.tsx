// import { LoginButton } from '@components/LoginButton';
// import { LogOutButton } from '@components/LogOutButton';
import React, { useState } from 'react';
import './Navbar.scss';
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';

const Navbar: React.FC = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = (): void => {
    setMenu(!menu);
  };

  return (
    <nav className={menu ? 'b-navbar' : 'b-navbar b-navbar--mobile'}>
      <div className="b-navbar__container">
        <div className="b-container__header">
          <h2 className="b-nabvar__title">
            <span>K</span>udasai
          </h2>
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
            <li className="b-items__li">
              <span>G</span>enres
            </li>
            <li className="b-items__li">
              <span>R</span>ecents
            </li>
            <li className="b-items__li">
              <span>T</span>rending
            </li>
            <li className="b-items__li">
              <span>C</span>ategories
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
