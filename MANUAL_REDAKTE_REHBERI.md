# 📖 MANUAL REDAKTƏ RƏHBƏRİ

## 🎯 Bu Rəhbər Nədir?

Bu rəhbər sizə kodlaşdırma bilməyə ehtiyac olmadan saytın məzmununu dəyişməyi öyrədir.

**Bütün dəyişikliklər `config.js` faylında edilir!**

---

## 📂 Harada Dəyişiklik Edəcəm?

Fayl yolu: `/home/user/webapp/public/static/config.js`

Bu faylı açanda 6 əsas bölmə görəcəksən:

1. **VERSİYA MƏLUMATI** - Versiya nömrəsi
2. **LÜĞƏT** - Akademik terminlər
3. **MƏLUMAT** - FAQ və faydalı məlumatlar
4. **SÜRƏTLİ LİNKLƏR** - Faydalı linklər
5. **WHATSAPP BANNER** - Üst banner ayarları
6. **INFO MESSAGE** - (i) düyməsi mesajı

---

## 1️⃣ LÜĞƏTƏ YENİ TERMİN ƏLAVƏ ETMƏK

### Tapmalı Olduğun Bölmə:
```javascript
const DICTIONARY = [
    // Mövcud terminlər buradadır
];
```

### Yeni Termin Əlavə Et:

**ADDIM 1**: Son termindən sonra vergül qoy
**ADDIM 2**: Bu şablonu kopyala və doldur:

```javascript
{
    term: "Yeni Termin",
    definition: "Terminin izahı burada yazılır"
},
```

### ✅ Tam Nümunə:

```javascript
const DICTIONARY = [
    {
        term: "Mühazirə",
        definition: "Müəllimin keçdiyi dərs"
    },
    {
        term: "Seminar",
        definition: "Tələbələrin iştirak etdiyi müzakirə dərsi"
    },
    // YENİ TERMİN BURAYA ƏLAVƏ EDİLDİ ↓
    {
        term: "Magistratura",
        definition: "Bakalavr dərəcəsindən sonrakı təhsil pilləsi"
    },
    {
        term: "Aspirantura",
        definition: "Magistradan sonrakı elmi dərəcə təhsili"
    }
];
```

**⚠️ DİQQƏT**: Son termindən sonra vergül qoyma!

---

## 2️⃣ MƏLUMAT BÖLMƏSINƏ FAQ ƏLAVƏ ETMƏK

### Tapmalı Olduğun Bölmə:
```javascript
const INFORMATION = [
    // Mövcud məlumatlar buradadır
];
```

### Yeni Məlumat Əlavə Et:

```javascript
{
    title: "Başlıq buraya",
    content: "Məzmun buraya yazılır. İstədiyiniz qədər uzun ola bilər.",
    icon: "fa-star",          // Font Awesome ikon adı
    color: "blue"             // Rəng seçimi
},
```

### 🎨 İstifadə Edə Biləcəyiniz Rənglər:
- `yellow` - Sarı
- `red` - Qırmızı
- `blue` - Mavi
- `green` - Yaşıl
- `purple` - Bənövşəyi
- `indigo` - İndiqo
- `pink` - Çəhrayı
- `teal` - Firuzəyi

### 🎯 İstifadə Edə Biləcəyiniz İkonlar:
- `fa-star` - ⭐ Ulduz
- `fa-info-circle` - ℹ️ Info
- `fa-exclamation-circle` - ⚠️ Xəbərdarlıq
- `fa-check-circle` - ✅ Check
- `fa-graduation-cap` - 🎓 Magistr papağı
- `fa-book` - 📚 Kitab
- `fa-calculator` - 🧮 Hesablayıcı
- `fa-calendar` - 📅 Təqvim
- `fa-users` - 👥 İstifadəçilər
- `fa-lightbulb` - 💡 Lampochka

Daha çox ikon üçün: https://fontawesome.com/icons

### ✅ Tam Nümunə:

```javascript
const INFORMATION = [
    {
        title: "Əlaçı olmaq üçün",
        content: "Bütün fənnlər 91+ bal olmalıdır",
        icon: "fa-star",
        color: "yellow"
    },
    // YENİ MƏLUMAT ƏLAVƏ EDİLDİ ↓
    {
        title: "Təqaüd Almaq Üçün",
        content: "ÜOMG 81 və yuxarı olmalıdır. Təqaüd hər ay bank kartına köçürülür.",
        icon: "fa-money-bill-wave",
        color: "green"
    },
    {
        title: "İmtahana Gecikdikdə",
        content: "15 dəqiqədən çox geciksəniz imtahana buraxılmazsınız. Əvəzləmə imtahan verməlisiniz.",
        icon: "fa-clock",
        color: "red"
    }
];
```

---

## 3️⃣ YENİ LİNK ƏLAVƏ ETMƏK

