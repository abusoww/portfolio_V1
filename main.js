// Theme Switch
function initThemeSwitch() {
    const themeSwitch = document.getElementById('themeSwitch');
    const body = document.body;
    
    if (!themeSwitch) {
        console.error('Theme switch button not found');
        return;
    }
    
    // Force light theme on initial load
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    
    // Function to set theme
    function setTheme(isDark) {
        console.log('Setting theme:', isDark ? 'dark' : 'light');
        if (isDark) {
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
        } else {
            body.classList.add('light-theme');
            body.classList.remove('dark-theme');
        }
        try {
            localStorage.setItem('darkTheme', isDark);
        } catch (e) {
            console.log('Could not save theme preference');
        }
    }

    // Function to load saved theme
    function loadSavedTheme() {
        try {
            const savedTheme = localStorage.getItem('darkTheme');
            // Only apply dark theme if explicitly saved as true
            if (savedTheme === 'true') {
                setTheme(true);
            }
        } catch (e) {
            // If localStorage fails, stay in light theme
            setTheme(false);
        }
    }

    // Load saved theme after forcing light theme
    loadSavedTheme();

    // Theme switch event listener
    themeSwitch.onclick = (e) => {
        e.preventDefault();
        const isDark = !body.classList.contains('dark-theme');
        setTheme(isDark);
    };
}

// Mobile Menu
function initMobileMenu() {
    const openBtn = document.querySelector('.navbar .mobile-menu-btn');
    const closeBtn = document.querySelector('.mobile-menu .mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    // Open menu
    openBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    // Close menu
    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
}

// Import profile image configuration
import profileImage from './profileImage.js';

// Profile Image Handler
function initProfileImage() {
    const profileContainer = document.querySelector('.profile-image');
    const avatar = document.querySelector('.temp-avatar');
    
    if (!profileContainer || !avatar) return;

    if (profileImage.image.enabled) {
        // Use image
        avatar.innerHTML = `
            <img 
                src="${profileImage.image.src}" 
                alt="${profileImage.image.alt}"
                onerror="this.onerror=null; this.parentElement.innerHTML='<i class=\'bx ${profileImage.fallbackIcon.class}\'></i>'"
            >
        `;
    } else {
        // Use icon
        avatar.innerHTML = `<i class='bx ${profileImage.fallbackIcon.class}'></i>`;
    }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Initializing');
    initThemeSwitch();
    initMobileMenu();
    initProfileImage();
});
