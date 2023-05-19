const div1 = document.getElementById("primero");
const div2 = document.getElementById("segundo");
const div3 = document.getElementById("tercero");
const div4 = document.getElementById("cuarto");
const div5 = document.getElementById("quinto");
const div6 = document.getElementById("sexto");
const div7 = document.getElementById("septimo");
const div8 = document.getElementById("octavo");
const div9 = document.getElementById("noveno");

const nextItem = document.querySelector(".next-item");
const prevItem = document.querySelector(".previous-item");

const divs = [div1, div2, div3, div4, div5, div6, div7, div8, div9];

const editar = document.getElementById("editar");
editar.innerHTML = "";
let counter = 0;

nextItem.addEventListener("click", next);

function next() {

    if(!editar.hasChildNodes()) {
        editar.append(divs[counter]);
        divs[counter].style.display = "flex";
        counter++;
        console.log(counter);    
    } else {
       if (counter >= 0 && counter < divs.length) {
        editar.removeChild(divs[counter - 1]);
        editar.append(divs[counter]);
        divs[counter].style.display = "flex";
        counter++;
        console.log(counter);
    } else if (counter === divs.length) {
        counter = 0;
        editar.removeChild(divs[divs.length - 1]);
        editar.append(divs[counter]);
        divs[counter].style.display = "flex";
        counter++;
        console.log(counter);
    } else {
        --counter;
        editar.removeChild(divs[counter]);
        editar.append(divs[counter]);
        divs[counter].style.display = "flex";
        console.log(counter);
    }

    }
}

prevItem.addEventListener("click", previous);

function previous() {
    if(!editar.hasChildNodes()) {
        return;
    } else {
        if (counter > 1) {
            --counter;
            editar.removeChild(divs[counter]);
            editar.append(divs[counter - 1]);
            divs[counter - 1].style.display = "flex";
            console.log(counter);
        } else if (counter === 1) {
            counter = divs.length;
            editar.removeChild(divs[0]);
            editar.append(divs[counter - 1]);
            divs[counter - 1].style.display = "flex";
            console.log(counter);
        } else {
            counter = divs.length;
            editar.removeChild(divs[0]);
            editar.append(divs[counter - 1]);
            divs[counter - 1].style.display = "flex";
            console.log(counter);
        }
    }
}

