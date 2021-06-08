import React from "react";

const CheckPage = (props) => {
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
        <section className="promo promo--upload">
          <div className="promo__wrapper">
            <h1 className="promo__heading">Проверка проекта <br/> от студента <span className="promo__group">группы 191-324</span> <br/>Иванова Ивана Ивановича <br/> с направления промышленный дизайн</h1>
            <p className="promo__text">
              Просим быть объективными при проверке работы, а также недопускать некачественные изображения или же тексты, содержащие мат, грамматические ошибки или любые другие опечатки, так как после данной проверки всё станет общедоступным, а, следовательно, начнет представлять Московский Политех.
            </p>
          </div>
        </section>
        <section className="check-form">
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
      </main>
    </React.Fragment>
  );
};

export default CheckPage;
