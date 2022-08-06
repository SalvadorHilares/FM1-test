
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1; // GUARDAMOS EL VALOR DE 1 EN LA VARIABLE X
var a = 5; // GUARDAMOS EL VALOR DE 5 EN LA VARIABLE A
var b = 10; // GUGARDAMOS EL VALOR DE 10 EN LA VARIABLE B
var c = function(a, b, c) { // SEPARAMOS UN ESPACIO DE MEMORIA PARA LA FUNCION
  var x = 10; // Inicializamos un nuevo valor de x en la funcion
  console.log(x); // Imprime 10
  console.log(a); // imprime 5
  var f = function(a, b, c) { // SEPARAMOS UN ESPACIO DE MEMORIA PARA LA FUNCION
    b = a; // Igualamos el valor de los parametros a en b
    console.log(b); // Imprimos el valor de b que es pasado como parametro
    b = c; // igualamos el valor de c a b
    var x = 5; // Guardamos el valor de 5 en la variable X
  }
  f(a,b,c); // LLamamos a la funcion e imprimimos 5
  console.log(b); // Imprimos 10
}
c(8,9,10); // Imprime 10 y luego imprime 8. Finalmente imprime 8 denuevo y despues 9.
console.log(b); // Imprime 10
console.log(x); // Imprime 1
```

```javascript
console.log(bar); // undefined
console.log(baz); // undefined
foo(); // undefined
function foo() { console.log('Hola!'); }
var bar = 1; // Guardas el valor de 1 variable en bar
baz = 2; // Guardas el valor de de 2 en baz
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // Imprime Franco
```

```javascript
var instructor = "Tony";
console.log(instructor); // Imprime Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // Franco
   }
})();
console.log(instructor); // Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // The Flash
    console.log(pm); // Reverse Flash
}
console.log(instructor); // The Flash
console.log(pm); // Franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // Infinite
{}[0] // [0]
parseInt("09") // 9
5 && 2 // 2
2 && 5 // 5
5 || 0 // 5
0 || 5 // 5
[3]+[3]-[10] // 23
3>2>1 // false
[] == ![] // true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // undefined
   console.log(foo()); // 2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); // Meow Mix
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // Aurelio De Rosa

var test = obj.prop.getFullname; // Juan Perez

console.log(test()); 
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1); // Imprime 1, luego 4, luego 3 y finalmente 2
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0); 
   console.log(4);
}

printing();
```
