/**
 * World of Warcraft Classes, Specs, and Utility Database
 * Complete catalog of all 39 Specs across 13 Classes.
 * Differentiates between Single-Target Lockout Kicks and CC/Stun Disrupts.
 */

window.WOW_CLASSES = [
  // ================= PALADIN =================
  {
    id: 'paladin-prot',
    className: 'Paladin',
    specName: 'Protection',
    role: 'Tank',
    color: '#F48CBA',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_paladin_shieldoftherighteous.jpg',
    interrupt: { name: 'Rebuke', cd: 15, range: 'Melee', hasKick: true },
    ccDisrupts: ['Hammer of Justice (6s Stun)', 'Blinding Light (AoE Disorient)', 'Avenger\'s Shield (Silence)'],
    dispels: { poison: true, disease: true, curse: false, magic: false, soothe: false },
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
    interrupt: { name: 'Rebuke', cd: 15, range: 'Melee', hasKick: true },
    ccDisrupts: ['Hammer of Justice (6s Stun)', 'Blinding Light (AoE Disorient)'],
    dispels: { poison: true, disease: true, curse: false, magic: true, soothe: false },
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
    interrupt: { name: 'Rebuke', cd: 15, range: 'Melee', hasKick: true },
    ccDisrupts: ['Hammer of Justice (6s Stun)', 'Blinding Light (AoE Disorient)'],
    dispels: { poison: true, disease: true, curse: false, magic: false, soothe: false },
    defensives: ['Divine Shield (Immunity)', 'Shield of Vengeance (Absorb)', 'Divine Protection (20% DR)', 'Blessing of Protection (Physical Immunity)', 'Blessing of Sacrifice (External 30% DR)'],
    perks: { bloodlust: false, battleRes: true, freedom: true, tremor: false, mindSoothe: false }
  },

  // ================= PRIEST =================
  {
    id: 'priest-disc',
    className: 'Priest',
    specName: 'Discipline',
    role: 'Healer',
    color: '#FFFFFF',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_powerwordshield.jpg',
    interrupt: { name: 'None', cd: 0, range: 'N/A', hasKick: false },
    ccDisrupts: ['Psychic Scream (AoE Fear)', 'Shining Force / Mind Bomb (Knockback/Disorient)'],
    dispels: { poison: false, disease: true, curse: false, magic: true, soothe: false, massDispel: true },
    defensives: ['Pain Suppression (40% DR External)', 'Power Word: Barrier (25% Group DR)', 'Rapture (Shield Spam)'],
    perks: { bloodlust: false, battleRes: false, freedom: false, tremor: false, mindSoothe: true }
  },
  {
    id: 'priest-holy',
    className: 'Priest',
    specName: 'Holy',
    role: 'Healer',
    color: '#FFFFFF',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_guardianspirit.jpg',
    interrupt: { name: 'None', cd: 0, range: 'N/A', hasKick: false },
    ccDisrupts: ['Holy Word: Chastise (4s Stun/Incapacitate)', 'Psychic Scream (AoE Fear)'],
    dispels: { poison: false, disease: true, curse: false, magic: true, soothe: false, massDispel: true },
    defensives: ['Guardian Spirit (Cheat Death External)', 'Divine Hymn (Group Healing CD)', 'Symbol of Hope (Party Defensive CD reset)'],
    perks: { bloodlust: false, battleRes: false, freedom: false, tremor: false, mindSoothe: true }
  },
  {
    id: 'priest-shadow',
    className: 'Priest',
    specName: 'Shadow',
    role: 'Ranged DPS',
    color: '#FFFFFF',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowwordpain.jpg',
    interrupt: { name: 'Silence', cd: 45, range: '30yd', hasKick: true },
    ccDisrupts: ['Psychic Horror (4s Stun)', 'Psychic Scream (AoE Fear)'],
    dispels: { poison: false, disease: true, curse: false, magic: true, soothe: false, massDispel: true },
    defensives: ['Vampiric Embrace (Group Healing)', 'Dispersion (75% DR Immunity)', 'Fade (10% DR + Threat Drop)'],
    perks: { bloodlust: false, battleRes: false, freedom: false, tremor: false, mindSoothe: true }
  },

  // ================= DRUID =================
  {
    id: 'druid-resto',
    className: 'Druid',
    specName: 'Restoration',
    role: 'Healer',
    color: '#FF7D0A',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_healingtouch.jpg',
    interrupt: { name: 'None', cd: 0, range: 'N/A', hasKick: false },
    ccDisrupts: ['Mighty Bash (4s Stun)', 'Typhoon (Knockback + Slow)', 'Ursol\'s Vortex (Grip Ring)'],
    dispels: { poison: true, disease: false, curse: true, magic: true, soothe: true },
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
    interrupt: { name: 'Skull Bash', cd: 15, range: '13yd', hasKick: true },
    ccDisrupts: ['Mighty Bash (4s Stun)', 'Incapacitating Roar (AoE Disorient)', 'Typhoon (Knockback)'],
    dispels: { poison: true, disease: false, curse: true, magic: false, soothe: true },
    defensives: ['Survival Instincts (50% DR)', 'Barkskin (20% DR)', 'Rage of the Sleeper (CC Immunity + 25% DR)', 'Stampeding Roar (Group Speed)'],
    perks: { bloodlust: false, battleRes: true, freedom: true, tremor: false, mindSoothe: false }
  },
  {
    id: 'druid-balance',
    className: 'Druid',
    specName: 'Balance',
    role: 'Ranged DPS',
    color: '#FF7D0A',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_starfall.jpg',
    interrupt: { name: 'Solar Beam', cd: 45, range: '40yd AoE Silence', hasKick: true },
    ccDisrupts: ['Mighty Bash (4s Stun)', 'Typhoon (Knockback)', 'Ursol\'s Vortex'],
    dispels: { poison: true, disease: false, curse: true, magic: false, soothe: true },
    defensives: ['Barkskin (20% DR)', 'Renewing Roar', 'Stampeding Roar'],
    perks: { bloodlust: false, battleRes: true, freedom: true, tremor: false, mindSoothe: false }
  },
  {
    id: 'druid-feral',
    className: 'Druid',
    specName: 'Feral',
    role: 'Melee DPS',
    color: '#FF7D0A',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_druid_cattouch.jpg',
    interrupt: { name: 'Skull Bash', cd: 15, range: '13yd', hasKick: true },
    ccDisrupts: ['Maim (5s Stun)', 'Mighty Bash (4s Stun)', 'Typhoon (Knockback)'],
    dispels: { poison: true, disease: false, curse: true, magic: false, soothe: true },
    defensives: ['Survival Instincts (50% DR)', 'Barkskin (20% DR)', 'Stampeding Roar'],
    perks: { bloodlust: false, battleRes: true, freedom: true, tremor: false, mindSoothe: false }
  },

  // ================= SHAMAN =================
  {
    id: 'shaman-resto',
    className: 'Shaman',
    specName: 'Restoration',
    role: 'Healer',
    color: '#0070DE',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_magicsensory.jpg',
    interrupt: { name: 'Wind Shear', cd: 12, range: '30yd (12s Short Kick!)', hasKick: true },
    ccDisrupts: ['Capacitor Totem (3s AoE Stun)', 'Thundershock (Knockback)', 'Earthgrab Totem'],
    dispels: { poison: true, disease: false, curse: true, magic: true, soothe: true, purgeMagic: true, cleansingTotem: true },
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
    interrupt: { name: 'Wind Shear', cd: 12, range: '30yd', hasKick: true },
    ccDisrupts: ['Capacitor Totem (3s AoE Stun)', 'Thunderstorm (Knockback)'],
    dispels: { poison: true, disease: false, curse: true, magic: false, soothe: true, purgeMagic: true, cleansingTotem: true },
    defensives: ['Astral Shift (40% DR)', 'Nature\'s Guardian (20% HP Proc)'],
    perks: { bloodlust: true, battleRes: false, freedom: false, tremor: true, mindSoothe: false }
  },
  {
    id: 'shaman-enhancement',
    className: 'Shaman',
    specName: 'Enhancement',
    role: 'Melee DPS',
    color: '#0070DE',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shaman_improvedstormstrike.jpg',
    interrupt: { name: 'Wind Shear', cd: 12, range: '30yd', hasKick: true },
    ccDisrupts: ['Capacitor Totem (3s AoE Stun)', 'Sundering (Knockup)'],
    dispels: { poison: true, disease: false, curse: true, magic: false, soothe: true, purgeMagic: true },
    defensives: ['Astral Shift (40% DR)', 'Nature\'s Guardian'],
    perks: { bloodlust: true, battleRes: false, freedom: false, tremor: true, mindSoothe: false }
  },

  // ================= EVOKER =================
  {
    id: 'evoker-preservation',
    className: 'Evoker',
    specName: 'Preservation',
    role: 'Healer',
    color: '#33937F',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_evoker_preservation.jpg',
    interrupt: { name: 'Quell', cd: 20, range: '25yd', hasKick: true },
    ccDisrupts: ['Tail Swipe (Knockup)', 'Wing Buffet (Knockback)', 'Deep Breath (Stun)'],
    dispels: { poison: true, disease: true, curse: true, magic: true, soothe: false, cauterizingFlame: true },
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
    interrupt: { name: 'Quell', cd: 20, range: '25yd', hasKick: true },
    ccDisrupts: ['Tail Swipe (Knockup)', 'Wing Buffet (Knockback)', 'Upheaval (Knockup)'],
    dispels: { poison: true, disease: true, curse: true, magic: false, soothe: false, cauterizingFlame: true },
    defensives: ['Zephyr (20% AoE DR + Speed)', 'Blistering Scales (Tank Armor Buff)', 'Obsidian Scales (40% DR)'],
    perks: { bloodlust: true, battleRes: false, freedom: false, tremor: false, mindSoothe: false }
  },
  {
    id: 'evoker-devastation',
    className: 'Evoker',
    specName: 'Devastation',
    role: 'Ranged DPS',
    color: '#33937F',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/classicon_evoker_devastation.jpg',
    interrupt: { name: 'Quell', cd: 20, range: '25yd', hasKick: true },
    ccDisrupts: ['Tail Swipe (Knockup)', 'Wing Buffet (Knockback)', 'Deep Breath (Stun)'],
    dispels: { poison: true, disease: true, curse: true, magic: false, soothe: false, cauterizingFlame: true },
    defensives: ['Obsidian Scales (40% DR)', 'Zephyr (20% AoE DR + Speed)'],
    perks: { bloodlust: true, battleRes: false, freedom: false, tremor: false, mindSoothe: false }
  },

  // ================= DEMON HUNTER =================
  {
    id: 'dh-vengeance',
    className: 'Demon Hunter',
    specName: 'Vengeance',
    role: 'Tank',
    color: '#A330C9',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_demonhunter_spectank.jpg',
    interrupt: { name: 'Disrupt', cd: 15, range: 'Melee', hasKick: true },
    ccDisrupts: ['Sigil of Silence (AoE Silence)', 'Sigil of Misery (AoE Fear)', 'Sigil of Chains (AoE Grip)', 'Chaos Nova (AoE Stun)'],
    dispels: { poison: false, disease: false, curse: false, magic: false, soothe: true, purgeMagic: true },
    defensives: ['Fiery Brand (40% DR)', 'Demon Spikes (Armor)', 'Metamorphosis (HP & Armor)', 'Darkness (Party Cloud)'],
    perks: { bloodlust: false, battleRes: false, freedom: false, tremor: false, mindSoothe: false }
  },
  {
    id: 'dh-havoc',
    className: 'Demon Hunter',
    specName: 'Havoc',
    role: 'Melee DPS',
    color: '#A330C9',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_demonhunter_specdps.jpg',
    interrupt: { name: 'Disrupt', cd: 15, range: 'Melee', hasKick: true },
    ccDisrupts: ['Chaos Nova (AoE Stun)', 'Fel Eruption (4s Stun)', 'Imprison (Incapacitate)'],
    dispels: { poison: false, disease: false, curse: false, magic: false, soothe: true, purgeMagic: true },
    defensives: ['Darkness (15% Avoidance Party Cloud)', 'Blur (35% DR + 50% Dodge)', 'Netherwalk (Immunity)'],
    perks: { bloodlust: false, battleRes: false, freedom: false, tremor: false, mindSoothe: false }
  },

  // ================= DEATH KNIGHT =================
  {
    id: 'dk-blood',
    className: 'Death Knight',
    specName: 'Blood',
    role: 'Tank',
    color: '#C41F3B',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_bloodpresence.jpg',
    interrupt: { name: 'Mind Freeze', cd: 15, range: '15yd', hasKick: true },
    ccDisrupts: ['Asphyxiate (5s Stun)', 'Gorefiend\'s Grasp (Mass Grip)', 'Death Grip', 'Blinding Sleet (AoE Disorient)'],
    dispels: { poison: false, disease: false, curse: false, magic: false, soothe: false },
    defensives: ['Anti-Magic Zone (20% Magic DR Party)', 'Anti-Magic Shell (Magic Immunity)', 'Vampiric Blood (30% HP & Healing)', 'Icebound Fortitude (30% DR)'],
    perks: { bloodlust: false, battleRes: true, freedom: true, tremor: false, mindSoothe: false }
  },
  {
    id: 'dk-frost',
    className: 'Death Knight',
    specName: 'Frost',
    role: 'Melee DPS',
    color: '#C41F3B',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_frostpresence.jpg',
    interrupt: { name: 'Mind Freeze', cd: 15, range: '15yd', hasKick: true },
    ccDisrupts: ['Asphyxiate (5s Stun)', 'Blinding Sleet (AoE Disorient)', 'Death Grip'],
    dispels: { poison: false, disease: false, curse: false, magic: false, soothe: false },
    defensives: ['Anti-Magic Zone (20% Magic DR Party)', 'Anti-Magic Shell (Magic Immunity)', 'Icebound Fortitude (30% DR)'],
    perks: { bloodlust: false, battleRes: true, freedom: true, tremor: false, mindSoothe: false }
  },
  {
    id: 'dk-unholy',
    className: 'Death Knight',
    specName: 'Unholy',
    role: 'Melee DPS',
    color: '#C41F3B',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_unholypresence.jpg',
    interrupt: { name: 'Mind Freeze', cd: 15, range: '15yd', hasKick: true },
    ccDisrupts: ['Asphyxiate (5s Stun)', 'Death Grip', 'Abomination Limb (Mass Grip)'],
    dispels: { poison: false, disease: false, curse: false, magic: false, soothe: false },
    defensives: ['Anti-Magic Zone (20% Magic DR Party)', 'Anti-Magic Shell', 'Icebound Fortitude'],
    perks: { bloodlust: false, battleRes: true, freedom: true, tremor: false, mindSoothe: false }
  },

  // ================= MONK =================
  {
    id: 'monk-brewmaster',
    className: 'Monk',
    specName: 'Brewmaster',
    role: 'Tank',
    color: '#00FF98',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_monk_brewmaster_spec.jpg',
    interrupt: { name: 'Spear Hand Strike', cd: 15, range: 'Melee', hasKick: true },
    ccDisrupts: ['Leg Sweep (3s AoE Stun)', 'Ring of Peace (Knockback Ring)', 'Paralysis (Incapacitate)'],
    dispels: { poison: true, disease: true, curse: false, magic: false, soothe: false },
    defensives: ['Stagger', 'Fortifying Brew (20% DR + HP)', 'Celestial Brew', 'Zen Meditation (90% DR)'],
    perks: { bloodlust: false, battleRes: false, freedom: true, tremor: false, mindSoothe: false }
  },
  {
    id: 'monk-mistweaver',
    className: 'Monk',
    specName: 'Mistweaver',
    role: 'Healer',
    color: '#00FF98',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_monk_mistweaver_spec.jpg',
    interrupt: { name: 'Spear Hand Strike', cd: 15, range: 'Melee', hasKick: true },
    ccDisrupts: ['Leg Sweep (3s AoE Stun)', 'Ring of Peace (Knockback Ring)', 'Paralysis (Incapacitate)'],
    dispels: { poison: true, disease: true, curse: false, magic: true, soothe: false },
    defensives: ['Revival (Group Dispel + Heal)', 'Life Cocoon (External Shield)', 'Fortifying Brew'],
    perks: { bloodlust: false, battleRes: false, freedom: true, tremor: false, mindSoothe: false }
  },
  {
    id: 'monk-windwalker',
    className: 'Monk',
    specName: 'Windwalker',
    role: 'Melee DPS',
    color: '#00FF98',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_monk_windwalker_spec.jpg',
    interrupt: { name: 'Spear Hand Strike', cd: 15, range: 'Melee', hasKick: true },
    ccDisrupts: ['Leg Sweep (3s AoE Stun)', 'Ring of Peace (Knockback Ring)', 'Paralysis'],
    dispels: { poison: true, disease: true, curse: false, magic: false, soothe: false },
    defensives: ['Touch of Karma (Absorb)', 'Fortifying Brew (20% DR)', 'Dampen Harm'],
    perks: { bloodlust: false, battleRes: false, freedom: true, tremor: false, mindSoothe: false }
  },

  // ================= WARRIOR =================
  {
    id: 'warrior-prot',
    className: 'Warrior',
    specName: 'Protection',
    role: 'Tank',
    color: '#C69E6D',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_warrior_defensivestance.jpg',
    interrupt: { name: 'Pummel', cd: 15, range: 'Melee', hasKick: true },
    ccDisrupts: ['Shockwave (AoE Stun)', 'Storm Bolt (Single Stun)', 'Intimidating Shout (AoE Fear)'],
    dispels: { poison: false, disease: false, curse: false, magic: false, soothe: false },
    defensives: ['Rallying Cry (15% Party HP)', 'Shield Wall (40% DR)', 'Spell Reflection (Magic Reflect)', 'Last Stand (30% HP)'],
    perks: { bloodlust: false, battleRes: false, freedom: false, tremor: false, mindSoothe: false }
  },
  {
    id: 'warrior-arms',
    className: 'Warrior',
    specName: 'Arms',
    role: 'Melee DPS',
    color: '#C69E6D',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_warrior_savageblow.jpg',
    interrupt: { name: 'Pummel', cd: 15, range: 'Melee', hasKick: true },
    ccDisrupts: ['Shockwave (AoE Stun)', 'Storm Bolt (Single Stun)', 'Intimidating Shout (Fear)'],
    dispels: { poison: false, disease: false, curse: false, magic: false, soothe: false },
    defensives: ['Rallying Cry (15% Party HP)', 'Die by the Sword (100% Parrying)', 'Spell Reflection'],
    perks: { bloodlust: false, battleRes: false, freedom: false, tremor: false, mindSoothe: false }
  },
  {
    id: 'warrior-fury',
    className: 'Warrior',
    specName: 'Fury',
    role: 'Melee DPS',
    color: '#C69E6D',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_warrior_innerrage.jpg',
    interrupt: { name: 'Pummel', cd: 15, range: 'Melee', hasKick: true },
    ccDisrupts: ['Shockwave (AoE Stun)', 'Storm Bolt (Single Stun)', 'Intimidating Shout (Fear)'],
    dispels: { poison: false, disease: false, curse: false, magic: false, soothe: false },
    defensives: ['Rallying Cry (15% Party HP)', 'Enraged Regeneration (30% DR + Heal)', 'Spell Reflection'],
    perks: { bloodlust: false, battleRes: false, freedom: false, tremor: false, mindSoothe: false }
  },

  // ================= MAGE =================
  {
    id: 'mage-arcane',
    className: 'Mage',
    specName: 'Arcane',
    role: 'Ranged DPS',
    color: '#3FC7EB',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_magicalsentry.jpg',
    interrupt: { name: 'Counterspell', cd: 24, range: '40yd', hasKick: true },
    ccDisrupts: ['Supernova (Knockup)', 'Dragon\'s Breath (Disorient)', 'Frost Nova (AoE Root)'],
    dispels: { poison: false, disease: false, curse: true, magic: false, soothe: true, spellsteal: true },
    defensives: ['Greater Invisibility (60% DR)', 'Ice Block (Full Immunity)', 'Mirror Image (20% DR)'],
    perks: { bloodlust: true, battleRes: false, freedom: false, tremor: false, mindSoothe: false }
  },
  {
    id: 'mage-fire',
    className: 'Mage',
    specName: 'Fire',
    role: 'Ranged DPS',
    color: '#3FC7EB',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_fire_firebolt02.jpg',
    interrupt: { name: 'Counterspell', cd: 24, range: '40yd', hasKick: true },
    ccDisrupts: ['Dragon\'s Breath (Disorient)', 'Blast Wave (Knockback)', 'Supernova (Knockup)'],
    dispels: { poison: false, disease: false, curse: true, magic: false, soothe: true, spellsteal: true },
    defensives: ['Blazing Barrier', 'Ice Block (Full Immunity)', 'Mirror Image (20% DR)'],
    perks: { bloodlust: true, battleRes: false, freedom: false, tremor: false, mindSoothe: false }
  },
  {
    id: 'mage-frost',
    className: 'Mage',
    specName: 'Frost',
    role: 'Ranged DPS',
    color: '#3FC7EB',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostbolt02.jpg',
    interrupt: { name: 'Counterspell', cd: 24, range: '40yd', hasKick: true },
    ccDisrupts: ['Supernova (Knockup)', 'Dragon\'s Breath (Disorient)', 'Frost Nova (AoE Root)'],
    dispels: { poison: false, disease: false, curse: true, magic: false, soothe: true, spellsteal: true },
    defensives: ['Ice Block (Full Immunity)', 'Ice Cold (70% DR Immunity)', 'Mirror Image (20% DR)'],
    perks: { bloodlust: true, battleRes: false, freedom: false, tremor: false, mindSoothe: false }
  },

  // ================= HUNTER =================
  {
    id: 'hunter-bm',
    className: 'Hunter',
    specName: 'Beast Mastery',
    role: 'Ranged DPS',
    color: '#AAD372',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_hunter_bestialdiscipline.jpg',
    interrupt: { name: 'Counter Shot', cd: 24, range: '40yd', hasKick: true },
    ccDisrupts: ['Intimidation (5s Pet Stun)', 'Binding Shot (AoE Stun)', 'Scatter Shot (Disorient)'],
    dispels: { poison: false, disease: false, curse: false, magic: false, soothe: true, tranqShot: true },
    defensives: ['Aspect of the Turtle (Immunity)', 'Survival of the Fittest (20% DR)', 'Exhilaration (Self Heal)'],
    perks: { bloodlust: true, battleRes: false, freedom: true, tremor: false, mindSoothe: false }
  },
  {
    id: 'hunter-mm',
    className: 'Hunter',
    specName: 'Marksmanship',
    role: 'Ranged DPS',
    color: '#AAD372',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_marksmanship.jpg',
    interrupt: { name: 'Counter Shot', cd: 24, range: '40yd', hasKick: true },
    ccDisrupts: ['Intimidation (5s Pet Stun)', 'Binding Shot (AoE Stun)', 'Bursting Shot (Knockback)'],
    dispels: { poison: false, disease: false, curse: false, magic: false, soothe: true, tranqShot: true },
    defensives: ['Aspect of the Turtle (Immunity)', 'Survival of the Fittest (20% DR)', 'Exhilaration'],
    perks: { bloodlust: true, battleRes: false, freedom: true, tremor: false, mindSoothe: false }
  },
  {
    id: 'hunter-survival',
    className: 'Hunter',
    specName: 'Survival',
    role: 'Melee DPS',
    color: '#AAD372',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_hunter_camouflage.jpg',
    interrupt: { name: 'Muzzle', cd: 15, range: 'Melee', hasKick: true },
    ccDisrupts: ['Intimidation (5s Pet Stun)', 'Binding Shot (AoE Stun)', 'Steel Trap'],
    dispels: { poison: false, disease: false, curse: false, magic: false, soothe: true, tranqShot: true },
    defensives: ['Aspect of the Turtle (Immunity)', 'Survival of the Fittest (20% DR)', 'Exhilaration'],
    perks: { bloodlust: true, battleRes: false, freedom: true, tremor: false, mindSoothe: false }
  },

  // ================= ROGUE =================
  {
    id: 'rogue-assassination',
    className: 'Rogue',
    specName: 'Assassination',
    role: 'Melee DPS',
    color: '#FFF569',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_rogue_deadlybrew.jpg',
    interrupt: { name: 'Kick', cd: 15, range: 'Melee', hasKick: true },
    ccDisrupts: ['Kidney Shot (6s Stun)', 'Cheap Shot (4s Stun)', 'Gouge (Incapacitate)', 'Blind (Disorient)'],
    dispels: { poison: false, disease: false, curse: false, magic: false, soothe: true, shivSoothe: true },
    defensives: ['Cloak of Shadows (Magic Immunity)', 'Evasion (100% Dodge)', 'Feint (40% AoE DR)'],
    perks: { bloodlust: false, battleRes: false, freedom: false, tremor: false, mindSoothe: false }
  },
  {
    id: 'rogue-outlaw',
    className: 'Rogue',
    specName: 'Outlaw',
    role: 'Melee DPS',
    color: '#FFF569',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_rogue_waylay.jpg',
    interrupt: { name: 'Kick', cd: 15, range: 'Melee', hasKick: true },
    ccDisrupts: ['Kidney Shot (6s Stun)', 'Cheap Shot (4s Stun)', 'Gouge (Incapacitate)', 'Blind (Disorient)'],
    dispels: { poison: false, disease: false, curse: false, magic: false, soothe: true, shivSoothe: true },
    defensives: ['Cloak of Shadows (Magic Immunity)', 'Evasion (100% Dodge)', 'Feint (40% AoE DR)'],
    perks: { bloodlust: false, battleRes: false, freedom: false, tremor: false, mindSoothe: false }
  },
  {
    id: 'rogue-subtlety',
    className: 'Rogue',
    specName: 'Subtlety',
    role: 'Melee DPS',
    color: '#FFF569',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_stealth.jpg',
    interrupt: { name: 'Kick', cd: 15, range: 'Melee', hasKick: true },
    ccDisrupts: ['Kidney Shot (6s Stun)', 'Cheap Shot (4s Stun)', 'Gouge (Incapacitate)', 'Blind (Disorient)'],
    dispels: { poison: false, disease: false, curse: false, magic: false, soothe: true, shivSoothe: true },
    defensives: ['Cloak of Shadows (Magic Immunity)', 'Evasion (100% Dodge)', 'Feint (40% AoE DR)'],
    perks: { bloodlust: false, battleRes: false, freedom: false, tremor: false, mindSoothe: false }
  },

  // ================= WARLOCK =================
  {
    id: 'warlock-affliction',
    className: 'Warlock',
    specName: 'Affliction',
    role: 'Ranged DPS',
    color: '#8788EE',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_deathcoil.jpg',
    interrupt: { name: 'Spell Lock (Felhunter)', cd: 24, range: '40yd', hasKick: true },
    ccDisrupts: ['Shadowfury (3s AoE Stun)', 'Mortal Coil (Horrify Heal)', 'Howl of Terror (AoE Fear)'],
    dispels: { poison: false, disease: false, curse: false, magic: true, soothe: false, singeMagic: true },
    defensives: ['Unending Resolve (40% DR + Silence Immune)', 'Soul Link (10% DR)', 'Demonic Gateway (Party Mobility)'],
    perks: { bloodlust: false, battleRes: true, freedom: false, tremor: false, mindSoothe: false }
  },
  {
    id: 'warlock-demo',
    className: 'Warlock',
    specName: 'Demonology',
    role: 'Ranged DPS',
    color: '#8788EE',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_demoness.jpg',
    interrupt: { name: 'Spell Lock (Felhunter)', cd: 24, range: '40yd', hasKick: true },
    ccDisrupts: ['Shadowfury (3s AoE Stun)', 'Axe Toss (4s Pet Stun)', 'Mortal Coil (Horrify)'],
    dispels: { poison: false, disease: false, curse: false, magic: true, soothe: false, singeMagic: true },
    defensives: ['Unending Resolve (40% DR + Silence Immune)', 'Soul Link (10% DR)', 'Demonic Gateway (Party Mobility)'],
    perks: { bloodlust: false, battleRes: true, freedom: false, tremor: false, mindSoothe: false }
  },
  {
    id: 'warlock-destro',
    className: 'Warlock',
    specName: 'Destruction',
    role: 'Ranged DPS',
    color: '#8788EE',
    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_rainoffire.jpg',
    interrupt: { name: 'Spell Lock (Felhunter)', cd: 24, range: '40yd', hasKick: true },
    ccDisrupts: ['Shadowfury (3s AoE Stun)', 'Infernal Drop (Stun)', 'Mortal Coil (Horrify)'],
    dispels: { poison: false, disease: false, curse: false, magic: true, soothe: false, singeMagic: true },
    defensives: ['Unending Resolve (40% DR + Silence Immune)', 'Soul Link (10% DR)', 'Demonic Gateway'],
    perks: { bloodlust: false, battleRes: true, freedom: false, tremor: false, mindSoothe: false }
  }
];
