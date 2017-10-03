import { ActivityIndicator, StyleSheet, View } from "react-native";

import Colors from "../constants/Colors";
import React from "react";

export default class Intro extends React.Component {
  componentDidUpdate() {
    if (this.props.screenProps.player) {
      this.props.navigation.dispatch({
        key: "SignUp",
        type: "ReplaceCurrentScreen",
        routeName: "SignUp"
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          style={styles.indicator}
          size="large"
          color="white"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    width: null,
    backgroundColor: Colors.BASE_BG_BLUE,
    justifyContent: "center"
  },
  indicator: {
    height: 80
  }
});
