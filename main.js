// Theme Switch
function initThemeSwitch() {
    const themeSwitch = document.getElementById('themeSwitch');
    
    // Set initial theme
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    // Get saved theme or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (prefersDarkScheme.matches) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    // Theme switch click handler
    if (themeSwitch) {
        themeSwitch.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
        });
    }
}

// Mobile Menu
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });
    }

    if (mobileMenuClose && mobileMenu) {
        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    }
}

// Typing Effect
function typeText(element, callback) {
    const text = element.getAttribute('data-text');
    element.style.visibility = 'visible';
    element.textContent = '';
    element.classList.add('typing');

    let charIndex = 0;
    const typingSpeed = 50;

    function type() {
        if (charIndex < text.length) {
            element.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            element.classList.remove('typing');
            element.classList.add('typed');
            if (callback) callback();
        }
    }

    type();
}

function initTypewriterEffect() {
    const elements = document.querySelectorAll('.typing-text');
    const elementsArray = Array.from(elements);

    function typeNext(index) {
        if (index < elementsArray.length) {
            typeText(elementsArray[index], () => {
                setTimeout(() => typeNext(index + 1), 200);
            });
        }
    }

    typeNext(0);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initThemeSwitch();
    initMobileMenu();
    initTypewriterEffect();
});
