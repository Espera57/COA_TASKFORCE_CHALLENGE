function hasSubarrayWithSum(arr, target) {
    let left = 0;
    let currentSum = 0;

    for (let right = 0; right < arr.length; right++) {
        currentSum += arr[right];
        
        // Shrink the window from the left if currentSum exceeds target
        while (currentSum > target && left <= right) {
            currentSum -= arr[left];
            left++;
        }
        
        // to Check if the currentSum is equal to target
        if (currentSum === target) {
            return true;
        }
    }

    return false;
}
// example
const arr = [3, 4, -1, 5, 6, -2, 7, 2];
const target = 10;
console.log(hasSubarrayWithSum(arr, target));  // Output: true
