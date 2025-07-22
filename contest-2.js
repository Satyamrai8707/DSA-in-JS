// Q1. Sum of Even Numbers
// Write a program to print the sum of all even numbers from 1 to N.
// Input: 10
// Output: 30
// → (2 + 4 + 6 + 8 + 10)

// let N = 10
// let sum =0
// for(let i = 1;i <= N;i++){
//     if(i % 2 === 0){
//         sum +=i
//     }

// }
// console.log(sum)

// Q2. Count Digits in a Number
// Count how many digits are there in a number.
// Input: 54321
// Output: 5

// let n = '54321'
// let count = 0

// for(let i = 0;i < n.length;i++){
//     count++
// }
// console.log(count)

// Q3. Find Factorial
// Find the factorial of a number N using a for loop.
// Input: 5
// Output: 120

// let n = 5
// let fact = 1
// for(let i = n;i > 0;i--){
//     fact *= i
// }
// console.log(fact)

// While Loop Based
// Q4. Reverse a Number
// Reverse a given number using a while loop.
// Input: 1234
// Output: 4321

// let num = '1234'
// let reversed = 0
// while(num > 0){
//     let digit = num % 10
//     reversed = reversed * 10 + digit
//     num = Math.floor(num/10)
// }
// console.log(reversed)

// Q5. Check Palindrome Number
// Check whether a given number is a palindrome or not using a while loop.
// Input: 121
// Output: Yes

// let num = 121
// let reversed = 0
// let original = num
// while(num > 0){
//     let digit = num % 10
//     reversed = reversed * 10 + digit
//     num = Math.floor(num/10)
// }
// if(reversed === original){
//     console.log("Yes")
// }
// else{
//     console.log('No')
// }

// 🔁➿ Nested Loop Based
// Q6. Pattern: Hollow Square
// Print a N x N hollow square.
// Input: 4
// Output:
// ****
// *  *
// *  *
// ****

// let n = 4
// for(let i =0;i <n;i++){
//     let row = ''
//     for(let j = 0;j < n;j++){
//         if(i === 0 || i === n-1 || j === 0 || j === n-1){
//             row += '*'
//         }
//         else{
//             row +=' '
//         }
//     }
//     console.log(row)
// }

// Q7. Count Pairs with Sum K
// Given an array, count how many unique pairs have a sum equal to K using nested loops.
// Input: arr = [1,2,3,4], K=5
// Output: 2
// → (1,4) and (2,3)

// let arr = [1,2,3,4]
// let k = 5
// let count = 0
// for(let i = 0;i< arr.length;i++){
//     for(let j = i+1; j < arr.length;j++){
//     if( arr[i] + arr[i+1] === k){
//         count++
//     }
// }
// }
// console.log(count)

// Q8. Print All Prime Numbers in Range
// Use nested loops to print all prime numbers between 2 to N.
// Input: 10
// Output: 2 3 5 7

// let n = 10
// let result = []
// for(let num = 2; num <= n;num++){
//     let isprime = true
//     for(let i = 2;i< num;i++){
//         if(num % i === 0){
//             isprime = false
//             break
//         }
//     }
//     if(isprime){
//         result.push(num)
//     }
// }
// console.log(result.join(' '))

// Q1. Print Fibonacci Series
// Print the first N numbers in the Fibonacci sequence.
// Input: 5 → Output: 0 1 1 2 3

// let N = 5
// let a = 0, b = 1
// let result = ''
// for(let i = 0; i <N;i++){
//     result += a
//     let c = a + b
//     a = b
//     b = c
// }

// console.log(result)

// Q2. Sum of Digits
// Calculate the sum of digits of a number.
// Input: 457 → Output: 16

// let num = 457
// let sum = 0
// while(num > 0){
//     let digit = num % 10
//     sum +=digit
//     num = Math.floor(num/10)
// }
// console.log(sum)

// Q3. Armstrong Number (3-digit)
// Check if a number is an Armstrong number.
// Input: 153 → Output: Yes
// Explanation: 1³ + 5³ + 3³ = 153

// let num = 153
// let Armstrong_value = 0
// let original_value = num
// while(num > 0){
//     let digit = num % 10
//     Armstrong_value += digit**3
//     num = Math.floor(num/10)
// }
// if(Armstrong_value === original_value){
//     console.log("YES")
// }
// else{
//     console.log("No")
// }

// While Loop Based Questions
// Q4. Check if Number is Prime
// Check if a number is prime using while loop.
// Input: 11 → Output: Yes

// let num = 11
// let i = 2
// let isprime = true
// while( i <= Math.sqrt(num)){
//     if(num % 2 === 0){
//         isprime = false
//         break
//     }
//     i++
// }

// if(num < 2){
//     console.log('No')
// }
// else if(isprime){
//     console.log('Yes')
// }
// else{
//     console.log('No')
// }

// Q5. Digital Root
// Keep summing the digits until a single digit is left.
// Input: 9875 → 9+8+7+5 = 29 → 2+9 = 11 → 1+1 = 2
// Output: 2

// let num = 9875
// while(num > 9){
//     let sum = 0
//     while(num > 0){
//         sum += num%10
//         num = Math.floor(num/10)
//     }
//     num = sum
// }
// console.log(num)

// Q6. Count Occurrence of Digit
// Count how many times a digit d appears in number N.
// Input: Number = 122333, Digit = 3 → Output: 3

// let num = 122333
// let digit = 3
// let count = 0
// while(num > 0){
//     let lastdigit = num % 10
//     if(lastdigit === digit){
//         count++
//     }
//     num = Math.floor(num/10)
// }
// console.log(count)

