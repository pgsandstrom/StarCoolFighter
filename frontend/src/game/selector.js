import { getRandomInt } from '../util';

export const getAvailableRaces = state => state.gameReducer.availableRaces;

export const getRandomAvailableRace = (state) => {
  const availableRaces = getAvailableRaces(state);
  const index = getRandomInt(0, availableRaces.length - 1);
  return availableRaces[index];
};

export const getAvaiableStartPositions = state => state.gameReducer.availableStartPositions;

export const getRandomAvailableStartPosition = (state) => {
  const availableStartPositions = getAvaiableStartPositions(state);
  const index = getRandomInt(0, availableStartPositions.length - 1);
  return availableStartPositions[index];
};

export const getAvaiableColors = state => state.gameReducer.availableColors;

export const getRandomAvailableColor = (state) => {
  const availableColors = getAvaiableColors(state);
  const index = getRandomInt(0, availableColors.length - 1);
  return availableColors[index];
};
