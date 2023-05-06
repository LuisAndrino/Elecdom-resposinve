const productos = [
    {
        texto: "Tomacorriente",
        img: "img/dasd.png",
        precio: "Q200"
    }, {
        texto: "Bombilla",
        img: "img/Bombilla-Incandescente-100W-Opaca-Sylvania_97df9c5.png",
        precio: "Q300"
    }, 
    {
        texto: "Tester",
        img: "img/MUT-830-a.png",
        precio: "Q500"
    }, 
    {
        texto: "Plug",
        img: "img/71ItIEIrIML.png",
        precio: "Q602"
    },
    {
        texto: "Flaponera",
        img: "img/788174_1.png",
        precio: "Q200"
    }, {
        texto: "CortaFuego",
        img: "img/FV-AA.png",
        precio: "Q300"
    }, 
]

function elementos(productos){
    //Creando Elementos HTML
    const divMainItems = document.createElement("div");
    divMainItems.classList.add("main-items");
    const imgElement = document.createElement("img");
    const parrafoElement = document.createElement("p");
    const btnElements = document.createElement("button");
    const divEditar = document.querySelector("#editar")

    //Creando los botones
    const cambiar = document.querySelector(".next-item")
    const retroceder = document.querySelector(".previous-item")

    //Asignando valores al html
    imgElement.src = productos[0].img;
    parrafoElement.textContent = `${productos[0].texto} - ${productos[0].precio}`;
    btnElements.textContent = `Info ${productos[0].texto}`

    //Eventos
    let contador = 1;
    cambiar.addEventListener("click", cambiarPantalla);
    function cambiarPantalla(){
        
        divMainItems.classList.remove("transition-l");
        divMainItems.classList.add("transition");

        divMainItems.addEventListener("animationend", function() {
        divMainItems.classList.remove("transition");
    });


        if(contador >= 0 && contador < productos.length){
                imgElement.src = productos[contador].img;
                parrafoElement.textContent = `${productos[contador].texto} - ${productos[contador].precio}`;
                btnElements.textContent = `Info ${productos[contador].texto}`
                console.log(contador)
                contador++;

                if(contador >= productos.length){
                    contador = 0;
                }

        } 
        
    }


    retroceder.addEventListener("click", retrocederPantalla);

    function retrocederPantalla() {

        divMainItems.classList.remove("transition");
        divMainItems.classList.add("transition-l");

        divMainItems.addEventListener("animationend", function() {
        divMainItems.classList.remove("transition-l");
        });

        if (contador > 0 && contador <= productos.length) {
            contador--;
            imgElement.src = productos[contador].img;
            parrafoElement.textContent = `${productos[contador].texto} - ${productos[contador].precio}`;
            btnElements.textContent = `Info ${productos[contador].texto}`;
            console.log(contador);
        } else if (contador <= 0) {
            contador = productos.length - 1;
            imgElement.src = productos[contador].img;
            parrafoElement.textContent = `${productos[contador].texto} - ${productos[contador].precio}`;
            btnElements.textContent = `Info ${productos[contador].texto}`;
            console.log(contador);
        }
}


    //Uniendo el html
    divMainItems.append(imgElement, parrafoElement);
    divEditar.append(divMainItems, btnElements);
}

elementos(productos);





//TODO:
//Terminar el contador