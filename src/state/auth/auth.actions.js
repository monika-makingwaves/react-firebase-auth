import { createAction } from "redux-actions";

export const SIGNUP_REQUEST = "AUTH/SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "AUTH/SIGNUP_SUCCESS";
export const SIGNUP_FAILLURE = "AUTH/SIGNUP_FAILLURE";

export const LOGIN_REQUEST = "AUTH/LOGIN_REQUEST";
export const LOGIN_SUCCESS = "AUTH/LOGIN_SUCCESS";
export const LOGIN_FAILURE = "AUTH/LOGIN_FAILURE";

export const SET_USER = "AUTH/SET_USER";
export const LOGOUT = "AUTH/LOGOUT";

export const PASSWORD_FORGET_REQUEST = "AUTH/PASSWORD_FORGET_REQUEST";
export const PASSWORD_FORGET_SUCCESS = "AUTH/PASSWORD_FORGET_SUCCESS";
export const PASSWORD_FORGET_FAILURE = "AUTH/PASSWORD_FORGET_FAILURE";

export const PASSWORD_CHANGE_REQUEST = "AUTH/PASSWORD_CHANGE_REQUEST";
export const PASSWORD_CHANGE_SUCCESS = "AUTH/PASSWORD_CHANGE_SUCCESS";
export const PASSWORD_CHANGE_FAILURE = "AUTH/PASSWORD_CHANGE_FAILURE";

export const signupRequest = createAction(SIGNUP_REQUEST);
export const signupSuccess = createAction(SIGNUP_SUCCESS);
export const signupFailure = createAction(SIGNUP_FAILLURE);

export const loginRequest = createAction(LOGIN_REQUEST);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFailure = createAction(LOGIN_FAILURE);

export const setUser = createAction(SET_USER);
export const logout = createAction(LOGOUT);

export const passwordForgetRequest = createAction(PASSWORD_FORGET_REQUEST);
export const passwordForgetSuccess = createAction(PASSWORD_FORGET_SUCCESS);
export const passwordForgetFailure = createAction(PASSWORD_FORGET_FAILURE);

export const passwordChangeRequest = createAction(PASSWORD_CHANGE_REQUEST);
export const passwordChangeSuccess = createAction(PASSWORD_CHANGE_SUCCESS);
export const passwordChangeFailure = createAction(PASSWORD_CHANGE_FAILURE);
