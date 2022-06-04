const arrayCorreosPendientes = [
  "iroman@itbank.com",
  "loki%itbank.com",
  "loki@itbank.com",
  "@thanositbank.com",
  "thanos@itbank.com",
];

let counter = 0;

function validateMail(array) {
  if (
    array[counter].includes("@", 1) &&
    array[counter].endsWith("itbank.com")
  ) {
    console.log("verdad");
  }
}
