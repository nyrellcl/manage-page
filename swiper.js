const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: "coverflow",
    slidesPerView: "auto",
    centeredSlides: true,
    coverFlowEffect:{
        rotate: 50,
        stretch: 0,
        depth: 200, 
        modifier: 1,
        slideShadows: false
    },
    direction: 'horizontal',
    loop: true,
    speed: 500,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
});

