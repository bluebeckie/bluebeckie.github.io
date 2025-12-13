// SEO Mandate: The title and meta description must also be switched.
const pageTitle = {
    en: "Beckie Fang | Visionary AI & Digital Transformation Consultant",
    zh: "方翠鴻 (Beckie) | AI與數位轉型願景領導者",
};
const metaDesc = {
    en: "Senior consultant specializing in corporate AI strategy, digital transformation, and executive advisory. Proven 75% efficiency gains and IDC Award Winner.",
    zh: "資深顧問，專精於企業AI策略、數位轉型和高階主管諮詢。實證75%效率提升，IDC大獎得主。",
};

const content = {
    en: {
        home: "Home", expertise: "Expertise", caseStudies: "Case Studies", contact: "Contact",
        headline: "Visionary Leadership for AI-Powered Business Acceleration and Sustainable Growth.",
        subHeadline: "Strategically incorporating new technologies, like AI, to accelerate business goals (cost reduction) and cultivate the growth mindset necessary for enduring cultural transformation.",
        ctaButton: "Get in Touch",
        // UPDATED English CTA Prompt (kept the same as original was fine)
        ctaPrompt: "Initiate a confidential conversation about corporate AI strategy, digital transformation, or executive advisory.",
        ctaContact: "Let's Discuss Your Next Transformation.", // Contact form header
        keyCredentialsTitle: "Key Credentials",
        contactDescription: "Initiate a confidential conversation about corporate AI strategy, digital transformation, or executive advisory.",
        proofPoints: [
            { title: "AI & Cost Reduction", text: "Reduced human work for critical processes by 75% (from 4 months to 1 month) through digital workflow and AI-powered automation." },
            { title: "Digital Transformation", text: "Led legacy CRM to cloud-native microservices migration, winning the 2023 IDC Future Enterprise Award." },
            { title: "Strategic Governance", text: "Established enterprise-wide Agile operating models and standardized SDLC frameworks." }
        ],
        aboutTitle: "From Technical Mastery to Corporate Transformation.",
        aboutBody: "My career arc began with deep technical mastery in essential domains like front-end development, SEO, and web performance optimization. This foundation rapidly evolved into full-stack development ecosystem ownership, where I led high-impact, global initiatives such as major platform rebranding deliveries with zero downtime. I have since strategically expanded my focus to the corporate transformation ecosystem, leading enterprises through successful digital transformations, establishing enterprise-wide Agile operating models, and leveraging new technology, including AI, for business acceleration, security, and efficiency.",
        keyCredentials: [
            "2023 IDC Future Enterprise Award",
            "AI & Gemini Skill Badges (Google)",
            "Certified ScrumMaster (CSM)",
            "Microsoft Certified: Azure Fundamentals (AZ-900)"
        ],
        caseStudyTitle: "Featured Case Study: Award-Winning CRM Modernization",
        caseStudySub: "A strategic transformation from monolithic legacy systems to a cloud-native microservices ecosystem.",
        caseStudyMetricLabel: "Efficiency Gain",
        caseStudyMetricDescription: "Reduction in human work for critical processes (4 months down to 1 month).",
        // Case Study Details for translation
        caseStudyDetails: [
            {
                title: "Challenge: Operational Bottlenecks",
                body: "Four months of human work was required for key organizational processes, hindering agility and creating high labor costs within a rigid, legacy monolithic CRM."
            },
            {
                title: "Solution: Visionary Transformation",
                body: "Led the complete pivot to a cloud-native microservices ecosystem on D365, complemented by redesigned digital workflows and robust automation."
            },
            {
                title: "Impact: Industry Validation & ROI",
                // Using span for styling since innerHTML is used
                body: "Resulted in a validated <span class='font-bold'>75% efficiency gain</span> and industry recognition by winning the <span class='font-bold'>2023 IDC Future Enterprise Award</span>, proving successful strategic execution and measurable ROI."
            }
        ],
        viewAll: "View All Case Studies",
        formName: "Name", formCompany: "Company", formEmail: "Email", formMessage: "Message", formSubmit: "Send Message",
        // Updated copyright text to use a {year} placeholder
        footerCopyright: "© {year} Beckie Fang. All rights reserved.",
    },
    zh: {
        home: "首頁", expertise: "專業領域", caseStudies: "成果案例", contact: "聯繫洽談",
        headline: "願景領導力：驅動 AI 商業加速與永續成長",
        subHeadline: "策略性地整合 AI 等新技術，加速業務目標達成（成本縮減），並培養實現持久文化轉型的成長思維。",
        ctaButton: "聯繫洽談",
        // *** UPDATED CHINESE CTA PROMPT ***
        ctaPrompt: "開啟關於企業 AI 策略、數位轉型或高階諮詢的對話。",
        ctaContact: "討論您的下一波轉型策略。", // Contact form header translation
        keyCredentialsTitle: "專業認證",
        contactDescription: "開啟關於企業 AI 策略、數位轉型或高階諮詢的對話。",
        proofPoints: [
            { title: "AI 與成本縮減", text: "透過數位工作流程和 AI 賦能的自動化，將關鍵流程所需的人工工時減少 75%（從 4 個月縮短至 1 個月）。" },
            { title: "數位轉型成就", text: "主導舊有 CRM 系統轉換為雲原生微服務，榮獲 2023 IDC 未來企業大獎。" },
            { title: "策略治理", text: "建立企業級敏捷運營模式和標準化 SDLC 框架，整合團隊、流程和目標。" }
        ],
        aboutTitle: "從技術專精到企業轉型。",
        aboutBody: "我的職涯始於前端開發、SEO 和網頁性能優化等關鍵領域的深厚技術專精。此基礎迅速發展為全端開發生態系統的所有權，主導了諸如重要平台品牌重塑等高影響力、零停機的全球性專案。此後，我策略性地將重心擴展到企業轉型生態系統，引導企業成功實施數位轉型、建立企業級敏捷運營模式，並利用包括 AI 在內的新技術來加速業務、確保安全與提升效率。",
        keyCredentials: [
            "2023 IDC 未來企業大獎 (Future Enterprise Award)",
            "AI 與 Gemini 技能徽章 (Google)",
            "認證 Scrum Master (CSM)",
            "Microsoft 認證：Azure 基礎知識 (AZ-900)"
        ],
        caseStudyTitle: "精選案例：獲獎的 CRM 現代化專案",
        caseStudySub: "一項從單體式遺留系統到雲原生微服務生態系統的策略性轉型。",
        caseStudyMetricLabel: "效率提升",
        caseStudyMetricDescription: "關鍵流程人力縮減 75%: 從 4 個月到 1 個月。",
        // Case Study Details for translation
        caseStudyDetails: [
            {
                title: "挑戰：營運瓶頸",
                body: "關鍵組織流程需耗費四個月的人工工時，降低敏捷性，並在僵化的傳統單體式 CRM 中造成高昂的人力成本。"
            },
            {
                title: "解決方案：前瞻性轉型",
                body: "主導全面轉向 D365 雲原生微服務生態系統，輔以重新設計的數位工作流程和強大的自動化。"
            },
            {
                title: "影響：產業驗證與投資回報",
                // Using span for styling since innerHTML is used
                body: "實現了經驗證的 <span class='font-bold'>75% 效率提升</span>，並透過贏得 <span class='font-bold'>2023 IDC 未來企業大獎</span> 獲得業界認可，證明了成功的策略執行與可衡量的投資回報。"
            }
        ],
        viewAll: "查看所有案例",
        formName: "姓名", formCompany: "公司", formEmail: "電子郵件", formMessage: "訊息", formSubmit: "發送訊息",
        // Updated copyright text to use a {year} placeholder
        footerCopyright: "© {year} Beckie 版權所有。",
    }
};

