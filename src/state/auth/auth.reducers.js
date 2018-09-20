import { handleActions } from "redux-actions";
import * as actions from './auth.actions';

const initialState = {
  isFetching: false,
  token: null,
  error: null
};

const actionsHandlers = {
  [actions.SIGNUP_REQUEST]: (state, {payload}) => ({
    ...state,
    isFetching: true
  }),
  [actions.SIGNUP_SUCCESS]: (state, {payload}) => {
    return {
      ...state,
      isFetching: false,
      token: payload
    }
  },
  [actions.SIGNUP_FAILLURE]: (state, {payload}) => {
    return {
      ...state,
      isFetching: false,
      error: payload
    }
  },

  [actions.LOGIN_REQUEST]: (state, {payload}) => {
    return {
      ...state,
      isFetching: true
    }
  },
  [actions.LOGIN_SUCCESS]: (state, {payload}) => {
    return {
      ...state,
      isFetching: false,
      token: payload
    }
  },
  [actions.LOGIN_FAILURE]: (state, {payload}) => {
    return {
      ...state,
      isFetching: false,
      error: payload
    }
  },

  [actions.LOGOUT]: (state, {payload}) => {
    return {
      ...state,
      token: null
    }
  }

};

export default handleActions(actionsHandlers, initialState);