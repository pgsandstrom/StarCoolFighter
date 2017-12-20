import { createPlanet } from '../tile/planet/action';
import { addFleet } from '../tile/action';
import { CRUISER, DREADNAUGHT, SOLDIER, TRANSPORTER } from '../tile/fleet/fleetTypes';

const race = {
  name: 'X1Y1',
  createHomeworld: (dispatch, x, y, playerId) => {
    dispatch(createPlanet(x, y, 'X1Y1', 5, 0, playerId));
    dispatch(addFleet(x, y, playerId, CRUISER));
    dispatch(addFleet(x, y, playerId, TRANSPORTER));
    dispatch(addFleet(x, y, playerId, SOLDIER));
    dispatch(addFleet(x, y, playerId, SOLDIER));
    dispatch(addFleet(x, y, playerId, SOLDIER));
    dispatch(addFleet(x, y, playerId, DREADNAUGHT));
  },
};

export default race;
