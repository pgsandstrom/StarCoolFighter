export const CREATE_PLANET = 'planet/CREATE_PLANET';
export const ATTACK_PLANET = 'planet/ATTACK_PLANET';

const initialState = {
  planets: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PLANET:
      return { ...state, planets: [...state.planets, action.payload.planet] };
    case ATTACK_PLANET:
      return { ...state };
    default:
      return state;
  }
};
