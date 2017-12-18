import { createPlanet } from '../tile/planet/action';

const race = {
  name: 'X1Y1',
  createHomeworld: (dispatch, x, y, playerId) => {
    dispatch(createPlanet(x, y, 'X1Y1', 5, 0, playerId));
  },
};

export default race;
