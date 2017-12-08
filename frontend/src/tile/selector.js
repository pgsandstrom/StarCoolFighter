const getTiles = state => state.tileReducer.tiles;

export const getRelevantTiles = state => getRelevantTileReducer(state).tiles;

// TODO jesus this is so ineffective... perhaps selector with large cache?
export const getTile = (state, tileId) => getTiles(state).find(tile => tile.id === tileId);

export const getFleets = state => state.tileReducer.fleets;

export const getRelevantFleetsForTile = (state, tile) => getRelevantTileReducer(state).fleets.filter(fleet => fleet.x === tile.x && fleet.y === tile.y);

const getRelevantTileReducer = (state) => {
  const selectedHistory = getSelectedHistory(state);
  if (selectedHistory != null) {
    return selectedHistory.tileReducer;
  } else {
    return state.tileReducer;
  }
};

export const getHistoryAction = (state) => {
  const selectedHistory = getSelectedHistory(state);
  if (selectedHistory != null) {
    return selectedHistory.action;
  } else {
    return null;
  }
};

const getSelectedHistory = state => state.tileReducer.history.find(historyItem => historyItem.selected);

export const startPositions = [
  { x: 3, y: 0 },
  { x: 3, y: -3 },
  { x: 0, y: 3 },
  { x: 0, y: -3 },
  { x: -3, y: 3 },
  { x: -3, y: -0 },
];

export const isStartPosition = (x, y) => startPositions.some(startPosition => startPosition.x === x && startPosition.y === y);
