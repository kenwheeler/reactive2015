/* @flow */
/*eslint-disable prefer-const */

import React from "react-native";
import { connect } from "react-redux/native";

let {
  Image,
  Text,
  View,
  Dimensions,
  StyleSheet
} = React;

const styles = StyleSheet.create({
  speaker: {
    flex: 1,
    height: Dimensions.get('window').height - 65,
    justifyContent: 'center',
    alignItems: "center"
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#1bce7c",
    marginBottom: 10
  },
  name: {
    color: "#0f1726",
    fontSize: 18,
    fontWeight: "600",
    margin: 5,
    textAlign: "center"
  },
  country: {
    fontSize: 16,
    color: "#888",
    fontStyle: "italic",
    textAlign: "center"
  },
  bio: {
    marginTop: 5,
    color: "#0f1726",
    paddingHorizontal: 30,
    textAlign: "center"
  }
});

class Speaker extends React.Component {
  render() {
    return (
      <View style={styles.speaker}>
        <Image
          resizeMode="cover"
          source={{uri: this.props.photo}}
          style={styles.image}/>
        <Text
          style={styles.name}>
          {this.props.name}
        </Text>
        <Text
          style={styles.country}>
          {this.props.country}
        </Text>
        <Text
          style={styles.bio}>
          {this.props.bio}
        </Text>
      </View>
    );
  }
}

Speaker.propTypes = {
  bio: React.PropTypes.string,
  country: React.PropTypes.string,
  name: React.PropTypes.string,
  photo: React.PropTypes.string
};

export default Speaker;