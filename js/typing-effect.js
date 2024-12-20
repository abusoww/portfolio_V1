class TypeWriter {
    constructor(element, text, delay = 100) {
        this.element = element;
        this.text = text;
        this.delay = delay;
        this.currentChar = 0;
        this.element.textContent = '';
        this.type();
    }

    type() {
        if (this.currentChar < this.text.length) {
            this.element.textContent += this.text.charAt(this.currentChar);
            this.currentChar++;
            setTimeout(() => this.type(), this.delay);
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const typingElements = document.querySelectorAll('.typing-heading');
    typingElements.forEach(element => {
        const text = element.getAttribute('data-text');
        new TypeWriter(element, text, 100);
    });
}); 
