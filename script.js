// Language Switching
const languageSelect = document.getElementById('language-select');
let currentLanguage = 'zh';

// Language translations
const translations = {
    zh: {
        'nav-home': '首页',
        'nav-services': '服务',
        'nav-about': '关于我们',
        'nav-contact': '联系',
        'hero-title': '专业医疗管家服务',
        'hero-subtitle': '连接全球顶尖医疗资源，为您提供安全、专业、高效的生命通道',
        'btn-get-started': '开始使用',
        'btn-learn-more': '了解更多',
        'stat-years': '年稳健运营',
        'stat-team': '医疗专家团队',
        'stat-consultations': '月度咨询人次',
        'stat-satisfaction': '客户满意度',
        'services-title': '我们的服务',
        'services-subtitle': '提供全方位的医疗管家服务，确保您的健康得到最好的保障',
        'service-accompaniment': '专业医疗陪诊',
        'service-accompaniment-desc': '持证医疗翻译口译师提供专业的陪诊服务，消除语言障碍',
        'service-coordination': '跨国医疗协调',
        'service-coordination-desc': '连接加拿大、英国、中国的医疗资源，提供无缝的跨国医疗服务',
        'service-triage': '行前分诊评估',
        'service-triage-desc': '专业的医疗团队提供精准的行前分诊，确保医疗方案的准确性',
        'service-privacy': '隐私保护',
        'service-privacy-desc': '严格遵循跨国法律与隐私合规标准，确保信息安全',
        'about-title': '为什么选择 MQlinic？',
        'about-description': 'MQ 由牛津大学、伦敦大学学院和不列颠哥伦比亚大学三所大学的医学精英创办，致力于以病理学与精准医疗的专业视角，为求医者构建通往顶尖医疗资源的安全、专业、高效的生命通道。',
        'feature-research': '科研级医学背景的创始团队',
        'feature-identification': '精准识别重症患者能力',
        'feature-response': '2-4小时驻地医疗响应',
        'feature-reputation': '零差评服务记录',
        'contact-title': '联系我们',
        'contact-subtitle': '立即开始您的医疗管家服务之旅',
        'btn-consult': '立即咨询',
        'btn-book': '预约服务',
        'footer-services': '服务',
        'footer-company': '公司',
        'footer-follow': '关注我们',
        'footer-accompaniment': '医疗陪诊',
        'footer-coordination': '跨国协调',
        'footer-triage': '分诊评估',
        'footer-about': '关于我们',
        'footer-team': '团队介绍',
        'footer-contact': '联系我们',
        'footer-rights': '保留所有权利'
    },
    'zh-tw': {
        'nav-home': '首頁',
        'nav-services': '服務',
        'nav-about': '關於我們',
        'nav-contact': '聯絡',
        'hero-title': '專業醫療管家服務',
        'hero-subtitle': '連接全球頂尖醫療資源，為您提供安全、專業、高效的生命通道',
        'btn-get-started': '開始使用',
        'btn-learn-more': '了解更多',
        'stat-years': '年穩健運營',
        'stat-team': '醫療專家團隊',
        'stat-consultations': '月度諮詢人次',
        'stat-satisfaction': '客戶滿意度',
        'services-title': '我們的服務',
        'services-subtitle': '提供全方位的醫療管家服務，確保您的健康得到最好的保障',
        'service-accompaniment': '專業醫療陪診',
        'service-accompaniment-desc': '持證醫療翻譯口譯師提供專業的陪診服務，消除語言障礙',
        'service-coordination': '跨國醫療協調',
        'service-coordination-desc': '連接加拿大、英國、中國的醫療資源，提供無縫的跨國醫療服務',
        'service-triage': '行前分診評估',
        'service-triage-desc': '專業的醫療團隊提供精準的行前分診，確保醫療方案的準確性',
        'service-privacy': '隱私保護',
        'service-privacy-desc': '嚴格遵循跨國法律與隱私合規標準，確保資訊安全',
        'about-title': '為什麼選擇 MQlinic？',
        'about-description': 'MQ 由牛津大學、倫敦大學學院和不列顛哥倫比亞大學三所大學的醫學精英創辦，致力於以病理學與精準醫療的專業視角，為求醫者構建通往頂尖醫療資源的安全、專業、高效的生命通道。',
        'feature-research': '科研級醫學背景的創始團隊',
        'feature-identification': '精準識別重症患者能力',
        'feature-response': '2-4小時駐地醫療響應',
        'feature-reputation': '零差評服務記錄',
        'contact-title': '聯絡我們',
        'contact-subtitle': '立即開始您的醫療管家服務之旅',
        'btn-consult': '立即諮詢',
        'btn-book': '預約服務',
        'footer-services': '服務',
        'footer-company': '公司',
        'footer-follow': '關注我們',
        'footer-accompaniment': '醫療陪診',
        'footer-coordination': '跨國協調',
        'footer-triage': '分診評估',
        'footer-about': '關於我們',
        'footer-team': '團隊介紹',
        'footer-contact': '聯絡我們',
        'footer-rights': '保留所有權利'
    },
    en: {
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-about': 'About',
        'nav-contact': 'Contact',
        'hero-title': 'Professional Medical Concierge Services',
        'hero-subtitle': 'Connecting global top-tier medical resources, providing safe, professional, and efficient healthcare access',
        'btn-get-started': 'Get Started',
        'btn-learn-more': 'Learn More',
        'stat-years': 'Years of Stable Operation',
        'stat-team': 'Medical Expert Team',
        'stat-consultations': 'Monthly Consultations',
        'stat-satisfaction': 'Client Satisfaction',
        'services-title': 'Our Services',
        'services-subtitle': 'Comprehensive medical concierge services to ensure your health receives the best protection',
        'service-accompaniment': 'Professional Medical Accompaniment',
        'service-accompaniment-desc': 'Certified medical interpreters provide professional accompaniment services, eliminating language barriers',
        'service-coordination': 'Cross-border Medical Coordination',
        'service-coordination-desc': 'Connecting medical resources in Canada, UK, and China for seamless cross-border medical services',
        'service-triage': 'Pre-triage Assessment',
        'service-triage-desc': 'Professional medical team provides accurate pre-triage to ensure precision of medical plans',
        'service-privacy': 'Privacy Protection',
        'service-privacy-desc': 'Strictly follow cross-border legal and privacy compliance standards to ensure information security',
        'about-title': 'Why Choose MQlinic?',
        'about-description': 'MQ was founded by medical elites from Oxford University, University College London, and University of British Columbia, dedicated to building safe, professional, and efficient access to top-tier medical resources from the professional perspective of pathology and precision medicine.',
        'feature-research': 'Research-level medical background founding team',
        'feature-identification': 'Ability to accurately identify critically ill patients',
        'feature-response': '2-4 hour local medical response',
        'feature-reputation': 'Zero negative review service record',
        'contact-title': 'Contact Us',
        'contact-subtitle': 'Start your medical concierge service journey now',
        'btn-consult': 'Consult Now',
        'btn-book': 'Book Service',
        'footer-services': 'Services',
        'footer-company': 'Company',
        'footer-follow': 'Follow Us',
        'footer-accompaniment': 'Medical Accompaniment',
        'footer-coordination': 'Cross-border Coordination',
        'footer-triage': 'Triage Assessment',
        'footer-about': 'About Us',
        'footer-team': 'Team',
        'footer-contact': 'Contact',
        'footer-rights': 'All rights reserved'
    }
};

