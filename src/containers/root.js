/* @flow */

import React from "react-native";
import { Provider } from "react-redux/native";
import configureStore from "../store/configure-store";
import Scene from "../components/scene";

import data from "../data";

const store = configureStore({data: Object.assign({tweets: [], loading: false},data)});

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {() => <Scene />}
      </Provider>
    );
  }
}

export default Root;
