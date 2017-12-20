// export const SOLDIER = {
//   attack: 8,
//   cost: 1,
// };

export const SOLDIER = 'SOLDIER';
export const TRANSPORTER = 'TRANSPORTER';
export const CRUISER = 'CRUSIER';
export const DREADNAUGHT = 'BATTLECRUISDER';


export const fleetType = {
  [SOLDIER]: {
    attack: 8,
    cost: 1,
    speed: 0,
  },
  [TRANSPORTER]: {
    attack: 9,
    cost: 1,
    speed: 1,
  },
  [CRUISER]: {
    attack: 7,
    cost: 4,
    speed: 2,
  },
  [DREADNAUGHT]: {
    attack: 5,
    cost: 8,
    speed: 1,
  },
};
