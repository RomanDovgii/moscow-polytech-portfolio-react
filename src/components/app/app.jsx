import React from "react";
import {Switch, Route, Router} from "react-router-dom";
import {AppRoute} from "../../utils/const";
import browserHistory from "../../browser-history";
import MainPage from "../main-page/main-page";
import CheckPage from "../check-page/check-page";
import LoginPage from "../login-page/login-page";
import ProjectPage from "../project-page/project-page";
import SignupPage from "../signup-page/signup-page";
import StudentPage from "../student-page/student-page";
import UploadPage from "../upload-page/upload-page";

const App = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route
          exact
          path={AppRoute.MAIN}
          render={() => (
            <MainPage/>
          )}
        />
        <Route
          exact
          path={AppRoute.CHECK}
          render={() => (
            <CheckPage/>
          )}
        />
        <Route
          exact
          path={AppRoute.LOGIN}
          render={() => (
            <LoginPage/>
          )}
        />
        <Route
          exact
          path={AppRoute.PROJECT}
          render={() => (
            <ProjectPage/>
          )}
        />
        <Route
          exact
          path={AppRoute.SIGNUP}
          render={() => (
            <SignupPage/>
          )}
        />
        <Route
          exact
          path={AppRoute.STUDENT}
          render={() => (
            <StudentPage/>
          )}
        />
        <Route
          exact
          path={AppRoute.UPLOAD}
          render={() => (
            <UploadPage/>
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
