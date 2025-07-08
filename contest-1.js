//1.
// Problem: Convert Days to Years, Months, and Days
// Problem Statement
// Write a program that takes a number of days as input and converts it into years, months, and remaining days. Assume:

// 1 year = 365 days
// 1 month = 30 days
// Input
// A single integer d (1 ≤ d ≤ 10000) representing the number of days.

// Output
// Print the result in the format:

// X years, Y months, Z days
// Examples
// Example 1: Input:

// 400
// Output:

// 1 years, 1 months, 5 days
// Example 2: Input:

// 800
// Output:

// 2 years, 2 months, 10 days

// function convertDaysToYearsMonthsDays(d) {
//   let years = Math.floor(d / 365);
//   let remaining = d % 365;
//   let months = Math.floor(remaining / 30);
//   let days = remaining % 30;
//   return `${years} years, ${months} months, ${days} days`;
// }
// console.log(convertDaysToYearsMonthsDays(400));
// console.log(convertDaysToYearsMonthsDays(800));

//2.
// Valid Date
// Determine whether a given calendar date is valid or invalid.

// Rules
// Month must be between 1 and 12.

// Day must fit the month and year:

// 31-day months: January, March, May, July, August, October, December (1, 3, 5, 7, 8, 10, 12)

// 30-day months: April, June, September, November (4, 6, 9, 11)

// February (2)

// 29 days in a leap year
// 28 days otherwise
// Leap year criteria

// Divisible by 4 and not divisible by 100, unless also divisible by 400
// Input
// Three integers (each on its own line):

// day
// month
// year
// Output
// Print exactly one of:

// Valid
// or

// Invalid
// Constraints
// 1 ≤ day ≤ 31
// 1 ≤ month ≤ 12
// 1 ≤ year ≤ 10^5
// Examples
// Example 1
// Input

// 29
// 2
// 2024
// Output

// Valid
// Example 2
// Input

// 31
// 4
// 2023
// Output

// Invalid

// function isLeapyear(year){
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
// }
// function isValidDate(day,month,year){
//     if(month < 1 || month > 12) return "Invalid"
//     if(day < 1 || day > 31) return "Invalid"
//     let daysinMonth;
//     switch(month){
//         case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//             daysinMonth = 31
//             break
//         case 4: case 6: case 9: case 11:
//             daysinMonth = 30
//             break
//         case 2:
//             daysinMonth = isLeapyear(year) ? 29 : 28
//             break
//         default:
//             return "Invalid"
//     }
//     return day <= daysinMonth ? "Valid" : "Invalid"
// }

// // let day = 29;
// // let month = 2;
// // let year = 2024;

// let day = 31
// let month = 4
// let year = 2023

// console.log(isValidDate(day, month, year)); // Output: Valid

//3.
// E-commerce company "ShopEasy" has an online shopping platform that allows users to purchase products from various categories. The company uses JavaScript to implement business logic on the client-side. One of the features of the platform is to offer discounts to customers based on their purchase history. The discounts are calculated using a complex expression involving multiple conditions and operators.

// You are tasked with debugging an issue in the discount calculation logic, where the expression const result = 5 + 10 * 2 > 28 && (true || false) is not producing the expected output. Your goal is to evaluate this expression and explain step-by-step how you would arrive at the final result.

// Assume that you have access to a JavaScript console where you can write code and execute it. You need to provide a clear explanation of how you would approach this problem, including any intermediate calculations or evaluations.

// Please provide your approach to solve this problem.

// firstly  take 10 * 2 ==> 20
//then 5 + 20 ==> 25
//then 25 > 28 && (true || false)
// 25 > 28 ===> false
// then false && (true || false)
// false && true
// then false
//final const result = false

//4.
// A social media company, "ConnectMe", wants to develop a feature to recommend the most popular post of the day based on the number of likes, comments, and shares. The feature should be able to take three distinct numbers as input, representing the number of likes, comments, and shares respectively, and return the greatest of the three numbers. The company wants to implement this feature using both ternary operators and switch-case statements in JavaScript.

// Write a JavaScript code snippet that takes three distinct numbers as input and returns the greatest of the three numbers using both ternary operators and switch-case statements.

// Assume that the input numbers are stored in variables likes, comments, and shares.

// You can use the following markdown for writing your code:

// let likes = 1200;
// let comments = 805;
// let shares = 150;

// let maxUsingTernary = (likes > comments) ? (likes > shares ? likes : shares) : (comments > shares ? comments : shares)
// console.log("Greatest using ternary:", maxUsingTernary);

//using switch case

// let maxUingSwitch;
// if (likes > comments && likes > shares) {
//   maxUingSwitch = likes;
// } else if (comments > likes && comments > shares) {
//   maxUingSwitch = comments;
// } else {
//   maxUingSwitch = shares;
// }
// switch (maxUingSwitch) {
//   case likes:
//     console.log("greatest using switch ", likes);
//     break;
//   case comments:
//     console.log("greatest using switch ", comments);
//     break;
//     default:
//         console.log('greatest using switch ',shares)
// }
