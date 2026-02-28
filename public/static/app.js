// Global state management
let currentPage = 'homePage';
let deferredPrompt;

// Page navigation with history support (PROBLEM 3 FIX)
function showPage(pageId) {
    const homePage = document.getElementById('homePage');
    const dynamicContent = document.getElementById('dynamicContent');
    const infoButton = document.getElementById('infoButton');
    
    if (pageId === 'homePage') {
        homePage.style.display = 'block';
        dynamicContent.innerHTML = '';
        infoButton.style.display = 'flex';
        currentPage = 'homePage';
        // Update URL without reloading
        window.history.pushState({page: 'homePage'}, '', '#home');
        return;
    }
    
    homePage.style.display = 'none';
    infoButton.style.display = 'none';
    currentPage = pageId;
    
    // Update URL without reloading
    window.history.pushState({page: pageId}, '', '#' + pageId);
    
    // Load the appropriate page content
    switch(pageId) {
        case 'semestrPage':
            loadSemestrPage();
            break;
        case 'uomgPage':
            loadUomgPage();
            break;
        case 'imtahanPage':
            loadImtahanPage();
            break;
        case 'yasPage':
            loadYasPage();
            break;
        case 'lugetPage':
            loadLugetPage();
            break;
        case 'melumatPage':
            loadMelumatPage();
            break;
        case 'linklerPage':
            loadLinklerPage();
            break;
    }
}

// Back button
function createBackButton() {
    return `
        <div class="back-button bg-white shadow-sm">
            <button onclick="showPage('homePage')" class="w-full px-4 py-3 flex items-center text-gray-700 hover:bg-gray-50">
                <i class="fas fa-arrow-left mr-3"></i>
                <span class="font-medium">Geri</span>
            </button>
        </div>
    `;
}

// Result display function
function getResultEmoji(score) {
    if (score >= 50) return '🎉 MÜVƏFFƏQİYYƏTLƏ KEÇDİNİZ! ✅';
    if (score >= 45) return '🔥 ÇOX YAXŞI 📊';
    if (score >= 41) return '💣 YAXŞI 📈';
    if (score >= 36) return '🫂 KAFİ 📉';
    if (score >= 26) return '🎭 ZƏİF 📴';
    if (score > 0) return '🗿 YAXŞI OLACAQ 🆒';
    return '⚠️ 0 BAL ⚠️';
}

// ============= SEMESTR BAL HESABLAMA =============
function loadSemestrPage() {
    const content = `
        ${createBackButton()}
        <div class="max-w-4xl mx-auto px-4 py-8 page-transition">
            <h1 class="text-2xl font-bold text-gray-800 mb-6 text-center">
                <i class="fas fa-calculator text-indigo-600"></i>
                Semestr Balı Hesablama
            </h1>
            
            <div class="bg-white rounded-xl p-6 shadow-md space-y-6">
                <!-- Seminar -->
                <div>
                    <label class="block text-gray-700 font-medium mb-2">
                        <i class="fas fa-chalkboard-teacher text-indigo-600"></i>
                        Seminar bal sayı (maksimum 9)
                    </label>
                    <div class="flex gap-2">
                        <input type="number" id="seminarCount" min="1" max="9" 
                               class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                        <button onclick="generateSeminarInputs()" 
                                class="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                            <i class="fas fa-plus mr-2"></i>Bal Yarat
                        </button>
                    </div>
                    <div id="seminarInputs" class="mt-3 space-y-2"></div>
                </div>

                <!-- Kollekvium -->
                <div>
                    <label class="block text-gray-700 font-medium mb-2">
                        <i class="fas fa-clipboard-list text-green-600"></i>
                        Kollekvium bal sayı (maksimum 4)
                    </label>
                    <div class="flex gap-2">
                        <input type="number" id="kollekviumCount" min="1" max="4"
                               class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                        <button onclick="generateKollekviumInputs()" 
                                class="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                            <i class="fas fa-plus mr-2"></i>Bal Yarat
                        </button>
                    </div>
                    <div id="kollekviumInputs" class="mt-3 space-y-2"></div>
                </div>

                <!-- Sərbəst İş -->
                <div>
                    <label class="block text-gray-700 font-medium mb-2">
                        <i class="fas fa-pencil-alt text-blue-600"></i>
                        Sərbəst iş balı (0-10)
                    </label>
                    <input type="number" id="serbestIs" min="0" max="10" step="0.1"
                           class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                </div>

                <!-- Davamiyyət -->
                <div>
                    <label class="block text-gray-700 font-medium mb-2">
                        <i class="fas fa-user-check text-purple-600"></i>
                        Dərs saatı
                    </label>
                    <select id="dersSaat" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option value="">Seçin...</option>
                        <option value="30">30 saat</option>
                        <option value="45">45 saat</option>
                        <option value="60">60 saat</option>
                        <option value="75">75 saat</option>
                        <option value="90">90 saat</option>
                        <option value="105">105 saat</option>
                    </select>
                </div>

                <div>
                    <label class="block text-gray-700 font-medium mb-2">
                        <i class="fas fa-times-circle text-red-600"></i>
                        Qayıb sayı
                    </label>
                    <input type="number" id="qayibSay" min="0" value="0"
                           class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                </div>

                <button onclick="calculateSemestr()" 
                        class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition">
                    <i class="fas fa-calculator mr-2"></i>
                    Hesabla
                </button>

                <div id="semestrResult" class="hidden mt-6"></div>
            </div>
        </div>
    `;
    document.getElementById('dynamicContent').innerHTML = content;
}

