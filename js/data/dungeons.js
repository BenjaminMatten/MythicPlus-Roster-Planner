/**
 * World of Warcraft: Midnight Season 2 Mythic+ Dungeon Database
 * Expanded & Comprehensive mob roster for all 8 Mythic+ dungeons.
 */

window.SEASON_2_DUNGEONS = [
  {
    id: 'altar-of-fangs',
    name: 'Altar of Fangs',
    shortName: 'Fangs',
    expansion: 'Midnight (Patch 12.1)',
    zone: 'Coiled Isle',
    badge: 'NEW DUNGEON',
    backgroundUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
    accentColor: '#10b981',
    description: 'An ancient temple hidden on the Coiled Isle where shadow-venom cultists summon primordial serpent spirits.',
    keyMechanics: ['Poison Dispels', 'Kick Rotation', 'Enrage Soothe', 'High Physical Frontals'],
    mobs: [
      {
        id: 'high-priestess-vespera',
        name: 'High Priestess Vespera',
        type: 'Boss',
        role: 'Boss 1 - Venom Priestess',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_corrosivebreath.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'fang-venom-bolt',
            name: 'Venomous Bolt',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_poisonbolt.jpg',
            castType: 'interruptible_cast',
            target: 'Random Player',
            castTime: '2.0s',
            frequency: 'Every 8s',
            mitigationType: 'Kick Required',
            damageType: 'Nature',
            description: 'Deals 2.4M Nature damage and applies a stack of Corrosive Venom.',
            strategy: 'Assign a strict kick rotation. If cast completes, healer must dispel immediately.'
          },
          {
            id: 'viper-spit-nova',
            name: 'Serpent Toxic Nova',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_acid_spray.jpg',
            castType: 'magic_aoe',
            target: 'All Players',
            castTime: '3.0s',
            frequency: 'Every 35s',
            mitigationType: 'Party Defensive CD',
            damageType: 'Nature',
            description: 'Pulses heavy Nature AoE damage across the party every 1s for 6s.',
            strategy: 'Rotate party mitigation CDs (Anti-Magic Zone, Darkness, Zephyr, Revival).'
          },
          {
            id: 'fang-crush',
            name: 'Fang Crush',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_druid_disembowel.jpg',
            castType: 'tank_buster',
            target: 'Active Tank',
            castTime: 'Instant',
            frequency: 'Every 15s',
            mitigationType: 'Personal Defensive',
            damageType: 'Physical',
            description: 'Hits tank for 4.8M Physical damage and reduces armor by 50% for 10s.',
            strategy: 'Tank must use active mitigation CD before impact.'
          }
        ]
      },
      {
        id: 'serpent-guardian-kaazin',
        name: 'Guardian Kaa\'zin',
        type: 'Boss',
        role: 'Boss 2 - Slithering Behemoth',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_poisonsting.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'acidic-breath',
            name: 'Acidic Serpent Breath',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_acid_spray.jpg',
            castType: 'frontal',
            target: 'Frontal Cone',
            castTime: '2.5s',
            frequency: 'Every 20s',
            mitigationType: 'Sidestep',
            damageType: 'Nature Acid',
            description: 'Breathes a corrosive stream of acid dealing 3.8M damage and spawning acid pools.',
            strategy: 'Tank turn boss away from party. All players sidestep out of green cone.'
          },
          {
            id: 'slithering-whirlwind',
            name: 'Coiled Blade Tempest',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_warrior_whirlwind.jpg',
            castType: 'magic_aoe',
            target: 'Group Wide',
            castTime: 'Channeled',
            frequency: 'Every 40s',
            mitigationType: 'Party Defensive CD',
            damageType: 'Physical / Nature',
            description: 'Spins rapidly across the arena pulling players toward the center.',
            strategy: 'Run outward against pull force. Healers use group CDs.'
          }
        ]
      },
      {
        id: 'avatar-ulatek',
        name: 'Shadow-Venom Avatar Ula\'tek',
        type: 'Boss',
        role: 'Final Boss - Serpent God',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowbolts.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'void-venom-wave',
            name: 'Void Venom Wave',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowfiend.jpg',
            castType: 'magic_aoe',
            target: 'Group Wide',
            castTime: '3.0s',
            frequency: 'Every 30s',
            mitigationType: 'Party Defensive CD',
            damageType: 'Shadow Nature',
            description: 'Erupts waves of dark venom corrupting all players with ticking shadow damage.',
            strategy: 'Use major group defensives (AMZ, Spirit Link, Revival, Darkness).'
          },
          {
            id: 'soul-siphon-fang',
            name: 'Soul Siphon Bite',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_rogue_shadowdance.jpg',
            castType: 'tank_buster',
            target: 'Tank',
            castTime: 'Instant',
            frequency: 'Every 18s',
            mitigationType: 'Personal Defensive',
            damageType: 'Shadow Physical',
            description: 'Bites the tank dealing 5.4M combined Shadow/Physical damage.',
            strategy: 'Tank active mitigation CD required per cast.'
          }
        ]
      },
      {
        id: 'coiled-viper-guard',
        name: 'Coiled Viper-Guard',
        type: 'Elite Trash',
        role: 'Trash Defender',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_backstab.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'neurotoxin-strike',
            name: 'Neurotoxin Strike',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_nullifypoison.jpg',
            castType: 'poison_debuff',
            target: 'Random Melee',
            castTime: 'Instant',
            frequency: 'Every 12s',
            mitigationType: 'Poison Dispel',
            damageType: 'Nature',
            description: 'Applies a lethal Poison debuff that stuns target after 6 seconds.',
            strategy: 'Requires Poison Dispel (Paladin, Druid, Evoker, Monk) before stun triggers.'
          },
          {
            id: 'tail-sweep',
            name: 'Shattering Tail Sweep',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_backstab.jpg',
            castType: 'frontal',
            target: 'Frontal Cone',
            castTime: '1.5s',
            frequency: 'Every 10s',
            mitigationType: 'Sidestep',
            damageType: 'Physical',
            description: 'Knocks back all players in a 180-degree frontal cone dealing heavy damage.',
            strategy: 'Tank faces mob away from group; DPS stay behind.'
          }
        ]
      },
      {
        id: 'venom-speaker-kaelen',
        name: 'Venom Speaker Kaelen',
        type: 'Elite Trash',
        role: 'Trash Caster Mini-boss',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_naturetouchdecay.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'frenzy-venom',
            name: 'Blood-Venom Frenzy',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_druid_enrage.jpg',
            castType: 'enrage',
            target: 'Self Buff',
            castTime: 'Instant',
            frequency: 'At 30% HP',
            mitigationType: 'Purge / Soothe',
            damageType: 'Physical',
            description: 'Enrages, increasing attack speed by 100% and damage done by 50%.',
            strategy: 'Rogue Shiv / Hunter Tranquilizing Shot / Druid Soothe immediately.'
          },
          {
            id: 'corrosive-bolt-kaelen',
            name: 'Corrosive Bolt Volley',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_corrosivebreath.jpg',
            castType: 'interruptible_cast',
            target: 'Random Player',
            castTime: '2.0s',
            frequency: 'Every 6s',
            mitigationType: 'Kick Required',
            damageType: 'Nature',
            description: 'Spams bolts dealing 1.6M Nature damage to random players.',
            strategy: 'Interrupt on cooldown.'
          }
        ]
      },
      {
        id: 'fang-venom-mage',
        name: 'Fang Venom-Mage',
        type: 'Elite Trash',
        role: 'Trash Caster',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_poisonbolt.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'toxic-volley',
            name: 'Toxic Rain Volley',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_acid_spray.jpg',
            castType: 'interruptible_cast',
            target: 'Group Wide',
            castTime: '2.5s',
            frequency: 'Every 14s',
            mitigationType: 'Kick Required',
            damageType: 'Nature',
            description: 'Launches acid rain striking all party members for heavy damage.',
            strategy: 'HIGH PRIORITY KICK!'
          }
        ]
      },
      {
        id: 'shadow-venom-ritualist',
        name: 'Shadow-Venom Ritualist',
        type: 'Elite Trash',
        role: 'Trash Summoner',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_curseofofcost.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'dark-curse-fang',
            name: 'Curse of Sapping Void',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_curseofachimon.jpg',
            castType: 'curse_debuff',
            target: 'Random Player',
            castTime: '2.0s',
            frequency: 'Every 16s',
            mitigationType: 'Curse Dispel',
            damageType: 'Shadow Curse',
            description: 'Reduces primary stat by 35% and deals shadow damage over 12s.',
            strategy: 'Curse Dispel (Mage, Druid, Shaman) mandatory.'
          }
        ]
      },
      {
        id: 'pit-fang-stalker',
        name: 'Pit Fang Stalker',
        type: 'Elite Trash',
        role: 'Trash Assassin',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_stealth.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'garrote-pounce',
            name: 'Venomous Garrote',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_rogue_garrote.jpg',
            castType: 'bleed',
            target: 'Random Healer/DPS',
            castTime: 'Instant',
            frequency: 'Every 15s',
            mitigationType: 'Bleed Clear / Defensive',
            damageType: 'Physical Bleed',
            description: 'Pounces from stealth applying a massive 15s bleed.',
            strategy: 'Use Stoneform, BoP, or personal defensives.'
          }
        ]
      }
    ]
  },

  {
    id: 'murder-row',
    name: 'Murder Row',
    shortName: 'Murder',
    expansion: 'Midnight',
    zone: 'Silvermoon City',
    badge: 'SEASON 2 ROTATION',
    backgroundUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1920&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=800&q=80',
    accentColor: '#ef4444',
    description: 'The seediest underbelly of Silvermoon City where Void-influenced Sin\'dorei rogues and shadow mages plot assassinations.',
    keyMechanics: ['Bleed Clears', 'Curse Dispels', 'Stun Interruption', 'Shadow AoE Defensives'],
    mobs: [
      {
        id: 'lord-assassin-valen',
        name: 'Shadowlord Tyrakus',
        type: 'Boss',
        role: 'Boss 1 - Assassin Guildmaster',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_rogue_shadowdance.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'shadow-ambush',
            name: 'Garrote Ambush',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_rogue_garrote.jpg',
            castType: 'bleed',
            target: 'Random Healer/DPS',
            castTime: 'Instant',
            frequency: 'Every 20s',
            mitigationType: 'Bleed Clear / Defensive',
            damageType: 'Physical Bleed',
            description: 'Strikes from stealth, inflicting a 15-second ticking Bleed dealing 600k damage per sec.',
            strategy: 'Use Dwarf Stoneform, Paladin BoP, or Evoker Cauterizing Flame to clear.'
          },
          {
            id: 'void-blade-whirl',
            name: 'Void Shadow Flurry',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_rogue_whirlingblades.jpg',
            castType: 'magic_aoe',
            target: 'Group Wide',
            castTime: '4.0s',
            frequency: 'Every 40s',
            mitigationType: 'Party Defensive CD',
            damageType: 'Shadow',
            description: 'Creates a shadow vortex inflicting massive Shadow damage to all players.',
            strategy: 'Drop AMZ, Darkness, or Personals before channel finishes.'
          }
        ]
      },
      {
        id: 'baroness-sunshadow',
        name: 'Baroness Sunshadow',
        type: 'Boss',
        role: 'Boss 2 - Void Sorceress',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowwordpain.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'curse-mind-control',
            name: 'Curse of Siphon Mind',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_charm.jpg',
            castType: 'curse_debuff',
            target: 'Random Player',
            castTime: '2.0s',
            frequency: 'Every 25s',
            mitigationType: 'Curse Dispel',
            damageType: 'Shadow Curse',
            description: 'Inflicts shadow damage and mind controls target if not dispelled within 5s.',
            strategy: 'DISPEL CURSE IMMEDIATELY!'
          }
        ]
      },
      {
        id: 'master-assassin-vaelen',
        name: 'Master Assassin Vaelen',
        type: 'Boss',
        role: 'Final Boss - Shadow Master',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_rogue_ambush.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'deadly-fan-of-knives',
            name: 'Deadly Poison Flurry',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_rogue_fanofknives.jpg',
            castType: 'magic_aoe',
            target: 'Group Wide',
            castTime: '3.0s',
            frequency: 'Every 30s',
            mitigationType: 'Party Defensive CD',
            damageType: 'Physical Poison',
            description: 'Throws poison blades striking all targets.',
            strategy: 'Use party defensives.'
          }
        ]
      },
      {
        id: 'row-shadow-caster',
        name: 'Murder Row Shadow-Weaver',
        type: 'Elite Trash',
        role: 'Trash Caster',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowbolt.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'curse-of-decay',
            name: 'Curse of Agonizing Void',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_curseofofcost.jpg',
            castType: 'curse_debuff',
            target: 'Random Player',
            castTime: '1.5s',
            frequency: 'Every 14s',
            mitigationType: 'Curse Dispel',
            damageType: 'Shadow Curse',
            description: 'Curse reducing target damage done by 40% and dealing scaling shadow damage.',
            strategy: 'Curse Dispel (Mage, Druid, Shaman) must remove within 4s.'
          },
          {
            id: 'dark-repression',
            name: 'Channeled Dark Mind',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowfiend.jpg',
            castType: 'channeled_stun',
            target: 'Random Player',
            castTime: 'Channeled',
            frequency: 'Every 18s',
            mitigationType: 'Stun / CC',
            damageType: 'Shadow',
            description: 'Locks target in dark mental stasis, disabling all actions while dealing damage.',
            strategy: 'Hard stun or knockback the caster to disrupt channel.'
          }
        ]
      },
      {
        id: 'blood-elven-cutthroat',
        name: 'Blood-Elven Cutthroat',
        type: 'Elite Trash',
        role: 'Trash Rogue',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_cheapshot.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'crippling-poison-slash',
            name: 'Crippling Blade Strike',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_poisonsting.jpg',
            castType: 'poison_debuff',
            target: 'Active Tank / Melee',
            castTime: 'Instant',
            frequency: 'Every 10s',
            mitigationType: 'Poison Dispel',
            damageType: 'Physical Poison',
            description: 'Reduces movement and attack speed by 60%.',
            strategy: 'Poison dispel.'
          }
        ]
      }
    ]
  },

  {
    id: 'den-of-nalorakk',
    name: 'Den of Nalorakk',
    shortName: 'Nalorakk',
    expansion: 'Midnight',
    zone: 'Zul\'Aman',
    badge: 'SEASON 2 ROTATION',
    backgroundUrl: 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?auto=format&fit=crop&w=1920&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&w=800&q=80',
    accentColor: '#f59e0b',
    description: 'The sacred bear grounds of Zul\'Aman where primal Amani bear gods and witch doctors invoke ancestral rage.',
    keyMechanics: ['Disease Dispels', 'Enrage Soothe', 'Heavy Physical Tank Busters', 'Interrupts'],
    mobs: [
      {
        id: 'avatar-nalorakk',
        name: 'Primal Avatar of Nalorakk',
        type: 'Boss',
        role: 'Boss 1 - Bear God',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_druid_maul.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'bear-maul-rend',
            name: 'Deafening Bear Maul',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_druid_ravage.jpg',
            castType: 'tank_buster',
            target: 'Tank',
            castTime: 'Instant',
            frequency: 'Every 12s',
            mitigationType: 'Personal Defensive',
            damageType: 'Physical Bleed',
            description: 'Slashes tank for 5.2M Physical damage and inflicts a massive stacking bleed.',
            strategy: 'Tank active mitigation required. Swap CDs per maul.'
          },
          {
            id: 'deafening-roar',
            name: 'Deafening Primal Roar',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_druid_demoralizingroar.jpg',
            castType: 'magic_aoe',
            target: 'Group Wide',
            castTime: '2.5s',
            frequency: 'Every 30s',
            mitigationType: 'Party Defensive CD',
            damageType: 'Physical',
            description: 'Silences all spellcasters for 4s and deals heavy Physical group damage.',
            strategy: 'Pre-cast group shields or defensive CDs before roar cast completes.'
          }
        ]
      },
      {
        id: 'high-priest-zulmar',
        name: 'High Priest Zul\'Mar',
        type: 'Boss',
        role: 'Boss 2 - Voodoo Master',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_polymorph.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'hex-party-volley',
            name: 'Voodoo Hex Volley',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_polymorph_cow.jpg',
            castType: 'interruptible_cast',
            target: 'Group Wide',
            castTime: '2.5s',
            frequency: 'Every 20s',
            mitigationType: 'Kick Required',
            damageType: 'Nature Magic',
            description: 'Transforms 2 random players into frogs for 6 seconds.',
            strategy: 'MUST KICK!'
          }
        ]
      },
      {
        id: 'amani-hex-doctor',
        name: 'Amani Hex-Doctor',
        type: 'Elite Trash',
        role: 'Trash Caster',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_polymorph.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'amani-rot-curse',
            name: 'Putrid Plague Cloud',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_nullifydisease.jpg',
            castType: 'disease_debuff',
            target: 'Random Player',
            castTime: '2.0s',
            frequency: 'Every 16s',
            mitigationType: 'Disease Dispel',
            damageType: 'Nature Disease',
            description: 'Spreads a contagious disease dealing Nature damage and reducing haste by 30%.',
            strategy: 'Disease Dispel (Priest, Paladin, Monk) needed immediately.'
          },
          {
            id: 'hex-frog',
            name: 'Hex of the Frog',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_polymorph_cow.jpg',
            castType: 'interruptible_cast',
            target: 'Random Player',
            castTime: '2.5s',
            frequency: 'Every 10s',
            mitigationType: 'Kick Required',
            damageType: 'Nature Magic',
            description: 'Transforms target into a harmless frog for 8s, disabling combat abilities.',
            strategy: 'MANDATORY Kick priority!'
          }
        ]
      },
      {
        id: 'amani-bear-berserker',
        name: 'Amani Bear Berserker',
        type: 'Elite Trash',
        role: 'Trash Melee Enrager',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_druid_enrage.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'frenzied-bear-rage',
            name: 'Primal Bear Rage',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_druid_enrage.jpg',
            castType: 'enrage',
            target: 'Self Buff',
            castTime: 'Instant',
            frequency: 'At 50% HP',
            mitigationType: 'Purge / Soothe',
            damageType: 'Physical',
            description: 'Gains 75% increased physical damage.',
            strategy: 'Soothe or kite.'
          }
        ]
      }
    ]
  },

  {
    id: 'the-blinding-vale',
    name: 'The Blinding Vale',
    shortName: 'Vale',
    expansion: 'Midnight',
    zone: 'Quel\'Thalas',
    badge: 'SEASON 2 ROTATION',
    backgroundUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
    accentColor: '#3b82f6',
    description: 'A radiant sun-glen infused with blinding Light power where wild eagle guardians and sun-bow archers hunt invaders.',
    keyMechanics: ['Purge Magic Buffs', 'Frontal Dodges', 'Blind Clears / Immunities', 'Movement Slow Clears'],
    mobs: [
      {
        id: 'solar-eagle-matriarch',
        name: 'Sunwing Matriarch Aurelia',
        type: 'Boss',
        role: 'Boss 1 - Celestial Eagle',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_hunter_eagleeye.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'blinding-sun-flare',
            name: 'Blinding Sun Burst',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_holybolt.jpg',
            castType: 'magic_aoe',
            target: 'Group Wide',
            castTime: '3.0s',
            frequency: 'Every 30s',
            mitigationType: 'Personal Immunity',
            damageType: 'Holy Radiant',
            description: 'Emits a blinding radiant burst. Players facing the boss are disoriented for 5s.',
            strategy: 'Turn character 180 degrees away before cast finishes!'
          },
          {
            id: 'solar-gale-gust',
            name: 'Solar Gale Tempest',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_cyclone.jpg',
            castType: 'ground_aoe',
            target: 'Ground Location',
            castTime: 'Instant',
            frequency: 'Every 22s',
            mitigationType: 'Freedom',
            damageType: 'Holy Nature',
            description: 'Creates whirlwind vortices that push players into golden fire zones.',
            strategy: 'Use Blessing of Freedom, Tiger\'s Lust, or Gust of Wind to reposition.'
          }
        ]
      },
      {
        id: 'sun-priest-solon',
        name: 'Sun-High Priest Solon',
        type: 'Boss',
        role: 'Boss 2 - Radiant Lord',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_searinglight.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'radiant-light-beam',
            name: 'Solar Beam Flare',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_holysmite.jpg',
            castType: 'magic_aoe',
            target: 'Group Wide',
            castTime: '2.5s',
            frequency: 'Every 25s',
            mitigationType: 'Party Defensive CD',
            damageType: 'Holy Radiant',
            description: 'Burns the ground dealing heavy radiant damage.',
            strategy: 'Pre-cast group defensives.'
          }
        ]
      },
      {
        id: 'radiant-sun-keeper',
        name: 'Blinded Sun-Keeper',
        type: 'Elite Trash',
        role: 'Trash Defender',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_divinespirit.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'radiant-shield-buff',
            name: 'Radiant Aegis Shield',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_powerwordshield.jpg',
            castType: 'interruptible_cast',
            target: 'Self/Ally',
            castTime: '2.0s',
            frequency: 'Every 15s',
            mitigationType: 'Purge / Soothe',
            damageType: 'Holy',
            description: 'Shields nearby mob absorbing 15M damage and dealing radiant holy damage.',
            strategy: 'Purge magic buff immediately (Shaman Purge, Priest Dispel, Mage Spellsteal, DH Consume Magic).'
          }
        ]
      }
    ]
  },

  {
    id: 'voidscar-arena',
    name: 'Voidscar Arena',
    shortName: 'Voidscar',
    expansion: 'Midnight',
    zone: 'Void Scar',
    badge: 'SEASON 2 ROTATION',
    backgroundUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    accentColor: '#a855f7',
    description: 'A cosmic void arena where dark gladiators pit shadow energy against mortal challengers.',
    keyMechanics: ['Mass Dispel', 'Shadow Defensives', 'Kick Chains', 'Knockback Avoidance'],
    mobs: [
      {
        id: 'champion-xarvoc',
        name: 'Gladiator Xar\'voc',
        type: 'Boss',
        role: 'Boss 1 - Arena Champion',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_mindflay.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'void-rift-explosion',
            name: 'Void Rift Collapse',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowwordpain.jpg',
            castType: 'magic_aoe',
            target: 'Group Wide',
            castTime: '3.5s',
            frequency: 'Every 45s',
            mitigationType: 'Party Defensive CD',
            damageType: 'Shadow Void',
            description: 'Detonates cosmic void rifts dealing 3.5M Void damage to all players.',
            strategy: 'Stack inside Death Knight AMZ or Evoker Zephyr; healer active cooldowns required.'
          },
          {
            id: 'shadow-soul-drain',
            name: 'Soul Siphon Beam',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_haunt.jpg',
            castType: 'channeled_stun',
            target: 'Random DPS',
            castTime: 'Channeled',
            frequency: 'Every 25s',
            mitigationType: 'Personal Immunity',
            damageType: 'Shadow',
            description: 'Drains target\'s soul, healing the boss for 300% of damage inflicted.',
            strategy: 'Use Mage Ice Block, Paladin Divine Shield, Hunter Turtle, or stun the boss.'
          }
        ]
      },
      {
        id: 'pit-master-vrax',
        name: 'Cosmic Pit Master Vrax',
        type: 'Boss',
        role: 'Boss 2 - Void Behemoth',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_unholyfrenzy.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'fel-void-slam',
            name: 'Nether-Void Slam',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_warrior_groundtremor.jpg',
            castType: 'tank_buster',
            target: 'Tank',
            castTime: 'Instant',
            frequency: 'Every 15s',
            mitigationType: 'Personal Defensive',
            damageType: 'Shadow Physical',
            description: 'Slams the tank for 5.0M damage.',
            strategy: 'Tank defensives.'
          }
        ]
      },
      {
        id: 'arena-void-caller',
        name: 'Voidscar Nether-Caller',
        type: 'Elite Trash',
        role: 'Trash Caster',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowfiend.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'entropy-bolt',
            name: 'Entropy Void Bolt',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowbolt.jpg',
            castType: 'interruptible_cast',
            target: 'Random Player',
            castTime: '1.8s',
            frequency: 'Every 6s',
            mitigationType: 'Kick Required',
            damageType: 'Shadow',
            description: 'Spam cast dealing 1.8M Shadow damage.',
            strategy: 'Assign quick 12s/15s kicks (Melee kicks priority).'
          }
        ]
      }
    ]
  },

  {
    id: 'kings-rest',
    name: 'Kings\' Rest',
    shortName: 'KR',
    expansion: 'Battle for Azeroth Classic',
    zone: 'Zuldazar',
    badge: 'LEGACY CLASSIC',
    backgroundUrl: 'https://images.unsplash.com/photo-1544084944-15269ec7b5a0?auto=format&fit=crop&w=1920&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    accentColor: '#eab308',
    description: 'The ancient tomb of Zandalari kings. Famed for brutal shadow curses, mummy minions, spit gold mechanics, and tight halls.',
    keyMechanics: ['Curse Dispel', 'Poison Dispel', 'Bleed Clears', 'Entomb Breakout Stuns'],
    mobs: [
      {
        id: 'the-golden-serpent',
        name: 'The Golden Serpent',
        type: 'Boss',
        role: 'Boss 1 - Serpent Guardian',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_coin_01.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'spit-gold',
            name: 'Spit Gold Debuff',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_coin_02.jpg',
            castType: 'magic_aoe',
            target: 'Random Player',
            castTime: 'Instant',
            frequency: 'Every 25s',
            mitigationType: 'Personal Immunity',
            damageType: 'Physical Gold',
            description: 'Applies ticking gold debuff that leaves molten gold pools under the target.',
            strategy: 'Kite gold pools to room edge or use Immunities (Divine Shield, Ice Block, Turtle).'
          }
        ]
      },
      {
        id: 'mzymdi-kula',
        name: 'Kula the Butcher',
        type: 'Boss',
        role: 'Boss 2 - Zandalari Butcher',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_warrior_savageblow.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'severing-axe',
            name: 'Severing Axe Bleed',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_warrior_cleave.jpg',
            castType: 'bleed',
            target: 'Random Player',
            castTime: 'Instant',
            frequency: 'Every 18s',
            mitigationType: 'Bleed Clear / Defensive',
            damageType: 'Physical Bleed',
            description: 'Throws axe inflicting permanent ticking bleed until healed above 90% or dispelled.',
            strategy: 'Use Stoneform, BoP, Cauterizing Flame, or target focus heal.'
          }
        ]
      },
      {
        id: 'king-dazar',
        name: 'King Dazar',
        type: 'Boss',
        role: 'Final Boss - First King',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_helmet_zandalari.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'blade-combo-dazar',
            name: 'Blade Combo',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_meleestrike.jpg',
            castType: 'tank_buster',
            target: 'Tank',
            castTime: 'Instant',
            frequency: 'Every 20s',
            mitigationType: 'Personal Defensive',
            damageType: 'Physical',
            description: 'Strikes the tank 4 times rapidly for lethal Physical damage.',
            strategy: 'Tank major defensive CD (Shield Wall, Ardent Defender, Survival Instincts) mandatory.'
          },
          {
            id: 'gale-slash-dazar',
            name: 'Gale Slash Tornadoes',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_druid_gale.jpg',
            castType: 'ground_aoe',
            target: 'Ground Location',
            castTime: '2.0s',
            frequency: 'Every 25s',
            mitigationType: 'Sidestep',
            damageType: 'Physical',
            description: 'Spawns wandering tornadoes that knock back and deal damage.',
            strategy: 'Kite boss away from existing tornado paths.'
          }
        ]
      },
      {
        id: 'shadow-born-witch-doctor',
        name: 'Shadow-Borne Witch Doctor',
        type: 'Elite Trash',
        role: 'Trash Caster',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowdisease.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'shadow-curse-kr',
            name: 'Curse of Horror',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_curseofachimon.jpg',
            castType: 'curse_debuff',
            target: 'Random Player',
            castTime: '2.0s',
            frequency: 'Every 15s',
            mitigationType: 'Curse Dispel',
            damageType: 'Shadow Curse',
            description: 'Fears the target for 6s and deals heavy ticking shadow damage.',
            strategy: 'Dispel Curse immediately or use Tremor Totem / Will of the Forsaken.'
          }
        ]
      },
      {
        id: 'kings-guard-mummy',
        name: 'King\'s Guard Mummy',
        type: 'Elite Trash',
        role: 'Trash Enrager',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_bandage_01.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'mummy-entomb',
            name: 'Sarcophagus Entomb',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_box_01.jpg',
            castType: 'channeled_stun',
            target: 'Random Player',
            castTime: 'Instant',
            frequency: 'Every 30s',
            mitigationType: 'Stun / CC',
            damageType: 'Physical Shadow',
            description: 'Traps a player in a tomb until destroyed by party.',
            strategy: 'DPS switch focus to Sarcophagus immediately.'
          }
        ]
      }
    ]
  },

  {
    id: 'temple-of-sethraliss',
    name: 'Temple of Sethraliss',
    shortName: 'ToS',
    expansion: 'Battle for Azeroth Classic',
    zone: 'Vol\'dun',
    badge: 'LEGACY CLASSIC',
    backgroundUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1920&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    accentColor: '#06b6d4',
    description: 'The sacred serpent temple in Vol\'dun. Infamous for lightning orb obstacle courses, venomous neurotoxins, and healing avatar mechanics.',
    keyMechanics: ['Poison Dispel', 'Kick Rotation', 'Lightning AoE Defensives', 'Stun Disrupts'],
    mobs: [
      {
        id: 'adderis-aspix',
        name: 'Adderis & Aspix',
        type: 'Boss',
        role: 'Boss 1 - Lightning Serpents',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'lightning-shield-aspix',
            name: 'Lightning Shield Feedback',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightningshield.jpg',
            castType: 'magic_aoe',
            target: 'Attacker',
            castTime: 'Instant',
            frequency: 'Phase Switch',
            mitigationType: 'Purge / Soothe',
            damageType: 'Nature Lightning',
            description: 'Reflects 100% of damage taken back as deadly Nature lightning AoE to the group.',
            strategy: 'STOP ATTACKING the boss shielded with Lightning Shield!'
          },
          {
            id: 'static-shock-nova',
            name: 'Static Shock Nova',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_staticshock.jpg',
            castType: 'magic_aoe',
            target: 'Group Wide',
            castTime: '2.5s',
            frequency: 'Every 20s',
            mitigationType: 'Party Defensive CD',
            damageType: 'Nature Lightning',
            description: 'Emits lightning waves striking all players.',
            strategy: 'Spread 8 yards apart; drop group defensives.'
          }
        ]
      },
      {
        id: 'merektha',
        name: 'Merektha',
        type: 'Boss',
        role: 'Boss 2 - Sand Matriarch',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_nullifypoison.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'merektha-venom-spit',
            name: 'Neurotoxin Pool Spit',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_acid_spray.jpg',
            castType: 'poison_debuff',
            target: 'Random Players',
            castTime: 'Instant',
            frequency: 'Every 15s',
            mitigationType: 'Poison Dispel',
            damageType: 'Nature Poison',
            description: 'Spits venom debuff that roots and stuns players if not dispelled.',
            strategy: 'Poison dispel or movement free.'
          }
        ]
      },
      {
        id: 'galvazzt',
        name: 'Galvazzt',
        type: 'Boss',
        role: 'Boss 3 - Elemental Elemental',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_wispheal.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'capacitor-pulse',
            name: 'Galvanic Coils Pulse',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
            castType: 'magic_aoe',
            target: 'Group Wide',
            castTime: '3.0s',
            frequency: '100 Energy',
            mitigationType: 'Party Defensive CD',
            damageType: 'Nature Lightning',
            description: 'Discharges 100 energy dealing party-wiping damage if coils were not soaked.',
            strategy: 'Players rotate standing in lightning pillar beams.'
          }
        ]
      },
      {
        id: 'sethraliss-hooded-fang',
        name: 'Faithless Tender',
        type: 'Elite Trash',
        role: 'Trash Healer',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_healingtouch.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'greater-healing-ward',
            name: 'Embrace of Sethraliss',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_rejuvenation.jpg',
            castType: 'interruptible_cast',
            target: 'Ally Mob',
            castTime: '2.0s',
            frequency: 'Every 10s',
            mitigationType: 'Kick Required',
            damageType: 'Nature Healing',
            description: 'Heals target mob for 25% of maximum health.',
            strategy: 'PRIORITY KICK! Must not be allowed to cast.'
          }
        ]
      }
    ]
  },

  {
    id: 'ruby-life-pools',
    name: 'Ruby Life Pools',
    shortName: 'RLP',
    expansion: 'Dragonflight Classic',
    zone: 'The Waking Shores',
    badge: 'LEGACY CLASSIC',
    backgroundUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
    accentColor: '#ec4899',
    description: 'The red dragonflight nesting sanctuary. Heavy fire damage, lightning gale gusts, interrupts, and intense dragonfire overlaps.',
    keyMechanics: ['Kick Rotation', 'Fire Defensives', 'Bleed Clears', 'Dispel Magic Debuffs'],
    mobs: [
      {
        id: 'melidrussa-chillworn',
        name: 'Melidrussa Chillworn',
        type: 'Boss',
        role: 'Boss 1 - Primalist General',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_icestorm.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'chillstorm-burst',
            name: 'Hailstorm Chillstorm',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_glacier.jpg',
            castType: 'magic_aoe',
            target: 'Group Wide',
            castTime: '3.0s',
            frequency: 'Every 30s',
            mitigationType: 'Party Defensive CD',
            damageType: 'Frost',
            description: 'Creates a pulling frost storm dealing heavy Frost damage and spawning add whelps.',
            strategy: 'Run against pull; healer group CDs.'
          }
        ]
      },
      {
        id: 'kokiia-blazehoof',
        name: 'Kokiia Blazehoof',
        type: 'Boss',
        role: 'Boss 2 - Blaze Commander',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_fire_fireball02.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'blazebound-inferno-call',
            name: 'Blazebound Inferno Summon',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_fire_elementaldevastation.jpg',
            castType: 'tank_buster',
            target: 'Ground / Tank',
            castTime: 'Instant',
            frequency: 'Every 35s',
            mitigationType: 'Personal Defensive',
            damageType: 'Fire',
            description: 'Throws a boulder creating a fire add that pulses AoE.',
            strategy: 'DPS burst add immediately.'
          }
        ]
      },
      {
        id: 'kyrakka-erkhart',
        name: 'Kyrakka & Erkhart Stormvein',
        type: 'Boss',
        role: 'Final Boss - Dragon Duo',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_dragon_red.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'flame-spit-kyrakka',
            name: 'Flameshaper Spit',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_fire_flamebolt.jpg',
            castType: 'magic_aoe',
            target: 'Random Player',
            castTime: 'Instant',
            frequency: 'Every 15s',
            mitigationType: 'Party Defensive CD',
            damageType: 'Fire',
            description: 'Leaves a burning fire pool under players that expands when stepped on.',
            strategy: 'Drop fire pools cleanly along the outer perimeter.'
          },
          {
            id: 'winds-of-stormvein',
            name: 'Roaring Gale Wind',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_earthbind.jpg',
            castType: 'ground_aoe',
            target: 'Group Wide',
            castTime: 'Channeled',
            frequency: 'Every 30s',
            mitigationType: 'Freedom',
            damageType: 'Nature Fire',
            description: 'Pushes all players violently while spreading fire pools.',
            strategy: 'Use movement speed abilities (Stampeding Roar, Wind Rush Totem) to counter pushback.'
          }
        ]
      },
      {
        id: 'primalist-flamespeaker',
        name: 'Primalist Cinderweaver',
        type: 'Elite Trash',
        role: 'Trash Caster',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_fire_fireball02.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
        abilities: [
          {
            id: 'cinderbolt-spam',
            name: 'Cinderbolt',
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_fire_flamebolt.jpg',
            castType: 'interruptible_cast',
            target: 'Random Player',
            castTime: '1.5s',
            frequency: 'Every 5s',
            mitigationType: 'Kick Required',
            damageType: 'Fire',
            description: 'Fast cast dealing heavy Fire damage.',
            strategy: 'Assign interrupt order.'
          }
        ]
      }
    ]
  }
];
