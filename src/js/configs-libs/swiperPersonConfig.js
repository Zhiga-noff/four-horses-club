export const swiperPersonConfig = {
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  slidesPerView: 3, // Отображение трех слайдов на одном экране
  loop: true, // Бесконечная прокрутка слайдов
  autoplay: {
    delay: 5000, // Задержка 3 секунды перед пролистыванием
  },
  speed: 700, // Скорость пролистывания слайдов в миллисекундах (1 секунда = 1000 миллисекунд)
  spaceBetween: 30, // Промежуток между слайдами в пикселях
  simulateTouch: false,
  pagination: {
    el: '.bullet',
    type: 'fraction',
  },
};

export const swiperStagesConfig = {
  navigation: {
    nextEl: '.next-stages',
    prevEl: '.prev-stages',
  },
  slidesPerView: 1, // Отображение трех слайдов на одном экране
  loop: false, // Бесконечная прокрутка слайдов
  speed: 700, // Скорость пролистывания слайдов в миллисекундах (1 секунда = 1000 миллисекунд)
  spaceBetween: 40, // Промежуток между слайдами в пикселях
  simulateTouch: true,
  centeredSlides: true,
  pagination: {
    el: '.bullet-stages',
    clickable: true,
  },
};