function generateSeminarInputs() {
    const count = parseInt(document.getElementById('seminarCount').value);
    const container = document.getElementById('seminarInputs');
    
    if (!count || count < 1 || count > 9) {
        container.innerHTML = '';
        return;
    }
    
    let html = '<div class="grid grid-cols-3 gap-2">';
    for (let i = 1; i <= count; i++) {
        html += `
            <input type="number" id="seminar${i}" min="0" max="10" step="0.1" placeholder="Bal ${i}"
                   class="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
        `;
    }
    html += '</div>';
    container.innerHTML = html;
}

function generateKollekviumInputs() {
    const count = parseInt(document.getElementById('kollekviumCount').value);
    const container = document.getElementById('kollekviumInputs');
    
    if (!count || count < 1 || count > 4) {
        container.innerHTML = '';
        return;
    }
    
    let html = '<div class="grid grid-cols-2 gap-2">';
    for (let i = 1; i <= count; i++) {
        html += `
            <input type="number" id="kollekvium${i}" min="0" max="10" step="0.1" placeholder="Bal ${i}"
                   class="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent">
        `;
    }
    html += '</div>';
    container.innerHTML = html;
}

function calculateDavamiyyetBal(saat, qayib) {
    // PROBLEM 2 FIX: Qayıb 0 olanda maksimum bal verilməlidir
    const rules = {
        30: [[0,0,10], [1,2,9], [3,3,8], [4,Infinity,0]],
        45: [[0,0,10], [1,1,10], [2,3,9], [4,5,8], [6,Infinity,0]],
        60: [[0,0,10], [1,1,10], [2,4,9], [5,7,8], [8,Infinity,0]],
        75: [[0,0,10], [1,1,10], [2,5,9], [6,9,8], [10,Infinity,0]],
        90: [[0,0,10], [1,2,10], [3,6,9], [7,11,8], [12,Infinity,0]],
        105: [[0,0,10], [1,2,10], [3,7,9], [8,13,8], [14,Infinity,0]]
    };
    
    if (!rules[saat]) return 0;
    
    for (let [min, max, bal] of rules[saat]) {
        if (qayib >= min && qayib <= max) {
            return bal;
        }
    }
    return 0;
}

