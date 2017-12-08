import { ADD_PLAYER, ADD_MONEY, REMOVE_MONEY } from './reducer';
import { raceMap } from '../race/constants';

export const addPlayer = (x, y, raceName) => (dispatch) => {
  const race = raceMap[raceName];
  dispatch({
    type: ADD_PLAYER,
    payload: {
      x,
      y,
      raceName,
    },
  });

  race.createHomeworld(dispatch, x, y);
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