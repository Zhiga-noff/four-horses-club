import {swiperConfig} from "./configs-libs/swiper.config.js";
import {marqueeConfig} from "./configs-libs/marquee.config.js";
import {scrollToElement} from "./utils/scroll-to-element.js";

function isWebp() {
    function testWebP(callback) {
        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src =
            'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    }

    testWebP(function (support) {
        if (support == true) {
            document.querySelector('body').classList.add('webp');
        } else {
            document.querySelector('body').classList.add('no-webp');
        }
    });
}

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

