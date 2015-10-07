/* @flow */
/*eslint-disable prefer-const */

import React from "react-native";
import App from "../containers/app";

import NavigationBar from "./navigation-bar";
import SceneConfig from "./scene-config";

let {
  ActionSheetIOS,
  Image,
  Navigator,
  Text,
  TouchableOpacity,
  View
} = React;

class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "All",
      showFilter: true
    };
  }
  _setFilter() {
    const buttons = [
      'All',
      'Data Flow',
      'Rethinking Rest',
      'React Everywhere',
      'React General'
    ];
    ActionSheetIOS.showActionSheetWithOptions({
      options: buttons
    },
    (buttonIndex) => {
      this.setState({ filter: buttons[buttonIndex] });
    });
  }
  _showFilter(show) {
    this.setState({
      showFilter: show
    });
  }
  renderPrev() {
    return (
      <TouchableOpacity onPress={this._setFilter.bind(this)}>
        <View style={{
          paddingLeft: 10,
          marginVertical: 20
        }}>
          <Text style={{
            color: "#1bce7c",
            fontSize: 16,
            marginVertical: 10,
            flex: 2,
            textAlign: "center"
          }}>
            Filter
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
  renderScene(route: Object, navigator: Object) {
    const Component = route.component;
    return (
      <View style={{flex: 1}}>
        <NavigationBar
          backgroundStyle={{backgroundColor: "#0f1726"}}
          buttonsColor="#1bce7c"
          customTitle={route.customTitle}
          customPrev={(route.component === App && this.state.showFilter === true) && this.renderPrev()}
          navigator={navigator}
          route={route}
          statusBar="lightContent"
          title={route.title}
          titleColor="#1bce7c"
        />
        <Component
          navigator={navigator}
          route={route}
          filter={this.state.filter}
          showFilter={this._showFilter.bind(this)}
          {...route.passProps}
        />
      </View>
    );
  }
  render() {
    return (
      <Navigator
        style={{flex: 1}}
        configureScene={(route) => SceneConfig}
        renderScene={this.renderScene.bind(this)}
        initialRoute={{
          component: App,
          title: "Starter App",
          customTitle: (<Image
              resizeMode="contain"
              style={{
                width: 100,
                position: "relative",
                top: -10
              }}
              source={require('image!reactive')}/>)
        }}
      />
    );
  }
}

export default Scene;
