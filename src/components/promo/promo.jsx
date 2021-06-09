import React from "react";
import LoginForm from "../login-form/login-form";
import {promoType} from "../../types/types";
import {HashLink} from "react-router-hash-link";

const Promo = ({isCheck, isLogin, isMain, isProject, isSignup, isUpload, isStudent}) => {
  let heading;
  let text;
  let button;
  let anchor;

  switch (true) {
    case isMain:
      heading = <>
                  Портфолио <br/>
                  Московского Политеха
                </>;
      text = <>Портфолио по проектам студентво с направления Графика, Графический, Транспортный и&nbsp;Промышленный дизайн и других.</>;
      break;
    case isLogin:
      heading = <>Вход в профиль профиль</>;
      text = <>Мы всегда рады видеть вас на сайте Московского Политеха</>;
      break;
    case isSignup:
      heading = <>Регистрация</>;
      text = <>Форма буквально на минуту,<br/>которая откроет вам доступ<br/>ко всем возможностям<br/>портфолио Московского Политеха</>;
      button = <>Зарегистрироваться</>;
      anchor = `#signup-form`;
      break;
    case isProject:
      heading = <>Внутренне познание и брутализм</>;
      text = <>Что есмь внутреннее познание и зачем оно нужно?
      Кому оно может помочь, а главное - зачем?
      Есть ли внутри душа или лишь безграничная пустота, которая находится также снаружи и отображается в
      виде брутализма, доминирующего в нашей современной архитектуре.
      К сожалению, попытки разнообразить его цветами не позволяют изменить суть его, которая полна серости и уныния.</>;
      break;
    case isUpload:
      heading = <>Загрузка проекта<br/> на портфолио Московского Политеха</>;
      text = <>Процесс загрузки невероятно прост — <br/>
      всего лишь заполните форму ниже.</>;
      button = <>Загрузить проект</>;
      anchor = `#upload-form`;
      break;
    case isCheck:
      heading = <>Проверка проекта <br/> от студента <span className="promo__group">группы 191-324</span> <br/>Иванова Ивана Ивановича <br/> с направления промышленный дизайн</>;
      text = <>Просим быть объективными при проверке работы, а также недопускать некачественные изображения или же тексты,
      содержащие мат, грамматические ошибки или любые другие опечатки, так как после данной проверки всё станет общедоступным,
      а, следовательно, начнет представлять Московский Политех.</>;
      break;
    case isStudent:
      heading = <>Портфолио студента <span className="visually-hidden">Иванова Ивана Ивановича</span></>;
      break;
    default:
      heading = <>Неизвестная страница</>;
      text = <>Похоже, что вы смогли найти страницу, которую еще никто не создал</>;
      break;
  }


  return (
    <section className={isStudent ? `promo promo--student` : `promo`}>
        <div className="promo__wrapper">
          <h1 className="promo__heading">
            {heading}
          </h1>
          {
            text ?
            <p className="promo__text">
              {text}
            </p> :
            ``
          }

        </div>
        {
          button ?
          <div className="promo__wrapper promo__wrapper--anchor">
            <HashLink
              smooth
              to={anchor}
              className="promo__anchor"
            >
              {button}
            </HashLink>
          </div> :
          ``
        }

        {
          isLogin ?
          <div className="promo__wrapper promo__wrapper--login">
            <LoginForm
              block = {`promo`}
            />
          </div> :
          ``
        }

      </section>
  );
};

Promo.propTypes = promoType;

export default Promo;
