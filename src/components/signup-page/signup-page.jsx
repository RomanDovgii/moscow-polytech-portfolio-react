import React from "react";
import Header from "../header/header";
import Promo from "../promo/promo";
import SignupForm from "../signup-form/signup-form";

const SignupPage = (props) => {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <Promo
          isSignup = {true}
        />
        <SignupForm/>
      </main>
    </React.Fragment>
  );
};

export default SignupPage;