### Tapmalı Olduğun Bölmə:
```javascript
const QUICK_LINKS = [
    // Mövcud linklər buradadır
];
```

### Yeni Link Əlavə Et:

```javascript
{
    title: 'Link Adı',
    url: 'https://example.com',
    icon: 'fa-link',
    color: 'blue'
},
```

### ✅ Tam Nümunə:

```javascript
const QUICK_LINKS = [
    {
        title: 'BDU Rəsmi Sayt',
        url: 'https://bsu.edu.az',
        icon: 'fa-university',
        color: 'indigo'
    },
    // YENİ LİNK ƏLAVƏ EDİLDİ ↓
    {
        title: 'BDU Kitabxana',
        url: 'https://library.bsu.edu.az',
        icon: 'fa-book',
        color: 'blue'
    },
    {
        title: 'Online Kurslar',
        url: 'https://coursera.org',
        icon: 'fa-laptop',
        color: 'purple'
    }
];
```

---

## 4️⃣ WHATSAPP BANNER DƏYİŞDİRMƏK

### Tapmalı Olduğun Bölmə:
```javascript
const WHATSAPP_BANNER = {
    enabled: true,
    phone: '994559406018',
    message: '🎓 Ən ucuz sərbəst iş hazırlanması',
    icon: 'fa-whatsapp'
};
```

### Dəyişdirə Biləcəyiniz Hissələr:

1. **Banneri Gizlətmək**:
```javascript
enabled: false,  // true → false et
```

2. **Telefon Nömrəsini Dəyişmək**:
```javascript
phone: '994501234567',  // Yeni nömrə yaz
```

3. **Mesajı Dəyişmək**:
```javascript
message: '📚 Tələbələrə yardım - 24/7',
```

---

## 5️⃣ İNFO DÜYMƏSI MESAJINI DƏYİŞDİRMƏK

### Tapmalı Olduğun Bölmə:
```javascript
const INFO_MESSAGE = {
    enabled: true,
    emoji: '💬',
    text: 'O, boşluq yaradır.'
};
```

### Dəyişdir:
```javascript
const INFO_MESSAGE = {
    enabled: true,
    emoji: '🎓',
    text: 'Bu sayt tələbələr üçün hazırlanıb!'
};
```

---

## 🚀 DƏYİŞİKLİKLƏRİ YAYINLAMAQ

Dəyişiklik etdikdən sonra bu addımları izlə:

### 1️⃣ Faylları Yenilə
```bash
cd /home/user/webapp
npm run build
```

### 2️⃣ Test Et
```bash
cd dist
python3 -m http.server 3000
```

Brauzerə get: http://localhost:3000

### 3️⃣ Git Commit Et
```bash
cd /home/user/webapp
git add .
git commit -m "Lüğətə 3 yeni termin əlavə edildi"
git push origin main
```

### 4️⃣ Cloudflare-ə Deploy Et
```bash
npm run deploy
```

---

## ⚠️ ÜMUMI SƏHVLƏR VƏ HƏLL YOLLARI

### ❌ Səhv 1: Vergül Unutmaq
```javascript
// YANLIŞDIR ❌
{
    term: "Termin 1",
    definition: "İzah 1"
}
{
    term: "Termin 2",
    definition: "İzah 2"
}

// DÜZGÜNDüR ✅
{
    term: "Termin 1",
    definition: "İzah 1"
},  // ← Vergül əlavə edildi
{
    term: "Termin 2",
    definition: "İzah 2"
}
```

### ❌ Səhv 2: Dırnaq İşarələrini Unutmaq
```javascript
// YANLIŞDIR ❌
term: Mühazirə

// DÜZGÜNDüR ✅
term: "Mühazirə"
```

### ❌ Səhv 3: Mötərizə Bağlamağı Unutmaq
```javascript
// YANLIŞDIR ❌
const DICTIONARY = [
    {
        term: "Test"
    }
// ]; unuduldu

// DÜZGÜNDüR ✅
const DICTIONARY = [
    {
        term: "Test"
    }
];
```

---

## 💡 PRO TİPLƏR

### ✅ Dəyişiklik Etməzdən Əvvəl:
1. Faylın backup-ını götür
2. Sadə bir dəyişiklik et
3. Test et
4. İşləyirsə, davam et

### ✅ Böyük Dəyişikliklər Üçün:
1. Hər dəyişiklikdən sonra test et
2. Git commit et (hər dəyişiklik üçün)
3. Problem olarsa, əvvəlki versiyaya qayıt

### ✅ Kömək Lazımdırsa:
- VERSIYA_REHBERI.md faylına bax
- GitHub-da issue aç
- WhatsApp: +994559406018

---

**📌 ƏSAS QAYDA**: Kiçik addımlarla get, hər addımda test et!

✨ Uğurlar! ✨
