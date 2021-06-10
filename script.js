const autoswiper = new Swiper('.Swiper', {
    autoplay: {
      delay: 4000,
    },
   });

   var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
    delay: 1000,
    disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: false
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: false,
    },
  });
