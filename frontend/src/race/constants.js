import race1 from './race1';
import race2 from './race2';

export const raceMap = {
};

export const getRaceList = () => Object.values(raceMap);

export const addRace = (race) => {
  raceMap[race.name] = race;
};

addRace(race1);
addRace(race2);
