import { Platform } from "react-native";

export default {
  getUniqueID() {
    if (Platform.OS === "ios") {
      return "STUBBED_DEVICE_ID_IOS";
    } else {
      return "STUBBED_DEVICE_ID_ANDROID";
    }
  }
};
