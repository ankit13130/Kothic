//page 2 swiper
var swiper = new Swiper(".left .mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".left .mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
    loop:true,
});

document.querySelector(".table").addEventListener("click",()=>{
  document.querySelector(".food").classList.toggle("hide");
})

//date calculator