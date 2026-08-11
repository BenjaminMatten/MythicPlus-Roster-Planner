/**
 * Roster & Mitigation Solver Sidebar Component
 * Renders player utility pills as interactive Wowhead links with mouseover tooltips.
 */

window.RosterView = class RosterView {
  constructor(containerId, onRosterChanged) {
    this.container = document.getElementById(containerId);
    this.onRosterChanged = onRosterChanged;
    
    // Default Mythic+ Party Composition
    this.roster = [
      { slotId: 'tank', label: 'Tank Slot', role: 'Tank', selectedSpecId: 'paladin-prot' },
      { slotId: 'healer', label: 'Healer Slot', role: 'Healer', selectedSpecId: 'druid-resto' },
      { slotId: 'dps1', label: 'DPS Slot 1', role: 'DPS', selectedSpecId: 'evoker-augmentation' },
      { slotId: 'dps2', label: 'DPS Slot 2', role: 'DPS', selectedSpecId: 'dh-havoc' },
      { slotId: 'dps3', label: 'DPS Slot 3', role: 'DPS', selectedSpecId: 'shaman-elemental' }
    ];

    this.render();
  }

  getRosterSpecs() {
    const classes = window.WOW_CLASSES || [];
    return this.roster.map(slot => {
      return classes.find(c => c.id === slot.selectedSpecId) || classes[0];
    });
  }

  updateSlotSpec(slotIndex, newSpecId) {
    this.roster[slotIndex].selectedSpecId = newSpecId;
    this.render();
    if (this.onRosterChanged) {
      this.onRosterChanged(this.getRosterSpecs());
    }
  }

  render() {
    if (!this.container) return;

    const classes = window.WOW_CLASSES || [];

    let html = `
      <div class="glass-card" style="padding: 1.25rem;">
        <div class="roster-header" style="margin-bottom: 1rem;">
          <div>
            <div class="roster-title">⚔️ Mythic+ Roster Builder</div>
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.1rem;">Configure your 5-man party composition</div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
    `;

    this.roster.forEach((slot, index) => {
      const currentSpec = classes.find(c => c.id === slot.selectedSpecId) || classes[0];
      const roleBadgeClass = slot.role === 'Tank' ? 'role-tank' : (slot.role === 'Healer' ? 'role-healer' : 'role-dps');

      // Filter classes valid for slot role
      const validSpecs = classes.filter(c => {
        if (slot.role === 'Tank') return c.role === 'Tank';
        if (slot.role === 'Healer') return c.role === 'Healer';
        return c.role === 'Melee DPS' || c.role === 'Ranged DPS';
      });

      const kickLabel = currentSpec.interrupt.hasKick ? `🗡️ Kick: ${currentSpec.interrupt.name} (${currentSpec.interrupt.cd}s)` : '❌ No Lockout Kick';
      const kickColor = currentSpec.interrupt.hasKick ? '#f87171' : '#94a3b8';

      html += `
        <div class="party-slot-card" style="border-left: 3px solid ${currentSpec.color};">
          <div class="slot-top">
            <span class="slot-role-badge ${roleBadgeClass}">${slot.role}</span>
            <select class="spec-select" data-slot-index="${index}">
              ${validSpecs.map(c => `
                <option value="${c.id}" ${c.id === slot.selectedSpecId ? 'selected' : ''}>
                  ${c.className} - ${c.specName} (${c.interrupt.hasKick ? c.interrupt.cd + 's kick' : 'No Kick'})
                </option>
              `).join('')}
            </select>
          </div>

          <div class="player-utility-tags">
            <span class="utility-pill" style="color: ${kickColor}; border-color: rgba(255,255,255,0.15);">
              ${kickLabel}
            </span>
            ${currentSpec.ccDisrupts && currentSpec.ccDisrupts.length > 0 ? `
              <span class="utility-pill" style="color: #c084fc; border-color: rgba(168, 85, 247, 0.3);">
                🌀 CC: ${currentSpec.ccDisrupts[0]}
              </span>
            ` : ''}
            ${currentSpec.dispels.poison ? '<a href="https://www.wowhead.com/spell=527" target="_blank" data-wowhead="spell=527" class="utility-pill wowhead-link" style="color: #34d399;">🧪 Poison</a>' : ''}
            ${currentSpec.dispels.curse ? '<a href="https://www.wowhead.com/spell=2782" target="_blank" data-wowhead="spell=2782" class="utility-pill wowhead-link" style="color: #c084fc;">🔮 Curse</a>' : ''}
            ${currentSpec.dispels.disease ? '<a href="https://www.wowhead.com/spell=213644" target="_blank" data-wowhead="spell=213644" class="utility-pill wowhead-link" style="color: #fbbf24;">☣️ Disease</a>' : ''}
            ${currentSpec.dispels.magic ? '<a href="https://www.wowhead.com/spell=527" target="_blank" data-wowhead="spell=527" class="utility-pill wowhead-link" style="color: #60a5fa;">✨ Magic</a>' : ''}
            ${currentSpec.dispels.soothe || currentSpec.dispels.purgeMagic ? '<a href="https://www.wowhead.com/spell=2908" target="_blank" data-wowhead="spell=2908" class="utility-pill wowhead-link" style="color: #f472b6;">⚡ Purge/Soothe</a>' : ''}
            ${currentSpec.perks.bloodlust ? '<a href="https://www.wowhead.com/spell=2825" target="_blank" data-wowhead="spell=2825" class="utility-pill wowhead-link" style="color: #ef4444;">🩸 Bloodlust</a>' : ''}
            ${currentSpec.perks.battleRes ? '<a href="https://www.wowhead.com/spell=20484" target="_blank" data-wowhead="spell=20484" class="utility-pill wowhead-link" style="color: #eab308;">✝️ BRes</a>' : ''}
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    this.container.innerHTML = html;

    // Attach event listeners to spec selects
    const selects = this.container.querySelectorAll('.spec-select');
    selects.forEach(select => {
      select.addEventListener('change', (e) => {
        const slotIdx = parseInt(e.target.getAttribute('data-slot-index'));
        this.updateSlotSpec(slotIdx, e.target.value);
      });
    });

    // Refresh Wowhead tooltips engine on DOM updates
    if (window.$WowheadPower && typeof window.$WowheadPower.refreshLinks === 'function') {
      window.$WowheadPower.refreshLinks();
    }
  }
};
