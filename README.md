# Skyjacker Native


Skyjacker is a location-based, augmented reality flight tracking game. The current version [available on the AppStore](https://itunes.apple.com/gb/app/skyjacker-we-own-the-skies/id1177542567) is built using Cordova. The purpose of this repo is to explore React Native as a potential framework for a later build of Skyjacker (or a related app), plus provide code examples to those interested.


**This won't run locally for you without the correct API keys.** [Instead, a demo is available via Expo.io](https://expo.io/@robwebdev/skyjacker).

## Create React Native App
This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app). This was really quick and easy to do and I had a React Native app running on both an Android and iOS device in minutes using the [Expo](https://expo.io/) app. Expo has made it really simple to share the application with others and seems like it would be great for prototyping or early stage development of Skyjacker. It's apparant that at some stage I would have to [eject](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md#ejecting-from-create-react-native-app) the app from CRNA/Expo in order to add native dependencies. In this case, Expo offers [ExpoKit](https://docs.expo.io/versions/latest/guides/detach.html) which allows you to continue to access Expo API's after ejecting.

## Redux
TODO: 
- [ ] Add motivation for including Redux, Thunk and Redux Promise Middleware.
- [ ] Point to examples of testing actions reducers and connected components.

## React Navigation
TODO:
- [ ] Add motivation for adding React Navigation.
- [ ] Mention steps for adding a `ReplaceCurrentScreen` navigation action.
- [ ] Investigate and document custom styled tab navigation bars.
- [ ] Explore moving navigation state to redux store.

## Redux Form
TODO:
- [ ] Add motivation for adding Redux Form.
- [ ] Explore sync and async validations, loading and error states.
- [ ] Note about decoupling connected and presentational components with react form. [link](https://github.com/erikras/redux-form/issues/1444)

## Styling
TODO:
- [ ] Mention layout with flexbox, including quirk.
- [ ] Document solution for full screen background image.
- [ ] Describe reusing styles across components.
