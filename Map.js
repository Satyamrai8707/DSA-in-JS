//methods:
let map2 = new Map([
  ["apples", 500],
  ["mangoes", 200],
  ["bananas", 100],
]);

//1. .set(key,values)

map2.set("apples", 800);
console.log(map2);

//2. .get(key)
console.log(map2.get("apples"));

//3. .has(key)

console.log(map2.has("pineapples"));

//4. delete(key)
// console.log(map2.delete("mangoes"));

//5. clear()
// map2.clear()
console.log(map2);

//6. size
console.log(map2.size);

for (const [key, value] of map2) {
  console.log(`${key} => ${value}`);
}

// print only keys
for (let k of map2.keys()) {
  console.log(k);
}

// print only values
for (let v of map2.values()) {
  console.log(v);
}

// print complete map
for (let e of map2.entries()) {
  console.log(e);
}

//Rules
// reference types are comapred by identity , not by value
// {}, {}

// NaN equals to NaN inside a map

const map3 = new Map([
  [NaN, "Not a number"],
  [NaN, "Another not a number"],
]);

console.log(map3);

//Property                      Map                           Plain Object
//Key Types                   Any value                     String or symbols

//find frequency of arr
let arr = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3,
  3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5,
];

let freq = new Map();

for (let num of arr) {
  freq.set(num, (freq.get(num) || 0) +1);
}

for (let [key, value] of freq) {
  console.log(`${key} => ${value}`);
}



let str = "abcde";
console.log(str.toUpperCase());
