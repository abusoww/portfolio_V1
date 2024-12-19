<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact | Nicat Abushov</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/contact.css">
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
    <script>
        // Set default theme immediately
        if (!localStorage.getItem('darkTheme')) {
            localStorage.setItem('darkTheme', 'false');
        }
    </script>
</head>
<body class="light-theme">
    <nav class="navbar">
        <div class="container">
            <a href="/" class="logo">
                <span class="logo-text">NA</span>
                <div class="logo-dot"></div>
            </a>
            
            <button class="mobile-menu-btn">
                <i class='bx bx-menu'></i>
            </button>

            <ul class="nav-links">
                <li><a href="/">Main</a></li>
                <li><a href="/cv.html">CV</a></li>
                <li><a href="/projects.html">Projects</a></li>
                <li><a href="/contact.html" class="active">Contact</a></li>
            </ul>
            <button class="theme-switch" id="themeSwitch">
                <i class='bx bx-sun'></i>
                <i class='bx bx-moon'></i>
            </button>
        </div>
    </nav>

    <div class="mobile-menu">
        <div class="mobile-menu-header">
            <button class="mobile-menu-btn">
                <i class='bx bx-x'></i>
            </button>
        </div>
        <div class="mobile-menu-links">
            <a href="index.html" class="nav-link underline-animation">Main</a>
            <a href="cv.html" class="nav-link underline-animation">CV</a>
            <a href="projects.html" class="nav-link underline-animation">Projects</a>
            <a href="contact.html" class="nav-link underline-animation active">Contact</a>
        </div>
    </div>

    <main class="contact-content">
        <div class="contact-section">
            <h1 class="typing-text" data-text="Let's Connect">Let's Connect</h1>
            <p class="typing-text" data-text="Got a question or want to work together? Feel free to reach out.">
                Got a question or want to work together? Feel free to reach out.
            </p>
            
            <div class="contact-grid">
                <div class="contact-item">
                    <div class="contact-icon">
                        <i class='bx bx-envelope'></i>
                    </div>
                    <div class="contact-details">
                        <h2>Email</h2>
                        <a href="mailto:your.email@example.com">your.email@example.com</a>
                    </div>
                </div>

                <div class="contact-item">
                    <div class="contact-icon">
                        <i class='bx bxl-telegram'></i>
                    </div>
                    <div class="contact-details">
                        <h2>Telegram</h2>
                        <a href="https://t.me/nicatabushov">@nicatabushov</a>
                    </div>
                </div>

                <div class="contact-item">
                    <div class="contact-icon">
                        <i class='bx bxl-linkedin'></i>
                    </div>
                    <div class="contact-details">
                        <h2>LinkedIn</h2>
                        <a href="https://linkedin.com/in/nicatabushov">Nicat Abushov</a>
                    </div>
                </div>

                <div class="contact-item">
                    <div class="contact-icon">
                        <i class='bx bxl-github'></i>
                    </div>
                    <div class="contact-details">
                        <h2>Github</h2>
                        <a href="https://github.com/nicatabushov">@nicatabushov</a>
                    </div>
                </div>

                <div class="contact-item">
                    <div class="contact-icon">
                        <i class='bx bxl-instagram'></i>
                    </div>
                    <div class="contact-details">
                        <h2>Instagram</h2>
                        <a href="https://instagram.com/nicatabushov">@nicatabushov</a>
                    </div>
                </div>

                <div class="contact-item">
                    <div class="contact-icon">
                        <i class='bx bx-code-block'></i>
                    </div>
                    <div class="contact-details">
                        <h2>CodePen</h2>
                        <a href="https://codepen.io/nicatabushov">See my experiments</a>
                    </div>
                </div>

                <div class="contact-item">
                    <div class="contact-icon">
                        <i class='bx bx-coffee'></i>
                    </div>
                    <div class="contact-details">
                        <h2>Buy me a coffee</h2>
                        <a href="https://buymeacoffee.com/nicatabushov">Support my work</a>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer>
        <div class="container">
            <div class="social-links">
                <a href="https://t.me/nicatabushov" target="_blank" class="social-icon" title="Telegram">
                    <i class='bx bxl-telegram'></i>
                </a>
                <a href="https://github.com/nicatabushov" target="_blank" class="social-icon" title="GitHub">
                    <i class='bx bxl-github'></i>
                </a>
                <a href="https://instagram.com/nicatabushov" target="_blank" class="social-icon" title="Instagram">
                    <i class='bx bxl-instagram'></i>
                </a>
                <a href="https://www.linkedin.com/in/nicatabushov" target="_blank" class="social-icon" title="LinkedIn">
                    <i class='bx bxl-linkedin'></i>
                </a>
            </div>
            <p>© 2024 Nicat Abushov. Just a kid with a website.</p>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html> 
