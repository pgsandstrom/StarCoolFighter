import { getTile } from '../tile/selector';

export const getSelectedFleets = state =>
  Object.keys(state.playerReducer.selectedFleetsId)
    .filter(key => state.playerReducer.selectedFleetsId[key])
    .map(key => state.tileReducer.fleets.find(fleet => fleet.id === Number(key)));

export const isAnyFleetSelected = state =>
  Object.keys(state.playerReducer.selectedFleetsId)
    .some(key => state.playerReducer.selectedFleetsId[key]);

const canFleetReachTile = (fleet, tile) => {
  // debugger;
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
  return Math.abs(xCost) + Math.abs(yCost) <= 2;
};

export const isTileReachable = (state, tileId) => {
  // debugger;
  const selectedFleetsId = getSelectedFleets(state);
  const tile = getTile(state, tileId);
  if (selectedFleetsId.length === 0) {
    return false;
  }

  return selectedFleetsId.every(selectedFleet => canFleetReachTile(selectedFleet, tile));
};

