const STICKER_GROUPS = [
    { prefix: 'FWC', max: 19, name: 'FIFA' },
    { prefix: 'MEX', max: 20, name: 'México' },
    { prefix: 'RAS', max: 20, name: 'Sudáfrica' },
    { prefix: 'KOR', max: 20, name: 'Corea del Sur' },
    { prefix: 'CZE', max: 20, name: 'República Checa' },
    { prefix: 'CAN', max: 20, name: 'Canadá' },
    { prefix: 'BIH', max: 20, name: 'Bosnia y Herzegovina' },
    { prefix: 'QAT', max: 20, name: 'Qatar' },
    { prefix: 'SUI', max: 20, name: 'Suiza' },
    { prefix: 'BRA', max: 20, name: 'Brasil' },
    { prefix: 'MAR', max: 20, name: 'Marruecos' },
    { prefix: 'HAI', max: 20, name: 'Haití' },
    { prefix: 'SCO', max: 20, name: 'Escocia' },
    { prefix: 'USA', max: 20, name: 'Estados Unidos' },
    { prefix: 'PAR', max: 20, name: 'Paraguay' },
    { prefix: 'AUS', max: 20, name: 'Australia' },
    { prefix: 'TUR', max: 20, name: 'Turquía' },
    { prefix: 'GER', max: 20, name: 'Alemania' },
    { prefix: 'CUW', max: 20, name: 'Curazao' },
    { prefix: 'CIV', max: 20, name: 'Costa de Marfil' },
    { prefix: 'ECU', max: 20, name: 'Ecuador' },
    { prefix: 'NED', max: 20, name: 'Países Bajos' },
    { prefix: 'JPN', max: 20, name: 'Japón' },
    { prefix: 'SWE', max: 20, name: 'Suecia' },
    { prefix: 'TUN', max: 20, name: 'Túnez' },
    { prefix: 'BEL', max: 20, name: 'Bélgica' },
    { prefix: 'EGI', max: 20, name: 'Egipto' },
    { prefix: 'IRN', max: 20, name: 'Irán' },
    { prefix: 'NZL', max: 20, name: 'Nueva Zelanda' },
    { prefix: 'ESP', max: 20, name: 'España' },
    { prefix: 'CPV', max: 20, name: 'Cabo Verde' },
    { prefix: 'KSA', max: 20, name: 'Arabia Saudita' },
    { prefix: 'URU', max: 20, name: 'Uruguay' },
    { prefix: 'FRA', max: 20, name: 'Francia' },
    { prefix: 'SEN', max: 20, name: 'Senegal' },
    { prefix: 'IRQ', max: 20, name: 'Iraq' },
    { prefix: 'NOR', max: 20, name: 'Noruega' },
    { prefix: 'ARG', max: 20, name: 'Argentina' },
    { prefix: 'ALG', max: 20, name: 'Argelia' },
    { prefix: 'AUT', max: 20, name: 'Austria' },
    { prefix: 'JOR', max: 20, name: 'Jordania' },
    { prefix: 'POR', max: 20, name: 'Portugal' },
    { prefix: 'COD', max: 20, name: 'R.D. Congo' },
    { prefix: 'UZB', max: 20, name: 'Uzbekistán' },
    { prefix: 'COL', max: 20, name: 'Colombia' },
    { prefix: 'ENG', max: 20, name: 'Inglaterra' },
    { prefix: 'CRO', max: 20, name: 'Croacia', name_en: 'Croatia' },
    { prefix: 'GHA', max: 20, name: 'Ghana', name_en: 'Ghana' },
    { prefix: 'PAN', max: 20, name: 'Panamá', name_en: 'Panama' },
    { prefix: 'CC', max: 14, name: 'Coca Cola', name_en: 'Coca Cola' }
];

