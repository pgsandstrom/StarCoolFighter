import { createPlanet } from '../tile/planet/action';

const race = {
  name: 'Tao',
  createHomeworld: (dispatch, x, y, playerId) => {
    dispatch(createPlanet(x, y, 'sin', 8, 4, playerId));
  },
};

export default race;
