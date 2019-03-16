const initialState = {
  currentSound: "None"
};

export default function setSound(state = initialState, action) {
  switch (action.type) {
    case "Q":
      return { currentSound: "Heater 1" };

    case "W":
      return { currentSound: "Heater 2" };

    case "E":
      return { currentSound: "Heater 3" };

    case "A":
      return { currentSound: "Heater 4" };

    case "S":
      return { currentSound: "Heater 5" };

    case "D":
      return { currentSound: "Chord 1" };

    case "Z":
      return { currentSound: "Chord 2" };

    case "X":
      return { currentSound: "Chord 3" };

    case "C":
      return { currentSound: "Kick n Hat" };

    default:
      return state;
  }
}
