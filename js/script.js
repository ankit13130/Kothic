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
  {image:"https://a0.muscache.com/im/pictures/deb01b35-5d57-409a-8dad-2bbd1ed6fba7.jpg?im_w=720",heading:"Hanabi Hotel, Kolkata "},
  {image:"https://a0.muscache.com/im/pictures/miso/Hosting-53983980/original/616c1c73-e91b-496f-8ffc-66cf6e32e045.jpeg?im_w=1200",heading:"ParkRoyal, Nagpur"},
  {image:"https://images.trvl-media.com/lodging/71000000/70890000/70889300/70889285/55cd1c70.jpg?impolicy=resizecrop&rw=598&ra=fit",heading:"Radisson Hotel, Delhi"},
  {image:"https://cf.bstatic.com/xdata/images/hotel/square600/7329651.webp?k=b1060febbc12fb81106323bc40a00247f8435a410aecc0e17960152db374f6b8&o=&s=1",heading:"Marriott Hotel, Jaipur"},
  {image:"https://a0.muscache.com/im/pictures/397ed026-16a9-4418-af19-1d2b31fe0aa8.jpg?im_w=960",heading:"The Elanza, Bangalore"},
  {image:"https://pix8.agoda.net/hotelImages/405/4052/4052_15052917290028047972.jpg?ca=4&ce=1&s=600x",heading:"Mandawa Haveli, Jaipur"},
  {image:"https://pix8.agoda.net/hotelImages/297844/-1/4cd75a8f24bb8f4d1eacea044b74a66c.jpg?ca=7&ce=1&s=450x450",heading:"Parc Estique, Pune"},
  {image:"https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Delhi/images/new-images/taj-mahal-new-delhi-yesterday-today-forever.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg",heading:"Romio Juliet , Jabalpur"},
  {image:"https://a0.muscache.com/im/pictures/miso/Hosting-726354403528841102/original/a636b398-d1c5-4363-86b0-99e4da6621bc.jpeg?im_w=720",heading:"The Manohar, Hyderabad"},
];

var clutter1 = "";
slider.forEach((elem,idx)=>{
  clutter1 += `<div class="swiper-slide">
  <img id="${idx}" src="${elem.image}" />
  <h4>${elem.heading}</h4>
  </div>`
})

document.querySelector(".swiper-wrapper").innerHTML = clutter1;