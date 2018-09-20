import { createAction } from "redux-actions";

export const SIGNUP_REQUEST = "AUTH/SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "AUTH/SIGNUP_SUCCESS";
export const SIGNUP_FAILLURE = "AUTH/SIGNUP_FAILLURE";

export const LOGIN_REQUEST = "AUTH/LOGIN_REQUEST";
export const LOGIN_SUCCESS = "AUTH/LOGIN_SUCCESS";
export const LOGIN_FAILURE = "AUTH/LOGIN_FAILURE";

export const SET_TOKEN = "AUTH/TOKEN";
export const LOGOUT = "AUTH/LOGOUT";

export const signupRequest = createAction(SIGNUP_REQUEST);
export const signupSuccess = createAction(SIGNUP_SUCCESS);
export const signupFailure = createAction(SIGNUP_FAILLURE);

export const loginRequest = createAction(LOGIN_REQUEST);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFailure = createAction(LOGIN_FAILURE);

export const setToken = createAction(SET_TOKEN);
export const logout = createAction(LOGOUT);