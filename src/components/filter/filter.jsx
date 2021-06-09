import React from "react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Filter = (props) => {
  return (
    <section className="filter">
      <div className="filter__wrapper">
        <h2 className="visually-hidden">Фильтры</h2>
        <div className="filter__tabs">
          <HashLink
            smooth
            to="#filters"
            className="filter__projects">
            <h2>Проекты</h2>
          </HashLink>
          <Link to="/upload" className="filter__upload">Загрузить проект</Link>
        </div>
        <form className="filter__filters" id="filters">

          <label className="filter__search search">
            <span className="visually-hidden">Поиск по названию</span>
            <input className="search__input" type="text" name="name" placeholder="Поиск по проектам"/>
          </label>
          <div className="filter__break"></div>
          <label className="filter__select select">
            <span className="visually-hidden">Поиск по...</span>
            <select name="" id="" className="select__input">
              <option value="" className="select__option" defaultValue disabled hidden>Поиск по проектам </option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
            </select>
          </label>
          <label className="filter__select select">
            <span className="visually-hidden">Поиск по...</span>
            <select name="" id="" className="select__input">
              <option value="" className="select__option" defaultValue disabled hidden>Поиск по проектам </option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
            </select>
          </label>

          <label className="filter__select select">
            <span className="visually-hidden">Поиск по...</span>
            <select name="" id="" className="select__input">
              <option value="" className="select__option" defaultValue disabled hidden>Поиск по проектам </option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
            </select>
          </label>

          <label className="filter__select select">
            <span className="visually-hidden">Поиск по...</span>
            <select name="" id="" className="select__input">
              <option value="" className="select__option" defaultValue disabled hidden>Поиск по проектам </option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
            </select>
          </label>

          <label className="filter__select select">
            <span className="visually-hidden">Поиск по...</span>
            <select name="" id="" className="select__input">
              <option value="" className="select__option" defaultValue disabled hidden>Поиск по проектам </option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
            </select>
          </label>

          <label className="filter__select select">
            <span className="visually-hidden">Поиск по...</span>
            <select name="" id="" className="select__input">
              <option value="" className="select__option" defaultValue disabled hidden>Поиск по проектам </option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
              <option value="" className="select__option">Элемент 1</option>
            </select>
          </label>
        </form>
      </div>
    </section>
  );
};

export default Filter;
