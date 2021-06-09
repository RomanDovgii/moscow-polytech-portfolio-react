import React from "react";
import ProjectCard from "../project-card/project-card";
import {catalogType} from "../../types/types";
import Controls from "../controls/controls";

const Catalog = ({cardCount, isProject}) => {
  let cards = [];

  for (let index = 0; index < cardCount; index++) {
    cards.push(`block`);
  }

  return (
    <section className="catalog catalog--index">
      <h2 className="visually-hidden">Каталог работ</h2>
      <ul className="catalog__list">
        {cards.map((movie, index) => {
          return (
            <ProjectCard
              key = {`card-${index}`}
            />
          );
        })}
      </ul>
      {!isProject ?
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
      </div>:
      ``
      }
    </section>
  );
};

Catalog.propTypes = catalogType;

export default Catalog;
