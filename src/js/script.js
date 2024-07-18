import {swiperConfig} from "./configs-libs/swiper.config.js";
import {marqueeConfig} from "./configs-libs/marquee.config.js";
import {scrollToElement} from "./utils/scroll-to-element.js";
import {isWebp} from "./utils/image-is-webp.js";


isWebp();

$('.run-line').marquee(marqueeConfig);

const swiper = new Swiper('.swiper', swiperConfig);
const swiperBtns = document.querySelector('.fifth-block__buttons')

let indexSwiper = swiperBtns.querySelector('.active-index')


swiperBtns.addEventListener('click', () => {
    indexSwiper.innerHTML = swiper.activeIndex + 1
})

document.querySelector('.main-block__buttons').addEventListener("click", ({target}) => {
    const linkArr = target.href.split('/')
    const link = linkArr[linkArr.length - 1]

    scrollToElement(link, 100)
});

