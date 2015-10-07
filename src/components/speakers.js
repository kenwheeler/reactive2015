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
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    };
  }
  checkScroll(e) {
    const selected = Math.floor(e.nativeEvent.contentOffset.y / (Dimensions.get('window').height - 65));
    if (selected < 0 || selected > this.props.speakers.length) return;
    if (selected !== this.state.selected) {
      this.setState({
        selected
      });
    }
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView
          style={{flex: 1}}
          pagingEnabled={true}
          onScroll={this.checkScroll.bind(this)}
          scrollEventThrottle={32}
          stickyHeaderIndices={[0]}
          contentContainerStyle={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "stretch"
          }}
        >
          <Text style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: "#1bce7c",
            textAlign: "center",
            padding: 10,
            fontWeight: "bold"
          }}>{this.props.speakers[this.state.selected].name}</Text>
          {this.props.speakers.map((speaker, index) => {
            return <Speaker key={index} {...speaker}/>
          })}
        </ScrollView>
      </View>
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