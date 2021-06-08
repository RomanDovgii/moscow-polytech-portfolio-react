import React from "react";

const LoginPage = (props) => {
  return (
    <React.Fragment>
      <header className="header">
        <div className="header__wrapper">
          <a href="./index.html" className="header__logo logo">
            <picture>
              <source type="image/webp" srcSet="img/polytech-logo/webp/polytech-logo@0.5.webp 0.5x,
                                                img/polytech-logo/webp/polytech-logo@0.75.webp 0.75x,
                                                img/polytech-logo/webp/polytech-logo@1.webp 1x,
                                                img/polytech-logo/webp/polytech-logo@2.webp 2x,
                                                img/polytech-logo/webp/polytech-logo@3.webp 3x,
                                                img/polytech-logo/webp/polytech-logo@4.webp 4x,
                                              "/>

              <source type="image/png" srcSet="img/polytech-logo/png/polytech-logo@0.5.png 0.5x,
                                                img/polytech-logo/png/polytech-logo@0.75.png 0.75x,
                                                img/polytech-logo/png/polytech-logo@1.png 1x,
                                                img/polytech-logo/png/polytech-logo@2.png 2x,
                                                img/polytech-logo/png/polytech-logo@3.png 3x,
                                                img/polytech-logo/png/polytech-logo@4.png 4x,
                                              "/>
              <img width="125" height="37" src="./img/polytech-logo/png/polytech-logo@1.png" alt="Московский Политех" className="logo__img"/>
            </picture>
          </a>
          <button className="header__button">
            <svg width="38" height="27" viewBox="0 0 38 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="26.0052" x2="38" y2="26.0052" stroke="white" strokeWidth="1.7"/>
              <line y1="12.7491" x2="38" y2="12.7491" stroke="white" strokeWidth="1.7"/>
              <line y1="1.15" x2="38" y2="1.15" stroke="white" strokeWidth="1.7"/>
            </svg>
            <span className="visually-hidden">
              Открыть меню
            </span>
          </button>
          <nav className="header__navigation navigation">
            <a href="#" className="navigation__link">Поступающим</a>
            <a href="#" className="navigation__link">Обучающимся</a>
            <a href="#" className="navigation__link">Работникам</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="promo promo--login">
          <div className="promo__wrapper">
            <h1 className="promo__heading">Войдите в свой профиль
            </h1>
            <p className="promo__text">
            Мы всегда рады видеть вас на сайте Московского Политеха
            </p>
          </div>
          <div className="promo__wrapper promo__wrapper--login">
            <form action="" className="login-form__form">
              <label className="login-form__label login-form__label--login">
                <span className="login-form__name">Введите email</span>
                <input type="text" className="login-form__input login-form__input--login"/>
              </label>
              <label className="login-form__label login-form__label--password">
                <span className="login-form__name">Введите пароль</span>
                <input type="text" className="login-form__input login-form__input--password"/>
              </label>
              <button type="submit" className="login-form__submit">Войти</button>
            </form>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default LoginPage;