const TRANSLATIONS = {
    es: {
        title: "Control de Estampas Del Albúm del Mundial Panini 2026",
        reset: "Reiniciar",
        progress: "Progreso del Álbum",
        total: "Total Álbum",
        obtained: "Obtenidas",
        repeated: "Repetidas",
        missing: "Faltantes",
        register: "Registrar Estampa",
        codeLabel: "Código de Estampa (Ej. MEX 1)",
        codePlaceholder: "Ej. MEX 1",
        addBtn: "Agregar",
        isRep: "Es repetida",
        searchTitle: "Buscar Estampa",
        searchPlaceholder: "Buscar estampa (Ej. FWC 5)...",
        album: "Álbum Completo",
        albumMissing: "Solo Faltantes",
        albumObtained: "Solo Obtenidas",
        albumRepeated: "Solo Repetidas",
        allSections: "Todas las secciones",
        repeatedTitle: "Repetidas",
        noRepeated: "No hay repetidas aún",
        sweetResetTitle: "¿Estás seguro?",
        sweetResetText: "¡Eliminarás todas tus estampas obtenidas y repetidas!",
        sweetResetConfirm: "Sí, reiniciar",
        sweetResetCancel: "Cancelar",
        toastFilter: "Filtro aplicado:",
        toastAddRep: "Agregada a repetidas",
        toastDelAlbum: "Removida del álbum",
        toastReset: "Álbum reiniciado",
        toastDelRep: "Una estampa repetida eliminada",
        invalidCode: "Código Inválido",
        invalidCodeDesc: "Revisa el código (Ej. MEX 1, FWC 5)"
    },
    en: {
        title: "Panini 2026 World Cup Album Sticker Tracker",
        reset: "Reset",
        progress: "Album Progress",
        total: "Total Album",
        obtained: "Obtained",
        repeated: "Repeated",
        missing: "Missing",
        register: "Register Sticker",
        codeLabel: "Sticker Code (E.g. MEX 1)",
        codePlaceholder: "E.g. MEX 1",
        addBtn: "Add",
        isRep: "Is repeated",
        searchTitle: "Search Sticker",
        searchPlaceholder: "Search sticker (E.g. FWC 5)...",
        album: "Full Album",
        albumMissing: "Missing Only",
        albumObtained: "Obtained Only",
        albumRepeated: "Repeated Only",
        allSections: "All sections",
        repeatedTitle: "Repeated",
        noRepeated: "No repeated stickers yet",
        sweetResetTitle: "Are you sure?",
        sweetResetText: "You will delete all your obtained and repeated stickers!",
        sweetResetConfirm: "Yes, reset",
        sweetResetCancel: "Cancel",
        toastFilter: "Filter applied:",
        toastAddRep: "Added to repeated",
        toastDelAlbum: "Removed from album",
        toastReset: "Album reset",
        toastDelRep: "A repeated sticker removed",
        invalidCode: "Invalid Code",
        invalidCodeDesc: "Check the code (E.g. MEX 1, FWC 5)"
    }
};

let currentLang = localStorage.getItem('panini2026_lang') || 'es';

const TOTAL_STICKERS = STICKER_GROUPS.reduce((acc, g) => acc + g.max, 0);

let currentViewMode = 'ALL';
let searchTimeout = null;

let albumData = {
    obtained: [],
    repeated: {} // { "MEX 1": quantity }
};

// DOM Elements
const elements = {
    form: document.getElementById('add-form'),
    inputNumber: document.getElementById('sticker-number'),
    isRepeated: document.getElementById('is-repeated'),
    
    statTotal: document.getElementById('stat-total'),
    statObtained: document.getElementById('stat-obtained'),
    statRepeated: document.getElementById('stat-repeated'),
    statMissing: document.getElementById('stat-missing'),
    
    progressBar: document.getElementById('progress-bar'),
    progressText: document.getElementById('progress-text'),
    
    missingList: document.getElementById('album-list'), // Renamed visually but id kept as album-list
    repeatedList: document.getElementById('repeated-list'),
    badgeMissing: document.getElementById('stat-missing'), // Using the stat badge
    badgeRepeated: document.getElementById('badge-repeated'),
    
    btnSortRepeated: document.getElementById('sort-repeated'),
    btnReset: document.getElementById('btn-reset'),
    btnTheme: document.getElementById('btn-theme'),
    sectionFilter: document.getElementById('section-filter'),
    
    searchInput: document.getElementById('search-input'),
    searchBtn: document.getElementById('search-btn'),
    searchResult: document.getElementById('search-result'),
    
    soundAdd: document.getElementById('sound-add'),
    soundError: document.getElementById('sound-error'),
    soundCelebrate: document.getElementById('sound-celebrate')
};

