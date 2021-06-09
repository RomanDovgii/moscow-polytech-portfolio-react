import React from "react";
import {Link} from "react-router-dom";

const ProjectCard = () => {
  return (
    <li className="catalog__project-card project-card">
      <Link to="/projects/1" className="project-card__link">
        <img src="https://picsum.photos/seed/picsum/400/300" width="400" height="300" alt="" className="project-card__img"/>
      </Link>
      <Link className="project-card__heading" to="/projects/1">Название проекта</Link>
      <div className="project-card__info">
        <Link className="project-card__student" to="/students/1">Иван Иванович Иванов</Link>
        <Link className="project-card__discipline" to="#">Проектирование крупных информационных проектов</Link>
      </div>
    </li>
  );
};

export default ProjectCard;
