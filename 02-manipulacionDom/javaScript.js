//aprender a utilizar atributos como onClick, onChange, recoger en una variable para poder operar con ellos

const h1 =  document.querySelector('h1')
const input1 = document.querySelector('#num1')
const input2 = document.querySelector('#num2')
const btnSumar = document.querySelector('#btnSumar')
const btnRestar = document.querySelector('#btnRestar')
const btnMultiplicar = document.querySelector('#btnMultiplic')
const p = document.querySelector('#pResult')

h1.innerText = 'Manipulacion del DOM - Curso practico Platzi';

const sumar = () =>{
    const sum = Number(input1.value)+Number(input2.value);
    p.innerText = "Resultado de la suma: "+ sum;
}
const restar = () =>{
    const rest = Number(input1.value)-Number(input2.value);
    p.innerText = "Resultado de la resta: "+ rest;
}
const multiplicar = () =>{
    const mult = Number(input1.value) * Number(input2.value);
    p.innerText = "Resultado de la multiplicacion: "+ mult;
}