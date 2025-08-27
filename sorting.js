//1. Bubble Sorting

let arr = [3, 2, 5, 7, 1];
function Bubblesorting(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    console.log(arr);
  }
}
// Bubblesorting(arr);

let arr1 = [1, 2, 3, 4, 5];
function Bubblesorting(arr1) {
  for (let i = 0; i < arr1.length; i++) {
    let swap = false;
    for (let j = 0; j < arr1.length - 1 - i; j++) {
      if (arr1[j] > arr1[j + 1]) {
        [arr1[j], arr1[j + 1]] = [arr1[j + 1], arr1[j]];
        swap = true;
      }
    }
    console.log(arr1);

    if (!swap) {
      break;
    }
  }
}
// Bubblesorting(arr1);

//2. BubbleCocktail Sorting

let arr2 = [1, 3, 2, 4, 5, 6, 7];
function BubbleCocktail(arr2) {
  let n = arr2.length;
  while (n > 1) {
    let newN = 0;
    for (let j = 0; j < n - 1; j++) {
      if (arr2[j] > arr2[j + 1]) {
        [arr2[j], arr2[j + 1]] = [arr2[j + 1], arr2[j]];
        newN = j + 1;
      }
    }
    n = newN;
  }
  console.log(arr2);
}

// BubbleCocktail(arr2);

let arr3 = [2, 3, 4, 5, 1];
let n = arr3.length;
function recursionBubbleSort(arr3, n) {
  if (n === 1) return arr3;

  for (let i = 0; i < n - 1; i++) {
    if (arr3[i] > arr3[i + 1]) {
      [arr3[i], arr3[i + 1]] = [arr3[i + 1], arr3[i]];
    }
  }
  return recursionBubbleSort(arr3, n - 1);
}
// console.log(recursionBubbleSort(arr3,n))

//2. Insertion Sort
let arr4 = [1, 10, 23, 5, 2];

function InsertionSort(arr4) {
  for (let i = 1; i < arr4.length; i++) {
    let key = arr4[i];
    let j = i - 1;
    while (j >= 0 && arr4[j] > key) {
      arr4[j + 1] = arr4[j];
      j--;
    }
    arr4[j + 1] = key;
  }
  return arr4;
}
// console.log(InsertionSort(arr4))

let arr5 = [1, 10, 23, 5, 2];

