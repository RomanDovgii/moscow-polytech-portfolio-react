import React from "react";

const CheckForm = (props) => {
  return (
    <section className="check-form">
      <h2 className="visually-hidden">Форма проверки работы</h2>
      <form action="" className="check-form__form">
        <section className="check-form__section check-form__section--name">
          <h2 className="check-form__name">Название проекта</h2>
          <p className="check-form__project-info check-form__project-info--name">Внутренне познание и брутализм</p>
          <label className="check-form__accepted accepted">
            <input className="accepted__input" type="checkbox" name="name"/>
            <span className="accepted__text">Раздел соответствует стандартам качества</span>
          </label>
        </section>
        <section className="check-form__section check-form__section--discipline">
          <h2 className="check-form__name">Название дисциплины</h2>
          <p className="check-form__project-info check-form__project-info--discipline">Графический дизайн</p>
          <label className="check-form__accepted accepted">
            <input className="accepted__input" type="checkbox" name="descipline"/>
            <span className="accepted__text">Раздел соответствует стандартам качества</span>
          </label>
        </section>
        <section className="check-form__section check-form__section--description">
          <h2 className="check-form__name">Описание проекта</h2>
          <p className="check-form__project-info check-form__project-info--description">
            Равным образом повышение уровня гражданского сознания требует от нас анализа экономической целесообразности принимаемых решений. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности способствует подготовке и реализации существующих финансовых и административных условий. Равным образом повышение уровня гражданского сознания требует от нас анализа экономической целесообразности принимаемых решений. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности способствует подготовке и реализации существующих финансовых и административных условий.
          </p>
          <label className="check-form__accepted accepted">
            <input className="accepted__input" type="checkbox" name="description"/>
            <span className="accepted__text">Раздел соответствует стандартам качества</span>
          </label>
        </section>
        <section className="check-form__section check-form__section--tags">
          <span className="check-form__name">Теги</span>
          <div className="check-form__hashtags hashtags">
            <div className="hashtags__wrapper">
              <ul className="hashtags__list">
                <li className="hashtags__item">
                  <a href="">Брутализм</a>
                </li>
                <li className="hashtags__item">
                  <a href="">Самопознание</a>
                </li>
                <li className="hashtags__item">
                  <a href="">Демагогия</a>
                </li>
              </ul>
            </div>
          </div>
          <label className="check-form__accepted accepted">
            <input className="accepted__input" type="checkbox" name="tags"/>
            <span className="accepted__text">Раздел соответствует стандартам качества</span>
          </label>
        </section>
        <section className="check-form__section check-form__section--cover">
          <h2 className="check-form__name">Обложка</h2>
          <img src="https://picsum.photos/seed/picsum/1920/1080" alt="" className="check-form__img check-form__img--cover"/>
          <label className="check-form__accepted accepted">
            <input className="accepted__input" type="checkbox" name="cover"/>
            <span className="accepted__text">Раздел соответствует стандартам качества</span>
          </label>
        </section>
        <section className="check-form__section check-form__section--project">
          <span className="check-form__name">Файлы проекта</span>
          <ul className="check-form__uploaded uploaded">
            <li className="uploaded__item"><img src="https://picsum.photos/seed/picsum/1920/1080" alt=""/></li>
            <li className="uploaded__item"><img src="https://picsum.photos/seed/picsum/1920/1080" alt=""/></li>
            <li className="uploaded__item"><img src="https://picsum.photos/seed/picsum/1920/1080" alt=""/></li>
            <li className="uploaded__item"><img src="https://picsum.photos/seed/picsum/1920/1080" alt=""/></li>
            <li className="uploaded__item"><img src="https://picsum.photos/seed/picsum/1920/1080" alt=""/></li>
            <li className="uploaded__item"><img src="https://picsum.photos/seed/picsum/1920/1080" alt=""/></li>
            <li className="uploaded__item"><img src="https://picsum.photos/seed/picsum/1920/1080" alt=""/></li>
            <li className="uploaded__item"><img src="https://picsum.photos/seed/picsum/1920/1080" alt=""/></li>
            <li className="uploaded__item"><img src="https://picsum.photos/seed/picsum/1920/1080" alt=""/></li>
            <li className="uploaded__item"><img src="https://picsum.photos/seed/picsum/1920/1080" alt=""/></li>
          </ul>
          <label className="check-form__accepted accepted">
            <input className="accepted__input" type="checkbox" name="files"/>
            <span className="accepted__text">Раздел соответствует стандартам качества</span>
          </label>
        </section>
        <section className="check-form__section check-form__section--video">
          <span className="check-form__name">Видео</span>
          <video className="check-form__video" src="https://www.youtube.com/watch?v=c5cGJyWg6sU" poster="https://picsum.photos/seed/picsum/1920/1080"></video>
          <label className="check-form__accepted accepted">
            <input className="accepted__input" type="checkbox" name="video"/>
            <span className="accepted__text">Раздел соответствует стандартам качества</span>
          </label>
        </section>

        <button className="check-form__submit" type="submit">Одобрить проект</button>
      </form>
    </section>
  );
};

export default CheckForm;