// Initialize App
function init() {
    loadTheme();
    loadData();
    elements.statTotal.innerText = TOTAL_STICKERS; 
    setLanguage(currentLang);
    populateFilters();
    updateUI();
    setupEventListeners();
}

function loadTheme() {
    const savedTheme = localStorage.getItem('panini2026_theme') || 'dark';
    setTheme(savedTheme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('panini2026_theme', theme);
    if (theme === 'light') {
        elements.btnTheme.innerHTML = '<i class="fas fa-moon"></i>';
        elements.btnTheme.className = 'btn btn-sm btn-outline-dark';
    } else {
        elements.btnTheme.innerHTML = '<i class="fas fa-sun"></i>';
        elements.btnTheme.className = 'btn btn-sm btn-outline-info';
    }
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('panini2026_lang', lang);
    
    // Update texts
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
            el.innerText = TRANSLATIONS[lang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
            el.placeholder = TRANSLATIONS[lang][key];
        }
    });
    
    // Update active class in dropdown
    document.getElementById('current-lang').innerText = lang.toUpperCase();
    document.querySelectorAll('.lang-option').forEach(el => {
        if (el.getAttribute('data-lang') === lang) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });

    // Re-render dependent dynamic texts
    populateFilters();
    renderRepeated();
    renderAlbum();
    
    // Update current view mode title
    setViewMode(currentViewMode, true);
}

function populateFilters() {
    let html = `<option value="ALL">${TRANSLATIONS[currentLang].allSections}</option>`;
    STICKER_GROUPS.forEach(g => {
        const name = currentLang === 'en' && g.name_en ? g.name_en : g.name;
        html += `<option value="${g.prefix}">${name} (${g.prefix})</option>`;
    });
    elements.sectionFilter.innerHTML = html;
}

// Load from LocalStorage
function loadData() {
    const saved = localStorage.getItem('panini2026_data_v2');
    if (saved) {
        try {
            albumData = JSON.parse(saved);
        } catch (e) {
            console.error('Error loading data', e);
        }
    } else {
        // Optional: migrate v1 to v2 if needed, but since codes are different, we might just start fresh.
        // For safety, we start fresh for this new version because old structure was numeric.
    }
}

// Save to LocalStorage
function saveData() {
    localStorage.setItem('panini2026_data_v2', JSON.stringify(albumData));
}

// Play Sound
function playSound(type) {
    const sound = elements[`sound${type.charAt(0).toUpperCase() + type.slice(1)}`];
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(e => console.log('Autoplay prevented'));
    }
}

// Event Listeners
function setupEventListeners() {
    elements.form.addEventListener('submit', handleAddSticker);
    elements.btnSortRepeated.addEventListener('click', renderRepeated);
    
    elements.btnReset.addEventListener('click', handleReset);
    elements.btnTheme.addEventListener('click', toggleTheme);
    elements.sectionFilter.addEventListener('change', renderAlbum);
    
    elements.searchBtn.addEventListener('click', handleSearch);
    elements.searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') handleSearch();
        if (elements.searchInput.value === '') {
            elements.searchResult.style.display = 'none';
        }
    });
    
    document.querySelectorAll('.lang-option').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = e.target.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
}

// Parse input "mex1" or "MEX 1" into standardized "MEX 1"
function parseStickerCode(input) {
    const clean = input.trim().toUpperCase().replace(/\s+/g, '');
    for (const group of STICKER_GROUPS) {
        if (clean.startsWith(group.prefix)) {
            const numStr = clean.substring(group.prefix.length);
            const num = parseInt(numStr, 10);
            if (!isNaN(num) && num >= 1 && num <= group.max) {
                return `${group.prefix} ${num}`;
            }
        }
    }
    return null;
}