//  Nested Loop Based Pattern Questions
// Q7. Right-Angled Triangle Pattern
// *
// **
// ***
// ****

// for(let i = 0;i < 4;i++){
//     let star = ''
//     for(let j = 0;j <=i;j++){
//         star += '*'
//     }
//     console.log(star)
// }

// Q8. Pyramid Pattern
//    *
//   ***
//  *****
// *******
// let n = 4
// for(let i = 1;i <=n;i++){
//     let star = ''
//     for(let j = 1;j <=n-i;j++){
//         star += ' '
//     }
//     for(let k = 1;k <= 2*i-1;k++){
//         star += '*'
//     }
//     console.log(star)
// }

// Q9.  Number Triangle
// 1
// 12
// 123
// 1234
// 12345

// for(let i = 1;i < 6;i++){
//     let row = ''
//     for(let j = 1;j <=i;j++){
//         row +=j
//     }
//     console.log(row)
// }

// Q10. Inverted Number Triangle
// 54321
// 4321
// 321
// 21
// 1

// for(let i = 6;i > 1;i--){
//     let row = ''
//     for(let j = i;j >= 1;j--){
//         row +=j
//     }
//     console.log(row)
// }

// Q11. Multiplication Table
// Print multiplication table up to 10 for all numbers from 1 to N
// Input: 3
// Output:
// 1 2 3 4 5 6 7 8 9 10
// 2 4 6 8 10 12 14 16 18 20
// 3 6 9 12 15 18 21 24 27 30

// let n = 3
// for(let i = 1;i <=n;i++){
//     let table = ''

//     for(let j = 1;j<=10;j++){
//         table += (i*j)+ ' '
//     }
//     console.log(table)

// }

// 🧠 Logic + Loop Combo (Medium-Hard)
// Q12. Find GCD of Two Numbers
// Use loop to find the greatest common divisor.
// Input: 36, 60 → Output: 12

// let num1 = 36,num2 = 60
// let gcd = 1
// let minValue = num1 < num2 ? num1 : num2
// for(let i = 0; i < minValue;i++){
//     if(num1 % i === 0 && num2 % i === 0){
//         gcd = i
//     }

// }
// console.log(gcd)

// Q13. Find Missing Number from 1 to N
// Given an array of N-1 numbers from 1 to N, find the missing number.
// Input: arr = [1,2,4,5] → Output: 3

// let arr = [1,2,4,5]
// let n = arr.length+1
// let total = (n * (n + 1))/2
// let sum = 0
// for(let i = 0;i <arr.length;i++){
//     sum+=arr[i]
// }
// let missing = total-sum
// console.log(missing)

// Q14. Check Strong Number
// Number is strong if sum of factorial of digits = number
// Input: 145 → 1! + 4! + 5! = 145 → Output: Yes

// add these matrix
let matrix1 = [
  [1, 2],
  [3, 4],
];
let matrix2 = [
  [5, 6],
  [7, 8],
];

//output : [[6,8],[10,12]]
// Add matrices
// let result = []
// for(let i = 0;i < matrix1.length;i++){
//     result[i] = []
//     for(let j = 0;j < matrix1[i].length;j++){
//         result[i][j] = matrix1[i][j]+matrix2[i][j]
//     }
// }
// console.log(result)

// create a transpose of matrices
// Input = [
//     [6,8],
//     [10,12]
// ]

// Output = [
//     [6,10],
//     [8,12]
// ]

// let result = [
//     [6,8],
//     [10,12]
// ]

// let transpose = []

// for(let i = 0; i < result.length;i++){
//     transpose[i] = []
//     for(let j = 0;j < result[i].length;j++){
//         transpose[i][j] = result[j][i]
//     }
// }
// console.log(transpose)

let result = [
  [6, 8],
  [10, 12],
];

// for(let i = 0; i < result.length;i++){
//     for(let j = 0; j < result[i].length;j++){
//         if(i  === j){
//             console.log(result[i][j])
//         }
//     }
// }

// Problem: Sum of Cubes of Digits
// Problem Statement
// Take an integer input and calculate the sum of the cubes of its digits.

// Input
// A single integer n where 0 ≤ n ≤ 10^6

// Output
// Print the sum of cubes of all the digits of the number.

// Examples
// Example 1:

// Input:
// 123

// Output:
// 36
// Explanation: 1^3 + 2^3 + 3^3 = 1 + 8 + 27 = 36

// let num = 123;
// let cubes = 0
// while(num > 0){
//     let digit = num % 10
//     cubes += digit**3
//     num = Math.floor(num/10)
// }

// console.log(cubes)

//Prime Numbers Range

// let n = 8;
// function isprime(n) {
//   if (n < 2) return false;
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// for (let i = 1; i < n; i++) {
//   if (isprime(i)) {
//     console.log(i);
//   }
// }


// Input
// A single integer n (1 ≤ n ≤ 50) representing the number of rows in the upper half of the diamond (including the middle row).

// Output
// Print the hollow diamond pattern made of 2n - 1 rows.

// Example
// Input: 4

// Output:

//    *
//   * *
//  *   *
// *     *
//  *   *
//   * *
//    *


let n = 10
for(let i = 1;i <= n;i++){
    let str = ' '.repeat(n-i)

    if(i === 1){
        str += '*'
    }
    else{
        str += '*'
        str += ' '.repeat((i-1)* 2 -1)
        str += '*'
    }
    console.log(str)
}

for(let i = n-1;i > 0;i--){
    let str = ' '.repeat(n-i)

    if(i === 1){
        str += '*'
    }
    else{
        str += '*'
        str += ' '.repeat((i-1)* 2 -1)
        str += '*'
    }
    console.log(str)
}