// iven an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

function plusMinus(arr) {
     let length = arr.length;
    
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    
    for (let i = 0; i < length; i++) {
        if (arr[i] > 0) {
            positiveCount++;
        } else if (arr[i] < 0) {
            negativeCount++;
        } else {
            zeroCount++
        }
    }
    console.log((positiveCount / length).toFixed(6));
    console.log((negativeCount / length).toFixed(6));
    console.log((zeroCount / length).toFixed(6));
}