function calculateSemestr() {
    // Get seminar scores
    const seminarCount = parseInt(document.getElementById('seminarCount').value);
    let seminarTotal = 0;
    let seminarValid = true;
    
    for (let i = 1; i <= seminarCount; i++) {
        const val = parseFloat(document.getElementById(`seminar${i}`).value);
        if (isNaN(val)) {
            seminarValid = false;
            break;
        }
        seminarTotal += val;
    }
    
    // Get kollekvium scores
    const kollekviumCount = parseInt(document.getElementById('kollekviumCount').value);
    let kollekviumTotal = 0;
    let kollekviumValid = true;
    
    for (let i = 1; i <= kollekviumCount; i++) {
        const val = parseFloat(document.getElementById(`kollekvium${i}`).value);
        if (isNaN(val)) {
            kollekviumValid = false;
            break;
        }
        kollekviumTotal += val;
    }
    
    // Get other values
    const serbestIs = parseFloat(document.getElementById('serbestIs').value) || 0;
    const dersSaat = parseInt(document.getElementById('dersSaat').value);
    const qayibSay = parseInt(document.getElementById('qayibSay').value) || 0;
    
    if (!seminarValid || !kollekviumValid || !dersSaat) {
        alert('Zəhmət olmasa bütün məlumatları daxil edin!');
        return;
    }
    
    // Calculate averages
    const seminarOrta = seminarTotal / seminarCount;
    const kollekviumOrta = kollekviumTotal / kollekviumCount;
    
    // Calculate davamiyyət
    const davamiyyetBal = calculateDavamiyyetBal(dersSaat, qayibSay);
    
    // Calculate final score
    const semestrBal = (seminarOrta * 0.4 + kollekviumOrta * 0.6) * 3 + davamiyyetBal + serbestIs;
    
    // Display result
    const resultDiv = document.getElementById('semestrResult');
    resultDiv.className = 'mt-6 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border-2 border-indigo-200';
    resultDiv.innerHTML = `
        <h3 class="text-xl font-bold text-gray-800 mb-4 text-center">Nəticə</h3>
        <div class="space-y-3 text-gray-700">
            <p><strong>Seminar orta:</strong> ${seminarOrta.toFixed(2)}</p>
            <p><strong>Kollekvium orta:</strong> ${kollekviumOrta.toFixed(2)}</p>
            <p><strong>Sərbəst iş:</strong> ${serbestIs.toFixed(2)}</p>
            <p><strong>Davamiyyət:</strong> ${davamiyyetBal} bal</p>
            <hr class="my-4 border-indigo-200">
            <p class="text-2xl font-bold text-center text-indigo-600">${semestrBal.toFixed(2)} bal</p>
            <p class="text-lg text-center font-medium">${getResultEmoji(semestrBal)}</p>
        </div>
    `;
    resultDiv.classList.remove('hidden');
}

// ============= ÜOMG HESABLAMA =============
function loadUomgPage() {
    const content = `
        ${createBackButton()}
        <div class="max-w-4xl mx-auto px-4 py-8 page-transition">
            <h1 class="text-2xl font-bold text-gray-800 mb-6 text-center">
                <i class="fas fa-chart-line text-green-600"></i>
                ÜOMG Hesablama
            </h1>
            
            <div class="bg-white rounded-xl p-6 shadow-md space-y-6">
                <div>
                    <label class="block text-gray-700 font-medium mb-2">
                        <i class="fas fa-book text-green-600"></i>
                        Fənn sayı
                    </label>
                    <input type="number" id="fennCount" min="1" max="20"
                           class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                           onchange="generateUomgInputs()">
                </div>

                <div id="uomgInputs" class="space-y-3"></div>

                <button onclick="calculateUomg()" 
                        class="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 rounded-lg font-medium hover:from-green-700 hover:to-teal-700 transition">
                    <i class="fas fa-calculator mr-2"></i>
                    Hesabla
                </button>

                <div id="uomgResult" class="hidden mt-6"></div>
            </div>
        </div>
    `;
    document.getElementById('dynamicContent').innerHTML = content;
}

