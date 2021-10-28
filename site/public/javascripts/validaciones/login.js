window.addEventListener("load",()=>{
    let $email = document.querySelector("#email"),
    $pass = document.querySelector("#password"),
    $form = document.querySelector("form"),
    $emailError = document.querySelector("#emailError"),
    $passwordError = document.querySelector("#passwordError"),
    exclamacionHTML = "<i class='fas fa-exclamation-circle'></i>",
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    errores =[$emailError,$passwordError],
    $generalErrors = document.querySelector("#generalErrors")

    $email.addEventListener("blur" , () => {
        switch (true) {
            case !$email.value.trim():
                $emailError.innerHTML = `${exclamacionHTML} Debes ingresar un email`
                $email.style.borderColor = "red"
                break;
            case !regExEmail.test($email.value):
                $emailError.innerHTML = `${exclamacionHTML} Debes ingresar un email valido`
                $email.style.borderColor = "red"
                break;
        
            default:
                $emailError.innerHTML = ``
                $email.style.borderColor = "#87ed6f"
                break;
        }
    })
    $pass.addEventListener("blur" , () => {
        switch (true) {
            case !$pass.value.trim():
                $passwordError.innerHTML = `${exclamacionHTML} Debes ingresar una contraseña`
                $pass.style.borderColor = "red"
                break;
        
            default:
                $passwordError.innerHTML = ``
                $pass.style.borderColor = "#87ed6f"
                break;
        }
    })

    $form.addEventListener("submit", (e) => {
        let error = false;
        e.preventDefault();
        let elementosForm = $form.elements;
        for (let index = 0; index < elementosForm.length - 1; index++) {
            if (elementosForm[index].value.trim() == "" ) {
                elementosForm[index].style.borderColor = "red"
                $generalErrors.innerHTML = "Hay campos vacios"
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
            $generalErrors.innerHTML = `${exclamacionHTML} Hay campos con errores`
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