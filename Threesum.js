

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