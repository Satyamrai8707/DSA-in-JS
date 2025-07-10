
//Array.from() method

// You have to create a 2D array of 3*4
// let arr = [1,2,3,4,5]
// const matrix = Array.from({length : 3},()=> Array(4).fill(arr))

// console.log(matrix)

// let arr = ['Satyam','Musharraf','Shivam','Asif']
// let rows = 3
// let cols = 4
// const matrix3 = Array(rows)
// console.log(matrix3)
// const matrix4 = matrix3.fill().map(()=> Array(cols).fill("Hello"))
// console.log(matrix4)


// function generateArray(rows,cols){
//     let value = 1
//     const arr = Array.from({length: rows},()=>
//     Array.from({length: cols},()=> value++))

//     return arr

// }

// console.log(generateArray(3,4))


//print zero in 2D

// let zeroPrint = Array.from({length:3},()=>{
//     return Array.from({length:4},()=>0)
// })

// console.log(zeroPrint)






//A 2*4 matrix with sequential numbers (1-8)

// let rows = 2
// let cols = 4
// let index = 1
// let result = Array.from({length: rows},()=> Array.from({length: cols},()=>index++))
// console.log(result)


// sequential array
// let seqArray = []
// let value = 1
// for(let i = 0;i < 2;i++){
//     seqArray[i] = []
//     for(let j = 0; j < 4;j++){
//         seqArray[i][j] = value++
//     }
// }
// console.log(seqArray)

// using map 
// let value = 1
// let seqArray = Array(2).fill().map(()=>{
//     return Array(4).fill().map(()=> value++)
// })
// console.log(seqArray)


// A 4x4 identity matrix
// [
//     [1,0,0,0],
//     [0,1,0,0],
//     [0,0,1,0],
//     [0,0,0,1]
// ]

// let identitymtrix = []
// for(let i = 0;i < 4;i++){
//     identitymtrix[i] =[] 
//     for(let j = 0;j <4;j++){
//         if(i === j){
//             identitymtrix[i][j] = 1

//         }
//         else{
//             identitymtrix[i][j]= 0
//         }
//     }
// }
// console.log(identitymtrix)


// using from
let i = 0
let j = 0
let identitymtrix = Array.from({length:4},(_,i)=>
    Array.from({length:4},(_,j)=>(i === j ? 1:0))
)
console.log(identitymtrix)
