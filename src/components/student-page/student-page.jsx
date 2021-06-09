import React from "react";
import Header from "../header/header";
import Catalog from "../catalog/catalog";

const StudentPage = (props) => {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <section className="promo promo--student">
          <div className="promo__wrapper">
            <h1 className="promo__heading">Портфолио студента <span className="visually-hidden">Иванова Ивана Ивановича</span></h1>
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
        <Catalog
            cardCount = {3}
        />

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
