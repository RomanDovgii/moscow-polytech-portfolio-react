import React from "react";
import Header from "../header/header";
import Promo from "../promo/promo";
import Catalog from "../catalog/catalog";
import Controls from "../controls/controls";
import Student from "../student/student";

const ProjectPage = (props) => {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <Promo
          isProject = {true}
        />
        <Student
        isProject = {true}
        />

        <section className="big-slider">
          <h2 className="visually-hidden">Изображения с проекта</h2>
          <div className="big-slider__wrapper">
            <div className="big-slider__controls">
              <button className="big-slider__button big-slider__button--prev">
                <svg width="19" height="9" viewBox="0 0 19 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.646446 4.11617C0.451185 4.31144 0.451185 4.62802 0.646446 4.82328L3.82843 8.00526C4.02369 8.20052 4.34027 8.20052 4.53553 8.00526C4.7308 7.81 4.7308 7.49342 4.53553 7.29815L1.70711 4.46973L4.53553 1.6413C4.7308 1.44604 4.7308 1.12945 4.53553 0.934193C4.34027 0.73893 4.02369 0.73893 3.82843 0.934193L0.646446 4.11617ZM19 3.96973L1 3.96973V4.96973L19 4.96973V3.96973Z" fill="currentColor"/>
                </svg>
                <span className="visually-hidden">
                  Предыдущий слайд
                </span>
              </button>
              <button className="big-slider__button big-slider__button--next">
                <svg width="19" height="9" viewBox="0 0 19 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.646446 4.11617C0.451185 4.31144 0.451185 4.62802 0.646446 4.82328L3.82843 8.00526C4.02369 8.20052 4.34027 8.20052 4.53553 8.00526C4.7308 7.81 4.7308 7.49342 4.53553 7.29815L1.70711 4.46973L4.53553 1.6413C4.7308 1.44604 4.7308 1.12945 4.53553 0.934193C4.34027 0.73893 4.02369 0.73893 3.82843 0.934193L0.646446 4.11617ZM19 3.96973L1 3.96973V4.96973L19 4.96973V3.96973Z" fill="currentColor"/>
                </svg>
                <span className="visually-hidden">
                  Следующий слайд
                </span>
              </button>
            </div>
            <div className="big-slider__slider">
              <div className="big-slider__slide">
                <img src="https://picsum.photos/seed/picsum/1920/1080" alt="" width="1000" className="big-slider__img"/>
              </div>
            </div>
          </div>
        </section>

        <section className="description">
          <div className="description__wrapper">
            <h2 className="description__heading">Подробное описание проекта</h2>
              <p className="description__text">
                Равным образом повышение уровня гражданского сознания требует от нас анализа экономической целесообразности принимаемых решений. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности способствует подготовке и реализации существующих финансовых и административных условий.
                Равным образом повышение уровня гражданского сознания требует от нас анализа экономической целесообразности принимаемых решений. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности способствует подготовке и реализации существующих финансовых и административных условий.
              </p>
          </div>
        </section>

        <section className="project-techs">
          <div className="project-techs__wrapper">
            <h2 className="project-techs__heading">Технологии, использованные на проекте:</h2>
            <ul className="project-techs__techs techs techs--project">
              <li className="techs__item techs__item--ai">
                <span className="visually-hidden">
                  <span className="techs__name">Adobe Illustrator</span>
                  или в сокращении
                </span>
                <a href="#" className="techs__link techs__link--ai">Ai</a>
              </li>
              <li className="techs__item">
                <span className="visually-hidden">
                  <span className="techs__name">Adobe Photoshop</span>
                  или в сокращении
                </span>
                <a href="#" className="techs__link techs__link--ps">Ps</a>
              </li>
              <li className="techs__item">
                <span className="visually-hidden">
                  <span className="techs__name">Adobe InDesign</span>
                  или в сокращении
                </span>
                <a href="#" className="techs__link techs__link--id">Id</a>
              </li>
              <li className="techs__item">
                <span className="visually-hidden">
                  <span className="techs__name">Adobe AfterEffects</span>
                  или в сокращении
                </span>
                <a href="#" className="techs__link techs__link--ae">Ae</a>
              </li>
              <li className="techs__item">
                <span className="visually-hidden">
                  <span className="techs__name">Adobe Premiere Pro</span>
                  или в сокращении
                </span>
                <a href="#" className="techs__link techs__link--pr">Pr</a>
              </li>
            </ul>
          </div>
        </section>

        <section className="hashtags">
          <div className="hashtags__wrapper">
            <h2 className="hashtags__heading">Хэштеги</h2>
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
        </section>

        <Catalog
            cardCount = {3}
            isProject = {true}
        />
        <Controls/>
      </main>
    </React.Fragment>
  );
};

export default ProjectPage;
