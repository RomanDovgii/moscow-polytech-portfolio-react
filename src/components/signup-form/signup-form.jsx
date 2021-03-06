import React from "react";

const SignupForm = (props) => {
  return (
    <section className="signup-form" id="signup-form">
      <h2 className="visually-hidden">Форма регистрации пользователя</h2>
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
  );
};

export default SignupForm;
