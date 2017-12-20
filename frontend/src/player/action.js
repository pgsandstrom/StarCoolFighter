import { ADD_PLAYER, ADD_MONEY, REMOVE_MONEY } from './reducer';
import { raceMap } from '../race/constants';
import { newId } from '../util';
import { fleetType } from '../tile/fleet/fleetTypes';

export const addPlayer = (x, y, raceName, color) => (dispatch) => {
  const race = raceMap[raceName];
  const id = newId();
  dispatch({
    type: ADD_PLAYER,
    payload: {
      x,
      y,
      raceName,
      color,
      id,
      fleet: fleetType,
    },
  });

  race.createHomeworld(dispatch, x, y, id);
};

export const addMoney = () => (dispatch) => {
  dispatch({
    type: ADD_MONEY,
    payload: {
    },
  });
};

export const removeMoney = () => (dispatch) => {
  dispatch({
    type: REMOVE_MONEY,
    payload: {
    },
  });
};
