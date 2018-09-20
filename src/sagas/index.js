import { runSaga } from '../utils/saga';
import {authSaga} from "./auth";

export const runSagas = () => {
  runSaga(authSaga)
};