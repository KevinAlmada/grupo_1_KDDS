window.addEventListener("load",()=>{
    let $email = document.querySelector("#email"),
    $pass = document.querySelector("#password"),
    $form = document.querySelector("form"),
    $emailError = document.querySelector("#emailError"),
    $passwordError = document.querySelector("#passwordError"),
    exclamacionHTML = "<i class='fas fa-exclamation-circle'></i>"
    
    $email.addEventListener("blur" , () => {
        switch (true) {
            case !$email.value.trim():
                $emailError.innerHTML = `${exclamacionHTML} Debes ingresar un email`
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
                //llenar un span con errores
                error = true
            }
            
        }
        if (!error) {
            console.log("todo ok");
            $form.submit() 
        }
    } )
})