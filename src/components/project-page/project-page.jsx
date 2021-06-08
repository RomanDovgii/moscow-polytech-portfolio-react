import React from "react";

const ProjectPage = (props) => {
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
            <h1 className="promo__heading">Внутренне познание и брутализм</h1>
            <p className="promo__text">
              Что есмь внутреннее познание и зачем оно нужно?
              Кому оно может помочь, а главное - зачем?
              Есть ли внутри душа или лишь безграничная пустота, которая находится также снаружи и отображается в виде брутализма, доминирующего в нашей современной архитектуре.
              К сожалению, попытки разнообразить его цветами не позволяют изменить суть его, которая полна серости и уныния.
            </p>
          </div>
        </section>
        <section className="student">
          <div className="student__wrapper student__wrapper--project">
            <div className="student__content student__content--project">
              <img src="https://i.pravatar.cc/133" alt="Иванов Иван Иванович" width="133" height="133" className="student__img"/>
              <div className="student__info">
                <h1 className="student__name">Иванов Иван Иванович</h1>
                <p className="student__specialization">Графический дизайн, 3 курс</p>
              </div>
            </div>
          </div>
        </section>

        <section className="big-slider">
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

        <section className="catalog catalog--project">
          <div className="catalog__wrapper">
            <h2 className="catalog__heading">Похожие проекты</h2>
            <ul className="catalog__list catalog__list--project">
              <li className="catalog__project-card project-card">
                <a href="./project.html" className="project-card__link">
                  <img src="https://picsum.photos/seed/picsum/400/300" width="400" height="300" alt="" className="project-card__img"/>
                </a>
                <a className="project-card__heading" href="./project.html">Название проекта</a>
                <div className="project-card__info">
                  <a className="project-card__student" href="./student.html">Иван Иванович Иванов</a>
                  <a className="project-card__discipline" href="#">Проектирование крупных информационных проектов</a>
                </div>
              </li>
              <li className="catalog__project-card project-card">
                <a href="./project.html" className="project-card__link">
                  <img src="https://picsum.photos/seed/picsum/400/300" width="400" height="300" alt="" className="project-card__img"/>
                </a>
                <a className="project-card__heading" href="./project.html">Название проекта</a>
                <div className="project-card__info">
                  <p className="project-card__student" href="./student.html">Иван Иванович Иванов</p>
                  <p className="project-card__discipline">Проектирование крупных информационных проектов</p>
                </div>
              </li>
              <li className="catalog__project-card project-card">
                <a href="./project.html" className="project-card__link">
                  <img src="https://picsum.photos/seed/picsum/400/300" width="400" height="300" alt="" className="project-card__img"/>
                </a>
                <a className="project-card__heading" href="./project.html">Название проекта</a>
                <div className="project-card__info">
                  <a className="project-card__student" href="./student.html">Иван Иванович Иванов</a>
                  <a className="project-card__discipline" href="#">Проектирование крупных информационных проектов</a>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default ProjectPage;