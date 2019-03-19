import "./styles.css";

const player = "ammar";

let experiance = 100;

let wizard = false;

if (experiance > 90) {
  let wizard = true;
  console.log("inside: " + wizard);
}
console.log("outside: " + wizard);
