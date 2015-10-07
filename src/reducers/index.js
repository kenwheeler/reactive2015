/* @flow */

import { combineReducers } from "redux";
import * as types from "../actions";

const data = (state = {
  schedule: [],
  speakers: []
}, action) => {
  return state
};

const rootReducer = combineReducers({
  data
});

export default rootReducer;
