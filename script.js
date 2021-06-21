const autoswiper = new Swiper('.Swiper', {
    autoplay: {
      delay: 4000,
    },
   });

   var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop:true,
    autoplay: {
    delay: 3000,
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

  function displ(ddd) { if (document.getElementById(ddd).style.display == 'none') {document.getElementById(ddd).style.display = 'block'} else {document.getElementById(ddd).style.display = 'none'} }