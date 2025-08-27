let arr = [1, 2, 3, 4]

let arr1 = [6, 8, 7, 9]


let final_arr = [...arr.sort(), ...arr1.sort()];
console.log('====================================');
console.log(final_arr.sort().join(', '));
console.log('====================================');


