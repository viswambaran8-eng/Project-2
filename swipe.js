var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


    /* News  Box Section  */
    
  const swiper1 = new Swiper1('.news-swiper-horizontal', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
