import * as actions from '../state/auth/auth.actions';
import { takeLatest, call, put } from 'redux-saga/effects';
import { auth } from "../firebase";

function* loginFlow({payload}) {
  const { email, password, callback } = payload;
  try {
    const response = yield call(auth.singInWithEmailAndPassword, email, password);
    console.log(response);
    yield put(actions.loginSuccess('token'));
    yield call(callback());
  } catch(error) {
    console.log(error);
    yield put(actions.loginFailure(error.message));
  }
}

function* signupFlow({payload}) {
  const { email, password, callback } = payload;
  try {
    const response = yield call(auth.createUserWithEmailAndPassword,email, password);
    console.log(response);
    yield put(actions.signupSuccess('token'));
    yield call(callback());
  } catch(error) {
    console.log(error);
    yield put(actions.signupFailure(error.message));
  }
}

function* signOutFlow() {
  yield call(auth.signOut());
}

export function* authSaga() {
  yield takeLatest(actions.LOGIN_REQUEST, loginFlow);
  yield takeLatest(actions.SIGNUP_REQUEST, signupFlow);
  yield takeLatest(actions.LOGOUT, signOutFlow)
}