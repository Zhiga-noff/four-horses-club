let indexSwiper = document.querySelector('.active-index')

export const swiperConfig = {
    navigation: {
        nextEl: '.next',
        prevEl: '.prev'
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
        type: 'fraction'
    }
}

