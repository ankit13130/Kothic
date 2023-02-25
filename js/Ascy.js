var arr = [
    { frontimg: "https://a0.muscache.com/im/pictures/deb01b35-5d57-409a-8dad-2bbd1ed6fba7.jpg?im_w=720", vido: "https://player.vimeo.com/external/499214303.hd.mp4?s=4c773b2128e0070534a294af649db51babf477e5&profile_id=174&oauth2_token_id=57447761", name: "Hanabi Hotel, Kolkata",price:"24000",star:"⭐ ⭐ ⭐ ⭐  4.9",rate:"3.9", desp:"The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please." },
    { frontimg: "https://a0.muscache.com/im/pictures/miso/Hosting-53983980/original/616c1c73-e91b-496f-8ffc-66cf6e32e045.jpeg?im_w=1200",vido:"https://player.vimeo.com/external/499149422.hd.mp4?s=37d989afe7653318a5cb4b254fb513472b05cfc3&profile_id=174&oauth2_token_id=57447761", name: "ParkRoyal, Nagpur " ,price:"5000",star:"⭐ ⭐ ⭐  ⭐  4.2",rate:"3.9",desp:"All guests get free Wi-Fi in all rooms and free parking if arriving by car."},
    { frontimg: "https://images.trvl-media.com/lodging/71000000/70890000/70889300/70889285/55cd1c70.jpg?impolicy=resizecrop&rw=598&ra=fit",vido:"https://player.vimeo.com/external/499542152.sd.mp4?s=1e2543bfbcbb90f1fd08567c7246a88993c332c4&profile_id=164&oauth2_token_id=57447761", name: "Radisson Hotel, Delhi" ,price:"15000",star:"⭐ ⭐ ⭐  3.4",rate:"3.9",desp:"Rooms are quite clean and have a nice interior compared to your regular ones that you see these days."},
    { frontimg: "https://cf.bstatic.com/xdata/images/hotel/square600/7329651.webp?k=b1060febbc12fb81106323bc40a00247f8435a410aecc0e17960152db374f6b8&o=&s=1",vido:"https://player.vimeo.com/external/455703289.sd.mp4?s=ff75c85eb8c31c2f5821da04b0995d3d1b73b2ae&profile_id=165&oauth2_token_id=57447761", name: "Marriott Hotel, Jaipur" ,price:"7500",star:"⭐ ⭐ ⭐ ⭐ 4.2",rate:"3.9",desp:" As cities never sleep, there are always something going on, no matter what time!"},
]
var arr2 = [
    { frontimg: "https://a0.muscache.com/im/pictures/397ed026-16a9-4418-af19-1d2b31fe0aa8.jpg?im_w=960",vido:"https://player.vimeo.com/progressive_redirect/playback/672562163/rendition/360p/360p.mp4?loc=external&oauth2_token_id=57447761&signature=b9b4e7fb2ea2df2a5288b5017ed1af9e0ea11713f3278e494167eae4c56c0ca1", name: "The Elanza, Bangalore",price:"17200",star:"⭐ ⭐ ⭐  3.1",rate:"3.9" ,desp:"Don't leave before paying a visit to the famous Dagadusheth Halwai Ganapati Temple."},
    { frontimg: "https://a0.muscache.com/im/pictures/ddf82dd9-ca00-44c9-8b43-34b9874d5a93.jpg?im_w=720",vido:"https://player.vimeo.com/external/455703289.sd.mp4?s=ff75c85eb8c31c2f5821da04b0995d3d1b73b2ae&profile_id=165&oauth2_token_id=57447761", name: "Mandawa Haveli, Jaipur",price:"12500",star:"⭐ ⭐ ⭐ ⭐ ⭐  5",rate:"3.9" ,desp:" cities never sleep, there are always something going on, no matter what time!"},
    { frontimg: "https://a0.muscache.com/im/pictures/miso/Hosting-726354403528841102/original/a636b398-d1c5-4363-86b0-99e4da6621bc.jpeg?im_w=720",vido:"https://player.vimeo.com/progressive_redirect/playback/704793751/rendition/540p?loc=external&oauth2_token_id=57447761&signature=20140837e079b0febcb47fae6bb1fa4bdfbbb033d9f0136bc4c8d1a6f3d6e17c", name: "Sea Princess Hotel, Mumbai",price:"10500",star:"⭐ ⭐ ⭐  3.8",rate:"3.9",desp:"High-quality property provides guests with access to massage, restaurant and fitness center on-site." },
    { frontimg: "https://a0.muscache.com/im/pictures/miso/Hosting-38800306/original/4e9d24ae-7cf1-4807-afc5-4173ce13014c.jpeg?im_w=720",vido:"https://player.vimeo.com/external/499160382.hd.mp4?s=776da45b671466a53965ab94f2c96c679a2c463c&profile_id=174&oauth2_token_id=57447761", name: "Grand Residence, Chennai" ,price:"9500",star:"⭐ ⭐ ⭐ ⭐ 4.4",rate:"3.9",desp:"Rooms are quite clean and have a nice interior regular ones that you see these days."},
]
var arr3 = [
    { frontimg: "https://pix8.agoda.net/hotelImages/405/4052/4052_15052917290028047972.jpg?ca=4&ce=1&s=600x", vido: "https://player.vimeo.com/external/422378279.sd.mp4?s=5db5d7f43c9f475169a2b2d49b69b09bb62f86bf&profile_id=165&oauth2_token_id=57447761", name: "Parc Estique, Pune",price:"12000",star:"⭐ ⭐ ⭐  ⭐  4.6",rate:"3.9",desp: "As cities never sleep, there are always something going on, no matter what time!"},
    { frontimg: "https://pix8.agoda.net/hotelImages/297844/-1/4cd75a8f24bb8f4d1eacea044b74a66c.jpg?ca=7&ce=1&s=450x450",vido:"https://player.vimeo.com/external/499149422.hd.mp4?s=37d989afe7653318a5cb4b254fb513472b05cfc3&profile_id=174&oauth2_token_id=57447761", name: "Express In, Nashik" ,price:"6000",star:"⭐ ⭐  ⭐  3.9",rate:"3.9",desp:"Nice hotel right next door to Osho resort, car parking and the Wi-Fi are always free."},
    { frontimg: "https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Delhi/images/new-images/taj-mahal-new-delhi-yesterday-today-forever.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg",vido:"https://player.vimeo.com/external/499160382.hd.mp4?s=776da45b671466a53965ab94f2c96c679a2c463c&profile_id=174&oauth2_token_id=57447761", name: "Mandawa Haveli, Jaipur",price:"11500" ,star:"⭐ ⭐ ⭐  ⭐  4.1",rate:"3.9",desp:"Rooms are quite clean and have a nice interior compared to your regular ones that you see these days."},
    { frontimg: "https://pix8.agoda.net/hotelImages/43815/-1/b62af9df057069dddb4f13a674a5bdf9.jpg?ca=9&ce=1&s=450x450",vido:"https://player.vimeo.com/external/499152557.hd.mp4?s=5295cec31b16eafdad990ad28b0e2b28c2dc2260&profile_id=174&oauth2_token_id=57447761", name: "The Manohar, Hyderabad" ,price:"8500",star:"⭐ ⭐ ⭐  3.3",rate:"3.9",desp:"Exceeds expectations, right from the time I made a call a day before to check on thing"},
]

