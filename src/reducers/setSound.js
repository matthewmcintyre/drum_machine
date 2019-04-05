const initialState = {
  currentSound: "None"
};

const setSound = (state = initialState, action) => {
  switch (action.type) {
    case "Q":
      return { ...state, currentSound: "Heater 1" };

    case "W":
      return { ...state, currentSound: "Heater 2" };

    case "E":
      return { ...state, currentSound: "Heater 3" };

    case "A":
      return { ...state, currentSound: "Heater 4" };

    case "S":
      return { ...state, currentSound: "Heater 5" };

    case "D":
      return { ...state, currentSound: "Chord 1" };

    case "Z":
      return { ...state, currentSound: "Chord 2" };

    case "X":
      return { ...state, currentSound: "Chord 3" };

    case "C":
      return { ...state, currentSound: "Kick n Hat" };

    default:
      return state;
  }
};

export default setSound;
