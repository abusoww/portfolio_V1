class FigmaCursor {
    constructor() {
        // Create cursor elements
        this.cursor = document.createElement('div');
        this.cursor.className = 'figma-cursor';

        // Create ring
        this.ring = document.createElement('div');
        this.ring.className = 'figma-cursor-ring';

        // Construct cursor
        this.cursor.appendChild(this.ring);
        document.body.appendChild(this.cursor);
        
        // Initialize positions
        this.pos = { x: 0, y: 0 };
        this.ringPos = { x: 0, y: 0 };
        
        // Add clickable elements selectors
        this.clickableElements = 'a, button, input[type="button"], input[type="submit"], input[type="reset"], [role="button"], [role="link"], .clickable';
        
        // Bind events
        this.bindEvents();
        this.render();
    }

    bindEvents() {
        document.addEventListener('mousemove', (e) => {
            this.pos.x = e.clientX;
            this.pos.y = e.clientY;

            // Check if hovering over clickable element
            const target = e.target;
            if (target.matches(this.clickableElements) || target.closest(this.clickableElements)) {
                this.cursor.classList.add('clickable');
                document.body.style.cursor = 'pointer';
            } else {
                this.cursor.classList.remove('clickable');
                document.body.style.cursor = 'default';
            }
        });

        // Add click animation
        document.addEventListener('mousedown', () => {
            if (this.cursor.classList.contains('clickable')) {
                this.ring.style.transform += ' scale(0.9)';
            }
        });

        document.addEventListener('mouseup', () => {
            if (this.cursor.classList.contains('clickable')) {
                this.ring.style.transform = this.ring.style.transform.replace(' scale(0.9)', '');
            }
        });
    }

    render() {
        // Smooth position update
        this.ringPos.x += (this.pos.x - this.ringPos.x) * 0.85;
        this.ringPos.y += (this.pos.y - this.ringPos.y) * 0.85;
        
        this.ring.style.transform = `translate(${this.ringPos.x}px, ${this.ringPos.y}px) translate(-50%, -50%)`;
        requestAnimationFrame(() => this.render());
    }
}

// Initialize cursor
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    new FigmaCursor();
} else {
    document.addEventListener('DOMContentLoaded', () => new FigmaCursor());
} 
