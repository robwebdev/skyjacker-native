import Intro1 from "./screens/Intro1";
import Intro2 from "./screens/Intro2";
import Intro3 from "./screens/Intro3";
import Loading from "./screens/Loading";
import React from "react";
import SignUp from "./screens/SignUp";
import { StackNavigator } from "react-navigation";

const AppNavigator = StackNavigator(
  {
    Loading: { screen: Loading },
    SignUp: { screen: SignUp },
    Intro1: { screen: Intro1 },
    Intro2: { screen: Intro2 },
    Intro3: { screen: Intro3 }
  },
  {
    headerMode: "none",
    cardStyle: {
      backgroundColor: "transparent"
    }
  }
);

const prevGetStateForActionHomeStack = AppNavigator.router.getStateForAction;
AppNavigator.router.getStateForAction = (action, state) => {
  if (state && action.type === "ReplaceCurrentScreen") {
    const routes = state.routes.slice(0, state.routes.length - 1);
    routes.push(action);
    return {
      ...state,
      routes,
      index: routes.length - 1
    };
  }
  return prevGetStateForActionHomeStack(action, state);
};

export default AppNavigator;
