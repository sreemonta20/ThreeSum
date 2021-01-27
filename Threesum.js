/**Have the function Threesum(arr) take the array of integers stored in arr, and determine if any three distinct numbers
 * (excluding the first element) in the array can sum up to the first element in the array. For example if arr is [8, 2, 1, 4, 5, -1, -1] then there are actually three sets of triplets that sum to the number 8: [2, 1, 5], [4, 5, 1] and [10, -1, -1]. Your program should return the string true if 3 distinct elements sum to the first element, otherwise your program should return the string false. The input array will always contain at least 4 elements.
 * 
 * Examples
 * 
 * Input: [10, 2, 3, 1, 5, 3, 1, 4, -4, -3, -2]
 * Output: true
 * 
 * Input: [12, 3, 1, -5, -4, 7]
 * Output: false
 */

 function ThreeSum(arr){

    let targetelement = arr[0];
    arr.sort((a, b) => a - b);
    let left, right;

    for(let i = 0; i < arr.length; i++){
        const first = arr[i];
        left = i + 1;
        right = arr.length - 1;
        while(left < right){
            const second = arr[left];
            const third = arr[right];
            const sum = first + second + third;
            if(sum === targetelement){
                return "true";

            }
            else if(sum > targetelement){
                right--;
            }
            else if(sum < targetelement){
                left++;
            }
        }
    }
    return "false";
 }

 console.log(ThreeSum([10, 2, 3, 1, 5, 3, 1, 4, -4, -3, -2]));
 console.log(ThreeSum([12, 3, 1, -5, -4, 7]));