/* @flow */
/*eslint-disable prefer-const */

import React from "react-native";
import { connect } from "react-redux/native";

import Speaker from "./speaker";

let {
  Text,
  View,
  ScrollView,
  Dimensions
} = React;

class Speakers extends React.Component {
  render() {
    return (
      <ScrollView
        style={{flex: 1}}
        pagingEnabled={true}
        contentContainerStyle={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "stretch"
        }}
      >
        {this.props.speakers.map((speaker) => {
          return <Speaker {...speaker}/>
        })}
      </ScrollView>
    );
  }
}

Speakers.propTypes = {
  dispatch: React.PropTypes.func,
  schedule: React.PropTypes.array,
  speakers: React.PropTypes.array
};

Speakers.defaultProps = {
  dispatch: () => {},
  schedule: [],
  speakers: []
};

export default connect((state) => ({
  schedule: state.data.schedule,
  speakers: state.data.speakers
}))(Speakers);