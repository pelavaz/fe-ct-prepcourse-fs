/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

  var arr = [];
  for (let prop in objeto) {
    arr.push([prop, objeto[prop]]);
  }
  return arr;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  var suma = 0;
  var unicos = [];
  var caracteres = string.split("");
  for (let i = 0; i < caracteres.length; i++) {
    if (!unicos.includes(caracteres[i])) {
      unicos.push(caracteres[i]);
    }
  }
  var ordenados = unicos.sort();
  var cantidadVeces = [];
  for (let j = 0; j < ordenados.length; j++) {
    suma = 0;
    for (let k = 0; k < caracteres.length; k++) {
      if (ordenados[j] === caracteres[k]) {
        suma = suma + 1;
      }
    }
    cantidadVeces.push(suma);
  }
  var objeto = {};
  for (let m = 0; m < cantidadVeces.length; m++) {
    objeto[ordenados[m]] = cantidadVeces[m];
  }
  return objeto;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  var minuscula = string.toLowerCase();
  var arregloOriginal = string.split("");
  var arregloEnMinuscula = minuscula.split("");
  var min = [];
  var mayusc = [];
  for (let i = 0; i < arregloEnMinuscula.length; i++) {
    if (arregloOriginal[i] === arregloEnMinuscula[i]) {
      min.push(arregloEnMinuscula[i]);
    } else {
      mayusc.push(arregloOriginal[i]);
    }
  }
  return mayusc.join("") + min.join("");
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  var arr = frase.split(" ");
  var arrNuevo = [];
  for (let i = 0; i < arr.length; i++) {
    arrNuevo.push(arr[i].split("").reverse().join(""));
  }
  return arrNuevo.join(" ");
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  var numero1 = numero.toString();

  if (numero1 === numero1.split("").reverse().join("")) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  var nuevoArr = [];
  var arr = string.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "a" || arr[i] === "b" || arr[i] === "c") {
      continue;
    } else {
      nuevoArr.push(arr[i]);
    }
  }
  return nuevoArr.join("");
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  var arr = [];
  var retornoNew = [];
  for (let m = 0; m < arrayOfStrings.length; m++) {
    arr.push({ name: arrayOfStrings[m], value: arrayOfStrings[m].length });
  }

  arr.sort((a, b) => a.value - b.value);

  for (let j = 0; j < arr.length; j++) {
    retornoNew.push(arr[j].name);
  }
  return retornoNew;
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  var newArr = [];
  var def = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if ((array1[i] === array2[j] && !newArr.includes(array1[i]))) {
        newArr.push(array1[i]);
      }
    }
  }
  if (newArr.length > 0) {
    return newArr;
  } else {
    return def;
  }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function soloNumeros(array) {
  // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los enteros.
  // Ej: 
  // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

  // Tu código aca:
  var arrNuevo = []
  for(let i=0; i<array.length;i++){
    if(typeof(array[i])==='number'){
      arrNuevo.push(array[i])
    }
  }
  return arrNuevo

}

function stringMasLarga(strings) {
  // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
  // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
  // Ej:
  // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
  // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'

  // Tu código aca
  var arr = [];
  for (let m = 0; m < strings.length; m++) {
    arr.push({ name: strings[m], value: strings[m].length });
  }

  arr.sort((a, b) => a.value - b.value);


  return arr[arr.length -1].name
}

// No modifiques nada debajo de esta linea //

module.exports = stringMasLarga

/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function buscarAmigo(amigos, nombre) {
  // La funcion llamada 'buscarAmigo' recibe como argumento un array llamado 'amigos' que contiene
  // en cada posición del arreglo un objeto que tiene como propiedades 'nombre' y 'edad'. También
  // recibe un string llamado 'nombre'.
  // Debe devolver el objeto cuya propiedad 'nombre' coincida con el string 'nombre' recibido por argumento.
  // Ej:
  //  var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
  //  buscarAmigo(amigos, 'toni') debe devolver { nombre: 'toni', edad: 33 };

  // Tu código aca:
  for(let i=0; i<amigos.length;i++){
if(amigos[i].nombre === nombre){
  return amigos[i]
}

  }
  
}

