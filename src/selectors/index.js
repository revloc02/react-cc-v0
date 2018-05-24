import { createSelector } from 'reselect'
​
const getAdvTmpl = state => state.templates.advanced
const getStr = state => state.baseStats.str
const getDex = state => state.baseStats.dex
const getCon = state => state.baseStats.con
​
const getStrength = createSelector(
  [getAdvTmpl, getStr],
  (advanced, str) => {
        return str + (advanced*4)
  }
)
​
const getDexterity = createSelector(
  [getAdvTmpl, getDex],
  (advanced, dex) => {
        return dex + (advanced*4)
  }
)
​
const getConstitution = createSelector(
  [getAdvTmpl, getCon],
  (advanced, con) => {
        return con + (advanced*4)
  }
)

export const getStats = createSelector(
  [getStrength, getDexterity, getConstitution],
  (str, dex, con) => {
        return {str, dex, con}
  }
)