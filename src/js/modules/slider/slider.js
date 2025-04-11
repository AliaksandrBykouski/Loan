export default class Slider {
    constructor({container = null,
                    btns = null,
                    next = null,
                    prev = null,
                    activeClass = '',
                    animate = false,
                    autoplay = false } = {}) {
        this.container = document.querySelector(container);

        try {this.slides = Array.from(this.container.children)} catch(e) {};
        this.btns = document.querySelectorAll(btns);
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);

        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.slideIndex = 1;
        this.isAnimating = false;
        this.animationDuration = 500;

        this.touchStartX = 0;
        this.touchEndX = 0;
    }


}
