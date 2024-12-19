function initThemeSwitch() {
    const themeSwitch = document.getElementById('themeSwitch');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Проверяем сохраненную тему
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    } else if (prefersDarkScheme.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    if (themeSwitch) { // Проверяем, существует ли элемент
        themeSwitch.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    } else {
        console.error('Элемент переключателя темы не найден.');
    }
}

// Вызываем функцию при загрузке страницы
document.addEventListener('DOMContentLoaded', initThemeSwitch);

document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }

    // Обработка кликов по навигации
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Закрываем мобильное меню если оно открыто
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
            }
    
            // Плавный скролл к секции
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.warn(`Секция с ID ${targetId} не найдена.`);
            }
        });
    });

    // Активация ссылок при скролле
    const sections = document.querySelectorAll('section');
    
    function updateActiveLink() {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Обновляем активную ссылку при скролле
    window.addEventListener('scroll', updateActiveLink);
    
    // Наблюдатель за элементами
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Добавляем классы к элементам и начинаем наблюдение
    document.addEventListener('DOMContentLoaded', () => {
        // Анимируем секции
        sections.forEach(section => {
            section.classList.add('fade-up');
            observer.observe(section);
        });

        // Анимир��ем карточки с задержкой
        const cards = document.querySelectorAll('.work-item, .goal-card');
        cards.forEach((card, index) => {
            card.classList.add('fade-up');
            card.classList.add(`fade-in-delay-${index + 1}`);
            observer.observe(card);
        });
    });

    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    let posX = 0,
        posY = 0,
        mouseX = 0,
        mouseY = 0;

    TweenMax.to({}, 0.016, {
        repeat: -1,
        onRepeat: function() {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;
            
            TweenMax.set(follower, {
                css: {
                    left: posX - 20,
                    top: posY - 20
                }
            });
            
            TweenMax.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            });
        }
    });

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Эффект при наведении на ссылки и кнопки
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            follower.classList.add('active');
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
            follower.classList.remove('active');
        });
    });

});
