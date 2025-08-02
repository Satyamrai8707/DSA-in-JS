const arr = [1, 2, 2, 2, 2, 4, 5, 5];
const target = 2;

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let i = 1;
  while (left <= right) {
    console.log("Step number :", i++);
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch(arr, target));

function firstOccurence(arr, target) {
  let left = 0,
    right = arr.length - 1;
  let found = -1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] === target) {
      found = mid;
      right = mid - 1;
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return found;
}

console.log(firstOccurence(arr, target));

function lastOccurence(arr, target) {
    let left = 0,
      right = arr.length - 1;
    let found = -1;
    while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2);
      if (arr[mid] === target) {
        found = mid;
        left = mid + 1;
      } else if (target < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return found;
  }
  
  console.log(lastOccurence(arr, target));


  let arr1 = [1,2,3,4,5]
  let target1 = 3
  let result = -1

  function GreaterThanTarget(arr1, target1) {
    let left = 0;
    let right = arr1.length - 1;
    while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2);
      if(arr[mid] > target1){
        result = arr1[mid]
        right = mid-1
      }
      else{
        left = mid+1

      }
  
    }
    return result;
  }
  
  console.log(GreaterThanTarget(arr1, target1));