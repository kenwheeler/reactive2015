/* @flow */
/*eslint-disable prefer-const */

import React from "react-native";
import { connect } from "react-redux/native";

import ScheduleList from "./schedule-list";

let {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableHighlight
} = React;

const styles = StyleSheet.create({
  dayPicker: {
    flex: 0,
    flexDirection: 'row',
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {width: -5, height: 15}
  },
  dayButton: {
    flex: 1
  },
  dayText: {
    fontSize: 12,
    backgroundColor: "#16a764",
    color: "#0f1726",
    textAlign: 'center',
    padding: 10
  },
  selected: {
    backgroundColor: "#1bce7c",
    color: "white"
  },
  filter: {
    textAlign: "center",
    fontSize: 10,
    padding: 3,
    color: "white"
  },
  RethinkingRest: {
    backgroundColor: "#9b59b6"
  },
  DataFlow: {
    backgroundColor: "#3498db"
  },
  ReactGeneral: {
    backgroundColor: "#f1c40f"
  },
  ReactEverywhere: {
    backgroundColor: "#6DDB9C"
  }
});

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 0
    };
  }
  _renderFilter() {
    if (this.props.filter !== "All") {
      return <Text style={[styles.filter, styles[this.props.filter.replace(/\s/g, "")]]}>FILTERED BY {this.props.filter.toUpperCase()}</Text>
    }
  }
  _renderSchedule() {
    return <ScheduleList
            day={this.state.day}
            {...this.props}/>;
  }
  _setDay(index) {
    this.setState({
      day: index
    });
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.dayPicker}>
          <TouchableHighlight
            style={styles.dayButton}
            onPress={this._setDay.bind(this, 0)}>
              <Text
                style={[styles.dayText, this.state.day === 0 ? styles.selected : {}]}>
                TUESDAY
              </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.dayButton}
            onPress={this._setDay.bind(this, 1)}>
              <Text
                style={[styles.dayText, this.state.day === 1 ? styles.selected : {}]}>
                WEDNESDAY
              </Text>
          </TouchableHighlight>
        </View>
        {this._renderFilter()}
        {this._renderSchedule()}
      </View>
    );
  }
}

Schedule.propTypes = {
  dispatch: React.PropTypes.func,
  schedule: React.PropTypes.array,
  speakers: React.PropTypes.array
};

Schedule.defaultProps = {
  dispatch: () => {},
  schedule: [],
  speakers: []
};

export default connect((state) => ({
  schedule: state.data.schedule,
  speakers: state.data.speakers
}))(Schedule);