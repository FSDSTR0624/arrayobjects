// add item to the end of the array (push)
years.push(2024);
console.log("push", years);

// extracts an item from the end of the array (pop)
years.pop();
console.log("pop", years);

// extracts an item from the beginning (shift)
years.shift();
console.log("shift", years);

// add items to the beginning of the array (unshift)
years.unshift(1971);
console.log("unshift", years);

// remove an element in a specific position (splice)
years.splice(3, 1);
console.log("splice", years);

// replace an element in a specific position (splice)
years.splice(3, 1, 2025);
console.log("splice", years);

// get a portion of array (slice)
years.slice(1, 4);
console.log("slice", years);

// search in an array (indexOf / lastIndexOf / includes / some)
let index = years.indexOf(1971, 1);
console.log("indexOf", index);

index = years.lastIndexOf(1971);
console.log("lastIndexOf", index);

// display every element of an array (forEach)
years.forEach(function (item) {
  console.log("forEach", item);
});

// display every element of an array (map)
years.map(function (item) {
  console.log("map", item);
});

// sort an array of texts (sort)
names.sort();
console.log("sort texts", names);

// sort an array of numbers (sort)
years.sort(function (a, b) {
  return a - b;
});
console.log("sort numbers", years);

// sort an array of texts with special characters (sort + localeCompare)
cities.sort(function (a, b) {
  return a.localeCompare(b);
});
console.log("sort special chars", cities);

// reverse the order of elements in one array (reverse)
years.reverse();
console.log("reverse", years);

// split a string into an array (split)
welcome.split(" ");
console.log("split", welcome);

// join an array to a string (join)
years.join("|");
console.log("join", years);

// filter elements by condition (filter)
let filtered = years.filter(function (year) {
  return year > 1980;
});
console.log("filter", filtered);

// sum all items of the array (reduce)
years.reduce(function (acc, current) {
  console.log(acc, current);
  return acc + current;
});
