//any set of code that will be reused many times
//initial data input -> argument 
//function is a keyword used to declare a function

//modular -> breaking big code into smaller chunks of codes

//CODE ON DEMAND 

// let arr = [4,3,2,1,5]
// function sort(arr){
//     let sorted = arr.sort()
//     return sorted
// }

// console.log(sort(arr))

// let user = {
//     name:"Satyam Rai",
//     age: 21
// }

//destructuring
// const {name} = user
// console.log(name)

// function userlist(user){
//     const name = user.name
//     const age = user.age
//     console.log(`your name is ${name} and age is ${age}`)
// }

// userlist(user)


// let user1 = [
//     {
//         name:"Satyam",
//         age:21
//     },
//     {
//         name:"Shivam",
//         age:17
//     },
//     {
//         name:"Shubham",
//         age:19
//     }
// ]
// for(let i = 0; i <user1.length;i++){
//     userlist(user1[i])
// }

// function userlist(user1){
//     const name = user1.name
//     const age = user1.age
//     console.log(`your name is ${name} and age is ${age}`)
// }


//1. anonymous function

// const getty = function(){
//     console.log("hii Satyam")
// }

// getty()

//2. named function expression
// const gettttty = function getted(){
//     console.log("named function expression")
// }
// gettttty()

//3. Arrow functions

//ES6
// const add = (a,b)=> a+b


// const fruits = ['apple','banana','carrot','pineapple']
// console.log(fruits.map((i)=>i))
// console.log(fruits.map((i)=>i.length))


// ES6 arrow functions
//no this keyword binding 
//cannot be used as constructors 
//no arguments object 



//IIFE -> Immediately Invoked Functions

// (function(name){
//     console.log('hiii its IIFE')
// })('Satyam')


// Function Parameters/Arguments
// const funnc = function hello(name, greet="Namaste"){
//     console.log(greet,name)
// }

//rest parameters
// Rest parameters allow functions to accept indefinite number of arguments as an array
// function sum(...numbers){
//     let sum = 0;
    
//     for(i=0; i<numbers.length; i++){
//         sum+=numbers[i]
//     }
//     return sum;

// }
// console.log(sum(1, 2, 3, 45, 5, 6))
// console.log(sum(1, 2, 3,4, 2, 4, 2, 3, 2, 4, 2, 4))

// Higher Order Functions

// function outerFuncion(){
    
// }
// const nums = [1,2,3,4,5,6,7,8,9,10]

// const checkPrimeNum = function(nums){
//     if (nums <= 1) return false
//     if (nums === 2) return true
//     for(let i = 3;i <= Math.sqrt(nums);i++){
//         if(nums % i === 0) return false
//     }
//     return true
// }

// const findprimenumber = nums.filter(checkPrimeNum)

// console.log(findprimenumber)

//1 3 5 4
//9 -> 1+3+5
//using reduce oddball sum
// const numbers = [1, 3, 5, 4]

// const sumOddNumbers = numbers.reduce((accumulator, currentValue) => {
//     if (currentValue % 2 !== 0) {
//          console.log(accumulator + currentValue)
//     }
//     return accumulator;
// },0);

// let arr = [1,2,3,4,5]

// function includes(arr,element){
//     if(arr.indexOf(element) !== -1){
//         return true

// }
//     return false;
// }
// console.log(includes(arr,3)) // true


// let num = [100,5,50,30,53,44,3,2,4,3]

//ifentify numbers greater than 10 by using map/filter and reducer
// const greaterThanTen = num.filter(n) = n > 10;
// const greaterThanTen = num.filter(n => n > 10).reduce((acc, curr) => acc + curr, 0);

//  console.log(greaterThanTen); 



// let arr = [ 2,0,-1,4,0,-5,-2]
// let sum = 0;
// let totalsum = 0
// for(let i = 0;i < arr.length;i++){
//     sum += arr[i]
//      if(arr[i] >= 0){
//         totalsum +=arr[i]
//     }
    
// }
// console.log(`Before total sum of array is ${sum}`)
// console.log(`After total sum of array is ${totalsum}`)





//plindrome find

// function isPalindrome(arr) {
//     let left = 0;
//     let right = arr.length - 1;
//     while(left < right) {
//         if(arr[left] !== arr[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }

// console.log(isPalindrome([2, 3, 5, 3, 2])) // true
// console.log(isPalindrome([1, 2, 3, 4, 5])) // false

// function isPalindromeinString(str) {
//     let left = 0
//     let right = str.length - 1;
//     while(left < right){
//         if(str[left] !== str[right]){
//             return false
//         }
//         left++
//         right--
//     }
//     return true
// }
// console.log(isPalindromeinString("racecar")) // true
// console.log(isPalindromeinString("hello")) // false
// console.log(isPalindromeinString("madam")) // true

// function printReversed(str) {
//     let reversed = ''
//     for(let i = str.length-1;i >=0;i--){
//         reversed += str[i]
//     }
//     console.log(reversed)
// }

// printReversed("hello") // "olleh"
// printReversed('satyam rai')