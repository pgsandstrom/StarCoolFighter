import { getPlanetsOnLocation } from './planet/selector';
import { getFleetsOnLocation } from './fleet/selector';
import { getPlayer } from '../player/selector';

const getTiles = state => state.tileReducer.tiles;

export const getRelevantTiles = state => getRelevantTileReducer(state).tiles;

// TODO jesus this is so ineffective... perhaps selector with large cache?
export const getTile = (state, tileId) => getTiles(state).find(tile => tile.id === tileId);

export const getFleets = state => state.tileReducer.fleets;

export const getRelevantFleetsForTile = (state, tile) =>
  getRelevantTileReducer(state).fleets.filter(fleet => fleet.x === tile.x && fleet.y === tile.y);

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

export const getTileColor = (state, tile) => {
  const player = getPlayerControllingTile(state, tile);
  if (player != null) {
    return player.color;
  } else {
    return null;
  }
};

const getPlayerControllingTile = (state, tile) => {
  const planets = getPlanetsOnLocation(state, tile.x, tile.y);
  const fleets = getFleetsOnLocation(state, tile.x, tile.y);

  // TODO add fleets
  const itemArray = [...planets];

  if (itemArray.length === 0) {
    return null;
  }

  const id = itemArray.map(item => item.playerId).reduce((first, second) => {
    if (first === second) {
      return first;
    } else {
      return 0;
    }
  });

  if (id !== 0) {
    return getPlayer(state, id);
  }

  return null;

  // TODO
};

export const startPositions = [
  { x: 3, y: 0 },
  { x: 3, y: -3 },
  { x: 0, y: 3 },
  { x: 0, y: -3 },
  { x: -3, y: 3 },
  { x: -3, y: -0 },
];

export const playerColors = [
  '#c35c99',
  '#55e2f4',
  '#5f3750',
  '#3c3292',
  '#c26920',
  '#d9121c',
];

export const isStartPosition = (x, y) =>
  startPositions.some(startPosition => startPosition.x === x && startPosition.y === y);