let currentLang = 'en';

// DOM Cache for performance optimization
const domCache = {};

// Helper function to get and cache DOM elements
function getElement(id) {
    if (!domCache[id]) {
        domCache[id] = document.getElementById(id);
    }
    return domCache[id];
}

// Helper function to get and cache DOM elements by selector
function getElements(selector) {
    if (!domCache[selector]) {
        domCache[selector] = document.querySelectorAll(selector);
    }
    return domCache[selector];
}

// Function to set document language attributes and content based on currentLang
function updateContent() {
    const data = content[currentLang];
    const currentYear = new Date().getFullYear();

    // 1. Update Title and Meta Description (SEO Mandate)
    document.title = pageTitle[currentLang];
    if (!domCache.metaDesc) {
        domCache.metaDesc = document.querySelector('meta[name="description"]');
    }
    domCache.metaDesc.setAttribute('content', metaDesc[currentLang]);
    document.documentElement.lang = currentLang;

    // 2. Update Navigation
    getElement('nav-home').textContent = data.home;
    getElement('nav-expertise').textContent = data.expertise;
    getElement('nav-caseStudies').textContent = data.caseStudies;
    getElement('nav-contact').textContent = data.contact;

    // 3. Update Hero Section
    getElement('h1-headline').textContent = data.headline;
    getElement('sub-headline').textContent = data.subHeadline;
    getElement('cta-button').textContent = data.ctaButton;
    getElement('cta-prompt').textContent = data.ctaPrompt;

    // 4. Update Proof Points
    const ppTitles = getElements('[data-proof-title]');
    const ppTexts = getElements('[data-proof-text]');
    data.proofPoints.forEach((p, i) => {
        if (ppTitles[i]) ppTitles[i].textContent = p.title;
        if (ppTexts[i]) ppTexts[i].textContent = p.text;
    });

    // 5. Update About Section
    getElement('about-title').textContent = data.aboutTitle;
    getElement('about-body').textContent = data.aboutBody;

    // 6. Update Key Credentials List
    const keyCredElements = getElements('[data-credential]');
    data.keyCredentials.forEach((cred, i) => {
        if (keyCredElements[i]) keyCredElements[i].textContent = cred;
    });

    // 6b. Update Key Credentials Title
    getElement('key-credentials-title').textContent = data.keyCredentialsTitle;

    // 7. Update Case Study
    getElement('cs-title').textContent = data.caseStudyTitle;
    getElement('cs-sub').textContent = data.caseStudySub;
    getElement('cs-metric-label').textContent = data.caseStudyMetricLabel;
    getElement('cs-metric-description').textContent = data.caseStudyMetricDescription;
    getElement('cs-view-all').textContent = data.viewAll;

    // 8. Update Case Study Details
    const csDetails = data.caseStudyDetails;
    getElement('cs-detail-1-title').textContent = csDetails[0].title;
    getElement('cs-detail-1-body').innerHTML = csDetails[0].body;
    getElement('cs-detail-2-title').textContent = csDetails[1].title;
    getElement('cs-detail-2-body').innerHTML = csDetails[1].body;
    getElement('cs-detail-3-title').textContent = csDetails[2].title;
    getElement('cs-detail-3-body').innerHTML = csDetails[2].body;

    // 9. Update Contact Form
    getElement('cta-prompt-contact').textContent = data.ctaContact;
    getElement('contact-description').textContent = data.contactDescription;
    getElement('form-name-label').textContent = data.formName;
    getElement('form-company-label').textContent = data.formCompany;
    getElement('form-email-label').textContent = data.formEmail;
    getElement('form-message-label').textContent = data.formMessage;
    getElement('form-submit-btn').textContent = data.formSubmit;

    // 10. Update Footer
    let footerText = data.footerCopyright.replace('{year}', currentYear);
    getElement('footer-copyright').textContent = footerText;

    // 11. Update Language Toggle Visuals
    getElement('lang-en').classList.remove('active');
    getElement('lang-zh').classList.remove('active');
    getElement(`lang-${currentLang}`).classList.add('active');
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('beckie_lang', lang);
    updateContent();
}

// Initialize language on load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('beckie_lang');
    if (savedLang && content[savedLang]) {
        currentLang = savedLang;
    }
    updateContent();
});

// Placeholder for Contact Form submission
function handleFormSubmit(event) {
    event.preventDefault();
    // In a real application, this would send data to a backend service.
    const name = getElement('form-name').value;
    const thankYouMessage = currentLang === 'en'
        ? `Thank you, ${name}! Your inquiry has been noted. I will respond shortly.`
        : `感謝您，${name}！您的詢問已記錄。我將盡快回覆您。`;

    // Using alert() for simplicity in this sandbox environment as mandated for non-modal messages.
    alert(thankYouMessage);
    event.target.reset();
}
