import { getTile } from '../tile/selector';
import { getFleetSpeed } from '../tile/fleet/selector';

export const getSelectedFleets = state =>
  Object.keys(state.personalReducer.selectedFleetsId)
    .filter(key => state.personalReducer.selectedFleetsId[key])
    .map(key => state.tileReducer.fleets.find(fleet => fleet.id === Number(key)));

export const isAnyFleetSelected = state =>
  Object.keys(state.personalReducer.selectedFleetsId)
    .some(key => state.personalReducer.selectedFleetsId[key]);

const canFleetReachTile = (state, fleet, tile) => {
  const xDiff = fleet.x - tile.x;
  const yDiff = fleet.y - tile.y;

  const xCost = xDiff;
  let yCost;
  if (xDiff > 0 && yDiff < 0) {
    yCost = Math.min(0, yDiff + xDiff);
  } else if (xDiff < 0 && yDiff > 0) {
    yCost = Math.max(0, yDiff + xDiff);
  } else {
    yCost = yDiff;
  }
  return Math.abs(xCost) + Math.abs(yCost) <= getFleetSpeed(state, fleet.id);
};

export const isTileReachable = (state, tileId) => {
  const selectedFleetsId = getSelectedFleets(state);
  const tile = getTile(state, tileId);
  if (selectedFleetsId.length === 0) {
    return false;
  }

  return selectedFleetsId.every(selectedFleet => canFleetReachTile(state, selectedFleet, tile));
};

