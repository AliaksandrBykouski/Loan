export default class HansonController {
    constructor(selector = '.hanson', delay = 5000) {
        this.delay = delay;

        try {
            this.hansonBlocks = Array.from(document.querySelectorAll(selector));

            if (this.hansonBlocks.length === 0) {
                console.warn(`Элементы ${selector} не найдены. HansonController не будет активирован.`);
            }
        } catch (error) {
            console.error(`Ошибка при инициализации HansonController:`, error);
            this.hansonBlocks = [];
        }
    }

    isAvailable() {
        return this.hansonBlocks.length > 0;
    }

    show(block) {
        try {
            block.style.opacity = '1';
            block.classList.add('slideInUp');
        } catch (error) {
            console.error('Ошибка при показе блока:', error);
        }
    }

    hide(block) {
        try {
            block.style.opacity = '0';
            block.classList.remove('slideInUp');
        } catch (error) {
            console.error('Ошибка при скрытии блока:', error);
        }
    }

    showOnSlide(slideNumber) {
        try {
            if (!this.isAvailable()) return;

            this.hansonBlocks.forEach(block => {
                const targetSlide = parseInt(block.dataset.slide) || 3;

                this.hide(block);

                if (slideNumber === targetSlide) {
                    block.classList.add('animated');
                    setTimeout(() => this.show(block), this.delay);
                }
            });
        } catch (error) {
            console.error('Ошибка в методе showOnSlide:', error);
        }
    }
}
