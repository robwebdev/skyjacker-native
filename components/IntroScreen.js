import * as Animatable from "react-native-animatable";

import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import Colors from "../constants/Colors";
import React from "react";
import TextStyles from "../styles/Text";

const AniamtedTouchableOpacity = Animatable.createAnimatableComponent(
  TouchableOpacity
);

export default ({
  bodyText,
  image,
  titleText,
  buttonText,
  navigation,
  nextScreen
}) => {
  return (
    <Animatable.View
      animation="fadeInRightBig"
      duration={500}
      style={styles.container}
    >
      <Image source={image} style={styles.image} />
      <Animatable.View
        style={{ alignItems: "center" }}
        animation="pulse"
        delay={500}
      >
        <Text style={[styles.text, { color: Colors.YELLOW }]}>{titleText}</Text>
        <Text style={styles.text}>{bodyText[0]}</Text>
        <Text style={styles.text}>{bodyText[1]}</Text>
        <AniamtedTouchableOpacity
          animation="fadeIn"
          delay={1000}
          style={styles.button}
          onPress={toNextStep}
        >
          <Text style={[styles.text, { color: "black", textAlign: "center" }]}>
            {buttonText}
          </Text>
        </AniamtedTouchableOpacity>
      </Animatable.View>
    </Animatable.View>
  );

  function toNextStep() {
    if (nextScreen) {
      navigation.dispatch({
        key: nextScreen,
        type: "ReplaceCurrentScreen",
        routeName: nextScreen
      });
    } else {
      Alert.alert("That‘s it!", "Thanks for testing :)");
    }
  }
};

const styles = StyleSheet.create({
  image: {
    marginBottom: 40,
    resizeMode: "contain",
    flex: 1,
    width: null
  },
  text: {
    ...TextStyles.largeText,
    textAlign: "center"
  },
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 110,
    paddingBottom: 110,
    width: null,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "stretch"
  },
  button: {
    backgroundColor: Colors.YELLOW,
    paddingVertical: 10,
    borderRadius: 20,
    width: 200,
    marginTop: 20
  }
});
