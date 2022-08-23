'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var arr = new Array;
  arr.push(1);
  let i=2;
  while(num!=1){
    if(num%i != 0){
      i++;
    }
    else{
      num = num/i;
      arr.push(i);
    }
  }
  return arr;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i=0; i<array.length; i++){
    for(let j=0; j<array.length-1; j++){
      if(array[i] < array[j]){
        let swap = array[j];
        array[j] = array[i];
        array[i] = swap;
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let j=1; j<array.length; j++){
    let key = array[j];
    let i = j-1;
    while (i>=0 && array[i] > key){
      array[i+1] = array[i];
      i = i-1;
    }
    array[i+1] = key;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let i = 0;
  while(i != array.length-1){
    let pos = i, j = i+1;
    while(j!=array.length){
      if(array[pos] > array[j])
        pos = j;
      j = j+1;
    }
    let swap = array[i];
    array[i] = array[pos];
    array[pos] = swap;
    i = i+1;
  }
  return array;
}


var arr = [5,1,4,2,8];
selectionSort(arr);
console.log(arr);

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
