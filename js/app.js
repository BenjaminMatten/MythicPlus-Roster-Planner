/**
 * World of Warcraft: Midnight Season 2 Mythic+ Application
 * Main Application Orchestrator
 */

window.App = class App {
  constructor() {
    this.dungeons = window.SEASON_2_DUNGEONS || [];
    this.currentDungeon = this.dungeons[0];
    
    // Components
    this.dungeonView = new window.DungeonView('dungeon-view-container');
    this.rosterView = new window.RosterView('roster-container', (specs) => this.onRosterUpdated(specs));
    this.mitigationMatrix = new window.MitigationMatrix('solver-container');

    this.initUI();
  }

  initUI() {
    this.renderDungeonTabs();
    if (this.currentDungeon) {
      this.selectDungeon(this.currentDungeon.id);
    }
    this.setupEventListeners();
  }

  renderDungeonTabs() {
    const nav = document.getElementById('dungeon-tabs');
    if (!nav) return;

    nav.innerHTML = this.dungeons.map(d => `
      <div class="dungeon-tab-card ${d.id === (this.currentDungeon ? this.currentDungeon.id : '') ? 'active' : ''}" 
           data-dungeon-id="${d.id}" 
           style="background-image: url('${d.bannerUrl}');">
        <div class="dungeon-tab-title">${d.name}</div>
        <div class="dungeon-tab-badge">${d.expansion} • ${d.mobs.length} Mobs</div>
      </div>
    `).join('');

    // Attach click handlers
    const cards = nav.querySelectorAll('.dungeon-tab-card');
    cards.forEach(card => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const dId = card.getAttribute('data-dungeon-id');
        this.selectDungeon(dId);
      });
    });
  }

  selectDungeon(dungeonId) {
    const dungeon = this.dungeons.find(d => d.id === dungeonId);
    if (!dungeon) return;

    this.currentDungeon = dungeon;

    // Update active tab styling
    document.querySelectorAll('.dungeon-tab-card').forEach(card => {
      if (card.getAttribute('data-dungeon-id') === dungeonId) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });

    // Update background wallpaper transition
    const bgOverlay = document.getElementById('app-background-overlay');
    if (bgOverlay) {
      bgOverlay.style.backgroundImage = `url('${dungeon.backgroundUrl}')`;
    }

    // Render dungeon view & evaluate matrix
    this.dungeonView.setDungeon(dungeon);
    this.mitigationMatrix.evaluate(dungeon, this.rosterView.getRosterSpecs());
  }

  onRosterUpdated(specs) {
    this.mitigationMatrix.evaluate(this.currentDungeon, specs);
  }

  setupEventListeners() {
    // Search input
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.dungeonView.setSearchQuery(e.target.value);
      });
    }

    // Filter chips
    const filterChips = document.querySelectorAll('.filter-chip');
    filterChips.forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.preventDefault();
        filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const filter = chip.getAttribute('data-filter');
        this.dungeonView.setFilter(filter);
      });
    });

    // View mode switchers
    const btnSplit = document.getElementById('btn-view-split');
    const btnDungeon = document.getElementById('btn-view-dungeon');
    const btnRoster = document.getElementById('btn-view-roster');
    const mainLayout = document.getElementById('main-layout');
    const explorerSec = document.getElementById('explorer-section');
    const rosterSec = document.getElementById('roster-section');

    const setView = (mode) => {
      [btnSplit, btnDungeon, btnRoster].forEach(b => b && b.classList.remove('active'));
      if (mode === 'split') {
        if (btnSplit) btnSplit.classList.add('active');
        if (mainLayout) mainLayout.style.gridTemplateColumns = '1fr 420px';
        if (explorerSec) explorerSec.style.display = 'block';
        if (rosterSec) { rosterSec.style.display = 'flex'; rosterSec.style.maxWidth = 'none'; }
      } else if (mode === 'dungeon') {
        if (btnDungeon) btnDungeon.classList.add('active');
        if (mainLayout) mainLayout.style.gridTemplateColumns = '1fr';
        if (explorerSec) explorerSec.style.display = 'block';
        if (rosterSec) rosterSec.style.display = 'none';
      } else if (mode === 'roster') {
        if (btnRoster) btnRoster.classList.add('active');
        if (mainLayout) mainLayout.style.gridTemplateColumns = '1fr';
        if (explorerSec) explorerSec.style.display = 'none';
        if (rosterSec) {
          rosterSec.style.display = 'flex';
          rosterSec.style.maxWidth = '800px';
          rosterSec.style.margin = '0 auto';
        }
      }
    };

    if (btnSplit) btnSplit.addEventListener('click', (e) => { e.preventDefault(); setView('split'); });
    if (btnDungeon) btnDungeon.addEventListener('click', (e) => { e.preventDefault(); setView('dungeon'); });
    if (btnRoster) btnRoster.addEventListener('click', (e) => { e.preventDefault(); setView('roster'); });
  }
};

// Initialize Application on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  window.appInstance = new window.App();
});
