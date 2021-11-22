 
let menuButton = document.getElementById("menuAdminButton")
let menuAdmin = document.getElementById("menuLateralAdmin")
menuButton.addEventListener("click" , () => {
    menuAdmin.classList.toggle("adminMenuHide")
    menuAdmin.classList.toggle("adminMenuShow")
})
