import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/header-logo.svg";
import open from "../images/icon__menu.svg";
import close from "../images/Close.svg";

function Header({ userEmail, onExit }) {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  const [images, setImages] = useState(false);

  useEffect(() => {
    setImages(true);
  }, []);

  function isClick() {
    setOpenMenu(!openMenu);
    setImages(!images);
  }

  function onExitMenu() {
    onExit();
    setOpenMenu(!openMenu);
  }

  return (
    <header className={openMenu ? `header header__menu-open` : `header`}>
      <img src={logo} alt="Логотип Место Россия" className="logo" />
      {location.pathname === "/sign-in" && (
        <Link to="/sign-up" className="header__link">
          Регистрация
        </Link>
      )}
      {location.pathname === "/sign-up" && (
        <Link to="/sign-in" className="header__link">
          Войти
        </Link>
      )}
      {location.pathname === "/" && (
        <div>
          <button
            className="header__menu-button"
            style={{
              backgroundImage: images ? `url(${open})` : `url(${close})`,
            }}
            onClick={isClick}
          ></button>
          <nav
            className={
              openMenu ? `header__menu header__nav-open` : `header__menu`
            }
          >
            <ul className="header__menu-list">
              <li className="header__menu-item">
                <span>{userEmail}</span>
              </li>
              <li className="header__menu-item">
                <button className="header__exit" onClick={onExitMenu}>
                  Выйти
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
