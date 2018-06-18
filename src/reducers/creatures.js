// Reducer
const creatures = (state = {}, action) => {
    switch (action.type) {
      case "FETCH_CREATURE_DATA_SUCCESS":
        return parseCreature(action.creatures)
      default:
        return state;
    }
  };

const parseCreature = (creatures) => {
  // return([
  //   {name: "1"},
  //   {name: "2"}
  // ])
  return (creatures.map(creature => (
    {name: creature.Name,
      cr: creature.CR,
      xp: creature.XP,
      alignment: creature.Alignment,
      size: creature.Size,
      type: creature.Type,
      init: creature.Init,
      senses: creature.Senses,
      ac: creature.AC,
      ac_mods: creature.AC_Mods,
      ac_natural: parseNaturalAc(creature.AC_Mods),
      hp: creature.HP,
      hd: creature.HD,
      saves: creature.Saves,
      fort: creature.Fort,
      ref: creature.Ref,
      will: creature.Will,
      immune: creature.Immune,
    }
  )))
}
const parseNaturalAc = (ac_mods) => {

}
  
  export default creatures;