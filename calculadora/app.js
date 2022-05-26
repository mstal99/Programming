const form = document.querySelector("form");
const result = document.querySelector("#result");

// this functions are the calculation logic
function sum(num1, num2) {
  return (resultado = num1 + num2);
}
function res(num1, num2) {
  return (resultado = num1 - num2);
}
function div(num1, num2) {
  return (resultado = num1 / num2);
}
function mul(num1, num2) {
  return (resultado = num1 * num2);
}

// this event listener first of all prevents the form to be sent
// and takes the values of the form to add them to the functions
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (form.op.value === "sum") {
    resultado = sum(parseInt(form.num1.value), parseInt(form.num2.value));
    result.innerHTML = resultado;
  } else if (form.op.value === "res") {
    resultado = res(parseInt(form.num1.value), parseInt(form.num2.value));
    result.innerHTML = resultado;
  } else if (form.op.value === "div") {
    resultado = div(parseInt(form.num1.value), parseInt(form.num2.value));
    result.innerHTML = resultado;
  } else if (form.op.value === "mul") {
    resultado = mul(parseInt(form.num1.value), parseInt(form.num2.value));
    result.innerHTML = resultado;
  }
});
// there might be a way to not have
// to "parseInt" in every if sentence, but i'm being lazy
