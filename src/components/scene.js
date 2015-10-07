/* @flow */
/*eslint-disable prefer-const */

import React from "react-native";
import App from "../containers/app";
import NavigationBar from "./navigation-bar";

let {
  Image,
  Navigator,
  View
} = React;

class Scene extends React.Component {
  renderScene(route: Object, navigator: Object) {
    const Component = route.component;
    return (
      <View style={{flex: 1}}>
        <NavigationBar
          backgroundStyle={{backgroundColor: "#0f1726"}}
          buttonsColor="#1bce7c"
          customTitle={route.customTitle}
          hidePrev={route.component === App}
          navigator={navigator}
          route={route}
          statusBar="lightContent"
          title={route.title}
          titleColor="#1bce7c"
        />
        <Component
          navigator={navigator}
          route={route}
          {...route.passProps}
        />
      </View>
    );
  }
  render() {
    return (
      <Navigator
        style={{flex: 1}}
        configureScene={(route) => Navigator.SceneConfigs.HorizontalSwipeJump}
        renderScene={this.renderScene}
        initialRoute={{
          component: App,
          title: "Starter App",
          customTitle: (<Image
              resizeMode="contain"
              style={{
                width: 100
              }}
              source={require('image!logo')}/>)
        }}
      />
    );
  }
}

export default Scene;
