import React from "react";
import {controlsType} from "../../types/types";

const Controls = ({isStudent}) => {
  return (
    <section className={isStudent ? "controls controls--student" : "controls"}>
      <h2 className="visually-hidden">Мобильные элеметы управления</h2>
      <div className="controls__wrapper">
        <a href="#" className="controls__more">Больше работ</a>
        {isStudent ?
        <React.Fragment>
          <a href="#" className="controls__download">Скачать портфолио</a>
          <a href="#" className="controls__message">Написать студенту</a>
        </React.Fragment> :
        ``
        }
      </div>
    </section>
  );
};

Controls.propTypes = controlsType;

export default Controls;
