import React from "react";
import Header from "../header/header";
import Promo from "../promo/promo";
import Filter from "../filter/filter";
import Catalog from "../catalog/catalog";

const MainPage = (props) => {
  return (
    <React.Fragment>
        <Header/>
        <main>
          <Promo
            isMain = {true}
          />
          <Filter/>
          <Catalog
            cardCount = {9}
          />
        </main>
      </React.Fragment>
  );
};

export default MainPage;
