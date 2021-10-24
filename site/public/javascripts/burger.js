let menu = document.getElementById("burger");
let iconBurger = document.getElementById("hamburguesa");
let iconCross = document.getElementById("cruz");
let menuLateral = document.getElementById("menuLateral")
let panelMenuLateral = document.getElementById("panelMenuLateral")
window.addEventListener("load", () => {
    menu.onclick = () => {
        menuLateral.classList.add("menu-deploy")
        /* iconCross.style.color = "white"
        iconCross.style.display = "block" */
        iconBurger.style.display = "none"
}        

    iconCross.onclick = () => {
        menuLateral.classList.remove("menu-deploy")
         menuLateral.style.transition = "all 0.8s"
        iconBurger.style.display = "block"
}
/* menu.onclick = () => {
        menuLateral.style.opacity = 1
        menuLateral.style.left = "0%"
        iconCross.style.color = "white"
        iconCross.style.display = "block"
        iconBurger.style.display = "none"
}        

    iconCross.onclick = () => {
        menuLateral.style.opacity = "0"
        menuLateral.style.left = "-70%"
        menuLateral.style.transition = "all 0.8s"
        iconCross.style.display = "none"
        iconBurger.style.display = "block"
} */

let chevron = document.getElementById("chevron")
let products = document.getElementById("header-mobile-drop-title");
let productTypes = document.getElementById("header-mobile-products-drop");


products.onclick = () => {
    if (productTypes.style.display == "none") {
        productTypes.style.display = "flex"
        productTypes.style.opacity = "1"
        chevron.style.transform = "rotate(90deg)"
    } else {
        productTypes.style.display = "none"
        productTypes.style.opacity = "0"
        productTypes.style.transition = "all 0.8s"
        chevron.style.transform = "rotate(0deg)"
    }
}
})
