import * as Animatable from "react-native-animatable";

import { Field, reduxForm } from "redux-form";
import {
  Image,
  LayoutAnimation,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import Colors from "../constants/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import TextStyles from "../styles/Text";
import dismissKeyboard from "dismissKeyboard";

const buttonIcon = (
  <Icon
    name="arrow-right-thick"
    size={34}
    color="black"
    style={{ margin: 3 }}
  />
);

const renderInput = ({ input: { onChange, ...restInput } }) => {
  return (
    <TextInput
      style={styles.textInput}
      autoFocus={true}
      underlineColorAndroid="transparent"
      placeholder="Type here..."
      placeholderTextColor={Colors.LIGHT_GREY}
      onChangeText={onChange}
      {...restInput}
    />
  );
};

class SignUpForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <Animatable.View
        animation="fadeInRightBig"
        duration={500}
        style={styles.container}
      >
        <Text style={styles.titleText}>Welcome on-board.</Text>
        <Text style={styles.text}>
          If you're going to become the most notorious skyjacker in the world,
          then you're going to need a memorable name.
        </Text>
        <Text style={styles.labelText}>What‘s your skyjacker name?</Text>
        <View style={styles.formContainer}>
          <View style={styles.borderStyle}>
            <Field name="name" component={renderInput} />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(this._submit.bind(this))}
          >
            {buttonIcon}
          </TouchableOpacity>
        </View>
      </Animatable.View>
    );
  }

  _submit(values) {
    console.log("submitting form", values);
    dismissKeyboard();
    this.props.navigation.dispatch({
      key: "Intro1",
      type: "ReplaceCurrentScreen",
      routeName: "Intro1"
    });
  }
}

export default reduxForm({
  form: "signup"
})(SignUpForm);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 120,
    width: null,
    backgroundColor: "transparent"
  },
  text: {
    ...TextStyles.largeText
  },
  titleText: {
    ...TextStyles.largeText,
    color: Colors.YELLOW
  },
  labelText: {
    ...TextStyles.text,
    marginTop: 20
  },
  formContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    marginTop: 10
  },
  textInput: {
    color: Colors.YELLOW,
    paddingHorizontal: 10,
    height: 40,
    fontWeight: "bold",
    shadowColor: "transparent"
  },
  borderStyle: {
    backgroundColor: Colors.DARK_GREY,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 15,
    overflow: "hidden",
    flex: 1,
    marginRight: 10
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.YELLOW,
    overflow: "hidden",
    margin: 2
  }
});
