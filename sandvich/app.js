const base = prompt(
  "ingrese la base del sandwich: carne, pollo o veggie"
).toLowerCase();
const pan = prompt(
  "ingrese el pan del sandwich: blanco, negro o sin gluten"
).toLowerCase();
const ingredientes = prompt(
  "ingrese los ingredientes del sandwich: tomate, lechuga y/o queso"
).toLowerCase();
let total = 0;
const h1 = document.getElementById("resultado");

if (base === "carne") {
  total += 200;
} else if (base === "pollo") {
  total += 150;
} else if (base === "veggie") {
  total += 100;
}

if (pan === "blanco") {
  total += 50;
} else if (pan === "negro") {
  total += 60;
} else if (pan === "sin gluten") {
  total += 75;
}

let ingre = "";

if (ingredientes.includes("tomate")) {
  total += 15;
  ingre += "tomate ";
}
if (ingredientes.includes("lechuga")) {
  total += 10;
  ingre += "lechuga ";
}
if (ingredientes.includes("queso")) {
  total += 20;
  ingre += "queso ";
}

alert(total);
h1.innerText = `tu sandwich de ${base} y pan ${pan} tiene ${ingre} y vale $${total}`;
