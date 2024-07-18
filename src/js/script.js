import {swiperConfig} from "./configs-libs/swiper.config.js";
import {marqueeConfig} from "./configs-libs/marquee.config.js";
import {scrollToElement} from "./utils/scroll-to-element.js";
import {isWebp} from "./utils/image-is-webp.js";
import {animOnScroll} from "./utils/animate.js";

isWebp();
// Бегущая строка
$('.run-line').marquee(marqueeConfig);

// Свайпер слайдер
const swiper = new Swiper('.fifth-block__slider', swiperConfig);
let swiperTable = null
const swiperBtns = document.querySelector('.fifth-block__buttons')


swiperBtns.addEventListener('click', () => {
    swiper.activeIndex + 1
})

const tableForthBlock = document.querySelector('.fourth-block__table')
const elementsSliderTable = tableForthBlock.querySelectorAll('.fourth-block__element')

if (window.innerWidth <= 992) {
    tableForthBlock.classList.add('swiper')
    elementsSliderTable.forEach(item => {
        item.classList.add('swiper-slide')
    })
    tableForthBlock.innerHTML = ``
    // console.log(swiperConfig.slidesPerView)
    // swiperConfig.params.slidesPerView = 1
    // swiperTable = new Swiper('.fourth-block__table', {})
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 992) {
        tableForthBlock.classList.add('swiper')
    } else {
        tableForthBlock.classList.remove('swiper')
    }
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

