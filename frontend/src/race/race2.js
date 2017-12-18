import { createPlanet } from '../tile/planet/action';

const race = {
  name: 'ei',
  createHomeworld: (dispatch, x, y, playerId) => {
    dispatch(createPlanet(x, y, 'a', 2, 1, playerId));
    dispatch(createPlanet(x, y, 'b', 1, 2, playerId));
    dispatch(createPlanet(x, y, 'c', 1, 0, playerId));
  },
};

export default race;
