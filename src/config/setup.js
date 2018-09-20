import React from "react";
import { Provider } from "react-redux";
import App from '../components/App/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createStore from './createStore';
import { runSagas } from '../sagas';

import * as routes from './routes';
import Home from '../pages/Home';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import SignUpPage from "../pages/SignUpPage/SignUpPage";

export default function() {
  const store = createStore();
  runSagas();

  return (
    <Provider store={store}>
      <Router>
        <App>
          <Route exact path={routes.LANDING} component={LandingPage} />
          <Route exact path={routes.SIGN_UP} component={SignUpPage} />
          <Route exact path={routes.LOGIN} component={LoginPage} />

          <Route exact path={routes.HOME} component={Home} />
          <Route exact path={routes.PROFILE} component={ProfilePage} />
        </App>
      </Router>
    </Provider>
  );
}