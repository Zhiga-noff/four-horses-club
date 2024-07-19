import { swiperPersonConfig } from './configs-libs/swiperPersonConfig.js';
import { marqueeConfig } from './configs-libs/marquee.config.js';
import { scrollToElement } from './utils/scroll-to-element.js';
import { isWebp } from './utils/image-is-webp.js';
import { animOnScroll } from './utils/animate.js';
import { sizeWindowControl } from './utils/size-window-control.js';

isWebp();
// Бегущая строка
$('.run-line').marquee(marqueeConfig);

// Свайпер слайдер
const swiperPerons = new Swiper('.fifth-block__slider', swiperPersonConfig);
let swiperStages = null;
const swiperBtns = document.querySelector('.fifth-block__buttons');
swiperBtns.addEventListener('click', () => {
  swiperPerons.activeIndex + 1;
});
window.addEventListener('resize', () => {
  sizeWindowControl(swiperStages);
});
sizeWindowControl(swiperStages);

// Плавный скролл
const buttonContainerMain = document.querySelector('.main-block__buttons');
buttonContainerMain.addEventListener('click', ({ target }) => {
  const linkArr = target.href.split('/');
  const link = linkArr[linkArr.length - 1];
  scrollToElement(link, 100);
});

// Анимация
let animItems = document.querySelectorAll('.anim-items');
if (animItems.length > 0) {
  window.addEventListener('scroll', () => {
    animOnScroll(animItems);
  });
  animOnScroll(animItems);
}
