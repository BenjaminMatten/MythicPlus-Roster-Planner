/**
 * Dungeon Mob & Ability Explorer Component
 * Renders left-adjusted Method.gg guide link, animated video thumbnail preview card,
 * interactive dungeon parchment map gallery viewer with multi-floor support,
 * and dynamically calculates mob & boss health scaled by the selected Mythic+ Key Level (+2 to +15+).
 */

window.DungeonView = class DungeonView {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.activeFilter = 'all';
    this.searchQuery = '';
    this.currentDungeon = null;
    this.keyLevel = 8;
    this.affix = 'none';
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

  setKeyLevel(keyLevelOption) {
    if (typeof keyLevelOption === 'string') {
      if (keyLevelOption.includes('tyrannical')) {
        this.keyLevel = 10;
        this.affix = 'tyrannical';
      } else if (keyLevelOption.includes('fortified')) {
        this.keyLevel = 10;
        this.affix = 'fortified';
      } else {
        this.keyLevel = parseInt(keyLevelOption, 10) || 8;
        this.affix = 'none';
      }
    } else {
      this.keyLevel = keyLevelOption || 8;
      this.affix = 'none';
    }
    this.render();
  }

  calculateMobHp(mob) {
    const baseHp = mob.baseHp || (mob.type === 'Boss' ? 52000000 : 12000000);
    const isBoss = mob.type === 'Boss';
    
    // Mythic+ Key Level scaling formula: (1.085)^(keyLevel - 2)
    let scale = Math.pow(1.085, this.keyLevel - 2);
    
    if (isBoss && this.affix === 'tyrannical') {
      scale *= 1.30;
    } else if (!isBoss && this.affix === 'fortified') {
      scale *= 1.20;
    }

    const finalHp = Math.round(baseHp * scale);
    
    if (finalHp >= 1_000_000_000) {
      return `${(finalHp / 1_000_000_000).toFixed(2)}B`;
    } else if (finalHp >= 1_000_000) {
      return `${(finalHp / 1_000_000).toFixed(1)}M`;
    } else if (finalHp >= 1_000) {
      return `${(finalHp / 1_000).toFixed(0)}k`;
    }
    return `${finalHp}`;
  }

  render() {
    if (!this.currentDungeon || !this.container) return;

    const { name, expansion, zone, description, keyMechanics, mobs, accentColor, methodUrl, youtubeId, bgImage, maps } = this.currentDungeon;

    // Filter Mobs (Bosses Only, Trash Only, or All)
    const filteredMobs = mobs.filter(mob => {
      if (this.activeFilter === 'bosses') return mob.type === 'Boss';
      if (this.activeFilter === 'trash') return mob.type === 'Trash';
      return true;
    }).map(mob => {
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

    const bannerBgStyle = bgImage ? `background: linear-gradient(90deg, rgba(13,18,31,0.92) 0%, rgba(13,18,31,0.75) 60%, rgba(13,18,31,0.4) 100%), url('${bgImage}'); background-size: cover; background-position: center;` : '';

    let html = `
      <div class="dungeon-banner glass-card" style="padding: 1.25rem; margin-bottom: 1.25rem; border-left: 4px solid ${accentColor}; ${bannerBgStyle}">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1.25rem;">
          <div style="flex: 1; min-width: 300px;">
            <div style="font-size: 0.75rem; color: ${accentColor}; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.2rem;">
              ${expansion} • ${zone}
            </div>
            <h2 style="font-size: 1.8rem; font-weight: 800; color: #ffffff;">${name}</h2>
            <p style="font-size: 0.85rem; color: var(--text-muted); max-width: 750px; margin-top: 0.3rem;">${description}</p>
            
            <!-- Left-Adjusted Action Bar with Method Guide Link, Animated Video Thumbnail Card, & Dungeon Map Viewer Button -->
            <div class="banner-action-bar" style="display: flex; gap: 0.85rem; margin-top: 0.85rem; flex-wrap: wrap; align-items: center;">
              ${methodUrl ? `
                <a href="${methodUrl}" target="_blank" rel="noopener noreferrer" class="method-guide-btn" title="View official Method.gg dungeon guide">
                  📖 Method.gg Dungeon Guide ↗
                </a>
              ` : ''}

              ${maps && maps.length > 0 ? `
                <button id="btn-toggle-map" class="map-guide-btn" title="Click to view dungeon parchment map">
                  🗺️ Dungeon Map (${maps.length})
                </button>
              ` : ''}
              
              ${youtubeId ? `
                <button id="btn-toggle-video" class="video-thumbnail-card" data-youtube-id="${youtubeId}" title="Click to expand embedded YouTube video preview">
                  <div class="video-thumbnail-wrapper">
                    <img src="https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg" alt="${name} Video Guide Preview" class="video-thumbnail-img" />
                    <div class="video-play-overlay">
                      <div class="video-play-icon">
                        ▶
                        <div class="video-pulse-ring"></div>
                      </div>
                      <span class="video-play-text">Video Strategy Guide</span>
                    </div>
                  </div>
                </button>
              ` : ''}
            </div>
          </div>
          
          <div style="display: flex; gap: 0.4rem; flex-wrap: wrap; align-items: center; justify-content: flex-end;">
            ${keyMechanics.map(m => `<span class="season-tag" style="background: rgba(255,255,255,0.05); color: #e2e8f0; border-color: rgba(255,255,255,0.15);">${m}</span>`).join('')}
          </div>
        </div>

        <!-- Embedded Dungeon Parchment Map Viewer Frame -->
        <div id="map-preview-container" class="map-preview-box" style="display: none; margin-top: 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
            <span style="font-size: 0.85rem; font-weight: 700; color: #ffffff;">🗺️ ${name} - Official In-Game Dungeon Map</span>
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <div id="map-floor-selector" style="display: flex; gap: 0.35rem;">
                ${maps && maps.length > 1 ? maps.map((m, idx) => `
                  <button class="map-floor-btn ${idx === 0 ? 'active' : ''}" data-map-index="${idx}">${m.name}</button>
                `).join('') : ''}
              </div>
              <button id="btn-close-map" style="background: transparent; border: none; color: var(--text-muted); font-size: 1.1rem; cursor: pointer;">✕</button>
            </div>
          </div>

          <div class="map-image-wrapper glass-card" style="padding: 0.5rem; text-align: center; background: rgba(7, 9, 14, 0.95); border: 1px solid rgba(245, 158, 11, 0.4);">
            <img id="map-display-img" src="${maps && maps[0] ? maps[0].url : ''}" alt="${name} Map" style="max-width: 100%; max-height: 550px; border-radius: 6px; box-shadow: 0 8px 24px rgba(0,0,0,0.8); object-fit: contain;" />
            <div id="map-caption" style="font-size: 0.8rem; color: #f59e0b; margin-top: 0.5rem; font-weight: 700;">
              ${maps && maps[0] ? maps[0].name : ''}
            </div>
          </div>
        </div>

        <!-- Embedded YouTube Video Strategy Guide Preview Frame -->
        <div id="video-preview-container" class="video-preview-box" style="display: none; margin-top: 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
            <span style="font-size: 0.85rem; font-weight: 700; color: #ffffff;">🎬 ${name} - Video Strategy Guide</span>
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <a id="video-direct-link" href="https://www.youtube.com/watch?v=${youtubeId || 'cgM-EioPF0g'}" target="_blank" rel="noopener noreferrer" style="font-size: 0.75rem; color: #a855f7; font-weight: 700; text-decoration: none; background: rgba(168,85,247,0.15); padding: 0.2rem 0.6rem; border-radius: 4px; border: 1px solid rgba(168,85,247,0.4);">
                Open on YouTube ↗
              </a>
              <button id="btn-close-video" style="background: transparent; border: none; color: var(--text-muted); font-size: 1.1rem; cursor: pointer;">✕</button>
            </div>
          </div>
          <div class="video-embed-wrapper">
            <iframe id="video-iframe" src="" title="${name} Video Guide" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>

      <div class="mobs-container">
    `;

    if (filteredMobs.length === 0) {
      html += `
        <div class="glass-card" style="padding: 3rem; text-align: center; color: var(--text-muted);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔍</div>
          <h3 style="color: #ffffff;">No mobs or abilities match your filter criteria</h3>
          <p style="font-size: 0.85rem; margin-top: 0.3rem;">Try switching filter tabs or clearing your search term.</p>
        </div>
      `;
    } else {
      filteredMobs.forEach(mob => {
        const typeClass = mob.type === 'Boss' ? 'mob-type-boss' : 'mob-type-trash';
        const scaledHpStr = this.calculateMobHp(mob);

        html += `
          <div class="mob-group-card glass-card">
            <div class="mob-header">
              <img src="${mob.icon}" alt="${mob.name}" class="mob-avatar" onerror="this.src='https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg'" />
              <div class="mob-info">
                <div class="mob-name">
                  ${mob.name}
                  <span class="mob-type-tag ${typeClass}">${mob.type}</span>
                  <span class="mob-hp-badge" title="Scaled Health at +${this.keyLevel} Keystone level">
                    ❤️ ${scaledHpStr} HP
                  </span>
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

    // Attach Map Viewer Listeners
    const btnMap = this.container.querySelector('#btn-toggle-map');
    const mapContainer = this.container.querySelector('#map-preview-container');
    const btnCloseMap = this.container.querySelector('#btn-close-map');
    const mapDisplayImg = this.container.querySelector('#map-display-img');
    const mapCaption = this.container.querySelector('#map-caption');
    const floorBtns = this.container.querySelectorAll('.map-floor-btn');

    if (btnMap && mapContainer) {
      btnMap.addEventListener('click', () => {
        const isHidden = mapContainer.style.display === 'none';
        mapContainer.style.display = isHidden ? 'block' : 'none';
      });
    }

    if (btnCloseMap && mapContainer) {
      btnCloseMap.addEventListener('click', () => {
        mapContainer.style.display = 'none';
      });
    }

    if (floorBtns && maps) {
      floorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-map-index'), 10);
          floorBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          if (maps[idx]) {
            mapDisplayImg.src = maps[idx].url;
            mapCaption.textContent = maps[idx].name;
          }
        });
      });
    }

    // Attach YouTube Video Preview Toggle Listeners
    const btnVideo = this.container.querySelector('#btn-toggle-video');
    const videoContainer = this.container.querySelector('#video-preview-container');
    const videoIframe = this.container.querySelector('#video-iframe');
    const directLink = this.container.querySelector('#video-direct-link');
    const btnClose = this.container.querySelector('#btn-close-video');

    if (btnVideo && videoContainer && videoIframe) {
      btnVideo.addEventListener('click', () => {
        const yid = btnVideo.getAttribute('data-youtube-id');
        const isHidden = videoContainer.style.display === 'none';
        if (isHidden) {
          videoIframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
          videoIframe.src = `https://www.youtube.com/embed/${yid}?enablejsapi=1&widget_referrer=https%3A%2F%2Fwww.youtube.com&autoplay=1`;
          if (directLink) directLink.href = `https://www.youtube.com/watch?v=${yid}`;
          videoContainer.style.display = 'block';
        } else {
          videoIframe.src = '';
          videoContainer.style.display = 'none';
        }
      });
    }

    if (btnClose && videoContainer && videoIframe) {
      btnClose.addEventListener('click', () => {
        videoIframe.src = '';
        videoContainer.style.display = 'none';
      });
    }

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
