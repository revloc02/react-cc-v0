const initialState = {
  count: 0,
  decount: 11,
  templates: {
    advanced: 0,
    giant: 0,
    young: 0,
    mighty: 0
  },
  baseStats: {
    str: 39, dex: 6, con: 27, int: 26, wis: 27, cha: 26
  },
  creature: {
    title: {
      name: "Great Wyrm Silver Dragon",
      cr: 22,
      xp: 615000,
      race: [],
      class: [],
      alignment: "LG",
      size: "Colossal",
      type: "dragon",
      subType: "(cold)",
      init: 2,
      senses: "dragon senses, fog vision; Perception +40",
      Aura: "cold(10 ft., 2d6 cold), frightful presence (360 ft., DC 32)"
    },
    defense: {
      ac: {
        ac: 39,
        touch: 0,
        flatFooted: 39,
        ac_mods: { Dex: -2, natural: 39, size: -8 }
      },
      hp: 420,
      hd_num: 29,
      hd_die: 12,
      HD: "(29d12+232)",
      HP_Mods: [],
      saves: {
        fort: 24,
        ref: 16,
        will: 26
      },
      Save_Mods: [],
      defensiveAbilities: "reflective scales",
      dr: { magic: 20 },
      immune: ["acid", "cold", "paralysis", "sleep"],
      resist: [],
      sr: "33",
      weaknesses: "Vulnerability to fire"
    },
    offense: {
      speed: "40 ft., fly 250 ft. (poor); cloudwalking, graceful flight",
      Speed_Mod: [],
      Melee: [
        "bite +36 (4d8+21/19-20)",
        "2 claws +35 (4d6+14)",
        "tail slap +33 (4d6+21)",
        "2 wings +33 (2d8+7)"
      ],
      Ranged: [],
      space: "30 ft.",
      reach: "20 ft. (30 ft. with bite)",
      specialAttacks:
        ["breath weapon (70-ft. cone, DC 32, 24d8 cold)", "crush (4d8+21, DC 32)", "paralyzing breath", "tail sweep (2d8+21, DC 32)"],
      SpellLikeAbilities:
        "Spell-Like Abilities (CL 29th; concentration +37)  At will-control weather, control winds, detect evil, feather fall, fog cloud, reverse gravity",
      SpellsKnown:
        "Spells Known (CL 19th; concentration +27)  9th (4/day)-gate, true resurrection  8th (7/day)-greater spell immunity, holy aura (DC 26), mass cure critical wounds  7th (7/day)-greater scrying, holy word (DC 25), repulsion (DC 25)  6th (7/day)-banishment (DC 24), greater dispel magic, heal  5th (7/day)-break enchantment, flame strike (DC 23), plane shift, wall of force  4th (8/day)-dimension door, freedom of movement, restoration, solid fog  3rd (8/day)-cure serious wounds, dispel magic, hold person (DC 21), wind wall  2nd (8/day)-augury, calm emotions (DC 20), cure moderate wounds, invisibility, web (DC 20)  1st (8/day)-bless, divine favor, protection from evil, shield, true strike  0 (at will)-detect magic, flare (DC 18), light, message, prestidigitation, read magic, stabilize, resistance, virtue  Note: A silver dragon can cast cleric spells as arcane spells",
      SpellsPrepared: [],
      SpellDomains: []
    },
    tactics: "some Tactics here",
    statistics: {
      abilityScores: { str: 39, dex: 6, con: 27, int: 26, wis: 27, cha: 26 },
      AbilitiyScore_Mods: [],
      bab: 39,
      cmb: 51,
      cmd: 59,
      cmd_sp: "(63 vs. trip)",
      feats: [
        "Critical Focus",
        "Flyby Attack",
        "Hover",
        "Improved Critical (bite)",
        "Improved Initiative",
        "Improved Vital Strike",
        "Iron Will",
        "Lighting Reflexes",
        "Multiattack",
        "Power Attack",
        "Quicken Spell",
        "Skill Focus (Fly)",
        "Snatch",
        "Vital Strike",
        "Weapon Focus (bite)"
      ],
      skills: [
        "Acrobatics +27 (+31 jump)",
        "Diplomacy +40",
        "Fly +24",
        "Heal +40",
        "Intimidate +40",
        "Knowledge (arcana, history, local, nobility, planes) +40",
        "Perception +40",
        "Sense Motive +40",
        "Spellcraft +40",
        "Survival +40"
      ],
      racialMods: [],
      languages:
        ["Auran", "Common", "Draconic", "Dwarven", "Elven", "Halfling", "Giant", "Terran", "1 more"],
    },
    SpecialAbilities: {
      SQ: "change shape 3/day (any animal or humanoid; polymorph)",
      SpecialAbilities:
        "Change Shape (Su)  A silver dragon can assume any animal or humanoid form 3/day as if using polymorph.  Cloudwalking (Su)  A very young or older silver dragon can tread on clouds or fog as though on solid ground.  Cold Aura (Su)  An old or older silver dragon is surrounded by an aura of cold. All creatures within 5 feet of the dragon take 1d6 points of cold damage at the beginning of the dragon's turn. An ancient dragon's aura extends to 10 feet. A great wyrm's aura damage increases to 2d6. A silver dragon can suppress or activate this aura at will as a free action.  Fog Vision (Ex)  A juvenile or older silver dragon can see perfectly well in fog and clouds.  Graceful Flight (Ex)  A young or older silver dragon's aerial maneuverability is one step better than normal.  Paralyzing Breath (Su)  Instead of a cone of cold, a silver dragon can breathe a cone of paralyzing gas. Creatures within the cone must succeed on a Fortitude save or be paralyzed for 1d6 rounds plus 1 round per age category of the dragon.  Reflective Scales (Su)  Any spell that targets an ancient or older silver dragon but fails to penetrate the silver dragon's spell resistance might be reflected. If the caster level check to penetrate the dragon's spell resistance is failed by 5 or more, the spell is reflected. If the check fails by 4 or less, the spell is merely wasted. This otherwise functions as spell turning.  True Courage (Ex)  A great wyrm silver dragon can fight on through pain and death. When reduced to below 0 hit points, it remains conscious, automatically stabilizes, and can continue to act (although it is staggered). If it takes damage or is the target of a spell that causes its death, it remains alive for 1 round and can act normally (it is not staggered for this final round)."
    },
    ecology: {
      Environment: "temperate mountains",
      Organization: "solitary",
      Treasure: "triple",
      Description_Visual:
        "The scales of this tall, elegant dragon shine like polished silver, and its tail has a feathered appearance.",
      Group: "Metallic Dragon",
      Source: "d20pfsrd",
      IsTemplate: "0",
      Description:
        "Of all the dragons, silvers are the most courageous, holding themselves to a chivalrous code to help the weak, defeat evil, and behave in an honorable manner."
    },
    Gender: [],
    Bloodline: [],
    ProhibitedSchools: [],
    BeforeCombat: [],
    DuringCombat: [],
    Morale: [],
    Gear: [],
    OtherGear: [],
    Vulnerability: [],
    Note: [],
    CharacterFlag: "0",
    CompanionFlag: "0",
    Fly: "1",
    Climb: "0",
    Burrow: "0",
    Swim: "0",
    Land: "1",
    TemplatesApplied: []
  }
};

export default initialState;
