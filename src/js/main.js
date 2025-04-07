import Slider from './modules/slider.js';
import VideoPlayer from './modules/playVideo.js';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.page', '.next');
    slider.render();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();

});
