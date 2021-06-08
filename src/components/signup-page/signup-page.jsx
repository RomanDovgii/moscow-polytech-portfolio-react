import React from "react";

const SignupPage = (props) => {
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
        <section className="promo">
          <div className="promo__wrapper">
            <h1 className="promo__heading">Регистрация</h1>
            <p className="promo__text">
              Форма буквально на минуту,<br/>
              которая откроет вам доступ<br/>
              ко всем возможностям<br/>
              портфолио Московского Политеха
            </p>
          </div>
          <div className="promo__wrapper promo__wrapper--anchor">
            <a href="#signup-form" className="promo__anchor">Зарегистрироваться</a>
          </div>
        </section>
        <section className="signup-form" id="signup-form">
          <h2 className="visually-hidden">Форма Регистрации пользователя</h2>
          <form action="" className="signup-form__form">
            <label className="signup-form__label signup-form__label--name">
              <span className="signup-form__name">Имя</span>
              <input className="signup-form__input signup-form__input--name" type="text" name="name" placeholder="Иван" required/>
            </label>

            <label className="signup-form__label">
              <span className="signup-form__name">Фамилия</span>
              <input className="signup-form__input" type="text" name="discipline" placeholder="Иванов" required/>
            </label>

            <label className="signup-form__label">
              <span className="signup-form__name">Электронная почта</span>
              <input className="signup-form__input" type="email" name="discipline" placeholder="mospolytech@gmail.com" required/>
            </label>

            <label className="signup-form__label">
              <span className="signup-form__name">Группа</span>
              <input className="signup-form__input" type="text" name="discipline" placeholder="201-321" required/>
            </label>

            <label className="signup-form__label">
              <span className="signup-form__name">Пароль</span>
              <input className="signup-form__input" type="password" name="discipline" placeholder="до 30 символов" required/>
            </label>

            <label className="signup-form__label">
              <span className="signup-form__name">Повторите пароль</span>
              <input className="signup-form__input" type="password" name="discipline" placeholder="до 30 символов" required/>
            </label>

            <label className="signup-form__label">
              <span className="signup-form__name">Повторите пароль</span>
              <input className="signup-form__input" type="password" name="discipline" placeholder="до 30 символов" required/>
            </label>

            <label className="signup-form__label signup-form__label--agreement">
              <input className="signup-form__input" type="checkbox" name="discipline" required/>
              <span className="signup-form__name signup-form__name--data">Я согласен на обработку данных</span>
            </label>

            <button className="signup-form__submit" type="submit">Зарегистрироваться</button>
          </form>
        </section>
      </main>
    </React.Fragment>
  );
};

export default SignupPage;
