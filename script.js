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

var isShowAdditionLogos = false;


function toggleShowAdditionlogos () {
  isShowAdditionLogos = !isShowAdditionLogos;
  var logoWrapperRef = document.getElementById("logoWrapper");
  var logoWrapperBtnRef = document.getElementById("logoWrapperBtn");
  if (isShowAdditionLogos) {
    logoWrapperRef.style.display = "block";
    logoWrapperBtnRef.innerText = "Скрыть";
  } else {
    logoWrapperRef.style.display = "none";
    logoWrapperBtnRef.innerText = "Показать ещё";
  }
}

var isShowLogos = false;

function toggleShowlogos() {
  isShowLogos = !isShowLogos;
  var logoContainerRef = document.getElementById("logoContainer");
  var logoContainerBtnRef = document.getElementById("logoContainerBtn");
  if (isShowLogos) {
    logoContainerRef.style.display = "block";
    logoContainerBtnRef.innerText = "Скрыть";
  } else {
    logoContainerRef.style.display = "none";
    logoContainerBtnRef.innerText = "Показать ещё";
  }
}