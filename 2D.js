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
// let i = 0
// let j = 0
// let identitymtrix = Array.from({length:4},(_,i)=>
//     Array.from({length:4},(_,j)=>(i === j ? 1:0))
// )
// console.log(identitymtrix)

// Spirally traversing a matrix
// important Q...
let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function spiralTraverse(matrix) {
  let result = [];
  let rows = matrix.length;
  let cols = matrix[0].length;
  let top = 0,
    bottom = rows - 1,
    left = 0,
    right = cols - 1;

  while (top <= bottom && left <= right) {
    // Traverse from left to right
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // Traverse from top to bottom
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    if (top <= bottom) {
      // Traverse from right to left
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      // Traverse from bottom to top
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }
  return result;
}

console.log(spiralTraverse(matrix));

let engagementMetrics = [100, 200, 300];
console.log(engagementMetrics["0"]);

let a = 10;
console.log(["a"], 10);

const userProfile = {
  name: "John Doe",
  age: 25,
  location: "New York",
};

userProfile.age = 26;
console.log(userProfile);

userProfile.location = "San Francisco";
console.log(userProfile);
// What happens if they try to reassign the entire object?
// userProfile = { name: "Jane Doe", age: 30, location: "Los Angeles" };

let cartItems = [10, 20, 30, 40, 50];

// for (let i = 0; i < cartItems.length; i++) {
//   cartItems.pop();
// }
while(cartItems.length > 0){
  cartItems.pop();
}

console.log(cartItems);




let posts = ["Hello!", ["Comment 1", "Comment 2"], "Good morning!", ["Another comment"]];
let displayedPosts = [];

for (let i = 0; i < posts.length; i++) {
  displayedPosts[i] = posts[i];
}

posts[0] = "New content";
posts[1][0] = "Modified comment";

console.log(displayedPosts); // ["Hello!", ["Comment 1", "Comment 2"], "Good morning!", ["Another comment"]]
console.log(posts); // ["New content", ["Modified comment", "Comment 2"], "Good morning!", ["Another comment"]]




customerData = {
  "name": "John Doe",
  "email": "johndoe@example.com"
}

orderDetails = {
  "orderHistory": ["order1", "order2", "order3"],
  "totalSpentAmount": 500
}



const customerInfo = {
  ...customerData,
  ...orderDetails
}
console.log(customerInfo);


let c = [1, 2, 3];
let b = c;
b.push(4);
console.log(c);



const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matrix1.length; i++) {
  for (let j = 0; j < matrix1[i].length; j++) {
    console.log(matrix1[i][j]);
  }
}


