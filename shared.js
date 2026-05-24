// --- 1. SETTINGS & LOCAL STORAGE (Fixes Dark Mode & Arabic) ---
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("site_theme") || "dark";
    const savedLang = localStorage.getItem("site_lang") || "en";

    applyTheme(savedTheme);
    applyLanguage(savedLang);
});

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
}

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("site_theme", theme);
    
    const themeBtn = document.getElementById("themeBtn");
    if (themeBtn) {
        themeBtn.textContent = theme === "dark" ? "☀️" : "🌙";
    }
}

function toggleLang() {
    const currentLang = document.documentElement.getAttribute("lang");
    const newLang = currentLang === "en" ? "ar" : "en";
    applyLanguage(newLang);
}

function applyLanguage(lang) {
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    localStorage.setItem("site_lang", lang);
    
    const langBtn = document.getElementById("langBtn");
    if (langBtn) {
        langBtn.textContent = lang === "en" ? "AR" : "EN";
    }

    // Update all text on the page instantly
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key]; 
        }
    });
}


// --- 2. HELPER FUNCTIONS (Required for your calculators to work) ---
function $s(id) { return document.getElementById(id); }
function usd(val) { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val); }
function num(val, dec=2) { return Number(val).toFixed(dec); }
function showErr(id, show=true) { 
    const el = $s(id);
    if(el) el.style.display = show ? 'block' : 'none'; 
}
function showRes(id, show=true) { 
    const el = $s(id);
    if(el) el.style.display = show ? 'block' : 'none'; 
}
function t(key) {
    const lang = localStorage.getItem("site_lang") || "en";
    return translations[lang] && translations[lang][key] ? translations[lang][key] : key;
}


// --- 3. TRANSLATION DICTIONARY ---
const translations = {
    "en": {
        "nav_home": "🏠 Home", "nav_loan": "💰 Loan", "nav_profit": "📈 Profit", "nav_roi": "🎯 ROI",
        "nav_bmi": "⚖️ BMI", "nav_age": "🎂 Age", "nav_tax": "🧾 Tax", "nav_tip": "💡 Tip", "nav_pct": "% Percent",
        "hero_badge": "✦ Free · No sign-up · Instant results",
        "hero_h1a": "Free Online", "hero_h1b": "Calculator Tools",
        "hero_p": "Fast, accurate calculators for your everyday financial and health decisions. No sign-up needed.",
        "loan_title": "Loan Calculator", "loan_desc": "Calculate monthly payments for mortgage, personal, or auto loans.",
        "profit_title": "Profit Calculator", "profit_desc": "Find gross profit, net profit, and margins in seconds.",
        "roi_title": "ROI Calculator", "roi_desc": "Measure the return on any investment with annualized ROI.",
        "bmi_title": "BMI Calculator", "bmi_desc": "Check your Body Mass Index and healthy weight range.",
        "age_title": "Age Calculator", "age_desc": "Find your exact age in years, months, and days.",
        "tax_title": "Tax Calculator", "tax_desc": "US federal income tax and take-home pay (2024 brackets).",
        "tip_title": "Tip Calculator", "tip_desc": "Split the bill and calculate tip per person instantly.",
        "pct_title": "Percentage Calculator", "pct_desc": "Three powerful percentage tools in one place.",
        "open": "Open →", "ad": "Advertisement",
        "nav_home_plain": "Home", "nav_loan_plain": "Loan", "nav_profit_plain": "Profit", "nav_roi_plain": "ROI",
        "nav_bmi_plain": "BMI", "nav_age_plain": "Age", "nav_tax_plain": "Tax", "nav_tip_plain": "Tip", "nav_pct_plain": "Percent",
        "footer_copy": "Results are for informational purposes only. Consult a qualified professional for financial or medical decisions. © 2025 ProCalc Hub.",
        
        // Calculator specific text
        "loan_mortgage": "Mortgage", "loan_personal": "Personal", "loan_auto": "Auto", "unit_yrs": "years",
        "amort_mo": "Month", "amort_payment": "Payment", "amort_principal": "Principal", "amort_interest": "Interest", "amort_balance": "Balance",
        "age_years_unit": "Years"
    },
    "ar": {
        "nav_home": "🏠 الرئيسية", "nav_loan": "💰 القرض", "nav_profit": "📈 الربح", "nav_roi": "🎯 العائد",
        "nav_bmi": "⚖️ كتلة الجسم", "nav_age": "🎂 العمر", "nav_tax": "🧾 الضرائب", "nav_tip": "💡 البقشيش", "nav_pct": "% النسبة",
        "hero_badge": "✦ مجاني · بدون تسجيل · نتائج فورية",
        "hero_h1a": "أدوات حاسبة", "hero_h1b": "مجانية عبر الإنترنت",
        "hero_p": "حاسبات سريعة ودقيقة لقراراتك المالية والصحية اليومية. لا حاجة للتسجيل.",
        "loan_title": "حاسبة القروض", "loan_desc": "احسب الدفعات الشهرية للرهن العقاري أو القروض الشخصية أو قروض السيارات.",
        "profit_title": "حاسبة الأرباح", "profit_desc": "احسب إجمالي الربح وصافي الربح وهوامش الربح في ثوانٍ.",
        "roi_title": "حاسبة العائد", "roi_desc": "قس العائد على أي استثمار مع العائد السنوي.",
        "bmi_title": "حاسبة كتلة الجسم", "bmi_desc": "تحقق من مؤشر كتلة الجسم ونطاق الوزن الصحي.",
        "age_title": "حاسبة العمر", "age_desc": "احسب عمرك الدقيق بالسنوات والأشهر والأيام.",
        "tax_title": "حاسبة الضرائب", "tax_desc": "ضريبة الدخل الفيدرالية وصافي الراتب (شرائح 2024).",
        "tip_title": "حاسبة البقشيش", "tip_desc": "قسّم الفاتورة واحسب البقشيش لكل شخص فوراً.",
        "pct_title": "حاسبة النسب", "pct_desc": "ثلاث أدوات قوية للنسب المئوية في مكان واحد.",
        "open": "افتح ←", "ad": "إعلان",
        "nav_home_plain": "الرئيسية", "nav_loan_plain": "القرض", "nav_profit_plain": "الربح", "nav_roi_plain": "العائد",
        "nav_bmi_plain": "كتلة الجسم", "nav_age_plain": "العمر", "nav_tax_plain": "الضرائب", "nav_tip_plain": "البقشيش", "nav_pct_plain": "النسبة",
        "footer_copy": "النتائج لأغراض إعلامية فقط. استشر محترفًا مؤهلًا للقرارات المالية أو الطبية. © 2025 ProCalc Hub.",
        
        // Calculator specific text
        "loan_mortgage": "رهن عقاري", "loan_personal": "شخصي", "loan_auto": "سيارة", "unit_yrs": "سنوات",
        "amort_mo": "شهر", "amort_payment": "دفعة", "amort_principal": "أصل المبلغ", "amort_interest": "فائدة", "amort_balance": "الرصيد",
        "age_years_unit": "سنوات"
    }
};

