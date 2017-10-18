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
      deviceAuthenticationRequestAsync: jest.fn(() => Promise.resolve({})),
      changeUserDetailsRequestAsync: jest.fn(() => Promise.resolve({}))
    };
  };
});

describe("actions", () => {
  // Based on http://redux.js.org/docs/recipes/WritingTests.html#async-action-creators
  it("should create and dispatch AUTHENTICATE when initPreview succeeds", () => {
    const expectedActions = [
      { payload: expect.any(Promise), type: actions.AUTHENTICATE }
    ];
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({});
    return store.dispatch(actions.actionCreators.initPreview()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should create UPDATE_PLAYER_NAME with a promise payload", () => {
    const expectedActions = [
      { payload: expect.any(Promise), type: actions.UPDATE_PLAYER_NAME },
      { payload: expect.any(Promise), type: actions.LOAD_PLAYER }
    ];
    const mockStore = configureMockStore([thunk, promiseMiddleware()]);
    const store = mockStore({});
    store.dispatch(actions.actionCreators.updatePlayerName()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
