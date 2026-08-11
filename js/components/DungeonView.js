/**
 * Dungeon Mob & Ability Explorer Component
 * Wraps spell icon images with Wowhead links while keeping ability title text clean.
 */

window.DungeonView = class DungeonView {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.activeFilter = 'all';
    this.searchQuery = '';
    this.currentDungeon = null;
  }

  setDungeon(dungeon) {
    this.currentDungeon = dungeon;
    this.render();
  }

  setFilter(filter) {
    this.activeFilter = filter;
    this.render();
  }

  setSearchQuery(query) {
    this.searchQuery = query.toLowerCase().trim();
    this.render();
  }

  render() {
    if (!this.currentDungeon || !this.container) return;

    const { name, expansion, zone, description, keyMechanics, mobs, accentColor } = this.currentDungeon;

    // Filter Mobs & Abilities
    const filteredMobs = mobs.map(mob => {
      const matchingAbilities = mob.abilities.filter(ability => {
        // Filter chip check
        let matchesFilter = true;
        if (this.activeFilter === 'interrupts') matchesFilter = ability.castType === 'interruptible_cast';
        else if (this.activeFilter === 'ccdisrupts') matchesFilter = ability.castType === 'channeled_stun' || ability.mitigationType === 'Stun / CC';
        else if (this.activeFilter === 'tank') matchesFilter = ability.castType === 'tank_buster';
        else if (this.activeFilter === 'bleeds') matchesFilter = ability.castType === 'bleed';
        else if (this.activeFilter === 'poison') matchesFilter = ability.castType === 'poison_debuff';
        else if (this.activeFilter === 'curse') matchesFilter = ability.castType === 'curse_debuff';
        else if (this.activeFilter === 'disease') matchesFilter = ability.castType === 'disease_debuff';
        else if (this.activeFilter === 'magic') matchesFilter = ability.castType === 'magic_aoe';
        else if (this.activeFilter === 'enrage') matchesFilter = ability.castType === 'enrage';

        // Search query check
        let matchesSearch = true;
        if (this.searchQuery) {
          const q = this.searchQuery;
          matchesSearch = ability.name.toLowerCase().includes(q) ||
                        ability.description.toLowerCase().includes(q) ||
                        ability.strategy.toLowerCase().includes(q) ||
                        mob.name.toLowerCase().includes(q);
        }

        return matchesFilter && matchesSearch;
      });

      return { ...mob, abilities: matchingAbilities };
    }).filter(mob => mob.abilities.length > 0);

    let html = `
      <div class="dungeon-banner glass-card" style="padding: 1.25rem; margin-bottom: 1.25rem; border-left: 4px solid ${accentColor};">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
          <div>
            <div style="font-size: 0.75rem; color: ${accentColor}; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.2rem;">
              ${expansion} • ${zone}
            </div>
            <h2 style="font-size: 1.8rem; font-weight: 800; color: #ffffff;">${name}</h2>
            <p style="font-size: 0.85rem; color: var(--text-muted); max-width: 700px; margin-top: 0.3rem;">${description}</p>
          </div>
          <div style="display: flex; gap: 0.4rem; flex-wrap: wrap; align-items: center;">
            ${keyMechanics.map(m => `<span class="season-tag" style="background: rgba(255,255,255,0.05); color: #e2e8f0; border-color: rgba(255,255,255,0.15);">${m}</span>`).join('')}
          </div>
        </div>
      </div>

      <div class="mobs-container">
    `;

    if (filteredMobs.length === 0) {
      html += `
        <div class="glass-card" style="padding: 3rem; text-align: center; color: var(--text-muted);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔍</div>
          <h3 style="color: #ffffff;">No abilities match your filter criteria</h3>
          <p style="font-size: 0.85rem; margin-top: 0.3rem;">Try switching filter tabs or clearing your search term.</p>
        </div>
      `;
    } else {
      filteredMobs.forEach(mob => {
        const typeClass = mob.type === 'Boss' ? 'mob-type-boss' : 'mob-type-trash';
        html += `
          <div class="mob-group-card glass-card">
            <div class="mob-header">
              <img src="${mob.icon}" alt="${mob.name}" class="mob-avatar" onerror="this.src='https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg'" />
              <div class="mob-info">
                <div class="mob-name">
                  ${mob.name}
                  <span class="mob-type-tag ${typeClass}">${mob.type}</span>
                </div>
                <div style="font-size: 0.75rem; color: var(--text-dim); margin-top: 0.1rem;">${mob.role}</div>
              </div>
            </div>

            <div class="ability-grid">
              ${mob.abilities.map(ability => this.renderAbilityCard(ability)).join('')}
            </div>
          </div>
        `;
      });
    }

    html += `</div>`;
    this.container.innerHTML = html;

    // Refresh Wowhead tooltips engine on DOM updates
    if (window.$WowheadPower && typeof window.$WowheadPower.refreshLinks === 'function') {
      window.$WowheadPower.refreshLinks();
    }
  }

  renderAbilityCard(ability) {
    let tagClass = 'tag-magic';
    let tagLabel = ability.mitigationType;

    if (ability.castType === 'interruptible_cast') {
      tagClass = 'tag-kick';
      tagLabel = '🗡️ Lockout Kick';
    } else if (ability.castType === 'channeled_stun' || ability.mitigationType === 'Stun / CC') {
      tagClass = 'tag-curse';
      tagLabel = '🌀 CC / Stun Disrupt';
    } else if (ability.castType === 'poison_debuff') {
      tagClass = 'tag-poison';
      tagLabel = '🧪 Poison Dispel';
    } else if (ability.castType === 'curse_debuff') {
      tagClass = 'tag-curse';
      tagLabel = '🔮 Curse Dispel';
    } else if (ability.castType === 'disease_debuff') {
      tagClass = 'tag-disease';
      tagLabel = '☣️ Disease Dispel';
    } else if (ability.castType === 'enrage') {
      tagClass = 'tag-soothe';
      tagLabel = '🔥 Purge / Soothe';
    } else if (ability.castType === 'tank_buster') {
      tagClass = 'tag-tank';
      tagLabel = '🛡️ Tank Buster';
    }

    const spellId = ability.spellId || 32000;
    const wowheadUrl = `https://www.wowhead.com/spell=${spellId}`;

    return `
      <div class="ability-card">
        <div class="ability-top-row">
          <!-- Icon Image is sole Wowhead mouseover preview link -->
          <a href="${wowheadUrl}" target="_blank" data-wowhead="spell=${spellId}" class="wowhead-icon-link" title="Hover for Wowhead spell preview">
            <img src="${ability.icon}" alt="${ability.name}" class="ability-icon" onerror="this.src='https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg'" />
          </a>
          <div class="ability-title-box">
            <div class="ability-name">${ability.name}</div>
            <div class="ability-meta">
              <span>⏱ ${ability.castTime}</span>
              <span>• ${ability.frequency}</span>
              <span style="color: #cbd5e1;">• ${ability.damageType}</span>
            </div>
          </div>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.2rem;">
          <span class="mitigation-tag ${tagClass}">${tagLabel}</span>
          <span style="font-size: 0.7rem; color: var(--text-dim);">Target: ${ability.target}</span>
        </div>
        <p class="ability-desc">${ability.description}</p>
        <div class="ability-strategy-box">
          <strong>Strategy:</strong> ${ability.strategy}
        </div>
      </div>
    `;
  }
};
