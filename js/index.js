

const toggle = document.querySelector(".humburger");

toggle.onclick = function () {
    document.querySelector(".navbar").classList.toggle("nav-hide");
}

function moveright() {
    //    document.querySelector(".header").style.background = "url(../images/About/why-choose-us-512px.jpg) center no-repeat";
    //    document.querySelector(".header").style.backgroundSize = "cover";
    document.querySelector(".header").classList.toggle("header-2");
    document.querySelector(".header").classList.toggle("header-1");
}

function moveleft() {
    document.querySelector(".header").classList.toggle("header-2");
}

// var num = Math.random()*10;
// num1 = Math.round(num);
// // console.log(10-num1);
// if ( num1>0, num1<=3) {
//     console.log(num1);
// }


setInterval(() => {
    document.querySelector(".header").classList.toggle("header-1");
}, 3500);
setInterval(() => {
    document.querySelector(".header").classList.toggle("header-2");
    
}, 5000);