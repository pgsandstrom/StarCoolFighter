import { createPlanet } from '../tile/planet/action';

const race = {
  name: 'Tao',
  createHomeworld: (dispatch, x, y) => {
    dispatch(createPlanet(x, y, 'sin', 8, 4));
  },
};

export default race;
