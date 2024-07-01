# Métodos de arrays

Los arrays proporcionan muchos métodos. Para facilitar las cosas, en este capítulo, se dividen en grupos.

## Añadir/eliminar elementos

Ya conocemos los métodos que añaden y eliminan elementos del principio o del final:

- `arr.push(...items)` – añade elementos al final,
- `arr.pop()` – extrae un elemento del final,
- `arr.shift()` – extrae un elemento del principio,
- `arr.unshift(...items)` – añade elementos al principio.

Aquí hay algunos otros.

### splice

¿Cómo eliminar un elemento del array?

Los arrays son objetos, por lo que podemos intentar usar `delete`:

```javascript
let arr = ["I", "go", "home"];
delete arr[1]; // elimina "go"
alert(arr[1]); // undefined
// ahora arr = ["I", , "home"];
alert(arr.length); // 3
```

El elemento fue eliminado, pero el array todavía tiene 3 elementos, podemos ver que `arr.length == 3`.

Eso es natural, porque `delete obj.key` elimina un valor por la `key`. Eso es todo lo que hace. Bien para objetos. Pero para arrays usualmente queremos que el resto de los elementos se desplacen y ocupen el lugar libre. Esperamos tener un array más corto ahora.

Entonces, se deben usar métodos especiales.

El método arr.splice es una navaja suiza para arrays. Puede hacer de todo: insertar, eliminar y reemplazar elementos.

La sintaxis es:

```javascript
arr.splice(start[, deleteCount, elem1, ..., elemN])
```

Modifica `arr` comenzando desde el índice `start`: elimina `deleteCount` elementos y luego inserta `elem1, ..., elemN` en su lugar. Devuelve el array de elementos eliminados.

Este método es fácil de entender con ejemplos.

Comencemos con la eliminación:

```javascript
let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // desde el índice 1 elimina 1 elemento
alert(arr); // ["I", "JavaScript"]
```

Fácil, ¿verdad? Comenzando desde el índice `1` eliminó `1` elemento.

En el siguiente ejemplo, eliminamos 3 elementos y los reemplazamos por otros dos:

```javascript
let arr = ["I", "study", "JavaScript", "right", "now"];
arr.splice(0, 3, "Let's", "dance"); // elimina 3 primeros elementos y los reemplaza por otros
alert(arr); // ahora ["Let's", "dance", "right", "now"]
```

Aquí podemos ver que `splice` devuelve el array de elementos eliminados:

```javascript
let arr = ["I", "study", "JavaScript", "right", "now"];
arr.splice(0, 3, "Let's", "dance"); // elimina 3 primeros elementos y los reemplaza por otros
alert(arr); // ahora ["Let's", "dance", "right", "now"]
```

El método `splice` también puede insertar elementos sin eliminar nada. Para eso, debemos establecer `deleteCount` en `0`:

```javascript
let arr = ["I", "study", "JavaScript"];
arr.splice(2, 0, "complex", "language"); // desde el índice 2 elimina 0 e inserta "complex" y "language"
alert(arr); // ["I", "study", "complex", "language", "JavaScript"]
```

### slice
El método `arr.slice` es mucho más simple que el similar `arr.splice`.

La sintaxis es:

```javascript
arr.slice([start], [end]);
```

Devuelve un nuevo array copiando todos los elementos desde el índice `start` hasta `end` (sin incluir `end`). Tanto `start` como `end` pueden ser negativos, en cuyo caso se considera la posición desde el final del array.

Es similar al método de cadena `str.slice`, pero en lugar de subcadenas, crea subarrays.

Por ejemplo:

```javascript
let arr = ["t", "e", "s", "t"];
alert(arr.slice(1, 3)); // e,s (copia desde 1 hasta 3)
alert(arr.slice(-2)); // s,t (copia desde -2 hasta el final)
```

También podemos llamarlo sin argumentos: `arr.slice()` crea una copia de `arr`. Eso se usa a menudo para obtener una copia para futuras transformaciones que no deberían afectar al array original.

### concat
El método `arr.concat` crea un nuevo array que incluye valores de otros arrays y elementos adicionales.

La sintaxis es:

```javascript
arr.concat(arg1, arg2...)
```

Acepta cualquier cantidad de argumentos – ya sean arrays o valores.

El resultado es un nuevo array que contiene elementos de `arr`, luego `arg1`, `arg2`, etc.

Si un argumento `argN` es un array, entonces se copian todos sus elementos. De lo contrario, se copia el argumento en sí.

Por ejemplo:

```javascript
let arr = [1, 2];
alert(arr.concat([3, 4])); // 1,2,3,4
alert(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
alert(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6
```

Normalmente, solo copia elementos de arrays. Otros objetos, incluso si parecen arrays, se añaden como un todo:

```javascript
let arr = [1, 2];
let arrayLike = {
  0: "something",
  length: 1,
};
alert(arr.concat(arrayLike)); // 1,2,[object Object]
```

Pero si un objeto similar a un array tiene una propiedad especial `Symbol.isConcatSpreadable`, entonces se trata como un array por `concat`: se añaden sus elementos en lugar del objeto:

