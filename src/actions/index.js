/* @flow */

import React from "react-native";

export const REQUEST_TWEETS = 'REQUEST_TWEETS';
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';

export function requestTweets() {
  return {
    type: REQUEST_TWEETS
  }
}

export function receiveTweets(data) {
  return {
    type: RECEIVE_TWEETS,
    tweets: data
  }
}