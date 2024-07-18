import {swiperConfig} from "./configs-libs/swiper.config.js";
import {marqueeConfig} from "./configs-libs/marquee.config.js";
import {scrollToElement} from "./utils/scroll-to-element.js";
import {isWebp} from "./utils/image-is-webp.js";
import {animOnScroll} from "./utils/animate.js";

isWebp();
// Бегущая строка
$('.run-line').marquee(marqueeConfig);

// Свайпер слайдер
const swiper = new Swiper('.swiper', swiperConfig);
const swiperBtns = document.querySelector('.fifth-block__buttons')


swiperBtns.addEventListener('click', () => {
    swiper.activeIndex + 1
})


// Плавный скролл
const buttonContainerMain = document.querySelector('.main-block__buttons')

buttonContainerMain.addEventListener("click", ({target}) => {
    const linkArr = target.href.split('/')
    const link = linkArr[linkArr.length - 1]
    scrollToElement(link, 100)
});


// Анимация
let animItems = document.querySelectorAll('.anim-items');
if (animItems.length > 0) {
    window.addEventListener('scroll', () => {
        animOnScroll(animItems)
    })
    animOnScroll(animItems)
}

