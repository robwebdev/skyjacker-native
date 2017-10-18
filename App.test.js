import App, { App as AppComponent, ConnectedApp } from "./App";
import Enzyme, { shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { actionCreators } from "./actions";
import configureStore from "redux-mock-store";

jest.mock("./actions", () => {
  const mockAction = {
    type: "MOCKACTION"
  };
  return {
    actionCreators: {
      initPreview: jest.fn(() => {
        return mockAction;
      }),
      loadPlayer: jest.fn(() => {
        return mockAction;
      }),
      preloadImages: jest.fn(() => {
        return mockAction;
      })
    }
  };
});

const middlewares = [];
const mockStore = configureStore(middlewares);
const initialState = {
  player: { name: "Rob" },
  isAuthenticated: true
};

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.dive()).toMatchSnapshot();
});

// Testing the dumb/presentational component
describe("AppComponent", () => {
  it("calls props.{preloadImages,init} in componentDidMount", () => {
    const init = jest.fn(() => {});
    const preloadImagesPromise = Promise.resolve();
    const preloadImages = jest.fn(() => preloadImagesPromise);
    const rendered = shallow(
      <AppComponent init={init} preloadImages={preloadImages} />
    );

    return preloadImagesPromise.then(() => {
      expect(preloadImages).toHaveBeenCalled();
      expect(init).toHaveBeenCalled();
    });
  });

  it("calls props.loadPlayer when props.isAuthenticated becomes true", () => {
    const init = jest.fn(() => {});
    const loadPlayer = jest.fn(() => {});
    const preloadImagesPromise = Promise.resolve();
    const preloadImages = jest.fn(() => preloadImagesPromise);
    const rendered = shallow(
      <AppComponent
        init={init}
        preloadImages={preloadImages}
        loadPlayer={loadPlayer}
      />
    );

    rendered.setProps({ isAuthenticated: true });

    expect(loadPlayer).toHaveBeenCalled();
  });
});

// Testing the smart/connected/container component
describe("ConnectedApp", () => {
  it("connects store to AppComponent", () => {
    const rendered = shallow(<ConnectedApp />, {
      context: { store: mockStore(initialState) }
    });
    const props = rendered.props();

    props.init();
    expect(actionCreators.initPreview).toHaveBeenCalled();

    props.loadPlayer();
    expect(actionCreators.loadPlayer).toHaveBeenCalled();

    props.preloadImages();
    expect(actionCreators.preloadImages).toHaveBeenCalled();

    expect(props.player).toEqual({ name: "Rob" });
    expect(props.isAuthenticated).toBe(true);
  });
});
