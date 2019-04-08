import { SELECTED_SOUND } from "../actions/actionTypes";

const initialState = {
  currentSound: "No Sound Selected"
};

const setSound = (state = initialState, action) => {
  if (action.type === SELECTED_SOUND) {
    switch (action.key) {
      case "q":
        return { ...state, currentSound: "Heater 1" };

      case "w":
        return { ...state, currentSound: "Heater 2" };

      case "e":
        return { ...state, currentSound: "Heater 3" };

      case "a":
        return { ...state, currentSound: "Heater 4" };

      case "s":
        return { ...state, currentSound: "Heater 5" };

      case "d":
        return { ...state, currentSound: "Chord 1" };

      case "z":
        return { ...state, currentSound: "Chord 2" };

      case "x":
        return { ...state, currentSound: "Chord 3" };

      case "c":
        return { ...state, currentSound: "Kick n Hat" };

      default:
        return state;
    }
  } else {
    return state;
  }
};

export default setSound;
