import React from "react";
import Header from "../header/header";

const LoginPage = (props) => {
  return (
    <React.Fragment>
      <Header/>
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
