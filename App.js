import {
  ActivityIndicatorIOS,
  Image,
  StatusBar,
  StyleSheet,
  View
} from "react-native";

import AppNavigator from "./AppNavigator";
import Colors from "./constants/Colors";
import { Provider } from "react-redux";
import React from "react";
import { ScreenOrientation } from "expo";
import { actionCreators } from "./actions";
import { connect } from "react-redux";
import store from "./store";

const { initPreview, loadPlayer, preloadImages } = actionCreators;

export class App extends React.Component {
  constructor(props) {
    super(props);
    ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT);
  }

  async componentDidMount() {
    await this.props.preloadImages();
    this.props.init();
  }

  componentWillUpdate(nextProps) {
    if (nextProps.isAuthenticated && !this.props.isAuthenticated) {
      this.props.loadPlayer();
    }
  }

  render() {
    return (
      <Image source={require("./img/bg.png")} style={styles.container}>
        <StatusBar barStyle="light-content" />
        <AppNavigator screenProps={{ player: this.props.player }} />
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
    backgroundColor: Colors.BASE_BG_BLUE
  }
});

function mapStateToProps({ player, isAuthenticated }) {
  return {
    player,
    isAuthenticated
  };
}

export const ConnectedApp = connect(mapStateToProps, {
  init: initPreview,
  loadPlayer,
  preloadImages
})(App);

export default () => {
  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  );
};
