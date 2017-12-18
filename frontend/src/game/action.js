import _ from 'lodash';

import { RESET_AVAILABLE_RACES, REMOVE_AVAILABLE_RACE, RESET_AVAILABLE_START_POSITIONS, REMOVE_AVAILABLE_START_POSITION } from './reducer';
import { getRaceList } from '../race/constants';
import { createBoard, addFleet, addHistory } from '../tile/action';
import { historyTypes } from '../tile/historyTypes';
import { getRandomAvailableRace, getRandomAvailableStartPosition } from './selector';
import { addPlayer } from '../player/action';

export const quickStartGame = () => (dispatch) => {
  dispatch(createBoard(3));
  dispatch(resetAvailableRaces());

  _.times(6, () => dispatch(addRandomPlayer()));

  // dispatch(addFleet(1, 1));
  // dispatch(addFleet(1, 1));
  // dispatch(addFleet(1, 1));

  dispatch(addHistory(historyTypes.INIT));
};

export const addRandomPlayer = () => (dispatch, getState) => {
  // debugger;
  const state = getState();
  // console.log(state.gameReducer.availableStartPositions.length);
  const race = getRandomAvailableRace(state);
  const startPosition = getRandomAvailableStartPosition(state);
  dispatch(addPlayer(startPosition.x, startPosition.y, race.name));
  dispatch(removeAvailableRace(race.name));
  dispatch(removeAvailableStartPosition(startPosition));
};

export const resetAvailableRaces = () => ({
  type: RESET_AVAILABLE_RACES,
  payload: {
    races: getRaceList(),
  },
});

export const removeAvailableRace = raceName => (dispatch, getState) => {
  const index = getState().gameReducer.availableRaces.findIndex(race => race.name === raceName);
  if (index === -1) {
    throw new Error('tried to remove nonexisting race');
  }
  dispatch({
    type: REMOVE_AVAILABLE_RACE,
    payload: {
      index,
    },
  });
};

export const resetAvailableStartPositions = () => ({
  type: RESET_AVAILABLE_START_POSITIONS,
  payload: {
  },
});

export const removeAvailableStartPosition = startPosition =>
  ({
    type: REMOVE_AVAILABLE_START_POSITION,
    payload: {
      ...startPosition,
    },
  });
