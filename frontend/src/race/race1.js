import { createPlanet } from '../tile/planet/action';
import { addFleet } from '../tile/action';

const race = {
  name: 'X1Y1',
  createHomeworld: (dispatch, x, y, playerId) => {
    dispatch(createPlanet(x, y, 'X1Y1', 5, 0, playerId));
    dispatch(addFleet(x, y, playerId));
  },
};

export default race;
