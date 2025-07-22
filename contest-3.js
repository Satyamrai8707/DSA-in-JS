// Problem 1: Delete All Odd Numbers from an Array
// You are given an array of integers. Your task is to delete all odd numbers from the array and print the remaining elements.

// Input
// First line contains a single integer n (1 ≤ n ≤ 1000) - the size of the array.
// Second line contains n space-separated integers (each in the range -10^5 to 10^5).
// Output
// Print all even numbers in the array, separated by a space.
// If there are no even numbers, print -1.
// Examples
// Example 1:

// Input:
// 5
// 1 2 3 4 5

// Output:
// 2 4
// Example 2:

// Input:
// 4
// 1 3 5 7

// Output:
// -1

// let arr = [1, 2, 3, 4, 5];
// let n = arr.length;

// let even = [];
// for (let i = 0; i < n; i++) {
//   if (arr[i] % 2 === 0) {
//     even.push(arr[i]);
//   }
// }
// if (even.length > 0) {
//   console.log(even.join(" "));
// } else {
//   console.log(-1);
// }

// Problem 2: Variable Hoisting and Scope
// let a = 10;
// var b = 20;
// function hello() {
//   console.log("1", a); // ReferenceError: Cannot access 'a' before initialization
//   console.log("2", b); // 2 undefined
//   let a = 50;
//   var b = 100;

//   console.log("3", a); // 3 50
//   console.log("4", b); // 4 100
// }
// hello();

// Problem 3:
// Check if array is Increasing
// Given an array arr with n positive integers check whether it is strictly increasing or not.

// Input Format
// The first line contains the number of test cases.

// The second line of input contains the integer n.

// The last line contains n spaced integers.

// Output Format
// Print "YES" without quotes if the array is strictly increasing, else print "NO".

// Example 1
// Input

// 1
// 4
// 2 4 1 3
// Output

// NO
// Explanation

// '1', which occurs after '4' is less than '4'. Thus, the array is not strictly increasing.

// Example 2
// Input

// 1
// 6
// 1 2 3 4 5 6
// Output

// YES
// Explanation

// All the elements of the array are in increasing order.

// let testCases = 1;
// let n = 4;
// let arr = [1,2,1,5];

// function isStrictlyIncreasing(arr) {
//     for(let i = 0; i < arr.length;i++){
//         if(arr[i] >= arr[i+1]){
//             return "NO"
//         }

//     }
//     return "YES";
// }

// console.log(isStrictlyIncreasing(arr)); // Output: NO


// Problem 4: Subarray Problem 1
// Given an array arr[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10} of size 10. Find whether there exists a sub-array of size n and sum s, where n and s both are user input values.

// Print YES if there exists a subarray of size n and sum s in the array arr else print NO

// Input Format
// The first and only line of input contains n and s

// Output Format
// Print either “YES” or “NO”

// Example 1
// Input

// 3 6
// Output

// YES
// Explanation

// The sum of elements at indices 0, 1,2 add upto 6

// Example 2
// Input

// 4 10
// Output

// YES


let arr = [1,2,3,4,5,6,7,8,9,10];
let n = 3, s= 6

function hasSubarrayWithSum(arr, n, s) {
    for (let i = 0; i <= arr.length; i++) {
        let sum = 0;
        for (let j = i; j < i + n; j++) {
            sum += arr[j];
        }
        if (sum === s) {
            return "YES";
        }
    }
    return "NO";
}
console.log(hasSubarrayWithSum(arr, n, s)); // Output: YES

