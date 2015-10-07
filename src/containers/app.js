/* @flow */
/*eslint-disable prefer-const */

import React from "react-native";
import { connect } from "react-redux/native";
import { fetchData } from "../actions";

import Schedule from "../components/schedule";
import Speakers from "../components/speakers";

let {
  TabBarIOS,
  Text
} = React;

const scheduleIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAFMN540AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZpJREFUeNpiYCAADAjKGAAEEFbZ/wwkAYAAwqW1gWTdDWTbCxBARCEFIBZA4p8n6B4mIPEeh+QHJjTjkMEFBjyS7zEYxDqIASCAcKEEqGn/oXg9HuvhYUHIOgFsvk8gZDK+xERqynJA5qwnUTOG+vNEOv08oTQK8kYB1HkOUJswAgoggKiOBKA2weL4PTQ2iPJPAw4D/0PTAs6EKkCgcDiPzYAGHGXLf2LE/hOTkpC8gBIGBSRohmdBJuRcS2KMwDXjAoxkpVVS1JOS9Bqw5YHzRPr1PK665DyBWoigC99D/QTLUQXQKKNujQAQYAOGGImMmXxoQG8A4oNYEiQoLO2BOABU/wDxRHKDCBYp5/E2E/DrPw81g2j950kog/8TmRzPE1OBkRJE/0nISO9xeWY9GVn6P4nZfz0uQxxoaLEDsnoWKhtONEAucj/gSIGMBDApKf0DribXfxIbQ6RULP/xVe+wVogBFS01ILbMVUAqPAQo9CWsEFEgtSF/Hsm1AkRaBgu186RayICn6bEeremN3DxbT0aDmf4AAOrcayEDnrqrAAAAAElFTkSuQmCC';
const speakerIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAFMN540AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAi9JREFUeNpiYEADzEjsBAZ8YD2UNgAIIKyy/4H4PgMxQAFEAAQQulYYaIAxmJAEGZHYF9B1w3ScR9ZNFAAIIKJdK4DEP49LIUyiAeTy92heK4TSH5AFG9AUOTCg2YUM3mMwsIQedgAQQLhQAtS0/1C8Ho/18LA4jyVV/EfSKIDFiWCbBLB5Bgr68fkJ3YPYUlkBEtsBW6JlwBGF+3EkchTFAkiKE9BclkAoXcBi+j/UmQ5QvB5bQAEEENWRAFIU/YfamECMRlzZSQBqkAIDnoQqgBb399EC6Dw2AxrQypb1SIr+E0r06ALzcWUfqOsScKWeAPQUhMXw98gF1AW0DHIATfEHLAGIPa1isakBnzx6Wt1PoJhaz4AnC6IXpejiArhyUQKasxKQXCKAK2MYEEhFRGWO91CFsBxVADWUurUAQIDiq62GYRgGagwKIRDCYIEQCGGwQBiDaQgKYaUwBIZSCNkiOZNlxY/up1X7UbWx3bNzdz3tvDje6Z96Q6C37/WeKGTH+oqT3Yfx+S9EETEH0QTY6wFjuNcD42C+lYCIV8X7VSFDsLh6CJgEUcaEWRnrorRrl1T2JcjV4AmVdfFZU6AV47cJEXHlSkriZCCWJJeiVRtIXzVHqqEiJt4Z6UvJs9J/zSlVib6KY3GcFFgd22Yxhu/XSynIY9LrZHBq9HJuIORxR0vQcK9GA42V/F9UQiLhqJEHUu3idE8DNTiaUApYiL41dg1JK84Czzs+qqGoX/ybRuYAAAAASUVORK5CYII=';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'schedule'
    };
  }
  render() {
    return (
      <TabBarIOS
        tintColor="#212739">
        <TabBarIOS.Item
          title="Schedule"
          icon={{uri: scheduleIcon, scale: 1.25}}
          selected={this.state.selectedTab === 'schedule'}
          onPress={() => {
            this.setState({
              selectedTab: 'schedule',
            });
          }}>
          <Schedule {...this.props}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Speakers"
          icon={{uri: speakerIcon, scale: 1.25}}
          selected={this.state.selectedTab === 'speakers'}
          onPress={() => {
            this.setState({
              selectedTab: 'speakers',
            });
          }}>
          <Speakers {...this.props}/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

export default App;
