import React from "react";
import Header from "../header/header";
import Catalog from "../catalog/catalog";
import Promo from "../promo/promo";
import Controls from "../controls/controls";
import Student from "../student/student";

const StudentPage = (props) => {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <Promo
          isStudent = {true}
        />
        <Student/>
        <Catalog
            cardCount = {3}
        />
        <Controls
          isStudent = {true}
        />
      </main>
    </React.Fragment>
  );
};

export default StudentPage;
