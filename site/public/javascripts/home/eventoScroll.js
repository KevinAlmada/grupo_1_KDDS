

window.addEventListener('scroll',function(){
let $minHe = document.querySelector(".miniHeaderFijo")
let $logoHm = document.querySelector('#logoHeaderMini')
let $vContainer = document.querySelector('#videoContainer')
let $vbanner = document.querySelector('#videoBanner')
let $flecha = document.querySelector('.fa-arrow-alt-circle-up')

if(window.scrollY != 0){
    $minHe.classList.add('scroll')
    $logoHm.style.opacity = '1'
    $logoHm.style.position = "relative"
    $vContainer? $vContainer.classList.add('scrollBanner') : " "
    $flecha ? $flecha.style.opacity = "1" : " "
    $vbanner ? $vbanner.classList.add('scrollVideo') : " "
}
else{
    $minHe.classList.remove('scroll')
    $logoHm.style.opacity = '0'
    $logoHm.style.position = "absolute"
    $flecha ? $flecha.style.opacity = '0' : " "
    $vContainer ? $vContainer.classList.remove('scrollBanner') : " "
    $vbanner ? $vbanner.classList.remove('scrollVideo') : " "
}
})