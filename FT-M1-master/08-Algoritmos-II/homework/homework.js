'use strict'
// No cambies los nombres de las funciones.

function Pivot(array, star_array, end_array){
  const pivot = array[end_array-1];
  let i = star_array-1;
  let j = star_array;
  while(j < end_array){
    if(array[j] < pivot){
      i = i+1;
      [array[i],array[j]] = [array[j], array[i]];
      j = j+1;
    }else{
      j = j+1;
    }
  }
  [array[i+1],array[end_array-1]] = [array[end_array-1], array[i+1]];
  return i+1;
}

function recursive_quicksort(array,star_array,end_array){
  if(star_array === end_array) return;
  else{
    let pivot = Pivot(array,star_array,end_array);
    recursive_quicksort(array,star_array,pivot);
    recursive_quicksort(array,pivot+1,end_array);
  }
}

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  recursive_quicksort(array,0,array.length);
  return array;
}

function merge(array,star_array,middle_array,end_array){
    var n1 = middle_array - star_array + 1;
    var n2 = end_array - middle_array;
    const L = new Array(n1);
    const R = new Array(n2);
    for (var i = 0; i < n1; i++)
        L[i] = array[star_array + i];
    for (var j = 0; j < n2; j++)
        R[j] = array[middle_array + 1 + j];
    var i = 0;
    var j = 0;
    var k = star_array;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            array[k] = L[i];
            i++;
        }
        else {
            array[k] = R[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
        array[k] = L[i];
        i++;
        k++;
    }
    while (j < n2) {
        array[k] = R[j];
        j++;
        k++;
    }    
}

function recursive_mergesort(array,star_array,end_array){
  if(star_array >= end_array) return;
  else{
    let q = star_array + parseInt((end_array-star_array)/2);
    recursive_mergesort(array,star_array,q);
    recursive_mergesort(array,q+1,end_array);
    merge(array,star_array,q,end_array);
  }
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  recursive_mergesort(array,0,array.length-1);
  return array;
}

const array = [5, 1, 4, 2, 8];
console.log(mergeSort(array));
console.log(quickSort(array));

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
