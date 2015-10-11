
/* @flow */
/*eslint-disable prefer-const */

import React from "react-native";
import MapBox from "react-native-mapbox-gl";

let {
  Image,
  Text,
  View,
  Dimensions,
  StyleSheet
} = React;

const styles = StyleSheet.create({
});

const mapRef = "map";

const ReactiveMap = React.createClass({
  mixins: [MapBox.Mixin],
  componentDidMount() {
    setTimeout(()=> {
      this.setCenterCoordinateZoomLevelAnimated(mapRef, 48.152458, 17.1145873, 14)
    },300)
  },
  render() {
    return (
      <MapBox
        ref={mapRef}
        style={{flex: 1}}
        direction={0}
        zoomLevel={10}
        styleURL={'asset://styles/light-v8.json'}
        annotations={[
          {
            latitude: 48.152458,
            longitude:  17.1145873,
            title: "Reactive2015 Conference",
            subtitle: "Hotel Saffron Školská 5, 811 07 Bratislava, Slovakia",
            annotationImage: {
              url: "https://reactive2015.com/assets/img/logo_simple.png",
              height: 25,
              width: 25
            }
          }
        ]}
        centerCoordinate={{latitude: 48.152458, longitude:17.1145873}}
        accessToken="REDACTED"/>
    );
  }
});

export default ReactiveMap;