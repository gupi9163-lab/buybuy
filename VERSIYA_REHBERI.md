# 📚 VERSİYA RƏHBƏRİ - BDU Akademik Hesablayıcı

## 🎯 Versiya Sistemi Necə İşləyir?

Versiya nömrəsi **3 hissədən** ibarətdir: `MAJOR.MINOR.PATCH`

Məsələn: `1.2.0`
- **1** = Major (Böyük versiya)
- **2** = Minor (Kiçik versiya)
- **0** = Patch (Düzəliş)

### 📝 Versiya Nömrəsini Nə Vaxt Artırmalıyam?

#### **MAJOR (Böyük Versiya)** - 1.x.x → 2.x.x
Böyük dəyişikliklər edəndə:
- ✅ Tamamilə yeni hesablayıcı əlavə edəndə
- ✅ Saytın dizaynını tamamilə dəyişəndə
- ✅ Köhnə funksiyaları silməyə qərar verəndə

**Nümunə**: Yeni "Təqaüd Hesablayıcı" bölməsi əlavə etdim → `1.2.0` → `2.0.0`

#### **MINOR (Kiçik Versiya)** - x.1.x → x.2.x
Yeni funksiya əlavə edəndə:
- ✅ Lüğətə 10+ yeni termin əlavə edəndə
- ✅ Məlumat bölməsinə çox sayda yeni FAQ əlavə edəndə
- ✅ Yeni linklar əlavə edəndə
- ✅ Kiçik yeni xüsusiyyət əlavə edəndə

**Nümunə**: 5 yeni akademik termin əlavə etdim → `1.2.0` → `1.3.0`

#### **PATCH (Düzəliş)** - x.x.1 → x.x.2
Kiçik düzəlişlər və təkmilləşdirmələr:
- ✅ Yazım səhvlərini düzəldəndə
- ✅ Link dəyişəndə
- ✅ Rəngləri dəyişəndə
- ✅ Kiçik mətn düzəlişləri edəndə

**Nümunə**: WhatsApp nömrəsini dəyişdim → `1.2.0` → `1.2.1`

---

## 🔧 Versiya Nömrəsini Necə Dəyişim?

### Addım 1: `config.js` faylını aç

Faylın yolu: `/home/user/webapp/public/static/config.js`

### Addım 2: Versiya nömrəsini tap

Faylın əvvəlində bu hissəni görəcəksən:

```javascript
const APP_VERSION = {
    major: 1,        // Böyük dəyişikliklər
    minor: 2,        // Yeni funksiyalar
    patch: 0,        // Kiçik düzəlişlər
    
    get full() {
        return `${this.major}.${this.minor}.${this.patch}`;
    }
};
```

### Addım 3: Uyğun nömrəni artır

**Nümunə 1**: Yeni hesablayıcı əlavə etdim (MAJOR)
```javascript
const APP_VERSION = {
    major: 2,        // 1 → 2 (artırdım)
    minor: 0,        // 0-a sıfırladım
    patch: 0,        // 0-a sıfırladım
};
```

**Nümunə 2**: 10 yeni termin əlavə etdim (MINOR)
```javascript
const APP_VERSION = {
    major: 1,        // Dəyişmədi
    minor: 3,        // 2 → 3 (artırdım)
    patch: 0,        // 0-a sıfırladım
};
```

**Nümunə 3**: Telefon nömrəsini dəyişdim (PATCH)
```javascript
const APP_VERSION = {
    major: 1,        // Dəyişmədi
    minor: 2,        // Dəyişmədi
    patch: 1,        // 0 → 1 (artırdım)
};
```

---

## 📋 Dəyişiklik Tarixçəsi (CHANGELOG)

### v1.2.0 - 2026-02-28
**Yeni Xüsusiyyətlər:**
- ✅ Yeni UniFy ikonası və splash screen əlavə edildi
- ✅ Scroll position saxlanması təkmilləşdirildi
- ✅ Config.js sistemi yaradıldı (manual redaktə üçün)
- ✅ Lüğət bölməsi dinamikləşdi
- ✅ Məlumat bölməsi dinamikləşdi
- ✅ Sürətli linklər dinamikləşdi

### v1.1.0 - 2026-02-28
**Yeni Xüsusiyyətlər:**
- ✅ "Bal Yarat" düyməsi əlavə edildi
- ✅ Davamiyyət balı düzəldildi (qayıb=0 problemi)
- ✅ Browser navigasiyası təkmilləşdirildi
- ✅ URL history dəstəyi əlavə edildi

### v1.0.0 - 2026-02-28
**İlk Versiya:**
- ✅ Semestr bal hesablama
- ✅ ÜOMG hesablama
- ✅ Kəsr pulu hesablama
- ✅ Yaş hesablayıcı
- ✅ PWA dəstəyi
- ✅ Offline işləmə

---

## 🚀 Dəyişiklik Etdikdən Sonra Nə Etməliyəm?

### 1. Faylları Yenilə
```bash
cd /home/user/webapp
cp public/index.html dist/
cp public/static/* dist/static/
```

### 2. Git Commit Et
```bash
git add .
git commit -m "v1.3.0: 5 yeni termin əlavə edildi"
git push origin main
```

### 3. Deploy Et
```bash
npm run deploy
```

---

## 💡 Faydalı Məsləhətlər

### ✅ EDİN:
- Hər dəyişiklikdən sonra versiya nömrəsini artırın
- Commit mesajına versiya nömrəsini yazın
- CHANGELOG-u yeniləyin
- Test edin!

### ❌ ETMƏYİN:
- Versiya nömrəsini azaltmayın
- Patch nömrəsini 10-dan çox artırmayın (onun əvəzinə minor artırın)
- Minor nömrəsini 10-dan çox artırmayın (onun əvəzinə major artırın)

---

## 📞 Yardım Lazımdırsa

Əgər problem yaşayırsansa və ya köməyə ehtiyacın varsa:
- WhatsApp: +994559406018
- Instagram: @desespere_etoile

---

**📌 Qeyd**: Bu fayl sizin rahatlığınız üçün yaradılıb. Versiya sistemi saytın keyfiyyətini yüksək səviyyədə saxlamağa kömək edir.
