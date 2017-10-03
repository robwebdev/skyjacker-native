import * as Animatable from "react-native-animatable";

import IntroScreen from "../components/IntroScreen";
import React from "react";

export default ({ navigation }) => {
  return (
    <IntroScreen
      image={require("../img/first-run/1_FirstRun_Radar.png")}
      titleText="What‘s flying above you?"
      bodyText={["Check your Radar to", "see real airplanes nearby"]}
      buttonText="Okay..."
      nextScreen="Intro2"
      navigation={navigation}
    />
  );
};
