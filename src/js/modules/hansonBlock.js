export default class HansonController {
    constructor(selector = '.hanson', delay = 5000) {
        this.delay = delay;
        this.hansonBlocks = Array.from(document.querySelectorAll(selector));

        if (this.hansonBlocks.length === 0) {
            console.warn(`Элементы ${selector} не найдены. HansonController не будет активирован.`);
        }
    }

    isAvailable() {
        return this.hansonBlocks.length > 0;
    }

    show(block) {
        block.style.opacity = '1';
        block.classList.add('slideInUp');
    }

    hide(block) {
        block.style.opacity = '0';
        block.classList.remove('slideInUp');
    }

    showOnSlide(slideNumber) {
        if (!this.isAvailable()) return;

        this.hansonBlocks.forEach(block => {
            const targetSlide = parseInt(block.dataset.slide) || 3;

            this.hide(block);

            if (slideNumber === targetSlide) {
                block.classList.add('animated');
                setTimeout(() => this.show(block), this.delay);
            }
        });
    }
}