// Add Sticker Logic
function handleAddSticker(e) {
    e.preventDefault();
    
    const val = elements.inputNumber.value;
    const code = parseStickerCode(val);
    const isRep = elements.isRepeated.checked;
    
    if (!code) {
        playSound('error');
        Swal.fire({
            icon: 'error',
            title: TRANSLATIONS[currentLang].invalidCode,
            text: TRANSLATIONS[currentLang].invalidCodeDesc,
            background: '#1e293b',
            color: '#fff'
        });
        return;
    }

    if (isRep) {
        albumData.repeated[code] = (albumData.repeated[code] || 0) + 1;
        const t = currentLang === 'en' ? `Sticker ${code} added to repeated` : `Estampa ${code} agregada a repetidas`;
        showToast('success', t);
        playSound('add');
    } else {
        if (albumData.obtained.includes(code)) {
            playSound('error');
            Swal.fire({
                title: currentLang === 'en' ? 'You already have it!' : '¡Ya la tienes!',
                text: currentLang === 'en' ? `Sticker ${code} is already in your album. Add to repeated?` : `La estampa ${code} ya está en tu álbum. ¿Quieres agregarla como repetida?`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#f59e0b',
                cancelButtonColor: '#64748b',
                confirmButtonText: currentLang === 'en' ? 'Yes, to repeated' : 'Sí, a repetidas',
                cancelButtonText: TRANSLATIONS[currentLang].sweetResetCancel,
                background: '#1e293b',
                color: '#fff'
            }).then((result) => {
                if (result.isConfirmed) {
                    albumData.repeated[code] = (albumData.repeated[code] || 0) + 1;
                    saveData();
                    updateUI();
                    const msg = currentLang === 'en' ? `Sticker ${code} saved as repeated` : `Estampa ${code} guardada como repetida`;
                    showToast('success', msg);
                    playSound('add');
                }
            });
            return;
        } else {
            albumData.obtained.push(code);
            const msg = currentLang === 'en' ? `Sticker ${code} pasted in album!` : `¡Estampa ${code} pegada en el álbum!`;
            showToast('success', msg);
            playSound('add');
            
            if (albumData.obtained.length === TOTAL_STICKERS) {
                triggerCelebration();
            }
            
            // Scroll to element
            setTimeout(() => {
                const elId = `sticker-${code.replace(' ', '-')}`;
                const el = document.getElementById(elId);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 100);
        }
    }
    
    saveData();
    updateUI();
    
    elements.inputNumber.value = '';
    elements.inputNumber.focus();
    elements.isRepeated.checked = false;
}

// Reset Logic
function handleReset() {
    Swal.fire({
        title: TRANSLATIONS[currentLang].sweetResetTitle,
        text: TRANSLATIONS[currentLang].sweetResetText,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: TRANSLATIONS[currentLang].sweetResetConfirm,
        cancelButtonText: TRANSLATIONS[currentLang].sweetResetCancel,
        background: '#1e293b',
        color: '#fff'
    }).then((result) => {
        if (result.isConfirmed) {
            albumData = { obtained: [], repeated: {} };
            saveData();
            updateUI();
            showToast('info', TRANSLATIONS[currentLang].toastReset);
        }
    });
}

// Remove Repeated Sticker
window.removeRepeated = function(codeStr) {
    if (albumData.repeated[codeStr]) {
        albumData.repeated[codeStr]--;
        if (albumData.repeated[codeStr] <= 0) {
            delete albumData.repeated[codeStr];
        }
        saveData();
        updateUI();
        showToast('info', TRANSLATIONS[currentLang].toastDelRep);
    }
};

window.setViewMode = function(mode, noToast = false) {
    currentViewMode = mode;
    let title = TRANSLATIONS[currentLang].album;
    if (mode === 'MISSING') title = TRANSLATIONS[currentLang].albumMissing;
    if (mode === 'OBTAINED') title = TRANSLATIONS[currentLang].albumObtained;
    if (mode === 'REPEATED') title = TRANSLATIONS[currentLang].albumRepeated;
    
    document.getElementById('album-title-text').innerText = title;
    
    // Mostrar aviso
    if (!noToast) showToast('info', `${TRANSLATIONS[currentLang].toastFilter} ${title}`);
    
    // Also scroll to album
    if (!noToast) document.getElementById('album-panel').scrollIntoView({behavior: 'smooth'});
    renderAlbum();
};

window.handleGridClick = function(code) {
    const isObtained = albumData.obtained.includes(code);
    if (!isObtained) {
        albumData.obtained.push(code);
        const msg = currentLang === 'en' ? `Sticker ${code} added!` : `¡Estampa ${code} agregada!`;
        showToast('success', msg);
        playSound('add');
        if (albumData.obtained.length === TOTAL_STICKERS) triggerCelebration();
        saveData();
        updateUI();
    } else {
        // Already have it
        Swal.fire({
            title: currentLang === 'en' ? `Sticker ${code}` : `Estampa ${code}`,
            text: currentLang === 'en' ? "What do you want to do?" : "¿Qué deseas hacer?",
            icon: 'question',
            showCancelButton: true,
            showDenyButton: true,
            confirmButtonText: currentLang === 'en' ? 'Add to repeated' : 'Agregar a repetidas',
            denyButtonText: currentLang === 'en' ? 'Remove from album' : 'Quitar del álbum',
            cancelButtonText: TRANSLATIONS[currentLang].sweetResetCancel,
            background: '#1e293b',
            color: '#fff'
        }).then((result) => {
            if (result.isConfirmed) {
                albumData.repeated[code] = (albumData.repeated[code] || 0) + 1;
                showToast('success', TRANSLATIONS[currentLang].toastAddRep);
                playSound('add');
                saveData();
                updateUI();
            } else if (result.isDenied) {
                albumData.obtained = albumData.obtained.filter(c => c !== code);
                showToast('info', TRANSLATIONS[currentLang].toastDelAlbum);
                saveData();
                updateUI();
            }
        });
    }
};

// Search Logic
function handleSearch() {
    const val = elements.searchInput.value;
    if (!val) return;
    
    const code = parseStickerCode(val);
    
    if (!code) {
        Swal.fire({
            icon: 'error',
            title: TRANSLATIONS[currentLang].invalidCode,
            text: TRANSLATIONS[currentLang].invalidCodeDesc,
            background: '#1e293b',
            color: '#fff',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000
        });
        return;
    }
    
    const res = elements.searchResult;
    res.style.display = 'block';
    res.className = 'search-result-card mt-3 text-center position-relative';
    
    let html = `
        <button type="button" class="btn-close position-absolute top-0 end-0 m-2" aria-label="Close" onclick="closeSearchResult()" style="font-size: 0.8rem; box-shadow: none;"></button>
        <h5>${currentLang === 'en' ? 'Sticker' : 'Estampa'} ${code}</h5>
    `;
    
    const hasObtained = albumData.obtained.includes(code);
    const hasRepeated = (albumData.repeated[code] || 0) > 0;
    
    if (hasObtained && hasRepeated) {
        res.classList.add('status-repeated');
        const txt = currentLang === 'en' ? `You have it and it's repeated (${albumData.repeated[code]}x)` : `La tienes y está repetida (${albumData.repeated[code]}x)`;
        html += `<p class="mb-0"><i class="fas fa-check-double"></i> ${txt}</p>`;
    } else if (hasObtained) {
        res.classList.add('status-obtained');
        const txt = currentLang === 'en' ? `It is already in your album` : `Ya está pegada en tu álbum`;
        html += `<p class="mb-0"><i class="fas fa-check"></i> ${txt}</p>`;
    } else if (hasRepeated) {
        res.classList.add('status-repeated');
        const txt = currentLang === 'en' ? `You have it in repeated, but NOT in album` : `La tienes en repetidas, pero NO en el álbum`;
        html += `<p class="mb-0"><i class="fas fa-exclamation-circle"></i> ${txt}</p>`;
    } else {
        res.classList.add('status-missing');
        const txt = currentLang === 'en' ? `Missing` : `Te falta`;
        html += `<p class="mb-0"><i class="fas fa-times"></i> ${txt}</p>`;
    }
    
    res.innerHTML = html;
    
    if (searchTimeout) clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        closeSearchResult();
    }, 3000);
}

