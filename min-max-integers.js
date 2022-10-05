// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
let sum = 0;
arr.sort(function(a, b){return a - b});
for (let i = 0;i<arr.length;i++) { 
sum += arr[i]; 
} 
console.log(sum - arr[arr.length - 1], sum - arr[0]);    

}
