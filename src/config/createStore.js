import {createSagaMiddleware} from "../utils/saga";
import {getRootReducers} from "../state";
import {createCommonStore} from "../utils/store";


export default (initialState = {}) => {
  const middleware = [];
  const enhancers = [];

  if(process.env.NODE_ENV === 'development') {
    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
      enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
    }
  }

  middleware.push(createSagaMiddleware());

  return createCommonStore(
    getRootReducers(),
    initialState,
    middleware,
    enhancers
  );
};