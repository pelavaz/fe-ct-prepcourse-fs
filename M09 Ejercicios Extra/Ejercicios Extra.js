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
      if ((array1[i] = array2[j] && !newArr.includes(array1[i]))) {
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