function generateUomgInputs() {
    const count = parseInt(document.getElementById('fennCount').value);
    const container = document.getElementById('uomgInputs');
    
    if (!count || count < 1) {
        container.innerHTML = '';
        return;
    }
    
    let html = '<div class="space-y-4">';
    for (let i = 1; i <= count; i++) {
        html += `
            <div class="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <p class="font-medium text-gray-700 mb-3">Fənn ${i}</p>
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-sm text-gray-600 mb-1">Bal (0-100)</label>
                        <input type="number" id="bal${i}" min="0" max="100" step="0.1"
                               class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500">
                    </div>
                    <div>
                        <label class="block text-sm text-gray-600 mb-1">Kredit</label>
                        <input type="number" id="kredit${i}" min="1" max="10"
                               class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500">
                    </div>
                </div>
            </div>
        `;
    }
    html += '</div>';
    container.innerHTML = html;
}

function calculateUomg() {
    const fennCount = parseInt(document.getElementById('fennCount').value);
    
    if (!fennCount || fennCount < 1) {
        alert('Zəhmət olmasa fənn sayını daxil edin!');
        return;
    }
    
    let balKreditTotal = 0;
    let kreditTotal = 0;
    
    for (let i = 1; i <= fennCount; i++) {
        const bal = parseFloat(document.getElementById(`bal${i}`).value);
        const kredit = parseFloat(document.getElementById(`kredit${i}`).value);
        
        if (isNaN(bal) || isNaN(kredit)) {
            alert(`Fənn ${i} üçün bal və kredit daxil edin!`);
            return;
        }
        
        balKreditTotal += bal * kredit;
        kreditTotal += kredit;
    }
    
    const uomg = balKreditTotal / kreditTotal;
    
    const resultDiv = document.getElementById('uomgResult');
    resultDiv.className = 'mt-6 p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl border-2 border-green-200';
    resultDiv.innerHTML = `
        <h3 class="text-xl font-bold text-gray-800 mb-4 text-center">Nəticə</h3>
        <div class="space-y-3 text-gray-700">
            <p><strong>Ümumi kredit:</strong> ${kreditTotal}</p>
            <hr class="my-4 border-green-200">
            <p class="text-2xl font-bold text-center text-green-600">${uomg.toFixed(2)} ÜOMG</p>
            <p class="text-lg text-center font-medium">${getResultEmoji(uomg)}</p>
        </div>
    `;
    resultDiv.classList.remove('hidden');
}

// ============= KƏSR PULU HESABLAMA =============
function loadImtahanPage() {
    const content = `
        ${createBackButton()}
        <div class="max-w-4xl mx-auto px-4 py-8 page-transition">
            <h1 class="text-2xl font-bold text-gray-800 mb-6 text-center">
                <i class="fas fa-money-bill-wave text-red-600"></i>
                25% İmtahan (Kəsr) Pulu
            </h1>
            
            <div class="bg-white rounded-xl p-6 shadow-md space-y-6">
                <div>
                    <label class="block text-gray-700 font-medium mb-2">
                        <i class="fas fa-wallet text-red-600"></i>
                        İllik ödəniş (AZN)
                    </label>
                    <input type="number" id="illikOdenis" min="0" step="0.01"
                           class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                </div>

                <div>
                    <label class="block text-gray-700 font-medium mb-2">
                        <i class="fas fa-book-open text-red-600"></i>
                        Fənnin kredit sayı
                    </label>
                    <input type="number" id="fennKredit" min="1" max="10"
                           class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                </div>

                <button onclick="calculateKesrPul()" 
                        class="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 rounded-lg font-medium hover:from-red-700 hover:to-orange-700 transition">
                    <i class="fas fa-calculator mr-2"></i>
                    Hesabla
                </button>

                <div id="kesrResult" class="hidden mt-6"></div>
            </div>
        </div>
    `;
    document.getElementById('dynamicContent').innerHTML = content;
}

