import { handleActions, combineActions } from "redux-actions";
import * as actions from './auth.actions';

const initialState = {
  isFetching: false,
  user: null,
  error: null,
  message: null
};

const actionsHandlers = {
  [combineActions(actions.SIGNUP_REQUEST,
    actions.PASSWORD_FORGET_REQUEST,
    actions.PASSWORD_CHANGE_REQUEST)]: (state, {payload}) => ({
    ...state,
    isFetching: true
  }),
  [actions.SIGNUP_SUCCESS]: (state, {payload}) => {
    return {
      ...state,
      isFetching: false,
      error: null,
      user: payload
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
      error: null,
      user: payload
    }
  },
  [actions.LOGIN_FAILURE]: (state, {payload}) => {
    return {
      ...state,
      isFetching: false,
      error: payload
    }
  },

  [actions.SET_USER]: (state, {payload}) => {
    return {
      ...state,
      user: payload
    }
  },

  [actions.LOGOUT]: (state, {payload}) => {
    return {
      ...state,
      user: null
    }
  },
  [combineActions(actions.PASSWORD_FORGET_SUCCESS,
    actions.PASSWORD_CHANGE_SUCCESS)]: (state, {payload}) => {
    return {
      ...state,
      isFetching: false,
      message: payload
    }
  },
  [combineActions(actions.PASSWORD_CHANGE_FAILURE,
    actions.PASSWORD_FORGET_FAILURE)]: (state, {payload}) => {
    return {
      ...state,
      isFetching: false,
      error: payload
    }
  }

};

export default handleActions(actionsHandlers, initialState);