// No modifiques nada debajo de esta linea //

module.exports = buscarAmigo

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  var numero1 = num.toString();

  if (numero1 === numero1.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }


}

function pluck(array, propiedad) {
  // La función llamada 'pluck' recibe como argumento un array de objetos llamado 'array' y el nombre de una
  // propiedad.
  // La función debe devolver un nuevo arreglo con solo los valores dentro de la propiedad recibida
  // Ej:
  // var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
  // productos.pluck(productos, 'name') debería devolver ['TV LCD', 'Computadora']
  // Pista: es una buena oportunidad para usar map.

  // Tu código acá:
  var arr = array.map(function(element){
    return element[propiedad];
  })
return arr

}

/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function crearClasePersona() {
  class Persona {
    constructor(nombre, edad, hobbies, amigos) {
      // El constructor de la clase Persona recibe nombre (string), edad (integer), hobbies (array de strings), amigos (array de objetos)
      // Inicializar las propiedades de la persona con los valores recibidos como argumento

      // Tu código aca:
      this.nombre = nombre;
      this.edad= edad;
      this.hobbies=hobbies;
      this.amigos=amigos;

    }

    addFriend(nombre, edad) {
      // El método 'addFriend' recibe un string 'nombre' y un entero 'edad' y debe agregar un objeto:
      // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
      // No debe retornar nada.

      // Tu código aca:
      this.amigos.push({'nombre' : nombre, 'edad' : edad})

    }

    addHobby(hobby) {
      // El método 'addHobby' recibe un string 'hobby' y debe agregarlo al arreglo de hobbies de la persona.
      // No debe retornar nada.

      // Tu código aca:
      this.hobbies.push(hobby);

    }
    getFriends() {
      // El método 'getFriends' debe retornar un arreglo con sólo los nombres del arreglo de amigos
      // de la persona.
      // Ej:
      // Suponiendo que la persona tiene estos amigos: [{nombre: 'martin', edad: 31},{nombre: 'toni', edad: 33}]
      // persona.getFriends() debería devolver ['martin', 'toni']

      // Tu código aca:

return this.amigos.map(item => item.nombre)

}

    

    getHobbies() {
      // El método 'getHobbies' debe retornar un arreglo con los hobbies de la persona
      // Ej:
      // persona.getHobbies() debe devolver ['correr', 'dormir', 'nadar']

      // Tu código aca:
      return this.hobbies


    }

    getPromedioEdad() {
      // El método 'getPromedioEdad' debe retornar el promedio de edad de los amigos de una persona
      // Ej:
      // Si la persona tuviera estos amigos:
      // {
      //   amigos: [{
      //     nombre: 'toni',
      //     edad: 33,
      //   }, {
      //     nombre: 'Emi',
      //     edad: 25
      //   }]
      // }
      // persona.getPromedioEdad() debería devolver 29 ya que (33 + 25) / 2 = 29

      // Tu código aca:
      var suma=0;

for(let i=0; i<this.amigos.length;i++){
  suma += this.amigos[i].edad;
}
return suma/this.amigos.length
    }
  };

  return Persona;
}

// No modifiques nada debajo de esta linea //

module.exports = crearClasePersona

/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function filtrar(funcion) {
  // Escribi una función filtrar en el prototipo de Arrays,
  // que recibe una funcion (callback) que devuelve true o false.
  // filtrar los elementos de ese arreglo en base al resultado de esa funcion
  // comparadora, devolver un nuevo arreglo con los elementos filtrados.
  // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
  // ej:
  // var productos = [{
  //   price: 100,
  //   name: 'tv'
  // }, {
  //   price: 50,
  //   name: 'phone'
  // }, {
  //   price: 30,
  //   name: 'lamp'
  // }]
  // productos.filtrar(function(p) {
  //   return p.price >= 50;
  // }) => [{price: 100, name:'tv'}]

  Array.prototype.filtrar = function(cb){

  
    var arregloModificado = [];
    for (var i = 0; i < this.length; i++) {
         if (cb(this[i])) {
              arregloModificado.push(this[i]);
         } 
    }
    return arregloModificado;
 };
  


};

// No modifiques nada debajo de esta linea //

module.exports = filtrar