function calculateKesrPul() {
    const illikOdenis = parseFloat(document.getElementById('illikOdenis').value);
    const fennKredit = parseFloat(document.getElementById('fennKredit').value);
    
    if (isNaN(illikOdenis) || isNaN(fennKredit)) {
        alert('Zəhmət olmasa bütün məlumatları daxil edin!');
        return;
    }
    
    const kesrPul = ((illikOdenis / 60) * fennKredit) / 4 + 1;
    
    const resultDiv = document.getElementById('kesrResult');
    resultDiv.className = 'mt-6 p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl border-2 border-red-200';
    resultDiv.innerHTML = `
        <h3 class="text-xl font-bold text-gray-800 mb-4 text-center">Nəticə</h3>
        <p class="text-2xl font-bold text-center text-red-600">${kesrPul.toFixed(2)} AZN</p>
        <p class="text-sm text-gray-600 text-center mt-3">25% imtahan üçün ödəniş məbləği</p>
    `;
    resultDiv.classList.remove('hidden');
}

// ============= YAŞ HESABLAYICI =============
function loadYasPage() {
    const content = `
        ${createBackButton()}
        <div class="max-w-4xl mx-auto px-4 py-8 page-transition">
            <h1 class="text-2xl font-bold text-gray-800 mb-6 text-center">
                <i class="fas fa-birthday-cake text-purple-600"></i>
                Yaş Hesablayıcı
            </h1>
            
            <div class="bg-white rounded-xl p-6 shadow-md space-y-6">
                <div>
                    <label class="block text-gray-700 font-medium mb-2">
                        <i class="fas fa-calendar text-purple-600"></i>
                        Doğum tarixi (GG.AA.İİİİ)
                    </label>
                    <input type="text" id="dogumTarixi" placeholder="31.12.2000"
                           class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <p class="text-sm text-gray-500 mt-1">Format: gün.ay.il (məsələn: 15.03.2000)</p>
                </div>

                <button onclick="calculateYas()" 
                        class="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition">
                    <i class="fas fa-calculator mr-2"></i>
                    Hesabla
                </button>

                <div id="yasResult" class="hidden mt-6"></div>
            </div>
        </div>
    `;
    document.getElementById('dynamicContent').innerHTML = content;
}

function calculateYas() {
    const input = document.getElementById('dogumTarixi').value.trim();
    
    // Parse date
    const parts = input.split('.');
    if (parts.length !== 3) {
        alert('Düzgün format daxil edin: GG.AA.İİİİ');
        return;
    }
    
    const gun = parseInt(parts[0]);
    const ay = parseInt(parts[1]);
    const il = parseInt(parts[2]);
    
    if (isNaN(gun) || isNaN(ay) || isNaN(il) || gun < 1 || gun > 31 || ay < 1 || ay > 12 || il < 1900) {
        alert('Düzgün tarix daxil edin!');
        return;
    }
    
    const dogumTarixi = new Date(il, ay - 1, gun);
    const bugun = new Date();
    
    // Calculate age
    let yas = bugun.getFullYear() - dogumTarixi.getFullYear();
    const ayFerq = bugun.getMonth() - dogumTarixi.getMonth();
    if (ayFerq < 0 || (ayFerq === 0 && bugun.getDate() < dogumTarixi.getDate())) {
        yas--;
    }
    
    // Calculate days lived
    const gunFerq = Math.floor((bugun - dogumTarixi) / (1000 * 60 * 60 * 24));
    
    // Calculate days until next birthday
    let novbetiAdGunu = new Date(bugun.getFullYear(), ay - 1, gun);
    if (novbetiAdGunu < bugun) {
        novbetiAdGunu.setFullYear(bugun.getFullYear() + 1);
    }
    const qalanGun = Math.ceil((novbetiAdGunu - bugun) / (1000 * 60 * 60 * 24));
    
    const resultDiv = document.getElementById('yasResult');
    resultDiv.className = 'mt-6 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200';
    resultDiv.innerHTML = `
        <h3 class="text-xl font-bold text-gray-800 mb-4 text-center">Nəticə</h3>
        <div class="space-y-3 text-gray-700">
            <p class="text-center">
                <span class="text-3xl font-bold text-purple-600">${yas}</span>
                <span class="text-lg ml-2">yaş</span>
            </p>
            <hr class="my-4 border-purple-200">
            <p><strong>Yaşadığınız günlər:</strong> ${gunFerq.toLocaleString()} gün</p>
            <p><strong>Növbəti ad gününüzə:</strong> ${qalanGun} gün qalıb</p>
            <p class="text-center text-lg mt-4">🎂 ${dogumTarixi.toLocaleDateString('az-AZ', {day: 'numeric', month: 'long', year: 'numeric'})}</p>
        </div>
    `;
    resultDiv.classList.remove('hidden');
}

