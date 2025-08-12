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

console.log(topScores);

//This is an ONLINE algorithm

//Optimal use cases

//small arrays (n<50)
//nearly sorted data
//online algorithms
//memory constrained elements
