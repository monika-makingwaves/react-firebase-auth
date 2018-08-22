import { combineReducers, compose, applyMiddleware, createStore } from "redux";

let store;

const makeRootReducer = reducers => combineReducers({ ...reducers });

export const createCommonStore = (
  reducers,
  initialState = {},
  middleware = [],
  enhancers = []
) => {
  store = createStore(
    makeRootReducer(reducers),
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  );

  return store;
};

export const getStore = () => {
  if (!store) {
    throw new Error(
      'Service should create store before you could call "getStore" method. Use "createCommonStore" method to create a store.'
    );
  }

  return store;
};