/* @flow */
/*eslint-disable prefer-const */

import React from "react-native";

import TalkDetail from "./talk-detail";

let {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} = React;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: "#ddd"
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#efefef"
  },
  content: {
    backgroundColor: "white",
    padding: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: 'center'
  },
  description: {
    flex: 1
  },
  time: {
    flex: 0,
    color: "#16a764",
    fontWeight: "bold",
    alignSelf: 'flex-start'
  },
  category: {
    flex: 0,
    fontWeight: "bold",
    position: "absolute",
    right: 10
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
  gray: {
    color: "#888"
  },
  speaker: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 2,
    color: "#0f1726"
  },
  company: {
    fontWeight: "normal"
  },
  navigable: {
    color: "#aaa",
    fontSize: 20
  },
  RethinkingRest: {
    color: "#9b59b6"
  },
  RethinkingRestImage: {
    borderColor: "#9b59b6"
  },
  DataFlow: {
    color: "#3498db"
  },
  DataFlowImage: {
    borderColor: "#3498db"
  },
  ReactGeneral: {
    color: "#f1c40f"
  },
  ReactGeneralImage: {
    borderColor: "#f1c40f"
  },
  ReactEverywhere: {
    color: "#6DDB9C"
  },
  ReactEverywhereImage: {
    borderColor: "#6DDB9C"
  }
});

class ScheduleItem extends React.Component {
  _goToItem(item) {
    this.props.navigator.push({
      component: TalkDetail,
      title: item.title.length > 25 ? item.title.substr(0,25) +"..." : item.title,
      passProps: {...item}
    });
  }
  render() {
    const categoryId = this.props.category ?
      this.props.category.replace(/\s/g, "") : null;
    return (
      <View style={[styles.item, this.props.style]}>
        <View style={styles.header}>
          <Text
            style={styles.time}>
            {this.props.time}
          </Text>
          <Text
            style={[styles.category,categoryId ? styles[categoryId] : {}]}>
            {this.props.category}
          </Text>
        </View>
        {this.props.talk ?
          <TouchableHighlight
              onPress={this._goToItem.bind(this, this.props)}>
            <View style={styles.content}>
              {this.props.photo && <Image
                resizeMode="cover"
                source={{uri: this.props.photo}}
                style={[styles.image, categoryId ? styles[categoryId + "Image"] : {}]}/>}
              <View style={styles.description}>
                <Text
                  style={[styles.title, this.props.talk ? {} : styles.gray]}>
                  {this.props.title}
                </Text>
                {this.props.speaker &&
                  <Text style={styles.speaker}>
                    {this.props.speaker}
                    {this.props.company &&
                      <Text style={styles.company}>
                        {" - "}{this.props.company}
                      </Text>}
                  </Text>}
              </View>
              <Text style={styles.navigable}>›</Text>
            </View>
          </TouchableHighlight> :
          <View style={styles.content}>
            <View style={styles.description}>
              <Text
                style={[styles.title, this.props.talk ? {} : styles.gray]}>
                {this.props.title}
              </Text>
            </View>
          </View>
        }
      </View>
    );
  }
}

ScheduleItem.propTypes = {
  category: React.PropTypes.string,
  company: React.PropTypes.string,
  speaker: React.PropTypes.string,
  photo: React.PropTypes.string,
  summary: React.PropTypes.string,
  talk: React.PropTypes.bool,
  time: React.PropTypes.string,
  title: React.PropTypes.string
};

export default ScheduleItem;