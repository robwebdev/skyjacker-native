import { AUTHENTICATE, LOAD_PLAYER } from "../actions";

export default (state = null, action) => {
  switch (action.type) {
    case fulfilled(LOAD_PLAYER):
      return { ...state, name: action.payload.displayName };
    default:
      return state;
  }
};

function fulfilled(CONSTANT) {
  return `${CONSTANT}_FULFILLED`;
}
