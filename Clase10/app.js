const csv = "javascript, python, c++, rust, go,";

let string = csv;
let values = "";

function getValues() {
  values = string.slice(0, string.indexOf(","));
  console.log(string.slice(0, string.indexOf(",")));
  string = string.slice(string.indexOf(" ") + 1);
}

const container = document.getElementById("container");

function printValues() {
  const h3 = document.createElement("h3");
  getValues();
  h3.innerText = values;
  container.append(h3);
}
