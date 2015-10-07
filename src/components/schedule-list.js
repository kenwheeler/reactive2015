/* @flow */
/*eslint-disable prefer-const */

import React from "react-native";

import ScheduleItem from "./schedule-item";

let {
  Text,
  View,
  ScrollView,
  TouchableHighlight
} = React;

class ScheduleList extends React.Component {
  render() {
    return (
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "stretch",
          flexDirection: "column"
        }}
      >
        {this.props.schedule[this.props.day].slots
          .filter((item) => {
            if (this.props.filter === "All") return true;
            return item.category === this.props.filter;
          })
          .map((item, index) => {
            return <ScheduleItem key={index} navigator={this.props.navigator} {...item}/>;
          })}
      </ScrollView>
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