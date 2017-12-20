import _ from 'lodash';

import {
  SELECT_TILE,
  UNSELECT_TILE,
  SELECT_FLEET,
  UNSELECT_FLEET,
  SELECT_PLANET,
  UNSELECT_PLANET, UNSELECT_ALL_FLEETS,
} from './reducer';

export const selectTile = id => (dispatch, getState) => {
  if (_.isEmpty(getState().personalReducer.selectedFleetsId) === false) {
    dispatch(unselectAllFleets());
  }
  if (getState().personalReducer.selectedPlanetId != null) {
    dispatch(unselectPlanet());
  }
  dispatch({
    type: SELECT_TILE,
    payload: {
      id,
    },
  });
};

export const unselectTile = () => ({
  type: UNSELECT_TILE,
});

export const selectFleet = id => (dispatch, getState) => {
  if (getState().personalReducer.selectedTileId != null) {
    dispatch(unselectTile());
  }
  if (getState().personalReducer.selectedPlanetId != null) {
    dispatch(unselectPlanet());
  }
  dispatch({
    type: SELECT_FLEET,
    payload: {
      id,
    },
  });
};

export const unselectFleet = id => ({
  type: UNSELECT_FLEET,
  payload: {
    id,
  },
});

export const unselectAllFleets = () => ({
  type: UNSELECT_ALL_FLEETS,
});

export const selectPlanet = id => (dispatch, getState) => {
  if (getState().personalReducer.selectedTileId != null) {
    dispatch(unselectTile());
  }
  if (_.isEmpty(getState().personalReducer.selectedFleetsId) === false) {
    dispatch(unselectAllFleets());
  }
  dispatch({
    type: SELECT_PLANET,
    payload: {
      id,
    },
  });
};

export const unselectPlanet = () => ({
  type: UNSELECT_PLANET,
});
