window.addEventListener('load', function(){
    
    let urlParams = new URLSearchParams(location.search);

    let categories = document.querySelectorAll('.cat-item');
    for(let category of categories){

        category.addEventListener('click', function(e){

            e.preventDefault();

            const urlCategoria = new URL(category.childNodes[1].href)
            const getUrlSearh = new URLSearchParams(urlCategoria.search)

            if(urlParams.has("categoria")){
                switch(getUrlSearh.get("categoria")){
                    case "sol":
                        if(urlParams.get("categoria") == getUrlSearh.get("categoria")){
                            urlParams.delete("categoria");
                        } else {
                            urlParams.delete("categoria");
                            urlParams.append("categoria", getUrlSearh.get("categoria"))
                        }
                        break;
                    case "lectura":
                        if(urlParams.get("categoria") == getUrlSearh.get("categoria")){
                            urlParams.delete("categoria");
                        } else {
                            urlParams.delete("categoria");
                            urlParams.append("categoria", getUrlSearh.get("categoria"))
                        }
                        break;
                }
                
                if(urlParams){
                    window.history.replaceState({},'', `${window.location.pathname}?${urlParams.toString()}`);
                    location.reload();
                } else {
                    window.history.replaceState({},'', `${location.href.split("?")[0]}`);
                    location.reload();
                }

            } else {
                urlParams.append("categoria", getUrlSearh.get("categoria"));
                window.history.replaceState({},'', `${window.location.pathname}?${urlParams.toString()}`);
                location.reload();
            }

        })
    }


    let formas = document.querySelectorAll(".forma-item");
    for(let forma of formas){
        forma.addEventListener('click', function(e){

            e.preventDefault();
            
            let urlForma = new URL(forma.childNodes[1].href)
            let getUrlSearh = new URLSearchParams(urlForma.search)
            
            if(urlParams.has("forma")){
                switch(urlParams.get("forma")){
                    case "aviador":
                        if(urlParams.get("forma") == getUrlSearh.get("forma")){
                            urlParams.delete("forma");
                        } else {
                            urlParams.delete("forma");
                            urlParams.append("forma", getUrlSearh.get("forma"))
                        }
                        break;
                    case "cuadrada":
                        if(urlParams.get("forma") == getUrlSearh.get("forma")){
                            urlParams.delete("forma");
                        } else {
                            urlParams.delete("forma");
                            urlParams.append("forma", getUrlSearh.get("forma"))
                        }
                        break;
                    case "deportivo":
                        if(urlParams.get("forma") == getUrlSearh.get("forma")){
                            urlParams.delete("forma");
                        } else {
                            urlParams.delete("forma");
                            urlParams.append("forma", getUrlSearh.get("forma"))
                        }
                        break;
                    case "redonda":
                        if(urlParams.get("forma") == getUrlSearh.get("forma")){
                            urlParams.delete("forma");
                        } else {
                            urlParams.delete("forma");
                            urlParams.append("forma", getUrlSearh.get("forma"))
                        }
                        break;
                }
                
                if(urlParams == ""){
                    let newURL = location.href.split("?")[0];
                    location.href = newURL;
                } else {
                    let urlBase = location.href.split("?")[0];
                    let urlQuery = decodeURIComponent(urlParams.toString());
                    location.href = `${urlBase}?${urlQuery}`
                }

            } else {
                urlParams.append("forma", getUrlSearh.get("forma"))
                let urlBase = location.href.split("?")[0];
                location.href = `${urlBase}?${urlParams.toString()}`
            }

        })
    }


    let materialItems = document.querySelectorAll('.material-item');
    for(let material of materialItems){

        material.addEventListener('click', function(e){
            
            e.preventDefault();

            const urlMaterial = new URL(material.childNodes[1].href);
            const queryMaterial = new URLSearchParams(urlMaterial.search);

            if(urlParams.has("material")){
                switch(queryMaterial.get("material")){
                    case "acetato":
                        if(urlParams.get("material") == queryMaterial.get("material")){
                            urlParams.delete("material");
                        } else {
                            urlParams.delete("material");
                            urlParams.append("material", queryMaterial.get("material"));
                        }
                        break;
                    case "ecologico":
                        if(urlParams.get("material") == queryMaterial.get("material")){
                            urlParams.delete("material");
                        } else {
                            urlParams.delete("material");
                            urlParams.append("material", queryMaterial.get("material"));
                        }
                        break;
                    case "maderametal":
                        if(urlParams.get("material") == queryMaterial.get("material")){
                            urlParams.delete("material");
                        } else {
                            urlParams.delete("material");
                            urlParams.append("material", queryMaterial.get("material"));
                        }
                        break;
                    case "metal":
                        if(urlParams.get("material") == queryMaterial.get("material")){
                            urlParams.delete("material");
                        } else {
                            urlParams.delete("material");
                            urlParams.append("material", queryMaterial.get("material"));
                        }
                        break;
                }

                if(urlParams){
                    window.history.replaceState({},'', `${window.location.pathname}?${urlParams.toString()}`);
                    location.reload();
                } else {
                    window.history.replaceState({},'', `${location.href.split('?')[0]}`);
                    location.reload();
                }

            } else {
                urlParams.append("material", queryMaterial.get("material"));
                window.history.replaceState({},'', `${window.location.pathname}?${urlParams.toString()}`);
                location.reload();
            }

        })

    }

    let lentes = document.querySelectorAll('.lentes-item');
    for(let lente of lentes){

        lente.addEventListener('click', function(e){

            e.preventDefault();

            const urlLente = new URL(lente.childNodes[1].href);
            const queryLente = new URLSearchParams(urlLente.search);

            if(urlParams.has("lente")){
                switch(queryLente.get("lente")){
                    case "degrade":
                        if(urlParams.get("lente") == queryLente.get("lente")){
                            urlParams.delete("lente");
                        } else {
                            urlParams.delete("lente");
                            urlParams.append("lente", queryLente.get("lente"));
                        }
                        break;
                    case "espejado":
                        if(urlParams.get("lente") == queryLente.get("lente")){
                            urlParams.delete("lente");
                        } else {
                            urlParams.delete("lente");
                            urlParams.append("lente", queryLente.get("lente"));
                        }
                        break;
                    case "polarizado":
                        if(urlParams.get("lente") == queryLente.get("lente")){
                            urlParams.delete("lente");
                        } else {
                            urlParams.delete("lente");
                            urlParams.append("lente", queryLente.get("lente"));
                        }
                        break;
                    case "uniforme":
                        if(urlParams.get("lente") == queryLente.get("lente")){
                            urlParams.delete("lente");
                        } else {
                            urlParams.delete("lente");
                            urlParams.append("lente", queryLente.get("lente"));
                        }
                        break;
                }

                if(urlParams){
                    window.history.replaceState({},'', `${window.location.pathname}?${urlParams.toString()}`);
                    location.reload();
                } else {
                    window.history.replaceState({},'', `${location.href.split("?")[0]}`);
                    location.reload();
                }
            } else {
                urlParams.append("lente", queryLente.get("lente"));
                window.history.replaceState({},'', `${window.location.pathname}?${urlParams.toString()}`);
                location.reload();
            }
        })
    }


    let ofertas = document.querySelectorAll('.oferta-item');
    for(let oferta of ofertas){

        oferta.addEventListener('click', function(e){

            e.preventDefault();

            const urlOferta = new URL(oferta.childNodes[1].href);
            const queryOferta = new URLSearchParams(urlOferta.search);

            if(urlParams.has("oferta")){
                switch(queryOferta.get("oferta")){
                    case "liquidacion":
                        if(urlParams.get("oferta") == queryOferta.get("oferta")){
                            urlParams.delete("oferta");
                        } else {
                            urlParams.delete("oferta");
                            urlParams.append("oferta", queryOferta.get("oferta"));
                        }
                        break;
                    case "express":
                        if(urlParams.get("oferta") == queryOferta.get("oferta")){
                            urlParams.delete("oferta");
                        } else {
                            urlParams.delete("oferta");
                            urlParams.append("oferta", queryOferta.get("oferta"));
                        }
                        break;
                }

                if(urlParams){
                    window.history.replaceState({},'', `${window.location.pathname}?${urlParams.toString()}`);
                    location.reload();
                } else {
                    window.history.replaceState({},'', `${location.href.split("?")[0]}`);
                    location.reload();
                }
            } else {
                urlParams.append("oferta", queryOferta.get("oferta"));
                window.history.replaceState({},'', `${window.location.pathname}?${urlParams.toString()}`);
                location.reload();
            }
        })
    }
    
    let squareCat = document.querySelectorAll('#cat-square');
    
    if(urlParams.has('categoria')){
        switch(urlParams.get('categoria')){
            case "sol":
                squareCat[0].classList.toggle('fa-square');
                squareCat[0].classList.toggle('fa-check-square');
                break;
            case "lectura":
                squareCat[1].classList.toggle('fa-square');
                squareCat[1].classList.toggle('fa-check-square');
                break;
        }
    }

    let squareForma = document.querySelectorAll('#forma-square');
    if(urlParams.has('forma')){
        switch(urlParams.get('forma')){
            case "aviador":
                squareForma[0].classList.toggle('fa-square');
                squareForma[0].classList.toggle('fa-check-square');
                break;
            case "cuadrada":
                squareForma[1].classList.toggle('fa-square');
                squareForma[1].classList.toggle('fa-check-square');
                break;
            case "deportivo":
                squareForma[2].classList.toggle('fa-square');
                squareForma[2].classList.toggle('fa-check-square');
                break;
            case "redonda":
                squareForma[3].classList.toggle('fa-square');
                squareForma[3].classList.toggle('fa-check-square');
                break;
        }
    }

    let squareMaterial = document.querySelectorAll('#material-square');
    if(urlParams.has('material')){
        switch(urlParams.get('material')){
            case "acetato":
                squareMaterial[0].classList.toggle('fa-square');
                squareMaterial[0].classList.toggle('fa-check-square');
                break;
            case "ecologico":
                squareMaterial[1].classList.toggle('fa-square');
                squareMaterial[1].classList.toggle('fa-check-square');
                break;
            case "maderametal":
                squareMaterial[2].classList.toggle('fa-square');
                squareMaterial[2].classList.toggle('fa-check-square');
                break;
            case "metal":
                squareMaterial[3].classList.toggle('fa-square');
                squareMaterial[3].classList.toggle('fa-check-square');
                break;
        }
    }

    let squareLente = document.querySelectorAll('#lente-square');
    if(urlParams.has('lente')){
        switch(urlParams.get('lente')){
            case "degrade":
                squareLente[0].classList.toggle('fa-square');
                squareLente[0].classList.toggle('fa-check-square');
                break;
            case "espejado":
                squareLente[1].classList.toggle('fa-square');
                squareLente[1].classList.toggle('fa-check-square');
                break;
            case "polarizado":
                squareLente[2].classList.toggle('fa-square');
                squareLente[2].classList.toggle('fa-check-square');
                break;
            case "uniforme":
                squareLente[3].classList.toggle('fa-square');
                squareLente[3].classList.toggle('fa-check-square');
                break;
        }
    }

    let squareOferta = document.querySelectorAll('#oferta-square');
    if(urlParams.has('oferta')){
        switch(urlParams.get('oferta')){
            case "liquidacion":
                squareOferta[0].classList.toggle('fa-square')
                squareOferta[0].classList.toggle('fa-check-square');
                break;
            case "express":
                squareOferta[1].classList.toggle('fa-square')
                squareOferta[1].classList.toggle('fa-check-square');
                break;
        }
    }
})

