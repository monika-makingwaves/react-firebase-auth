import * as actions from '../state/auth/auth.actions';
import { takeLatest, call, put } from 'redux-saga/effects';
import { auth } from "../firebase";
import {onAuthStateChanged} from "../firebase/auth";

function* loginFlow({payload}) {
  const { email, password, callback } = payload;
  try {
    const response = yield call(auth.singInWithEmailAndPassword, email, password);

    yield put(actions.loginSuccess(response));
    yield call(callback);
  } catch(error) {

    console.log(error);
    yield put(actions.loginFailure(error.message));
  }
}

function* signupFlow({payload}) {
  const { email, password, callback } = payload;
  try {
    const response = yield call(auth.createUserWithEmailAndPassword,email, password);

    yield put(actions.signupSuccess(response));
    yield call(callback);
  } catch(error) {
    console.log(error);
    yield put(actions.signupFailure(error.message));
  }
}

function* signOutFlow() {
  yield call(auth.signOut);
}

function* passwordChangeFlow({payload}) {
  const { password } = payload;
  try {
    const response = yield call(auth.changePassword, password);
    console.log(response);

    yield put(actions.passwordChangeSuccess('Password changed.'));
  } catch(error) {
    console.log(error);
    yield put(actions.passwordChangeFailure(error.message));
  }
}

function* forgetPasswordFlow({payload}) {
  const { email } = payload;
  try {
    const response = yield call(auth.passwordReset, email);
    console.log(response);

    debugger;
    yield put(actions.passwordForgetSuccess('Check your email.'));
  } catch(error) {
    console.log(error);
    yield put(actions.passwordForgetFailure(error.message));
  }
}

export function* authSaga() {
  yield takeLatest(actions.LOGIN_REQUEST, loginFlow);
  yield takeLatest(actions.SIGNUP_REQUEST, signupFlow);
  yield takeLatest(actions.LOGOUT, signOutFlow);
  yield takeLatest(actions.PASSWORD_CHANGE_REQUEST, passwordChangeFlow);
  yield takeLatest(actions.PASSWORD_FORGET_REQUEST, forgetPasswordFlow);

  try {
    const user = yield call(onAuthStateChanged);
    yield put(actions.setUser(user));
  } catch(error) {
    console.log(error);
  }

}