```javascript
let arr = [1, 2];
let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};
alert(arr.concat(arrayLike)); // 1,2,something,else
```

## Iterar: forEach

El método `arr.forEach` permite ejecutar una función para cada elemento del array.

La sintaxis:

```javascript
arr.forEach(function (item, index, array) {
  // ... haz algo con el elemento
});
```

Por ejemplo, esto muestra cada elemento del array:

```javascript
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);
```

Y este código es más elaborado sobre sus posiciones en el array objetivo:

```javascript
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} está en el índice ${index} en ${array}`);
});
```

El resultado de la función (si devuelve algo) se descarta y se ignora.

## Búsqueda en el array

### indexOf/lastIndexOf y includes

Los métodos `arr.indexOf` y `arr.includes` tienen una sintaxis similar y hacen esencialmente lo mismo que sus contrapartes de cadenas, pero operan en elementos en lugar de caracteres:

- `arr.indexOf(item, from)` – busca `item` comenzando desde el índice `from`, y devuelve el índice donde se encontró, de lo contrario `-1`.
- `arr.includes(item, from)` – busca `item` comenzando desde el índice `from`, devuelve `true` si se encuentra.
  Normalmente, estos métodos se usan con solo un argumento: el `item` para buscar. Por defecto, la búsqueda es desde el principio.

Por ejemplo:

```javascript
let arr = [1, 0, false];
alert(arr.indexOf(0)); // 1
alert(arr.indexOf(false)); // 2
alert(arr.indexOf(null)); // -1
alert(arr.includes(1)); // true
```

Tenga en cuenta que `indexOf` usa la igualdad estricta `===` para la comparación. Entonces, si buscamos `false`, encuentra exactamente `false` y no el cero.

Si queremos verificar si item existe en el array y no necesitamos el índice, entonces se prefiere `arr.includes`.

El método `arr.lastIndexOf` es el mismo que `indexOf`, pero busca de derecha a izquierda.

```javascript
let fruits = ["Apple", "Orange", "Apple"];
alert(fruits.indexOf("Apple")); // 0 (primer Apple)
alert(fruits.lastIndexOf("Apple")); // 2 (último Apple)
```

find y findIndex

- `arr.find(fn)` – devuelve el primer elemento que cumple la condición `fn`.
- `arr.findIndex(fn)` – devuelve el índice del primer elemento que cumple `fn`.
  Por ejemplo:

```javascript
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let user = users.find((item) => item.id == 1);

alert(user.name); // John
```

### filter
El método `arr.filter(fn)` devuelve un array con todos los elementos que cumplen `fn`.

Por ejemplo:

```javascript
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let someUsers = users.filter((item) => item.id < 3);

alert(someUsers.length); // 2
```

## Transformar un array
### map
El método `arr.map(fn)` crea un nuevo array con los resultados de aplicar `fn` a cada elemento.

Por ejemplo:

```javascript
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
alert(lengths); // 5,7,6
```

### sort

El método `arr.sort()` ordena los elementos del array en su lugar y devuelve el array ordenado.

Por ejemplo:

```javascript
let arr = [1, 2, 15];
arr.sort();
alert(arr); // 1, 15, 2
```

### reverse
El método `arr.reverse()` invierte el orden de los elementos del array y devuelve el array invertido.

Por ejemplo:

```javascript
let arr = [1, 2, 3];
arr.reverse();
alert(arr); // 3,2,1
```

### split y join

- `str.split(delim)` – divide una cadena en un array utilizando delim como delimitador.
- `arr.join(glue)` – une los elementos de un array en una cadena usando glue.
  Por ejemplo:

```javascript
let names = "Bilbo, Gandalf, Nazgul";
let arr = names.split(", ");
for (let name of arr) {
  alert(`Un mensaje para ${name}.`); // Un mensaje para Bilbo (y otros nombres)
}

let arr = ["Bilbo", "Gandalf", "Nazgul"];
let str = arr.join(";"); // Bilbo;Gandalf;Nazgul
```

### reduce y reduceRight

- `arr.reduce(fn, [initial])` – aplica `fn` acumulativamente a los elementos del array de izquierda a derecha para reducirlo a un único valor.
- `arr.reduceRight(fn, [initial])` – lo mismo que `reduce`, pero de derecha a izquierda.
  Por ejemplo:

```javascript
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
alert(result); // 15
```

## Array.isArray
El método `Array.isArray(value)` devuelve `true` si `value` es un array.

Por ejemplo:

```javascript
alert(Array.isArray({})); // false
alert(Array.isArray([])); // true
```

## Otros métodos

Hay algunos otros métodos útiles en los arrays:

- `arr.some(fn)` – devuelve true si al menos un elemento en el array cumple la función fn.
- `arr.every(fn)` – devuelve true si todos los elementos del array cumplen la función fn.
- `arr.fill(value, start, end)` – rellena el array con el valor value desde el índice start hasta end.
- `arr.copyWithin(target, start, end)` – copia una parte del array a otra ubicación dentro del mismo array.
