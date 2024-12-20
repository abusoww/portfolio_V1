document.addEventListener('DOMContentLoaded', () => {
    const layers = document.querySelectorAll('.color-layer');

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;

        layers.forEach((layer, index) => {
            const speed = 0.5 + index * 0.1;
            const yOffset = scrolled * speed;

            layer.style.transform = `translateY(${yOffset}px)`;
        });
    });
}); 