var clusture = "";

arr.forEach(function (val) {
    clusture += `
    <section class="card-section">
    <a href="page2.html">
    <div class="card">
      <div class="flip-card">
        <div class="flip-card__container">
          <div class="card-front">
            <div class="card-front__tp card-front__tp--city">
              <img src="${val.frontimg}" alt="" srcset="">
            </div>
            <div class="card-front__bt">
                <p class="card-front__text-view card-front__text-view--city">
                    ${val.name}
                </p>
            </div>
          </div>
          <div class="card-back">
            <video class="video__container" autoplay muted loop>
              <source class="video__media" src="${val.vido}" type="video/mp4">
            </video>
          </div>
        </div>
      </div>
      <div class="inside-page">
        <div class="inside-page__container">
          <h3 class="inside-page__heading inside-page__heading--city">${val.name}</h3>
          <p class="inside-page__text">${val.desp}</p>
          <div class="price-pc">
            <span>Price : ₹ ${val.price}</span>
          </div>
          <span class="star">${val.star}</span>
          <a href="#" class="inside-page__btn inside-page__btn--city">View Details</a>
        </div>
      </div>
    </div>
    </a>
  </section>`
});

document.querySelector("#card-area").innerHTML = clusture;

var clusture2 = ""


arr2.forEach(function (val) {
    clusture2 += `
    <section class="card-section">
    <a href="page2.html">
    <div class="card">
      <div class="flip-card">
        <div class="flip-card__container">
          <div class="card-front">
            <div class="card-front__tp card-front__tp--city">
              <img src="${val.frontimg}" alt="" srcset="">
            </div>
            <div class="card-front__bt">
                <p class="card-front__text-view card-front__text-view--city">
                    ${val.name}
                </p>
            </div>
          </div>
          <div class="card-back">
            <video class="video__container" autoplay muted loop>
              <source class="video__media" src="${val.vido}" type="video/mp4">
            </video>
          </div>
        </div>
      </div>
      <div class="inside-page">
        <div class="inside-page__container">
          <h3 class="inside-page__heading inside-page__heading--city">${val.name}</h3>
          <p class="inside-page__text">${val.desp}</p>
          <div class="price-pc">
            <span>Price : ₹ ${val.price}</span>
          </div>
          <span class="star">${val.star}</span>
          <a href="#" class="inside-page__btn inside-page__btn--city">View Details</a>
        </div>
      </div>
    </div>
    </a>
  </section>`
});

document.querySelector("#card-area2").innerHTML = clusture2;

var clusture3 = ""

arr3.forEach(function (val) {
    clusture3 += `
    <section class="card-section">
    <a href="page2.html">
    <div class="card">
      <div class="flip-card">
        <div class="flip-card__container">
          <div class="card-front">
            <div class="card-front__tp card-front__tp--city">
              <img src="${val.frontimg}" alt="" srcset="">
            </div>
            <div class="card-front__bt">
                <p class="card-front__text-view card-front__text-view--city">
                    ${val.name}
                </p>
            </div>
          </div>
          <div class="card-back">
            <video class="video__container" autoplay muted loop>
              <source class="video__media" src="${val.vido}" type="video/mp4">
            </video>
          </div>
        </div>
      </div>
      <div class="inside-page">
        <div class="inside-page__container">
          <h3 class="inside-page__heading inside-page__heading--city">${val.name}</h3>
          <p class="inside-page__text">${val.desp}</p>
          <div class="price-pc">
            <span>Price : ₹ ${val.price}</span>
          </div>
          <span class="star">${val.star}</span>
          <a href="#" class="inside-page__btn inside-page__btn--city">View Details</a>
        </div>
      </div>
    </div>
    </a>
  </section>`
});

document.querySelector("#card-area3").innerHTML = clusture3;