// Problem: Longest Palindromic Subarray
// Problem Statement:
// Given an array of integers arr, find the length of the longest contiguous subarray that forms a palindrome.
// A subarray is a contiguous part of the array. A palindrome is a sequence that reads the same backward as forward.

// Constraints:

// 1 ≤ arr.length ≤ 10⁴

// -10⁵ ≤ arr[i] ≤ 10⁵

// Example 1:

// text
// Input: arr = [2, 3, 5, 3, 2, 2]
// Output: 5
// Explanation: The subarray [2, 3, 5, 3, 2] is a palindrome of length 5.
// Example 2:

// text
// Input: arr = [1, 2, 3, 4, 5]
// Output: 1
// Explanation: No palindrome longer than length 1.


function longestPalindromicSubarray(arr) {
    let maxLength = 1;
    for(let centre = 0;centre < arr.length;centre++){
        //odd numbers
        let left = centre
        let right = centre;
        while(left >= 0 && right < arr.length && arr[left] === arr[right]){
            maxLength = Math.max(maxLength,right-left+1)
            left--;
            right++;

        }
        //even numbers
        left = centre;
        right = centre + 1;
        while(left >= 0 && right < arr.length && arr[left] === arr[right]){
            maxLength = Math.max(maxLength,right-left+1)
            left--;
            right++;
        }
    }
    return maxLength;

}
const arr = [2,2,2,3,3,3,4,3,3,3,2,2,2,2,3,4,5,,3,2,4,2];
console.log("Longest Palindromic Subarray Length:", longestPalindromicSubarray(arr)); // Output:

console.log(longestPalindromicSubarray([2, 3, 5, 3, 2, 2])); // Output: 5


// function isPalindrome(arr) {
//     let left = 0
//     let right = arr.length - 1;
//     while (left < right) {
//         if (arr[left] !== arr[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }

// console.log(isPalindrome([2,3,4,5,4,3,2])); 