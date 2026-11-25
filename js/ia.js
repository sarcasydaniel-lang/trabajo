function verPapaNoel() {
  document.getElementById("texto").textContent = "Papá Noel viste de rojo, vive en el Polo Norte y reparte regalos en Navidad en su trineo.";
}

function verJesus() {
  document.getElementById("texto").textContent = "Jesús nació en un pesebre en Belén y su nacimiento es lo que se celebra en la Navidad.";
}

function verGrinch() {
  document.getElementById("texto").textContent = "El Grinch es un personaje verde y gruñón que intenta robar la Navidad porque la odia.";
}

function verReyes() {
  document.getElementById("texto").textContent = "Los Reyes Magos (Melchor, Gaspar y Baltasar) siguieron una estrella hasta Belén para llevar regalos a Jesús.";
}
function verBicicleta() {
  document.getElementById("precio").textContent = "Bicicleta de montaña — Precio: 850 Bs.";
}

function verConsola() {
  document.getElementById("precio").textContent = "Consola de videojuegos — Precio: 2.400 Bs.";
}

function verPeluche() {
  document.getElementById("precio").textContent = "Oso de peluche gigante — Precio: 150 Bs.";
}

function verReloj() {
  document.getElementById("precio").textContent = "Reloj inteligente deportivo — Precio: 320 Bs.";
}
let total = 0;

function sumar(precio) {
    total = total + precio;
    document.getElementById("total").textContent = total;
}