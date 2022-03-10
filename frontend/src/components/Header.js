import logo from "../images/logo.svg";
import close from "../images/close-icon-s.svg"
import React from 'react';
import { Link, Route, useHistory } from 'react-router-dom';

function Header({email, onLogOut}) {
  const history = useHistory();

  function signOut() {
    localStorage.removeItem("token");
    onLogOut();
    history.push("/signin");
  }

  return (
    <header className="header">
      
      <img className="header__logo" src={logo} alt="логотип" />
      <Route exact path={"/"}>
        <input className="header__menu" id="info-menu" type="checkbox" />
        <label className="header__close-menu" htmlFor="info-menu">
          <img
            className="header__close-menu-image"
            src={close}
            alt="Закрыть"
          />
        </label>
        <label className="header__menu-label" htmlFor="info-menu">
          &#9776;
        </label>

        <div className="header__info">
          <p className="header__info-email">{email}</p>
          <button className="header__info-button" onClick={signOut}>
            Выйти
          </button>
        </div>
      </Route>
     
      <Route path={"/signup"}>
        <div className="header__info header__info_active">
          <Link to="signin" className="header__info-link">
            Войти
          </Link>
        </div>
      </Route>

      <Route path={"/signin"}>
        <div className="header__info header__info_active">
          <Link to="signup" className="header__info-link">
            Регистрация
          </Link>
        </div>
      </Route>

    </header>
  );
}

export default Header;
