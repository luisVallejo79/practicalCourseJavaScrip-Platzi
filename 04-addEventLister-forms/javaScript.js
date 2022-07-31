const h1 = document.querySelector("#title");

// se crean los selectores 
const input1 = document.querySelector("#num1");
const input2 = document.querySelector("#num2");
const p = document.querySelector("#pResult");
const btnSumar = document.querySelector("#btnSumar");
const btnRestar = document.querySelector("#btnRestar");
const btnMultiplicar = document.querySelector("#btnMultiplicar");
const form = document.querySelector("#form");

h1.innerHTML = "Aprendiendo sobre AddEventListener - Forms";

const sumar = () => {
  //event.preventDefault(); //evita que el form se reset, no permite realizar mas acciones 
  const sum = Number(input1.value) + Number(input2.value);
  p.innerText = "Resultado de la suma: " + sum;
};
const restar = () => {
  console.log('desde rest');
  const rest = Number(input1.value) - Number(input2.value);
  p.innerText = "Resultado de la resta: " + rest;
};
const multiplicar = () => {
  const mult = Number(input1.value) * Number(input2.value);
  p.innerText = "Resultado de la multiplicacion: " + mult;
};
//con los formulario escuchamos el evento submit - si cambiaron el type a botton el tipo de evento sera button
//btnSumar.addEventListener("submit", sumar);
btnSumar.addEventListener("click", sumar);
btnRestar.addEventListener("click", restar);
btnMultiplicar.addEventListener("click", multiplicar);

//form.addEventListener("submit", sumar);