function InsertionSort(arr5) {
  for (let i = 1; i < arr5.length; i++) {
    let key = arr5[i];
    let j = i - 1;
    // while(j >= 0 && arr5[j] > key){
    //   arr5[j+1] = arr5[j]
    //   j--
    // }
    // arr5[j+1] = key
    let left = 0,
      right = i,
      mid;
    // using binary searching
    while (left < right) {
      mid = Math.floor(right + (left - right) / 2);
      if (arr5[mid] <= key) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    //shifting
    for (let j = i - 1; j >= left; j--) {
      arr5[j + 1] = arr5[j];
    }
    arr5[left] = key;
  }
  return arr5;
}
// console.log(InsertionSort(arr5));

//recursive method

// let arr4 = [1,10,23,5,2]

function InsertionSortRecursive(arr4, n = arr4.length) {
  if (n <= 1) {
    return arr4;
  }
  InsertionSortRecursive(arr4, n - 1);

  let last = arr4[n - 1];
  let j = n - 2;
  while (j >= 0 && arr4[j] > last) {
    arr4[j + 1] = arr4[j];
    j--;
  }
  arr4[j + 1] = last;
  return arr4;
}

// Question 1: Real-time Leaderboard System
// Scenario: You're building a gaming leaderboard that receives score updates in real-time. New scores arrive frequently, and you need to maintain a sorted top-5 list efficiently.

// Problem: Implement a leaderboard system that can handle incoming scores and maintain sorted order.

let topScores = []; //update this array making sure only 5 elements are here that are top scores

function addScore(score) {
  let j = topScores.length - 1;

  //shifting
  while (j >= 0 && topScores[j] < score) {
    topScores[j + 1] = topScores[j];
    j--;
  }

  topScores[j + 1] = score;

  if (topScores.length > 5) {
    topScores = topScores.slice(0, 5);
  }

  // console.log(topScores)
}
addScore(10);
addScore(20);
addScore(100);
addScore(60);
addScore(80);
addScore(70);

addScore(30);
addScore(40);
addScore(50);
addScore(90);

// console.log(topScores);

//This is an ONLINE algorithm

//Optimal use cases

//small arrays (n<50)
//nearly sorted data
//online algorithms
//memory constrained elements

//Selection Sort
let arr6 = [3, 2, 5, 7, 1];
function SelectionSort(arr6) {
  for (let i = 0; i < arr6.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr6.length; j++) {
      if (arr6[j] < arr6[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr6[i], arr6[min]] = [arr6[min], arr6[i]];
    }
  }
  return arr6;
}
console.log(SelectionSort(arr6));

// let num = [3, 12, 5, 7, 1];
// num.sort((a, b) => a - b);
// let a = num.sort()
// console.log(typeof a);
// console.log(num);

//merge sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

let arr7 = [3, 2, 5, 7, 1];
console.log(mergeSort(arr7));

//quick sort
function quickSort(array) {
  if (array.length <= 1) return array;
  let pivot = array[array.length - 1];
  let left = [],
    right = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const array = [34, 7, 23, 32, 5, 62];
console.log("Original:", array);
console.log("Sorted:", quickSort(array));

const products = [
  {
    name: "iPhone 14",
    price: 79900,
    rating: 4.5,
    category: "Electronics",
    inStock: true,
  },
  {
    name: "Samsung TV",
    price: 45000,
    rating: 4.2,
    category: "Electronics",
    inStock: false,
  },
  {
    name: "Nike Shoes",
    price: 8999,
    rating: 4.7,
    category: "Fashion",
    inStock: true,
  },
  {
    name: "Adidas T-shirt",
    price: 2499,
    rating: 4.0,
    category: "Fashion",
    inStock: true,
  },
  {
    name: "MacBook Pro",
    price: 199900,
    rating: 4.8,
    category: "Electronics",
    inStock: true,
  },
];

//sort by stock status -> rating(descending) -> price (ascending)

function sortProducts(products) {
  return products.sort((a, b) => {
    if (a.inStock !== b.inStock) {
      return b.inStock - a.inStock;
    }
    if (b.rating !== a.rating) {
      return b.rating - a.rating;
    }

    return a.price - b.price;
  });
}
// console.log(sortProducts(products));

const employees = [
  { department: "HR", name: "Anjali", age: 32 },
  { department: "Tech", name: "Aman", age: 28 },
  { department: "HR", name: "Rahul", age: 25 },
  { department: "Tech", name: "Sneha", age: 24 },
  { department: "Finance", name: "Kunal", age: 30 },
  { department: "Tech", name: "Divya", age: 28 },
];
// Sort by department -> age (descending)

function sortEmployees(employees) {
  return employees.sort((a, b) => {
    if (a.department < b.department) {
      return -1;
    }
    if (a.department > b.department) {
      return 1;
    }

    return a.age - b.age;
  });
}
console.log(sortEmployees(employees));

const friends = [
  { name: "John Doe", lastActive: 1643723400 },
  { name: "Jane Doe", lastActive: 1643723500 },
  { name: "Alice", lastActive: 1643723300 },
  { name: "Bob", lastActive: 1643723600 },
];

// Sort by last active time (ascending)
function sortFriends(friends) {
  return friends.sort((a, b) => a.lastActive - b.lastActive);
}
console.log(sortFriends(friends));

let num = [3, 12, 5, 7, 1];
num.sort((a, b) => a - b); // ascending order
// num.sort((a, b) => b - a); // descending order
console.log(num);

let fruits = ["banana", "apple", "cherry", "date"];
// fruits.sort((a, b) => a.localeCompare(b)); // ascending order
fruits.sort((a, b) => b.localeCompare(a)); // descending order
console.log(fruits);

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

// Sort by age (ascending)
people.sort((a, b) => a.age - b.age);
console.log(people);

//sort by name (descending)

people.sort((a, b) => b.name.localeCompare(a.name));
console.log(people);

//sort people by length of their name (ascending)
people.sort((a, b) => a.name.length - b.name.length);
console.log(people);

const students = [
  { name: "Arjun", grade: "A", marks: 92, attendance: 95, subject: "Math" },
  { name: "Priya", grade: "A", marks: 88, attendance: 98, subject: "Science" },
  { name: "Rohit", grade: "B", marks: 78, attendance: 85, subject: "Math" },
  { name: "Kavya", grade: "A", marks: 92, attendance: 90, subject: "Math" },
  { name: "Amit", grade: "C", marks: 65, attendance: 80, subject: "Science" },
];

// Sort by grade (A, B, C) -> marks (descending) -> attendance (descending)

function sortStudents(students) {
  return students.sort((a, b) => {
    if (a.grade !== b.grade) {
      return a.grade.localeCompare(b.grade);
    }
    if (b.marks !== a.marks) {
      return b.marks - a.marks;
    }
    return b.attendance - a.attendance;
  });
}
console.log(sortStudents(students));
