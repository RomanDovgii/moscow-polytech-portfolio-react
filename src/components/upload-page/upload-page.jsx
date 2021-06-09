import React from "react";
import Header from "../header/header";
import Promo from "../promo/promo";

const UploadPage = (props) => {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <Promo
          isUpload = {true}
        />
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
