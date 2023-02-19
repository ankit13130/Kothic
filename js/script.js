//custom cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

// swiper js
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "4",
    coverflowEffect: {
      rotate: 40,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    loop:true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
});

//swiper array object
var slider =[
  {image:"https://swiperjs.com/demos/images/nature-1.jpg",heading:"Radisson Hotel"},
  {image:"https://swiperjs.com/demos/images/nature-2.jpg",heading:"Taj Hotel"},
  {image:"https://swiperjs.com/demos/images/nature-3.jpg",heading:"Military Hotel"},
  {image:"https://swiperjs.com/demos/images/nature-4.jpg",heading:"Hotel Jahanuma"},
  {image:"https://swiperjs.com/demos/images/nature-5.jpg",heading:"Pirate's Hotel"},
  {image:"https://swiperjs.com/demos/images/nature-6.jpg",heading:"Hotel Robin"},
  {image:"https://swiperjs.com/demos/images/nature-7.jpg",heading:"Halloween Hotel"},
  {image:"https://swiperjs.com/demos/images/nature-8.jpg",heading:"Romio Juliet Hotel"},
  {image:"https://swiperjs.com/demos/images/nature-9.jpg",heading:"Mayur Da Dhaba"},
];

var clutter1 = "";
slider.forEach((elem,idx)=>{
  clutter1 += `<div class="swiper-slide">
  <img id="${idx}" src="${elem.image}" />
  <h4>${elem.heading}</h4>
  </div>`
})

document.querySelector(".swiper-wrapper").innerHTML = clutter1;