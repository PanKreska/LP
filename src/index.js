import  './style.scss';

new Swiper(".swiper", {
    effect: 'slide',
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    lazy: true,
    
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    bulletClass: 'swiper-pagination-bullet-active', 
  },

  navigation: {
    nextEl: '.right',
    prevEl: '.left',
  },
  pagination: {
    el: '.dots',
    currentClass : '.active',
    clickable: 'true',
  },
});
