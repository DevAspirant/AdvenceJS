import "./styles.css";

/* ---- understand let & constant */
/*
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
*/
/* constant object : you can change the constant by assign the proprties */
/*const obj = {
  player: "bayan",
  experiance: 1,
  wizard: false
};
obj.wizard = true;
let check = obj.wizard;
console.log(check);

/* destructring  */
// we will use the same obj object for this tutorial
/* const player = obj.player;
const experiance = obj.experiance;
let wizard = obj.wizard;

const { player, experiance } = obj;*/
const name = "ammar falmban";

const obj = {
  [name]: "hello",
  [1 + 2]: "arabic"
};
console.log(obj);
// ------------
const full = "ammar";
const mid = "falmban";
