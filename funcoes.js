const numero1 = document.querySelector(".numero1");
const numero2 = document.querySelector(".numero2");


function soma(x,y){
    return x+y;
}
function sub(x,y){
    return x-y;
}
function mul(x,y){
    return x*y;
}
function div(x,y){
    return  x/y;
}
function piso(x,y){
    return Math.min(x,y);
}
function teto(x,y){
    return Math.max(x,y);
}

module.exports = {
    soma, sub, mul, div, piso, teto
}