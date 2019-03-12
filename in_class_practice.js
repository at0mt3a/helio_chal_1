let nums = [1, 3, 7, 29, 32]
let numOdds = []

// for(let i = 0 ; i < nums.length; i++) {
//     if (nums[i] % 2 === 1) 
//     numOdds.push(nums[i])
// }

let index = 0

while (index < 5) {
    if (nums[index] % 2 === 1) {
        numOdds.push(nums[index])
    } index ++
}

console.log(numOdds.length);

