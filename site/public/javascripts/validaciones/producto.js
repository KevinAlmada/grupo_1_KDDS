function qs(element){
    return document.querySelector(element);
}




window.addEventListener('load', function(){

    let $inputNombre = qs('#nombre'),
        $nombreErrors = qs('#nombreErrors'),
        $inputDescripcion = qs('#descripcion'),
        $descripcionErrors = qs('#descripcionErrors'),
        $inputImagen = qs('#imagen'),
        $imagenErrors = qs('#imagenErrors'),
        $inputPrecio = qs('#precio'),
        $precioErrors = qs('#precioErrors'),
        $inputDescuento = qs('#discount'),
        $descuentoErrors = qs('#descuentoErrors'),
        $selectCategorias = qs('#categorias'),
        $categoriasErrors = qs('#categoriasErrors'),
        
        $selectForma = qs('#forma'),
        $formaErrors = qs('#formaErrors'),
        $selectMaterial = qs('#material'),
        $materialErrors = qs('#materialErrors'),
        $selectLente = qs('#lente'),
        $lenteErrors = qs('#lenteErrors')

        $form = qs('#form'),
        $submitError = qs('#submitError'),

        regExAlpha = /^[a-zA-Z0-9\sñáéíóúü ]*$/,
        regExPrecio = /^[0-9]\d*(\.\d+)?$/,
        regExDescuento = /^\d+$/,
        regExImg = /(.jpg|.jpeg|.png|.gif)$/i;

    $inputNombre.addEventListener('blur', function(){
        switch(true){
            case !$inputNombre.value.trim():
                $nombreErrors.innerHTML = 'El campo nombre es obligatorio';
                $inputNombre.classList.add('is-invalid');
                break;
            case $inputNombre.value.trim() < 5:
                $nombreErrors.innerHTML = 'El nombre debe tener al menos 5 caracteres';
                $inputNombre.classList.add('is-invalid');
                break;
            case !regExAlpha.test($inputNombre.value):
                $nombreErrors.innerHTML = 'Ingrese un nombre valido';
                $inputNombre.classList.add('is-invalid');
                break
            default:
                $inputNombre.classList.remove('is-invalid');
                $inputNombre.classList.add('is-valid');
                $nombreErrors.innerHTML = "";
                break;
        }
    })

    $inputDescripcion.addEventListener('blur', function(){
        switch(true){
            case $inputDescripcion.value.trim() < 20:
                $descripcionErrors.innerHTML = 'El producto debe tener al menos 5 caracteres';
                $inputDescripcion.classList.add('is-invalid');
                break;
            default:
                $inputDescripcion.classList.remove('is-invalid');
                $inputDescripcion.classList.add('is-valid');
                $descripcionErrors.innerHTML = "";
                break;
        }
    });

    // $inputImagen.addEventListener('blur', function(){
    //     switch(true){
    //         case !regExImg.test($inputImagen.value.toLowerCase()):
    //             $imagenErrors.innerHTML = 'Ingrese la imagen con una extension valida (EJ: PG, JPEG, PNG, GIF)';
    //             $inputImagen.classList.add('is-invalid');
    //             break;
    //         default:
    //             $inputImagen.classList.remove('is-invalid');
    //             $inputImagen.classList.add('is-valid');
    //             $imagenErrors.innerHTML = "";
    //             break;
    //     }
    // })
    $inputImagen.addEventListener('blur', function fileValidation(){
        var errorImage = document.getElementById('imagenErrors');
        var filePath = inputImage.value; //Capturo el valor del input
        var allowefExtensions = /(.jpg|.jpeg|.png|.gif)$/i; //Extensiones permitidas
        if(!allowefExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
            let error = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)'
            errorImage.innerHTML = error;
            inputImage.value = '';
            document.getElementById('#preview').innerHTML = '';
            return false;
        }else{
            // Image preview
            if(inputImage.files && inputImage.files[0]){
                var reader = new FileReader();
                reader.onload = function(e){
                    document.getElementById('preview').innerHTML = '<img src="' + e.target.result +'"/>';
                };
                reader.readAsDataURL(inputImage.files[0]);
                errorImage.innerHTML = '';
            }
        }
    })


    $inputPrecio.addEventListener('blur', function(){
        switch(true){
            case !regExPrecio.test($inputPrecio.value):
                $precioErrors.innerHTML = 'Ingrese un precio valido';
                $inputPrecio.classList.add('is-invalid');
                break;
            default:
                $inputPrecio.classList.remove('is-invalid');
                $inputPrecio.classList.add('is-valid');
                $precioErrors.innerHTML = '';
                break;
        }
    })

    $inputDescuento.addEventListener('blur', function(){
        switch(true){
            case $inputDescuento.value:
                if (!regExDescuento.test($inputDescuento.value)) {
                    $descuentoErrors.innerHTML = 'Ingrese un descuento valido';
                    $inputDescuento.classList.add('is-invalid');
                break;
                }else{
                    $inputDescuento.classList.add('is-valid');
                    $descuentoErrors.innerHTML = "";
                }
                
            default:
                $inputDescuento.classList.remove('is-invalid');
                $inputDescuento.classList.add('is-valid');
                $descuentoErrors.innerHTML = "";
                break;
        }
    })

    $selectCategorias.addEventListener('blur', function(){
        if(!$selectCategorias.value.trim()){
            $categoriasErrors.innerHTML = 'Campo requerido';
            $selectCategorias.classList.add('is-invalid');
        } else {
            $selectCategorias.classList.remove('is-invalid');
            $selectCategorias.classList.add('is-valid');
            $categoriasErrors.innerHTML = "";
        }
    })

    $selectForma.addEventListener('blur', function(){
        if(!$selectForma.value.trim()){
            $formaErrors.innerHTML = 'Campo requerido';
            $selectForma.classList.add('is-invalid');
        } else {
            $selectForma.classList.remove('is-invalid');
            $selectForma.classList.add('is-valid');
            $formaErrors.innerHTML = "";
        }
        
    })

    $selectMaterial.addEventListener('blur', function(){
        if(!$selectMaterial.value.trim()){
            $materialErrors.innerHTML = 'Campo requerido';
            $selectMaterial.classList.add('is-invalid');
        } else {
            $selectMaterial.classList.remove('is-invalid');
            $selectMaterial.classList.add('is-valid');
            $materialErrors.innerHTML = "";
        }
        
    })

    $selectLente.addEventListener('blur', function(){
        if(!$selectLente.value.trim()){
            $lenteErrors.innerHTML = 'Campo requerido';
            $selectLente.classList.add('is-invalid');
        } else {
            $selectLente.classList.remove('is-invalid');
            $selectLente.classList.add('is-valid');
            $lenteErrors.innerHTML = "";
        }
        
    })

    $form.addEventListener('submit', function(e){
        let error = false;
        e.preventDefault();
        let elementsForm = this.elements;

        for (let index = 0; index < elementsForm.length-2; index++){
            if(elementsForm[index].value == "" && elementsForm[index].name != "imagenProducto" || elementsForm[index].classList.contains("is-invalid")){
                elementsForm[index].classList.add('is-invalid');
                $submitError.innerHTML = 'Los campos señalados son obligatorios';
                error = true;
            }
        }
        if(!error){
            console.log('Todo bien');
            $form.submit();
        }
    })
})