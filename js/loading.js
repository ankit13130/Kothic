gsap.fromTo('#loading' , {opacity:1} , {
    opacity : 0, 
    duration : 2.5,
    delay: 7.6,
    // PointerEvent: All
} 
);


gsap.fromTo('.webcoderskull' ,{
    x: 110,
    opacity:0,
    },{
        x:0,
        opacity:1,
        duration: 2,
        delay : 1,
    });

gsap.fromTo('.text--line' ,{
    y: 90,
    opacity:0,
    },{
        y:-10,
        opacity:1,
        duration: 2,
        delay : 2,
    });