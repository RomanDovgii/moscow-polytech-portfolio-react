import React from "react";

const StudentPage = (props) => {
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
        <section className="promo promo--student">
          <div className="promo__wrapper">
            <h1 className="promo__heading">Портфолио студента</h1>
          </div>
        </section>
        <section className="student">
          <div className="student__wrapper">
            <div className="student__content">
              <img src="https://i.pravatar.cc/133" alt="Иванов Иван Иванович" width="133" height="133" className="student__img"/>
              <h1 className="student__name">Иванов Иван Иванович</h1>
              <p className="student__specialization">Графический дизайн, 3 курс</p>
              <p className="student__about">
                Амбициозный, целеустремленный
                графический дизайнер, довольнокоммуникабельный и когнитивно гибкий.
                Буду рад выслушать Вас и помочь воплотить
                идеи в жизнь!
              </p>
            </div>

            <div className="student__other">
              <p className="student__moto">
                Плоский минималистичный
                дизайн — моя стезя
              </p>
              <ul className="stundet__techs techs">
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

          </div>
        </section>
        <section className="catalog catalog--student">
          <ul className="catalog__list">
            <li className="catalog__project-card project-card">
              <a href="./project.html" className="project-card__link">
                <img src="https://picsum.photos/seed/picsum/400/300" width="400" height="300" alt="" className="project-card__img"/>
              </a>
              <a className="project-card__heading" href="#">Название проекта</a>
              <div className="project-card__info">
                <a className="project-card__student" href="#">Иван Иванович Иванов</a>
                <a className="project-card__discipline" href="#">Проектирование крупных информационных проектов</a>
              </div>
            </li>
            <li className="catalog__project-card project-card">
              <a href="./project.html" className="project-card__link">
                <img src="https://picsum.photos/seed/picsum/400/300" width="400" height="300" alt="" className="project-card__img"/>
              </a>
              <a className="project-card__heading" href="#">Название проекта</a>
              <div className="project-card__info">
                <p className="project-card__student">Иван Иванович Иванов</p>
                <p className="project-card__discipline">Проектирование крупных информационных проектов</p>
              </div>
            </li>
            <li className="catalog__project-card project-card">
              <a href="./project.html" className="project-card__link">
                <img src="https://picsum.photos/seed/picsum/400/300" width="400" height="300" alt="" className="project-card__img"/>
              </a>
              <a className="project-card__heading" href="#">Название проекта</a>
              <div className="project-card__info">
                <a className="project-card__student" href="#">Иван Иванович Иванов</a>
                <a className="project-card__discipline" href="#">Проектирование крупных информационных проектов</a>
              </div>
            </li>
          </ul>
          <div className="catalog__wrapper">
            <div className="catalog__page-nav page-nav">
              <p className="page-nav__pages">
                <span className="visually-hidden">страница</span>
                <span className="page-nav__current">01</span> - <span className="page-nav__total">25</span>
                <span className="visually-hidden">страниц всего</span>
              </p>
              <a href="#" className="page-nav__link page-nav__link--previous">
                <svg width="19" height="9" viewBox="0 0 19 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.646446 4.11617C0.451185 4.31144 0.451185 4.62802 0.646446 4.82328L3.82843 8.00526C4.02369 8.20052 4.34027 8.20052 4.53553 8.00526C4.7308 7.81 4.7308 7.49342 4.53553 7.29815L1.70711 4.46973L4.53553 1.6413C4.7308 1.44604 4.7308 1.12945 4.53553 0.934193C4.34027 0.73893 4.02369 0.73893 3.82843 0.934193L0.646446 4.11617ZM19 3.96973L1 3.96973V4.96973L19 4.96973V3.96973Z" fill="black"/>
                </svg>
                <span className="visually-hidden">Предыдущая страница</span>
              </a>
              <a href="#" className="page-nav__link page-nav__link--next">
                <svg width="19" height="9" viewBox="0 0 19 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.646446 4.11617C0.451185 4.31144 0.451185 4.62802 0.646446 4.82328L3.82843 8.00526C4.02369 8.20052 4.34027 8.20052 4.53553 8.00526C4.7308 7.81 4.7308 7.49342 4.53553 7.29815L1.70711 4.46973L4.53553 1.6413C4.7308 1.44604 4.7308 1.12945 4.53553 0.934193C4.34027 0.73893 4.02369 0.73893 3.82843 0.934193L0.646446 4.11617ZM19 3.96973L1 3.96973V4.96973L19 4.96973V3.96973Z" fill="black"/>
                </svg>
                <span className="visually-hidden">Следующая страница</span>
              </a>
            </div>
          </div>
        </section>

        <section className="controls controls--student">
          <div className="controls__wrapper">
            <a href="#" className="controls__more">Больше работ</a>
            <a href="#" className="controls__download">Скачать портфолио</a>
            <a href="#" className="controls__message">Написать студенту</a>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default StudentPage;