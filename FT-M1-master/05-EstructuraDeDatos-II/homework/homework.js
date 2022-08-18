"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
};


class LinkedList{
  constructor(){
    this.head = null;
    this.nodes = 0;
  }
  add(value){
    var nodo = new Node(value);
    nodo.next = null;
    if(this.head == null) this.head = nodo;
    else{
        var temp = this.head;
        while(temp.next != null)
            temp = temp.next;
        temp.next = nodo;
    }
    this.nodes++;
  }
  remove(){
    if(this.head == null) return false;
    if(this.head.next == null){
      var data = this.head.value;
      this.head = null;
      this.nodes--;
      return data;
    }else{
      var temp = this.head;
      while(temp.next.next != null)
          temp = temp.next;
      data = temp.next.value;
      temp.next = null;
      this.nodes--;
      return data;
    }
  }
  search(value){
    var temp = this.head;
    while(temp != null){
      if(typeof(value) == "function"){
        var data = value(temp.value);
        if(data) return temp.value;
      }
      if(temp.value == value) return temp.value;
      temp = temp.next;
    }
    return null;
  }
};

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

class HashTable{
  constructor(){
    this.array = new Object;
    this.numBuckets = 35;
  }
  hash(str){
    if(typeof(str) != "string") return false;
    let sum = 0;
    for(let i=0; i<str.length; i++) sum += str.charCodeAt(i);
    return Math.floor(sum%this.numBuckets);
  }
  set(str1, str2){
    if(!this.hash(str1)) throw new TypeError("Keys must be strings");
    this.array[str1] = str2;
  }
  get(key){
    return this.array[key];
  }
  hasKey(key){
    return this.array.hasOwnProperty(key);
  }
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
