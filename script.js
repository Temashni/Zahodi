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
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
