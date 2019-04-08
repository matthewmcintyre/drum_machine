import { TOGGLE_POWER } from "../actions/actionTypes";

const initialState = {
  power: false
};

export default function powerStatus(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_POWER:
      return {
        ...state,
        power: !state.power
      };

    default:
      return state;
  }
}
