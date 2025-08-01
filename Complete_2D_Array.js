// 1. Using Array Literal Notation - Most used


let mat = [
    [ 10, 20, 30 ],
    [ 40, 50, 60 ],
    [ 20, 50, 70 ]
];

console.log(mat);   // [ [ 10, 20, 30 ], [ 40, 50, 60 ], [ 20, 50, 70 ] ]


// 2. Using Array.from() Method

// The JavaScript Array from() method returns an Array object from any object with a length property or an iterable object.

// const mat = Array.from({ length: rows }, () => new Array(columns).fill(0));

const rows = 4
const cols = 3
const mat1 = Array.from(
    { length: rows },()=> new Array(cols).fill(0)
)
console.log(mat1);    // [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]

// 3. Using Nested For Loop

let mat2 = []
let value = 1
for(let i = 0;i < 4;i++){
    mat2[i] = []
    for(let j = 0;j < 3;j++){
        mat2[i][j] = value++
    }
}
console.log(mat2);    // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11, 12 ] ]

// 4. Using Array.fill() Method
// In this approach, we will use the fill() method and map method for creating the two-dimensional array in JavaScript.

const mat3 = Array(4).fill().map(()=> Array(3).fill(0))
console.log(mat3);