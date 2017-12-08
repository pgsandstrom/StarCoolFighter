import { createPlanet } from '../tile/planet/action';

const race = {
  name: 'X1Y1',
  createHomeworld: (dispatch, x, y) => {
    dispatch(createPlanet(x, y, 'X1Y1', 5, 0));
  },
};

export default race;
