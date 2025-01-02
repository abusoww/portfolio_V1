document.addEventListener('DOMContentLoaded', function() {
    // Theme Switcher
    const themeSwitch = document.getElementById('themeSwitch');
    const body = document.body;
    
    // Check initial theme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
    
    // Apply initial theme
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        document.documentElement.setAttribute('data-theme', 'light');
    }

    // Theme switch handler
    themeSwitch.addEventListener('click', function() {
        // Toggle theme class
        body.classList.toggle('dark-theme');
        
        // Update data-theme attribute
        const isDark = body.classList.contains('dark-theme');
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        
        // Save preference
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // Mobile Menu
    const menuOpenBtn = document.querySelector('.navbar .mobile-menu-btn');
    const menuCloseBtn = document.querySelector('.mobile-menu .mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

    // Toggle mobile menu
    menuOpenBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.classList.add('menu-open');
        
        // Toggle menu icon
        const icon = menuOpenBtn.querySelector('i');
        icon.classList.remove('bx-menu');
        icon.classList.add('bx-x');
    });

    // Close menu with X button
    menuCloseBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
        
        // Reset menu icon
        const icon = menuOpenBtn.querySelector('i');
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
    });

    // Close menu when clicking a link
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
            // Reset menu icon
            const icon = menuOpenBtn.querySelector('i');
            icon.classList.remove('bx-x');
            icon.classList.add('bx-menu');
        });
    });

    // Close menu when pressing Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
            // Reset menu icon
            const icon = menuOpenBtn.querySelector('i');
            icon.classList.remove('bx-x');
            icon.classList.add('bx-menu');
        }
    });

// Prevent right-click context menu
document.addEventListener('contextmenu', event => event.preventDefault());

// Disable specific keys and combinations
document.addEventListener('keydown', function(event) {
    const forbiddenCombinations = [
        // Developer Tools and Inspect Elements
        { key: 'F12' },                             // DevTools
        { key: 'I', ctrlKey: true, shiftKey: true }, // DevTools Inspect
        { key: 'J', ctrlKey: true, shiftKey: true }, // DevTools Console
        { key: 'C', ctrlKey: true, shiftKey: true }, // DevTools Copy Element

        // Viewing Source and Debugging
        { key: 'U', ctrlKey: true },                // View Page Source

        // Saving, Copying, and Selecting Content
        { key: 'S', ctrlKey: true },                // Save Page
        { key: 'C', ctrlKey: true },                // Copy
        { key: 'X', ctrlKey: true },                // Cut
        { key: 'V', ctrlKey: true },                // Paste
        { key: 'A', ctrlKey: true },                // Select All

        // Printing and Page Actions
        { key: 'P', ctrlKey: true },                // Print
        { key: 'D', ctrlKey: true },                // Bookmark Page

        // Refreshing and Navigation
        { key: 'F5' },                              // Refresh
        { key: 'R', ctrlKey: true },                // Reload
        { key: 'R', ctrlKey: true, shiftKey: true }, // Hard Reload
        { key: 'H', ctrlKey: true, shiftKey: true }, // Open History

        // Undo and Redo
        { key: 'Z', ctrlKey: true },                // Undo
        { key: 'Y', ctrlKey: true },                // Redo
    ];

    // Check if the pressed key matches any forbidden combination
    for (const { key, ctrlKey = false, shiftKey = false, altKey = false } of forbiddenCombinations) {
        if (
            event.key === key &&
            event.ctrlKey === ctrlKey &&
            event.shiftKey === shiftKey &&
            event.altKey === altKey
        ) {
            event.preventDefault();
            console.log(`Blocked key combination: ${key} with modifiers Ctrl: ${ctrlKey}, Shift: ${shiftKey}, Alt: ${altKey}`);
            return;
        }
    }
});




});
