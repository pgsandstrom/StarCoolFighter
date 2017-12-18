export const getPlayer = (state, playerId) => state.playerReducer.players.find(player => player.id === playerId);
