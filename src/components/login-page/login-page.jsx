import React from "react";
import Header from "../header/header";
import Promo from "../promo/promo";

const LoginPage = (props) => {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <Promo
          isLogin = {true}
        />
      </main>
    </React.Fragment>
  );
};

export default LoginPage;
