import * as Animatable from "react-native-animatable";

import IntroScreen from "../components/IntroScreen";
import React from "react";

export default ({ navigation }) => {
  return (
    <IntroScreen
      image={require("../img/first-run/2_FirstRun_Binoculars.png")}
      titleText="Want to skyjack an airplane?"
      bodyText={["Find and choose airplanes in", "your Binoculars"]}
      buttonText="Pretty cool..."
      nextScreen="Intro3"
      navigation={navigation}
    />
  );
};
