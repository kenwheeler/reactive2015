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
    backgroundColor: "#16a764",
    color: "#0f1726",
    textAlign: 'center',
    padding: 10
  },
  selected: {
    backgroundColor: "#1bce7c"
  }
});

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 0
    };
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
                Tuesday
              </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.dayButton}
            onPress={this._setDay.bind(this, 1)}>
              <Text
                style={[styles.dayText, this.state.day === 1 ? styles.selected : {}]}>
                Wednesday
              </Text>
          </TouchableHighlight>
        </View>
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