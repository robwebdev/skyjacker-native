import * as actions from "./index";

import configureMockStore from "redux-mock-store";
import createGameSparksClient from "../clients/gamesparks";
import promiseMiddleware from "redux-promise-middleware";
import thunk from "redux-thunk";

jest.mock("../clients/gamesparks", () => {
  return function() {
    return {
      initPreview: options => {
        options.onInit();
      },
      deviceAuthenticationRequestAsync: Promise.resolve
    };
  };
});

// Based on http://redux.js.org/docs/recipes/WritingTests.html#async-action-creators
describe("actions", () => {
  it("should create and dispatch AUTHENTICATE when initPreview succeeds", () => {
    const expectedActions = [
      { payload: expect.any(Promise), type: actions.AUTHENTICATE }
    ];
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({});
    return store.dispatch(actions.initPreview()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
