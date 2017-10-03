import * as Animatable from "react-native-animatable";

import IntroScreen from "../components/IntroScreen";
import React from "react";

export default ({ navigation }) => {
  return (
    <IntroScreen
      image={require("../img/first-run/3_FirstRun_Card.png")}
      titleText="Get more points for longer flights"
      bodyText={["You‘ll collect airports and", "airplane bonuses too!"]}
      buttonText="Let me at ‘em!"
    />
  );
};
