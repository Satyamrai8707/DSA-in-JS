// Factorial

// Given an integer n, find its factorial using recursion.
// Test Cases:
// Input: 5
// Output: 120

// Input: 0
// Output: 1

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}
// console.log(factorial(5));

// Sum of Natural Numbers

// Given n, find sum of numbers from 1 to n.
// Test Cases:
// Input: 5
// Output: 15

// Input: 10
// Output: 55

function NaturalNumber(n) {
  if (n === 1) return 1;
  return n + NaturalNumber(n - 1);
}
// console.log(NaturalNumber(10));

// Fibonacci Number

// Given n, find the n-th Fibonacci number (0-indexed).
// Test Cases:
// Input: 6
// Output: 8

// Input: 9
// Output: 34

function Fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}
// console.log(Fibonacci(9));

// Count Digits

// Given an integer n, count the number of digits using recursion.
// Test Cases:
// Input: 12345
// Output: 5

// Input: 0
// Output: 0

function count(num) {
  if (num === 0) return 0;
  return 1 + count(Math.floor(num / 10));
}
// console.log(count(12345));

// Print Numbers from 1 to N and N to 1

// Print numbers from 1 to N in increasing order, then decreasing order using recursion.
// Test Cases:
// Input: 3
// Output: 1 2 3 3 2 1

function printnumber(n, i = 1) {
 console.log(i);
 if(i < n){
    printnumber(n,i+1)
 }
 console.log((i));

}

// printnumber(3)


// Sum of Array Elements

// Given an array, find the sum of its elements using recursion.
// Test Cases:
// Input: [1, 2, 3, 4]  
// Output: 10  

// Input: [5, 5, 5]  
// Output: 15

function sumofarray(num, index = 0){
    if(index === num.length) return 0
    return num[index] + sumofarray(num,index+1)
}
// console.log(sumofarray([1,2,3,4]));



// Reverse a String

// Reverse a string using recursion.
// Test Cases:
// Input: "abcd"  
// Output: "dcba"  

// Input: "madam"  
// Output: "madam"

function ReverseString(str){
    if(str === '') return ''
    return ReverseString(str.slice(1))+ str[0]
}
// console.log(ReverseString('abcd'));


// Check Palindrome
// Check if a string is palindrome using recursion.
// Test Cases:
// Input: "racecar"  
// Output: true  

// Input: "hello"  
// Output: false

function palindrome(str,left = 0,right = str.length-1){

    if(left >= right) return true
    if(str[left] !== str[right]) {
        return false
    }
    return palindrome(str,left+1,right-1)
}

// console.log(palindrome('hello'));

// Binary Search
// Perform recursive binary search in a sorted array.
// Test Cases:
// Input: arr=[1, 3, 5, 7, 9], target=7  
// Output: 3  

// Input: arr=[2, 4, 6, 8, 10], target=5  
// Output: -1

let arr = [2,4,6,8,10], target = 10
function BinarySearch(arr,target,left = 0,right = arr.length-1){
    if(left > right) return -1
    let mid = Math.floor(left+(right-left)/2)
    if(arr[mid] === target){
        return mid
    }
    if(arr[mid] > target){
        return BinarySearch(arr,target,left,mid-1)
    }
    return BinarySearch(arr,target,mid+1,right)
}
// console.log(BinarySearch(arr,target));

// GCD using Euclid’s Algorithm

// Find the GCD of two numbers using recursion.
// Test Cases:
// Input: 48 18  
// Output: 6  

// Input: 101 103  
// Output: 1

function gcd(a,b){
    if(b === 0) return a
    return gcd(b, a%b)
}
// console.log(gcd(48,18));




// Tower of Hanoi

// Given n disks, print the steps to move all disks from source to destination using an auxiliary rod.
// Test Case (n=2):
// Move disk 1 from A to B  
// Move disk 2 from A to C  
// Move disk 1 from B to C

function towerhanoi(n,source,destination,auxiliary){
    if(n == 1){
        console.log(`Move disk 1 from ${source} to ${destination}`);
        return
    }
    towerhanoi(n-1,source,auxiliary,destination)
    console.log(`Move disk ${n} from ${source} to ${destination}`);
    towerhanoi(n-1,auxiliary,destination,source)
}
towerhanoi(3,'A','C','B')