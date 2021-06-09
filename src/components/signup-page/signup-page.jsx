import React from "react";
import Header from "../header/header";

const SignupPage = (props) => {
  return (
    <React.Fragment>
      <Header/>
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
