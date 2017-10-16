import { GAMESPARKS_KEY, GAMESPARKS_SECRET } from "react-native-dotenv";

import DeviceInfo from "../utils/DeviceInfo";
import { Platform } from "react-native";
import createGameSparksClient from "../clients/gamesparks";

const gs = createGameSparksClient();

export const AUTHENTICATE = "AUTHENTICATE";
export const LOAD_PLAYER = "LOAD_PLAYER";
export const UPDATE_PLAYER_NAME = "UPDATE_PLAYER_NAME";

export function initPreview() {
  return dispatch => {
    return new Promise(resolve => {
      gs.initPreview({
        key: GAMESPARKS_KEY,
        secret: GAMESPARKS_SECRET,
        onInit() {
          resolve(dispatch(authenticate()));
        }
      });
    });
  };
}

export function authenticate() {
  return {
    type: AUTHENTICATE,
    payload: gs.deviceAuthenticationRequestAsync(
      DeviceInfo.getUniqueID(),
      null,
      null,
      Platform.OS.toUpperCase(),
      null,
      null
    )
  };
}

export function loadPlayer() {
  return {
    type: LOAD_PLAYER,
    payload: gs.accountDetailsRequestAsync()
  };
}

export function updatePlayerName(displayName) {
  return dispatch => {
    return dispatch({
      type: UPDATE_PLAYER_NAME,
      payload: gs.changeUserDetailsRequestAsync(displayName)
    }).then(() => {
      return dispatch(loadPlayer());
    });
  };
}
