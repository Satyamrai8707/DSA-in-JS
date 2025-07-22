// create a function where i give a number in positive but its return a value of string from right side without use slice

function getStringFromRight(str, num) {
    let result = '';
    if(typeof num !== 'number' || num < 0 || num > str.length) {
        return 'Its not a valid number';
    }
    if( typeof str !== 'string' || str.length === 0) {
        return 'Its not a valid string';
    }


    for (let i = str.length - num; i < str.length; i++) {
        result += str.at(i);
    }
    return result;


    // return str.slice(-num);

}

// Example usage:
console.log(getStringFromRight("Hello, World!",1)); // Output: "orld!"


// make a repaceAll function that replaces all occurrences of a substring in a string without using the built-in replaceAll method

function replaceAll(str,find,replaceWord){
    let word = str.split(' ')
    for(let i = 0; i < word.length; i++) {
        if (word[i] === find) {
            word[i] = replaceWord;
        }
    }
    return word.join(' ');

}

// Example usage:
console.log(replaceAll("Hello World I am from there", "World", "India")); 


// Capitalize first word without used of built-in methods

function capitalizeFirstWord(str) {

    // let result = str.split(' ');
    // for(let i = 0; i < result.length; i++) {
    //     if (i === 0) {
    //         result[i] = result[i][0].toUpperCase() + result[i].slice(1);
    //     }
    // }
    return str.charAt(0).toUpperCase() + str.slice(3);
}

console.log(capitalizeFirstWord("hello world")); 

// Capitalize first letter of each word without used of built-in methods
function capitalizeFirstLetterOfEachWord(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

console.log(capitalizeFirstLetterOfEachWord("hello world this is a test")); 

// capitalize all letters of a string without used of toUpperCase method

// function capitalizeAllLetters(str) {
//     let result = ''
//     for(let i = 0; i < str.length; i++) {
//         let charCode = str.charCodeAt(i);
//         // Check if the character is a lowercase letter
//         if (charCode >= 97 && charCode <= 122) {
//             // Convert to uppercase by subtracting 32 from the char code
//             result += String.fromCharCode(charCode - 32);
//         } else {
//             result += str[i]; // Keep the character as is if it's not lowercase
//         }
//     }
//     return result;
// }

// console.log(capitalizeAllLetters("hello world"));


// function toUpperCase(str){
//     let result = ''
//     for(let i = 0; i < str.length; i++) {
//         let ascii = str.charCodeAt(i)
//         if( ascii >= 97 && ascii <= 122) {
//             result += String.fromCharCode(ascii -32)
//         }
//         else{
//             result += str[i];
//         }
//     }
//     return result;
// }
// console.log(toUpperCase("hello world")); 

function toLowerCase(str){
    let result = ''
    for(let i = 0; i < str.length; i++) {
        let ascii = str.charCodeAt(i)
        if( ascii >= 65 && ascii <= 90) {
            result += String.fromCharCode(ascii + 32)
        }
        else{
            result += str[i];
        }
    }
    return result;
}
console.log(toLowerCase("HELLO WORLD"));

//trim()

const str = "   Hello World!   ";
console.log(str.trim());

//trimStart

const str1 = "   Hello World!   ";
console.log(str1.trimStart());

//trimEnd

const str2 = "   Hello World!   ";
console.log(str2.trimEnd());

//padStart
const str3 = "5";
console.log(str3.padStart(3, '0')); // Output: "005"

//padEnd
const str4 = "5";
console.log(str4.padEnd(3, '0')); // Output: "500"


// Remove extra spaces from a string without using built-in methods
let string = "Hello      World    how          are       you?"
let words = string.split(' ')
let removedSpaces = words.filter(word=> word !== '').join(' ')
console.log(removedSpaces); 


//String searching methods
let string2 = "Hello world how are you I am from another world";
console.log(string2.indexOf("world")); // Output: 6
console.log(string2.lastIndexOf("world")); // Output: 30

// count the number of occurrences of a substring in a string without using built-in methods
let string3 = "Hello world how are you I am from another world";
console.log(string3.split("world").length - 1); // Output: 2

//startsWith() and endsWith() methods
let string4 = "Hello world how are you I am from another world";
console.log(string4.startsWith("Hello",0)); // Output: true
console.log(string4.endsWith("world",11)); // Output: true

//split(separator, limit) method

// concat(str1,str2,....) method

// match(regex) method

let newone = "Hello world 123"
console.log(newone.match(/\d+/g)); // Output: ["123"]

// repeat(count) method
let repeatString = "Hello";
console.log(repeatString.repeat(3)); // Output: "HelloHelloHello"