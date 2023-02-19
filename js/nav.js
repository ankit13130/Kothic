const createNav = () =>{
    let nav = document.querySelector("nav")

    nav.innerHTML = `<div id="cover">
        <div id="nleft">
            <h1>Kothic</h1>
            <ul id="menu">
                <li>Home</li>
                <li>Services</li>
                <li>Hotels</li>
                <li>Reviews</li>
            </ul>
        </div>
        <div id="nright">
            <a href="tel:9926489297">
                <img src="./assets/ringing.gif" alt="" height="35px">
            </a>
            <a href="">
                <img src="./assets/user.gif" alt="" height="45px">
            </a>
        </div>
    </div>`
}

createNav();