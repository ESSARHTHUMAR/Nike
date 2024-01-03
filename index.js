// function locoScroll(){
//     const scroll = new LocomotiveScroll({
//         el: document.querySelector('#main'),
//         smooth: true,
//         direction: 'horizontal',
//     });
// }

var item = document.getElementById("right")

window.addEventListener("wheel", function(e){
    if(e.deltaY > 0) item.scrollLeft += 100;
    else item.scrollLeft -= 100;
    
}).scrollIntoView({
    behavior: "smooth"
})

locoScroll();