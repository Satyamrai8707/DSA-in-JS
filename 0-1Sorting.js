// Example 1
// Input

// 15
// 0 0 0 1 1 1 1 0 1 1 0 0 1 0 1
// Output

// 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1


// ✅ Approach 1: Counting 0’s
// function Sorting01(n,arr){
//     let countZero = 0
//     for(let i = 0;i < n;i++){
//         if(arr[i] === 0){
//             countZero++
//         }
//     }

//     let result = []
//     for(let i = 0; i < countZero;i++){
//         result.push(0)
//     }
//     for(let i = countZero;i < n;i++){
//         result.push(1)
//     }
//     return result
// }

//✅ Approach 2: Two Pointers (In-place)

// function Sorting01(n,arr){
//     let left = 0
//     let right = n-1
//     while(left < right){
//         if(arr[left] === 0){
//             left++
//         }
//         else if(arr[right] === 1){
//             right--
//         }
//         else{
//             let temp = arr[left]
//             arr[left] = arr[right]
//             arr[right] = temp
//             left++
//             right--
//         }
//     }
//     return arr
// }




let n = 15
let arr = [0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1]
console.log(Sorting01(n,arr))