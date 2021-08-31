let slideIndex = 1;

if(screen.width < 768){
    startSlides(slideIndex);
}

function plusSlides(s){
startSlides(slideIndex += s);
}

function startSlides(s) {
let i;
let slides = document.getElementsByClassName("slider");

if(s > slides.length) slideIndex = 1;
if(s < 1) slideIndex = slides.length;

for(i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
}

slides[slideIndex - 1].style.display = "block";
}


let slideBotIndex = 0;

if(screen.width < 768){
    startSlidesBottom();
}

function startSlidesBottom(){
let i;
let slides = document.getElementsByClassName("slider-bottom");

for(i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
}
slideBotIndex++;
if(slideBotIndex > slides.length) slideBotIndex = 1;
slides[slideBotIndex - 1].style.display = "block";
setTimeout(startSlidesBottom, 3000);
}

























// let slideIndex = 1;

// if(screen.width < 768){
//     startSlides(slideIndex);
// }

// function plusSlides(s){
// startSlides(slideIndex += s);
// }

// function startSlides(s) {
// let i;
// let slides = document.getElementsByClassName("slider");

// if(s > slides.length) slideIndex = 1;
// if(s < 1) slideIndex = slides.length;

// for(i = 0; i < slides.length; i++){
//     slides[i].style.display = "none";
// }

// slides[slideIndex - 1].style.display = "block";
// }


// let slideBotIndex = 0;

// if(screen.width < 768){
//     startSlidesBottom();
// }

// function startSlidesBottom(){
// let i;
// let slides = document.getElementsByClassName("slider-bottom");

// for(i = 0; i < slides.length; i++){
//     slides[i].style.display = "none";
// }
// slideBotIndex++;
// if(slideBotIndex > slides.length) slideBotIndex = 1;
// slides[slideBotIndex - 1].style.display = "block";
// setTimeout(startSlidesBottom, 3000);
// }