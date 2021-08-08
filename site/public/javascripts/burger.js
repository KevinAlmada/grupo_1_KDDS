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

let chevron = document.getElementById("chevron")
let productTypes = document.getElementById("header-mobile-products-drop");


function headerDropDown(){
    (productTypes.style.display == "none")?abrir():cerrar()

    function abrir(){
        productTypes.style.display = "flex"
        productTypes.style.opacity = "1"
        chevron.style.transform = "rotate(90deg)"
    }
    function cerrar(){
        productTypes.style.display = "none"
        productTypes.style.opacity = "0"
        productTypes.style.transition = "all 0.8s"
        chevron.style.transform = "rotate(0deg)"
    }
}