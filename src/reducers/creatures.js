// Reducer
const creatures = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_CREATURE_DATA_SUCCESS":
      return parseCreature(action.creatures);
    default:
      return state;
  }
};

const parseCreature = creatures => {
  // return([
  //   {name: "1"},
  //   {name: "2"}
  // ])
  return creatures.map(creature => ({
    name: creature.Name,
    cr: creature.CR,
    xp: creature.XP,
    alignment: creature.Alignment,
    size: creature.Size,
    type: creature.Type,
    init: creature.Init,
    senses: creature.Senses,
    ac: creature.AC,
    ac_mods: creature.AC_Mods,
    ac_natural: parseAcMods("natural", creature.AC_Mods),
    ac_dodge: parseAcMods("dodge", creature.AC_Mods),
    ac_armor: parseAcMods("armor", creature.AC_Mods),
    ac_dex: parseAcMods("Dex", creature.AC_Mods),
    hp: creature.HP,
    hd: creature.HD,
    saves: creature.Saves,
    fort: creature.Fort,
    ref: creature.Ref,
    will: creature.Will,
    immune: creature.Immune
      ? creature.Immune.split(",").map(item => item.trim())
      : undefined
  }));
};
const parseAcMods = (key, ac_mods) => {
  const start = ac_mods ? ac_mods.indexOf(key) : -2;
  if (start > 0) {
    const end = ac_mods.indexOf(" ", start - 3);
    // TODO: this does not get numbers that happen to be negative
    return parseInt(ac_mods.substring(start - 4, end).replace(/^\D+/g, ""), 10);
  } else {
    return 0;
  }
};

export default creatures;
