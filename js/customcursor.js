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

// // first cursor
// window.addEventListener("mousemove" , function(e){
//     console.log(e.clientX, e.clientY); 
// })

// const coords = { x: 0, y: 0 };
// const circles = document.querySelectorAll(".circle");
// // const colors = []; 

// circles.forEach(function (circle , index){
//  circle.x = 0;
//  circle.y = 0;
// });


// window.addEventListener("mousemove" , function(e){
//     coords.x = e.clientX;
//     coords.y = e.clientY;


// });


// function animateCircles(){
//     let x = coords.x;
//     let y = coords.y;


//     circles.forEach(function (circle , index){
//         circle.style.left = x - 12 + "px";
//         circle.style.top = y - 12 + "px";

//         circle.style.scale = (circles.length - index) / circles.length;
//         circle.x = x;
//         circle.y = y;
//         // x += 10;
//         // y += 10;

//         const nextCircle = circles[index + 1] || circles[0];
//         x += (nextCircle.x-x) * 0.3;
//         y += (nextCircle.y-y) * 0.3; 

// });

//     requestAnimationFrame(animateCircles);

// }

// animateCircles();