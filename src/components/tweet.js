/* @flow */
/*eslint-disable prefer-const */

import React from "react-native";

let {
  Image,
  Text,
  View,
  StyleSheet
} = React;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "white",
    padding: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: 'flex-start'
  },
  description: {
    flex: 1
  },
  title: {
    flex: 0,
    marginBottom: 5
  },
  image: {
    flex: 0,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: "#ddd",
    height: 50,
    width: 50,
    marginRight: 10
  },
  speaker: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 2,
    color: "#16a764"
  },
  company: {
    fontWeight: "normal",
    color: "#0f1726"
  }
});

class Tweet extends React.Component {
  render() {
    return (
      <View style={styles.item}>
        <Image
          resizeMode="cover"
          source={{uri: this.props.user.profile_image_url}}
          style={styles.image}/>
        <View style={styles.description}>
          <Text
            style={styles.title}>
            {this.props.text}
          </Text>
          <Text style={styles.speaker}>
            {this.props.user.name}
            <Text style={styles.company}>
              {" - @"}{this.props.user.screen_name}
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

export default Tweet;