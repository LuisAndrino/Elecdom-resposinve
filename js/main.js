const productos = [
    {
        texto: "Tomacorriente Q200",
        img: "/img/dasd.png"
    }, {
        texto: "Bombilla - Q300",
        img: "img/Bombilla-Incandescente-100W-Opaca-Sylvania_97df9c5.png"
    }, 
    {
        texto: "Tester - Q500",
        img: "img/MUT-830-a.png"
    }, 
    {
        texto: "Plug - Q602",
        img: "img/71ItIEIrIML.png"
    },
    {
        texto: "Flaponera Q200",
        img: "/img/788174_1.png"
    }, {
        texto: "CortaFuego - Q300",
        img: "/img/FV-AA.png"
    }, 
]

const cambiar = document.querySelector(".next-item")
const retroceder = document.querySelector(".previous-item")
const img = document.querySelector(".primer-item");
const text = document.querySelector(".primer-text") 
let contador = 1;
img.setAttribute("src", productos[0].img);
text.textContent = productos[0].texto;


cambiar.addEventListener("click", cambiarPantalla);

function cambiarPantalla(){
    
    if(contador >= 0 && contador != productos.length){
        img.setAttribute("src", productos[contador].img);
        text.textContent = productos[contador].texto;
        contador++;
    } else if (contador == productos.length){
        contador = 0;
        img.setAttribute("src", productos[contador].img);
        text.textContent = productos[contador].texto;
        contador++;
    }

    console.log(contador);
}

retroceder.addEventListener("click", retrocederPantalla);

function retrocederPantalla(){
    
    if(contador>= 0 && contador <= productos.length){
        --contador
        img.setAttribute("src", productos[contador].img);
        text.textContent = productos[contador].texto;
    } else {
        contador = productos.length;
        img.setAttribute("src", productos[--contador].img);
        text.textContent = productos[contador].texto;    
    }
  
   
}