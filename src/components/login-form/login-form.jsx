import React from "react";
import {loginType} from "../../types/types";

const LoginForm = ({block}) => {
  let formClass = `login-form`;

  if (block) {
    formClass = `${block}__login-form login-form`;
  }

  return (
    <form action="" className={formClass}>
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
  );
};

LoginForm.propTypes = loginType;

export default LoginForm;
