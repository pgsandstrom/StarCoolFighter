import { getNewItem, getRandomInt } from '../../util';

import { CREATE_PLANET, ATTACK_PLANET } from './reducer';

const defaultPlanet = {
  x: undefined,
  y: undefined,
  name: 'Roflcopter',
  resource: 3,
  influence: 3,
  playerId: 0,
};

export const createRandomPlanet = (x, y) => {
  const resource = getRandomInt(0, 5);
  const influence = getRandomInt(0, 5);
  return createPlanet(x, y, undefined, resource, influence);
};

export const createPlanet = (x, y, name, resource, influence, playerId = 0) => {
  const newPlanet = getNewItem({ ...defaultPlanet, x, y, name, resource, influence, playerId });
  return {
    type: CREATE_PLANET,
    payload: {
      planet: newPlanet,
    },
  };
};

export const attackPlanet = () => {

};
