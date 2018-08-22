import React from "react";
import { Provider } from "react-redux";
import App from '../components/App/App';
import createStore from './createStore';
import { runSagas } from '../sagas';

export default function() {
  const store = createStore();
  runSagas();

  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
}