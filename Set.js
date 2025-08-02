
const string = "foooooooooood"
const set1 = new Set(string)
console.log(set1);

//1.Add method
let set2 = new Set()
set2.add("green")
set2.add("blue")
set2.add("green")
set2.add("blue")
set2.add("blue")
set2.add("green")
set2.add("green")
console.log(set2);


const chaining = new Set().add("green").add("blue")
console.log(chaining);
 
let arr4 = [1,2,3,4,5], arr3 = [4,5,6,7,8]
let merged = [...arr4,...arr3]
let arr_add = new Set(merged)

console.log(arr_add);

let arr5 = [1,2,3,4,5], arr6 = [4,5,6,7,8]
let set3 = new Set(arr5)
let intersection = arr6.filter(e=> set3.has(e))
console.log(intersection);