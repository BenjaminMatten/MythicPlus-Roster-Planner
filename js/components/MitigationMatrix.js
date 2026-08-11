/**
 * Mitigation Matrix & Safety Solver Component
 */

window.MitigationMatrix = class MitigationMatrix {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  evaluate(dungeon, rosterSpecs) {
    if (!dungeon || !rosterSpecs || !this.container) return;

    // Collect all dungeon mitigation requirements
    const allAbilities = dungeon.mobs.flatMap(m => m.abilities);
    const requiresKick = allAbilities.some(a => a.castType === 'interruptible_cast');
    const requiresPoison = allAbilities.some(a => a.castType === 'poison_debuff');
    const requiresCurse = allAbilities.some(a => a.castType === 'curse_debuff');
    const requiresDisease = allAbilities.some(a => a.castType === 'disease_debuff');
    const requiresSoothe = allAbilities.some(a => a.castType === 'enrage');
    const requiresMagicAoE = allAbilities.some(a => a.castType === 'magic_aoe');
    const requiresFreedom = allAbilities.some(a => a.mitigationType === 'Freedom');

    // Party Capability Checks
    const totalShortKicks = rosterSpecs.filter(s => s.interrupt.cd <= 15).length;
    const totalKicks = rosterSpecs.filter(s => s.interrupt.cd > 0).length;

    const hasPoison = rosterSpecs.some(s => s.dispels.poison || s.dispels.cauterizingFlame);
    const hasCurse = rosterSpecs.some(s => s.dispels.curse || s.dispels.cauterizingFlame);
    const hasDisease = rosterSpecs.some(s => s.dispels.disease || s.dispels.cauterizingFlame);
    const hasSoothe = rosterSpecs.some(s => s.dispels.soothe || s.dispels.purgeMagic || s.dispels.tranqShot);
    const hasBloodlust = rosterSpecs.some(s => s.perks.bloodlust);
    const hasBattleRes = rosterSpecs.some(s => s.perks.battleRes);
    const hasGroupDR = rosterSpecs.some(s => s.defensives.some(d => d.includes('Party') || d.includes('AMZ') || d.includes('Darkness') || d.includes('Zephyr') || d.includes('Spirit Link')));

    // Score Calculation
    let scorePoints = 100;
    const checks = [];

    // 1. Kick check
    if (requiresKick) {
      if (totalShortKicks >= 3) {
        checks.push({ label: 'Interrupt Rotation', status: 'GREEN', text: `${totalShortKicks} Short Kicks (Strong Rotation)` });
      } else if (totalKicks >= 3) {
        checks.push({ label: 'Interrupt Rotation', status: 'AMBER', text: `${totalKicks} Total Kicks (Longer Cooldowns)` });
        scorePoints -= 10;
      } else {
        checks.push({ label: 'Interrupt Rotation', status: 'RED', text: `Only ${totalKicks} Kicks! Vulnerable to spell spam!` });
        scorePoints -= 25;
      }
    }

    // 2. Poison Dispel
    if (requiresPoison) {
      if (hasPoison) {
        checks.push({ label: 'Poison Dispel', status: 'GREEN', text: 'Covered by Roster' });
      } else {
        checks.push({ label: 'Poison Dispel', status: 'RED', text: 'MISSING! Deadly poison debuffs will trigger!' });
        scorePoints -= 20;
      }
    }

    // 3. Curse Dispel
    if (requiresCurse) {
      if (hasCurse) {
        checks.push({ label: 'Curse Dispel', status: 'GREEN', text: 'Covered by Roster' });
      } else {
        checks.push({ label: 'Curse Dispel', status: 'RED', text: 'MISSING! Mandatory curses in dungeon!' });
        scorePoints -= 20;
      }
    }

    // 4. Disease Dispel
    if (requiresDisease) {
      if (hasDisease) {
        checks.push({ label: 'Disease Dispel', status: 'GREEN', text: 'Covered by Roster' });
      } else {
        checks.push({ label: 'Disease Dispel', status: 'RED', text: 'MISSING! Contagious diseases present!' });
        scorePoints -= 20;
      }
    }

    // 5. Enrage Soothe
    if (requiresSoothe) {
      if (hasSoothe) {
        checks.push({ label: 'Enrage Purge / Soothe', status: 'GREEN', text: 'Covered by Roster' });
      } else {
        checks.push({ label: 'Enrage Purge / Soothe', status: 'AMBER', text: 'MISSING! Mobs will remain enraged!' });
        scorePoints -= 15;
      }
    }

    // 6. Group Defensive CD
    if (requiresMagicAoE) {
      if (hasGroupDR) {
        checks.push({ label: 'Party Defensive CDs', status: 'GREEN', text: 'Group DRs available for heavy AoE' });
      } else {
        checks.push({ label: 'Party Defensive CDs', status: 'AMBER', text: 'No AMZ/Darkness/Zephyr! Relying on personal DRs' });
        scorePoints -= 10;
      }
    }

    // 7. Lust & BRes
    if (!hasBloodlust) {
      checks.push({ label: 'Bloodlust / Heroism', status: 'AMBER', text: 'No innate Lust (Need Drums)' });
      scorePoints -= 5;
    } else {
      checks.push({ label: 'Bloodlust / Heroism', status: 'GREEN', text: 'Active in party' });
    }

    if (!hasBattleRes) {
      checks.push({ label: 'Battle Reanimation', status: 'AMBER', text: 'No BRes (Need Engineering)' });
      scorePoints -= 5;
    } else {
      checks.push({ label: 'Battle Reanimation', status: 'GREEN', text: 'Active in party' });
    }

    scorePoints = Math.max(10, Math.min(100, scorePoints));

    let scoreClass = 'score-perfect';
    let scoreTitle = 'OPTIMAL MITIGATION';
    if (scorePoints < 80) { scoreClass = 'score-good'; scoreTitle = 'PARTIAL COVERAGE'; }
    if (scorePoints < 60) { scoreClass = 'score-warning'; scoreTitle = 'HAZARD WARNING!'; }

    let html = `
      <div class="solver-card glass-card" style="margin-top: 1rem;">
        <div class="solver-score-row">
          <div>
            <div style="font-size: 0.75rem; color: var(--text-dim); font-weight: 700; text-transform: uppercase;">
              ${dungeon.name} Synergy
            </div>
            <div style="font-size: 1.1rem; font-weight: 800; color: #ffffff;">${scoreTitle}</div>
          </div>
          <div class="solver-score-badge ${scoreClass}">${scorePoints}%</div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.5rem;">
          ${checks.map(c => `
            <div class="check-item">
              <div class="check-label">
                <span>${c.status === 'GREEN' ? '✅' : (c.status === 'AMBER' ? '⚠️' : '🚨')}</span>
                <span>${c.label}</span>
              </div>
              <span class="status-badge status-${c.status.toLowerCase()}">${c.text}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    this.container.innerHTML = html;
  }
};
