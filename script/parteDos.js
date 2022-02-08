const contain = document.querySelector(".contain-items");

let maxScrollleft = contain.scrollWidth - contain.clientWidth;
let intervalo = null;
let step = 1;
const start = () => {
    intervalo = setInterval(function(params) {
        contain.scrollLeft = contain.scrollLeft + step;
        if(contain.scrollLeft == maxScrollleft) {
            step = step * -1;
        } else if(contain.scrollLeft === 0){
            step *= -1;
        }
    }, 15);
};
const stop = () => {
    clearInterval(intervalo);
};

contain.addEventListener('mouseover', () => {
    stop();
});

contain.addEventListener('mouseout', () => {
    start();
});

start();