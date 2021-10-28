window.addEventListener("load", () => {
    let $inputName = document.querySelector("#nombre"),
    $inputLastName = document.querySelector("#apellido"),
    $inputEmail = document.querySelector("#email"),
    $inputPass = document.querySelector("#password"),
    $inputPass2 = document.querySelector("#password2"),
    $errorsName = document.querySelector("#errorsName"),
    $errorsLastName = document.querySelector("#errorsLastName"),
    $errorsEmail = document.querySelector("#errorsEmail"),
    $errorsPass = document.querySelector("#errorsPass"),
    $errorsPass2 = document.querySelector("#errorsPass2"),
    $submitButton = document.querySelector(".enviar"),
    $form = document.querySelector("form"),
    $generalErrors = document.querySelector("#generalErrors");
    
    let exclamacionHTML = "<i class='fas fa-exclamation-circle'></i>"

    let regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z]).{8,12}$/;
let errores =[$errorsLastName,$errorsName,$errorsEmail,$errorsPass,$errorsPass2]
    $inputName.addEventListener("blur",() => {
        switch (true) { // compara los casos que den true
            case !$inputName.value.trim():
                $errorsName.innerHTML = `${exclamacionHTML}El campo nombre es obligatiorio`
                $inputName.style.borderColor = "red"
                break;
            case !regExAlpha.test($inputName.value):
                $errorsName.innerHTML = `${exclamacionHTML}Ingresa un nombre valido`
                $inputName.style.borderColor = "red"
                break;
            default:
                $inputName.style.borderColor = "#87ed6f"
                $errorsName.innerHTML = ""
                break;
        }
    })
    $inputLastName.addEventListener("blur",() => {
        switch (true) { // compara los casos que den true
            case !$inputLastName.value.trim():
                $errorsLastName.innerHTML = `${exclamacionHTML}El campo apellido es obligatiorio`
                $inputLastName.style.borderColor = "red"
                break;
            case !regExAlpha.test($inputLastName.value):
                $errorsLastName.innerHTML = `${exclamacionHTML}Ingresa un apellido valido`
                $inputLastName.style.borderColor = "red"
                break;
            default:
                $inputLastName.style.borderColor = "#87ed6f"
                $errorsLastName.innerHTML = ""
                break;
        }
    })
    $inputEmail.addEventListener("blur",() => {
        switch (true) {
            case !$inputEmail.value.trim():
                $errorsEmail.innerHTML = `${exclamacionHTML} El campo E-mail es obligatorio`
                $inputEmail.style.borderColor = "red"
                break;
            case !regExEmail.test($inputEmail.value):
                $errorsEmail.innerHTML = `${exclamacionHTML} Ingresa un E-mail valido`
                $inputEmail.style.borderColor = "red"
                break;
            default:
                $inputEmail.style.borderColor = "#87ed6f"
                $errorsEmail.innerHTML = ""
                break;
        }
    })
    $inputPass.addEventListener("blur",() => {
        switch (true) {
            case !$inputPass.value.trim():
                $errorsPass.innerHTML = `${exclamacionHTML} El campo contraseña es obligatorio`
                $inputPass.style.borderColor = "red"
                break;
            case !regExPass.test($inputPass.value):
                $errorsPass.innerHTML = `${exclamacionHTML} La contraseña debe ser alfanumerica y debe tener 8 caracteres`
                $inputPass.style.borderColor = "red"
                break;
            default:
                $inputPass.style.borderColor = "#87ed6f"
                $errorsPass.innerHTML = ""
                break;
        }
    })
    $inputPass2.addEventListener("blur",() => {
        switch (true) {
            case !$inputPass2.value.trim():
                $errorsPass2.innerHTML = `${exclamacionHTML} Debes reingresar tu contraseña`
                $inputPass2.style.borderColor = "red"
                break;
            case $inputPass.value != $inputPass2.value:
                $errorsPass2.innerHTML = `${exclamacionHTML} Las contraseñas no coinciden`
                $inputPass2.style.borderColor = "red"
                break;
            default:
                $inputPass2.style.borderColor = "#87ed6f"
                $errorsPass2.innerHTML = ""
                break;
        }
    })
    $form.addEventListener("submit", (e) => {
        let error = false;
        e.preventDefault();
        let elementosForm = $form.elements;
        for (let index = 0; index < elementosForm.length - 1; index++) {
            if (elementosForm[index].value == "" ) {
                elementosForm[index].style.borderColor = "red"
                
                error = true
            }
        }
        let erroresConfirm = 0
        for (const error of errores) {
            if (error.innerHTML !== "" ) {
                erroresConfirm = 1
            }
        }
        if (erroresConfirm == 1) {
            $generalErrors.innerHTML = "Hay campos con errores"
        }else{
            $generalErrors.innerHTML = ""
            if (error == false) {
                   $form.submit()  
            }else{
                $generalErrors.innerHTML = `${exclamacionHTML} Hay campos vacios`
            }  
        }
          
    } )

})
/* 
eliminar user 
bloquear
recuperar contraseña 
*/