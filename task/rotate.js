// Problem Description
// Given an array of n integers and an integer k, rotate the array k times in clockwise order.

// Input format
// There are three lines of input.

// First line contains integer n.

// Next line contains n space separated integers.

// Next line contains the value of k.

// Output format
// Print the rotated array.

// Sample Input 1
// 5

// 1 2 3 4 5

// 2

// Sample Output 1
// 4 5 1 2 3

// Explanation 1
// After first rotation array will be 5 1 2 3 4

// After second rotation array will be 4 5 1 2 3

// Constraints
// 1 <= n


//t=O(n) and s=O(n)
// function rotateClockwise(n,r){
//     let arr=[]
//     let cuy=[]

//     for(let i=1;i<=n;i++){
//      arr.push(i)
//     }
   
//     for(let i=0;i<r;i++){
//      cuy.push(arr.pop())
//     }
//     newarr=[...cuy.reverse(),...arr]
//     console.log(newarr);
// }
// space complexity O(1)
function rotateClockwise(n, r) {
    let arr = [];

    // Create the array with elements from 1 to n
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }

    // Calculate the effective rotation index
    let rotationIndex = n - (r % n); // Handle large rotations efficiently

    // Rotate the array in-place using splice
    arr.unshift(...arr.splice(rotationIndex));

    console.log(arr);
}

rotateClockwise(12,2);


// O(n)
// static int[] cyclicRotation(int n, int[] arr, int k) {
//     int[] newArr = new int[n];

//     int j = n-k;

//     for(int i = 0; i < n; i++){ 
//         if(j == n){
//             j = 0;
//         }
//         newArr[i] = arr[j];
//         j++;
//     }
//     return newArr;
// }