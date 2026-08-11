/**
 * World of Warcraft Classes, Specs, and Utility Database
 */

window.WOW_CLASSES = [
  // PALADIN
  {
    id: 'paladin-prot',
    className: 'Paladin',
    specName: 'Protection',
    role: 'Tank',
    color: '#F48CBA',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_paladin_shieldoftherighteous.jpg',
    interrupt: { name: 'Rebuke', cd: 15, range: 'Melee', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_rebuke.jpg' },
    dispels: { poison: true, disease: true, curse: false, magic: false, soothe: false, massDispel: false },
    stuns: ['Hammer of Justice (6s stun)', 'Blinding Light (AoE disorient)', 'Avenger\'s Shield (Silence)'],
    defensives: ['Divine Shield (Immunity)', 'Ardent Defender (40% DR)', 'Guardian of Ancient Kings (50% DR)', 'Blessing of Protection (Physical Immunity)', 'Blessing of Sacrifice (External 30% DR)'],
    perks: { bloodlust: false, battleRes: true, freedom: true, tremor: false, mindSoothe: false }
  },
  {
    id: 'paladin-holy',
    className: 'Paladin',
    specName: 'Holy',
    role: 'Healer',
    color: '#F48CBA',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_holybolt.jpg',
    interrupt: { name: 'Rebuke', cd: 15, range: 'Melee', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_rebuke.jpg' },
    dispels: { poison: true, disease: true, curse: false, magic: true, soothe: false, massDispel: false },
    stuns: ['Hammer of Justice (6s stun)', 'Blinding Light (AoE disorient)'],
    defensives: ['Divine Shield (Immunity)', 'Aura Mastery (15% DR + Silence Immunity)', 'Blessing of Protection (Physical Immunity)', 'Blessing of Sacrifice (External 30% DR)'],
    perks: { bloodlust: false, battleRes: true, freedom: true, tremor: false, mindSoothe: false }
  },
  {
    id: 'paladin-ret',
    className: 'Paladin',
    specName: 'Retribution',
    role: 'Melee DPS',
    color: '#F48CBA',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_auraoflight.jpg',
    interrupt: { name: 'Rebuke', cd: 15, range: 'Melee', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_rebuke.jpg' },
    dispels: { poison: true, disease: true, curse: false, magic: false, soothe: false, massDispel: false },
    stuns: ['Hammer of Justice (6s stun)', 'Blinding Light (AoE disorient)'],
    defensives: ['Divine Shield (Immunity)', 'Shield of Vengeance (Absorb)', 'Divine Protection (20% DR)', 'Blessing of Protection (Physical Immunity)', 'Blessing of Sacrifice (External 30% DR)'],
    perks: { bloodlust: false, battleRes: true, freedom: true, tremor: false, mindSoothe: false }
  },

  // DRUID
  {
    id: 'druid-resto',
    className: 'Druid',
    specName: 'Restoration',
    role: 'Healer',
    color: '#FF7D0A',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_healingtouch.jpg',
    interrupt: { name: 'Solar Beam', cd: 45, range: '40yd Silence', icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_vehicle_launchcloud.jpg' },
    dispels: { poison: true, disease: false, curse: true, magic: true, soothe: true, massDispel: false },
    stuns: ['Mighty Bash (4s stun)', 'Typhoon (Knockback + Slow)', 'Ursol\'s Vortex (Grip)'],
    defensives: ['Tranquility (Group Healing CD)', 'Flourish', 'Ironbark (External 20% DR)', 'Barkskin (20% DR)'],
    perks: { bloodlust: false, battleRes: true, freedom: true, tremor: false, mindSoothe: false }
  },
  {
    id: 'druid-guardian',
    className: 'Druid',
    specName: 'Guardian',
    role: 'Tank',
    color: '#FF7D0A',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_racial_bearform.jpg',
    interrupt: { name: 'Skull Bash', cd: 15, range: '13yd Charge', icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_druid_bash.jpg' },
    dispels: { poison: true, disease: false, curse: true, magic: false, soothe: true, massDispel: false },
    stuns: ['Mighty Bash (4s stun)', 'Incapacitating Roar (AoE disorient)', 'Typhoon (Knockback)'],
    defensives: ['Survival Instincts (50% DR)', 'Barkskin (20% DR)', 'Rage of the Sleeper (CC Immunity + 25% DR)', 'Stampeding Roar (Group Speed)'],
    perks: { bloodlust: false, battleRes: true, freedom: true, tremor: false, mindSoothe: false }
  },

  // EVOKER
  {
    id: 'evoker-preservation',
    className: 'Evoker',
    specName: 'Preservation',
    role: 'Healer',
    color: '#33937F',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_evoker_preservation.jpg',
    interrupt: { name: 'Quell', cd: 20, range: '25yd', icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_evoker_quell.jpg' },
    dispels: { poison: true, disease: true, curse: true, magic: true, soothe: false, massDispel: false, cauterizingFlame: true },
    stuns: ['Tail Swipe (Knockup)', 'Wing Buffet (Knockback)', 'Deep Breath (Stun)'],
    defensives: ['Rewind (Group Health Reversal)', 'Time Dilation (Stagger External)', 'Zephyr (20% AoE DR + Speed)', 'Obsidian Scales (40% DR)'],
    perks: { bloodlust: true, battleRes: false, freedom: false, tremor: false, mindSoothe: false }
  },
  {
    id: 'evoker-augmentation',
    className: 'Evoker',
    specName: 'Augmentation',
    role: 'Ranged DPS',
    color: '#33937F',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_evoker_augmentation.jpg',
    interrupt: { name: 'Quell', cd: 20, range: '25yd', icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_evoker_quell.jpg' },
    dispels: { poison: true, disease: true, curse: true, magic: false, soothe: false, cauterizingFlame: true },
    stuns: ['Tail Swipe (Knockup)', 'Wing Buffet (Knockback)', 'Upheaval (Knockup)'],
    defensives: ['Zephyr (20% AoE DR + Speed)', 'Blistering Scales (Tank Armor Buff)', 'Obsidian Scales (40% DR)', 'Spatial Paradox (Cast on move)'],
    perks: { bloodlust: true, battleRes: false, freedom: false, tremor: false, mindSoothe: false }
  },

  // DEMON HUNTER
  {
    id: 'dh-havoc',
    className: 'Demon Hunter',
    specName: 'Havoc',
    role: 'Melee DPS',
    color: '#A330C9',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_demonhunter_specdps.jpg',
    interrupt: { name: 'Disrupt', cd: 15, range: 'Melee', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_mindrot.jpg' },
    dispels: { poison: false, disease: false, curse: false, magic: false, soothe: true, purgeMagic: true },
    stuns: ['Chaos Nova (AoE Stun)', 'Fel Eruption (4s Stun)', 'Imprison (Incapacitate)'],
    defensives: ['Darkness (15% Avoidance Party Cloud)', 'Blur (35% DR + 50% Dodge)', 'Netherwalk (Immunity)'],
    perks: { bloodlust: false, battleRes: false, freedom: false, tremor: false, mindSoothe: false }
  },
  {
    id: 'dh-vengeance',
    className: 'Demon Hunter',
    specName: 'Vengeance',
    role: 'Tank',
    color: '#A330C9',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_demonhunter_spectank.jpg',
    interrupt: { name: 'Disrupt', cd: 15, range: 'Melee', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_mindrot.jpg' },
    dispels: { poison: false, disease: false, curse: false, magic: false, soothe: true, purgeMagic: true },
    stuns: ['Sigil of Misery (AoE Fear)', 'Sigil of Silence (AoE Silence)', 'Sigil of Chains (AoE Grip)', 'Chaos Nova (AoE Stun)'],
    defensives: ['Fiery Brand (40% Damage Reduction)', 'Demon Spikes (Armor)', 'Metamorphosis (HP & Armor)', 'Darkness (Party Cloud)'],
    perks: { bloodlust: false, battleRes: false, freedom: false, tremor: false, mindSoothe: false }
  },

  // DEATH KNIGHT
  {
    id: 'dk-blood',
    className: 'Death Knight',
    specName: 'Blood',
    role: 'Tank',
    color: '#C41F3B',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_bloodpresence.jpg',
    interrupt: { name: 'Mind Freeze', cd: 15, range: '15yd', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_mindfreeze.jpg' },
    dispels: { poison: false, disease: false, curse: false, magic: false, soothe: false },
    stuns: ['Asphyxiate (5s Stun)', 'Gorefiend\'s Grasp (Mass Grip)', 'Death Grip (Single Grip)', 'Blinding Sleet (AoE Disorient)'],
    defensives: ['Anti-Magic Zone (20% Magic DR Party)', 'Anti-Magic Shell (Magic Immunity Absorb)', 'Vampiric Blood (30% HP & Healing)', 'Icebound Fortitude (30% DR + Stun Immune)'],
    perks: { bloodlust: false, battleRes: true, freedom: true, tremor: false, mindSoothe: false }
  },
  {
    id: 'dk-frost',
    className: 'Death Knight',
    specName: 'Frost',
    role: 'Melee DPS',
    color: '#C41F3B',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_frostpresence.jpg',
    interrupt: { name: 'Mind Freeze', cd: 15, range: '15yd', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_mindfreeze.jpg' },
    dispels: { poison: false, disease: false, curse: false, magic: false, soothe: false },
    stuns: ['Asphyxiate (5s Stun)', 'Blinding Sleet (AoE Disorient)', 'Death Grip'],
    defensives: ['Anti-Magic Zone (20% Magic DR Party)', 'Anti-Magic Shell (Magic Immunity)', 'Icebound Fortitude (30% DR)'],
    perks: { bloodlust: false, battleRes: true, freedom: true, tremor: false, mindSoothe: false }
  },

  // SHAMAN
  {
    id: 'shaman-resto',
    className: 'Shaman',
    specName: 'Restoration',
    role: 'Healer',
    color: '#0070DE',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_magicsensory.jpg',
    interrupt: { name: 'Wind Shear', cd: 12, range: '30yd (Shortest CD!)', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_cyclone.jpg' },
    dispels: { poison: true, disease: false, curse: true, magic: true, soothe: true, purgeMagic: true, cleansingTotem: true },
    stuns: ['Capacitor Totem (3s AoE Stun)', 'Thundershock (Knockback)', 'Earthgrab Totem (AoE Root)'],
    defensives: ['Spirit Link Totem (Health Equalizer + 10% DR)', 'Ancestral Guidance', 'Healing Tide Totem', 'Astral Shift (40% DR)'],
    perks: { bloodlust: true, battleRes: false, freedom: false, tremor: true, mindSoothe: false }
  },
  {
    id: 'shaman-elemental',
    className: 'Shaman',
    specName: 'Elemental',
    role: 'Ranged DPS',
    color: '#0070DE',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
    interrupt: { name: 'Wind Shear', cd: 12, range: '30yd', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_cyclone.jpg' },
    dispels: { poison: true, disease: false, curse: true, magic: false, soothe: true, purgeMagic: true, cleansingTotem: true },
    stuns: ['Capacitor Totem (3s AoE Stun)', 'Thunderstorm (Knockback)'],
    defensives: ['Astral Shift (40% DR)', 'Nature\'s Guardian (20% HP Proc)'],
    perks: { bloodlust: true, battleRes: false, freedom: false, tremor: true, mindSoothe: false }
  },

  // MAGE
  {
    id: 'mage-frost',
    className: 'Mage',
    specName: 'Frost',
    role: 'Ranged DPS',
    color: '#3FC7EB',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostbolt02.jpg',
    interrupt: { name: 'Counterspell', cd: 24, range: '40yd', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_iceshock.jpg' },
    dispels: { poison: false, disease: false, curse: true, magic: false, soothe: true, spellsteal: true },
    stuns: ['Dragon\'s Breath (Disorient)', 'Frost Nova (AoE Root)', 'Supernova (Knockup)'],
    defensives: ['Ice Block (Full Immunity)', 'Ice Cold (70% DR Immunity)', 'Mirror Image (20% DR)', 'Greater Invisibility (60% DR)'],
    perks: { bloodlust: true, battleRes: false, freedom: false, tremor: false, mindSoothe: false }
  },

  // PRIEST
  {
    id: 'priest-shadow',
    className: 'Priest',
    specName: 'Shadow',
    role: 'Ranged DPS',
    color: '#FFFFFF',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowwordpain.jpg',
    interrupt: { name: 'Silence', cd: 45, range: '30yd Silence', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_impression.jpg' },
    dispels: { poison: false, disease: true, curse: false, magic: true, soothe: false, massDispel: true },
    stuns: ['Psychic Scream (AoE Fear)', 'Silence (4s Silence)', 'Psychic Horror (Stun)'],
    defensives: ['Vampiric Embrace (Group Healing)', 'Dispersion (75% DR Immunity)', 'Fade (10% DR + Threat Drop)'],
    perks: { bloodlust: false, battleRes: false, freedom: false, tremor: false, mindSoothe: true }
  },
  {
    id: 'priest-holy',
    className: 'Priest',
    specName: 'Holy',
    role: 'Healer',
    color: '#FFFFFF',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_guardianspirit.jpg',
    interrupt: { name: 'Chastise', cd: 60, range: '30yd Incapacitate', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_holysmite.jpg' },
    dispels: { poison: false, disease: true, curse: false, magic: true, soothe: false, massDispel: true },
    stuns: ['Psychic Scream (AoE Fear)', 'Holy Word: Chastise (Stun)'],
    defensives: ['Guardian Spirit (Cheat Death External)', 'Divine Hymn (Group Healing CD)', 'Symbol of Hope (Party Defensive CD CD reset)'],
    perks: { bloodlust: false, battleRes: false, freedom: false, tremor: false, mindSoothe: true }
  },

  // MONK
  {
    id: 'monk-brewmaster',
    className: 'Monk',
    specName: 'Brewmaster',
    role: 'Tank',
    color: '#00FF98',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_monk_brewmaster_spec.jpg',
    interrupt: { name: 'Spear Hand Strike', cd: 15, range: 'Melee', icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_monk_spearhand.jpg' },
    dispels: { poison: true, disease: true, curse: false, magic: false, soothe: false },
    stuns: ['Leg Sweep (3s AoE Stun)', 'Ring of Peace (Knockback Ring)', 'Paralysis (Incapacitate)'],
    defensives: ['Stagger (Damage Delay)', 'Fortifying Brew (20% DR + HP)', 'Celestial Brew (Absorb Shield)', 'Zen Meditation (90% DR)'],
    perks: { bloodlust: false, battleRes: false, freedom: true, tremor: false, mindSoothe: false }
  },

  // WARRIOR
  {
    id: 'warrior-prot',
    className: 'Warrior',
    specName: 'Protection',
    role: 'Tank',
    color: '#C69E6D',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_warrior_defensivestance.jpg',
    interrupt: { name: 'Pummel', cd: 15, range: 'Melee', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_gauntlets_04.jpg' },
    dispels: { poison: false, disease: false, curse: false, magic: false, soothe: false },
    stuns: ['Shockwave (AoE Stun)', 'Storm Bolt (Single Stun)', 'Intimidating Shout (AoE Fear)'],
    defensives: ['Rallying Cry (15% Party HP)', 'Shield Wall (40% DR)', 'Spell Reflection (Magic Reflect)', 'Last Stand (30% HP)'],
    perks: { bloodlust: false, battleRes: false, freedom: false, tremor: false, mindSoothe: false }
  },

  // HUNTER
  {
    id: 'hunter-bm',
    className: 'Hunter',
    specName: 'Beast Mastery',
    role: 'Ranged DPS',
    color: '#AAD372',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_hunter_bestialdiscipline.jpg',
    interrupt: { name: 'Counter Shot', cd: 24, range: '40yd', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_ammo_bullet_02.jpg' },
    dispels: { poison: false, disease: false, curse: false, magic: false, soothe: true, tranqShot: true },
    stuns: ['Intimidation (5s Pet Stun)', 'Binding Shot (AoE Root/Stun)', 'Tar Trap / Freezing Trap'],
    defensives: ['Aspect of the Turtle (Immunity)', 'Survival of the Fittest (20% DR)', 'Exhilaration (Self Heal)'],
    perks: { bloodlust: true, battleRes: false, freedom: true, tremor: false, mindSoothe: false }
  },

  // WARLOCK
  {
    id: 'warlock-demo',
    className: 'Warlock',
    specName: 'Demonology',
    role: 'Ranged DPS',
    color: '#8788EE',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_demoness.jpg',
    interrupt: { name: 'Spell Lock (Felhunter)', cd: 24, range: '40yd', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_mindrot.jpg' },
    dispels: { poison: false, disease: false, curse: false, magic: true, soothe: false, singeMagic: true },
    stuns: ['Shadowfury (AoE Stun)', 'Mortal Coil (Horrify Heal)', 'Axe Toss (Pet Stun)'],
    defensives: ['Unending Resolve (40% DR + Silence Immune)', 'Soul Link (10% DR)', 'Demonic Gateway (Party Mobility)'],
    perks: { bloodlust: false, battleRes: true, freedom: false, tremor: false, mindSoothe: false }
  }
];
