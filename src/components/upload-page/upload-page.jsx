import React from "react";
import Header from "../header/header";
import Promo from "../promo/promo";
import UploadForm from "../upload-form/upload-form";

const UploadPage = (props) => {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <Promo
          isUpload = {true}
        />
        <UploadForm/>
      </main>
    </React.Fragment>
  );
};

export default UploadPage;
