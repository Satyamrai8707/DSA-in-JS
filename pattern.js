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



// * * * * *
// * *   * *
// *   *   *
// * *   * *
// * * * * *

function print(n){
    for(let i = 0;i < n;i++){
        let star = ''
        for(let j = 0;j< n;j++){
            if(i === 0 || i === n-1 || i === j|| i+j === n-1 || j === 0 || j === n-1){
                star += '* '
            }
            else{
                star+= '  '
            }
        }
        console.log(star);

    }
}

print(5)