let menu = document.getElementById("burger");
let iconBurger = document.getElementById("hamburguesa");
let iconCross = document.getElementById("cruz");
let menuLateral = document.getElementById("menuLateral")
let panelMenuLateral = document.getElementById("panelMenuLateral")

function burger (){
        menuLateral.style.opacity = 1
        menuLateral.style.left = "0%"
        iconCross.style.color = "white"
        iconCross.style.display = "block"
        iconBurger.style.display = "none"
}        

function closeBurger (){
        menuLateral.style.opacity = "0"
        menuLateral.style.left = "-70%"
        menuLateral.style.transition = "all 0.8s"
        iconCross.style.display = "none"
        iconBurger.style.display = "block"
}

let productDrop = document.getElementById("header-mobile-drop-title")
let productTypes = document.getElementById("header-mobile-products-drop");


function headerDropDown(){
    if(productTypes.style.display == "none" ){
        productTypes.style.display = "flex"
        productTypes.style.opacity = "1"
    }else{
        productTypes.style.display = "none"
        productTypes.style.opacity = "0"
        productTypes.style.transition = "all 0.8s"
    }
}