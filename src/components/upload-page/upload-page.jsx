import React from "react";

const UploadPage = (props) => {
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
            <h1 className="promo__heading">Загрузите ваш проект<br/>
                                        на портфолио Московского Политеха
            </h1>
            <p className="promo__text">
              Процесс загрузки невероятно прост — <br/>
              всего лишь заполните форму ниже.
            </p>
          </div>
          <div className="promo__wrapper promo__wrapper--anchor">
            <a href="#upload-form" className="promo__anchor">Загрузить проект</a>
          </div>
        </section>
        <section className="upload-form" id="upload-form">
          <h2 className="visually-hidden">Форма загрузки проекта</h2>
          <form action="" className="upload-form__form">
            <label className="upload-form__label upload-form__label--name">
              <span className="upload-form__name">Название проекта</span>
              <input className="upload-form__input upload-form__input--name" type="text" name="name" placeholder="до 30 символов" required/>

            </label>
            <label className="upload-form__label upload-form__label--discipline">
              <span className="upload-form__name">Название дисциплины</span>
              <input className="upload-form__input upload-form__input--discipline" type="text" name="discipline" placeholder="до 30 символов" required/>

            </label>
            <label className="upload-form__label upload-form__label--description">
              <span className="upload-form__name">Описание проекта</span>
              <textarea className="upload-form__input upload-form__input--description" name="description" placeholder="до 200 символов" required></textarea>

            </label>
            <label className="upload-form__label upload-form__label--tags">
              <span className="upload-form__name">Теги</span>
              <input className="upload-form__input upload-form__input--tags" type="text" name="tags" placeholder="до 8 тегов"/>
            </label>
            <label className="upload-form__label upload-form__label--cover">
              <span className="upload-form__name">Обложка</span>
              <span className="upload-form__description">Файл jpeg, png, gif с пропорциями 3:4</span>
              <input className="upload-form__input upload-form__input--cover" type="file" name="cover" accept="image/jpeg, image/png, image/gif" required/>
              <div className="upload-form__visual-input"></div>
            </label>
            <label className="upload-form__label upload-form__label--project">
              <span className="upload-form__name">Проект</span>
              <span className="upload-form__description">До 10 файлов jpeg, png, gif с пропорциями 3:4</span>
              <input className="upload-form__input upload-form__input--project" type="file" name="project" accept="image/jpeg, image/png, image/gif" multiple required/>
              <div className="upload-form__visual-input"></div>
            </label>
            <label className="upload-form__label upload-form__label--video">
              <span className="upload-form__name">Видео</span>
              <input className="upload-form__input upload-form__input--video" type="file" name="video" accept="video/*" required/>
              <div className="upload-form__visual-input"></div>
            </label>

            <p className="upload-form__alert">
              Проект появится в общем доступе после того, как пройдет модерацию.
            </p>

            <button className="upload-form__submit" type="submit">Загрузить проект</button>
          </form>
        </section>
      </main>
    </React.Fragment>
  );
};

export default UploadPage;