window.closeSearchResult = function() {
    if (elements.searchResult) {
        elements.searchResult.style.display = 'none';
    }
};

// Update User Interface
function updateUI() {
    updateStats();
    renderAlbum();
    renderRepeated();
}

function updateStats() {
    const obtainedCount = albumData.obtained.length;
    const missingCount = TOTAL_STICKERS - obtainedCount;
    
    let repeatedCount = 0;
    for (const code in albumData.repeated) {
        repeatedCount += albumData.repeated[code];
    }
    
    const percentage = ((obtainedCount / TOTAL_STICKERS) * 100).toFixed(1);
    
    elements.statObtained.innerText = obtainedCount;
    elements.statMissing.innerText = missingCount;
    elements.statRepeated.innerText = repeatedCount;
    
    elements.progressBar.style.width = `${percentage}%`;
    elements.progressText.innerText = `${percentage}%`;
}

function renderAlbum() {
    let html = '';
    const filter = elements.sectionFilter.value;
    
    for (const group of STICKER_GROUPS) {
        if (filter !== 'ALL' && filter !== group.prefix) continue;
        
        let hasContent = false;
        const name = currentLang === 'en' && group.name_en ? group.name_en : group.name;
        let groupHtml = `<div class="w-100 mt-3" style="grid-column: 1 / -1; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-bottom: 5px;">
                        <span class="text-info fw-bold" style="letter-spacing: 1px;">${name} (${group.prefix})</span>
                     </div>`;
                     
        for (let i = 1; i <= group.max; i++) {
            const code = `${group.prefix} ${i}`;
            const id = `sticker-${group.prefix}-${i}`;
            const isObtained = albumData.obtained.includes(code);
            const isRepeated = (albumData.repeated[code] || 0) > 0;
            
            if (currentViewMode === 'MISSING' && isObtained) continue;
            if (currentViewMode === 'OBTAINED' && !isObtained) continue;
            if (currentViewMode === 'REPEATED' && !isRepeated) continue;
            
            hasContent = true;
            
            let stateClass = 'missing';
            if (isObtained) {
                stateClass = isRepeated ? 'repeated-album' : 'obtained';
            }
            
            groupHtml += `<div id="${id}" class="missing-item ${stateClass}" title="${code}" onclick="handleGridClick('${code}')">${code}</div>`;
        }
        
        if (hasContent) {
            html += groupHtml;
        }
    }
    
    elements.missingList.innerHTML = html;
}