// ============= LÜĞƏT =============
function loadLugetPage() {
    const content = `
        ${createBackButton()}
        <div class="max-w-4xl mx-auto px-4 py-8 page-transition">
            <h1 class="text-2xl font-bold text-gray-800 mb-6 text-center">
                <i class="fas fa-book text-blue-600"></i>
                Akademik Lüğət
            </h1>
            
            <div class="bg-white rounded-xl p-6 shadow-md space-y-4">
                <div class="border-l-4 border-blue-500 pl-4 py-2">
                    <h3 class="font-bold text-gray-800">Mühazirə</h3>
                    <p class="text-gray-600 text-sm mt-1">Müəllimin keçdiyi dərs</p>
                </div>
                
                <!-- Buraya digər terminləri əlavə edə bilərsiniz -->
                <div class="text-center text-gray-500 mt-8 p-8 bg-gray-50 rounded-lg">
                    <i class="fas fa-info-circle text-4xl mb-3 text-blue-400"></i>
                    <p>Digər terminlər tezliklə əlavə ediləcək</p>
                </div>
            </div>
        </div>
    `;
    document.getElementById('dynamicContent').innerHTML = content;
}

// ============= MƏLUMAT =============
function loadMelumatPage() {
    const content = `
        ${createBackButton()}
        <div class="max-w-4xl mx-auto px-4 py-8 page-transition">
            <h1 class="text-2xl font-bold text-gray-800 mb-6 text-center">
                <i class="fas fa-info-circle text-yellow-600"></i>
                Faydalı Məlumatlar
            </h1>
            
            <div class="bg-white rounded-xl p-6 shadow-md space-y-4">
                <div class="border-l-4 border-yellow-500 pl-4 py-2">
                    <h3 class="font-bold text-gray-800">Əlaçı olmaq üçün</h3>
                    <p class="text-gray-600 text-sm mt-1">Bütün fənnlər 91+ bal olmalıdır</p>
                </div>
                
                <!-- Buraya digər məlumatları əlavə edə bilərsiniz -->
                <div class="text-center text-gray-500 mt-8 p-8 bg-gray-50 rounded-lg">
                    <i class="fas fa-info-circle text-4xl mb-3 text-yellow-400"></i>
                    <p>Digər məlumatlar tezliklə əlavə ediləcək</p>
                </div>
            </div>
        </div>
    `;
    document.getElementById('dynamicContent').innerHTML = content;
}

