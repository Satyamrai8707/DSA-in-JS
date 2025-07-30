// 1
// 12
// 123
// 1234
// 12345

// for(let i = 1;i <6;i++){
//     let row = ''
//     for(let j = 1;j <=i;j++){
//         row += j
//     }
//     console.log(row)
// }

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }
let arr = [1, 2, 3, 2, 1, 4, 5, 4];
let result = new Set(arr);
console.log([...result])


