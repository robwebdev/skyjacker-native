import { Asset } from "expo";

function cacheImages(images) {
  return images.map(image => {
    return Asset.fromModule(image).downloadAsync();
  });
}

export default function preloadImages() {
  return cacheImages([
    require("../img/bg.png"),
    require("../img/first-run/1_FirstRun_Radar.png"),
    require("../img/first-run/2_FirstRun_Binoculars.png"),
    require("../img/first-run/3_FirstRun_Card.png")
  ]);
}
