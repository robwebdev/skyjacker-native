import "react-native";

import IntroScreen from "./IntroScreen";
import React from "react";
import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer
    .create(
      <IntroScreen
        image={require("../img/first-run/1_FirstRun_Radar.png")}
        titleText="What‘s flying above you?"
        bodyText={["Check your Radar to", "see real airplanes nearby"]}
        buttonText="Okay..."
        nextScreen="Intro2"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
