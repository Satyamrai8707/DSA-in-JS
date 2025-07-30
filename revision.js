// make a splice method

// splice-> // The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function splice(arr, start, deleteCount, ...itemsToAdd) {
    // Check if start is out of bounds
    let newArray = []
   
    // array before the start index
    for(let i = 0; i < start; i++) {
        newArray.push(arr[i])
    }

    // new elements to add
    for(let i = 0; i < itemsToAdd.length; i++) {
        newArray.push(itemsToAdd[i])
    }
    // elements after the start index + deleteCount
    for(let i = start + deleteCount; i < arr.length; i++) {
        newArray.push(arr[i])
    }
    return newArray;


}
//remove 3 elements from index 2 and add 11, 12, 13
console.log("Splice",splice(arr,2,3,11,12,15)) // [1, 2, 11, 12, 13, 5, 6, 7, 8, 9, 10]


let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const squaredArray = arr2.map((num) => {
    return num ** 2;
}
);
console.log("Squared Array", squaredArray); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]


let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = arr3.filter((num) => {
    return num % 2 === 0;
});
console.log("Even Numbers", evenNumbers); // [2, 4, 6, 8, 10]

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = arr4.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log("Sum of Array", sum); // 55