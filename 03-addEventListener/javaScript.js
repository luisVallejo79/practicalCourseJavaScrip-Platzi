const h1 = document.querySelector("#title");

const input1 = document.querySelector("#num1");
const input2 = document.querySelector("#num2");
const p = document.querySelector("#pResult");
const btnSumar = document.querySelector("#btnSumar");
const btnRestar = document.querySelector("#btnRestar");
const btnMultiplicar = document.querySelector("#btnMultiplicar");

h1.innerHTML = "Aprendiendo sobre AddEventListener";

const sumar = () => {
  const sum = Number(input1.value) + Number(input2.value);
  p.innerText = "Resultado de la suma: " + sum;
};
const restar = () => {
  const rest = Number(input1.value) - Number(input2.value);
  p.innerText = "Resultado de la resta: " + rest;
};
const multiplicar = () => {
  const mult = Number(input1.value) * Number(input2.value);
  p.innerText = "Resultado de la multiplicacion: " + mult;
};
btnSumar.addEventListener("click", sumar);
btnRestar.addEventListener("click", restar);
btnMultiplicar.addEventListener("click", multiplicar);
