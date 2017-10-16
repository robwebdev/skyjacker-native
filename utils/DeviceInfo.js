import { Constants } from "expo";
import { Platform } from "react-native";

export default {
  getUniqueID() {
    return Constants.deviceId;
  }
};
