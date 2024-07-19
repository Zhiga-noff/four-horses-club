import { swiperStagesConfig } from '../configs-libs/swiperPersonConfig.js';

export const sizeWindowControl = (swiper) => {
  const tableForthBlock = document.querySelector('.fourth-block__table');
  const tabletContainer = tableForthBlock.querySelector('.fourth-block__table-container');
  const elementsSliderTable = tableForthBlock.querySelectorAll('.fourth-block__element');

  if (window.innerWidth <= 639) {
    if (tableForthBlock.classList.contains('swiper')) {
      return;
    }

    tableForthBlock.classList.add('swiper');
    tabletContainer.classList.add('swiper-wrapper');
    elementsSliderTable.forEach((item) => {
      item.classList.add('swiper-slide');
    });
    swiper = new Swiper('.fourth-block__table', swiperStagesConfig);
  } else {
    tableForthBlock.classList.remove('swiper');
    tabletContainer.classList.remove('swiper-wrapper');
    elementsSliderTable.forEach((item) => {
      item.classList.remove('swiper-slide');
    });
  }
};
