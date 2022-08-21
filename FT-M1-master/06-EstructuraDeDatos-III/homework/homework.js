"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

class NodeBT{
  constructor(data){
    this.value = data;
    this.left = null;
    this.right = null;
  }
  add(value){
    if(value < this.value) this.move_left(value);
    else this.move_right(value);
  }
  move_left(value){
    if(this.left == null) this.left = new NodeBT(value);
    else this.left.add(value);
  }
  move_right(value){
    if(this.right == null) this.right = new NodeBT(value);
    else this.right.add(value);
  }
};

class BinarySearchTree{
  constructor(data){
    this.value = data;
    this.left = null;
    this.right = null;
  }
  insert(value){
    if(value < this.value){
      if(this.left == null) this.left = new NodeBT(value);
      else this.left.add(value);
    }else{
      if(this.right == null) this.right = new NodeBT(value);
      else this.right.add(value);
    }
  }
  size(){
    function Size(node){
      if(node == null) return 0;
      else return Size(node.left) + Size(node.right)+1;
    }
    return Size(this);
  }
  contains(value){
    function find(node,value){
      if(node == null)
          return false;
      else if(value < node.value)
          return find(node.left,value);
      else if(value > node.value)
          return find(node.right,value);
      else return true;
    }
    return find(this,value);
  }
  depthFirstForEach(callback,type){
    if(type == "post-order"){
      function post_order(node){
        if(node == null) return;
        post_order(node.left);
        post_order(node.right);
        callback(node.value);
      }
      post_order(this);
    }else if(type == "pre-order"){
      function pre_order(node){
        if(node == null) return;
        callback(node.value);
        pre_order(node.left);
        pre_order(node.right);
      }
      pre_order(this);
    }else{
      function in_order(node){
        if(node == null) return;
        in_order(node.left);
        callback(node.value);
        in_order(node.right);
      }
      in_order(this);
    }
  }
  breadthFirstForEach(callback){
    var node = new NodeBT(this.value);
    node.left = this.left;
    node.right = this.right;
    var arr = new Array;
    arr.unshift(node);
    while(arr.length != 0){
      var new_node = arr.pop();
      callback(new_node.value);
      if(new_node.left != null) arr.unshift(new_node.left);
      if(new_node.right != null) arr.unshift(new_node.right);
    }
  }
};
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
