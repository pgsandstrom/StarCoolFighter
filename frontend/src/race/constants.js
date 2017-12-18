import race1 from './race1';
import race2 from './race2';
import race3 from './race3';
import race4 from './race4';
import race5 from './race5';
import race6 from './race6';

export const raceMap = {
};

export const getRaceList = () => Object.values(raceMap);

export const addRace = (race) => {
  raceMap[race.name] = race;
};

addRace(race1);
addRace(race2);
addRace(race3);
addRace(race4);
addRace(race5);
addRace(race6);
