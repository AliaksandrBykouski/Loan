import MainSlider from './modules/slider/slider-main.js';
import MiniSlider from './modules/slider/slider-mini.js';
import HansonController from "./modules/hansonBlock";
import VideoPlayer from './modules/playVideo.js';
import Difference from './modules/difference.js';
import Form from './modules/forms.js';

window.addEventListener('DOMContentLoaded', () => {
    try {
        const slider = new MainSlider({
            container: '.page',
            btns: '.next-btn',
            activeClass: 'active',
            animate: true,
            autoplay: false
        });

        slider.render();
    } catch (e) {}

    const modulePageSlider = new MainSlider({container: '.moduleapp', btns: '.next'});
    modulePageSlider.render();

    const miniSlider = new MiniSlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true
    });

    miniSlider.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    });

    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active'
    });

    feedSlider.init();

    const hansonController = new HansonController('.hanson', 5000);

    // допустим, ты переключаешь слайды и узнаёшь номер текущего
    const currentSlide = 3;

    if (hansonController.isAvailable()) {
        hansonController.showOnSlide(currentSlide);
    }

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();

    new Difference('.officerold', '.officernew', '.officer__card-item').init();

    new Form('.form').init();



});
