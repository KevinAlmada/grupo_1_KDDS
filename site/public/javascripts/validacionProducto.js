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

        regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
        regExPrecio = /($[0-9,]+(.[0-9]{2})?)/,
        regExDescuento = /^\d+$/,
        regExImg = /^.*\.(jpg|gif|png|jpeg)$/;

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

    $inputImagen.addEventListener('blur', function(){
        switch(true){
            case !regExImg.test($inputImagen.value.toLowerCase()):
                $imagenErrors.innerHTML = 'Ingrese la imagen con una extension valida (EJ: PG, JPEG, PNG, GIF)';
                $inputImagen.classList.add('is-invalid');
                break;
            default:
                $inputImagen.classList.remove('is-invalid');
                $inputImagen.classList.add('is-valid');
                $imagenErrors.innerHTML = "";
                break;
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
                $precioErrors.innerHTML = "";
                break;
        }
    })

    $inputDescuento.addEventListener('blur', function(){
        switch(true){
            case !regExDescuento.test($inputDescuento.value):
                $descuentoErrors.innerHTML = 'Ingrese un descuento valido';
                $inputDescuento.classList.add('is-invalid');
                break;
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
})