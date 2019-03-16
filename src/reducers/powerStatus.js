const initialState = {
  power: "off"
};

export default function powerStatus(state = initialState, action) {
  switch (action.type) {
    case "POWERON":
      return { power: "on" };

    case "POWEROFF":
      return { power: "off" };

    default:
      return state;
  }
}
