/**
 * =============================================================================
 * BDU AKADEMİK HESABLAYICI - KONFİQURASİYA FAYILI
 * =============================================================================
 * 
 * Bu fayldan saytın məzmununu asanlıqla dəyişdirə bilərsiniz.
 * Kodlaşdırma bilməyə ehtiyac yoxdur!
 * 
 * VERSİYA: 1.2.0
 * YARADILMA TARİXİ: 2026-02-28
 * 
 * =============================================================================
 */

// ============= VERSİYA MƏLUMATI =============
const APP_VERSION = {
    major: 1,        // Böyük dəyişikliklər (məsələn: 1.0.0 → 2.0.0)
    minor: 2,        // Yeni funksiyalar (məsələn: 1.1.0 → 1.2.0)
    patch: 0,        // Kiçik düzəlişlər (məsələn: 1.1.0 → 1.1.1)
    
    // Tam versiya nömrəsini göstərir
    get full() {
        return `${this.major}.${this.minor}.${this.patch}`;
    }
};

// ============= LÜĞƏT - Akademik terminlər =============
const DICTIONARY = [
    {
        term: "Mühazirə",
        definition: "Müəllimin keçdiyi dərs"
    },
    {
        term: "Seminar",
        definition: "Tələbələrin iştirak etdiyi müzakirə dərsi"
    },
    {
        term: "Kollekvium",
        definition: "Ara imtahan, kiçik test"
    },
    {
        term: "ÜOMG",
        definition: "Ümumi Orta Məzun Göstəricisi - tələbənin bütün fənlər üzrə orta balı"
    },
    {
        term: "Kredit",
        definition: "Fənnin çəkisi və əhəmiyyətini göstərən ədəd"
    }
    // Buraya yeni terminlər əlavə edə bilərsiniz:
    // {
    //     term: "Yeni termin",
    //     definition: "Terminin izahı"
    // },
];

// ============= MƏLUMAT - FAQ və faydalı məlumatlar =============
const INFORMATION = [
    {
        title: "Əlaçı olmaq üçün",
        content: "Bütün fənnlər 91+ bal olmalıdır",
        icon: "fa-star",
        color: "yellow"
    },
    {
        title: "Kəsr (25%) İmtahan",
        content: "Fənndən 26-35 bal alanda kəsr pulu ödəyərək imtahana girə bilərsiniz",
        icon: "fa-exclamation-circle",
        color: "red"
    },
    {
        title: "Semestr Balı",
        content: "Maksimum 50 bal toplanır: Seminar+Kollekvium (30 bal), Davamiyyət (10 bal), Sərbəst iş (10 bal)",
        icon: "fa-calculator",
        color: "blue"
    },
    {
        title: "İmtahan Balı",
        content: "İmtahandan maksimum 50 bal almaq olar. Semestr və imtahan balı cəmlənir (100 bal)",
        icon: "fa-file-alt",
        color: "green"
    }
    // Buraya yeni məlumatlar əlavə edə bilərsiniz:
    // {
    //     title: "Məlumat başlığı",
    //     content: "Məlumatın məzmunu",
    //     icon: "fa-info-circle",  // Font Awesome ikon adı
    //     color: "purple"          // Rəng: yellow, red, blue, green, purple, indigo
    // },
];

// ============= SÜRƏTLİ LİNKLƏR =============
const QUICK_LINKS = [
    {
        title: 'BDU Rəsmi Sayt',
        url: 'https://bsu.edu.az',
        icon: 'fa-university',
        color: 'indigo'
    },
    {
        title: 'SemsLogin (Akademik Portal)',
        url: 'https://share.google/7ljpthpUCiOMOeS82',
        icon: 'fa-graduation-cap',
        color: 'green'
    },
    {
        title: 'BDU WhatsApp Kanalı',
        url: 'https://whatsapp.com/channel/0029Va85Ls85q08WyYoGeJ3r',
        icon: 'fa-whatsapp',
        color: 'green'
    },
    {
        title: 'BDU Instagram',
        url: 'https://www.instagram.com/bdu_eduaz',
        icon: 'fa-instagram',
        color: 'pink'
    },
    {
        title: 'BDU Telegram',
        url: 'https://t.me/bdu_eduaz',
        icon: 'fa-telegram',
        color: 'blue'
    },
    {
        title: 'Sayt Sahibinin Instagram',
        url: 'https://www.instagram.com/desespere_etoile',
        icon: 'fa-user',
        color: 'purple'
    },
    {
        title: 'Tələbə Chat Qrupu',
        url: 'https://t.me/+WUKxtnDjo2E5YTcy',
        icon: 'fa-comments',
        color: 'teal'
    }
    // Buraya yeni linklər əlavə edə bilərsiniz:
    // {
    //     title: 'Link başlığı',
    //     url: 'https://example.com',
    //     icon: 'fa-link',        // Font Awesome ikon adı
    //     color: 'blue'           // Rəng: indigo, green, pink, blue, purple, teal, red
    // },
];

// ============= WHATSAPP ELAN BANNER =============
const WHATSAPP_BANNER = {
    enabled: true,                           // true = göstər, false = gizlət
    phone: '994559406018',                   // Telefon nömrəsi
    message: '🎓 Ən ucuz sərbəst iş hazırlanması',  // Banner mətni
    icon: 'fa-whatsapp'                      // İkon
};

// ============= INFO BUTTON MESAJI =============
const INFO_MESSAGE = {
    enabled: true,                           // true = göstər, false = gizlət
    emoji: '💬',
    text: 'O, boşluq yaradır.'
};

// ============= SAYT MƏTNI VƏ BAŞLIQLAR =============
const SITE_TEXT = {
    mainTitle: 'BDU Akademik Hesablayıcı',
    mainSubtitle: 'Bütün akademik hesablamalarınız bir yerdə',
    
    // Səhifə başlıqları
    pages: {
        semestr: {
            title: 'Semestr Balı Hesablama',
            description: 'Seminar, kollekvium, davamiyyət və sərbəst iş ballarını hesablayın'
        },
        uomg: {
            title: 'ÜOMG Hesablama',
            description: 'Kredit və ballarınıza əsasən ÜOMG-nizi hesablayın'
        },
        kesrPul: {
            title: '25% İmtahan (Kəsr) Pulu',
            description: '25% imtahan (kəsr) pulunu hesablayın'
        },
        yas: {
            title: 'Yaş Hesablayıcı',
            description: 'Yaşınızı və ad gününüzə qalan günləri öyrənin'
        },
        luget: {
            title: 'Akademik Lüğət',
            description: 'Akademik terminlərin izahları'
        },
        melumat: {
            title: 'Faydalı Məlumatlar',
            description: 'Tez-tez verilən suallar və cavablar'
        },
        linkler: {
            title: 'Sürətli Linklər',
            description: 'BDU və faydalı resurslara sürətli keçid'
        }
    }
};

// ============= RƏNGLƏR =============
const COLORS = {
    primary: '#4F46E5',      // Əsas rəng (indigo)
    secondary: '#7C3AED',    // İkinci rəng (purple)
    success: '#10B981',      // Uğur (green)
    danger: '#EF4444',       // Təhlükə (red)
    warning: '#F59E0B',      // Xəbərdarlıq (yellow)
    info: '#3B82F6'          // Məlumat (blue)
};

// =============================================================================
// Export edilir (app.js-də istifadə olunur)
// =============================================================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        APP_VERSION,
        DICTIONARY,
        INFORMATION,
        QUICK_LINKS,
        WHATSAPP_BANNER,
        INFO_MESSAGE,
        SITE_TEXT,
        COLORS
    };
}