function renderRepeated() {
    const repeatedKeys = Object.keys(albumData.repeated);
    
    if (repeatedKeys.length === 0) {
        elements.repeatedList.innerHTML = `<li class="list-group-item text-center text-muted empty-msg" style="background:transparent; border:none;" data-i18n="noRepeated">${TRANSLATIONS[currentLang].noRepeated}</li>`;
        return;
    }
    
    // Sort logically by group then number
    repeatedKeys.sort((a, b) => {
        const [pA, nA] = a.split(' ');
        const [pB, nB] = b.split(' ');
        if (pA === pB) return parseInt(nA) - parseInt(nB);
        return pA.localeCompare(pB);
    });
    
    let html = '';
    repeatedKeys.forEach(code => {
        const qty = albumData.repeated[code];
        html += `
            <li class="list-group-item repeated-item animated-pop">
                <div>
                    <span class="fs-6 fw-bold">${code}</span>
                    <span class="repeated-badge ms-2">x${qty}</span>
                </div>
                <button class="btn btn-sm btn-outline-danger" onclick="removeRepeated('${code}')" title="Eliminar una">
                    <i class="fas fa-trash"></i>
                </button>
            </li>
        `;
    });
    
    elements.repeatedList.innerHTML = html;
}

function showToast(icon, title) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        background: '#1e293b',
        color: '#fff'
    });
    Toast.fire({ icon, title });
}

function triggerCelebration() {
    playSound('celebrate');
    Swal.fire({
        title: currentLang === 'en' ? 'ALBUM COMPLETED!' : '¡ÁLBUM COMPLETADO!',
        text: currentLang === 'en' ? 'Congratulations! You have completed the 2026 World Cup album.' : '¡Felicidades! Has completado el álbum del Mundial 2026.',
        imageUrl: 'https://media.giphy.com/media/xT0xezQGU5xCDJuCPe/giphy.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Trophy',
        background: '#1e293b',
        color: '#fff',
        confirmButtonText: currentLang === 'en' ? 'Awesome!' : '¡Increíble!',
        confirmButtonColor: '#10b981'
    });
    
    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10000 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      var particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
}

// Boot
init();
