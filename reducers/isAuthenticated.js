import { AUTHENTICATE, LOAD_PLAYER } from "../actions";

export default (state = false, action) => {
  switch (action.type) {
    case fulfilled(AUTHENTICATE):
      return true;
    default:
      return state;
  }
};

function fulfilled(CONSTANT) {
  return `${CONSTANT}_FULFILLED`;
}
