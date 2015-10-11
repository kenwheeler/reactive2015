/* @flow */

import { combineReducers } from "redux";
import * as types from "../actions";

const data = (state = {
  schedule: [],
  speakers: [],
  tweets: [],
  loading: false
}, action) => {
  switch (action.type) {
  case types.REQUEST_TWEETS:
    return Object.assign({}, state, {
      loading: true
    });
  case types.RECEIVE_TWEETS:
    return Object.assign({}, state, {
      loading: false,
      tweets: action.tweets
    });
  default:
    return state;
  }
  return state
};

const rootReducer = combineReducers({
  data
});

export default rootReducer;
