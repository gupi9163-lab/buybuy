# BDU Akademik Hesablayıcı

## Son Yeniləmələr (v1.1)

### 🔧 Düzəldilmiş Problemlər:
1. ✅ **Bal Yarat Düyməsi** - Seminar və kollekvium bal sayı daxil edildikdən sonra "Bal Yarat" düyməsinə basmaq lazımdır
2. ✅ **Davamiyyət Balı Düzəldildi** - Qayıb sayı 0 olanda artıq düzgün maksimum bal (10) verilir
3. ✅ **Navigasiya Tarixçəsi** - İstifadəçi hesablayıcı səhifələrindən çıxanda həmin səhifədə qalır, brauzerin geri düyməsi düzgün işləyir

### 🎯 Yeni Xüsusiyyətlər:
- **URL History**: Hər səhifənin öz URL-i var (#semestrPage, #uomgPage və s.)
- **Browser Back/Forward**: Brauzerin geri/irəli düymələri düzgün işləyir
- **Improved UX**: Daha yaxşı istifadəçi təcrübəsi

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

## Quraşdırma və İstifadə

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
