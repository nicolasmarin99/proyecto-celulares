import { enviarDatos } from "./operaciones.js";

// Obtener los juegos y crear las tarjetas
const obtenerCelulares = async () => {
    try {
        const response = await fetch("https://api-celulares-proyecto-propio.onrender.com/celulares");
        const data = await response.json();
        return data.celulares; // Devolver solo el array de juegos
    } catch (error) {
        console.log(`el error es: ${error}`);
    }
}


// Función para crear las tarjetas de los juegos
const crearTarjetas = (celularesArray) => {
    let celularRow = document.getElementById("celularRow");

    celularesArray.map((celular) => {
        const { name, precio, img: imagen } = celular;

        const divRow = document.createElement("div");
        divRow.classList.add("col-xl-3");
        divRow.classList.add("col-lg-3");
        divRow.classList.add("col-md-3");
        divRow.classList.add("col-sm-12");
        divRow.classList.add("col-xs-12");
        divRow.classList.add("mt-5");
        divRow.classList.add("mb-2");

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = imagen;
        img.classList.add("card-img-top");

        const divBody = document.createElement("div");
        divBody.classList.add("card-body");

        const titulo = document.createElement("h5");
        titulo.classList.add("card-title");
        titulo.textContent = name;

        const subTitulo = document.createElement("p");
        subTitulo.classList.add("card-text");
        subTitulo.textContent = precio;

        const btnMostrar = document.createElement("button")
        btnMostrar.classList.add("btn");
        btnMostrar.classList.add("btn-danger");
        btnMostrar.textContent = "mostrar detalles";
        btnMostrar.addEventListener("click", () => {
            enviarDatos(name, precio, imagen, descripcion, cantidad);
        })


        divRow.appendChild(card);

        card.appendChild(img);
        card.appendChild(divBody);

        divBody.appendChild(titulo);
        divBody.appendChild(subTitulo);
        divBody.appendChild(btnMostrar);


        celularRow.appendChild(divRow);
    })
}


// Llamar a la función para obtener y crear las tarjetas
obtenerCelulares()
    .then((celulares) => {
        crearTarjetas(celulares);
    })
    .catch((error) => {
        console.log(error);
    });



