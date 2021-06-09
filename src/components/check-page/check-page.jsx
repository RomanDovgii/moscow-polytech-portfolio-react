import React from "react";
import {Link} from "react-router-dom";
import CheckForm from "../check-form/check-form";
import Header from "../header/header";
import Promo from "../promo/promo";

const CheckPage = (props) => {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <Promo
          isCheck = {true}
        />
        <CheckForm/>
      </main>
    </React.Fragment>
  );
};

export default CheckPage;
