const form = document.querySelector("form");
const results = document.querySelector("#results");
const total = document.querySelector("#total");
const eachPays = document.querySelector("#eachPays");

function nameAndAmount(name, amount) {
  return `${name}: $${amount}`;
}
