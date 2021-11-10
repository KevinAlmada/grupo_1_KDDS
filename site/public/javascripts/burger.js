window.addEventListener("load", () => {
    let sidebar = document.getElementById("menuLateral")
    let hamburger = document.querySelector(".hamburger");
    
    hamburger.onclick = () => {
        hamburger.classList.toggle("is-active");
        sidebar.classList.toggle("menu-deploy")
        sidebar.style.transition = "all 0.8s"
}     


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
