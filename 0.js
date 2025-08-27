// console.log("hello world");

//1. SImple Interest & Compound Interest
 // SI = (P * R * T) / 100
 // CI = P * (1 + R / 100) ** T - P

//  let P = 1000;
//  let R = 5; 
//  let T = 2;
//  let SI = (P * R * T) / 100;
//  console.log(`Simple Interest: ${SI}`);

// let CI = P * (1 + R / 100) ** T - P;
// console.log(`Compound Interest: ${CI}`);



// let a = 10
// let b = 3
// let ans = parseInt(a / b);
// let total = a / b;
// let DecimalValue = total - ans
// console.log(`Total Division Result: ${total}`);
// console.log(`Integer Division Result: ${ans}`);
// console.log(`Decimal Division Result: ${DecimalValue}`);


// let n = 2885
// let lastDigit = n % 10;
// console.log(`Last Digit of ${n} is: ${lastDigit}`);

// let n = 24;
// let last = n % 10;
// let firstValue = (n - last)/10
// console.log(`first value is: ${firstValue}`);
// let first = n.toString().charAt(0);
// console.log(first);

// sum all digit
// let n = 124;
// // let sum = 0
// let lastDigit = n % 10;
// let last2Digit = parseInt(n / 10);
// let secondLast = last2Digit % 10;
// let first = parseInt(last2Digit / 10);
// sum = lastDigit + secondLast + first;
// console.log(`Sum of digits is: ${sum}`);
// console.log(`Last Digit is: ${lastDigit}`);
// console.log(`Second Last Digit is: ${secondLast}`);
// console.log(`First Digit is: ${first}`);
// console.log(`Sum of digits is: ${sum}`);

// n = 12.9876666
// let ans = n.toFixed(2);
// console.log(`Number with two decimal places: ${ans}`);
// n1 = 12.3
// let ans1 = n1.toFixed(6);
// console.log(`Number with two decimal places: ${ans1}`);

//17th June - Tuesday and whats day on 17th july

// let day = 17;
// let month = 6;

// let oneYear = 365;
// let extraYear = 10000 / oneYear
// let totalextraYear = Math.floor(extraYear);
// console.log(`Extra Year: ${totalextraYear}`); 

//swapping without temp variable
// let a = 20;
// let b = 10;
// a = a+b;
// b = a-b;
// a = a-b
// console.log(`a: ${a}, b: ${b}`);

//Take the cost price a and selling price b of a product, and print the profit obtained on the product.

// let  a = 120
// let b = 590
// let profit = b - a;
// console.log(`Profit is: ${profit}`);

// //Take a 3 digit number and print the reverse of that number

// let n = 987
// let lastDigit = n % 10;
// let last2Digit = parseInt(n / 10);
// let secondLast = last2Digit % 10;
// let first = parseInt(last2Digit / 10);
// let reverse = lastDigit * 100 + secondLast * 10 + first;
// console.log(`Reverse of ${n} is: ${reverse}`);



// let grade;

// function calculateGrade(grade){

// if( grade >= 90){
//     console.log("A+")
// }
// else if( grade >= 80){
//     console.log("A")
// }
// else if( grade >= 70 ){
//     console.log("B")
// }
// else if( grade >= 60){
//     console.log("C")
// }
// else{
//     console.log("F")
// }
// }

// calculateGrade(30)


// function checkDay(day){
//     if(day == 'Monday'){
//         console.log("Start of week")
//     }
//     else if((day == 'Wednesday') || (day == 'Tuesday') || (day == 'Thursday') || (day == 'Friday')){
//         console.log("Mid of week")
//     }
//     else{
//         console.log("End of week")
//     }
// }

// checkDay("Saturday")
// checkDay("Tuesday")
// checkDay("Sunday")
// checkDay("Monday")
// checkDay("Wednesday")
// checkDay("Thursday")
// checkDay("Friday")

function checkDaySwitch(day){
    switch(day){
         case "Monday":
        console.log("Start of week")
        break
         case "Tuesday":
        console.log("Mid of week")
        break
         case "Wednesday":
        console.log("Mid of week")
        break
         case "Thursday":
        console.log("Mid of week")
        break
         case "Friday":
        console.log("Mid of week")
        break
         case "Saturday":
        console.log("Mid of week")
        break
        default:
        console.log("End of week")
    }
}

// checkDaySwitch("Monday")
// checkDaySwitch("Tuesday")
// checkDaySwitch("Wednesday")
// checkDaySwitch("Thursday")
// checkDaySwitch("Friday")
// checkDaySwitch("Saturday")
// checkDaySwitch("Sunday")


// num = 1
// let result = (num % 2 == 0) ? "Even" : "Odd"
// console.log(result)


// user = {
//      isPaid : true,
//      hasId : true,
//      isUnderage : false
//      }


// function canBookticket(user){                                     
//     if(user.isPaid && user.hasId && !user.isUnderage){
//     return "You can book ticket"
// }
// else{
//     return "You can't book ticket"
// }
//  return (user.isPaid && user.hasId && !user.isUnderage) ? "You can book" : "You can not book"

// }

// let output = canBookticket({
//     isPaid: false,
//     hasId : true,
//     isUnderage: false
// })
                      
// console.log(output)                                                                 



// let input = prompt("Enter a number to check if it's even or odd:");
// let number = parseInt(input);
// if(number % 2 == 0){
//     console.log(`${number} is an even number.`);
// }
// else{
//     console.log(`${number} is an odd number.`);
// }



// let age = prompt("enter your age")
// switch(true){
//     case (age > 18):
//         "you are eligible"
//         break
//     default:
//         "you are not eligible"
// }


// let age = prompt("enter your age:")
// age > 18 ? "eligible":"not eligible"

//find prime number in between 1 to n

let num = 20
function isPrime(num) {
    if(num < 2) return false
    for(let i = 2;i * i <= num; i++) {
        if(num % i === 0) return false
    }
    return true
}
let primes = []
for(let i = 1; i <= num; i++) {
    if(isPrime(i)) {
        primes.push(i)
    }

}
console.log(`Prime numbers between 1 and ${num}: ${primes.join(', ')}`);
console.log(primes.length);

// Example usage
// let num = 20;
// console.log(`Prime numbers between 1 and ${num}:`);