// Initialize language switching
function initLanguageSwitcher() {
    languageSelect.addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        updateLanguage();
    });
}

// Update language content
function updateLanguage() {
    // Update all elements with data attributes
    document.querySelectorAll('[data-zh][data-en][data-zh-tw]').forEach(element => {
        const text = element.getAttribute(`data-${currentLanguage}`);
        if (element.tagName === 'INPUT' || element.tagName === 'BUTTON') {
            element.textContent = text;
        } else {
            element.textContent = text;
        }
    });
    
    // Update HTML lang attribute
    if (currentLanguage === 'zh-tw') {
        document.documentElement.lang = 'zh-TW';
    } else if (currentLanguage === 'zh') {
        document.documentElement.lang = 'zh-CN';
    } else {
        document.documentElement.lang = 'en';
    }
}

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

function initMobileMenu() {
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('mobile-active');
            mobileMenuToggle.classList.toggle('active');
        });
    }
}

// Smooth Scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in class to elements
    const elementsToAnimate = document.querySelectorAll('.service-card, .stat-item, .feature-item');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
}

// Counter animation for statistics
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (element.textContent.includes('+') ? '+' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + (element.textContent.includes('+') ? '+' : '');
        }
    }, 16);
}

// Initialize counter animations
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                const text = entry.target.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                animateCounter(entry.target, number);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Form validation (for future contact forms)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
    initMobileMenu();
    initSmoothScrolling();
    initScrollAnimations();
    initNavbarScroll();
    initCounters();
    
    // Add loading animation
    document.body.classList.add('loaded');
});

// Add CSS for mobile menu
const mobileMenuCSS = `
@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        top: 80px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 80px);
        background: white;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 40px 20px;
        transition: left 0.3s ease;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }
    
    .nav-menu.mobile-active {
        left: 0;
    }
    
    .nav-link {
        font-size: 18px;
        padding: 15px 0;
        width: 100%;
        text-align: center;
    }
    
    .mobile-menu-toggle.active {
        color: var(--primary-green);
    }
}
`;

// Inject mobile menu CSS
const style = document.createElement('style');
style.textContent = mobileMenuCSS;
document.head.appendChild(style);

// Loading animation CSS
const loadingCSS = `
body {
    opacity: 0;
    transition: opacity 0.5s ease;
}

body.loaded {
    opacity: 1;
}
`;

const loadingStyle = document.createElement('style');
loadingStyle.textContent = loadingCSS;
document.head.appendChild(loadingStyle);
