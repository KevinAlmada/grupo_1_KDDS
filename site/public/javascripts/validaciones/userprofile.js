window.addEventListener('load',function(){
    let $nombre = document.querySelector('#name')
    let $apellido = document.querySelector('#apellido')
    let $nombreConError = document.querySelector('#nameError')
    let $apellidoConError = document.querySelector('#apellidoError')
    let $form = document.querySelector("#formUserEdit")
    let $totalError = document.querySelector('#totalError')




    $nombre.addEventListener("blur" , () => {
        switch (true) {
            case !$nombre.value.trim():
                $nombreConError.innerHTML = "Introduce tu nombre"
                $nombre.style.borderColor = "red"
                $nombreConError.style.margin = "10px"
                break;
        
            default:
                $nombreConError.innerHTML = ``
                $nombre.style.borderColor = "#87ed6f"
                break;
        }
    })
    $apellido.addEventListener("blur" , () => {
        switch (true) {
            case !$apellido.value.trim():
                $apellidoConError.innerHTML = "Introduce tu apellido"
                $apellido.style.borderColor = "red"
                $apellidoConError.style.margin = "10px"
                
                break;
        
            default:
                $apellidoConError.innerHTML = ''
                $apellido.style.borderColor = "#87ed6f"
                break;
        }
    })
    
    $form.addEventListener("submit", function(e) {
        let error = false;
        e.preventDefault();
        let elementosForm = $form.elements;
        for (let index = 0; index < elementosForm.length - 5; index++) {
            if (elementosForm[index].value.trim() == "" ) {
                elementosForm[index].style.borderColor = "red"
                $totalError.innerHTML= "Los Campos marcados con * son obligatorios"
                
                error = true
            }
            
        }
        if (!error) {
            alert('Se guardaron tus cambios');
            $form.submit() 
        }
    } )

})