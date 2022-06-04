const form = document.querySelector("form");
const results = document.querySelector("#results");
const total = document.querySelector("#total");
const eachPays = document.querySelector("#eachPays");

function nameAndAmount(name, amount) {
  return `${name}: $${amount}`;
}
let totalAmount = 0;
let divider = 0;

function addItem() {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (form.name.value != "" && form.amount.value != "") {
      totalAmount += parseInt(form.amount.value);
      total.innerText = totalAmount;
      const li = document.createElement("li");
      li.classList.add("list-group-item", "item");
      li.innerText = nameAndAmount(form.name.value, form.amount.value);
      results.append(li);
      form.name.value = "";
      form.amount.value = "";
      divider++;
      eachPays.innerText = totalAmount / divider;
    }
  });
}
