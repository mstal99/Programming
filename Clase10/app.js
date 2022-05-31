const csv =
  "javascript, python, c++, rust, go, hola, hola, como estás?, me gusta el chocolate,";
let counter = 0;

function getValues(string) {
  console.log(counter);
  const value = string.slice(counter, string.indexOf(",", counter));
  console.log(value.length);
  counter += value.length + 1;
  return value;
}

const container = document.getElementById("container");

function printValues() {
  const h3 = document.createElement("h3");
  const value = getValues(csv);
  h3.innerText = value;
  container.append(h3);
}
