import { createSelector } from "reselect";

const getAdvTmpl = state => state.templates.advanced;
const getStr = state => state.baseStats.str;
const getDex = state => state.baseStats.dex;
const getCon = state => state.baseStats.con;
const getInt = state => state.baseStats.int;
const getWis = state => state.baseStats.wis;
const getCha = state => state.baseStats.cha;

const getStrength = createSelector([getAdvTmpl, getStr], (advanced, str) => {
  return str + advanced * 4;
});

const getDexterity = createSelector([getAdvTmpl, getDex], (advanced, dex) => {
  return dex + advanced * 4;
});

const getConstitution = createSelector(
  [getAdvTmpl, getCon],
  (advanced, con) => {
    return con + advanced * 4;
  }
);

const getIntelligence = createSelector(
  [getAdvTmpl, getInt],
  (advanced, int) => {
    if (int <= 2) {
      return int;
    } else {
      return int + advanced * 4;
    }
  }
);

const getWisdon = createSelector([getAdvTmpl, getWis], (advanced, wis) => {
  return wis + advanced * 4;
});

const getCharisma = createSelector([getAdvTmpl, getCha], (advanced, cha) => {
  return cha + advanced * 4;
});

export const getStats = createSelector(
  [
    getStrength,
    getDexterity,
    getConstitution,
    getIntelligence,
    getWisdon,
    getCharisma
  ],
  (str, dex, con, int, wis, cha) => {
    return { str, dex, con, int, wis, cha };
  }
);
