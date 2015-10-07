/* @flow */
/*eslint-disable prefer-const */

import React from "react-native";
import { connect } from "react-redux/native";

import ScheduleItem from "./schedule-item";

let {
  Text,
  View,
  ScrollView
} = React;

class ScheduleList extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "stretch",
            flexDirection: "column"
          }}
        >
          {this.props.schedule[this.props.day].slots.map((item) => {
            return <ScheduleItem {...item}/>
          })}
        </ScrollView>
      </View>
    );
  }
}

ScheduleList.propTypes = {
  day: React.PropTypes.number,
  dispatch: React.PropTypes.func,
  schedule: React.PropTypes.array,
  speakers: React.PropTypes.array
};

ScheduleList.defaultProps = {
  day: 0,
  dispatch: () => {},
  schedule: [],
  speakers: []
};

export default ScheduleList;