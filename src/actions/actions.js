import * as actionTypes from "./actionTypes";

export const togglePower = () => ({
  type: actionTypes.TOGGLE_POWER
});

//TODO build out this action
export const selectedSound = key => ({
  type: actionTypes.SELECTED_SOUND,
  key
});
