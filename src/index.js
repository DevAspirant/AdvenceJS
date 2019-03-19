import "./styles.css";

/* ---- understand let & constant */
// constant def into ES
const player = "ammar";
// variable def into ES
let experiance = 100;
// variable def into ES
let wizard = false;

if (experiance > 90) {
  let wizard = true;
  console.log("inside: " + wizard);
}
console.log("outside: " + wizard);

/* constant object : you can change the constant by assign the proprties */
const obj = {
  player: "bayan",
  experiance: 1,
  wizard: false
};
obj.wizard = true;
let check = obj.wizard;
console.log(check);
