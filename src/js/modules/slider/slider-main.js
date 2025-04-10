import Slider from './slider.js';



export default class MainSlider extends Slider {
    constructor(btns) {
        super(btns);
    }
    showSlides(n) {
        if (n > this.slides.length) this.slideIndex = 1;
        if (n < 1) this.slideIndex = this.slides.length;

        this.slides.forEach((slide, i) => {
            slide.style.transition = `opacity ${this.animationDuration}ms ease-in-out`;
            slide.style.opacity = '0';
            slide.style.position = 'absolute';
            slide.style.top = '0';
            slide.style.left = '0';
            slide.style.width = '100%';
            slide.style.zIndex = i === this.slideIndex - 1 ? '1' : '0';
        });

        const currentSlide = this.slides[this.slideIndex - 1];
        currentSlide.style.opacity = '1';

        this.isAnimating = true;
        setTimeout(() => this.isAnimating = false, this.animationDuration);
    }

    plusSlides(n) {
        if (this.isAnimating) return;
        this.showSlides(this.slideIndex += n);
    }

    addSwipeSupport() {
        const target = this.container;

        target.addEventListener('touchstart', (e) => {
            this.touchStartX = e.changedTouches[0].screenX;
        });

        target.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });
    }

    handleSwipe() {
        const deltaX = this.touchEndX - this.touchStartX;

        if (Math.abs(deltaX) > 50) {
            if (deltaX < 0) {
                this.plusSlides(1); // свайп влево → следующий
            } else {
                this.plusSlides(-1); // свайп вправо → предыдущий
            }
        }
    }

    render() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.plusSlides(1);
            });
            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);

            })
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') this.plusSlides(1);
            if (e.key === 'ArrowLeft') this.plusSlides(-1);
        });

        this.addSwipeSupport();
        this.showSlides(this.slideIndex);
    }
}
