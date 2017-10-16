import reducer from "./app";

describe("app reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      player: null,
      isAuthenticated: false,
      form: {}
    });
  });

  it("should handle AUTHENTICATE_FULFILLED", () => {
    expect(
      reducer(undefined, {
        type: "AUTHENTICATE_FULFILLED"
      })
    ).toEqual({
      player: null,
      isAuthenticated: true,
      form: {}
    });
  });

  it("should handle LOAD_PLAYER_FULFILLED", () => {
    expect(
      reducer(
        { isAuthenticated: true, player: null },
        {
          type: "LOAD_PLAYER_FULFILLED",
          payload: {
            displayName: ""
          }
        }
      )
    ).toEqual({
      player: { name: "" },
      isAuthenticated: true,
      form: {}
    });
  });
});
