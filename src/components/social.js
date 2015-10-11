/* @flow */
/*eslint-disable prefer-const */

import React from "react-native";
import { connect } from "react-redux/native";
import { requestTweets, receiveTweets } from "../actions"

import Tweet from "./tweet";

let {
  ActivityIndicatorIOS,
  Image,
  Text,
  View,
  Dimensions,
  NativeModules,
  StyleSheet,
  ScrollView
} = React;

const styles = StyleSheet.create({
  centering: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

class Social extends React.Component {
  componentDidMount() {
    this.props.dispatch(requestTweets());
    NativeModules.TwitterAPI.getTweets((e, tweets) => {
      this.props.dispatch(receiveTweets(tweets));
    });
  }
  render() {
    console.log(this.props)
    return (
      <View style={{flex: 1}}>
        {this.props.tweets.length > 0 ?
          <ScrollView
            style={{
              flex: 1,
              padding: 0}}
            contentContainerStyle={{
              alignItems: "stretch",
              flexDirection: "column"
            }}>
          {this.props.tweets.map((tweet, index) => {
            return (
              <Tweet key={index} {...tweet}/>
            );
          })}
        </ScrollView> : <View style={styles.centering}>
          <ActivityIndicatorIOS
            animating={true}
            style={{
              height: 80,
              alignItems: "center",
              justifyContent: "center"}}
            size="large"
          />
        </View>}
      </View>
    );
  }
}

export default connect((state) => ({
  tweets: state.data.tweets,
  loading: state.data.loading
}))(Social);