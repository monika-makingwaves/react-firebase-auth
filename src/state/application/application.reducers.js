import { handleActions } from "redux-actions";
import * as actions from "./application.actions";

const initialState = {
  init: false,
  networkConnection: true,
  state: "active"
};

const actionsHandlers = {
  [actions.SET_APPLICATION_INIT]: state => ({
    ...state,
    init: true
  })
};

export default handleActions(actionsHandlers, initialState);