# BDU Akademik Hesablayıcı

## Son Yeniləmələr (v1.2.0)

### 🎨 Yeni Dizayn
- ✅ **UniFy İkonu** - Yeni professional ikon və splash screen
- ✅ **Splash Screen** - Sayt açılarkən gözəl yükləmə ekranı

### 🔧 Düzəldilmiş Problemlər:
1. ✅ **Bal Yarat Düyməsi** - Seminar və kollekvium bal sayı daxil edildikdən sonra "Bal Yarat" düyməsinə basmaq lazımdır
2. ✅ **Davamiyyət Balı Düzəldildi** - Qayıb sayı 0 olanda artıq düzgün maksimum bal (10) verilir
3. ✅ **Scroll Position Saxlanması** - İstifadəçi səhifədə scroll edib başqa yerə gedəndə, geri qayıtdıqda eyni yerdə qalır

### 🎯 Yeni Xüsusiyyətlər:
- **Config.js Sistemi**: Artıq kodlaşdırma bilməyə ehtiyac yoxdur! `config.js` faylından saytın məzmununu asanlıqla dəyişdirin
- **Versiya Sistemi**: Professional versiya idarəetmə sistemi (v1.2.0)
- **Manual Redaktə**: 2 ətraflı rəhbər fayl:
  - `MANUAL_REDAKTE_REHBERI.md` - Saytı necə redaktə edəcəyinizi öyrənin
  - `VERSIYA_REHBERI.md` - Versiya sistemini necə istifadə edəcəyinizi öyrənin

---
BDU tələbələri üçün hazırlanmış akademik hesablayıcı proqramı. Bu PWA (Progressive Web App) tətbiqi offline işləyir və mobil cihazlara quraşdırıla bilər.

## Xüsusiyyətlər

### ✅ Tamamlanmış Funksiyalar
1. **Semestr Bal Hesablama** - Seminar, kollekvium, davamiyyət və sərbəst iş ballarını hesablayır
2. **ÜOMG Hesablama** - Kredit və ballara əsasən ümumi orta bal hesablayır
3. **25% Kəsr Pulu** - İmtahan pulu məbləğini hesablayır
4. **Yaş Hesablayıcı** - Yaş və ad gününə qalan günləri hesablayır
5. **Lüğət Bölməsi** - Akademik terminlərin izahları (genişləndirilə bilər)
6. **Məlumat Bölməsi** - Tez-tez verilən suallar (genişləndirilə bilər)
7. **Sürətli Linklər** - BDU və faydalı resurslara keçidlər
8. **PWA Dəstəyi** - Offline istifadə və ana ekrana əlavə

### 🔗 İstifadə Olunan Linklər
- BDU Rəsmi Sayt
- SemsLogin (Akademik Portal)
- BDU WhatsApp Kanalı
- BDU Instagram
- BDU Telegram
- Tələbə Chat Qrupu

### 📱 PWA Xüsusiyyətləri
- Offline işləmə qabiliyyəti
- Ana ekrana əlavə edilə bilir
- Push bildirişlər dəstəyi (gələcəkdə)
- Sürətli yükləmə

## Texnologiyalar
- **Frontend**: HTML, CSS (Tailwind), JavaScript
- **Backend**: Hono Framework
- **Platform**: Cloudflare Pages
- **PWA**: Service Worker, Web Manifest

## 📝 Manual Redaktə (Kodlaşdırma Olmadan)

Saytın məzmununu dəyişmək üçün kodlaşdırma bilməyinizə ehtiyac yoxdur!

### Nə Dəyişdirə Bilərəm?
- ✏️ **Lüğət** - Yeni akademik terminlər əlavə edin
- 📚 **Məlumat** - FAQ və faydalı məlumatlar əlavə edin
- 🔗 **Sürətli Linklər** - Yeni linklər əlavə edin
- 💬 **WhatsApp Banner** - Telefon nömrəsi və mesajı dəyişdirin
- ℹ️ **Info Button** - Mesajı fərqliləşdirin

### Necə Dəyişdirəcəm?

**1. `config.js` faylını açın:**
```
Yol: /home/user/webapp/public/static/config.js
```

**2. İstədiyiniz bölməni tapın və dəyişdirin**

**3. Yadda saxlayın və deploy edin:**
```bash
cd /home/user/webapp
npm run build
git add .
git commit -m "Yeni məzmun əlavə edildi"
git push origin main
npm run deploy
```

### 📖 Ətraflı Rəhbərlər:
- **MANUAL_REDAKTE_REHBERI.md** - Addım-addım təlimat (Azərbaycanca)
- **VERSIYA_REHBERI.md** - Versiya sistemi izahı (Azərbaycanca)

### Nümunə: Lüğətə Yeni Termin Əlavə Etmək

`config.js` faylında:
```javascript
const DICTIONARY = [
    {
        term: "Mühazirə",
        definition: "Müəllimin keçdiyi dərs"
    },
    // YENİ TERMİN ƏLAVƏ ET ↓
    {
        term: "Magistratura",
        definition: "Bakalavr dərəcəsindən sonrakı təhsil pilləsi"
    }
];
```

Bu qədər! Daha ətraflı məlumat üçün `MANUAL_REDAKTE_REHBERI.md` faylına baxın.

---

### Development
```bash
# Dependencies quraşdırın
npm install

# Build edin
npm run build

# Local server başladın
pm2 start ecosystem.config.cjs

# Test edin
npm test
```

### Deployment
```bash
# GitHub-a push edin
git add .
git commit -m "Update"
git push origin main

# Cloudflare Pages-ə deploy edin (API key lazımdır)
npm run deploy
```

**Cloudflare Pages Deploy Təlimatı:**
1. **Deploy** tab-ına keçin və Cloudflare API key quraşdırın
2. Cloudflare Dashboard-da: Pages > Create a project > Connect to Git
3. GitHub repository seçin: `gupi9163-lab/buybuy`
4. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/`
5. Deploy edin və URL alın

**Və ya Manual Deploy:**
```bash
# Wrangler ilə manual deploy
npx wrangler pages deploy dist --project-name bdu-hesablayici
```

## URLs
- **GitHub**: https://github.com/gupi9163-lab/buybuy
- **Test (Sandbox)**: https://3000-iv1zlj7eebzym1mly7mg1-b32ec7bb.sandbox.novita.ai
- **Production (Cloudflare)**: Deploy edilməlidir (bax aşağıya)

## Təkmilləşdirmə Planları
- [ ] Lüğət bölməsinə daha çox termin əlavə edilməsi
- [ ] Məlumat bölməsinə daha çox FAQ əlavə edilməsi
- [ ] Rəy və təkliflər sistemi
- [ ] Saxlanmış hesablamalar (localStorage)
- [ ] Çap funksiyası

## Əlaqə
- WhatsApp: +994559406018
- Instagram: @desespere_etoile

## Müəllif Hüquqları
© 2026 BDU Akademik Hesablayıcı
