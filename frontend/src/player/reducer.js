export const ADD_PLAYER = 'player/ADD_PLAYER';
export const ADD_MONEY = 'player/ADD_MONEY';
export const REMOVE_MONEY = 'player/REMOVE_MONEY';

const initialState = {
  players: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return { ...state, players: [...state.players, action.payload] };
    case ADD_MONEY:
      return { ...state };
    case REMOVE_MONEY:
      return { ...state };
    default:
      return state;
  }
};