// ============= SÜRƏTLİ LİNKLƏR =============
function loadLinklerPage() {
    const links = [
        { title: 'BDU Rəsmi Sayt', url: 'https://bsu.edu.az', icon: 'fa-university', color: 'indigo', type: 'web' },
        { title: 'SemsLogin (Akademik Portal)', url: 'https://share.google/7ljpthpUCiOMOeS82', icon: 'fa-graduation-cap', color: 'green', type: 'web' },
        { title: 'BDU WhatsApp Kanalı', url: 'https://whatsapp.com/channel/0029Va85Ls85q08WyYoGeJ3r', icon: 'fa-whatsapp', color: 'green', type: 'app' },
        { title: 'BDU Instagram', url: 'https://www.instagram.com/bdu_eduaz', icon: 'fa-instagram', color: 'pink', type: 'app' },
        { title: 'BDU Telegram', url: 'https://t.me/bdu_eduaz', icon: 'fa-telegram', color: 'blue', type: 'app' },
        { title: 'Sayt Sahibinin Instagram', url: 'https://www.instagram.com/desespere_etoile', icon: 'fa-user', color: 'purple', type: 'app' },
        { title: 'Tələbə Chat Qrupu', url: 'https://t.me/+WUKxtnDjo2E5YTcy', icon: 'fa-comments', color: 'teal', type: 'app' }
    ];
    
    let linksHtml = '';
    links.forEach(link => {
        linksHtml += `
            <a href="${link.url}" target="_blank" rel="noopener noreferrer"
               class="block bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition calculator-card">
                <div class="flex items-center">
                    <div class="w-12 h-12 bg-${link.color}-100 rounded-lg flex items-center justify-center mr-4">
                        <i class="fab ${link.icon} text-${link.color}-600 text-xl"></i>
                    </div>
                    <div class="flex-1">
                        <h3 class="font-bold text-gray-800">${link.title}</h3>
                    </div>
                    <i class="fas fa-external-link-alt text-gray-400"></i>
                </div>
            </a>
        `;
    });
    
    const content = `
        ${createBackButton()}
        <div class="max-w-4xl mx-auto px-4 py-8 page-transition">
            <h1 class="text-2xl font-bold text-gray-800 mb-6 text-center">
                <i class="fas fa-link text-pink-600"></i>
                Sürətli Linklər
            </h1>
            
            <div class="space-y-3">
                ${linksHtml}
            </div>
        </div>
    `;
    document.getElementById('dynamicContent').innerHTML = content;
}

// ============= INFO BUTTON =============
document.getElementById('infoButton').addEventListener('click', function() {
    const overlay = document.createElement('div');
    overlay.className = 'info-overlay';
    overlay.innerHTML = `
        <div class="bg-white rounded-xl p-8 max-w-sm mx-4 text-center">
            <p class="text-2xl mb-4">💬</p>
            <p class="text-gray-700 text-lg font-medium">O, boşluq yaradır.</p>
            <button onclick="this.closest('.info-overlay').remove()" 
                    class="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
                Bağla
            </button>
        </div>
    `;
    document.body.appendChild(overlay);
});

// ============= PWA INSTALLATION =============
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById('installPrompt').style.display = 'block';
});

function installApp() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('PWA installed');
            }
            deferredPrompt = null;
            document.getElementById('installPrompt').style.display = 'none';
        });
    }
}

// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/static/sw.js')
            .then(reg => console.log('Service Worker registered'))
            .catch(err => console.log('Service Worker registration failed'));
    });
}

// Handle browser back/forward buttons (PROBLEM 3 FIX)
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.page) {
        // Don't call showPage to avoid adding to history again
        const pageId = event.state.page;
        const homePage = document.getElementById('homePage');
        const dynamicContent = document.getElementById('dynamicContent');
        const infoButton = document.getElementById('infoButton');
        
        if (pageId === 'homePage') {
            homePage.style.display = 'block';
            dynamicContent.innerHTML = '';
            infoButton.style.display = 'flex';
            currentPage = 'homePage';
        } else {
            homePage.style.display = 'none';
            infoButton.style.display = 'none';
            currentPage = pageId;
            
            // Reload page content
            switch(pageId) {
                case 'semestrPage':
                    loadSemestrPage();
                    break;
                case 'uomgPage':
                    loadUomgPage();
                    break;
                case 'imtahanPage':
                    loadImtahanPage();
                    break;
                case 'yasPage':
                    loadYasPage();
                    break;
                case 'lugetPage':
                    loadLugetPage();
                    break;
                case 'melumatPage':
                    loadMelumatPage();
                    break;
                case 'linklerPage':
                    loadLinklerPage();
                    break;
            }
        }
    }
});

// Initialize history state on page load
window.addEventListener('load', function() {
    if (!window.history.state) {
        window.history.replaceState({page: 'homePage'}, '', '#home');
    }
});
