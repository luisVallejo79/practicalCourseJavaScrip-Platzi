//console.log("Hello from javaScrip document")
//duplicar lineas alt+shif+tecla abajo

// funciones que podemos utilizar para la seleccion de los elementos document.getElementById ej
//variables que representen los selectores

const h1 = document.querySelector("h1"); //seleccionar por el nombre de la etiqueta <h1>
const p = document.querySelector("p"); //seleccionar por el nombre de la etiqueta <p>
const parrafo = document.querySelector(".parrafo"); //seleccionar por la clase
const byId = document.querySelector("#byId"); //seleccionar por el Id
const input = document.querySelector("input"); //seleccionar por el input
const h2 = document.querySelector("h2");

//tambien podemos llamar los anteriores selectores y clases con document.getElementById, o ByClassName, 
//pero no se debe trabajar como css, o sea no hay que poner . ##

console.log(h1);
//con este console({}) podemos ver todas las propiedades disponibles de cada uno de los selectores de la variable
console.log({
  h1,
  p,
  parrafo,
  byId,
  input,
});
//con innerHTML podemos cambiar el contenido que hay entre las etiquetas h1 y ademas insertar otras etiquetas html
//con innerHTML puede ser propenso a ataques maliciosos
//h1.innerHTML = "Manipulation DOM - <br> Javascript practical course from Js"
//la forma basica que podemos utilizar para utilizar inner es con innerText, asi evitamos que inserten codigo malisioso
h1.innerText = "Manipulation DOM - Javascript practical course from Js";
h2.innerHTML = "Manipulation DOM - Javascript practical footer";


console.log(`el atributo es ${h1.getAttribute('class')}`); //h1.getAttribute('attribute) obtener los atributos  
h1.setAttribute('class', 'red'); //asignando un nuevo valor al atributo clase

h1.classList.add('blue'); //agregando un nuevo valor a la clase
h1.classList.remove('red') // eliminando un valor de la clase

//input.value = 0; //asignar un nuevo atributo
input.placeholder = 'Ingresa edad'; //place holder es el texto el cuadro de texto

console.log(document.createElement('img'));//nos ayuda a crear el elemento HTML que queramos 
console.log(document.createElement('div'));//nos ayuda a crear el elemento HTML que queramos 
console.log(document.createElement('a'));//nos ayuda a crear el elemento HTML que queramos 

const img = document.createElement('img');
//console.log(img);
img.setAttribute('src', 'https://images.hola.com/imagenes/mascotas/20180823128631/cosas-que-quizas-no-sabias-de-tu-pastor-aleman-cs/0-593-146/cosassobrepastoraleman-t.jpg' )
//byId.appendChild(img);
byId.replaceWith(img);
// primero creamos una imagen con document.createElement('img')
// a la imagen le pusimos los atributos src y la url donde se encuentra
//insertamos la imagen dentro de un contenedor, en este caso byId