import * as actions from '../state/auth/auth.actions';
import { takeLatest, call, put } from 'redux-saga/effects';
import { auth } from "../firebase";

function* loginFlow({payload}) {

}

function* signupFlow({payload}) {
  const { email, password } = payload;
  try {
    const response = yield call(auth.createUserWithEmailAndPassword,email, password);
    yield put(actions.signupSuccess('token'));
    yield put(payload.callback());
  } catch(error) {
    console.log(error);
    yield put(actions.signupFailure(error.message));
  }
}

export function* authSaga() {
  yield takeLatest(actions.LOGIN_REQUEST, loginFlow);
  yield takeLatest(actions.SIGNUP_REQUEST, signupFlow);
}